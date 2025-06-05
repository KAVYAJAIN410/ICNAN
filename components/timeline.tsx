"use client"

import { useEffect, useState } from "react"
// add on top
import { motion } from "framer-motion"

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1 },
}


interface TimelineItem {
  id: number
  title: string
  subtitle?: string
  date: string
  status?: "closed" | "active" | "upcoming"
  position: "top" | "bottom"
}

export default function ResponsiveTimeline() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: "Abstract Submission",
      subtitle: "Extended Abstract (2 pages, 1000 words)",
      date: "01.10.2025",
      position: "top",
    },
    {
      id: 2,
      title: "Acceptance",
      subtitle: "",
      date: "15.10.2025",
      position: "bottom",
    },
    {
      id: 3,
      title: "Early Bird",
      subtitle: "Registration",
      date: "01.10.2025",
      position: "top",
    },
    {
      id: 4,
      title: "Last date",
      subtitle: "For Registration",
      date: "15.11.2025",
      position: "bottom",
    },
    {
      id: 5,
      title: "Last Date ",
      subtitle: "For Full paper submission",
      date: "20.11.2025",
      position: "top",
    },
    {
      id: 6,
      title: "Conference Dates",
      subtitle: "",
      date: "Dec 16-19,2025",
      position: "bottom",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">


      {isMobile ? <MobileTimeline items={timelineItems} /> : <DesktopTimeline items={timelineItems} />}
    </div>
  )
}

function DesktopTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <motion.div
      className="relative"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }} // Trigger when 20% of component is visible
    >
      <div className="flex items-center">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="flex-1 relative"
            style={{ zIndex: items.length - index }}
            variants={itemVariants}
          >
            {/* Label */}
            <div
              className={`absolute ${item.position === "top" ? "-top-24" : "bottom-[-4.5rem]"} ${index === 0 ? "left-0" : index === items.length - 1 ? "right-0" : "left-1/2 transform -translate-x-1/2"} w-48 text-center`}
            >
              <div className="flex flex-col items-center">
              <motion.div
                  className={`h-12 w-1 bg-[#1e3a8a] mt-2  ${item.position === "top" ? "hidden" : ""}`}
                  variants={itemVariants}
                ></motion.div>
                <motion.div
                  className={`text-center ${item.status === "closed" ? "text-red-600" : ""}`}
                  variants={itemVariants}
                >
                  <div className="font-medium">{item.title}</div>
                  {item.subtitle && <div className="text-sm">{item.subtitle}</div>}
                </motion.div>
                <motion.div
                  className={`h-12 w-1 bg-[#1e3a8a] mt-2  ${item.position === "bottom" ? "hidden" : ""}`}
                  variants={itemVariants}
                ></motion.div>
              </div>
            </div>

            {/* Timeline segment */}
            <div
              className={`h-16 relative ${index === 0 ? "rounded-l-full" : ""} ${index === items.length - 1 ? "rounded-r-full" : ""}`}
            >
              <div
                className={`absolute inset-0 ${item.status === "closed" ? "bg-[#1e3a8a]" : "bg-[#2563eb]"} ${index === 0 ? "rounded-l-full" : ""} ${index === items.length - 1 ? "rounded-r-full" : ""}`}
              >
                {/* Connector triangles */}
                {index < items.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-white transform translate-x-3 skew-x-[20deg] z-10"></div>
                )}
                {index > 0 && (
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-white transform -translate-x-3 -skew-x-[20deg] z-10"></div>
                )}

                {/* Date / CLOSED */}
                <div className="h-full flex items-center justify-center text-white font-medium relative">
                  <span className="z-10">
                    {item.status === "closed" ? "CLOSED" : item.date}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}


function MobileTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#1e3a8a]"></div>

      <div className="space-y-12">
        {items.map((item) => (
          <div key={item.id} className="relative">
            {/* Circle marker */}
            <div className="absolute left-[-1.75rem] top-0 w-4 h-4 rounded-full bg-[#1e3a8a] border-4 border-white"></div>

            {/* Content */}
            <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
              <div className={`font-medium ${item.status === "closed" ? "text-red-600" : ""}`}>
                {item.title}
                {item.subtitle && <div className="text-sm">{item.subtitle}</div>}
              </div>
              <div className="mt-2 text-sm font-medium">
                {item.status === "closed" ? (
                  <span className="inline-block px-2 py-1 bg-[#1e3a8a] text-white rounded">CLOSED</span>
                ) : (
                  item.date
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
