import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TechCarousel from "@/components/TechCarousel";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";

const techCategories = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"] },
  { name: "Backend", items: ["Node.js", "Express.js", "Python", "FastAPI", "GraphQL"] },
  { name: "AI & ML", items: ["OpenAI", "LangChain", "TensorFlow", "PyTorch", "Hugging Face"] },
  { name: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Firebase", "Terraform"] },
  { name: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Supabase"] },
];

const Technologies = () => {
  return (
    <Layout>
      <SEOHead
        title="Technologies | Automexa Solutions - Tech Stack & Tools"
        description="Explore Automexa Solutions' technology stack: React, Node.js, Python, Flutter, AWS, Docker, Kubernetes, OpenAI, LangChain, and more. Enterprise-grade tools for every project."
        keywords="technology stack, React development, Node.js, Python, Flutter, AWS, Docker, Kubernetes, AI frameworks, web development technologies"
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Technologies</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Our Tech <span className="gradient-text">Arsenal</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                We leverage cutting-edge technologies to build robust, scalable, and future-proof solutions for businesses worldwide.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {techCategories.map((cat, i) => (
              <ScrollReveal key={cat.name} delay={i * 0.1}>
                <div className="glass-card gradient-border p-8 h-full">
                  <h3 className="font-display font-bold text-lg text-foreground mb-5">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/5 text-primary border border-primary/20 hover:bg-primary/10 transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <TechCarousel />
      <CTASection />
    </Layout>
  );
};

export default Technologies;
