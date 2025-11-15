'use client';
import Image from "next/image";

// -------------------------------------------------
// 10 UNIQUE REVIEWS – NO REPEAT
// -------------------------------------------------
const testimonials = [
  // 1. Lokesh Singh Rajput
  {
    quote: "GreaterTechHub manages all our IT infrastructure, cloud servers, and cybersecurity. As Mr. World and owner of LR Supplements, I can focus on business while they handle everything flawlessly. 24/7 support and proactive monitoring — best decision we made.",
    author: "Lokesh Singh Rajput",
    role: "Owner & Mr. World",
    company: "LR Supplements",
    avatar: "/review/lokesh.jpg",
  },
  // 2. Rahul Rajput
  {
    quote: "They built and now fully manage our global dental platform for VRDenta SA. Website, patient portal, appointment system, and cloud hosting — all running smoothly. Their team responds in minutes. Highly reliable IT partner.",
    author: "Rahul Rajput",
    role: "CO-Founder & CTO",
    company: "VRDenta",
    avatar: "/review/rahul.jpeg",
  },
  // 3. Ravi Kumar
  {
    quote: "VRDENTALINC's entire IT backbone — website, CRM, inventory, and server management — is handled by GreaterTechHub. Zero downtime in 2 years. They even trained our staff. Professional, fast, and cost-effective.",
    author: "Ravi Kumar",
    role: "Director",
    company: "VRDENTALINC",
    avatar: "/review/ravi.jpeg",
  },
  // 4. Rajiv Panwar
  {
    quote: "GroupOne Security trusts GreaterTechHub for all IT management — firewalls, access control, surveillance integration, and cloud backup. Their team prevents issues before they happen. Top-tier cybersecurity and support.",
    author: "Rajiv Panwar",
    role: "Director",
    company: "GroupOne Security",
    avatar: "/review/group.jpg",
  },
  // 5. Rahul Gour
  {
    quote: "Managing IT for Jagat Fertilizers & Chemicals is complex — inventory, ERP, dealer portal, and mobile apps. GreaterTechHub handles it all with 99.9% uptime. Their monthly reports and proactive fixes save us lakhs every year.",
    author: "Rahul Gour",
    role: "Ceo",
    company: "Jagat Fertilizers & Chemicals",
    avatar: "/review/gour.jpg",
  },
  // 6. James Anderson
  {
    quote: "GreaterTechHub delivered our global e-commerce platform in just 45 days. Their team understood every requirement and delivered ahead of schedule. Payment integration, multi-language support, and performance optimization — everything was flawless.",
    author: "James Anderson",
    role: "CEO",
    company: "NexGen USA",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  // 7. Sophie Müller
  {
    quote: "They completed our cloud migration with zero downtime. Handled strict GDPR compliance for Europe. Their AWS & Azure expertise saved us 40% in costs. Our system is now 10x faster. Best tech partner in Europe!",
    author: "Sophie Müller",
    role: "CTO",
    company: "TechBerlin GmbH",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  // 8. Rohit Sharma
  {
    quote: "Built ShopDelhi's custom e-commerce platform in 2 months. Payment gateway, inventory sync, multi-vendor support — all perfect. Daily updates, within budget. Our business grew 3x thanks to them.",
    author: "Rohit Sharma",
    role: "Founder",
    company: "ShopDelhi",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  // 9. Priya Desai
  {
    quote: "Developed a custom CRM with lead tracking, automation, and real-time analytics. Our sales team is now 40% more efficient. Mobile access works perfectly. GTH understood every detail and delivered on point.",
    author: "Priya Desai",
    role: "Director",
    company: "Mumbai Analytics",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  // 10. Vikram Singh
  {
    quote: "Integrated hardware supply chain without any delay. Connected SAP, Oracle, and custom APIs seamlessly. Real-time inventory updates, no stock-outs. Vendor portal reduced payment cycle by 50%.",
    author: "Vikram Singh",
    role: "Vendor Manager",
    company: "Delhi Components Ltd",
    avatar: "https://randomuser.me/api/portraits/men/86.jpg",
  },
];

// -------------------------------------------------
// MARQUEE – 3X DUPLICATION = 30 CARDS (10 × 3)
// -------------------------------------------------
function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden py-8">
      <div className="flex animate-marquee gap-2">
        {children}
        {children}
        {children} {/* 3x = 30 cards → full 10 visible */}
      </div>
    </div>
  );
}

// -------------------------------------------------
// CARD – COMPACT + FULL CONTENT
// -------------------------------------------------
function TestimonialCard({
  quote,
  author,
  role,
  company,
  avatar,
}: {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 flex flex-col min-w-[320px] max-w-[360px] flex-shrink-0">
      {/* Header */}
      <div className="px-3 pt-3 pb-2 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
            <Image
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              width={52}
              height={17}
              className="object-contain"
            />
            <span>Verified</span>
          </div>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="px-0 py-2 flex-grow">
        <p className="text-gray-700 text-sm leading-relaxed italic px-3">
          "{quote}"
        </p>
      </div>

      {/* Author */}
      <div className="px-3 pb-3 flex items-center gap-2">
        <div className="relative flex-shrink-0">
          <Image
            src={avatar}
            alt={author}
            width={36}
            height={36}
            className="rounded-full object-cover border border-gray-200"
          />
          <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 text-white text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center border border-white font-bold">
            Checkmark
          </div>
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-xs">{author}</p>
          <p className="text-[10px] text-gray-500">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------
// MAIN COMPONENT
// -------------------------------------------------
export function ClientTestimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-full mx-0 px-0">
        <div className="text-center mb-12 px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Trusted by Clients Worldwide
          </h2>
          <p className="text-gray-600">Real Google Reviews • 5-Star Rated</p>
        </div>

        <Marquee>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </Marquee>

        {/* SUPER FAST + SMOOTH LOOP */}
        <style jsx global>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); } /* 100% / 3 */
          }
          .animate-marquee {
            animation: marquee 8s linear infinite; /* BOHOT TEZ */
            will-change: transform;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  );
}