import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "AI Customer Support Agent", category: "AI", desc: "Autonomous support agent handling 10K+ queries daily with 95% resolution rate.", tech: ["Python", "FastAPI", "OpenAI"] },
  { title: "E-Commerce Platform", category: "Web", desc: "Full-stack marketplace with real-time inventory, payments, and analytics.", tech: ["React", "Node.js", "PostgreSQL"] },
  { title: "HealthTech Mobile App", category: "Mobile", desc: "iOS & Android app for remote patient monitoring and telemedicine.", tech: ["Flutter", "Firebase", "ML Kit"] },
  { title: "Cloud Migration Suite", category: "Cloud", desc: "Automated cloud migration toolkit moving 50+ enterprise workloads to AWS.", tech: ["AWS", "Terraform", "Docker"] },
  { title: "AI Document Processor", category: "AI", desc: "Intelligent document extraction and classification system for legal firms.", tech: ["Python", "GPT-4", "OCR"] },
  { title: "FinTech Dashboard", category: "Web", desc: "Real-time financial analytics dashboard with ML-powered predictions.", tech: ["Next.js", "D3.js", "Python"] },
  { title: "Logistics Tracking App", category: "Mobile", desc: "Real-time fleet tracking with route optimization and driver management.", tech: ["React Native", "Node.js", "Maps API"] },
  { title: "AI Sales Assistant", category: "AI", desc: "Conversational AI that qualifies leads and schedules demos autonomously.", tech: ["LangChain", "FastAPI", "CRM API"] },
  { title: "SaaS Analytics Platform", category: "Web", desc: "Multi-tenant analytics platform serving 500+ business clients.", tech: ["React", "GraphQL", "AWS"] },
  { title: "Smart Home IoT App", category: "Mobile", desc: "Mobile app controlling 100+ IoT devices with voice commands and automation.", tech: ["Flutter", "MQTT", "Firebase"] },
  { title: "Kubernetes Orchestrator", category: "Cloud", desc: "Custom K8s management platform with auto-scaling and monitoring.", tech: ["Kubernetes", "Go", "Prometheus"] },
  { title: "AI Content Generator", category: "AI", desc: "Multi-modal content generation platform for marketing teams.", tech: ["Python", "Stable Diffusion", "GPT-4"] },
];

const categories = ["All", "AI", "Web", "Mobile", "Cloud"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Layout>
      <SEOHead
        title="Portfolio | Automexa Solutions - AI, Web & Mobile Projects"
        description="Explore Automexa Solutions' portfolio of 250+ successful projects across AI, web development, mobile apps, and cloud solutions. See our work in action."
        keywords="Automexa portfolio, AI projects, web development projects, mobile app portfolio, software development case studies, IT solutions portfolio"
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Portfolio</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Featured <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                A selection of projects showcasing our expertise across AI, web, mobile, and cloud solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex justify-center gap-2 mb-12 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    active === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.05}>
                <div className="glass-card gradient-border p-6 h-full group hover:bg-card/80 transition-all duration-300 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {p.category}
                    </span>
                    <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs bg-muted text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
