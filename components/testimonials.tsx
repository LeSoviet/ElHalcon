"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useI18n } from "@/components/providers/locale-provider"

export default function Testimonials() {
  const t = useI18n()
  const testimonials = t.testimonials.items

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {testimonials.map((testimonial) => (
        <Card key={testimonial.id} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.location}</p>
              </div>
              <p className="text-xs text-gray-400">{testimonial.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
