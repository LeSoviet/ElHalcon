"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"
import { generatePDF } from "@/lib/pdf-generator"
import type { BudgetSummary } from "@/lib/budget-storage"

type PrintButtonProps = {
  budgetData?: any // Para presupuesto completo
  budgetSummary?: BudgetSummary // Para historial
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
}

export default function PrintButton({
  budgetData,
  budgetSummary,
  variant = "default",
  size = "default",
  className = "",
}: PrintButtonProps) {
  const [isPrinting, setIsPrinting] = useState(false)

  const handlePrint = async () => {
    try {
      setIsPrinting(true)

      // Si tenemos datos completos del presupuesto
      if (budgetData) {
        const doc = generatePDF(budgetData, true) // true = versión optimizada para impresión

        // Abrir en nueva ventana y imprimir
        const blob = doc.output("blob")
        const url = URL.createObjectURL(blob)
        const printWindow = window.open(url)

        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print()
            URL.revokeObjectURL(url)
          }
        }
      }
      // Si solo tenemos el resumen del historial
      else if (budgetSummary) {
        // Crear un PDF simplificado con los datos disponibles
        const doc = generatePDF(
          {
            clientName: budgetSummary.clientName,
            clientPhone: "",
            clientEmail: "",
            carMake: budgetSummary.carMake,
            carModel: budgetSummary.carModel,
            carYear: budgetSummary.carYear,
            carPlate: "",
            observations: "Presupuesto impreso desde el historial",
            partStatus: {},
            partsTotal: 0,
            budgetFee: 0,
            bodyworkLabor: 0,
            paintLabor: 0,
            totalCost: budgetSummary.totalCost,
            date: budgetSummary.date,
          },
          true,
        ) // true = versión optimizada para impresión

        // Abrir en nueva ventana y imprimir
        const blob = doc.output("blob")
        const url = URL.createObjectURL(blob)
        const printWindow = window.open(url)

        if (printWindow) {
          printWindow.onload = () => {
            printWindow.print()
            URL.revokeObjectURL(url)
          }
        }
      }
    } catch (error) {
      console.error("Error al imprimir:", error)
      alert("Hubo un error al preparar la impresión. Por favor intente nuevamente.")
    } finally {
      setIsPrinting(false)
    }
  }

  return (
    <Button onClick={handlePrint} variant={variant} size={size} className={className} disabled={isPrinting}>
      <Printer className={size === "icon" ? "h-4 w-4" : "mr-2 h-4 w-4"} />
      {size !== "icon" && (isPrinting ? "Imprimiendo..." : "Imprimir")}
    </Button>
  )
}
