"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Sample gallery images - replace with your actual images
const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=400&width=600", alt: "Gallery image 1" },
  { id: 2, src: "/placeholder.svg?height=400&width=600", alt: "Gallery image 2" },
  { id: 3, src: "/placeholder.svg?height=400&width=600", alt: "Gallery image 3" },
  { id: 4, src: "/placeholder.svg?height=400&width=600", alt: "Gallery image 4" },
  { id: 5, src: "/placeholder.svg?height=400&width=600", alt: "Gallery image 5" },
  { id: 6, src: "/placeholder.svg?height=400&width=600", alt: "Gallery image 6" },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient - more subtle */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-900/10 to-blue-700/10 blur-3xl" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">GALLERY</h2>
          <div className="w-24 h-1 bg-blue-700 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">Take a visual journey through our restaurant and cuisine.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-blue-900/30 group"
              onClick={() => setSelectedImage(index)}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white bg-gray-800/50 p-2 rounded-full hover:bg-gray-700/50 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}

