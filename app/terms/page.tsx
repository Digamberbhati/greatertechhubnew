import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms & Conditions | GreaterTechHub",
  description: "Terms and conditions for GreaterTechHub services.",
}

export const dynamic = "force-static"

export default function Terms() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Terms & Conditions</h1>
          <p className="text-xl text-foreground">Last updated: October 2024</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website and services, you accept and agree to be bound by the terms and
                provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on
                GreaterTechHub's website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on GreaterTechHub's website are provided on an 'as is' basis. GreaterTechHub makes no
                warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                without limitation, implied warranties or conditions of merchantability, fitness for a particular
                purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall GreaterTechHub or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising out of the use
                or inability to use the materials on GreaterTechHub's website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on GreaterTechHub's website could include technical, typographical, or
                photographic errors. GreaterTechHub does not warrant that any of the materials on its website are
                accurate, complete, or current. GreaterTechHub may make changes to the materials contained on its
                website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">6. Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                GreaterTechHub has not reviewed all of the sites linked to its website and is not responsible for the
                contents of any such linked site. The inclusion of any link does not imply endorsement by GreaterTechHub
                of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                GreaterTechHub may revise these terms of service for its website at any time without notice. By using
                this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction
                in which GreaterTechHub operates, and you irrevocably submit to the exclusive jurisdiction of the courts
                located in that location.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
