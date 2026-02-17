import { Bot, Code, Smartphone, Cloud, Palette, Database, Cog, BrainCircuit, Workflow, BarChart3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const services = [
  { icon: Bot, title: "AI Agents Development", desc: "Custom intelligent agents that automate complex business processes." },
  { icon: Workflow, title: "AI Workflow Automation", desc: "Streamline operations with end-to-end AI-powered workflows." },
  { icon: BrainCircuit, title: "Chatbot Solutions", desc: "Conversational AI chatbots for customer support and engagement." },
  { icon: Code, title: "Full Stack Web Dev", desc: "Scalable web applications with modern frameworks and architectures." },
  { icon: Smartphone, title: "Mobile App Dev", desc: "Native and cross-platform apps for iOS and Android." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Infrastructure automation, CI/CD, and cloud-native solutions." },
  { icon: Cog, title: "Custom Software", desc: "Tailored software solutions designed for your unique business needs." },
  { icon: Palette, title: "UI/UX Design", desc: "Intuitive, beautiful interfaces that users love." },
  { icon: BarChart3, title: "Data Analytics & ML", desc: "Transform raw data into actionable business intelligence." },
  { icon: Database, title: "Automation & Integration", desc: "Connect systems and automate processes across your tech stack." },
];

const ServicesShowcase = () => {
  return (
    <section className="section-padding bg-background particle-bg">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Do</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end technology solutions powering businesses across industries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.05}>
              <div className="glass-card gradient-border p-6 h-full group hover:bg-card/80 transition-all duration-300 cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:neon-glow transition-shadow duration-300">
                  <service.icon size={25} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2 text-lg">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesShowcase;
