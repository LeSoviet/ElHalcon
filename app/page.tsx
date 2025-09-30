import { Car, PenTool as Tool, Wrench, Shield, Clock, Users, Award, CheckCircle } from "lucide-react"
import FadeIn from "@/components/animations/fade-in"
import WorkGallery from "@/components/work-gallery"
import Testimonials from "@/components/testimonials"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="w-full h-full bg-[url('/pattern.png')] bg-repeat opacity-10"></div>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <FadeIn direction="down" duration={0.7}>
            <div className="mb-6 flex justify-center">
              <div className="bg-white text-primary font-bold text-4xl p-4 rounded-xl shadow-lg">EH</div>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.2} duration={0.7}>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">El Halcon - Body Shop & Paint</h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.4} duration={0.7}>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              40 years of experience in body shop and paint, at the same location
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.6} duration={0.7}>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <Link href="/quote">Request a Quote</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-gray-200">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <Car className="w-24 h-24 mx-auto mb-4 opacity-30" />
                    <p className="text-lg">Workshop Image</p>
                  </div>
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

      {/* Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Work Gallery</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              See some of our most outstanding work and the quality that characterizes us
            </p>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <WorkGallery />
          </FadeIn>
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
