import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AnimatedServiceCard } from "@/components/animated-service-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { TestimonialCard } from "@/components/testimonial-card"
import { Globe, Smartphone, TrendingUp, Cloud, Database, CheckCircle, Zap, Film } from "lucide-react"

export const dynamic = "force-static"

export default function Home() {
  const services = [
    {
      icon: <Globe className="w-full h-full" />,
      title: "Website Development",
      description: "Custom, responsive websites built with cutting-edge technologies for optimal performance.",
      href: "/services/web-development",
    },
    {
      icon: <Smartphone className="w-full h-full" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      href: "/services/app-development",
    },
    {
      icon: <TrendingUp className="w-full h-full" />,
      title: "Digital Marketing & Branding",
      description: "Strategic marketing campaigns and branding solutions to elevate your online presence.",
      href: "/services/digital-marketing",
    },
    {
      icon: <Cloud className="w-full h-full" />,
      title: "DevOps & Cloud Services",
      description: "Scalable cloud infrastructure and DevOps solutions for seamless operations.",
      href: "/services/devops",
    },
    {
      icon: <Database className="w-full h-full" />,
      title: "ERP / CRM & System Design",
      description: "Enterprise solutions tailored to streamline your business processes.",
      href: "/services/erp-crm",
    },
    {
      icon: <CheckCircle className="w-full h-full" />,
      title: "QA & Software Testing",
      description: "Comprehensive testing services ensuring quality and reliability of your software.",
      href: "/services/qa-testing",
    },
    {
      icon: <Zap className="w-full h-full" />,
      title: "AI Agents & Chatbots",
      description: "Intelligent AI solutions that automate processes and enhance customer interactions.",
      href: "/services/ai-agents",
    },
    {
      icon: <Film className="w-full h-full" />,
      title: "2D & 3D Animation & Video",
      description: "Creative animation and video production services that captivate your audience.",
      href: "/services/animation",
    },
  ]

  const testimonials = [
    {
      quote:
        "GreaterTechHub transformed our digital presence. Their team delivered exceptional results on time and within budget.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and technical expertise. They understood our needs and delivered solutions that exceeded expectations.",
      author: "Michael Chen",
      role: "CTO",
      company: "Digital Innovations",
      rating: 5,
    },
    {
      quote: "Professional, reliable, and innovative. GreaterTechHub is our go-to partner for all technology needs.",
      author: "Emma Williams",
      role: "Founder",
      company: "Growth Ventures",
      rating: 5,
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"></div>
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-slide-up">
            Transform Your Business with <span className="gradient-text">Cutting-Edge Technology</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            GreaterTechHub delivers innovative IT solutions that drive growth, efficiency, and digital transformation
            for businesses worldwide.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold hover:scale-105 transform">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-secondary transition-colors font-semibold hover:scale-105 transform">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive digital transformation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose GreaterTechHub?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We combine expertise, innovation, and dedication to deliver exceptional results.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Highly skilled professionals with years of industry experience and proven track record.",
              },
              {
                title: "Innovative Solutions",
                description: "Cutting-edge technologies and creative approaches to solve complex business challenges.",
              },
              {
                title: "Client-Focused",
                description:
                  "Your success is our priority. We work closely with you to understand and exceed expectations.",
              },
              {
                title: "Timely Delivery",
                description: "We respect your timeline and deliver projects on schedule without compromising quality.",
              },
              {
                title: "24/7 Support",
                description: "Dedicated support team available round-the-clock to assist with any issues or questions.",
              },
              {
                title: "Scalable Solutions",
                description: "Solutions designed to grow with your business, adapting to changing needs and demands.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="p-6 bg-white rounded-lg border border-border hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Client Testimonials</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience working with GreaterTechHub.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <TestimonialCard {...testimonial} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <ParallaxSection>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how GreaterTechHub can help you achieve your technology goals.
              </p>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold hover:scale-105 transform">
                Schedule a Consultation
              </button>
            </ScrollReveal>
          </div>
        </ParallaxSection>
      </section>

      <Footer />
    </main>
  )
}
