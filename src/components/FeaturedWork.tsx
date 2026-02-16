import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const featured = [
  {
    title: "AI-Powered Customer Support Platform",
    category: "AI Agents",
    desc: "Built an autonomous AI agent handling 50,000+ customer interactions daily for a Fortune 500 company. The system reduced support costs by 70% while maintaining a 96% customer satisfaction score.",
    metrics: ["50K+ daily queries", "70% cost reduction", "96% CSAT"],
  },
  {
    title: "Enterprise E-Commerce Ecosystem",
    category: "Web Development",
    desc: "Developed a headless commerce platform processing $200M+ in annual transactions. Features include AI-powered search, dynamic pricing, and real-time inventory sync across 500+ stores.",
    metrics: ["$200M+ transactions", "500+ stores", "99.99% uptime"],
  },
  {
    title: "Smart Logistics Fleet Management",
    category: "Mobile & IoT",
    desc: "Created a cross-platform mobile app managing 10,000+ vehicles across 3 continents. AI-powered route optimization saved $4.5M annually in fuel costs.",
    metrics: ["10K+ vehicles", "$4.5M saved", "3 continents"],
  },
];

const FeaturedWork = () => {
  return (
    <section className="section-padding" id="featured-work">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Case Studies</span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 text-foreground">
                Featured <span className="gradient-text">Work</span>
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div className="space-y-6">
          {featured.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="glass-card gradient-border p-8 md:p-10 group hover:bg-card/80 transition-all duration-300">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <span className="text-primary text-xs font-semibold uppercase tracking-wider">{f.category}</span>
                    <h3 className="font-display font-bold text-xl md:text-2xl text-foreground mt-2 mb-4">{f.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {f.metrics.map((m) => (
                        <span key={m} className="px-4 py-2 rounded-lg text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
