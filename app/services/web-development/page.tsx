import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  ShieldCheck,
  Code,
  Database,
  Cloud,
  LayoutGrid,
  MoveRight,
  LucideIcon,
  CheckCircle,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image" // NEW: Image component import kiya

// STEP 1: react-icons se import karein
import { FaReact, FaWordpress, FaShopify } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Website Development | GreaterTechHub",
  description:
    "Expertise in Custom, WordPress, and Shopify websites. We build solutions for every business need.",
}

export const dynamic = "force-static"

// --- NAYA COMPONENT: Tech Tags ko color karne ke liye ---
interface TechTagProps {
  name: string
  colorScheme: "blue" | "gray" | "green" | "purple" | "yellow" | "orange" | "red" // NEW: Added more colors
}

const colors = {
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-200 text-gray-800",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  yellow: "bg-yellow-100 text-yellow-800",
  orange: "bg-orange-100 text-orange-700", // NEW
  red: "bg-red-100 text-red-700", // NEW
}

const TechTag: React.FC<TechTagProps> = ({ name, colorScheme }) => {
  return (
    <span
      className={`px-3 py-1 text-xs font-semibold rounded-full ${colors[colorScheme]}`}
    >
      {name}
    </span>
  )
}

// --- Interfaces ---
interface ExpertiseItem {
  icon: React.ElementType
  title: string
  description: string
  bestFor: string
  tech: { name: string; colorScheme: TechTagProps["colorScheme"] }[]
}

interface ProcessStep {
  step: string
  description: string
}

interface WhyChooseItem {
  icon: LucideIcon
  title: string
  description: string
}

// --- Data Arrays ---
const expertise: ExpertiseItem[] = [
  {
    icon: FaReact,
    title: "Custom Web Applications",
    description:
      "High-performance, scalable web apps built from scratch to meet your unique business requirements.",
    bestFor: "Startups, SaaS, and Complex Platforms",
    tech: [
      { name: "Next.js", colorScheme: "gray" },
      { name: "React", colorScheme: "blue" },
      { name: "Angular", colorScheme: "red" }, // NEW COLOR
      { name: "Node.js", colorScheme: "green" },
      { name: "TypeScript", colorScheme: "blue" },
      { name: "GraphQL", colorScheme: "purple" },
      { name: "Java", colorScheme: "orange" }, // NEW COLOR
      { name: "Python", colorScheme: "yellow" },
    ],
  },
  {
    icon: FaWordpress,
    title: "WordPress Solutions",
    description:
      "Flexible, powerful, and easy-to-manage websites built on the world's most popular CMS.",
    bestFor: "Blogs, Corporate Sites, and Content-Heavy Sites",
    tech: [
      { name: "WordPress", colorScheme: "blue" },
      { name: "WooCommerce", colorScheme: "purple" },
      { name: "Elementor", colorScheme: "purple" },
      { name: "PHP", colorScheme: "blue" },
      { name: "MySQL", colorScheme: "yellow" },
    ],
  },
  {
    icon: FaShopify,
    title: "Shopify E-commerce",
    description:
      "Beautiful, high-converting online stores that are secure and easy to scale.",
    bestFor: "E-commerce Brands and Online Retailers",
    tech: [
      { name: "Shopify", colorScheme: "green" },
      { name: "Shopify Plus", colorScheme: "green" },
      { name: "Liquid", colorScheme: "green" },
      { name: "Headless", colorScheme: "gray" },
      { name: "APIs", colorScheme: "blue" },
      { name: "Payment Gateway", colorScheme: "yellow" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Discovery",
    description: "Understanding your business goals, audience, and requirements.",
  },
  {
    step: "Design",
    description: "Creating beautiful, user-centric wireframes and mockups.",
  },
  {
    step: "Development",
    description: "Building your solution (Custom, WordPress, or Shopify).",
  },
  {
    step: "Testing",
    description: "Comprehensive QA for bug-free, seamless performance.",
  },
  {
    step: "Deployment",
    description: "Seamless launch on reliable infrastructure.",
  },
  {
    step: "Support",
    description: "Ongoing maintenance and feature enhancements.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Target,
    title: "Business-First Approach",
    description:
      "We build assets, not just websites. Every decision is driven by your ROI.",
  },
  {
    icon: BrainCircuit,
    title: "Platform Agnostic Experts",
    description:
      "We recommend the right tool for the job, whether it's React, WordPress, or Shopify.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Scalability",
    description:
      "A secure foundation built to handle your growth, no matter the platform.",
  },
]

// --- Component ---
export default function WebDevelopment() {
  return (
    <ServiceLayout
      title="Complete Web Solutions"
      subtitle="From high-speed custom apps to robust WordPress sites and high-converting Shopify stores, we build it all."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our Web Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Web Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="flex flex-col bg-secondary rounded-lg border border-border/50 shadow-sm transition-all hover:shadow-lg"
              >
                {/* Card Header */}
                <div className="p-6">
                  <item.icon className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 h-24">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer with Tech Stack */}
                <div className="p-6 bg-background/30 rounded-b-lg border-t border-border/50 mt-auto">
                  <p className="text-sm font-semibold text-foreground mb-3">
                    Best for:{" "}
                    <span className="font-normal text-muted-foreground">
                      {item.bestFor}
                    </span>
                  </p>
                  <h4 className="text-sm font-semibold text-foreground mb-3">
                    Key Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <TechTag
                        key={tech.name}
                        name={tech.name}
                        colorScheme={tech.colorScheme}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 2: Why Choose Us (IMAGE ADDED) */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 rounded-lg overflow-hidden border border-border/50 shadow-md">
              <Image
                src="/ai-chatbot-customer-support.jpg" // **APKA IMAGE PATH YAHAN**
                alt="Our team collaboratively working on a web project"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                A Partner, Not Just
                <br />a Developer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A generic website gets you generic results. We dig deep to
                understand your unique challenge, then select the *perfect*
                technology—whether it's custom code, WordPress, or Shopify—to
                build a solution that truly performs.
              </p>
              <div className="space-y-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Process (Same as before) */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Proven Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, index) => (
              <div
                key={item.step}
                className="relative p-6 bg-card border-2 border-border/50 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground pt-4">
                  {item.step}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: CTA (IMAGE ADDED) */}
        <section>
          <div className="relative text-center p-12 bg-primary text-primary-foreground rounded-lg overflow-hidden">
            {/* Background Image for CTA */}
            <Image
              src="/images/web-development-banner.webp" // **APKA IMAGE PATH YAHAN**
              alt=""
              layout="fill"
              objectFit="cover"
              quality={80}
              className="absolute inset-0 z-0 opacity-20" // Opacity control for background effect
            />
            {/* Content over image */}
            <div className="relative z-10">
              {" "}
              {/* Ensure content is above the image */}
              <h3 className="text-4xl font-bold mb-4">
                Ready to Build Your Next Website?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and how we can help you achieve your
                goals.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Book a Free Consultation
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}