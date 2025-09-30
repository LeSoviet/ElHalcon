"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Car } from "lucide-react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    title: "Complete Ford Falcon Restoration",
    description: "Comprehensive body and paint restoration of a classic Ford Falcon",
    category: "Restoration",
  },
  {
    id: 2,
    title: "Complete Chevrolet Paint",
    description: "Complete mirror-finish paint job on Chevrolet Cruze",
    category: "Paint",
  },
  {
    id: 3,
    title: "Side Impact Repair",
    description: "Side damage repair with panel replacement and paint",
    category: "Repair",
  },
  {
    id: 4,
    title: "Front Bumper Restoration",
    description: "Restoration and painting of bumper with major damage",
    category: "Repair",
  },
  {
    id: 5,
    title: "Fender Repair",
    description: "Dented fender repair using PDR technique",
    category: "Repair",
  },
  {
    id: 6,
    title: "Hood Painting",
    description: "Hood paint work with hail damage",
    category: "Paint",
  },
  {
    id: 7,
    title: "Renault 12 Restoration",
    description: "Complete restoration of a classic Argentine Renault 12",
    category: "Restoration",
  },
  {
    id: 8,
    title: "Rear Door Repair",
    description: "Rear door repair and paint with structural damage",
    category: "Repair",
  },
  {
    id: 9,
    title: "Volkswagen Gol Paint",
    description: "Complete repaint of Volkswagen Gol with color change",
    category: "Paint",
  },
]

export default function WorkGallery() {
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  const handlePrevious = () => {
    if (!selectedItem) return

    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id)
    const previousIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelectedItem(galleryItems[previousIndex])
  }

  const handleNext = () => {
    if (!selectedItem) return

    const currentIndex = galleryItems.findIndex((item) => item.id === selectedItem.id)
    const nextIndex = (currentIndex + 1) % galleryItems.length
    setSelectedItem(galleryItems[nextIndex])
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:scale-[1.02] group"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative h-52 overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <Car className="w-16 h-16 opacity-30" />
              </div>
              <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded">
                {item.category}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <DialogContent className="max-w-3xl w-[90vw]">
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
            <DialogDescription>{selectedItem?.description}</DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <div className="relative h-64 md:h-96 bg-gray-200 rounded-md flex items-center justify-center">
              <Car className="w-24 h-24 text-gray-400 opacity-30" />
            </div>
          </div>

          <div className="flex justify-between mt-4">
            <Button variant="outline" size="icon" onClick={handlePrevious}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
