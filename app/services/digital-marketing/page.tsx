import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Digital Marketing & Branding | GreaterTechHub",
  description: "Strategic marketing campaigns and branding solutions to elevate your online presence.",
}

export default function DigitalMarketing() {
  const features = [
    "SEO Optimization",
    "Content Marketing",
    "Social Media Strategy",
    "PPC Campaigns",
    "Brand Development",
    "Analytics & Reporting",
  ]

  return (
    <ServiceLayout
      title="Digital Marketing & Branding"
      subtitle="Strategic marketing campaigns and branding solutions to elevate your online presence and drive growth."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            In today's digital world, a strong online presence is essential. We develop comprehensive marketing
            strategies and branding solutions that connect you with your target audience and drive measurable results.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-lg font-semibold text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center p-12 bg-secondary rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Boost Your Online Presence</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's create a marketing strategy that drives results. Schedule a consultation today.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Get Started
          </button>
        </div>
      </div>
    </ServiceLayout>
  )
}
