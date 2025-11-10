import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { AnimatedServiceCard } from "@/components/animated-service-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ParallaxSection } from "@/components/parallax-section";
import { Globe, Smartphone, TrendingUp, Cloud, Database, CheckCircle, Zap, Film, Server, Users, Lightbulb, Target, Clock, Headphones } from "lucide-react";

import { HeroSection } from "@/components/hero-section";
import { ClientTestimonials } from "@/components/client-testimonials";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const dynamic = "force-static";

// Why Choose Data
const whyChooseData = [
  { title: "Expert Team", desc: "Highly skilled professionals with years of industry experience.", icon: Users, color: "from-blue-500 to-cyan-500" },
  { title: "Innovative Solutions", desc: "Cutting-edge technologies and creative approaches.", icon: Lightbulb, color: "from-purple-500 to-pink-500" },
  { title: "Client-Focused", desc: "Your success is our priority. We work closely with you.", icon: Target, color: "from-green-500 to-emerald-500" },
  { title: "Timely Delivery", desc: "On schedule, every time — without compromising quality.", icon: Clock, color: "from-orange-500 to-red-500" },
  { title: "24/7 Support", desc: "Round-the-clock assistance for any issue.", icon: Headphones, color: "from-indigo-500 to-blue-500" },
  { title: "Scalable Solutions", desc: "Built to grow with your business needs.", icon: TrendingUp, color: "from-teal-500 to-cyan-500" },
];

// Reusable Why Choose Card
function WhyChooseCard({ item, index }: { item: typeof whyChooseData[0]; index: number }) {
  const Icon = item.icon;
  return (
    <ScrollReveal delay={index * 80}>
      <div className="group p-6 bg-white rounded-2xl border border-border hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-3 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-full h-full text-white" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
        <div className={`h-1 w-0 bg-gradient-to-r ${item.color} group-hover:w-full transition-all duration-500 rounded-full mt-4`}></div>
      </div>
    </ScrollReveal>
  );
}

export default function Home() {
  const services = [
    {
      icon: <Globe className="w-full h-full" />,
      title: "Website Development",
      description: "Custom, responsive websites built with cutting-edge technologies for optimal performance.",
      href: "/services/web-development",
    },
    {
      icon: <Smartphone className="w-full h-full" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      href: "/services/app-development",
    },
    {
      icon: <TrendingUp className="w-full h-full" />,
      title: "Digital Marketing & Branding",
      description: "Strategic marketing campaigns and branding solutions to elevate your online presence.",
      href: "/services/digital-marketing",
    },
    {
      icon: <Cloud className="w-full h-full" />,
      title: "DevOps & Cloud Services",
      description: "Scalable cloud infrastructure and DevOps solutions for seamless operations.",
      href: "/services/devops",
    },
    {
      icon: <Database className="w-full h-full" />,
      title: "ERP / CRM & System Design",
      description: "Enterprise solutions tailored to streamline your business processes.",
      href: "/services/erp-crm",
    },
    {
      icon: <CheckCircle className="w-full h-full" />,
      title: "QA & Software Testing",
      description: "Comprehensive testing services ensuring quality and reliability of your software.",
      href: "/services/qa-testing",
    },
    {
      icon: <Zap className="w-full h-full" />,
      title: "AI Agents & Chatbots",
      description: "Intelligent AI solutions that automate processes and enhance customer interactions.",
      href: "/services/ai-agents",
    },
    {
      icon: <Film className="w-full h-full" />,
      title: "2D & 3D Animation & Video",
      description: "Creative animation and video production services that captivate your audience.",
      href: "/services/animation",
    },
    {
      icon: <Server className="w-full h-full" />,
      title: "IT Infrastructure & Audit",
      description: "Secure, scalable IT setup + professional security audit with compliance guarantee.",
      href: "/services/it-infrastructure-audit",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section - Premium 3D Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive IT solutions designed to meet your business needs and drive digital transformation.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className={`block group ${index >= 3 ? 'hidden sm:block' : ''}`}>
                <Link href={service.href} className="block">
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 
                                  transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:-translate-y-3">
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700
                      ${index === 0 ? 'from-blue-50 to-blue-100' :
                        index === 1 ? 'from-green-50 to-green-100' :
                        index === 2 ? 'from-purple-50 to-purple-100' :
                        index === 3 ? 'from-orange-50 to-orange-100' :
                        index === 4 ? 'from-indigo-50 to-indigo-100' :
                        index === 5 ? 'from-red-50 to-red-100' :
                        index === 6 ? 'from-pink-50 to-pink-100' :
                        index === 7 ? 'from-yellow-50 to-yellow-100' :
                                     'from-teal-50 to-teal-100'}`}
                    ></div>

                    <div className="relative p-10 transform group-hover:rotate-y-6 origin-bottom transition-transform duration-700">
                      <div className="w-16 h-16 mb-6 mx-auto">{service.icon}</div>
                      <h3 className="text-2xl font-bold mb-4 text-foreground text-center">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-8 text-center">{service.description}</p>
                      <Button 
                        variant="ghost" 
                        className={`mx-auto flex items-center gap-2 font-semibold
                          ${index === 0 ? 'text-blue-600 hover:text-blue-700' :
                            index === 1 ? 'text-green-600 hover:text-green-700' :
                            index === 2 ? 'text-purple-600 hover:text-purple-700' :
                            index === 3 ? 'text-orange-600 hover:text-orange-700' :
                            index === 4 ? 'text-indigo-600 hover:text-indigo-700' :
                            index === 5 ? 'text-red-600 hover:text-red-700' :
                            index === 6 ? 'text-pink-600 hover:text-pink-700' :
                            index === 7 ? 'text-yellow-600 hover:text-yellow-700' :
                                         'text-teal-600 hover:text-teal-700'}
                        `}
                      >
                        Explore <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                      </Button>
                    </div>

                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <ExternalLink className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 sm:hidden">
            <ScrollReveal delay={300}>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-[#1E1E1E] transition-all font-semibold hover:scale-105 transform shadow-md"
              >
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose GreaterTechHub - Center Image + 6 Cards Around */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-foreground text-balance">
              Why Choose GreaterTechHub?
            </h2>
            <p className="text-xl text-muted-foreground mb-16 text-center max-w-3xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results.
            </p>
          </ScrollReveal>

          {/* Desktop: 3x3 Grid with Center Image */}
          <div className="hidden lg:grid grid-cols-3 gap-6 items-center">
            <WhyChooseCard item={whyChooseData[0]} index={0} />
            <div />
            <WhyChooseCard item={whyChooseData[1]} index={1} />

            <WhyChooseCard item={whyChooseData[2]} index={2} />
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <img 
                src="/ecommerce-platform-concept.png" 
                alt="GreaterTechHub Team"
                className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-3xl border border-border"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                <p className="text-white font-bold text-lg">Your Success. Our Mission.</p>
              </div>
            </div>
            <WhyChooseCard item={whyChooseData[3]} index={3} />

            <WhyChooseCard item={whyChooseData[4]} index={4} />
            <div />
            <WhyChooseCard item={whyChooseData[5]} index={5} />
          </div>

          {/* Mobile & Tablet */}
          <div className="lg:hidden space-y-12">
            <ScrollReveal>
              <div className="relative group mx-auto max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <img 
                  src="/images/team-collaboration.jpg" 
                  alt="GreaterTechHub Team"
                  className="w-full h-auto rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-3xl border border-border"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
                  <p className="text-white font-bold text-lg">Your Success. Our Mission.</p>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseData.map((item, i) => (
                <WhyChooseCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <ClientTestimonials />

     {/* CTA Section with Fixed Background Image */}
{/* CTA Section - Refer & Earn with Blurred Fixed Background */}
<section className="py-32 relative overflow-hidden">
  {/* Fixed Background with Blur */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed -z-10"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
    }}
  />
  
  {/* Blur + Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm -z-10" />

  <ParallaxSection>
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <ScrollReveal>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-xl text-balance">
          Refer a Friend, Earn <span className="text-accent">₹10,000</span>!
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md leading-relaxed">
          Share GreaterTechHub with your network. When they become a client, <br />
          <span className="font-bold text-accent">you both get ₹10,000 credit</span> on your next project!
        </p>

        {/* Shareable Referral Link */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-xl px-6 py-3 text-white font-mono text-sm sm:text-base">
            https://greatertechhub.com/ref/you
          </div>
          <button className="px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/90 transition-all font-bold text-lg hover:scale-105 transform shadow-xl hover:shadow-2xl flex items-center gap-2">
            Copy Link & Share
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-white/70 mt-6">
          *T&C Apply | Valid for projects above ₹1,00,000
        </p>
      </ScrollReveal>
    </div>
  </ParallaxSection>
</section>
      <Footer />
    </main>
  );
}