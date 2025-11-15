import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  ShieldCheck,
  MoveRight,
  LucideIcon,
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se AI icons import karein
import { BsChatDots,  } from "react-icons/bs"
import { TbRobot } from "react-icons/tb"

export const metadata: Metadata = {
  title: "AI Agents & Chatbots | GreaterTechHub",
  description:
    "Intelligent AI solutions, chatbots, and automation agents to streamline your business.",
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
    | "pink" // Naya color add kiya
}

const colors = {
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-200 text-gray-800",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  yellow: "bg-yellow-100 text-yellow-800",
  orange: "bg-orange-100 text-orange-700",
  red: "bg-red-100 text-red-700",
  pink: "bg-pink-100 text-pink-700", // Naya color
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

// --- DATA ARRAYS (AI-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: BsChatDots,
    title: "Intelligent Chatbots",
    description:
      "24/7, human-like customer support chatbots trained on your business data for instant, accurate answers.",
    bestFor: "Customer Support, Lead Generation, FAQs",
    tech: [
      { name: "LLMs", colorScheme: "blue" },
      { name: "LangChain", colorScheme: "purple" },
      { name: "NLP", colorScheme: "green" },
      { name: "Chatbot UI", colorScheme: "gray" },
      { name: "AWS AI", colorScheme: "orange" },
      { name: "Dialogflow", colorScheme: "blue" },
    ],
  },
  {
    icon: TbRobot,
    title: "AI Automation Agents",
    description:
      "Autonomous agents that handle complex business processes, from data entry to analysis.",
    bestFor: "Automating Repetitive Tasks, Process Optimization",
    tech: [
      { name: "Python", colorScheme: "yellow" },
      { name: "RPA", colorScheme: "blue" },
      { name: "API Integration", colorScheme: "gray" },
      { name: "Azure AI", colorScheme: "blue" },
      { name: "n8n", colorScheme: "green" },
    ],
  },
  {
    icon: BrainCircuit,
    title: "Custom ML Models",
    description:
      "Custom-built machine learning models to solve unique challenges like forecasting or image recognition.",
    bestFor: "Data Analysis, Predictive Analytics, Personalization",
    tech: [
      { name: "TensorFlow", colorScheme: "orange" },
      { name: "PyTorch", colorScheme: "red" },
      { name: "Scikit-learn", colorScheme: "orange" },
      { name: "GCP AI", colorScheme: "green" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Discovery & Use Case",
    description: "Identifying the core business problem that AI can solve for the best ROI.",
  },
  {
    step: "Data Collection & Prep",
    description: "Gathering, cleaning, and preparing your data to train an accurate model.",
  },
  {
    step: "Model Development",
    description: "Building, training, and fine-tuning the AI model for your specific needs.",
  },
  {
    step: "Integration & Testing",
    description: "Connecting the AI model to your existing software and testing for reliability.",
  },
  {
    step: "Deployment & Monitoring",
    description: "Launching the AI solution and monitoring its performance and accuracy in real-time.",
  },
  {
    step: "Iteration & Improvement",
    description: "Continuously re-training and optimizing the model with new data.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Target,
    title: "Focus on Business ROI",
    description:
      "We don't build AI for hype. We build solutions that save you money or increase your revenue.",
  },
  {
    icon: BrainCircuit,
    title: "Custom-Trained Models",
    description:
      "We fine-tune models on your specific data, ensuring they understand your business context.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical & Secure AI",
    description:
      "We prioritize data privacy, security, and responsible AI practices in every project.",
  },
]

// --- Component ---
export default function AIAgents() {
  return (
    <ServiceLayout
      title="AI Agents & Chatbots"
      subtitle="Intelligent AI solutions that automate processes and enhance customer interactions."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our AI Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our AI Expertise
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
                alt="Our AI team discussing a machine learning model"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                AI That Delivers
                <br />
                Real Business Value
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Generic AI solutions give generic results. We dive deep into
                your business to build custom AI agents and chatbots that are
                trained on your data, integrate with your tools, and solve your
                most expensive problems.
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
            Our AI Project Lifecycle
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
              src="/images/ai-banner.webp" // **APKA IMAGE PATH YAHAN**
              alt="Abstract background with artificial intelligence nodes"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="absolute inset-0 z-0 opacity-20"
            />
            {/* Content over image */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Harness the Power of AI?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how AI can automate your processes and improve
                your customer engagement.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Explore AI Solutions
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}