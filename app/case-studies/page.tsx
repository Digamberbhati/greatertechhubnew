import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies | GreaterTechHub",
  description: "Explore our successful projects and see how we've helped businesses achieve their goals.",
}

export const dynamic = "force-static"

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Transformation",
      client: "RetailCo",
      category: "Web Development",
      challenge: "Legacy system unable to handle peak traffic during sales events",
      solution: "Built a scalable, cloud-native e-commerce platform with real-time inventory management",
      results: [
        "300% increase in traffic capacity",
        "40% reduction in page load time",
        "25% increase in conversion rate",
      ],
      image: "/ecommerce-platform-concept.png",
    },
    {
      id: 2,
      title: "Mobile App for Logistics",
      client: "LogisticsPro",
      category: "App Development",
      challenge: "Need for real-time tracking and route optimization",
      solution: "Developed iOS and Android apps with GPS tracking and AI-powered route optimization",
      results: ["50% improvement in delivery efficiency", "35% reduction in fuel costs", "95% customer satisfaction"],
      image: "/logistics-mobile-app.jpg",
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      client: "TechStartup",
      category: "Digital Marketing",
      challenge: "Low brand awareness and limited online presence",
      solution: "Comprehensive SEO, content marketing, and social media strategy",
      results: ["500% increase in organic traffic", "200% growth in social followers", "15% conversion rate"],
      image: "/digital-marketing-campaign.png",
    },
    {
      id: 4,
      title: "Cloud Infrastructure Migration",
      client: "EnterpriseBank",
      category: "DevOps & Cloud",
      challenge: "On-premise infrastructure with high maintenance costs and limited scalability",
      solution: "Migrated to AWS with automated CI/CD pipelines and containerization",
      results: ["60% reduction in infrastructure costs", "99.99% uptime achieved", "Faster deployment cycles"],
      image: "/cloud-infrastructure.png",
    },
    {
      id: 5,
      title: "ERP System Implementation",
      client: "ManufacturingCorp",
      category: "ERP/CRM",
      challenge: "Fragmented systems across departments causing inefficiencies",
      solution: "Implemented integrated ERP system with custom modules for manufacturing",
      results: ["45% improvement in operational efficiency", "30% reduction in errors", "Better data visibility"],
      image: "/erp-system.jpg",
    },
    {
      id: 6,
      title: "AI Chatbot for Customer Support",
      client: "FinanceServices",
      category: "AI Agents",
      challenge: "High support ticket volume and long response times",
      solution: "Deployed intelligent chatbot handling 80% of common queries",
      results: ["70% reduction in support tickets", "24/7 customer availability", "40% cost savings"],
      image: "/ai-chatbot-customer-support.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">Case Studies</h1>
          <p className="text-xl text-foreground max-w-2xl">
            Real-world examples of how we've helped businesses achieve their goals through innovative technology
            solutions.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <div className="group h-full bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 bg-secondary overflow-hidden">
                    <img
                      src={study.image || "/placeholder.svg"}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm font-semibold text-accent mb-2">{study.category}</p>
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{study.client}</p>

                    {/* Results Preview */}
                    <div className="space-y-2 mb-6">
                      {study.results.slice(0, 2).map((result, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          • {result}
                        </p>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                      Read Case Study
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your business achieve similar results.
          </p>
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
            Schedule Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
