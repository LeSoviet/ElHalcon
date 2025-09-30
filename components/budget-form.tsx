"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Mail, Share2 } from "lucide-react"
import { carParts } from "@/lib/car-parts"
import { formatCurrency } from "@/lib/utils"
import { generatePDF } from "@/lib/pdf-generator"
import { saveBudget } from "@/lib/budget-storage"
import PrintButton from "@/components/print-button"

type PartStatus = {
  [key: string]: {
    selected: boolean
    isNew: boolean | null // Changed to null for default unchecked state
    price: string
  }
}

export default function BudgetForm() {
  const [clientName, setClientName] = useState("")
  const [clientPhone, setClientPhone] = useState("")
  const [clientEmail, setClientEmail] = useState("")
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")
  const [carYear, setCarYear] = useState("")
  const [carPlate, setCarPlate] = useState("")
  const [observations, setObservations] = useState("")

  const [partStatus, setPartStatus] = useState<PartStatus>({})
  const [budgetPrice, setBudgetPrice] = useState("5000")
  const [bodyworkLabor, setBodyworkLabor] = useState("25000")
  const [paintLabor, setPaintLabor] = useState("20000")
  const [activeTab, setActiveTab] = useState("front")

  // Calculate totals - now using the actual prices entered by the user
  const calculatePartsTotal = useMemo(() => {
    let total = 0

    Object.entries(partStatus).forEach(([_, status]) => {
      if (status.selected) {
        total += Number(status.price) || 0
      }
    })

    return total
  }, [partStatus])

  const partsTotal = calculatePartsTotal
  const budgetFee = Number.parseFloat(budgetPrice) || 0
  const bodyworkLaborCost = Number.parseFloat(bodyworkLabor) || 0
  const paintLaborCost = Number.parseFloat(paintLabor) || 0
  const totalCost = partsTotal + budgetFee + bodyworkLaborCost + paintLaborCost

  const handlePartSelection = (partId: string, isSelected: boolean) => {
    setPartStatus((prev) => ({
      ...prev,
      [partId]: {
        selected: isSelected,
        // Both checkboxes unchecked by default (null)
        isNew: prev[partId]?.isNew || null,
        price: prev[partId]?.price || "0",
      },
    }))
  }

  const handlePartTypeChange = (partId: string, isNew: boolean | null) => {
    setPartStatus((prev) => ({
      ...prev,
      [partId]: {
        selected: prev[partId]?.selected || false,
        isNew,
        price: prev[partId]?.price || "0",
      },
    }))
  }

  const handlePartPriceChange = (partId: string, price: string) => {
    // Validar que sea un número
    if (price !== "" && isNaN(Number(price))) return

    setPartStatus((prev) => ({
      ...prev,
      [partId]: {
        selected: prev[partId]?.selected || false,
        isNew: prev[partId]?.isNew || null,
        price,
      },
    }))
  }

  const handleGeneratePDF = () => {
    try {
      const doc = generatePDF({
        clientName,
        clientPhone,
        clientEmail,
        carMake,
        carModel,
        carYear,
        carPlate,
        observations,
        partStatus,
        partsTotal,
        budgetFee,
        bodyworkLabor: bodyworkLaborCost,
        paintLabor: paintLaborCost,
        totalCost,
        date: new Date(),
      })

      // Save the budget to history
      saveBudget({
        id: Date.now().toString(),
        clientName,
        carMake,
        carModel,
        carYear,
        totalCost,
        date: new Date(),
      })

      // Save the PDF with new naming format: client+car+date
      const fileName = `${clientName || "Cliente"}-${carMake || ""} ${carModel || ""}-${formatArgentineDate(new Date())}.pdf`
      doc.save(fileName)
    } catch (error) {
      console.error("Error generating PDF:", error)
      alert("Hubo un error al generar el PDF. Por favor intente nuevamente.")
    }
  }

  const handleSendEmail = () => {
    if (!clientEmail) {
      alert("Por favor ingrese un email para enviar el presupuesto")
      return
    }

    // In a real app, this would send an email with the PDF
    alert(`Presupuesto enviado a ${clientEmail}`)
  }

  const handleShareWhatsApp = () => {
    if (!clientPhone) {
      alert("Por favor ingrese un número de teléfono para compartir por WhatsApp")
      return
    }

    // Format phone number for WhatsApp
    const formattedPhone = clientPhone.replace(/\D/g, "")

    // Create a simple message
    const message = `Presupuesto para ${clientName || "Cliente"} - ${carMake} ${carModel} ${carYear} - Total: ${formatCurrency(totalCost)}`

    // Open WhatsApp with the message
    const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
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

  // Optimize rendering by only showing the active tab's parts
  const renderPartsSection = (section: string) => {
    if (section !== activeTab) return null

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carParts[section as keyof typeof carParts].map((part) => (
          <div key={part} className="flex flex-col space-y-2 border p-3 rounded-md">
            <div className="flex items-start space-x-2">
              <Checkbox
                id={`${section}-${part}`}
                checked={partStatus[`${section}-${part}`]?.selected || false}
                onCheckedChange={(checked) => handlePartSelection(`${section}-${part}`, checked === true)}
              />
              <Label
                htmlFor={`${section}-${part}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {part}
              </Label>
            </div>

            {partStatus[`${section}-${part}`]?.selected && (
              <div className="pl-6 space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Checkbox
                      id={`${section}-${part}-new`}
                      checked={partStatus[`${section}-${part}`]?.isNew === true}
                      onCheckedChange={(checked) =>
                        handlePartTypeChange(`${section}-${part}`, checked === true ? true : null)
                      }
                    />
                    <Label htmlFor={`${section}-${part}-new`} className="text-xs">
                      Nuevo
                    </Label>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Checkbox
                      id={`${section}-${part}-repair`}
                      checked={partStatus[`${section}-${part}`]?.isNew === false}
                      onCheckedChange={(checked) =>
                        handlePartTypeChange(`${section}-${part}`, checked === true ? false : null)
                      }
                    />
                    <Label htmlFor={`${section}-${part}-repair`} className="text-xs">
                      Reparar
                    </Label>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Label htmlFor={`${section}-${part}-price`} className="text-xs whitespace-nowrap">
                    Precio:
                  </Label>
                  <Input
                    id={`${section}-${part}-price`}
                    type="number"
                    className="h-8 text-sm"
                    value={partStatus[`${section}-${part}`]?.price || "0"}
                    onChange={(e) => handlePartPriceChange(`${section}-${part}`, e.target.value)}
                    onBlur={(e) => {
                      // Formatear el valor al perder el foco
                      const value = e.target.value.trim()
                      if (value === "" || value === "0") {
                        handlePartPriceChange(`${section}-${part}`, "0")
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Optimizar renderizado de partes con useMemo
  const renderedPartsSections = useMemo(() => {
    return Object.keys(carParts).map((section) => (
      <TabsContent key={section} value={section} className="border rounded-md p-4">
        {section === activeTab && renderPartsSection(section)}
      </TabsContent>
    ))
  }, [activeTab, partStatus])

  return (
    <div className="space-y-8">
      {/* Client Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Información del Cliente</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="client-name">Nombre Completo</Label>
            <Input
              id="client-name"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Nombre del cliente"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-phone">Teléfono</Label>
            <Input
              id="client-phone"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              placeholder="Número de teléfono"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="client-email">Email</Label>
            <Input
              id="client-email"
              type="email"
              value={clientEmail}
              onChange={(e) => setClientEmail(e.target.value)}
              placeholder="Correo electrónico"
            />
          </div>
        </div>
      </div>

      {/* Vehicle Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Información del Vehículo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="car-make">Marca</Label>
            <Input
              id="car-make"
              value={carMake}
              onChange={(e) => setCarMake(e.target.value)}
              placeholder="Marca del vehículo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="car-model">Modelo</Label>
            <Input
              id="car-model"
              value={carModel}
              onChange={(e) => setCarModel(e.target.value)}
              placeholder="Modelo del vehículo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="car-year">Año</Label>
            <Input
              id="car-year"
              value={carYear}
              onChange={(e) => setCarYear(e.target.value)}
              placeholder="Año del vehículo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="car-plate">Patente</Label>
            <Input
              id="car-plate"
              value={carPlate}
              onChange={(e) => setCarPlate(e.target.value)}
              placeholder="Patente del vehículo"
            />
          </div>
        </div>
      </div>

      {/* Parts Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Selección de Partes</h3>
        <Tabs defaultValue="front" value={activeTab} onValueChange={setActiveTab}>
          <div className="overflow-x-auto">
            <TabsList className="grid grid-cols-7 w-full min-w-[600px]">
              <TabsTrigger value="front">Delantera</TabsTrigger>
              <TabsTrigger value="rear">Trasera</TabsTrigger>
              <TabsTrigger value="interior">Interior</TabsTrigger>
              <TabsTrigger value="right">Lado Der.</TabsTrigger>
              <TabsTrigger value="left">Lado Izq.</TabsTrigger>
              <TabsTrigger value="engine">Motor</TabsTrigger>
              <TabsTrigger value="chassis">Chasis</TabsTrigger>
            </TabsList>
          </div>

          {renderedPartsSections}
        </Tabs>
      </div>

      {/* Cost Calculation */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Cálculo de Costos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="parts-total">Total de Repuestos</Label>
            <Input id="parts-total" value={formatCurrency(partsTotal)} readOnly className="bg-gray-50" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="budget-price">Importe del Presupuesto</Label>
            <Input
              id="budget-price"
              value={budgetPrice}
              onChange={(e) => setBudgetPrice(e.target.value)}
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bodywork-labor">Mano de Obra Chapa</Label>
            <Input
              id="bodywork-labor"
              value={bodyworkLabor}
              onChange={(e) => setBodyworkLabor(e.target.value)}
              type="number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="paint-labor">Mano de Obra Pintura</Label>
            <Input id="paint-labor" value={paintLabor} onChange={(e) => setPaintLabor(e.target.value)} type="number" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="total-cost">Costo Total</Label>
            <Input
              id="total-cost"
              value={formatCurrency(totalCost)}
              readOnly
              className="bg-gray-50 font-bold text-lg"
            />
          </div>
        </div>
      </div>

      {/* Observations */}
      <div className="space-y-2">
        <Label htmlFor="observations">Observaciones</Label>
        <Textarea
          id="observations"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
          placeholder="Observaciones adicionales sobre el presupuesto"
          rows={4}
        />
      </div>

      {/* Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        <Button onClick={handleGeneratePDF}>
          <Download className="mr-2 h-4 w-4" />
          Generar PDF
        </Button>
        <PrintButton
          budgetData={{
            clientName,
            clientPhone,
            clientEmail,
            carMake,
            carModel,
            carYear,
            carPlate,
            observations,
            partStatus,
            partsTotal,
            budgetFee,
            bodyworkLabor: bodyworkLaborCost,
            paintLabor: paintLaborCost,
            totalCost,
            date: new Date(),
          }}
        />
        <Button onClick={handleSendEmail} variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Enviar Email
        </Button>
        <Button onClick={handleShareWhatsApp} variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          WhatsApp
        </Button>
      </div>
    </div>
  )
}
