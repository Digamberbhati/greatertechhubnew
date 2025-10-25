import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Case Study | GreaterTechHub",
  description: "Detailed case study of our successful project implementation.",
}

export default function CaseStudyDetail({ params }: { params: { id: string } }) {
  const caseStudies: Record<
    string,
    {
      title: string
      client: string
      category: string
      challenge: string
      solution: string
      results: string[]
      image: string
      details: string
      technologies: string[]
    }
  > = {
    "1": {
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
      details:
        "RetailCo was struggling with their legacy e-commerce platform that couldn't handle traffic spikes during peak seasons. We designed and built a modern, cloud-native platform using Next.js and AWS, implementing advanced caching strategies and database optimization. The new platform not only handles 3x more traffic but also provides a significantly improved user experience.",
      technologies: ["Next.js", "AWS", "PostgreSQL", "Redis", "Docker"],
    },
    "2": {
      title: "Mobile App for Logistics",
      client: "LogisticsPro",
      category: "App Development",
      challenge: "Need for real-time tracking and route optimization",
      solution: "Developed iOS and Android apps with GPS tracking and AI-powered route optimization",
      results: ["50% improvement in delivery efficiency", "35% reduction in fuel costs", "95% customer satisfaction"],
      image: "/logistics-mobile-app.jpg",
      details:
        "LogisticsPro needed a comprehensive mobile solution for their delivery fleet. We developed native iOS and Android applications with real-time GPS tracking, route optimization using machine learning, and driver communication features. The solution has significantly improved operational efficiency and customer satisfaction.",
      technologies: ["React Native", "Firebase", "Google Maps API", "Machine Learning", "Node.js"],
    },
    "3": {
      title: "Digital Marketing Campaign",
      client: "TechStartup",
      category: "Digital Marketing",
      challenge: "Low brand awareness and limited online presence",
      solution: "Comprehensive SEO, content marketing, and social media strategy",
      results: ["500% increase in organic traffic", "200% growth in social followers", "15% conversion rate"],
      image: "/digital-marketing-campaign.png",
      details:
        "TechStartup had great products but minimal online visibility. We developed a comprehensive digital marketing strategy including SEO optimization, content marketing, and social media campaigns. Within 12 months, they achieved significant growth in organic traffic and brand awareness.",
      technologies: ["SEO", "Content Marketing", "Social Media", "Analytics", "Email Marketing"],
    },
    "4": {
      title: "Cloud Infrastructure Migration",
      client: "EnterpriseBank",
      category: "DevOps & Cloud",
      challenge: "On-premise infrastructure with high maintenance costs and limited scalability",
      solution: "Migrated to AWS with automated CI/CD pipelines and containerization",
      results: ["60% reduction in infrastructure costs", "99.99% uptime achieved", "Faster deployment cycles"],
      image: "/cloud-infrastructure.png",
      details:
        "EnterpriseBank needed to modernize their infrastructure to reduce costs and improve reliability. We orchestrated a complete migration to AWS, implementing containerization with Docker, automated CI/CD pipelines, and comprehensive monitoring. The result is a more reliable, scalable, and cost-effective infrastructure.",
      technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    },
    "5": {
      title: "ERP System Implementation",
      client: "ManufacturingCorp",
      category: "ERP/CRM",
      challenge: "Fragmented systems across departments causing inefficiencies",
      solution: "Implemented integrated ERP system with custom modules for manufacturing",
      results: ["45% improvement in operational efficiency", "30% reduction in errors", "Better data visibility"],
      image: "/erp-system.jpg",
      details:
        "ManufacturingCorp had multiple disconnected systems causing data silos and inefficiencies. We implemented a comprehensive ERP solution with custom modules for manufacturing, inventory management, and supply chain. The integrated system provides real-time visibility and has significantly improved operational efficiency.",
      technologies: ["SAP", "Custom Development", "Database Design", "Integration", "Training"],
    },
    "6": {
      title: "AI Chatbot for Customer Support",
      client: "FinanceServices",
      category: "AI Agents",
      challenge: "High support ticket volume and long response times",
      solution: "Deployed intelligent chatbot handling 80% of common queries",
      results: ["70% reduction in support tickets", "24/7 customer availability", "40% cost savings"],
      image: "/ai-chatbot-customer-support.jpg",
      details:
        "FinanceServices was overwhelmed with customer support tickets. We developed an intelligent AI chatbot using natural language processing that handles 80% of common queries. The chatbot provides 24/7 support, significantly reducing response times and support costs while improving customer satisfaction.",
      technologies: ["NLP", "Machine Learning", "Python", "TensorFlow", "API Integration"],
    },
  }

  const study = caseStudies[params.id]

  if (!study) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
            <Link href="/case-studies" className="text-accent hover:underline">
              Back to Case Studies
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Back Link */}
      <section className="py-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="flex items-center gap-2 text-accent hover:underline font-semibold">
            <ArrowLeft size={20} />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-foreground mb-2">{study.category}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">{study.title}</h1>
          <p className="text-xl text-foreground">Client: {study.client}</p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={study.image || "/placeholder.svg"}
            alt={study.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Challenge */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>

          {/* Solution */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{study.solution}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{study.details}</p>
          </div>

          {/* Results */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {study.results.map((result, index) => (
                <div key={index} className="p-6 bg-secondary rounded-lg border border-border">
                  <p className="text-lg font-semibold text-foreground">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies.map((tech, index) => (
                <span key={index} className="px-4 py-2 bg-accent text-primary rounded-full font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Achieve Similar Results?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how we can help your business succeed with similar solutions.
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
