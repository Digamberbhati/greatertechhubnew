import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  ShieldCheck,
  MoveRight,
  LucideIcon,
  Smartphone, // NEW: Icon for UI/UX
  Zap, // NEW: Icon for Performance
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se app icons import karein
import { FaReact, FaApple, FaAndroid } from "react-icons/fa"

export const metadata: Metadata = {
  title: "App Development | GreaterTechHub",
  description:
    "Expertise in Native iOS, Android, and Cross-Platform (React Native) apps that drive user engagement.",
}

export const dynamic = "force-static"

// --- TechTag Component (Same as before) ---
interface TechTagProps {
  name: string
  colorScheme: "blue" | "gray" | "green" | "purple" | "yellow" | "orange" | "red"
}

const colors = {
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-200 text-gray-800",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  yellow: "bg-yellow-100 text-yellow-800",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
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

// --- DATA ARRAYS (APP-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: FaApple,
    title: "Native iOS Development",
    description:
      "Pixel-perfect, high-performance apps built specifically for the Apple ecosystem.",
    bestFor: "Maximum Performance, iPhone & iPad Apps",
    tech: [
      { name: "Swift", colorScheme: "orange" },
      { name: "SwiftUI", colorScheme: "purple" },
      { name: "UIKit", colorScheme: "blue" },
      { name: "CoreML", colorScheme: "green" },
    ],
  },
  {
    icon: FaAndroid,
    title: "Native Android Development",
    description:
      "Robust and scalable apps that leverage the full power of the Android operating system.",
    bestFor: "Wide Device Reach, Google Play Store",
    tech: [
      { name: "Kotlin", colorScheme: "purple" },
      { name: "Java", colorScheme: "orange" },
      { name: "Jetpack Compose", colorScheme: "blue" },
      { name: "Android SDK", colorScheme: "green" },
    ],
  },
  {
    icon: FaReact,
    title: "Cross-Platform Apps",
    description:
      "Build for both iOS and Android from a single codebase, saving time and development costs.",
    bestFor: "Startups, MVPs, and Cost-Effective Builds",
    tech: [
      { name: "React Native", colorScheme: "blue" },
      { name: "Flutter", colorScheme: "blue" },
      { name: "Expo", colorScheme: "gray" },
      { name: "Firebase", colorScheme: "yellow" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Discovery",
    description: "Understanding your app's goals, audience, and market position.",
  },
  {
    step: "Design (UI/UX)",
    description: "Creating intuitive, engaging, and beautiful user interfaces.",
  },
  {
    step: "Development",
    description: "Building a robust and scalable app on the chosen platform.",
  },
  {
    step: "Testing (QA)",
    description: "Rigorous testing on multiple devices to ensure a bug-free launch.",
  },
  {
    step: "Deployment",
    description: "Managing the entire App Store and Google Play Store submission process.",
  },
  {
    step: "Support",
    description: "Ongoing maintenance, updates, and performance monitoring.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Smartphone, // NEW ICON
    title: "User-Centric Design",
    description:
      "We focus on intuitive UI/UX that keeps users engaged and reduces churn.",
  },
  {
    icon: Zap, // NEW ICON
    title: "Performance is Key",
    description:
      "Our apps are optimized for speed, low battery drain, and a smooth native feel.",
  },
  {
    icon: ShieldCheck,
    title: "Full Lifecycle Support",
    description:
      "From App Store submission to post-launch support, we're with you.",
  },
]

// --- Component ---
export default function AppDevelopment() {
  return (
    <ServiceLayout
      title="Mobile App Development"
      subtitle="Engaging, high-performance iOS, Android, and cross-platform apps that deliver tangible results."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our App Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our App Expertise
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
                src="/logistics-mobile-app.jpg" // **APKA IMAGE PATH YAHAN**
                alt="Our app development team discussing UI/UX design"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                An App that Drives
                <br />
                Business Value
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                A good-looking app is not enough. We build mobile applications
                that are secure, performant, and strategically designed to
                achieve your business goals—whether that's user retention,
                revenue, or engagement.
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
            Our App Development Process
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
              src="/images/app-development-banner.webp" // **APKA IMAGE PATH YAHAN**
              alt="Abstract background with mobile app icons"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="absolute inset-0 z-0 opacity-20"
            />
            {/* Content over image */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Launch Your App?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's turn your idea into a high-impact mobile application.
                Contact us today.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Start Your App Project
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}