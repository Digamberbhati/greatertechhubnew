import { ServiceLayout } from "@/components/service-layout"
import { CheckCircle, Shield, Server, Cloud, Activity, Lock, AlertTriangle, Zap } from "lucide-react"

export const metadata = {
  title: "IT Infrastructure & Audit | GreaterTechHub",
  description: "Complete IT Infrastructure Setup + Security Audit – Secure, Scalable, Compliant.",
}

export const dynamic = "force-static"

export default function ITInfraAudit() {
  const infrastructureFeatures = [
    "Cloud Migration (AWS, Azure, GCP)",
    "On-Premise & Hybrid Setup",
    "High-Availability Architecture",
    "Automated Backup & DR",
    "Network Security & Firewall",
    "24/7 Monitoring Dashboard",
    "VPN & Zero Trust Access",
    "Performance Tuning",
  ]

  const auditFeatures = [
    "Full Security Vulnerability Scan",
    "Compliance Check (ISO 27001, GDPR, HIPAA)",
    "Network & Server Health Report",
    "Risk Priority Matrix",
    "Penetration Testing (Optional)",
    "Detailed 20+ Page Audit Report",
    "90-Day Fix Roadmap",
    "Post-Audit Support Included",
  ]

  return (
    <ServiceLayout
      title="IT Infrastructure & Audit"
      subtitle="End-to-end IT foundation + pro-level security audit – everything your business needs to run securely at scale."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Intro */}
        <div className="text-center mb-20 pt-10">
          <div className="inline-flex items-center gap-3 bg-teal-100 text-teal-800 px-6 py-3 rounded-full text-sm font-bold mb-6">
            <Shield className="w-5 h-5" />
            Enterprise-Grade Security + Scalability
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            From building bulletproof cloud infrastructure to running deep security audits — we handle everything so you 
            <span className="text-teal-600 font-bold"> never lose sleep over downtime, breaches, or compliance fines.</span>
          </p>
        </div>

        {/* IT Infrastructure Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <Server className="w-12 h-12 text-teal-600" />
            <h2 className="text-4xl font-bold text-foreground">IT Infrastructure Setup</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            We design and deploy production-ready infrastructure that scales automatically and recovers instantly — 
            whether you're a startup or a 500-employee company.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-teal-50 to-cyan-50 
                         rounded-2xl border border-teal-200 hover:border-teal-400 
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-2 bg-teal-600 rounded-lg group-hover:scale-110 transition-transform">
                  {index % 2 === 0 ? <Cloud className="w-6 h-6 text-white" /> : <Zap className="w-6 h-6 text-white" />}
                </div>
                <span className="text-foreground font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IT Audit Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10">
            <AlertTriangle className="w-12 h-12 text-red-600" />
            <h2 className="text-4xl font-bold text-foreground">Professional IT Audit & Compliance</h2>
          </div>
          <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
            Our certified auditors dig deep into your systems to find hidden risks — then give you a 
            <span className="text-red-600 font-bold"> step-by-step plan to fix everything before hackers do.</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="group flex items-start gap-4 p-6 bg-gradient-to-br from-red-50 to-orange-50 
                         rounded-2xl border border-red-200 hover:border-red-500 
                         hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-2 bg-red-600 rounded-lg group-hover:scale-110 transition-transform">
                  {index % 2 === 0 ? <Lock className="w-6 h-6 text-white" /> : <Activity className="w-6 h-6 text-white" />}
                </div>
                <span className="text-foreground font-semibold">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20 text-center">
          <div>
            <div className="text-5xl font-bold text-teal-600">99.99%</div>
            <p className="text-muted-foreground mt-2">Uptime Guarantee</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-red-600">300+</div>
            <p className="text-muted-foreground mt-2">Audits Completed</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-blue-600">Zero</div>
            <p className="text-muted-foreground mt-2">Data Breaches (Our Clients)</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-green-600">24/7</div>
            <p className="text-muted-foreground mt-2">Indian Support Team</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center p-16 bg-gradient-to-br from-teal-900 to-blue-900 rounded-3xl shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Your FREE IT Health Check Worth ₹25,000
          </h3>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Limited slots: Only 5 businesses per week get this comprehensive audit absolutely FREE. 
            No strings attached. Takes 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-white text-teal-900 rounded-2xl font-bold text-xl 
                             hover:bg-teal-50 transition-all transform hover:scale-105 shadow-xl">
              Claim Free Audit Now
            </button>
            <button className="px-12 py-5 border-2 border-white text-white rounded-2xl font-bold text-xl 
                             hover:bg-white/10 transition-all backdrop-blur">
              Call: +91 98765 43210
            </button>
          </div>
          <p className="text-sm text-teal-200 mt-6">
            Next slot available: <span className="font-bold">Tomorrow 11 AM</span>
          </p>
        </div>

      </div>
    </ServiceLayout>
  )
}