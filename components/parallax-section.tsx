"use client"

import type { ReactNode } from "react"
import { useEffect, useRef, useState } from "react"

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number
}

export function ParallaxSection({ children, offset = 50 }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [yOffset, setYOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const elementOffset = window.innerHeight - rect.top
        setYOffset(elementOffset * 0.5)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div ref={sectionRef} style={{ transform: `translateY(${yOffset * 0.1}px)` }} className="transition-transform">
      {children}
    </div>
  )
}
