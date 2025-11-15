"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Marquee from "react-fast-marquee";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaEnvelope,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Code, Smartphone, Megaphone, Bot, Cloud, Briefcase,
  Network, Film, PenTool, ClipboardCheck, Building2,
  BarChart3, Users, Headset, LayoutGrid
} from "lucide-react";

// Social Links (Top Bar)
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/greatertechhub', icon: FaInstagram },
  { name: 'Facebook', href: 'https://facebook.com/greatertechhub', icon: FaFacebookF },
  { name: 'YouTube', href: 'https://youtube.com/@greatertechhub', icon: FaYoutube },
  { name: 'X', href: 'https://x.com/greatertechhub', icon: FaXTwitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/greatertechhub', icon: FaLinkedinIn },
  { name: 'WhatsApp', href: 'https://wa.me/919588160069', icon: FaWhatsapp },
];

// Services for Mega Menu
const services = [
  { icon: Code, title: 'Website Development', description: 'Modern, responsive websites...', href: '/services/web-development' },
  { icon: Smartphone, title: 'Mobile App Development', description: 'Native & cross-platform apps', href: '/services/app-development' },
  { icon: Megaphone, title: 'Digital Marketing & SEO', description: 'Boost visibility & conversions', href: '/services/digital-marketing' },
  { icon: Bot, title: 'AI Agents & ChatBots', description: 'Smart automation & support', href: '/services/ai-agents' },
  { icon: Cloud, title: 'DevOps & Cloud', description: 'Scalable cloud infrastructure', href: '/services/devops' },
  { icon: Briefcase, title: 'CRM & ERP Systems', description: 'Streamline business operations', href: '/services/erp-crm' },
  { icon: Network, title: 'IT Infrastructure', description: 'Secure & reliable networks', href: '/services/it-infrastructure-audit' },
  { icon: Film, title: '2D/3D Animation', description: 'Engaging visual storytelling', href: '/services/animation' },
  { icon: ClipboardCheck, title: 'QA & Testing', description: 'Ensure quality & performance', href: '/services/qa-testing' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isZoomed, setIsZoomed] = useState(false); // Zoom state

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(format(new Date(), "hh:mm:ss a", { locale: enUS }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Zoom logo on click
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsZoomed(true);
    setTimeout(() => setIsZoomed(false), 600); // Reset after animation
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Fixed Full Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        {/* Top Announcement Bar */}
        <div className="bg-sky-500 text-white py-2 px-4 lg:px-8 flex items-center justify-between gap-4 text-sm">
          <div className="hidden lg:flex items-center gap-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-100 transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

         <div className="flex-1 overflow-hidden">
  <Marquee speed={50} pauseOnHover>
    <a
      href="/services/web-development"
      className="mx-12 bold hover:text-black"
    >
      Big Black Friday Offer! 🚀 Special discounts on Website Development — 
      both Dynamic & Static Websites. Offer valid until December 15. 
      Click here to grab the deal →
    </a>
  </Marquee>
</div>



          <div className="flex items-center font-mono text-sm">
            {currentTime}
          </div>
        </div>

        {/* Main Navbar */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20"> {/* Increased height for larger logo */}
            {/* Logo with Zoom Animation */}
            <Link href="/" className="flex items-center" onClick={(e) => { closeMenu(); handleLogoClick(e); }}>
              <div
                className={`
                  relative w-20 h-20 transition-all duration-500 ease-out
                  ${isZoomed ? 'scale-150 rotate-12' : 'scale-100 rotate-0'}
                  hover:scale-110
                `}
              >
                <Image
                  src="/logo.png"
                  alt="GreaterTechHub Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="relative group">
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-screen max-w-4xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out transform scale-95 group-hover:scale-100">
                      <div className="bg-white rounded-xl shadow-xl ring-1 ring-border p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {services.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group/item"
                            onClick={closeMenu}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover/item:bg-primary/20 transition-colors">
                              <service.icon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground text-sm">{service.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-accent transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-medium"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-border">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.label} className="space-y-2">
                    <Link
                      href={link.href}
                      className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                    <div className="pl-6 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:bg-secondary/50 rounded-lg transition-colors"
                          onClick={closeMenu}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-colors font-medium text-center mt-4"
                onClick={closeMenu}
              >
                /Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-[160px] md:h-[140px]" />
    </>
  );
}