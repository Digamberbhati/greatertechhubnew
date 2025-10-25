"use client"

import type { ReactNode } from "react"
import Link from "next/link"

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href: string
}

export function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="group relative h-full p-6 bg-white border border-border rounded-lg hover:border-accent transition-all duration-300 hover:shadow-lg cursor-pointer">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br from-[#B3E5FC] to-[#81D4FA] rounded-lg transition-opacity duration-300"></div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="w-12 h-12 mb-4 text-accent">{icon}</div>

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
      </div>
    </Link>
  )
}
