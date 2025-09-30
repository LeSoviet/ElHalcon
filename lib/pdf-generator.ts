import { jsPDF } from "jspdf"
import { formatCurrency } from "@/lib/utils"

type PartStatus = {
  [key: string]: {
    selected: boolean
    isNew: boolean | null
    price: string
  }
}

type BudgetData = {
  clientName: string
  clientPhone: string
  clientEmail: string
  carMake: string
  carModel: string
  carYear: string
  carPlate: string
  observations: string
  partStatus: PartStatus
  partsTotal: number
  budgetFee: number
  bodyworkLabor: number
  paintLabor: number
  totalCost: number
  date: Date
}

export const generatePDF = (data: BudgetData, optimized = false) => {
  const doc = new jsPDF()

  // Tamaño del encabezado - reducido en la versión optimizada
  const headerHeight = optimized ? 25 : 40

  // Set background color for header
  doc.setFillColor(25, 99, 201) // Primary color
  doc.rect(0, 0, 210, headerHeight, "F")

  // Add company logo/name
  doc.setTextColor(255, 255, 255)

  if (optimized) {
    // Versión optimizada con encabezado más pequeño
    doc.setFontSize(18)
    doc.setFont("helvetica", "bold")
    doc.text("EL HALCON - CHAPA Y PINTURA", 15, 15)

    // Add document title and date inline
    doc.setFontSize(12)
    doc.text(`PRESUPUESTO - ${formatArgentineDate(data.date)}`, 170, 15, { align: "right" })
  } else {
    // Versión original con encabezado más grande
    doc.setFontSize(28)
    doc.setFont("helvetica", "bold")
    doc.text("EL HALCON", 15, 20)

    doc.setFontSize(14)
    doc.setFont("helvetica", "normal")
    doc.text("CHAPA Y PINTURA", 15, 30)

    // Add document title
    doc.setFontSize(20)
    doc.setFont("helvetica", "bold")
    doc.text("PRESUPUESTO", 150, 20, { align: "center" })

    // Add document number and date with Argentine format
    doc.setFontSize(10)
    doc.setFont("helvetica", "normal")
    doc.text(
      `N° ${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")}`,
      150,
      28,
      { align: "center" },
    )
    doc.text(`Fecha: ${formatArgentineDate(data.date)}`, 150, 35, { align: "center" })
  }

  // Reset text color for the rest of the document
  doc.setTextColor(0, 0, 0)

  // Ajustar posiciones verticales basadas en el tamaño del encabezado
  const yOffset = optimized ? headerHeight - 15 : headerHeight + 5

  // Add company and client information side by side to save space
  doc.setFillColor(240, 240, 240)
  doc.rect(15, yOffset, 85, 40, "F")
  doc.rect(110, yOffset, 85, 40, "F")

  doc.setFontSize(9)
  doc.setFont("helvetica", "bold")
  doc.text("DATOS DEL TALLER", 20, yOffset + 10)
  doc.text("DATOS DEL CLIENTE", 115, yOffset + 10)

  doc.setFont("helvetica", "normal")
  doc.text("El Halcon - Chapa y Pintura", 20, yOffset + 17)
  doc.text("Av. Mitre 280", 20, yOffset + 24)
  doc.text("Villa Martelli, Argentina", 20, yOffset + 31)
  doc.text("Tel: 114947-8445", 20, yOffset + 38)

  doc.text(`Nombre: ${data.clientName || "N/A"}`, 115, yOffset + 17)
  doc.text(`Teléfono: ${data.clientPhone || "N/A"}`, 115, yOffset + 24)
  doc.text(`Email: ${data.clientEmail || "N/A"}`, 115, yOffset + 31)

  // Add vehicle information - más compacto
  const vehicleY = yOffset + 45
  doc.setFillColor(240, 240, 240)
  doc.rect(15, vehicleY, 180, 20, "F")

  doc.setFont("helvetica", "bold")
  doc.text("DATOS DEL VEHÍCULO", 20, vehicleY + 7)

  doc.setFont("helvetica", "normal")
  doc.text(`Marca: ${data.carMake || "N/A"}`, 20, vehicleY + 15)
  doc.text(`Modelo: ${data.carModel || "N/A"}`, 70, vehicleY + 15)
  doc.text(`Año: ${data.carYear || "N/A"}`, 120, vehicleY + 15)
  doc.text(`Patente: ${data.carPlate || "N/A"}`, 150, vehicleY + 15)

  // Parts table - comenzando más arriba
  const tableY = vehicleY + 25
  doc.setFont("helvetica", "bold")
  doc.text("DETALLE DE REPUESTOS Y REPARACIONES", 15, tableY)

  const selectedParts = Object.entries(data.partStatus)
    .filter(([_, status]) => status.selected)
    .map(([part, status]) => {
      const [section, ...partNameParts] = part.split("-")
      const partName = partNameParts.join("-")
      const sectionName = getSectionName(section)
      return [
        partName,
        status.isNew === true ? "Nuevo" : status.isNew === false ? "Reparar" : "N/A",
        sectionName,
        formatCurrency(Number(status.price) || 0),
      ]
    })

  if (selectedParts.length > 0) {
    // Table header
    doc.setFillColor(230, 230, 230)
    doc.rect(15, tableY + 5, 180, 8, "F")

    doc.setFontSize(8)
    doc.setFont("helvetica", "bold")
    doc.text("PARTE", 20, tableY + 11)
    doc.text("TIPO", 100, tableY + 11)
    doc.text("SECCIÓN", 130, tableY + 11)
    doc.text("PRECIO", 175, tableY + 11, { align: "right" })

    // Table rows - filas más compactas
    let y = tableY + 13
    doc.setFont("helvetica", "normal")
    const rowHeight = 7 // Altura reducida de las filas

    selectedParts.forEach((row, index) => {
      // Check if we need a new page
      if (y > 270) {
        doc.addPage()

        // Add header to new page - más pequeño en páginas adicionales
        doc.setFillColor(25, 99, 201)
        doc.rect(0, 0, 210, 15, "F")

        doc.setTextColor(255, 255, 255)
        doc.setFontSize(10)
        doc.setFont("helvetica", "bold")
        doc.text("EL HALCON - PRESUPUESTO (CONTINUACIÓN)", 105, 10, { align: "center" })

        doc.setTextColor(0, 0, 0)

        // Reset table header
        doc.setFillColor(230, 230, 230)
        doc.rect(15, 20, 180, 8, "F")

        doc.setFontSize(8)
        doc.setFont("helvetica", "bold")
        doc.text("PARTE", 20, 26)
        doc.text("TIPO", 100, 26)
        doc.text("SECCIÓN", 130, 26)
        doc.text("PRECIO", 175, 26, { align: "right" })

        y = 28
        doc.setFont("helvetica", "normal")
      }

      // Alternate row colors
      if (index % 2 === 0) {
        doc.setFillColor(245, 245, 245)
        doc.rect(15, y, 180, rowHeight, "F")
      }

      doc.text(row[0], 20, y + 5)
      doc.text(row[1], 100, y + 5)
      doc.text(row[2], 130, y + 5)
      doc.text(row[3], 175, y + 5, { align: "right" })

      y += rowHeight
    })

    // Cost summary - más compacto
    const summaryY = y + 5

    doc.setFillColor(240, 240, 240)
    doc.rect(110, summaryY, 85, 50, "F")

    doc.setFont("helvetica", "bold")
    doc.text("RESUMEN DE COSTOS", 115, summaryY + 7)

    doc.setFont("helvetica", "normal")
    doc.text("Total de Repuestos:", 115, summaryY + 15)
    doc.text(formatCurrency(data.partsTotal), 185, summaryY + 15, { align: "right" })

    doc.text("Importe del Presupuesto:", 115, summaryY + 23)
    doc.text(formatCurrency(data.budgetFee), 185, summaryY + 23, { align: "right" })

    doc.text("Mano de Obra Chapa:", 115, summaryY + 31)
    doc.text(formatCurrency(data.bodyworkLabor), 185, summaryY + 31, { align: "right" })

    doc.text("Mano de Obra Pintura:", 115, summaryY + 39)
    doc.text(formatCurrency(data.paintLabor), 185, summaryY + 39, { align: "right" })

    // Total
    doc.setFillColor(25, 99, 201)
    doc.rect(110, summaryY + 42, 85, 12, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFont("helvetica", "bold")
    doc.text("TOTAL:", 115, summaryY + 50)
    doc.text(formatCurrency(data.totalCost), 185, summaryY + 50, { align: "right" })

    doc.setTextColor(0, 0, 0)

    // Observations - si hay espacio en la misma página
    if (data.observations) {
      const obsY = Math.min(summaryY + 60, 240)

      // Si las observaciones no caben en esta página, agregar una nueva
      if (obsY > 240) {
        doc.addPage()
        doc.setFont("helvetica", "bold")
        doc.text("OBSERVACIONES:", 15, 20)

        doc.setFont("helvetica", "normal")
        const splitObservations = doc.splitTextToSize(data.observations, 180)
        doc.text(splitObservations, 15, 30)
      } else {
        doc.setFont("helvetica", "bold")
        doc.text("OBSERVACIONES:", 15, obsY)

        doc.setFont("helvetica", "normal")
        const splitObservations = doc.splitTextToSize(data.observations, 180)
        doc.text(splitObservations, 15, obsY + 8)
      }
    }
  } else {
    doc.setFont("helvetica", "normal")
    doc.text("No se han seleccionado partes para este presupuesto.", 15, tableY + 15)
  }

  // Footer - más pequeño
  const pageCount = doc.internal.getNumberOfPages()

  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)

    doc.setFillColor(25, 99, 201)
    doc.rect(0, 280, 210, 15, "F")

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(8)
    doc.setFont("helvetica", "normal")
    doc.text("El Halcon - Chapa y Pintura | 40 años de experiencia en el rubro", 105, 287, { align: "center" })
    doc.text("Av. Mitre 280, Villa Martelli - Tel: 114947-8445", 105, 292, { align: "center" })

    // Page numbers
    doc.text(`Página ${i} de ${pageCount}`, 185, 275)
  }

  return doc
}

// Helper function to get section name in Spanish
function getSectionName(section: string): string {
  const sectionNames: Record<string, string> = {
    front: "Delantera",
    rear: "Trasera",
    interior: "Interior",
    right: "Lado Der.",
    left: "Lado Izq.",
    engine: "Motor",
    chassis: "Chasis",
  }

  return sectionNames[section] || section
}

// Format date in Argentine format (day/month/year)
function formatArgentineDate(date: Date): string {
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
