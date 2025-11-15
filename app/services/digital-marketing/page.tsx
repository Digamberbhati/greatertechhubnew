import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  MoveRight,
  LucideIcon,
  Zap, // Naya icon
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se marketing icons import karein
import { FaChartLine, FaBullhorn, FaPalette } from "react-icons/fa"

export const metadata: Metadata = {
  title: "Digital Marketing & Branding | GreaterTechHub",
  description:
    "Strategic marketing, SEO, PPC, and branding solutions to elevate your online presence and drive growth.",
}

export const dynamic = "force-static"

// --- TechTag Component (Same as before) ---
interface TechTagProps {
  name: string
  colorScheme:
    | "blue"
    | "gray"
    | "green"
    | "purple"
    | "yellow"
    | "orange"
    | "red"
    | "pink"
}

const colors = {
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-200 text-gray-800",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  yellow: "bg-yellow-100 text-yellow-800",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
  pink: "bg-pink-100 text-pink-700",
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

// --- DATA ARRAYS (MARKETING-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: FaChartLine,
    title: "Performance Marketing",
    description:
      "Data-driven SEO and PPC campaigns designed to increase your visibility and drive qualified leads.",
    bestFor: "Lead Generation, Increasing Traffic, Sales",
    tech: [
      { name: "SEO", colorScheme: "green" },
      { name: "Google Ads (PPC)", colorScheme: "blue" },
      { name: "Semrush", colorScheme: "purple" },
      { name: "Google Analytics", colorScheme: "orange" },
    ],
  },
  {
    icon: FaBullhorn,
    title: "Content & Social Media",
    description:
      "Engaging content and strategic social media management to build your community and brand loyalty.",
    bestFor: "Brand Awareness, Community Building",
    tech: [
      { name: "Content Strategy", colorScheme: "blue" },
      { name: "Meta Ads (FB/IG)", colorScheme: "pink" },
      { name: "Reels /x", colorScheme: "gray" },
      { name: "Content Writing", colorScheme: "yellow" },
      { name: "Hootsuite", colorScheme: "green" },
      { name: "linkedIn", colorScheme: "purple" },
      
    
    ],
  },
  {
    icon: FaPalette,
    title: "Brand Identity & Design",
    description:
      "Creating memorable brand identities, from logo design to a complete style guide that tells your story.",
    bestFor: "New Businesses, Rebranding, Marketing Collateral",
    tech: [
      { name: "Logo Design", colorScheme: "purple" },
      { name: "Brand Strategy", colorScheme: "red" },
      { name: "Style Guides", colorScheme: "gray" },
      { name: "Canva / Figma", colorScheme: "pink" },
      { name: "Adobe Suite", colorScheme: "orange" },
      { name: "Illustrator", colorScheme: "yellow" },
      { name: "Photoshop", colorScheme: "blue" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Discovery & Research",
    description: "Analyzing your brand, audience, and competitors to find opportunities.",
  },
  {
    step: "Strategy & Planning",
    description: "Developing a custom marketing plan with clear goals and KPIs.",
  },
  {
    step: "Content & Creative",
    description: "Creating compelling ad copy, graphics, and content for your campaigns.",
  },
  {
    step: "Campaign Launch",
    description: "Executing the strategy across all chosen digital channels.",
  },
  {
    step: "Optimization",
    description: "Actively monitoring and A/B testing campaigns to maximize performance.",
  },
  {
    step: "Reporting & Scaling",
    description: "Providing detailed reports and scaling successful strategies.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Target,
    title: "Data-Driven Decisions",
    description:
      "We use real-time analytics to make smart decisions, optimize budgets, and maximize your ROI.",
  },
  {
    icon: BrainCircuit,
    title: "Holistic Strategy",
    description:
      "We combine SEO, PPC, social, and branding into one unified strategy that works.",
  },
  {
    icon: Zap,
    title: "Focus on Measurable ROI",
    description:
      "We're not just about clicks; we're about driving real, measurable business results.",
  },
]

// --- Component ---
export default function DigitalMarketing() {
  return (
    <ServiceLayout
      title="Digital Marketing & Branding"
      subtitle="Strategic marketing campaigns and branding solutions to elevate your online presence and drive growth."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our Marketing Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Marketing Expertise
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
                    Key Platforms & Tools:
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
                src="/digital-marketing-campaign.png" // **APKA IMAGE PATH YAHAN**
                alt="Our marketing team planning a campaign strategy"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                A Partner in
                <br />
                Your Growth
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                In today's world, a strong online presence isn't optional. We go
                beyond basic marketing to develop a complete digital strategy
                that connects you with your audience and delivers measurable
                results.
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

        {/* Section 3: Process (Same design, new content) */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Marketing Process
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
              src="/images/digital-marketing-banner.webp" // **APKA IMAGE PATH YAHAN**
              alt=""
              layout="fill"
              objectFit="cover"
              quality={80}
              className="absolute inset-0 z-0 opacity-20"
            />
            {/* Content over image */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Boost Your Online Presence?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's create a marketing strategy that drives real results for
                your business.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Book a Free Strategy Call
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}