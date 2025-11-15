// app/blog/page.tsx
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | GreaterTechHub",
  description: "Insights, case studies, and tutorials on web development, AI, cloud, and digital transformation.",
}

export const dynamic = "force-static"

export default function Blog() {
  const posts = [
    {
      slug: "ecommerce-platform-transformation",
      title: "How We Transformed RetailCo’s E-Commerce Platform for Black Friday",
      excerpt: "A legacy system crashing under 10K users? We rebuilt it to handle 300K+ concurrent users with zero downtime.",
      author: "Aman Sharma",
      date: "2025-03-15",
      category: "Case Study",
      readTime: "5 min",
      image: "/ecommerce-platform-concept.png",
    },
    {
      slug: "ai-chatbot-customer-support",
      title: "70% Fewer Support Tickets with AI Chatbot: FinanceServices Story",
      excerpt: "An AI agent that answers 80% of queries instantly, works 24/7, and saves $400K/year.",
      author: "Priya Mehta",
      date: "2025-02-20",
      category: "AI & Automation",
      readTime: "4 min",
      image: "/ai-chatbot-customer-support.jpg",
    },
    {
      slug: "nextjs-performance-tips",
      title: "10 Next.js Performance Tips We Use in Production",
      excerpt: "Real tips from 50+ enterprise projects: SSR, ISR, Image Optimization, and more.",
      author: "Rahul Kumar",
      date: "2025-01-10",
      category: "Web Development",
      readTime: "6 min",
      image: "/nextjs-performance.jpg",
    },
    {
      slug: "cloud-migration-cost-savings",
      title: "AWS Migration: 60% Cost Cut for EnterpriseBank",
      excerpt: "Zero-downtime migration to AWS with 99.99% uptime and faster deployments.",
      author: "Vikas Singh",
      date: "2025-04-05",
      category: "DevOps & Cloud",
      readTime: "5 min",
      image: "/cloud-infrastructure.png",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">GreaterTechHub Blog</h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Real-world insights from projects in web, AI, and cloud.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <article className="h-full bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 bg-secondary overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <time>{new Date(post.date).toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" })}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center gap-2 text-accent font-semibold mt-4 group-hover:gap-3 transition-all">
                      Read more
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
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
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}