"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
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
]

export default function Testimonials() {
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
