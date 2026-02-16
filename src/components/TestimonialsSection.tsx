import { Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, MedFlow Health",
    text: "Automexa built our entire telemedicine platform from scratch. The AI-powered triage system they developed has reduced patient wait times by 60%. Their team's technical depth is unmatched.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "VP Engineering, TradePeak",
    text: "We needed an AI trading assistant that could process 10,000+ signals per second. Automexa delivered it in 10 weeks with 99.99% uptime. They've been our go-to partner for 3 years now.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Founder, EduSpark",
    text: "The learning management system Automexa developed handles 500K+ students daily. Their AI tutoring bot increased course completion rates by 45%. Truly transformative work.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "COO, LogiTrack Systems",
    text: "Our fleet management app built by Automexa saved us $2.3M in the first year through route optimization alone. The real-time tracking and predictive maintenance features are game-changers.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Director of Digital, RetailNova",
    text: "Automexa's e-commerce platform with AI-powered recommendations increased our conversion rate by 35%. The team handled Black Friday traffic spikes without a single hiccup.",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "CEO, CloudVault Security",
    text: "The cloud migration and DevOps automation Automexa implemented reduced our infrastructure costs by 40% while improving deployment speed 10x. Exceptional technical expertise.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              What Our Clients <span className="gradient-text">Say</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Don't take our word for it — hear from the businesses we've helped transform.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <div className="glass-card gradient-border p-8 h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={16} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
