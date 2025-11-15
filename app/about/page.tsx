import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Rocket, Zap, Users, Trophy, Globe, Award, CheckCircle, Lightbulb } from "lucide-react"

export const metadata = {
  title: "About GreaterTechHub | India’s Fastest IT Startup (2024)",
  description: "Founded in 2024. Startup India, MSME, Skill India certified. 2025 National Award Winner. MVP in 7 days.",
}

export const dynamic = "force-static"

export default function About() {
  const stats = [
    { icon: Rocket, label: "Founded", value: "2024" },
    { icon: Users, label: "Team Size", value: "50+" },
    { icon: Zap, label: "Avg. Delivery", value: "7 Days" },
    { icon: Trophy, label: "Awards", value: "3 in 2025" },
  ]

  const certifications = [
    "Startup India Certified",
    "Skill India Partner",
    "MSME Registered",
    "Import-Export Code (IEC)",
    "GST Compliant",
    "ISO 9001:2015 Ready",
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="/images/startup-office.jpg" alt="Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-100 to-blue-500  bg-clip-text text-transparent">
            GreaterTechHub
          </h1>
          <p className="text-xl md:text-2xl mb-2">India's Fastest IT Startup</p>
          <p className="text-lg opacity-90">Founded in 2024 • Award-Winning in 2025</p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {certifications.map((cert, i) => (
              <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <div key={i} className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Fast Service */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Zap className="w-16 h-16 text-orange-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Lightning-Fast Delivery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We deliver <span className="font-bold text-orange-600">MVP in 7 days</span>, full projects in <span className="font-bold text-orange-600">30 days</span>. 
            No delays. No excuses. Just results.
          </p>
        </div>
      </section>

      {/* YouTube Video */}
     {/* YouTube Video - 100% RESPONSIVE */}
<section className="py-16 bg-white">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-8">GreaterTechHub Services</h2>
    
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        src="https://www.youtube.com/embed/3pbhM-LRYyc?si=PazwIkjKkKV4Yjig"
        title="GreaterTechHub Startup Journey"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        loading="lazy"
      ></iframe>
    </div>

    <p className="text-center text-sm text-muted-foreground mt-4 italic">
      All Services Explained in 1 Minutes
    </p>
  </div>
</section>

      {/* Certifications & Awards */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Certified & Awarded</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-500" /> Government Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
                <Trophy className="w-6 h-6 text-yellow-500" /> 2025 Awards
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: "Fastest Growing IT Startup", by: "Ministry of Electronics & IT" },
                  { name: "Best Innovation in AI", by: "Tech India Summit 2025" },
                  { name: "Excellence in Digital Services", by: "MSME Chamber of Commerce" },
                ].map((award, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl shadow-md flex items-center gap-3">
                    <Award className="w-10 h-10 text-yellow-500" />
                    <div>
                      <p className="font-semibold">{award.name}</p>
                      <p className="text-sm text-muted-foreground">{award.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - FULL CONTENT */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Introduction */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
              Our Startup Story
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From a <span className="font-bold text-primary">small garage in 2024</span> to a <span className="font-bold text-accent">national award-winning IT startup in 2025</span> — 
              we didn’t just grow, we <span className="underline decoration-wavy decoration-orange-500">redefined speed</span>.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/50 dark:to-cyan-950/50 border border-blue-200 dark:border-blue-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To <span className="font-bold text-blue-600">deliver enterprise-grade IT solutions in startup speed</span> — 
                helping Indian businesses go global with <span className="underline">MVP in 7 days</span> and full platforms in <span className="underline">30 days</span>.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border border-purple-200 dark:border-purple-800 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become <span className="font-bold text-purple-600">India’s #1 IT export brand by 2030</span> — 
                powering <span className="underline">10,000+ startups</span> with AI, cloud, and automation from Tier-2 & Tier-3 cities.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12">Our Journey (2024 → 2025)</h3>
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-transparent hidden md:block"></div>

              <div className="space-y-12">
                {[
                  { month: "Jan 2024", title: "Idea Born", desc: "3 friends in a garage. ₹50,000 budget. Dream: Fast IT for Indian startups.", icon: "lightbulb", color: "from-yellow-400 to-orange-400" },
                  { month: "Feb 2024", title: "First Client", desc: "Built a CRM for a local startup. Delivered in 5 days. Word spread.", icon: "zap", color: "from-orange-400 to-red-400" },
                  { month: "Apr 2024", title: "Startup India Certified", desc: "Officially recognized. Got IEC, MSME, GST. Applied for Skill India partnership.", icon: "award", color: "from-green-400 to-emerald-400" },
                  { month: "Jul 2024", title: "50+ Team", desc: "Hired from IITs, NITs, and self-taught coders. Remote-first culture.", icon: "users", color: "from-blue-400 to-cyan-400" },
                  { month: "Oct 2024", title: "100 Projects", desc: "Delivered websites, apps, AI bots. 98% on-time. Global Clients.", icon: "globe", color: "from-indigo-400 to-purple-400" },
                  { month: "Jan 2025", title: "Award", desc: "Won 'Fastest Growing IT Startup' by Bhati organisation groups.", icon: "trophy", color: "from-pink-400 to-rose-400" },
                  { month: "Mar 2025", title: "Launch", desc: "First export revenue: $50K in 30 days.", icon: "rocket", color: "from-purple-400 to-pink-400" },
                ].map((milestone, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} p-3 shadow-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      {milestone.icon === "lightbulb" && <LightbulbIcon />}
                      {milestone.icon === "zap" && <ZapIcon />}
                      {milestone.icon === "award" && <AwardIcon />}
                      {milestone.icon === "users" && <UsersIcon />}
                      {milestone.icon === "globe" && <GlobeIcon />}
                      {milestone.icon === "trophy" && <TrophyIcon />}
                      {milestone.icon === "rocket" && <RocketIcon />}
                    </div>

                    <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-md border border-border hover:shadow-xl transition-all duration-300">
                      <p className="text-sm font-bold text-primary mb-1">{milestone.month}</p>
                      <h4 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-xl hover:scale-105 transition-transform font-bold text-lg">
              <Zap className="w-6 h-6" />
              Need it fast? We deliver in 7 days.
            </div>
          </div>
        </div>
      </section>

      {/* Team Image */}
      {/* <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Young & Dynamic Team</h2>
          <img 
            src="/images/team-photo.jpg" 
            alt="GreaterTechHub Team" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
          />
          <p className="mt-6 text-lg text-muted-foreground">
            Average age: <span className="font-bold">26 years</span> — Passionate, skilled, and driven by results.
          </p>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Grow 10x Faster?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join 100+ startups who trust us for speed, quality, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-bold">
              Get Free Consultation
            </a>
            <a href="/careers" className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors font-bold">
              Join Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

/* Inline SVG Icons */
const LightbulbIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H9v-1c0-2.21 1.79-4 4-4h2c2.21 0 4 1.79 4 4v1zm-6-5a4 4 0 00-4 4v1h3m10-1a4 4 0 00-4-4v-1h3z" />
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0110.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V19a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TrophyIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);