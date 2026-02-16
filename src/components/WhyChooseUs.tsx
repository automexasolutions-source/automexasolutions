import { Shield, Zap, Users, Award, Clock, HeadphonesIcon } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const reasons = [
  { icon: Shield, title: "Enterprise-Grade Security", desc: "SOC2-compliant infrastructure with end-to-end encryption, secure CI/CD pipelines, and regular penetration testing across all deployments." },
  { icon: Zap, title: "Rapid Delivery", desc: "Agile methodology with 2-week sprint cycles. We deliver MVPs in 4-6 weeks and production-ready solutions in 8-12 weeks." },
  { icon: Users, title: "Dedicated Expert Teams", desc: "Senior engineers with 8+ years average experience. Each project gets a dedicated architect, developer team, and QA specialist." },
  { icon: Award, title: "Proven Track Record", desc: "250+ successful projects across 15 countries. 98% client retention rate with an average 4.9/5 satisfaction score." },
  { icon: Clock, title: "24/7 Support & Maintenance", desc: "Round-the-clock monitoring and support with guaranteed SLAs. Proactive maintenance to ensure 99.9% uptime." },
  { icon: HeadphonesIcon, title: "Transparent Communication", desc: "Weekly progress reports, daily standups, and real-time project dashboards. You're always in the loop." },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-card/30" id="why-choose-us">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Automexa</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              Why Businesses <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We combine deep technical expertise with business acumen to deliver solutions that create real impact.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <ScrollReveal key={r.title} delay={i * 0.08}>
              <div className="glass-card gradient-border p-8 h-full group hover:bg-card/80 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow transition-shadow duration-500">
                  <r.icon size={26} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
