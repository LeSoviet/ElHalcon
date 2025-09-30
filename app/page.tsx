import { Car, PenTool as Tool, Wrench, Shield, Clock, Users, Award, CheckCircle } from "lucide-react"
import Image from "next/image"
import FadeIn from "@/components/animations/fade-in"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  const heroHighlights = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Repairs",
      subtitle: "Guaranteed results"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Advanced Tools",
      subtitle: "Modern equipment"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Finishes",
      subtitle: "Showroom quality"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "On-Time Delivery",
      subtitle: "Respect for your schedule"
    }
  ]

  const transformationSteps = [
    {
      icon: <Wrench className="w-5 h-5 text-primary" />,
      title: "Structural Precision",
      description: "We realign every panel with millimetric accuracy before moving to finishing."
    },
    {
      icon: <Tool className="w-5 h-5 text-primary" />,
      title: "Color Mastery",
      description: "Our lab reproduces OEM colors and special effects with exact fidelity."
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      title: "Rigorous Checks",
      description: "Each vehicle leaves the booth after a 40-point inspection and final polish."
    }
  ]

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
                  <span className="text-sm uppercase tracking-[0.3em] text-white/70">Since 1984</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  El Halcon Body Shop & Paint Excellence
                </h1>
                <p className="mt-6 text-lg md:text-xl text-white/80">
                  40 years delivering structural precision, flawless paint, and handcrafted finishes from the same
                  trusted workshop in Buenos Aires.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
                    <Link href="/quote">Request a Quote</Link>
                  </Button>
                  <span className="text-sm text-white/70">
                    Personal attention • Insurance specialists • Classic car experts
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
              <div className="relative space-y-6">
                <div className="relative h-[22rem] overflow-hidden rounded-3xl shadow-2xl lg:h-[26rem]">
                  <Image
                    src="https://images.unsplash.com/photo-1597006534327-310deb292438?auto=format&fit=crop&w=1200&q=80"
                    alt="Technicians inspecting a restored vehicle"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/90 p-6 text-primary shadow-xl backdrop-blur">
                    <p className="text-sm font-semibold uppercase tracking-wide">Vehicles restored</p>
                    <p className="mt-2 text-3xl font-bold">5,000+</p>
                    <p className="mt-2 text-sm text-primary/70">Every project documented and guaranteed.</p>
                  </div>
                  <div className="rounded-2xl bg-white/20 p-6 text-white shadow-lg">
                    <p className="text-sm font-semibold uppercase tracking-wide">Dedicated booths</p>
                    <p className="mt-2 text-3xl font-bold">3</p>
                    <p className="mt-2 text-sm text-white/80">Separated for preparation, paint, and curing.</p>
                  </div>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
                <p className="text-gray-600 mb-4 text-lg">
                  Since 1984, El Halcon has established itself as a leading automotive body shop and paint service in
                  Buenos Aires. Our commitment to quality and personalized attention has earned us the trust of
                  thousands of clients.
                </p>
                <p className="text-gray-600 mb-6 text-lg">
                  Located at the same place for 40 years, our family shop combines traditional experience with the most
                  modern techniques to deliver exceptional results on every job.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">40+</div>
                    <div className="text-sm text-gray-600">Years of Experience</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                    <div className="text-sm text-gray-600">Vehicles Repaired</div>
                  </div>
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
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trusted Body Shop</p>
                  <p className="mt-2 text-lg text-gray-700">
                    Dedicated paint booths, color-matching lab, and structural repair equipment for flawless results.
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              We offer a wide range of specialized services to keep your vehicle in perfect condition
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Body Repair</h3>
                <p className="text-gray-600 mb-4">
                  We repair all types of dents, dings, and structural damage to your vehicle's body with professional
                  techniques and impeccable finishes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Dent and ding repair
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Frame straightening
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Panel replacement
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Tool className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Professional Paint</h3>
                <p className="text-gray-600 mb-4">
                  We use high-quality paints and cutting-edge technology to achieve durable finishes that protect and
                  beautify your vehicle.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Complete or partial paint
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Exact color matching
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Special finishes
                  </li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Complete Restoration</h3>
                <p className="text-gray-600 mb-4">
                  We bring vehicles with severe damage or old cars back to life, combining traditional techniques with
                  modern technology.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Classic car restoration
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Comprehensive repairs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Anti-corrosive treatment
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our commitment to excellence and customer satisfaction sets us apart
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Proven Experience</h3>
                <p className="text-gray-600">
                  40 years in the business support us, we know every detail of body shop and paint work.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Total Guarantee</h3>
                <p className="text-gray-600">
                  We stand behind our work with a written guarantee on all repairs performed.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
                <p className="text-gray-600">We use top-quality materials and professional equipment on every job.</p>
              </div>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">On-Time Delivery</h3>
                <p className="text-gray-600">We deliver work on the agreed time, respecting your time and needs.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr),minmax(0,1.1fr)] items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Every restoration tells a story</h2>
                <p className="text-gray-600 mb-8 text-lg">
                  From first assessment to the final polish, we document each step so you can follow the transformation.
                  Our team treats every vehicle with the same meticulous care it had the day it left the factory.
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
              <div className="grid gap-4 sm:grid-cols-2">
                {["https://images.unsplash.com/photo-1521721134996-5264d20318d9?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1659540913679-0f1f75ad707b?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1597006586321-09b0a723b861?auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1521721134996-5264d20318d9?auto=format&fit=crop&w=800&q=60"].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ${
                      index % 2 === 0 ? "sm:translate-y-6" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt="Restoration collage photograph"
                      fill
                      sizes="(min-width: 1024px) 30vw, 80vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Customers Say</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Our customers' satisfaction is our best calling card
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <Testimonials />
          </FadeIn>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Business Hours</h2>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-bold mb-2">Monday to Friday</h3>
                  <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-2">
                    <div className="flex gap-2 items-center">
                      <span className="font-medium">Morning:</span>
                      <span>8:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="font-medium">Afternoon:</span>
                      <span>3:00 PM - 6:00 PM</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 italic">Closed for lunch from 1:00 PM to 3:00 PM</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Weekends</h3>
                  <p>
                    Saturday and Sunday: <span className="font-medium">Closed</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to restore your vehicle?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Request a free quote and discover why we are the trusted shop for thousands of customers
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/quote">Get Free Quote</Link>
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
