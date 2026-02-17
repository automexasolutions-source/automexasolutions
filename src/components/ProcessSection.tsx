import { MessageSquare, Search, PenTool, Code2, TestTube, Rocket } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { icon: MessageSquare, step: "01", title: "Discovery & Consultation", desc: "We start with a deep dive into your business requirements, goals, and challenges. Our team conducts stakeholder interviews, market research, and technical feasibility assessments." },
  { icon: Search, step: "02", title: "Strategy & Planning", desc: "We create a comprehensive project roadmap with defined milestones, technology stack selection, architecture design, and resource allocation." },
  { icon: PenTool, step: "03", title: "UI/UX Design", desc: "Our designers craft intuitive wireframes, interactive prototypes, and pixel-perfect designs validated through usability testing and A/B experiments." },
  { icon: Code2, step: "04", title: "Agile Development", desc: "Using 2-week sprint cycles, our engineers build your solution with clean code, automated testing, continuous integration, and regular client reviews." },
  { icon: TestTube, step: "05", title: "Quality Assurance", desc: "Rigorous testing including unit, integration, performance, security, and UAT to ensure a flawless product that meets enterprise standards." },
  { icon: Rocket, step: "06", title: "Launch & Support", desc: "Seamless deployment to production with monitoring, performance optimization, and ongoing 24/7 support with guaranteed SLAs." },
];

const ProcessSection = () => {
  return (
    <section className="section-padding bg-card/30" id="process">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Process</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              How We <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A proven 6-step methodology that ensures on-time, on-budget delivery with exceptional quality.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.1}>
              <div className="glass-card gradient-border p-8 h-full group hover:bg-card/80 transition-all duration-300 relative overflow-hidden">
                <span className="absolute top-4 right-4 font-display text-5xl font-bold text-primary/50 group-hover:text-primary/10 transition-colors duration-500">
                  {s.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow transition-shadow duration-500">
                  <s.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
