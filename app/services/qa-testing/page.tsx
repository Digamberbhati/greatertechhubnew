import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  MoveRight,
  LucideIcon,
  ShieldCheck,
  Zap,
  Bug, // Naya icon
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se QA icons import karein
import { FaBug, FaTachometerAlt } from "react-icons/fa"
import { SiSelenium } from "react-icons/si"

export const metadata: Metadata = {
  title: "QA & Software Testing | GreaterTechHub",
  description:
    "Comprehensive manual, automated, and performance testing to ensure software quality.",
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

// --- DATA ARRAYS (QA-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: FaBug,
    title: "Manual & Functional Testing",
    description:
      "Meticulous, human-driven testing to find critical bugs and ensure your software works exactly as intended.",
    bestFor: "User Experience, Complex Workflows, UI/UX",
    tech: [
      { name: "Test Cases", colorScheme: "blue" },
      { name: "Bug Reporting", colorScheme: "red" },
      { name: "Jira", colorScheme: "blue" },
      { name: "TestRail", colorScheme: "green" },
    ],
  },
  {
    icon: SiSelenium,
    title: "Automation Testing",
    description:
      "Building robust automation scripts that run tests faster, more often, and more reliably.",
    bestFor: "Regression Testing, CI/CD Pipelines, Repetitive Tasks",
    tech: [
      { name: "Selenium", colorScheme: "green" },
      { name: "Cypress", colorScheme: "purple" },
      { name: "Playwright", colorScheme: "green" },
      { name: "Postman (API)", colorScheme: "orange" },
    ],
  },
  {
    icon: FaTachometerAlt,
    title: "Performance & Security",
    description:
      "Identify bottlenecks, test load capacity, and find security vulnerabilities before your users do.",
    bestFor: "High-Traffic Apps, Data Security, Scalability",
    tech: [
      { name: "JMeter", colorScheme: "orange" },
      { name: "LoadRunner", colorScheme: "green" },
      { name: "OWASP ZAP", colorScheme: "red" },
      { name: "Burp Suite", colorScheme: "orange" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Test Planning",
    description: "Understanding requirements and defining the test strategy, scope, and environment.",
  },
  {
    step: "Test Case Design",
    description: "Writing detailed, step-by-step test cases and automation scripts.",
  },
  {
    step: "Test Execution",
    description: "Running manual and automated tests to identify defects.",
  },
  {
    step: "Bug Reporting",
    description: "Logging all defects clearly in a bug tracking system (like Jira).",
  },
  {
    step: "Regression Testing",
    description: "Re-testing the software after bug fixes to ensure no new issues were created.",
  },
  {
    step: "Test Closure & Reporting",
    description: "Providing a final summary report on software quality and readiness for release.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Bug,
    title: "A 'Break-it' Mindset",
    description:
      "Our team thinks like an end-user, trying every possibility to find bugs your developers missed.",
  },
  {
    icon: Zap,
    title: "Integrate with Your CI/CD",
    description:
      "We integrate automated tests directly into your development pipeline for continuous quality.",
  },
  {
    icon: ShieldCheck,
    title: "Reduce Risk, Launch Confidently",
    description:
      "Launch your product knowing it's secure, performant, and reliable for your users.",
  },
]

// --- Component ---
export default function QATesting() {
  return (
    <ServiceLayout
      title="QA & Software Testing"
      subtitle="Comprehensive testing services ensuring quality and reliability of your software products."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our QA & Testing Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our QA & Testing Expertise
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
                    Key Tools:
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
                src="/QA.jpg" // **APKA IMAGE PATH YAHAN**
                alt="Our QA team analyzing test results"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Quality That Builds
                <br />
                User Trust
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A single bug can cost you a customer. We act as your dedicated
                quality partner, implementing rigorous testing processes to
                ensure your application is reliable, secure, and performs
                flawlessly for a perfect user experience.
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
            Our QA & Testing Process
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
              src="" // **APKA IMAGE PATH YAHAN**
              alt=""
              layout="fill"
              objectFit="cover"
              quality={80}
              className="absolute inset-0 z-0 opacity-20"
            />
            {/* Content over image */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Ensure Software Quality?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Don't leave quality to chance. Let our expert QA team
                thoroughly test your application before you launch.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Get a Free QA Audit
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}