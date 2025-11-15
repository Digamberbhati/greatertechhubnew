// app/partnership/page.tsx
"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useRef } from "react"
import { CheckCircle } from "lucide-react"
import ReCAPTCHAComponent, { ReCAPTCHARef } from "@/components/ReCAPTCHA"

export default function Partnership() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnershipType: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHARef>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        setFormData({
          companyName: "",
          contactName: "",
          email: "",
          phone: "",
          partnershipType: "",
          message: "",
        })
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

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Collaborate on integrated solutions and joint offerings",
    },
    {
      title: "Reseller Partners",
      description: "Resell our services to your clients with attractive margins",
    },
    {
      title: "Strategic Alliances",
      description: "Form strategic partnerships for mutual growth and expansion",
    },
    {
      title: "Integration Partners",
      description: "Integrate your platform with our services for enhanced value",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-r from-white to-[#0288D1]">
            Partner With GreaterTechHub
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto drop-shadow">
            Join us in delivering innovative technology solutions and growing together.
          </p>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Partnership Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-[#B3E5FC]/5 to-[#81D4FA]/5 rounded-2xl border border-[#B3E5FC]/30 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-[#0288D1] transition-colors">
                  {type.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Why Partner With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              "Access to cutting-edge technology and expertise",
              "Competitive partner margins and incentives",
              "Dedicated partner support and resources",
              "Co-marketing opportunities and visibility",
              "Training and certification programs",
              "Regular partner events and networking",
            ].map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-4">
                <CheckCircle className="w-7 h-7 text-[#0288D1] flex-shrink-0 mt-0.5" />
                <p className="text-lg text-foreground leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Get Started</h2>

          {submitted ? (
            <div className="p-10 bg-gradient-to-br from-[#B3E5FC]/10 to-[#81D4FA]/10 rounded-2xl border-2 border-[#0288D1] text-center shadow-xl">
              <CheckCircle className="w-20 h-20 text-[#0288D1] mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3 text-foreground">Thank You!</h3>
              <p className="text-muted-foreground text-lg">
                We've received your partnership inquiry. Our team will contact you within 24 hours to discuss opportunities.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border border-border">
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center font-medium">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Company Name *</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                    placeholder="ABC Technologies Pvt Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Contact Name *</label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                    placeholder="john@abc.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Partnership Type *</label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all appearance-none bg-white"
                >
                  <option value="">Select partnership type</option>
                  <option value="technology">Technology Partners</option>
                  <option value="reseller">Reseller Partners</option>
                  <option value="strategic">Strategic Alliances</option>
                  <option value="integration">Integration Partners</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0288D1] focus:border-[#0288D1] transition-all resize-none"
                  placeholder="Tell us about your company, goals, and how we can collaborate..."
                ></textarea>
              </div>

              {/* LIVE reCAPTCHA */}
              <ReCAPTCHAComponent ref={recaptchaRef} onChange={handleRecaptchaChange} />

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-primary-foreground rounded-lg hover:shadow-xl transition-all duration-300 font-bold text-lg shadow-lg"
              >
                Submit Partnership Inquiry
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}