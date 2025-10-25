import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "2D & 3D Animation & Video Production | GreaterTechHub",
  description: "Creative animation and video production services that captivate your audience.",
}

export const dynamic = "force-static"

export default function Animation() {
  const features = [
    "2D Animation",
    "3D Animation",
    "Motion Graphics",
    "Video Production",
    "Visual Effects",
    "Post-Production",
  ]

  return (
    <ServiceLayout
      title="2D & 3D Animation & Video Production"
      subtitle="Creative animation and video production services that captivate your audience and tell your story."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Bring your ideas to life with stunning animation and video production. Our creative team produces
            high-quality visual content that engages audiences and communicates your message effectively.
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
          <h3 className="text-3xl font-bold mb-4">Create Stunning Visual Content</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's bring your vision to life. Contact us for animation and video production services.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Start Your Project
          </button>
        </div>
      </div>
    </ServiceLayout>
  )
}
