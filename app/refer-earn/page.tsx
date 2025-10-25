"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { CheckCircle, Gift, TrendingUp, Users } from "lucide-react"

export default function ReferEarn() {
  const [referralData, setReferralData] = useState({
    referrerName: "",
    referrerEmail: "",
    clientName: "",
    clientEmail: "",
    clientCompany: "",
    serviceInterest: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setReferralData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setReferralData({
        referrerName: "",
        referrerEmail: "",
        clientName: "",
        clientEmail: "",
        clientCompany: "",
        serviceInterest: "",
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground text-balance">Refer & Earn</h1>
          <p className="text-xl text-foreground max-w-2xl">
            Share GreaterTechHub with your network and earn attractive rewards.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                step: "1. Refer",
                description: "Refer a client or business to GreaterTechHub",
              },
              {
                icon: TrendingUp,
                step: "2. Convert",
                description: "We work with them and close the deal",
              },
              {
                icon: Gift,
                step: "3. Earn",
                description: "Receive your referral commission",
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-16 h-16 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 text-foreground">{item.step}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rewards */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Referral Rewards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard Referral",
                commission: "10%",
                description: "Earn 10% commission on the first year contract value",
              },
              {
                title: "Premium Referral",
                commission: "15%",
                description: "Earn 15% commission for referrals over $50,000",
              },
              {
                title: "Elite Referral",
                commission: "20%",
                description: "Earn 20% commission for enterprise contracts",
              },
            ].map((reward, index) => (
              <div key={index} className="p-8 bg-white rounded-lg border-2 border-accent text-center">
                <h3 className="text-2xl font-bold mb-2 text-foreground">{reward.title}</h3>
                <p className="text-5xl font-bold text-accent mb-4">{reward.commission}</p>
                <p className="text-muted-foreground">{reward.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Submit a Referral</h2>

          {submitted ? (
            <div className="p-8 bg-secondary rounded-lg border-2 border-accent text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-foreground">Referral Submitted!</h3>
              <p className="text-muted-foreground">
                Thank you for the referral! We'll contact your client and keep you updated on the progress.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="p-6 bg-secondary rounded-lg mb-6">
                <h3 className="font-bold text-foreground mb-2">Your Information</h3>
                <p className="text-sm text-muted-foreground">Tell us about yourself</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Your Name</label>
                  <input
                    type="text"
                    name="referrerName"
                    value={referralData.referrerName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Your Email</label>
                  <input
                    type="email"
                    name="referrerEmail"
                    value={referralData.referrerEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="p-6 bg-secondary rounded-lg">
                <h3 className="font-bold text-foreground mb-2">Client Information</h3>
                <p className="text-sm text-muted-foreground">Tell us about the client you're referring</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Client Name</label>
                  <input
                    type="text"
                    name="clientName"
                    value={referralData.clientName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="Client name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Client Email</label>
                  <input
                    type="email"
                    name="clientEmail"
                    value={referralData.clientEmail}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="client@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Client Company</label>
                <input
                  type="text"
                  name="clientCompany"
                  value={referralData.clientCompany}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Company name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-foreground">Service Interest</label>
                <select
                  name="serviceInterest"
                  value={referralData.serviceInterest}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select service</option>
                  <option value="web">Web Development</option>
                  <option value="app">App Development</option>
                  <option value="marketing">Digital Marketing</option>
                  <option value="devops">DevOps & Cloud</option>
                  <option value="erp">ERP/CRM</option>
                  <option value="qa">QA Testing</option>
                  <option value="ai">AI Agents</option>
                  <option value="animation">Animation & Video</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-semibold"
              >
                Submit Referral
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
