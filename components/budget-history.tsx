"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Trash2, Search, RefreshCw } from "lucide-react"
import { getBudgets, deleteBudget, clearBudgetHistory, type BudgetSummary } from "@/lib/budget-storage"
import { formatCurrency } from "@/lib/utils"
import { generatePDF } from "@/lib/pdf-generator"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import PrintButton from "@/components/print-button"

export default function BudgetHistory() {
  const [budgets, setBudgets] = useState<BudgetSummary[]>([])
  const [filteredBudgets, setFilteredBudgets] = useState<BudgetSummary[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false)
  const [budgetToDelete, setBudgetToDelete] = useState<string | null>(null)

  // Load budgets on component mount
  useEffect(() => {
    loadBudgets()
  }, [])

  // Filter budgets when search term changes
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredBudgets(budgets)
      return
    }

    const lowerSearchTerm = searchTerm.toLowerCase()
    const filtered = budgets.filter(
      (budget) =>
        budget.clientName.toLowerCase().includes(lowerSearchTerm) ||
        budget.carMake.toLowerCase().includes(lowerSearchTerm) ||
        budget.carModel.toLowerCase().includes(lowerSearchTerm),
    )
    setFilteredBudgets(filtered)
  }, [searchTerm, budgets])

  const loadBudgets = () => {
    const loadedBudgets = getBudgets()
    setBudgets(loadedBudgets)
    setFilteredBudgets(loadedBudgets)
  }

  const handleDeleteBudget = (id: string) => {
    setBudgetToDelete(id)
    setIsDeleteDialogOpen(true)
  }

  const confirmDeleteBudget = () => {
    if (budgetToDelete) {
      deleteBudget(budgetToDelete)
      loadBudgets()
      setIsDeleteDialogOpen(false)
      setBudgetToDelete(null)
    }
  }

  const handleClearHistory = () => {
    setIsClearDialogOpen(true)
  }

  const confirmClearHistory = () => {
    clearBudgetHistory()
    loadBudgets()
    setIsClearDialogOpen(false)
  }

  const handleRegeneratePDF = (budget: BudgetSummary) => {
    try {
      // In a real app, you would retrieve the full budget data
      // Here we're just creating a simplified PDF with the available data
      const doc = generatePDF({
        clientName: budget.clientName,
        clientPhone: "",
        clientEmail: "",
        carMake: budget.carMake,
        carModel: budget.carModel,
        carYear: budget.carYear,
        carPlate: "",
        observations: "Presupuesto regenerado desde el historial",
        partStatus: {},
        partsTotal: 0,
        budgetFee: 0,
        bodyworkLabor: 0,
        paintLabor: 0,
        totalCost: budget.totalCost,
        date: budget.date,
      })

      // Save the PDF with the client+car+date format
      const fileName = `${budget.clientName || "Cliente"}-${budget.carMake || ""} ${budget.carModel || ""}-${formatArgentineDate(budget.date)}.pdf`
      doc.save(fileName)
    } catch (error) {
      console.error("Error regenerating PDF:", error)
      alert("Hubo un error al regenerar el PDF.")
    }
  }

  // Format date in Argentine format (day/month/year)
  const formatArgentineDate = (date: Date): string => {
    const day = date.getDate()
    const monthNames = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return `${day} de ${month} ${year}`
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between mb-4">
        <div className="relative w-full sm:w-auto flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input
            type="search"
            placeholder="Buscar por cliente o vehículo..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" onClick={loadBudgets} className="flex-1 sm:flex-none">
            <RefreshCw className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Actualizar</span>
            <span className="sm:hidden">Actual.</span>
          </Button>
          <Button variant="destructive" size="sm" onClick={handleClearHistory} className="flex-1 sm:flex-none">
            <Trash2 className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Limpiar Historial</span>
            <span className="sm:hidden">Limpiar</span>
          </Button>
        </div>
      </div>

      {filteredBudgets.length > 0 ? (
        <div className="border rounded-md overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Fecha</TableHead>
                <TableHead className="whitespace-nowrap">Cliente</TableHead>
                <TableHead className="whitespace-nowrap">Vehículo</TableHead>
                <TableHead className="text-right whitespace-nowrap">Total</TableHead>
                <TableHead className="text-center whitespace-nowrap">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredBudgets.map((budget) => (
                <TableRow key={budget.id}>
                  <TableCell className="whitespace-nowrap">{formatArgentineDate(budget.date)}</TableCell>
                  <TableCell>{budget.clientName || "Sin nombre"}</TableCell>
                  <TableCell>
                    {budget.carMake} {budget.carModel} {budget.carYear}
                  </TableCell>
                  <TableCell className="text-right whitespace-nowrap">{formatCurrency(budget.totalCost)}</TableCell>
                  <TableCell>
                    <div className="flex justify-center gap-2">
                      <PrintButton budgetSummary={budget} variant="ghost" size="icon" title="Imprimir" />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRegeneratePDF(budget)}
                        title="Descargar PDF"
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteBudget(budget.id)}
                        title="Eliminar"
                      >
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center py-8 border rounded-md">
          <p className="text-gray-500">No hay presupuestos en el historial</p>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Eliminar presupuesto?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción no se puede deshacer. El presupuesto será eliminado permanentemente del historial.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDeleteBudget}>Eliminar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Clear History Confirmation Dialog */}
      <AlertDialog open={isClearDialogOpen} onOpenChange={setIsClearDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>¿Limpiar todo el historial?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta acción eliminará todos los presupuestos guardados. Esta acción no se puede deshacer.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmClearHistory}>Limpiar historial</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
