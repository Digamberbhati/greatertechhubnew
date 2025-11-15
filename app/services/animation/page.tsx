import { ServiceLayout } from "@/components/service-layout"
import {
  BrainCircuit,
  Target,
  MoveRight,
  LucideIcon,
  Sparkles, // Naya icon
} from "lucide-react"
import { Metadata } from "next"
import Image from "next/image"

// STEP 1: react-icons se animation icons import karein
import { FaFilm, FaCube, FaVideo } from "react-icons/fa"

export const metadata: Metadata = {
  title: "2D & 3D Animation & Video Production | GreaterTechHub",
  description:
    "Creative 2D/3D animation, motion graphics, and video production to captivate your audience.",
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

// --- DATA ARRAYS (ANIMATION-FOCUSED) ---
const expertise: ExpertiseItem[] = [
  {
    icon: FaFilm,
    title: "2D Animation & Motion Graphics",
    description:
      "Engaging 2D animations and sleek motion graphics that bring your brand's story to life.",
    bestFor: "Explainer Videos, Logo Animations, UI Demos",
    tech: [
      { name: "After Effects", colorScheme: "purple" },
      { name: "Illustrator", colorScheme: "orange" },
      { name: "Figma", colorScheme: "pink" },
      { name: "Lottie", colorScheme: "green" },
    ],
  },
  {
    icon: FaCube,
    title: "3D Animation & VFX",
    description:
      "Stunning 3D modeling, animation, and visual effects for product showcases and immersive visuals.",
    bestFor: "Product Visualization, Architectural Renders, VFX",
    tech: [
      { name: "Blender", colorScheme: "orange" },
      { name: "Cinema 4D", colorScheme: "blue" },
      { name: "Maya", colorScheme: "blue" },
      { name: "Houdini", colorScheme: "gray" },
    ],
  },
  {
    icon: FaVideo,
    title: "Video Production & Editing",
    description:
      "End-to-end video production, from shooting to final post-production, color grading, and sound design.",
    bestFor: "Corporate Videos, Social Media Content, Ads",
    tech: [
      { name: "Premiere Pro", colorScheme: "purple" },
      { name: "DaVinci Resolve", colorScheme: "gray" },
      { name: "Final Cut Pro", colorScheme: "purple" },
      { name: "Audition", colorScheme: "blue" },
    ],
  },
]

const process: ProcessStep[] = [
  {
    step: "Concept & Scripting",
    description: "Developing the core idea, story, and script for your video.",
  },
  {
    step: "Storyboarding & Animatics",
    description: "Visually planning every shot and sequence before production begins.",
  },
  {
    step: "Production / Animation",
    description: "The main phase of filming live-action or creating 2D/3D assets.",
  },
  {
    step: "Post-Production (Editing)",
    description: "Assembling all footage, adding music, and editing the final cut.",
  },
  {
    step: "VFX, Color & Sound",
    description: "Adding visual effects, color grading, and professional sound mixing.",
  },
  {
    step: "Final Delivery",
    description: "Exporting the final video in all the formats you need for launch.",
  },
]

const whyChooseUs: WhyChooseItem[] = [
  {
    icon: Sparkles, // Naya icon
    title: "Creative Storytelling",
    description:
      "We don't just animate; we tell compelling stories that connect with your audience.",
  },
  {
    icon: BrainCircuit,
    title: "Multi-Disciplinary Team",
    description:
      "Our team handles everything: 2D, 3D, VFX, and live-action video production.",
  },
  {
    icon: Target,
    title: "Pixel-Perfect Quality",
    description:
      "We are obsessed with quality, ensuring every frame is polished to perfection.",
  },
]

// --- Component ---
export default function Animation() {
  return (
    <ServiceLayout
      title="2D & 3D Animation & Video Production"
      subtitle="Creative animation and video production services that captivate your audience and tell your story."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mb-24">
        {/* Section 1: Our Creative Expertise */}
        <section>
          <h2 className="text-4xl font-bold mb-8 text-center">
            Our Creative Expertise
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
                    Key Software:
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
                src="/2d.jpg" // **APKA IMAGE PATH YAHAN**
                alt="Our creative team storyboarding an animation project"
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Bring Your
                <br />
                Vision to Life
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                In a world full of noise, captivating visuals are the key to
                grabbing attention. Our team combines technical expertise with
                artistic passion to create animations and videos that not only
                look stunning but also achieve your business goals.
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
            Our Production Process
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
              src="/images/animation-banner.webp" // **APKA IMAGE PATH YAHAN**
              alt="Abstract background with colorful motion graphics"
              layout="fill"
              objectFit="cover"
              quality={80}
              className="absolute inset-0 z-0 opacity-20"
            />
            {/* Content over image */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">
                Ready to Create Stunning Visual Content?
              </h3>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let's discuss your idea and how our team can bring it to life
                with animation or video.
              </p>
              <button className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary rounded-lg hover:bg-primary-foreground/90 transition-colors font-bold text-lg">
                Start Your Creative Project
                <MoveRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </ServiceLayout>
  )
}