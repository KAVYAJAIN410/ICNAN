"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const hexagonData = [
  {
    id: 1,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Circuit board visualization",
  },
  {
    id: 2,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Molecular structure",
  },
  {
    id: 3,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Food sample",
  },
  {
    id: 4,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Mechanical component",
  },
  {
    id: 5,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Earth in hand",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Molecular network",
  },
  {
    id: 7,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Microchip",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Data visualization",
  },
  {
    id: 9,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Nanotechnology",
  },
  {
    id: 10,
    image: "/placeholder.svg?height=200&width=200",
    alt: "Conference logo",
    text: "ICNAN '25",
  },
]

export default function HexagonGrid() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="hexagon-grid">
      {hexagonData.map((hex) => (
        <div key={hex.id} className="hexagon-wrapper">
          <div className="hexagon">
            <div className="hexagon-inner">
              {hex.text ? (
                <div className="flex items-center justify-center h-full text-[#3a7bd5] font-bold text-2xl">
                  {hex.text}
                </div>
              ) : (
                <Image src={hex.image || "/placeholder.svg"} alt={hex.alt} fill className="object-cover" />
              )}
            </div>
          </div>
        </div>
      ))}
      <style jsx global>{`
        .hexagon-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 15px;
          margin: 0 auto;
          max-width: 800px;
          padding: 20px;
        }
        
        @media (min-width: 640px) {
          .hexagon-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }
        
        .hexagon-wrapper {
          grid-column-end: span 2;
          grid-row-end: span 2;
          position: relative;
          visibility: hidden;
          outline: 1px solid transparent; /* Fix for jagged edges in FF */
        }
        
        /* Specific positioning to create honeycomb pattern */
        .hexagon-wrapper:nth-child(5n+1) { grid-column-start: 1; }
        .hexagon-wrapper:nth-child(5n+3) { grid-column-start: 3; }
        .hexagon-wrapper:nth-child(5n+5) { grid-column-start: 5; }
        
        .hexagon-wrapper:nth-child(5n+2),
        .hexagon-wrapper:nth-child(5n+4) {
          grid-row-start: 2;
        }
        
        .hexagon-wrapper:nth-child(5n+6),
        .hexagon-wrapper:nth-child(5n+8) {
          grid-row-start: 4;
        }
        
        .hexagon-wrapper:nth-child(5n+7),
        .hexagon-wrapper:nth-child(5n+9),
        .hexagon-wrapper:nth-child(5n+10) {
          grid-row-start: 6;
        }
        
        @media (max-width: 639px) {
          .hexagon-wrapper:nth-child(5n+1) { grid-column-start: 1; }
          .hexagon-wrapper:nth-child(5n+3) { grid-column-start: 1; }
          .hexagon-wrapper:nth-child(5n+5) { grid-column-start: 3; }
          
          .hexagon-wrapper:nth-child(5n+2) { grid-row-start: 2; grid-column-start: 3; }
          .hexagon-wrapper:nth-child(5n+4) { grid-row-start: 4; grid-column-start: 1; }
          
          .hexagon-wrapper:nth-child(5n+6) { grid-row-start: 4; grid-column-start: 3; }
          .hexagon-wrapper:nth-child(5n+8) { grid-row-start: 6; grid-column-start: 3; }
          
          .hexagon-wrapper:nth-child(5n+7) { grid-row-start: 6; grid-column-start: 1; }
          .hexagon-wrapper:nth-child(5n+9) { grid-row-start: 8; grid-column-start: 1; }
          .hexagon-wrapper:nth-child(5n+10) { grid-row-start: 8; grid-column-start: 3; }
        }
        
        .hexagon {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: rotate(30deg);
          overflow: hidden;
          visibility: visible;
          outline: 1px solid transparent; /* Fix for jagged edges in FF */
        }
        
        .hexagon-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          transform: rotate(-30deg);
          overflow: hidden;
          visibility: visible;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: white;
          border: 4px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
      `}</style>
    </div>
  )
}
