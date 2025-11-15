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

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
             
              <span className="text-xl font-bold tracking-wide">GreaterTechHub</span>
            </div>
            <p className="text-sm text-gray-300 mb-6">
              Social media is not just about posting content; it's about building relationships and engaging with your audience. Connect with us on these platforms to stay updated and interact with our community.
            </p>

            {/* 🌐 Social Media Icons */}
            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center">
              {[
                { icon: <FaFacebookF />, color: "#1877F2", link: "https://facebook.com" },
                { icon: <FaInstagram />, color: "#E1306C", link: "https://instagram.com" },
                { icon: <FaXTwitter />, color: "#000000", link: "https://x.com" },
                { icon: <FaYoutube />, color: "#FF0000", link: "https://youtube.com" },
                { icon: <FaWhatsapp />, color: "#25D366", link: "https://wa.me/919588160069" },
                { icon: <FaComments />, color: "#007AFF", link: "https://www.arattai.com/" },
                { icon: <FaLinkedinIn />, color: "#0A66C2", link: "https://linkedin.com" },
                { icon: <FaVk />, color: "#4C75A3", link: "https://vk.com" },
                { icon: <FaPinterestP />, color: "#E60023", link: "https://pinterest.com" },
                { icon: <FaTelegram />, color: "#0088CC", link: "https://t.me" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="group relative"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3"
                    style={{
                      backgroundColor: item.color,
                      boxShadow: `0 0 15px ${item.color}80`,
                    }}
                  >
                    <span className="text-white drop-shadow-lg">{item.icon}</span>
                  </div>
                  {/* Glow Ring Effect */}
                  <span
                    className="absolute inset-0 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{
                      background: `radial-gradient(circle, ${item.color}55 10%, transparent 70%)`,
                    }}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services/web-development" className="hover:text-white transition-colors">Web Development</Link></li>
              <li><Link href="/services/app-development" className="hover:text-white transition-colors">App Development</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/devops" className="hover:text-white transition-colors">DevOps & Cloud</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/partnership" className="hover:text-white transition-colors">Partnership</Link></li>
              <li><Link href="/refer-earn" className="hover:text-white transition-colors">Refer & Earn</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">Contact Information</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+919588160069" className="hover:text-white transition-colors">
                  +91 9588160069
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@greatertechhub.com" className="hover:text-white transition-colors">
                  info@greatertechhub.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <div>
                  <p><strong>Office:</strong> 3rd Floor, Krishna Palace, Ajronda Rd, Faridabad, Haryana 121001</p>
                  <p className="mt-1"><strong>Mailing:</strong> Plot No 1, Near Padam Chowk, Mohna Road, V.P.O Chhainsa</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} GreaterTechHub. All rights reserved.</p>
          <div className="flex gap-6 mt-3 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
