import { ScrollReveal } from "@/components/scroll-reveal";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonials = [
  {
    quote:
      "GreaterTechHub transformed our digital presence. Their team delivered exceptional results on time and within budget.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    rating: 5,
  },
  {
    quote:
      "Outstanding service and technical expertise. They understood our needs and delivered solutions that exceeded expectations.",
    author: "Michael Chen",
    role: "CTO",
    company: "Digital Innovations",
    rating: 5,
  },
  {
    quote: "Professional, reliable, and innovative. GreaterTechHub is our go-to partner for all technology needs.",
    author: "Emma Williams",
    role: "Founder",
    company: "Growth Ventures",
    rating: 5,
  },
];

export function ClientTestimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Client Testimonials</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working with GreaterTechHub.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}