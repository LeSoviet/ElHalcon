"use client"

import { Shield, Wrench, PenTool as Tool, CheckCircle, CalendarClock, Users, MessageSquare } from "lucide-react"
import Link from "next/link"
import FadeIn from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import Testimonials from "@/components/testimonials"
import { useI18n } from "@/components/providers/locale-provider"

export default function ExperiencePage() {
  const t = useI18n()

  const processSteps = [
    {
      icon: <Shield className="w-6 h-6" />,
      ...t.experience.process.steps[0]
    },
    {
      icon: <Tool className="w-6 h-6" />,
      ...t.experience.process.steps[1]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      ...t.experience.process.steps[2]
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      ...t.experience.process.steps[3]
    }
  ]

  const supportChannels = [
    {
      icon: <CalendarClock className="w-5 h-5 text-primary" />,
      ...t.experience.visit.channels[0]
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      ...t.experience.visit.channels[1]
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-primary" />,
      ...t.experience.visit.channels[2]
    }
  ]

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{t.experience.hero.badge}</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">{t.experience.hero.title}</h1>
          <p className="mt-6 max-w-3xl text-lg text-gray-600">
            {t.experience.hero.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/quote">{t.experience.hero.primaryCta}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
              <Link href="#visita">{t.experience.hero.secondaryCta}</Link>
            </Button>
          </div>
        </FadeIn>

        <section className="mt-16">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900">{t.experience.process.title}</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              {t.experience.process.description}
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
                  <p className="mt-4 text-sm text-gray-600 leading-6">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900">{t.experience.visit.title}</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              {t.experience.visit.description}
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.8fr),minmax(0,1.2fr)]">
            <FadeIn direction="left">
              <div className="rounded-3xl bg-white p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900">{t.experience.visit.checklistTitle}</h3>
                <ul className="mt-6 space-y-3 text-sm text-gray-600">
                  {t.experience.visit.checklistItems.map((item) => (
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
                <h3 className="text-2xl font-semibold text-primary">{t.experience.visit.supportTitle}</h3>
                <p className="mt-4 text-sm text-primary/80">
                  {t.experience.visit.supportDescription}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {supportChannels.map((channel) => (
                    <div key={channel.title} className="rounded-2xl bg-white p-5 shadow-sm">
                      <div className="mb-3 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {channel.icon}
                      </div>
                      <p className="text-sm font-semibold text-gray-900">{channel.title}</p>
                      <p className="mt-2 text-xs text-gray-600 leading-5">{channel.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="mt-20">
          <FadeIn>
            <h2 className="text-3xl font-bold text-gray-900">{t.experience.testimonials.title}</h2>
            <p className="mt-3 max-w-2xl text-gray-600">
              {t.experience.testimonials.description}
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
            <h2 className="text-3xl font-bold">{t.experience.visitCta.title}</h2>
            <p className="mt-3 max-w-2xl text-white/80 text-sm">
              {t.experience.visitCta.description}
            </p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/quote">{t.experience.visitCta.primaryCta}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="mailto:hola@elhalcon.com.ar">{t.experience.visitCta.secondaryCta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
