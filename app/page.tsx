"use client"

import { Car, PenTool as Tool, Wrench, Shield, Clock, Users, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import FadeIn from "@/components/animations/fade-in"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/components/providers/locale-provider"

export default function Home() {
  const t = useI18n()

  const heroHighlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      ...t.home.hero.highlights[0]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      ...t.home.hero.highlights[1]
    },
    {
      icon: <Award className="w-6 h-6" />,
      ...t.home.hero.highlights[2]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      ...t.home.hero.highlights[3]
    }
  ]

  const transformationSteps = [
    {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      ...t.home.transformation.steps[0]
    },
    {
      icon: <Tool className="w-5 h-5 text-primary" />,
      ...t.home.transformation.steps[1]
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      ...t.home.transformation.steps[2]
    }
  ]

  const customerHighlights = t.home.customerExperience.highlights

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80"
            alt="Classic car being restored inside a workshop"
            fill
            priority
            className="object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-900/80 to-blue-700/70" />
        </div>
        <div className="container relative z-10 mx-auto px-4 py-24 text-white lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
            <FadeIn direction="up" duration={0.7}>
              <div className="max-w-xl">
                <div className="mb-8 flex items-center gap-3">
                  <div className="bg-white text-primary font-bold text-3xl p-4 rounded-2xl shadow-lg">EH</div>
                  <span className="text-sm uppercase tracking-[0.3em] text-white/70">{t.home.hero.badge}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {t.home.hero.title}
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/80">
                  {t.home.hero.description}
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                    <Link href="/quote">{t.home.hero.ctaPrimary}</Link>
                  </Button>
                  <span className="text-sm text-white/70">
                    {t.home.hero.ctaSecondary}
                  </span>
                </div>
                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                  {heroHighlights.map((highlight, index) => (
                    <div
                      key={highlight.title}
                      className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                      style={{ transitionDelay: `${index * 80}ms` }}
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white">
                        {highlight.icon}
                      </div>
                      <p className="font-semibold text-lg">{highlight.title}</p>
                      <p className="text-sm text-white/70">{highlight.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} duration={0.7}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/90 p-6 text-primary shadow-xl backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-wide">{t.home.hero.metrics[0].label}</p>
                  <p className="mt-2 text-3xl font-bold">{t.home.hero.metrics[0].value}</p>
                  <p className="mt-2 text-sm text-primary/70">{t.home.hero.metrics[0].detail}</p>
                </div>
                <div className="rounded-2xl bg-primary/90 p-6 text-white shadow-lg">
                  <p className="text-sm font-semibold uppercase tracking-wide">{t.home.hero.metrics[1].label}</p>
                  <p className="mt-2 text-3xl font-bold">{t.home.hero.metrics[1].value}</p>
                  <p className="mt-2 text-sm text-white/80">{t.home.hero.metrics[1].detail}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)]">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.home.about.title}</h2>
                {t.home.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-gray-600 mb-4 text-lg">
                    {paragraph}
                  </p>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  {t.home.about.stats.map((stat) => (
                    <div key={stat.label} className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=80"
                  alt="Technician applying fresh coat of paint to a car"
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-5 shadow-lg backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.home.about.featureCard.badge}</p>
                  <p className="mt-2 text-lg text-gray-700">
                    {t.home.about.featureCard.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.home.services.title}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.home.services.description}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Car className="w-8 h-8 text-primary" />, delay: 0.1 },
              { icon: <Tool className="w-8 h-8 text-primary" />, delay: 0.2 },
              { icon: <Wrench className="w-8 h-8 text-primary" />, delay: 0.3 }
            ].map((service, index) => (
              <FadeIn key={index} direction="up" delay={service.delay}>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.home.services.cards[index].title}</h3>
                  <p className="text-gray-600 mb-4">
                    {t.home.services.cards[index].description}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {t.home.services.cards[index].features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">{t.home.whyChoose.title}</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {t.home.whyChoose.description}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6 text-primary" />, delay: 0.1 },
              { icon: <Shield className="w-6 h-6 text-primary" />, delay: 0.2 },
              { icon: <Award className="w-6 h-6 text-primary" />, delay: 0.3 },
              { icon: <Clock className="w-6 h-6 text-primary" />, delay: 0.4 }
            ].map((item, index) => (
              <FadeIn key={index} direction="up" delay={item.delay}>
                <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{t.home.whyChoose.cards[index].title}</h3>
                  <p className="text-gray-600">
                    {t.home.whyChoose.cards[index].description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.home.transformation.title}</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {t.home.transformation.intro}
                </p>
                <div className="space-y-5">
                  {transformationSteps.map((step) => (
                    <div key={step.title} className="flex items-start gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                        {step.icon}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-gray-900">{step.title}</p>
                        <p className="text-sm text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="grid gap-6">
                <div className="rounded-3xl border border-primary/10 bg-white p-8 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">{t.home.transformation.project.badge}</p>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900">{t.home.transformation.project.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {t.home.transformation.project.description}
                  </p>
                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {t.home.transformation.project.metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl bg-primary/5 p-4 text-primary">
                        <p className="text-3xl font-bold">{metric.value}</p>
                        <p className="text-xs uppercase tracking-wide">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {t.home.transformation.project.stories.map((story) => (
                    <div key={story.title} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
                      <h4 className="text-lg font-semibold text-gray-900">{story.title}</h4>
                      <p className="mt-3 text-sm text-gray-600">{story.detail}</p>
                      <p className="mt-4 text-sm font-semibold text-primary">{story.result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Customer Experience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1fr)] items-start">
            <FadeIn direction="left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{t.home.customerExperience.badge}</p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold">{t.home.customerExperience.title}</h2>
                <p className="mt-4 text-gray-600 text-lg">
                  {t.home.customerExperience.description}
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {t.home.customerExperience.highlights.map((highlight) => (
                    <div key={highlight.label} className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                      <p className="text-sm font-semibold text-primary">{highlight.label}</p>
                      <p className="mt-2 text-2xl font-bold text-gray-900">{highlight.value}</p>
                      <p className="mt-2 text-xs text-gray-600">{highlight.detail}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    <Link href="/experience">{t.home.customerExperience.cta}</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-3xl border border-primary/10 bg-white p-6 shadow-lg">
                <Testimonials />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Visit & Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] items-start">
            <FadeIn direction="left">
              <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{t.home.visit.badge}</p>
                <h2 className="mt-3 text-3xl font-bold text-gray-900">{t.home.visit.title}</h2>
                <p className="mt-4 text-gray-600 text-sm">
                  {t.home.visit.description}
                </p>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.home.visit.weekday.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-gray-600">
                      <li className="flex items-center justify-between">
                        <span>{t.home.visit.weekday.morningLabel}</span>
                        <span>{t.home.visit.weekday.morningHours}</span>
                      </li>
                      <li className="flex items-center justify-between">
                        <span>{t.home.visit.weekday.afternoonLabel}</span>
                        <span>{t.home.visit.weekday.afternoonHours}</span>
                      </li>
                    </ul>
                    <p className="mt-3 text-xs text-gray-500 italic">{t.home.visit.weekday.note}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{t.home.visit.weekend.title}</h3>
                    <p className="mt-2 text-sm text-gray-600">{t.home.visit.weekend.description}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="rounded-3xl bg-primary text-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold">{t.home.visit.contactBox.title}</h3>
                <p className="mt-4 text-sm text-white/80">
                  {t.home.visit.contactBox.descriptionPrefix} <span className="font-semibold">{t.home.visit.contactBox.email}</span> {t.home.visit.contactBox.descriptionMiddle} <span className="font-semibold">{t.home.visit.contactBox.phone}</span>. {t.home.visit.contactBox.descriptionSuffix}
                </p>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-wide text-white/60">{t.home.visit.contactBox.addressLabel}</p>
                    <p className="mt-2 text-lg font-semibold">{t.home.visit.contactBox.address}</p>
                    <p className="text-sm text-white/75">{t.home.visit.contactBox.parkingNote}</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-xs uppercase tracking-wide text-white/60">{t.home.visit.contactBox.servicesLabel}</p>
                    <p className="mt-2 text-sm text-white/80">{t.home.visit.contactBox.servicesDescription}</p>
                  </div>
                  <Button asChild size="lg" className="mt-2 bg-white text-primary hover:bg-gray-100">
                    <Link href="/experience#visita">{t.home.visit.contactBox.cta}</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.cta.title}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t.home.cta.description}
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/quote">{t.home.cta.button}</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
