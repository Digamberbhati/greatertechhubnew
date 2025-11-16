"use client";

import React, { useState, useRef, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

import HCAPTCHAComponent, { HCAPTCHARef } from "@/components/hcaptcha";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [hcaptchaToken, setHcaptchaToken] = useState<string | null>(null);
  const hcaptchaRef = useRef<HCAPTCHARef>(null);

  useEffect(() => {
    const check = () => {
      const t = hcaptchaRef.current?.getValue() ?? null;
      setHcaptchaToken(t);
    };
    const id = setInterval(check, 500);
    return () => clearInterval(id);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = hcaptchaRef.current?.getValue();
    if (!token) {
      setError("Please complete the hCaptcha.");
      return;
    }

    setLoading(true);
    setError(null);

    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!,
      ...formData,
      "h-captcha-response": token,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        hcaptchaRef.current?.reset();
        setHcaptchaToken(null);
        setTimeout(() => setSubmitted(false), 4000);
      } else {
        setError(data.message || "Failed to send. Try again.");
        hcaptchaRef.current?.reset();
      }
    } catch {
      setError("Network error. Try again.");
      hcaptchaRef.current?.reset();
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="relative py-28 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text text-transparent bg-gradient-to-r from-[#B3E5FC] to-[#0288D1] drop-shadow-md">
            Contact GreaterTechHub
          </h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto drop-shadow-sm">
            Reach out to us. We're here to help.
          </p>
        </div>
      </section>

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
              <p className="text-muted-foreground">Message sent. We'll reply soon!</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-white rounded-xl shadow-2xl border-2 border-transparent bg-clip-border border-gradient-to-r from-[#B3E5FC] to-[#81D4FA] space-y-6"
            >
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-center text-sm">
                  {error}
                </div>
              )}

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                placeholder="your@email.com"
              />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all"
                placeholder="Subject"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                required
                className="w-full px-4 py-3 bg-gray-50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all resize-none"
                placeholder="Your Message..."
              />

              <HCAPTCHAComponent ref={hcaptchaRef} />

              <button
                type="submit"
                disabled={loading || !hcaptchaToken}
                className="w-full px-8 py-3 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA] text-white rounded-lg hover:shadow-lg transition-all font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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

      <section className="py-28 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground bg-clip-text text-transparent bg-gradient-to-r from-[#B3E5FC] to-[#0288D1]">
            Reach Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Call Us</h3>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-accent" />
                  <a href="tel:+919588160069" className="text-lg hover:text-accent">
                    +91 9588160069
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Email Us</h3>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-accent" />
                  <a href="mailto:info@greatertechhub.com" className="text-lg hover:text-accent">
                    info@greatertechhub.com
                  </a>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Visit Us</h3>
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1" />
                  <p className="text-foreground">
                    3rd Floor, Krishna Palace, Ajronda Rd, Sector 20B, Faridabad, Haryana 121001
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Follow Us</h3>
                <div className="flex gap-4">
                  <a href="https://x.com/greatertechhub" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/10 rounded-full hover:bg-gradient-to-r hover:from-[#B3E5FC] hover:to-[#81D4FA] transition-all">
                    <Twitter className="w-6 h-6 text-accent" />
                  </a>
                  <a href="https://linkedin.com/company/greatertechhub" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/10 rounded-full hover:bg-gradient-to-r hover:from-[#B3E5FC] hover:to-[#81D4FA] transition-all">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </a>
                  <a href="https://instagram.com/greatertechhub" target="_blank" rel="noopener noreferrer" className="p-2 bg-accent/10 rounded-full hover:bg-gradient-to-r hover:from-[#B3E5FC] hover:to-[#81D4FA] transition-all">
                    <Instagram className="w-6 h-6 text-accent" />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="w-full h-[450px] rounded-xl shadow-2xl border-2 border-transparent bg-clip-border border-gradient-to-r from-[#B3E5FC] to-[#81D4FA] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112316.51240720753!2d77.15868989726563!3d28.392359599999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd002a2eb621%3A0x182026953a2a03b4!2sGreaterTechHub!5e0!3m2!1sen!2sin!4v1761468352437!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GreaterTechHub Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}