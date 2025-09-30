import { Phone, Mail, MapPin, Clock } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FadeIn from "@/components/animations/fade-in"

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <FadeIn>
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Need a Quote?</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            Get a free quote with no obligation. Our team will evaluate your vehicle and provide you with a detailed and
            transparent quote as soon as possible.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8 mb-12 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Methods</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600 text-sm">+54 11 1234-5678</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600 text-sm">info@elhalcon.com.ar</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-600 text-sm">123 Example Ave, Buenos Aires</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-gray-600 text-sm">Mon-Fri: 8:00AM-6:00PM</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-bold mb-2">What's included in our quote?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Complete vehicle and damage evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Detailed parts list with prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Specified labor costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Estimated repair time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Warranty on work performed</span>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Form</h2>
            <p className="text-center text-gray-600 mb-6">
              Fill out the form and we will contact you within 24 business hours
            </p>
            <ContactForm />
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
