"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 60,
    hours: 5,
    minutes: 21,
    seconds: 32,
  })

  useEffect(() => {
    const targetDate = new Date("2025-12-16T09:00:00")

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    
    <div className=" rounded-lg p-4 items-center" >
      <div className="flex flex-col justify-center h-full items-center">
      <div className="container mx-auto">
        <div className="flex justify-center gap-4 md:gap-8">
          <TimeCard label="Days" value={timeLeft.days} />
          <TimeCard label="Hrs" value={timeLeft.hours} />
          <TimeCard label="Mins" value={timeLeft.minutes} />
          <TimeCard label="Secs" value={timeLeft.seconds} />
        </div>
      </div>
    </div>
    </div>
  )
}

function TimeCard({ label, value }: { label: string; value: number }) {
  const paddedValue = value.toString().padStart(2, "0")

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 border border-gray-200 rounded-xl bg-[#0a2240] shadow-xl overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={paddedValue}
            initial={{ y: "-100%", opacity: 0, rotateX: -20 }}
            animate={{ y: "0%", opacity: 1, rotateX: 0 }}
            exit={{ y: "100%", opacity: 0, rotateX: 20 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 flex items-center justify-center text-3xl font-extrabold text-white"
          >
            {paddedValue}
          </motion.div>
        </AnimatePresence>

        {/* Top tear binding effect */}
        <div className="absolute top-0 left-0 right-0 h-3 bg-white rounded-t-xl flex justify-between px-2">
          <div className="w-1 h-1 bg-[#0a2240] rounded-full mt-1"></div>
          <div className="w-1 h-1 bg-[#0a2240] rounded-full mt-1"></div>
          <div className="w-1 h-1 bg-[#0a2240] rounded-full mt-1"></div>
        </div>
      </div>
      <span className="text-sm mt-2 text-[#0a2240] tracking-wide">{label}</span>
    </div>
  )
}
