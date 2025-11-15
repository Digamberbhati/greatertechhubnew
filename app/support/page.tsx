// app/support/page.tsx
"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useRef } from "react"
import { MessageCircle, Mail, Phone, Clock, CheckCircle } from "lucide-react"
import ReCAPTCHAComponent, { ReCAPTCHARef } from "@/components/ReCAPTCHA"

export default function Support() {
  const [activeTab, setActiveTab] = useState<"contact" | "faq">("contact")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHARef>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token)
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification.")
      return
    }

    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      ...formData,
      "g-recaptcha-response": recaptchaToken,
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setRecaptchaToken(null)
        recaptchaRef.current?.reset()
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError("Submission failed. Please try again.")
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)
      }
    } catch (err) {
      setError("Network error. Please try again.")
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
    }
  }

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer:
        "Project timelines vary based on scope and complexity. We typically provide detailed timelines during the discovery phase. Most projects range from 4-16 weeks.",
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer:
        "Yes, we offer comprehensive post-launch support packages including maintenance, updates, and optimization services.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "We specialize in modern web technologies (Next.js, React), mobile development (React Native, Flutter), cloud platforms (AWS, Azure), and AI/ML solutions.",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow rigorous QA processes including automated testing, manual testing, code reviews, and performance optimization to ensure the highest quality standards.",
    },
    {
      question: "Can you work with existing codebases?",
      answer:
        "Absolutely. We have extensive experience working with legacy systems, modernizing codebases, and integrating with existing infrastructure.",
    },
    {
      question: "What is your communication process?",
      answer:
        "We maintain regular communication through weekly status meetings, daily standups for active projects, and a dedicated project manager for each engagement.",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Support & Help
          </h1>
          <p className="text-xl text-white max-w-2xl drop-shadow">
            We're here to help. Get in touch with our support team or find answers to common questions.
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email Support",
                description: "support@greatertechhub.com",
                detail: "Response within 24 hours",
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "+91 9588160069",
                detail: "Mon-Fri, 9AM-6PM IST",
              },
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Available on our website",
                detail: "24/7 support for urgent issues",
              },
            ].map((option, index) => {
              const Icon = option.icon
              return (
                <div key={index} className="p-8 bg-gradient-to-br from-[#B3E5FC]/10 to-[#81D4FA]/10 rounded-xl border border-[#B3E5FC]/30 text-center hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <Icon className="w-12 h-12 text-[#0288D1] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{option.title}</h3>
                  <p className="font-semibold text-[#0288D1] mb-2">{option.description}</p>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Clock size={16} />
                    {option.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 mb-12 border-b border-border">
            <button
              onClick={() => setActiveTab("contact")}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === "contact"
                  ? "border-[#0288D1] text-[#0288D1]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Contact Form
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-6 py-3 font-semibold border-b-2 transition-colors ${
                activeTab === "faq"
                  ? "border-[#0288D1] text-[#0288D1]"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              FAQ
            </button>
          </div>

          {/* Contact Form Tab */}
          {activeTab === "contact" && (
            <div className="max-w-2xl mx-auto">
              {submitted ? (
                <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-[#0288D1] text-center">
                  <CheckCircle className="w-16 h-16 text-[#0288D1] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for contacting us. Our support team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-border">
                  {error && (
                    <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all resize-none"
                      placeholder="Tell us more about your issue..."
                    ></textarea>
                  </div>

                  {/* LIVE reCAPTCHA */}
                  <ReCAPTCHAComponent ref={recaptchaRef} onChange={handleRecaptchaChange} />

                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          )}

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}