"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog2"
import { cn } from "@/lib/utils"

// Sample event images - replace with your actual event images
const eventImages = [
  {
    id: 1,
    src: "@/public/16/2.jpg",
    alt: "Event photo 1",
    width: 800,
    height: 800,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Event photo 2",
    width: 800,
    height: 800,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 3",
    width: 800,
    height: 800,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=800&width=800",
    alt: "Event photo 4",
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 5",
    width: 800,
    height: 800,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Event photo 6",
    width: 800,
    height: 800,
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 7",
    width: 800,
    height: 800,
  },
  {
    id: 8,
    src: "/placeholder.svg?height=800&width=800",
    alt: "Event photo 8",
    width: 800,
    height: 800,
  },
  {
    id: 10,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Event photo 10",
    width: 800,
    height: 800,
  },
  {
    id: 11,
    src: "/placeholder.svg?height=800&width=800",
    alt: "Event photo 11",
    width: 800,
    height: 800,
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 13,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 600,
  },
  {
    id: 14,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 15,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 600,
  },
  {
    id: 16,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 17,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 18,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 19,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 20,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 21,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 22,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 23,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },
  {
    id: 24,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Event photo 12",
    width: 800,
    height: 800,
  },  
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof eventImages)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventImages.map((image) => (
          <div
            key={image.id}
            className={cn(
              "overflow-hidden rounded-lg border bg-background cursor-pointer transition-all hover:opacity-90 hover:shadow-md",
             
            )}
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
               src={`/16/${image.id + 1}.jpg`} 
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
          {selectedImage && (
            <div className="relative w-full h-[80vh]">
              <Image
                 src={`/16/${selectedImage.id + 1}.jpg`} 
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
