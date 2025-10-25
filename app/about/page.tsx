import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Award, Users, Zap, Globe } from "lucide-react"

export const metadata = {
  title: "About GreaterTechHub | Our Story & Mission",
  description: "Learn about GreaterTechHub's mission, values, and the team behind our innovative IT solutions.",
}

export default function About() {
  const stats = [
    { icon: Users, label: "Team Members", value: "150+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Award, label: "Projects Completed", value: "500+" },
    { icon: Zap, label: "Years Experience", value: "15+" },
  ]

  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.",
    },
    {
      title: "Excellence",
      description: "Quality is non-negotiable. We strive for excellence in every project and interaction.",
    },
    {
      title: "Integrity",
      description: "We build trust through transparency, honesty, and ethical business practices.",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring their success is our success.",
    },
  ]

  const timeline = [
    {
      year: "2009",
      event: "GreaterTechHub Founded",
      description: "Started with a vision to transform businesses through technology",
    },
    {
      year: "2012",
      event: "Expanded Services",
      description: "Added app development and digital marketing to our portfolio",
    },
    { year: "2015", event: "Global Reach", description: "Opened offices in multiple countries and expanded our team" },
    { year: "2018", event: "AI & Innovation", description: "Launched AI agents and advanced automation services" },
    { year: "2021", event: "Cloud Leadership", description: "Became a certified cloud solutions provider" },
    { year: "2024", event: "Industry Recognition", description: "Recognized as a top IT services provider globally" },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">About GreaterTechHub</h1>
          <p className="text-xl text-foreground max-w-2xl">
            Transforming businesses through innovative technology solutions since 2009.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses worldwide by delivering innovative, reliable, and scalable technology solutions
                that drive growth, efficiency, and digital transformation. We are committed to being the trusted partner
                for organizations seeking to leverage technology for competitive advantage.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading global IT services company recognized for innovation, excellence, and customer
                success. We envision a world where technology seamlessly enables businesses to achieve their goals and
                create meaningful impact in their industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-8 bg-secondary rounded-lg border border-border">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                  {index < timeline.length - 1 && <div className="w-1 h-24 bg-accent/30"></div>}
                </div>
                <div className="pb-8">
                  <p className="text-sm font-semibold text-accent mb-1">{item.year}</p>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{item.event}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Whether you're looking for a technology partner or want to join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold">
              Partner With Us
            </button>
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-secondary transition-colors font-semibold">
              View Careers
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
