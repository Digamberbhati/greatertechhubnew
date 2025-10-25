import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  rating: number
}

export function TestimonialCard({ quote, author, role, company, rating }: TestimonialCardProps) {
  return (
    <div className="p-6 bg-secondary rounded-lg border border-border">
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-4 leading-relaxed italic">"{quote}"</p>

      {/* Author */}
      <div>
        <p className="font-semibold text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">
          {role} at {company}
        </p>
      </div>
    </div>
  )
}
