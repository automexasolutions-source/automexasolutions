import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { Shield, Zap, Users, Award, Clock, HeadphonesIcon, Target, TrendingUp, Globe, Lock, Cpu, BarChart3 } from "lucide-react";

const advantages = [
  { icon: Shield, title: "Enterprise-Grade Security", desc: "SOC2-compliant infrastructure with end-to-end encryption, regular penetration testing, and GDPR/HIPAA compliance across all our deployments." },
  { icon: Zap, title: "Rapid Time-to-Market", desc: "Agile methodology with 2-week sprints delivers MVPs in 4-6 weeks. Our pre-built component libraries and CI/CD pipelines accelerate every project." },
  { icon: Users, title: "Senior Engineering Teams", desc: "Our engineers average 8+ years of experience. Each project gets a dedicated architect, senior developers, QA specialists, and a project manager." },
  { icon: Award, title: "Proven Track Record", desc: "250+ successful projects, 120+ happy clients, 98% retention rate, and a 4.9/5 average satisfaction score across all engagements." },
  { icon: Clock, title: "24/7 Global Support", desc: "Round-the-clock monitoring and support from teams across 3 time zones. SLA-backed response times as fast as 15 minutes for critical issues." },
  { icon: HeadphonesIcon, title: "Transparent Communication", desc: "Weekly reports, daily standups, real-time dashboards, and a dedicated PM. You always know exactly where your project stands." },
  { icon: Target, title: "Business-First Approach", desc: "We don't just build software — we solve business problems. Every technical decision is guided by ROI, scalability, and long-term value." },
  { icon: TrendingUp, title: "Scalable Architecture", desc: "We design systems that grow with your business. From handling 100 users to 10 million, our architectures scale seamlessly." },
  { icon: Globe, title: "Global Delivery Capability", desc: "Teams across North America, Europe, and Asia enable round-the-clock development, local market expertise, and timezone-friendly collaboration." },
  { icon: Lock, title: "IP Protection & NDAs", desc: "Full IP transfer, strict NDAs, and confidentiality agreements. Your code, data, and ideas are protected by legally binding contracts." },
  { icon: Cpu, title: "AI-First Innovation", desc: "We integrate AI into every solution — from intelligent automation to predictive analytics — giving you a competitive edge that compounds over time." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Every project includes analytics, monitoring, and reporting. We measure what matters and optimize continuously based on real data." },
];

const WhyChooseUsPage = () => {
  return (
    <Layout>
      <SEOHead
        title="Why Choose Automexa Solutions | Leading IT Solutions & AI Company"
        description="Discover why 120+ businesses trust Automexa Solutions for AI development, web & mobile apps, and custom software. Enterprise security, rapid delivery, 24/7 support."
        keywords="why choose Automexa, best IT solutions company, AI development company, enterprise software development, trusted technology partner"
      />

      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Why Automexa</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Why Leading Businesses <span className="gradient-text">Choose Us</span>
              </h1>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
                Automexa Solutions combines deep technical expertise, AI innovation, and business acumen to deliver solutions that create measurable impact. Here's what sets us apart.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((a, i) => (
              <ScrollReveal key={a.title} delay={i * 0.06}>
                <div className="glass-card gradient-border p-8 h-full group hover:bg-card/80 transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow transition-shadow duration-500">
                    <a.icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground mb-3">{a.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <StatsCounter />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default WhyChooseUsPage;
