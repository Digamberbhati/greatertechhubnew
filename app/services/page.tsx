import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Services | GreaterTechHub",
  description: "Explore our comprehensive range of technology services designed to empower your business.",
}

export const dynamic = "force-static"

export default function Services() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#B3E5FC] to-[#81D4FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground">Our Services</h1>
          <p className="text-xl text-foreground">Empowering businesses with innovative technology solutions.</p>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Explore Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Website Development Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Website Development</h3>
                <p className="text-muted-foreground leading-relaxed">Custom, responsive websites built with cutting-edge technologies for optimal performance.</p>
              </div>
            </div>

            {/* App Development Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">App Development</h3>
                <p className="text-muted-foreground leading-relaxed">Native and cross-platform mobile applications that engage users and drive business growth.</p>
              </div>
            </div>

            {/* Digital Marketing Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Digital Marketing & Branding</h3>
                <p className="text-muted-foreground leading-relaxed">Strategic marketing campaigns and branding solutions to elevate your online presence.</p>
              </div>
            </div>

            {/* DevOps Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">DevOps & Cloud Services</h3>
                <p className="text-muted-foreground leading-relaxed">Scalable cloud infrastructure and DevOps solutions for seamless operations.</p>
              </div>
            </div>

            {/* ERP/CRM Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">ERP / CRM & System Design</h3>
                <p className="text-muted-foreground leading-relaxed">Enterprise solutions tailored to streamline your business processes.</p>
              </div>
            </div>

            {/* QA Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">QA & Software Testing</h3>
                <p className="text-muted-foreground leading-relaxed">Comprehensive testing services ensuring quality and reliability of your software.</p>
              </div>
            </div>

            {/* AI Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">AI Agents & Chatbots</h3>
                <p className="text-muted-foreground leading-relaxed">Intelligent AI solutions that automate processes and enhance customer interactions.</p>
              </div>
            </div>

            {/* Animation Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">2D & 3D Animation & Video</h3>
                <p className="text-muted-foreground leading-relaxed">Creative animation and video production services that captivate your audience.</p>
              </div>
            </div>

            {/* Main IT Infrastructure & IT Audit Card */}
            <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer perspective-1000 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 transform group-hover:rotate-y-12 origin-center transition-transform duration-700 ease-out">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Main IT Infrastructure & IT Audit</h3>
                <p className="text-muted-foreground leading-relaxed">Robust IT infrastructure setup and comprehensive IT audits to ensure security and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Project Completion Process</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Discovery & Planning</h3>
                <p className="text-muted-foreground leading-relaxed">We start by understanding your requirements, goals, and challenges to create a tailored project roadmap.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Design & Development</h3>
                <p className="text-muted-foreground leading-relaxed">Our team designs wireframes, prototypes, and builds the solution using the latest technologies.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Testing & Iteration</h3>
                <p className="text-muted-foreground leading-relaxed">Rigorous QA testing ensures quality, with iterations based on your feedback for perfection.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-foreground">Deployment & Support</h3>
                <p className="text-muted-foreground leading-relaxed">We launch your project and provide ongoing support, maintenance, and scaling as needed.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Frequently Asked Questions</h2>
          <p className="text-xl text-center text-muted-foreground mb-8">Get insights into our technologies, project timelines, and more in this interactive FAQ.</p>
          <div className="space-y-6">
            {/* FAQ Item 1: Technologies */}
            <details className="group bg-gray-50 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold text-foreground group-open:text-blue-600">
                What technologies do we work with?
                <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                <p>We work with all modern technologies tailored to your project needs. Whether it's front-end frameworks like React, Vue, or Angular; back-end with Node.js, Python, or Java; cloud platforms like AWS, Azure, or Google Cloud; or emerging tech like AI/ML and blockchain—we've got you covered across the board.</p>
              </div>
            </details>

            {/* FAQ Item 2: Project Delivery Timelines */}
            <details className="group bg-gray-50 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold text-foreground group-open:text-blue-600">
                How long does it take to deliver projects?
                <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                <p>Our delivery timelines vary based on project complexity. Here's a breakdown for each service:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li><strong>Website Development:</strong> Static websites in 1 day; dynamic websites in 5-7 days; custom projects depend on scope.</li>
                  <li><strong>App Development:</strong> Simple apps in 1-2 weeks; standard cross-platform apps in 4-6 weeks; custom or complex apps depend on project requirements.</li>
                  <li><strong>Digital Marketing & Branding:</strong> Basic campaigns in 1-2 weeks; full branding strategies in 3-4 weeks; ongoing or custom campaigns depend on scope.</li>
                  <li><strong>DevOps & Cloud Services:</strong> Basic setups in 3-5 days; full infrastructure migrations in 2-4 weeks; custom solutions depend on project complexity.</li>
                  <li><strong>ERP / CRM & System Design:</strong> Standard implementations in 4-6 weeks; customized enterprise systems in 2-3 months; timelines vary based on integration needs.</li>
                  <li><strong>QA & Software Testing:</strong> Basic testing cycles in 2-4 days; comprehensive testing for large projects in 1-2 weeks; custom testing depends on software size.</li>
                  <li><strong>AI Agents & Chatbots:</strong> Simple bots in 3-5 days; advanced AI agents in 2-4 weeks; custom AI solutions depend on data and model complexity.</li>
                  <li><strong>2D & 3D Animation & Video:</strong> Short animations in 3-7 days; full video productions in 2-4 weeks; custom creative projects depend on length and detail.</li>
                  <li><strong>Main IT Infrastructure & IT Audit:</strong> Basic audits in 2-4 days; full infrastructure setups in 1-2 weeks; custom or large-scale projects depend on scope.</li>
                </ul>
              </div>
            </details>

            {/* FAQ Item 3: Why Choose Us */}
            <details className="group bg-gray-50 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-lg">
              <summary className="flex justify-between items-center cursor-pointer text-2xl font-bold text-foreground group-open:text-blue-600">
                Why choose GreaterTechHub for your projects?
                <span className="text-blue-500 group-open:rotate-180 transition-transform duration-300">▼</span>
              </summary>
              <div className="mt-4 text-muted-foreground leading-relaxed">
                <p>We combine expertise, innovation, and speed to deliver high-quality solutions. With a focus on client satisfaction, we ensure every project is scalable, secure, and future-proof.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center text-foreground">Our Success Stories</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">See how we help businesses grow with our supportive and innovative approach.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1: E-commerce Website */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">E-commerce Website for a Local Store</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>How We Started:</strong> A local store wanted an online shop. We sat with them, understood their products, and planned a simple, user-friendly website.<br />
                  <strong>How We Built It:</strong> Using React and Node.js, we created a fast, dynamic website with payment integration in just 5 days. We kept them updated daily, making changes based on their feedback.<br />
                  <strong>After Delivery:</strong> After launching, we trained their team to manage the site and provided 24/7 support. Their sales grew by 40% in 3 months, and we’re still here to help them scale.
                </p>
                <p className="text-blue-600 font-semibold">We love supporting businesses to succeed online!</p>
              </div>
            </div>

            {/* Case Study 2: Mobile App for a Startup */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">Mobile App for a Food Delivery Startup</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>How We Started:</strong> A startup needed a food delivery app. We discussed their goals, target audience, and features, then created a clear plan.<br />
                  <strong>How We Built It:</strong> Using Flutter, we built a cross-platform app with real-time tracking in 4 weeks. We shared progress weekly, ensuring the app matched their vision.<br />
                  <strong>After Delivery:</strong> Post-launch, we fixed bugs quickly and added new features as their business grew. Their app now serves 10,000+ users, and we’re always ready to support their next big idea.
                </p>
                <p className="text-blue-600 font-semibold">We’re here to help startups shine with reliable tech!</p>
              </div>
            </div>

            {/* Case Study 3: IT Infrastructure for a Small Business */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:scale-105">
              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">IT Infrastructure for a Small Business</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <strong>How We Started:</strong> A small business had outdated IT systems. We audited their setup, understood their needs, and planned a modern infrastructure.<br />
                  <strong>How We Built It:</strong> We set up cloud servers on AWS and secured their network in 10 days. We explained every step to keep them comfortable and informed.<br />
                  <strong>After Delivery:</strong> After setup, we provided ongoing support, training, and regular audits. Their downtime dropped to zero, and we’re always a call away to help them grow.
                </p>
                <p className="text-blue-600 font-semibold">We make business growth easy with supportive IT solutions!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}