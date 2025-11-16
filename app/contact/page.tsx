"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useRef, useEffect } from "react"
import { CheckCircle, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hCaptchaToken, setHCaptchaToken] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const data = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
      ...formData,
      "h-captcha-response": hCaptchaToken, // hCaptcha ke liye yeh field name
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log("Form Response:", result)

      if (result.success) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setHCaptchaToken(null)
        setTimeout(() => setSubmitted(false), 3000)
      } else {
        setError(result.message || "Kuch gadbad ho gaya. Dobara try karo.")
      }
    } catch (err) {
      console.error("Error:", err)
      setError("Network problem. Thoda wait karke try karo.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground text-balance bg-clip-text text-transparent bg-gradient-to-r from-[#B3E5FC] to-[#0288D1] drop-shadow-md">
            Contact GreaterTechHub
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto drop-shadow-sm">
            Choose the most convenient way to reach us. We're here to help you succeed with the right technology solutions.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-28 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#B3E5FC]/10 to-[#81D4FA]/10"></div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground bg-clip-text text-transparent bg-gradient-to-r from-[#B3E5FC] to-[#0288D1]">
            Get In Touch
          </h2>

          {submitted ? (
            <div className="p-8 bg-white rounded-xl shadow-2xl border-2 border-transparent bg-clip-border border-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">
                Aapka message successfully bhej diya gaya. Hum jaldi reply karenge!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-2xl border-2 border-transparent bg-clip-border border-gradient-to-r from-[#B3E5FC] to-[#81D4FA] space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  placeholder="Aapka naam"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  placeholder="Aapka subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                  placeholder="Aapka message yahan likho..."
                ></textarea>
              </div>

              {/* hCaptcha - FREE aur WORKING */}
              <div className="py-4">
                <div 
                  className="h-captcha" 
                  data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  data-callback="onHCaptchaSuccess"
                  data-theme="light"
                ></div>
              </div>

              <button
                type="submit"
                disabled={loading || !hCaptchaToken}
                className="w-full px-8 py-3 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Details */}
      <section className="py-28 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-[#B3E5FC] to-[#0288D1]">
            Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Call Us</h3>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-500" />
                  <a href="tel:+919588160069" className="text-lg font-semibold text-gray-900 hover:text-blue-500">+91 9588160069</a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Email</h3>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-500" />
                  <a href="mailto:info@greatertechhub.com" className="text-lg font-semibold text-gray-900 hover:text-blue-500">info@greatertechhub.com</a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Address</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    3rd Floor, Krishna Palace, Ajronda Rd,<br />
                    Krishna Nagar, Sector 20B, Faridabad,<br />
                    Haryana 121001
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Follow Us</h3>
                <div className="flex gap-6">
                  <a href="https://x.com/greatertechhub" target="_blank" className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-blue-600" />
                  </a>
                  <a href="https://www.linkedin.com/company/greatertechhub" target="_blank" className="p-3 bg-blue-50 rounded-full hover:bg-blue-100 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </a>
                  <a href="https://www.instagram.com/greatertechhub" target="_blank" className="p-3 bg-pink-50 rounded-full hover:bg-pink-100 transition-all duration-300">
                    <Instagram className="w-6 h-6 text-pink-600" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-full h-[450px] rounded-xl shadow-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112316.51240720753!2d77.15868989726563!3d28.392359599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd002a2eb621%3A0x182026953a2a03b4!2sGreaterTechHub%20(Worldwide%20with%20Top-Notch%20IT%20Services%20%26%20BPO%20Services)!5e0!3m2!1sen!2sin!4v1761468352437!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GreaterTechHub Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* hCaptcha Script - YE MUST HAI */}
      <script src="https://js.hcaptcha.com/1/api.js" async defer></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.onHCaptchaSuccess = function(token) {
            window.hCaptchaToken = token;
          }
        `
      }} />
    </main>
  )
}