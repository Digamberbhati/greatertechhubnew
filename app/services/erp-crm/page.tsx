import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  MoveRight,
  LucideIcon,
  ShieldCheck,
  Zap, // Naya icon
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se ERP/CRM icons import karein
import { FaSalesforce, FaHubspot, FaDatabase } from "react-icons/fa"
import { TbSitemap } from "react-icons/tb" // System design ke liye

export const metadata: Metadata = {
  title: "ERP / CRM & System Design | GreaterTechHub",
  description:
    "Custom ERP, CRM (Salesforce, HubSpot), and system design solutions to streamline your business.",
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

// --- DATA ARRAYS (ERP/CRM-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: TbSitemap,
    title: "Custom ERP Solutions",
    description:
      "Bespoke ERP systems built from the ground up to perfectly match your unique business workflows.",
    bestFor: "Manufacturing, Logistics, Unique Processes",
    tech: [
      { name: "Odoo", colorScheme: "purple" },
      { name: "SAP (Custom)", colorScheme: "blue" },
      { name: "Python", colorScheme: "yellow" },
      { name: "PostgreSQL", colorScheme: "blue" },
    ],
  },
  {
    icon: FaSalesforce,
    title: "CRM Implementation",
    description:
      "Expert setup, customization, and integration of leading CRM platforms like Salesforce and HubSpot.",
    bestFor: "Sales Teams, Marketing Automation, Support",
    tech: [
      { name: "Salesforce", colorScheme: "blue" },
      { name: "HubSpot", colorScheme: "orange" },
      { name: "Zoho CRM", colorScheme: "red" },
      { name: "Data Migration", colorScheme: "gray" },
    ],
  },
  {
    icon: FaDatabase,
    title: "System Design & Integration",
    description:
      "Designing robust system architectures and integrating all your disparate software into one.",
    bestFor: "Connecting Apps, Data Warehousing, API",
    tech: [
      { name: "System Design", colorScheme: "gray" },
      { name: "REST APIs", colorScheme: "blue" },
      { name: "Data Integration", colorScheme: "green" },
      { name: "MuleSoft", colorScheme: "blue" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Business Analysis",
    description: "Deep dive into your existing processes to identify bottlenecks and requirements.",
  },
  {
    step: "System Design",
    description: "Architecting the new system and data flows for maximum efficiency.",
  },
  {
    step: "Configuration & Customization",
    description: "Building and configuring the ERP/CRM platform to your exact needs.",
  },
  {
    step: "Data Migration",
    description: "Securely and accurately transferring your existing data to the new system.",
  },
  {
    step: "Training & Adoption",
    description: "Training your team to ensure they can leverage the new system effectively.",
  },
  {
    step: "Support & Optimization",
    description: "Providing ongoing support and continuously improving the system.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Zap,
    title: "Streamline Everything",
    description:
      "We replace your scattered spreadsheets and tools with one central, efficient system.",
  },
  {
    icon: Target,
    title: "360-Degree Customer View",
    description:
      "Our CRM solutions give your sales and support teams all the info they need in one place.",
  },
  {
    icon: BrainCircuit,
    title: "Data-Driven Decisions",
    description:
      "Get powerful reports and insights from your data to make smarter business decisions.",
  },
]

// --- Component ---
export default function ERPCRM() {
  return (
    <ServiceLayout
      title="ERP / CRM & System Design"
      subtitle="Enterprise solutions tailored to streamline your business processes and improve efficiency."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our Enterprise Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Enterprise Expertise
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
                    Key Platforms:
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
                src="/CRM.jpg" // **APKA IMAGE PATH YAHAN**
                alt="Our team planning an ERP system architecture"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                A System That
                <br />
                Works For You
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Don't change your business to fit the software. We build and
                implement enterprise systems that are tailored to *your*
                processes, giving you a powerful, unified platform to manage
                your entire operation.
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
            Our Implementation Process
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
                Ready to Streamline Your Business?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how a custom ERP or CRM solution can eliminate
                inefficiencies and fuel your growth.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Book a Free Process Audit
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}