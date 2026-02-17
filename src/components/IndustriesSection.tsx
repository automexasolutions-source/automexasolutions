import { Building2, ShoppingCart, HeartPulse, GraduationCap, Landmark, Truck, Factory, Plane } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const industries = [
  { icon: Building2, name: "Real Estate & PropTech", desc: "Smart property management systems, AI-powered valuations, and virtual tour platforms." },
  { icon: ShoppingCart, name: "E-Commerce & Retail", desc: "Custom storefronts, inventory automation, AI recommendations, and omnichannel solutions." },
  { icon: HeartPulse, name: "Healthcare & HealthTech", desc: "HIPAA-compliant telemedicine apps, patient portals, and clinical decision support systems." },
  { icon: GraduationCap, name: "Education & EdTech", desc: "Learning management systems, AI tutoring bots, and interactive course platforms." },
  { icon: Landmark, name: "Finance & FinTech", desc: "Trading platforms, payment gateways, fraud detection, and regulatory compliance tools." },
  { icon: Truck, name: "Logistics & Supply Chain", desc: "Fleet management, route optimization, warehouse automation, and real-time tracking." },
  { icon: Factory, name: "Manufacturing & IoT", desc: "Smart factory solutions, predictive maintenance, IoT dashboards, and quality control AI." },
  { icon: Plane, name: "Travel & Hospitality", desc: "Booking engines, AI concierge services, dynamic pricing, and guest experience platforms." },
];

const IndustriesSection = () => {
  return (
    <section className="section-padding" id="industries">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Industries</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              From startups to Fortune 500 companies, we deliver tailored solutions across every major sector.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <ScrollReveal key={ind.name} delay={i * 0.06}>
              <div className="glass-card gradient-border p-6 h-full group hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-shadow duration-500">
                  <ind.icon size={22} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{ind.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{ind.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
