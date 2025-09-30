"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, FileText, Settings } from "lucide-react"
import BudgetForm from "@/components/budget-form"
import BudgetHistory from "@/components/budget-history"

export default function PresupuestosPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("nuevo")

  const handleLogout = () => {
    // In a real app, you would call an API to logout
    router.push("/login")
  }

  return (
    <div className="container mx-auto px-4 py-4 sm:py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold">Generador de Presupuestos</h1>
        <Button variant="outline" onClick={handleLogout} size="sm" className="self-end sm:self-auto">
          <LogOut className="mr-2 h-4 w-4" />
          Cerrar Sesión
        </Button>
      </div>

      <Tabs defaultValue="nuevo" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 w-full max-w-md mb-4 sm:mb-8">
          <TabsTrigger value="nuevo">
            <FileText className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Nuevo Presupuesto</span>
            <span className="sm:hidden">Nuevo</span>
          </TabsTrigger>
          <TabsTrigger value="historial">
            <Settings className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Historial</span>
            <span className="sm:hidden">Historial</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="nuevo">
          <Card>
            <CardHeader className="py-4 sm:py-6">
              <CardTitle className="flex items-center text-xl">
                <FileText className="mr-2 h-5 w-5" />
                Crear Nuevo Presupuesto
              </CardTitle>
              <CardDescription>Complete el formulario para generar un presupuesto detallado.</CardDescription>
            </CardHeader>
            <CardContent>
              <BudgetForm />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="historial">
          <Card>
            <CardHeader className="py-4 sm:py-6">
              <CardTitle className="flex items-center text-xl">
                <Settings className="mr-2 h-5 w-5" />
                Historial de Presupuestos
              </CardTitle>
              <CardDescription>Consulte y gestione los presupuestos anteriores.</CardDescription>
            </CardHeader>
            <CardContent>
              <BudgetHistory />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
