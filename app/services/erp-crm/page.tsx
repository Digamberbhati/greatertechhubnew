import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "ERP / CRM & System Design | GreaterTechHub",
  description: "Enterprise solutions tailored to streamline your business processes.",
}

export const dynamic = "force-static"

export default function ERPCRM() {
  const features = [
    "Custom ERP Solutions",
    "CRM Implementation",
    "Business Process Optimization",
    "Data Integration",
    "User Training",
    "Ongoing Support",
  ]

  return (
    <ServiceLayout
      title="ERP / CRM & System Design"
      subtitle="Enterprise solutions tailored to streamline your business processes and improve efficiency."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We design and implement enterprise resource planning and customer relationship management systems that
            streamline operations, improve decision-making, and drive business growth.
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
          <h3 className="text-3xl font-bold mb-4">Streamline Your Business</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's implement an ERP/CRM solution that works for your business. Schedule a consultation.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </ServiceLayout>
  )
}
