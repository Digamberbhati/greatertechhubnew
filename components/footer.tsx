import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">GT</span>
              </div>
              <span className="font-bold text-lg">GreaterTechHub</span>
            </div>
            <p className="text-sm opacity-80">
              Leading IT services company delivering innovative technology solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/web-development" className="opacity-80 hover:opacity-100 transition-opacity">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/app-development" className="opacity-80 hover:opacity-100 transition-opacity">
                  App Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="opacity-80 hover:opacity-100 transition-opacity">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/devops" className="opacity-80 hover:opacity-100 transition-opacity">
                  DevOps & Cloud
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="opacity-80 hover:opacity-100 transition-opacity">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="opacity-80 hover:opacity-100 transition-opacity">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/refer-earn" className="opacity-80 hover:opacity-100 transition-opacity">
                  Refer & Earn
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@greatertechhub.com" className="opacity-80 hover:opacity-100 transition-opacity">
                  info@greatertechhub.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+1234567890" className="opacity-80 hover:opacity-100 transition-opacity">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="opacity-80">123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">&copy; {currentYear} GreaterTechHub. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="opacity-80 hover:opacity-100 transition-opacity">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="opacity-80 hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link href="/support" className="opacity-80 hover:opacity-100 transition-opacity">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
