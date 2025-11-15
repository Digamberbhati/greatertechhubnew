// app/blog/[slug]/page.tsx
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

export const dynamic = "force-static"

export function generateStaticParams() {
  return [
    { slug: "ecommerce-platform-transformation" },
    { slug: "ai-chatbot-customer-support" },
    { slug: "nextjs-performance-tips" },
    { slug: "cloud-migration-cost-savings" },
  ]
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) return { title: "Post Not Found" }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
  }
}

function getPost(slug: string) {
  const posts: Record<
    string,
    {
      title: string
      excerpt: string
      content: string
      author: string
      date: string
      category: string
      readTime: string
      image: string
      metaTitle?: string
      metaDescription?: string
    }
  > = {
    "ecommerce-platform-transformation": {
      title: "How We Transformed RetailCo’s E-Commerce Platform for Black Friday",
      excerpt: "A legacy system crashing under 10K users? We rebuilt it to handle 300K+ concurrent users with zero downtime.",
      content: `## The Challenge

RetailCo was losing millions every Black Friday due to website crashes. Their monolithic PHP system couldn't scale, and CDN was misconfigured.

## Our Approach

1. **Migrated to Next.js + AWS**
2. **Implemented Redis caching**
3. **Used PostgreSQL with read replicas**
4. **Auto-scaling with Kubernetes**

## Results

- 300% traffic capacity
- 40% faster load time
- 25% higher conversions

> _"Best decision we made in 10 years."_ – CTO, RetailCo`,
      author: "Aman Sharma",
      date: "2025-03-15",
      category: "Case Study",
      readTime: "5 min",
      image: "/ecommerce-platform-concept.png",
      metaTitle: "E-Commerce Scalability Case Study | RetailCo | GreaterTechHub",
      metaDescription: "Learn how we helped RetailCo handle 300K+ users during Black Friday with Next.js, AWS, and Redis.",
    },
    "ai-chatbot-customer-support": {
      title: "70% Fewer Support Tickets with AI Chatbot: FinanceServices Story",
      excerpt: "An AI agent that answers 80% of queries instantly, works 24/7, and saves $400K/year.",
      content: `## Problem

FinanceServices had 5,000+ daily support tickets. Average response: 18 hours.

## Solution

- Built with **Python + TensorFlow**
- Integrated with **Zendesk API**
- Trained on 50K past tickets
- Multilingual (EN, HI, TA)

## Outcome

- 70% tickets auto-resolved
- 40% cost reduction
- CSAT: 4.8/5

> _"Our customers love the instant replies."_ – Head of Support`,
      author: "Priya Mehta",
      date: "2025-02-20",
      category: "AI & Automation",
      readTime: "4 min",
      image: "/ai-chatbot-customer-support.jpg",
      metaTitle: "AI Chatbot Case Study | 70% Fewer Tickets | FinanceServices",
      metaDescription: "AI agent reduced support tickets by 70% and saved 40% in operational costs.",
    },
    "nextjs-performance-tips": {
      title: "10 Next.js Performance Tips We Use in Production",
      excerpt: "Real tips from 50+ enterprise projects: SSR, ISR, Image Optimization, and more.",
      content: `## 1. Use \`next/image\` with \`priority\`

\`\`\`tsx
<Image src="/hero.jpg" width={1200} height={600} priority />
\`\`\`

## 2. Leverage ISR

\`\`\`tsx
export const revalidate = 60
\`\`\`

## 3. Font Optimization

\`\`\`tsx
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
\`\`\`

## Bonus: Edge Middleware for A/B Testing

> Used by 80% of our clients.`,
      author: "Rahul Kumar",
      date: "2025-01-10",
      category: "Web Development",
      readTime: "6 min",
      image: "/nextjs-performance.jpg",
      metaTitle: "10 Next.js Performance Tips for Production",
      metaDescription: "Optimize Next.js apps with SSR, ISR, and more – tips from 50+ projects.",
    },
    "cloud-migration-cost-savings": {
      title: "AWS Migration: 60% Cost Cut for EnterpriseBank",
      excerpt: "Zero-downtime migration to AWS with 99.99% uptime and faster deployments.",
      content: `## Before

- High maintenance costs and limited scalability
- On-premise infrastructure

## Solution

- Migrated to AWS with automated CI/CD pipelines and containerization
- Implemented Docker, Kubernetes, Jenkins, and Terraform

## Results

- 60% reduction in infrastructure costs
- 99.99% uptime achieved
- Faster deployment cycles

> _"Modernized our infrastructure efficiently."_ – CTO, EnterpriseBank`,
      author: "Vikas Singh",
      date: "2025-04-05",
      category: "DevOps & Cloud",
      readTime: "5 min",
      image: "/cloud-infrastructure.png",
      metaTitle: "AWS Cloud Migration Case Study | 60% Cost Savings",
      metaDescription: "How we migrated EnterpriseBank to AWS with zero downtime and 60% cost reduction.",
    },
  }

  return posts[slug]
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Back Link */}
      <section className="py-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="flex items-center gap-2 text-accent hover:underline font-semibold">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-foreground mb-2">{post.category}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <span>{post.author}</span>
            <span>•</span>
            <time>{new Date(post.date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })}</time>
            <span>•</span>
            <span>{post.readTime} read</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-96 bg-secondary overflow-hidden rounded-lg">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="whitespace-pre-wrap">{post.content}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Need Help With Your Project?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's turn your idea into reality.
          </p>
          <Link
            href="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold"
          >
            Start a Project
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}