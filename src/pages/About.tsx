import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import StatsCounter from "@/components/StatsCounter";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Target, Eye, Heart } from "lucide-react";

const milestones = [
  { year: "2020", title: "Founded", desc: "Automexa Solutions was established with a vision for AI-driven innovation." },
  { year: "2021", title: "First AI Agent", desc: "Deployed our first intelligent automation agent for enterprise clients." },
  { year: "2022", title: "Global Expansion", desc: "Expanded operations to serve clients across 10+ countries." },
  { year: "2023", title: "50+ AI Models", desc: "Reached a milestone of deploying 50+ custom AI models in production." },
  { year: "2024", title: "200+ Projects", desc: "Completed 200+ projects spanning web, mobile, and AI solutions." },
  { year: "2025", title: "Industry Leader", desc: "Recognized as an industry leader in AI automation and software development." },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower businesses with intelligent software solutions that drive growth, efficiency, and innovation through cutting-edge AI and technology." },
  { icon: Eye, title: "Our Vision", desc: "To be the world's most trusted partner for AI-driven digital transformation, delivering solutions that redefine industries." },
  { icon: Heart, title: "Our Values", desc: "Innovation, integrity, collaboration, and relentless pursuit of excellence in everything we build and deliver." },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Automexa Solutions | AI & Software Development Company"
        description="Learn about Automexa Solutions — a global IT solutions and AI development company with 250+ projects, 120+ clients, and operations across 15+ countries. Our mission, vision, and journey."
        keywords="about Automexa Solutions, AI development company, IT solutions company, software development team, company history, tech company"
      />
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container mx-auto text-center">
          <ScrollReveal>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
              Who We <span className="gradient-text">Are</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A global team of engineers, designers, and AI specialists building the next generation of intelligent software solutions for businesses worldwide.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="section-padding pt-0">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="glass-card gradient-border p-8 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-3">{v.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="section-padding">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16 text-foreground">
              Our <span className="gradient-text">Journey</span>
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan to-neon-purple" />
            {milestones.map((m, i) => (
              <ScrollReveal key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:text-${i % 2 === 0 ? "right" : "left"}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5 neon-glow" />
                  <div className="flex-1 pl-10 md:pl-0">
                    <span className="text-primary font-display font-bold text-lg">{m.year}</span>
                    <h3 className="font-display font-semibold text-foreground mt-1">{m.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{m.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section> */}

      <StatsCounter />
      <CTASection />
    </Layout>
  );
};

export default About;
