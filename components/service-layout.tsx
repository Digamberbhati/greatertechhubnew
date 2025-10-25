import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { ReactNode } from "react"

interface ServiceLayoutProps {
  title: string
  subtitle: string
  children: ReactNode
}

export function ServiceLayout({ title, subtitle, children }: ServiceLayoutProps) {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">{title}</h1>
          <p className="text-xl text-foreground max-w-2xl">{subtitle}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">{children}</section>

      <Footer />
    </main>
  )
}
