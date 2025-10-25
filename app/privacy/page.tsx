import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | GreaterTechHub",
  description: "Privacy policy for GreaterTechHub services.",
}

export const dynamic = "force-static"

export default function Privacy() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Privacy Policy</h1>
          <p className="text-xl text-foreground">Last updated: October 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              GreaterTechHub ("we", "us", "our", or "Company") operates the website. This page informs you of our
              policies regarding the collection, use, and disclosure of personal data when you use our Service and the
              choices you have associated with that data.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">2. Information Collection and Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We collect several different types of information for various purposes to provide and improve our Service
              to you.
            </p>
            <h3 className="text-xl font-bold mb-2 text-foreground">Types of Data Collected:</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Personal Data: Name, email address, phone number, company information</li>
              <li>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
              <li>Cookies and Tracking Data: Information collected through cookies and similar technologies</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">3. Use of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              GreaterTechHub uses the collected data for various purposes including providing and maintaining our
              Service, notifying you about changes to our Service, allowing you to participate in interactive features,
              providing customer support, and gathering analysis or valuable information.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">4. Security of Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              The security of your data is important to us but remember that no method of transmission over the Internet
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to
              protect your Personal Data, we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at privacy@greatertechhub.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
