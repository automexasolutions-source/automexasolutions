import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Bot, Code, Smartphone, Cloud, Palette, Database, Cog, BrainCircuit, Workflow, BarChart3 } from "lucide-react";

const categories = [
  {
    title: "AI & Automation",
    services: [
      { icon: Bot, name: "AI Agents Development", desc: "Build intelligent agents that autonomously handle complex tasks, from customer interactions to data processing pipelines." },
      { icon: Workflow, name: "AI Workflow Automation", desc: "Design and implement end-to-end automated workflows powered by AI, reducing manual effort by up to 80%." },
      { icon: BrainCircuit, name: "Chatbot Solutions", desc: "Deploy conversational AI chatbots with NLP capabilities for customer support, sales, and internal operations." },
    ],
  },
  {
    title: "Development",
    services: [
      { icon: Code, name: "Full Stack Web Development", desc: "Modern web applications built with React, Next.js, Node.js, and cloud-native architectures." },
      { icon: Smartphone, name: "Mobile App Development", desc: "Native and cross-platform mobile apps for iOS and Android using Flutter and React Native." },
      { icon: Cog, name: "Custom Software Development", desc: "Bespoke software solutions tailored to your unique business requirements and workflows." },
    ],
  },
  {
    title: "Infrastructure & Design",
    services: [
      { icon: Cloud, name: "Cloud & DevOps", desc: "AWS, GCP, and Azure infrastructure with CI/CD pipelines, containerization, and serverless architectures." },
      { icon: Palette, name: "UI/UX Design", desc: "User-centered design with prototyping, usability testing, and pixel-perfect implementation." },
      { icon: BarChart3, name: "Data Analytics & ML", desc: "Machine learning models, data pipelines, and business intelligence dashboards." },
      { icon: Database, name: "Automation & Integration", desc: "System integration, API development, and process automation across your technology stack." },
    ],
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Automexa Solutions Services",
  itemListElement: categories.flatMap((cat, ci) =>
    cat.services.map((s, si) => ({
      "@type": "ListItem",
      position: ci * 10 + si + 1,
      item: { "@type": "Service", name: s.name, description: s.desc, provider: { "@type": "Organization", name: "Automexa Solutions" } },
    }))
  ),
};

const Services = () => {
  return (
    <Layout>
      <SEOHead
        title="Best AI Development Services USA | Web & Mobile App Development | Automexa Solutions"
        description="Automexa Solutions offers BEST AI development services in USA: AI agents, chatbot development, web development, mobile app development, cloud & DevOps, UI/UX design, and custom software solutions. Hire expert developers now!"
        keywords="AI development services USA, best web development services, mobile app development services, chatbot development services, cloud DevOps services, UI UX design services, custom software development services, IT solutions services USA, hire AI developer, hire React developer, hire Python developer, AI automation services, ChatGPT integration services, workflow automation, calling agents development"
        jsonLd={servicesJsonLd}
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Services</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                What We <span className="gradient-text">Offer</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Comprehensive technology solutions from concept to deployment, tailored for businesses of all sizes.
              </p>
            </div>
          </ScrollReveal>

          {categories.map((cat) => (
            <div key={cat.title} className="mb-16">
              <ScrollReveal>
                <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
                  {cat.title}
                </h2>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((s, i) => (
                  <ScrollReveal key={s.name} delay={i * 0.1}>
                    <div className="glass-card gradient-border p-8 h-full group hover:bg-card/80 transition-all duration-300">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:neon-glow transition-shadow duration-300">
                        <s.icon size={24} className="text-primary" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-3">{s.name}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default Services;
