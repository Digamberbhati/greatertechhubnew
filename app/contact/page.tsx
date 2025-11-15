"use client"

import type React from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState, useRef } from "react"
import { CheckCircle, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from "lucide-react"
import ReCAPTCHAComponent, { ReCAPTCHARef } from "@/components/ReCAPTCHA"

export default function Contact() {
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
        setError("Something went wrong. Please try again.")
        recaptchaRef.current?.reset()
        setRecaptchaToken(null)
      }
    } catch (err) {
      setError("Network error. Please try again later.")
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
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
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Thank You!</h3>
              <p className="text-muted-foreground">
                Your message has been sent successfully. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 bg-white rounded-xl shadow-2xl border-2 border-transparent bg-clip-border border-gradient-to-r from-[#B3E5FC] to-[#81D4FA] space-y-6">
              {error && (
                <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center">
                  {error}
                </div>
              )}
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300"
                  placeholder="Subject of your message"
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
                  className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300"
                  placeholder="Your message..."
                ></textarea>
              </div>

              {/* ReCAPTCHA */}
              <ReCAPTCHAComponent
                ref={recaptchaRef}
                onChange={handleRecaptchaChange}
                siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              />

              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-primary-foreground rounded-lg hover:shadow-lg transition-all duration-300 font-semibold shadow-md"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Details and Map */}
      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground bg-clip-text text-transparent bg-gradient-to-r from-[#B3E5FC] to-[#0288D1]">
            Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Direct Contact</h3>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <p className="text-lg text-foreground">
                    <a href="tel:+919588160069" className="hover:text-accent transition-colors">+91 9588160069</a>
                  </p>
                </div>
                <p className="text-muted-foreground mt-2">
                  Speak directly with our experts during business hours.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Send Us an Email</h3>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <p className="text-lg text-foreground">
                    <a href="mailto:info@greatertechhub.com" className="hover:text-accent transition-colors">info@greatertechhub.com</a>
                  </p>
                </div>
                <p className="text-muted-foreground mt-2">
                  Send us an email, and we'll respond within 1 minute.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Post & Mail</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">
                    For postal mail, please send to:<br />
                    Plot No 1, GreaterTechHub Office, Near Padam Chowk, Mohna Road, V.P.O Chhainsa<br /><br />
                    For meetings, visit us at:<br />
                    GreaterTechHub (Worldwide with Top-Notch IT Services & BPO Services)<br />
                    3rd Floor, Krishna Palace, Ajronda Rd, Krishna Nagar, Chowk, Sector 20B, Faridabad, Haryana 121001
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://x.com/greatertechhub" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/10 rounded-full hover:bg-gradient-to-r hover:from-[#B3E5FC] hover:to-[#81D4FA] hover:scale-110 transition-all duration-300">
                    <Twitter className="w-6 h-6 text-accent hover:text-primary-foreground" />
                  </a>
                  <a href="https://www.linkedin.com/company/greatertechhub" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/10 rounded-full hover:bg-gradient-to-r hover:from-[#B3E5FC] hover:to-[#81D4FA] hover:scale-110 transition-all duration-300">
                    <Linkedin className="w-6 h-6 text-accent hover:text-primary-foreground" />
                  </a>
                  <a href="https://www.instagram.com/greatertechhub" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/10 rounded-full hover:bg-gradient-to-r hover:from-[#B3E5FC] hover:to-[#81D4FA] hover:scale-110 transition-all duration-300">
                    <Instagram className="w-6 h-6 text-accent hover:text-primary-foreground" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="flex justify-center items-center">
              <div className="w-full h-[450px] rounded-xl shadow-2xl border-2 border-transparent bg-clip-border border-gradient-to-r from-[#B3E5FC] to-[#81D4FA] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112316.51240720753!2d77.15868989726563!3d28.392359599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd002a2eb621%3A0x182026953a2a03b4!2sGreaterTechHub%20(Worldwide%20with%20Top-Notch%20IT%20Services%20%26%20BPO%20Services)!5e0!3m2!1sen!2sin!4v1761468352437!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GreaterTechHub Faridabad Office"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}