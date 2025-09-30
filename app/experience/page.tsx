import { Shield, Wrench, PenTool as Tool, CheckCircle, CalendarClock, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import Testimonials from "@/components/testimonials"

const processSteps = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Diagnóstico de llegada",
    detail:
      "Revisamos estructura, pintura y mecánica auxiliar. Documentamos avances con tu compañía de seguros si aplica."
  },
  {
    icon: <Tool className="w-6 h-6" />,
    title: "Plan de trabajo",
    detail:
      "Preparamos cronograma con fases de desarme, reparación y terminación. Compartimos presupuesto detallado y tiempos."
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Ejecución y controles",
    detail:
      "Nuestros especialistas trabajan por células: estructura, pintura y detalles. Cada etapa recibe control de calidad."
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "Entrega y seguimiento",
    detail:
      "Presentamos informe final, checklist y recomendaciones de cuidado. Hacemos seguimiento post-entrega a los 7 días."
  }
]

const visitChecklist = [
  "Turno confirmado con día y hora",
  "Espacio de guardado asegurado bajo techo",
  "Reporte fotográfico inicial con estado del vehículo",
  "Listados de piezas nuevas o restauradas",
  "Entrega limpia y protegida, lista para rodar"
]

const supportChannels = [
  {
    icon: <CalendarClock className="w-5 h-5 text-primary" />,
    title: "Agenda flexible",
    detail: "Bloqueamos cabina o box según la complejidad y ajustamos horario si venís desde el interior."
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: "Equipo asignado",
    detail: "Siempre tendrás un referente técnico y otro administrativo para cualquier consulta."
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    title: "Actualizaciones semanales",
    detail: "Te enviamos resumen de avances, piezas recibidas y próximos hitos vía WhatsApp o mail."
  }
]

export default function ExperiencePage() {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Experiencia EH</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">Así cuidamos tu vehículo de principio a fin</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            Transparencia, planificación y oficio. Conoce cómo gestionamos cada proyecto, los puntos de control que
            seguimos y los servicios disponibles para que tu auto vuelva a la calle con garantías reales.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/quote">Solicitar presupuesto</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="#visita">Planificar visita</Link>
            </Button>
          </div>
        </FadeIn>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900">Nuestro proceso certificado</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Diseñado para reducir tiempos muertos, darle trazabilidad al trabajo y mantener la comunicación abierta en
              cada etapa.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {processSteps.map((step) => (
              <FadeIn key={step.title} direction="up" delay={0.1}>
                <div className="h-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-gray-600 leading-6">{step.detail}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900">Qué puedes esperar el día de la visita</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Nuestro equipo te recibe con una metodología clara para que no pierdas tiempo y sepas exactamente qué
              ocurre con tu vehículo mientras está en el taller.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.8fr),minmax(0,1.2fr)]">
            <FadeIn direction="left">
              <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900">Checklist de recepción</h3>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {visitChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-3xl border border-primary/10 bg-primary/5 p-8">
                <h3 className="text-2xl font-semibold text-primary">Canales de acompañamiento</h3>
                <p className="mt-4 text-sm text-primary/80">
                  Estamos disponibles durante todo el proceso. Elige tu canal favorito y recibe respuestas reales, sin
                  scripts.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {supportChannels.map((channel) => (
                    <div key={channel.title} className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="mb-3 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {channel.icon}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{channel.title}</p>
                      <p className="mt-2 text-xs text-gray-600 leading-5">{channel.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900">Voces de nuestros clientes</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              Seleccionamos experiencias que muestran cómo acompañamos desde el primer contacto hasta la entrega, y qué
              destacan quienes confían en nosotros año tras año.
            </p>
          </FadeIn>
          <div className="mt-8 rounded-3xl border border-primary/10 bg-white p-6 shadow-lg">
            <Testimonials />
          </div>
        </section>
      </div>

      <section id="visita" className="mt-24 bg-primary text-white">
        <div className="container mx-auto px-4 py-16">
          <FadeIn>
            <h2 className="text-3xl font-bold">Agenda tu visita guiada</h2>
            <p className="mt-3 max-w-2xl text-white/80 text-sm">
              Coordinamos un recorrido por el taller, te mostramos los espacios de trabajo y planificamos el servicio que
              necesitas. Recibirás un correo con horarios disponibles y documentación a preparar.
            </p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/quote">Reservar turno</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="mailto:hola@elhalcon.com.ar">Escribirnos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
