import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "QA & Software Testing | GreaterTechHub",
  description: "Comprehensive testing services ensuring quality and reliability of your software.",
}

export const dynamic = "force-static"

export default function QATesting() {
  const features = [
    "Functional Testing",
    "Performance Testing",
    "Security Testing",
    "Automation Testing",
    "User Acceptance Testing",
    "Bug Tracking & Reporting",
  ]

  return (
    <ServiceLayout
      title="QA & Software Testing"
      subtitle="Comprehensive testing services ensuring quality and reliability of your software products."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Quality assurance is critical to software success. Our comprehensive testing services ensure your
            applications are reliable, secure, and perform optimally across all platforms and scenarios.
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
          <h3 className="text-3xl font-bold mb-4">Ensure Software Quality</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's test your software thoroughly. Contact us for comprehensive QA services.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Get Testing Services
          </button>
        </div>
      </div>
    </ServiceLayout>
  )
}
