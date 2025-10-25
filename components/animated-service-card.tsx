"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

interface AnimatedServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
  index: number
}

export function AnimatedServiceCard({ icon, title, description, href, index }: AnimatedServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <Link href={href}>
      <div
        ref={cardRef}
        className="group relative h-full p-6 bg-white border border-border rounded-lg hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer"
        style={{
          animation: isVisible ? `slideUp 0.6s ease-out ${index * 0.1}s both` : "none",
        }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-[#B3E5FC] to-[#81D4FA] rounded-lg transition-opacity duration-300"></div>

        {/* Animated icon container */}
        <div className="relative z-10 mb-4">
          <div className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-300">{icon}</div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">{title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

        {/* Arrow indicator */}
        <div className="mt-4 inline-block text-accent opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
