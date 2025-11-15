import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  MoveRight,
  LucideIcon,
  ShieldCheck, // Icon add kiya
  Zap, // Icon add kiya
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se devops icons import karein
import { FaAws,  FaGoogle, FaDocker, FaJenkins } from "react-icons/fa"
import { TbGitCommit } from "react-icons/tb" // CI/CD ke liye

export const metadata: Metadata = {
  title: "DevOps & Cloud Services | GreaterTechHub",
  description:
    "Scalable cloud infrastructure (AWS, Azure, GCP), CI/CD pipelines, and DevOps solutions.",
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

// --- DATA ARRAYS (DEVOPS-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: FaAws,
    title: "Cloud Infrastructure",
    description:
      "Design, build, and manage scalable and secure cloud infrastructure on AWS, Azure, and GCP.",
    bestFor: "Scalable Apps, Migration, Cost Optimization",
    tech: [
      { name: "AWS", colorScheme: "orange" },
      { name: "Azure", colorScheme: "blue" },
      { name: "GCP", colorScheme: "green" },
      { name: "Terraform", colorScheme: "purple" },
    ],
  },
  {
    icon: TbGitCommit,
    title: "CI/CD & Automation",
    description:
      "Automate your build, test, and deployment pipelines to ship code faster and more reliably.",
    bestFor: "Faster Releases, Reducing Errors, Dev Teams",
    tech: [
      { name: "Jenkins", colorScheme: "red" },
      { name: "GitLab CI", colorScheme: "orange" },
      { name: "GitHub Actions", colorScheme: "gray" },
      { name: "Ansible", colorScheme: "red" },
    ],
  },
  {
    icon: FaDocker,
    title: "Kubernetes & Containers",
    description:
      "Containerize your applications with Docker and manage them at scale using Kubernetes.",
    bestFor: "Microservices, High Availability, Portability",
    tech: [
      { name: "Kubernetes (K8s)", colorScheme: "blue" },
      { name: "Docker", colorScheme: "blue" },
      { name: "Helm", colorScheme: "blue" },
      { name: "Prometheus", colorScheme: "orange" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Assessment & Strategy",
    description: "Analyzing your current infrastructure and defining a cloud & DevOps roadmap.",
  },
  {
    step: "Infrastructure as Code (IaC)",
    description: "Building your environment using code (Terraform) for consistency.",
  },
  {
    step: "CI/CD Pipeline Setup",
    description: "Automating the entire build, test, and deploy lifecycle.",
  },
  {
    step: "Containerization",
    description: "Packaging your applications into lightweight Docker containers.",
  },
  {
    step: "Monitoring & Logging",
    description: "Implementing tools to monitor performance, logs, and alerts in real-time.",
  },
  {
    step: "Optimization & Security",
    description: "Continuously optimizing for cost, performance, and security.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Zap, // Naya icon
    title: "Release Faster, Safer",
    description:
      "Our automated pipelines reduce manual errors and help you deploy new features with confidence.",
  },
  {
    icon: Target,
    title: "Scalable & Cost-Effective",
    description:
      "We build infrastructure that scales on demand, so you only pay for what you use.",
  },
  {
    icon: ShieldCheck, // Naya icon
    title: "Security & Compliance",
    description:
      "Security is built into every step, from code to cloud, ensuring your data is protected.",
  },
] // <-- YAHAN SE 'V' HATA DIYA HAI

// --- Component ---
export default function DevOps() {
  return (
    <ServiceLayout
      title="DevOps & Cloud Services"
      subtitle="Scalable cloud infrastructure and DevOps solutions for seamless operations and continuous delivery."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our DevOps Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our DevOps & Cloud Expertise
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
                src="/devops.jpg" // **APKA IMAGE PATH YAHAN**
                alt="Our DevOps engineers managing cloud infrastructure"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Modernize Your
                <br />
                Operations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Stop worrying about downtime and slow deployments. We implement
                modern DevOps practices and cloud-native solutions to make your
                infrastructure reliable, scalable, and secure, supporting your
                business growth.
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
            Our DevOps Implementation Process
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
                Ready to Transform Your Infrastructure?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can modernize your operations with robust
                cloud and DevOps solutions.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Schedule a Free Consultation
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}