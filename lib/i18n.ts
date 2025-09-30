export type Locale = "en" | "es"

type Highlight = {
  title: string
  subtitle?: string
  description?: string
}

type Metric = {
  value: string
  label: string
  detail?: string
}

type StoryCard = {
  title: string
  detail: string
  result: string
}

type Testimonial = {
  id: number
  name: string
  location: string
  rating: number
  comment: string
  date: string
}

type NavLabels = {
  experience: string
  quote: string
  login: string
}

type LanguageToggle = {
  label: string
  english: string
  spanish: string
}

type FooterContent = {
  description: string
  servicesTitle: string
  services: { label: string; href: string }[]
  contactTitle: string
  address: string
  phone: string
  email: string
  rights: string
}

type HomeContent = {
  hero: {
    badge: string
    title: string
    description: string
    ctaPrimary: string
    ctaSecondary: string
    imageAlt: string
    highlights: Highlight[]
    metrics: Metric[]
  }
  about: {
    title: string
    paragraphs: string[]
    stats: Metric[]
    featureCard: {
      badge: string
      description: string
    }
    imageAlt: string
  }
  services: {
    title: string
    description: string
    cards: {
      title: string
      description: string
      features: string[]
    }[]
  }
  whyChoose: {
    title: string
    description: string
    cards: Highlight[]
  }
  transformation: {
    title: string
    intro: string
    steps: Highlight[]
    project: {
      badge: string
      title: string
      description: string
      metrics: Metric[]
      stories: StoryCard[]
    }
  }
  customerExperience: {
    badge: string
    title: string
    description: string
    highlights: Metric[]
    cta: string
  }
  visit: {
    badge: string
    title: string
    description: string
    weekday: {
      title: string
      morningLabel: string
      morningHours: string
      afternoonLabel: string
      afternoonHours: string
      note: string
    }
    weekend: {
      title: string
      description: string
    }
    contactBox: {
      title: string
      descriptionPrefix: string
      email: string
      descriptionMiddle: string
      phone: string
      descriptionSuffix: string
      addressLabel: string
      address: string
      parkingNote: string
      servicesLabel: string
      servicesDescription: string
      cta: string
    }
  }
  cta: {
    title: string
    description: string
    button: string
  }
}

type ExperienceContent = {
  hero: {
    badge: string
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
  process: {
    title: string
    description: string
    steps: Highlight[]
  }
  visit: {
    title: string
    description: string
    checklistTitle: string
    checklistItems: string[]
    supportTitle: string
    supportDescription: string
    channels: Highlight[]
  }
  testimonials: {
    title: string
    description: string
  }
  visitCta: {
    title: string
    description: string
    primaryCta: string
    secondaryCta: string
  }
}

type Translation = {
  common: {
    nav: NavLabels
    languageToggle: LanguageToggle
    footer: FooterContent
  }
  testimonials: {
    items: Testimonial[]
  }
  home: HomeContent
  experience: ExperienceContent
}

export const translations: Record<Locale, Translation> = {
  en: {
    common: {
      nav: {
        experience: "Experience",
        quote: "Get a Quote",
        login: "Login",
      },
      languageToggle: {
        label: "Language",
        english: "English",
        spanish: "Español",
      },
      footer: {
        description: "40 years of experience in automotive body shop and paint services.",
        servicesTitle: "Services",
        services: [
          { label: "Body Repair", href: "/#services" },
          { label: "Automotive Paint", href: "/#services" },
          { label: "Restoration", href: "/#services" },
          { label: "Request Quote", href: "/quote" },
        ],
        contactTitle: "Contact",
        address: "Av. San Martín 4567, Buenos Aires, Argentina",
        phone: "+54 11 5555-1234",
        email: "hola@elhalcon.com.ar",
        rights: "All rights reserved.",
      },
    },
    testimonials: {
      items: [
        {
          id: 1,
          name: "Carlos Rodriguez",
          location: "Buenos Aires",
          rating: 5,
          comment:
            "Excellent service. They repaired my car after a major accident and it looks like new. The treatment was very professional and they met the promised deadlines.",
          date: "2 months ago",
        },
        {
          id: 2,
          name: "Maria Gonzalez",
          location: "Villa Martelli",
          rating: 5,
          comment:
            "I've been taking my car to El Halcon for years. They have always treated me wonderfully and the work is impeccable. Highly recommended.",
          date: "1 month ago",
        },
        {
          id: 3,
          name: "Jorge Fernandez",
          location: "San Martin",
          rating: 5,
          comment:
            "They restored my 1978 Falcon and the result exceeded my expectations. The level of detail and passion they put into the work is admirable. Thank you!",
          date: "3 months ago",
        },
        {
          id: 4,
          name: "Ana Martinez",
          location: "Vicente Lopez",
          rating: 5,
          comment:
            "Very satisfied with the paint job. The color was perfect and the price was fair. They also explained the entire process to me step by step.",
          date: "2 weeks ago",
        },
      ],
    },
    home: {
      hero: {
        badge: "Since 1984",
        title: "El Halcon Body Shop & Paint Excellence",
        description:
          "40 years delivering structural precision, flawless paint, and handcrafted finishes from the same trusted workshop in Buenos Aires.",
        ctaPrimary: "Request a Quote",
        ctaSecondary: "Personal attention • Insurance specialists • Classic car experts",
        imageAlt: "Classic car being restored inside a workshop",
        highlights: [
          { title: "Certified Repairs", subtitle: "Guaranteed results" },
          { title: "Advanced Tools", subtitle: "Modern equipment" },
          { title: "Premium Finishes", subtitle: "Showroom quality" },
          { title: "On-Time Delivery", subtitle: "Respect for your schedule" },
        ],
        metrics: [
          { value: "5,000+", label: "Vehicles restored", detail: "Every project documented and guaranteed." },
          { value: "3", label: "Dedicated booths", detail: "Separated for preparation, paint, and curing." },
        ],
      },
      about: {
        title: "About Us",
        paragraphs: [
          "Since 1984, El Halcon has established itself as a leading automotive body shop and paint service in Buenos Aires. Our commitment to quality and personalized attention has earned us the trust of thousands of clients.",
          "Located at the same place for 40 years, our family shop combines traditional experience with the most modern techniques to deliver exceptional results on every job.",
        ],
        stats: [
          { value: "40+", label: "Years of Experience" },
          { value: "5000+", label: "Vehicles Repaired" },
        ],
        featureCard: {
          badge: "Trusted Body Shop",
          description:
            "Dedicated paint booths, color-matching lab, and structural repair equipment for flawless results.",
        },
        imageAlt: "Technician applying fresh coat of paint to a car",
      },
      services: {
        title: "Our Services",
        description: "We offer a wide range of specialized services to keep your vehicle in perfect condition.",
        cards: [
          {
            title: "Body Repair",
            description:
              "We repair all types of dents, dings, and structural damage to your vehicle's body with professional techniques and impeccable finishes.",
            features: ["Dent and ding repair", "Frame straightening", "Panel replacement"],
          },
          {
            title: "Professional Paint",
            description:
              "We use high-quality paints and cutting-edge technology to achieve durable finishes that protect and beautify your vehicle.",
            features: ["Complete or partial paint", "Exact color matching", "Special finishes"],
          },
          {
            title: "Complete Restoration",
            description:
              "We bring vehicles with severe damage or vintage cars back to life, combining traditional techniques with modern technology.",
            features: ["Classic car restoration", "Comprehensive repairs", "Anti-corrosive treatment"],
          },
        ],
      },
      whyChoose: {
        title: "Why Choose Us?",
        description: "Our commitment to excellence and customer satisfaction sets us apart.",
        cards: [
          {
            title: "Proven Experience",
            description: "40 years in the business support us—we know every detail of body shop and paint work.",
          },
          {
            title: "Total Guarantee",
            description: "We stand behind our work with a written guarantee on all repairs performed.",
          },
          {
            title: "Premium Quality",
            description: "We use top-quality materials and professional equipment on every job.",
          },
          {
            title: "On-Time Delivery",
            description: "We deliver work on the agreed time, respecting your schedule and needs.",
          },
        ],
      },
      transformation: {
        title: "Every restoration tells a story",
        intro:
          "From first assessment to the final polish, we document each step so you can follow the transformation. Our team treats every vehicle with the same meticulous care it had the day it left the factory.",
        steps: [
          {
            title: "Structural Precision",
            description: "We realign every panel with millimetric accuracy before moving to finishing.",
          },
          {
            title: "Color Mastery",
            description: "Our lab reproduces OEM colors and special effects with exact fidelity.",
          },
          {
            title: "Rigorous Checks",
            description: "Each vehicle leaves the booth after a 40-point inspection and final polish.",
          },
        ],
        project: {
          badge: "Most recent project",
          title: "1967 Ford Mustang Fastback",
          description:
            "Complete body rebuild after structural damage. We replaced quarter panels, fabricated a custom floor pan, and replicated the original Candy Apple Red finish with ceramic protection. Delivery in 6 weeks with before/after documentation for the insurer and owner.",
          metrics: [
            { value: "120h", label: "Craft hours" },
            { value: "8", label: "Specialists involved" },
            { value: "0", label: "Return visits" },
          ],
          stories: [
            {
              title: "Insurance case: hail storm",
              detail: "Panel reshaping and multi-stage paint on a 2021 SUV. Rental vehicle coordination included.",
              result: "Completed in 4 days",
            },
            {
              title: "Classic preservation",
              detail: "Preventive anti-corrosive treatment and interior detailing for a 1955 Mercedes-Benz.",
              result: "Annual maintenance contract",
            },
          ],
        },
      },
      customerExperience: {
        badge: "Testimonials",
        title: "Real stories, verified results",
        description:
          "Each repair includes follow-up, photo reports, and transparent communication with the customer. Discover more on our new page dedicated to the complete workshop experience.",
        highlights: [
          {
            value: "< 24h",
            label: "Average response time",
            detail: "Quotes delivered with photos and job plan.",
          },
          {
            value: "78%",
            label: "Repeat customers",
            detail: "Drivers who return for maintenance and referrals.",
          },
          {
            value: "12",
            label: "Insurance partners",
            detail: "We coordinate paperwork and inspections for you.",
          },
        ],
        cta: "See full experience",
      },
      visit: {
        badge: "Visit us",
        title: "Hours and appointments",
        description:
          "We schedule appointments for complex repairs and express deliveries for quick touch-ups. Contact us before your visit to reserve a booth or bay according to your needs.",
        weekday: {
          title: "Monday to Friday",
          morningLabel: "Morning",
          morningHours: "8:00 - 13:00",
          afternoonLabel: "Afternoon",
          afternoonHours: "15:00 - 18:00",
          note: "Closed from 13:00 to 15:00 for lunch and curing.",
        },
        weekend: {
          title: "Weekends",
          description: "Closed. We handle emergencies through coordinated email.",
        },
        contactBox: {
          title: "Need to schedule a visit?",
          descriptionPrefix: "Send us photos and a description at",
          email: "hola@elhalcon.com.ar",
          descriptionMiddle: "or call",
          phone: "+54 11 5555-1234",
          descriptionSuffix: "We confirm your slot within one business day.",
          addressLabel: "Address",
          address: "Av. San Martín 4567, CABA",
          parkingNote: "Between La Pampa and Grecia streets. On-site parking available.",
          servicesLabel: "On-site services",
          servicesDescription: "Pressurized booths, color laboratory, and protected delivery bay.",
          cta: "Plan visit",
        },
      },
      cta: {
        title: "Ready to restore your vehicle?",
        description:
          "Request a free quote and discover why we are the trusted shop for thousands of customers.",
        button: "Get Free Quote",
      },
    },
    experience: {
      hero: {
        badge: "EH Experience",
        title: "How we care for your vehicle from start to finish",
        description:
          "Transparency, planning, and craftsmanship. Learn how we manage each project, the checkpoints we follow, and the services available so your car returns to the road with real warranties.",
        primaryCta: "Request a quote",
        secondaryCta: "Plan visit",
      },
      process: {
        title: "Our certified process",
        description:
          "Designed to reduce idle time, give traceability to the work, and keep communication open at every stage.",
        steps: [
          {
            title: "Arrival diagnosis",
            description:
              "We inspect structure, paint, and auxiliary mechanics. We document progress with your insurance company when needed.",
          },
          {
            title: "Work plan",
            description:
              "We prepare a schedule covering disassembly, repair, and finishing phases. We share a detailed estimate and timeline.",
          },
          {
            title: "Execution and controls",
            description:
              "Our specialists work in cells: structure, paint, and detailing. Each stage receives quality control.",
          },
          {
            title: "Delivery and follow-up",
            description:
              "We present the final report, checklist, and care recommendations. We follow up 7 days after delivery.",
          },
        ],
      },
      visit: {
        title: "What to expect on visit day",
        description:
          "Our team welcomes you with a clear methodology so you don't waste time and know exactly what happens to your vehicle in the shop.",
        checklistTitle: "Reception checklist",
        checklistItems: [
          "Confirmed appointment with date and time",
          "Secured indoor storage space",
          "Initial photo report documenting vehicle condition",
          "List of new or restored parts",
          "Clean and protected delivery, ready to drive",
        ],
        supportTitle: "Support channels",
        supportDescription:
          "We are available throughout the process. Choose your preferred channel and receive real answers, no scripts.",
        channels: [
          {
            title: "Flexible scheduling",
            description:
              "We reserve booths or bays according to complexity and adjust times if you come from outside the city.",
          },
          {
            title: "Assigned team",
            description:
              "You will always have a technical lead and an administrative contact for any questions.",
          },
          {
            title: "Weekly updates",
            description:
              "We send summaries of progress, received parts, and upcoming milestones via WhatsApp or email.",
          },
        ],
      },
      testimonials: {
        title: "Voices from our clients",
        description:
          "Selected experiences that show how we assist from the first contact to delivery, and what returning clients highlight year after year.",
      },
      visitCta: {
        title: "Schedule your guided visit",
        description:
          "We arrange a workshop tour, show the workspaces, and plan the service you need. You will receive an email with available times and documents to prepare.",
        primaryCta: "Book appointment",
        secondaryCta: "Write to us",
      },
    },
  },
  es: {
    common: {
      nav: {
        experience: "Experiencia",
        quote: "Solicitar presupuesto",
        login: "Ingresar",
      },
      languageToggle: {
        label: "Idioma",
        english: "English",
        spanish: "Español",
      },
      footer: {
        description: "40 años de experiencia en servicios de chapa y pintura automotriz.",
        servicesTitle: "Servicios",
        services: [
          { label: "Reparación de carrocería", href: "/#services" },
          { label: "Pintura automotriz", href: "/#services" },
          { label: "Restauración", href: "/#services" },
          { label: "Solicitar presupuesto", href: "/quote" },
        ],
        contactTitle: "Contacto",
        address: "Av. San Martín 4567, Buenos Aires, Argentina",
        phone: "+54 11 5555-1234",
        email: "hola@elhalcon.com.ar",
        rights: "Todos los derechos reservados.",
      },
    },
    testimonials: {
      items: [
        {
          id: 1,
          name: "Carlos Rodriguez",
          location: "Buenos Aires",
          rating: 5,
          comment:
            "Excelente servicio. Repararon mi auto después de un choque fuerte y quedó como nuevo. El trato fue muy profesional y cumplieron con los plazos prometidos.",
          date: "Hace 2 meses",
        },
        {
          id: 2,
          name: "Maria Gonzalez",
          location: "Villa Martelli",
          rating: 5,
          comment:
            "Hace años llevo mi auto a El Halcón. Siempre me atendieron de maravillas y el trabajo es impecable. Muy recomendables.",
          date: "Hace 1 mes",
        },
        {
          id: 3,
          name: "Jorge Fernandez",
          location: "San Martín",
          rating: 5,
          comment:
            "Restauraron mi Falcon 1978 y el resultado superó mis expectativas. El nivel de detalle y pasión que ponen en el trabajo es admirable. ¡Gracias!",
          date: "Hace 3 meses",
        },
        {
          id: 4,
          name: "Ana Martinez",
          location: "Vicente López",
          rating: 5,
          comment:
            "Muy conforme con el trabajo de pintura. El color quedó perfecto y el precio fue justo. Además me explicaron todo el proceso paso a paso.",
          date: "Hace 2 semanas",
        },
      ],
    },
    home: {
      hero: {
        badge: "Desde 1984",
        title: "Excelencia en chapa y pintura El Halcón",
        description:
          "40 años entregando precisión estructural, pintura impecable y terminaciones artesanales desde el mismo taller de confianza en Buenos Aires.",
        ctaPrimary: "Solicitar presupuesto",
        ctaSecondary: "Atención personalizada • Especialistas en seguros • Expertos en clásicos",
        imageAlt: "Auto clásico siendo restaurado dentro de un taller",
        highlights: [
          { title: "Reparaciones certificadas", subtitle: "Resultados garantizados" },
          { title: "Herramientas avanzadas", subtitle: "Equipamiento moderno" },
          { title: "Terminaciones premium", subtitle: "Calidad de exposición" },
          { title: "Entrega puntual", subtitle: "Respeto por tu agenda" },
        ],
        metrics: [
          { value: "5.000+", label: "Vehículos restaurados", detail: "Cada proyecto documentado y garantizado." },
          { value: "3", label: "Cabinas dedicadas", detail: "Separadas para preparación, pintura y curado." },
        ],
      },
      about: {
        title: "Quiénes somos",
        paragraphs: [
          "Desde 1984, El Halcón se consolidó como referente en chapa y pintura automotriz en Buenos Aires. Nuestro compromiso con la calidad y la atención personalizada nos ganó la confianza de miles de clientes.",
          "En el mismo lugar desde hace 40 años, combinamos la experiencia familiar con las técnicas más modernas para lograr resultados excepcionales en cada trabajo.",
        ],
        stats: [
          { value: "40+", label: "Años de experiencia" },
          { value: "5000+", label: "Vehículos reparados" },
        ],
        featureCard: {
          badge: "Taller de confianza",
          description:
            "Cabinas de pintura dedicadas, laboratorio de color y equipamiento estructural para resultados impecables.",
        },
        imageAlt: "Técnico aplicando una nueva capa de pintura a un auto",
      },
      services: {
        title: "Nuestros servicios",
        description:
          "Ofrecemos una amplia gama de servicios especializados para mantener tu vehículo en perfectas condiciones.",
        cards: [
          {
            title: "Reparación de carrocería",
            description:
              "Reparamos todo tipo de golpes, bollos y daños estructurales con técnicas profesionales y terminaciones impecables.",
            features: ["Reparación de golpes y bollos", "Alineado de chasis", "Reemplazo de paneles"],
          },
          {
            title: "Pintura profesional",
            description:
              "Utilizamos pinturas de alta calidad y tecnología de punta para lograr acabados duraderos que protegen y embellecen tu vehículo.",
            features: ["Pintura completa o parcial", "Igualación exacta de color", "Terminaciones especiales"],
          },
          {
            title: "Restauración integral",
            description:
              "Devolvemos la vida a vehículos con daños severos o clásicos, combinando técnicas tradicionales con tecnología moderna.",
            features: ["Restauración de autos clásicos", "Reparaciones integrales", "Tratamiento anticorrosivo"],
          },
        ],
      },
      whyChoose: {
        title: "¿Por qué elegirnos?",
        description: "Nuestro compromiso con la excelencia y la satisfacción del cliente nos diferencia.",
        cards: [
          {
            title: "Experiencia comprobada",
            description: "40 años en el rubro nos respaldan; conocemos cada detalle del trabajo de chapa y pintura.",
          },
          {
            title: "Garantía total",
            description: "Respaldamos nuestro trabajo con garantía escrita en todas las reparaciones realizadas.",
          },
          {
            title: "Calidad premium",
            description: "Utilizamos materiales de primera línea y equipamiento profesional en cada trabajo.",
          },
          {
            title: "Entrega puntual",
            description: "Cumplimos con los plazos acordados, respetando tu tiempo y necesidades.",
          },
        ],
      },
      transformation: {
        title: "Cada restauración cuenta una historia",
        intro:
          "Desde la evaluación inicial hasta el pulido final, documentamos cada paso para que sigas la transformación. Tratamos cada vehículo con el mismo cuidado meticuloso que tenía el día que salió de fábrica.",
        steps: [
          {
            title: "Precisión estructural",
            description: "Alineamos cada panel con exactitud milimétrica antes de pasar a terminaciones.",
          },
          {
            title: "Maestría en color",
            description: "Nuestro laboratorio reproduce colores originales y efectos especiales con fidelidad exacta.",
          },
          {
            title: "Controles rigurosos",
            description: "Cada vehículo sale de cabina tras 40 puntos de control y pulido final.",
          },
        ],
        project: {
          badge: "Proyecto más reciente",
          title: "Ford Mustang Fastback 1967",
          description:
            "Reconstrucción completa de carrocería tras daño estructural. Reemplazamos paneles traseros, fabricamos piso a medida y replicamos el Candy Apple Red original con protección cerámica. Entrega en 6 semanas con documentación para aseguradora y cliente.",
          metrics: [
            { value: "120h", label: "Horas de oficio" },
            { value: "8", label: "Especialistas involucrados" },
            { value: "0", label: "Visitas de retorno" },
          ],
          stories: [
            {
              title: "Caso de seguro: granizo",
              detail: "Reperfilado de paneles y pintura en múltiples etapas en una SUV 2021. Coordinación de auto de reemplazo incluida.",
              result: "Terminado en 4 días",
            },
            {
              title: "Preservación clásica",
              detail: "Tratamiento anticorrosivo preventivo y detallado interior de un Mercedes-Benz 1955.",
              result: "Contrato anual de mantenimiento",
            },
          ],
        },
      },
      customerExperience: {
        badge: "Testimonios",
        title: "Historias reales, resultados comprobados",
        description:
          "Cada reparación incluye seguimiento, reportes fotográficos y comunicación transparente con el cliente. Descubre más en nuestra nueva página dedicada a la experiencia completa en el taller.",
        highlights: [
          {
            value: "< 24h",
            label: "Tiempo de respuesta promedio",
            detail: "Presupuestos con fotos y plan de Trabajo.",
          },
          {
            value: "78%",
            label: "Clientes recurrentes",
            detail: "Conductores que vuelven para mantenimiento y referidos.",
          },
          {
            value: "12",
            label: "Aseguradoras aliadas",
            detail: "Coordinamos papeleo e inspecciones por ti.",
          },
        ],
        cta: "Ver experiencia completa",
      },
      visit: {
        badge: "Visítanos",
        title: "Horarios y turnos",
        description:
          "Coordinamos turnos para reparaciones complejas y entregas express para trabajos rápidos. Escríbenos antes de tu visita para reservar cabina o box según tu necesidad.",
        weekday: {
          title: "Lunes a viernes",
          morningLabel: "Mañana",
          morningHours: "8:00 - 13:00",
          afternoonLabel: "Tarde",
          afternoonHours: "15:00 - 18:00",
          note: "Cerramos de 13:00 a 15:00 para almuerzo y curado.",
        },
        weekend: {
          title: "Fines de semana",
          description: "Cerrado. Atendemos emergencias por correo coordinado.",
        },
        contactBox: {
          title: "¿Necesitas coordinar una visita?",
          descriptionPrefix: "Envíanos fotos y descripción a",
          email: "hola@elhalcon.com.ar",
          descriptionMiddle: "o comunícate al",
          phone: "+54 11 5555-1234",
          descriptionSuffix: "Confirmamos tu turno en menos de un día hábil.",
          addressLabel: "Dirección",
          address: "Av. San Martín 4567, CABA",
          parkingNote: "Entre calles La Pampa y Grecia. Estacionamiento propio.",
          servicesLabel: "Servicios en sitio",
          servicesDescription: "Cabinas presurizadas, laboratorio de color y sala de entrega protegida.",
          cta: "Planificar visita",
        },
      },
      cta: {
        title: "¿Listo para restaurar tu vehículo?",
        description:
          "Solicita un presupuesto sin cargo y descubre por qué somos el taller de confianza de miles de clientes.",
        button: "Obtener presupuesto",
      },
    },
    experience: {
      hero: {
        badge: "Experiencia EH",
        title: "Así cuidamos tu vehículo de principio a fin",
        description:
          "Transparencia, planificación y oficio. Conoce cómo gestionamos cada proyecto, los puntos de control que seguimos y los servicios disponibles para que tu auto vuelva a la calle con garantías reales.",
        primaryCta: "Solicitar presupuesto",
        secondaryCta: "Planificar visita",
      },
      process: {
        title: "Nuestro proceso certificado",
        description:
          "Diseñado para reducir tiempos muertos, darle trazabilidad al Trabajo y mantener la comunicación abierta en cada etapa.",
        steps: [
          {
            title: "Diagnóstico de llegada",
            description:
              "Revisamos estructura, pintura y mecánica auxiliar. Documentamos avances con tu compañía de seguros si aplica.",
          },
          {
            title: "Plan de Trabajo",
            description:
              "Preparamos cronograma con fases de desarme, reparación y terminación. Compartimos presupuesto detallado y tiempos.",
          },
          {
            title: "Ejecución y controles",
            description:
              "Nuestros especialistas trabajan por células: estructura, pintura y detalle. Cada etapa recibe control de calidad.",
          },
          {
            title: "Entrega y seguimiento",
            description:
              "Presentamos informe final, checklist y recomendaciones de Cuidado. Hacemos seguimiento 7 días después de la entrega.",
          },
        ],
      },
      visit: {
        title: "Qué esperar el día de la visita",
        description:
          "Te recibimos con una.methodología clara para que no pierdas tiempo y sepas exactamente qué ocurre con tu vehículo en el taller.",
        checklistTitle: "Checklist de recepción",
        checklistItems: [
          "Turno confirmado con día y hora",
          "Espacio de guardado asegurado bajo techo",
          "Reporte fotográfico inicial con estado del vehículo",
          "Listado de piezas nuevas o restauradas",
          "Entrega limpia y protegida, lista para rodar",
        ],
        supportTitle: "Canales de acompañamiento",
        supportDescription:
          "Estamos disponibles durante todo el proceso. Elige tu canal preferido y recibe respuestas reales, sin scripts.",
        channels: [
          {
            title: "Agenda flexible",
            description:
              "Reservamos cabina o box según la complejidad y ajustamos horarios si vienes desde el interior.",
          },
          {
            title: "Equipo asignado",
            description:
              "Siempre contarás con un referente técnico y otro administrativo para cualquier consulta.",
          },
          {
            title: "Actualizaciones semanales",
            description:
              "Enviamos resúmenes de avances, piezas recibidas y próximos hitos por WhatsApp o correo.",
          },
        ],
      },
      testimonials: {
        title: "Voces de nuestros clientes",
        description:
          "Experiencias seleccionadas que muestran cómo acompañamos desde el primer contacto hasta la entrega, y qué destacan quienes confían en nosotros año tras año.",
      },
      visitCta: {
        title: "Agenda tu visita guiada",
        description:
          "Coordinamos un recorrido por el taller, te mostramos los espacios de Trabajo y planificamos el servicio que necesitas. Recibirás un correo con horarios disponibles y documentación a preparar.",
        primaryCta: "Reservar turno",
        secondaryCta: "Escribirnos",
      },
    },
  },
}
