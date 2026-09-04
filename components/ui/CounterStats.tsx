'use client'

import React, { useState, useEffect, useRef } from 'react'

interface StatItem {
  end: number
  prefix?: string
  suffix: string
  label: string
}

const STATS: StatItem[] = [
  { end: 10, suffix: '+ Years', label: 'Senior Clinical Practice' },
  { end: 5, suffix: ' Specialist', label: 'MPT Certified Physiotherapists' },
  { end: 2, suffix: ' Branches', label: 'Rajpur Road & Bhaniyawala' },
  { end: 7, suffix: ' Days', label: 'Weekly Clinic Operations' },
]

function SingleCounter({ end, prefix = '', suffix }: { end: number; prefix?: string; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1600 // 1.6 seconds animation duration
          const startTime = performance.now()

          const updateCount = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)

            // Ease out cubic formula for smooth decelerating count
            const easeOutProgress = 1 - Math.pow(1 - progress, 3)
            const currentVal = Math.floor(easeOutProgress * end)

            setCount(currentVal)

            if (progress < 1) {
              requestAnimationFrame(updateCount)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(updateCount)
        }
      },
      { threshold: 0.2 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [end, hasAnimated])

  return (
    <div ref={elementRef} className="block text-3xl md:text-[2.25rem] font-bold text-[#D97B4F]">
      {prefix}{count}{suffix}
    </div>
  )
}

export function CounterStats() {
  return (
    <section className="bg-white py-8 border-b border-[#E8E4DF] shadow-sm">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-[#FAF9F7] border border-[#E8E4DF] hover:bg-white hover:border-[#D97B4F]/40 hover:shadow-xl hover:-translate-y-1.5 cursor-pointer transition-all duration-300">
              <SingleCounter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="text-sm text-[#4A4744] font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
