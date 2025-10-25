import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "App Development | GreaterTechHub",
  description: "Native and cross-platform mobile applications that engage users and drive business growth.",
}

export default function AppDevelopment() {
  const features = [
    "Native & Cross-Platform",
    "User-Centric Design",
    "High Performance",
    "Secure Architecture",
    "App Store Optimization",
    "Real-time Analytics",
  ]

  return (
    <ServiceLayout
      title="App Development"
      subtitle="Native and cross-platform mobile applications that engage users and drive business growth."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            From concept to launch, we develop mobile applications that users love. Whether you need iOS, Android, or
            cross-platform solutions, our experienced team delivers apps that perform flawlessly and drive engagement.
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
          <h3 className="text-3xl font-bold mb-4">Ready to Launch Your App?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's turn your app idea into reality. Contact us for a consultation.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Start Your Project
          </button>
        </div>
      </div>
    </ServiceLayout>
  )
}
