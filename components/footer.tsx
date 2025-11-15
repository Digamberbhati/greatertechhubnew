"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
  FaComments,
  FaLinkedinIn,
  FaPinterestP,
  FaVk,
  FaTelegram,
} from "react-icons/fa6"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaFacebookF />, color: "bg-blue-600", link: "https://www.facebook.com/greatertechhub" },
    { icon: <FaInstagram />, color: "bg-pink-600", link: "https://www.instagram.com/greatertechhub" },
    { icon: <FaXTwitter />, color: "bg-black", link: "https://x.com/greatertechhub" },
    { icon: <FaYoutube />, color: "bg-red-600", link: "https://www.youtube.com/@greatertechhub" },
    { icon: <FaWhatsapp />, color: "bg-green-500", link: "https://wa.me/919588160069" },
    // { icon: <FaComments />, color: "bg-blue-500", link: "https://www.arattai.com/greatertechhub" },
    { icon: <FaLinkedinIn />, color: "bg-blue-700", link: "https://www.linkedin.com/company/greatertechhub" },
    // { icon: <FaVk />, color: "bg-blue-800", link: "https://vk.com/greatertechhub" },
    { icon: <FaPinterestP />, color: "bg-red-700", link: "https://in.pinterest.com/greatertech/" },
    { icon: <FaTelegram />, color: "bg-sky-500", link: "https://t.me/greatertechhub" },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg"></div>
              <span className="text-xl font-bold tracking-wide">GreaterTechHub</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Social media is not just about posting content; it's about building relationships and engaging with your audience. Connect with us on these platforms to stay updated and interact with our community.
            </p>

            {/* Social Icons - Responsive Grid */}
            <div className="grid grid-cols-5 sm:grid-cols-5 gap-3 max-w-xs">
              {socialLinks.map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="group relative p-3 rounded-full transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <div
                    className={`${item.color} w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-${item.color.split('-')[1]}/50`}
                  >
                    <span className="text-lg">{item.icon}</span>
                  </div>
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(circle, ${getColorHex(item.color)}40 0%, transparent 70%)`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "App Development", href: "/services/app-development" },
                { name: "Digital Marketing", href: "/services/digital-marketing" },
                { name: "DevOps & Cloud", href: "/services/devops" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { name: "About Us", href: "/about" },
                { name: "Case Studies", href: "/case-studies" },
                { name: "Partnership", href: "/partnership" },
                { name: "Refer & Earn", href: "/refer-earn" },
                { name: "Blog", href: "/blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-400">Contact Information</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-400" />
                <a href="tel:+919588160069" className="hover:text-white transition-colors">
                  +91 95881 60069
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-cyan-400" />
                <a href="mailto:info@greatertechhub.com" className="hover:text-white transition-colors break-all">
                  info@greatertechhub.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs leading-relaxed">
                  <p><strong className="text-cyan-300">Office:</strong> 3rd Floor, Krishna Palace, Ajronda Rd, Faridabad, Haryana 121001</p>
                  <p className="mt-1"><strong className="text-cyan-300">Mailing:</strong> Plot No 1, Near Padam Chowk, Mohna Road, V.P.O Chhainsa</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-4">
          <p>© {currentYear} GreaterTechHub. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Helper to extract color for glow (optional, can be removed if not needed)
function getColorHex(colorClass: string): string {
  const map: { [key: string]: string } = {
    "bg-blue-600": "#2563eb",
    "bg-pink-600": "#ec4899",
    "bg-black": "#000000",
    "bg-red-600": "#dc2626",
    "bg-green-500": "#10b981",
    "bg-blue-500": "#3b82f6",
    "bg-blue-700": "#1d4ed8",
    "bg-blue-800": "#1e40af",
    "bg-red-700": "#b91c1c",
    "bg-sky-500": "#0ea5e9",
  }
  return map[colorClass] || "#3b82f6"
}