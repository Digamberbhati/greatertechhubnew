import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle } from "lucide-react"

export const metadata = {
  title: "Website Development | GreaterTechHub",
  description: "Custom, responsive websites built with cutting-edge technologies for optimal performance.",
}

export const dynamic = "force-static"

export default function WebDevelopment() {
  const features = [
    "Responsive Design",
    "SEO Optimization",
    "Fast Performance",
    "Security First",
    "Scalable Architecture",
    "Modern Technologies",
  ]

  const process = [
    { step: "Discovery", description: "Understanding your business goals and requirements" },
    { step: "Design", description: "Creating beautiful, user-centric designs" },
    { step: "Development", description: "Building robust, scalable web applications" },
    { step: "Testing", description: "Comprehensive QA and performance testing" },
    { step: "Deployment", description: "Seamless launch and monitoring" },
    { step: "Support", description: "Ongoing maintenance and optimization" },
  ]

  return (
    <ServiceLayout
      title="Website Development"
      subtitle="Custom, responsive websites built with cutting-edge technologies for optimal performance and user experience."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Overview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We create stunning, high-performance websites that engage users and drive business results. Our team
            combines design excellence with technical expertise to deliver solutions that stand out in the digital
            landscape.
          </p>
        </div>

        {/* Features */}
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

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-white border-2 border-accent rounded-lg">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent text-primary rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.step}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-12 bg-secondary rounded-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Let's create something amazing together. Contact us today for a free consultation.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Get in Touch
          </button>
        </div>
      </div>
    </ServiceLayout>
  )
}
