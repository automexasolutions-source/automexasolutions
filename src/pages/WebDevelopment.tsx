import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Code, Smartphone, Database, Cloud, Palette, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const webServices = [
  {
    icon: Code,
    title: "Frontend Development",
    desc: "React, Next.js, Vue.js, and Angular development for responsive, interactive user interfaces.",
    features: ["React & Next.js", "Vue.js Development", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Database,
    title: "Backend Development",
    desc: "Robust server-side solutions with Node.js, Python, and modern API architectures.",
    features: ["Node.js & Express", "Python & Django", "RESTful APIs", "GraphQL"],
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    desc: "Scalable cloud solutions on AWS, Azure, and Google Cloud Platform.",
    features: ["AWS Solutions", "Azure Development", "Google Cloud", "Serverless Architecture"],
  },
  {
    icon: Palette,
    title: "E-Commerce Solutions",
    desc: "Custom online stores and marketplace platforms with secure payment integration.",
    features: ["Shopify Development", "WooCommerce", "Custom E-Commerce", "Payment Gateway"],
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "GraphQL", category: "Backend" },
];

const webDevJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Development Services",
  provider: {
    "@type": "Organization",
    name: "Automexa Solutions",
    url: "https://automexasolutions.online",
  },
  description: "Professional web development services in USA. Custom web applications, e-commerce solutions, and enterprise software development by expert developers.",
  areaServed: "USA",
  serviceType: "Web Development",
};

const WebDevelopment = () => {
  return (
    <Layout>
      <SEOHead
        title="Best Web Development Services USA | Custom Web Application Development | Automexa Solutions"
        description="Hire expert web developers in USA. We provide custom web development, React development, Next.js development, e-commerce solutions, and enterprise web applications. 250+ projects delivered. Get free quote now!"
        keywords="web development services USA, best web development company USA, custom web application development, React development services, Next.js development, Node.js development, Python web development, e-commerce development, website development company, hire web developer, frontend development services, backend development services, full stack development"
        jsonLd={webDevJsonLd}
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Web Development</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Custom Web <span className="gradient-text">Solutions</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Build powerful, scalable web applications with our expert team. From simple websites to complex enterprise platforms — we deliver excellence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {webServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="glass-card gradient-border p-8 h-full group hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:neon-glow transition-shadow duration-300">
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-3">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.features.map((f) => (
                          <span key={f} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Our <span className="gradient-text">Tech Stack</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech) => (
                  <span key={tech.name} className="px-4 py-2 rounded-xl text-sm font-medium bg-card border border-border text-foreground">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card gradient-border p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Ready to Build Your Web Project?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Let's discuss your web development needs. Our team of expert developers is ready to bring your vision to life.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="px-6 py-3 rounded-xl bg-[#0176FD] text-white font-semibold hover:opacity-90 transition-opacity">
                      Get Free Quote
                    </Link>
                    <Link to="/portfolio" className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors">
                      View Portfolio
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Lightbulb size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">250+</p>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Code size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">50+</p>
                      <p className="text-sm text-muted-foreground">Developers</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Cloud size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">99.9%</p>
                      <p className="text-sm text-muted-foreground">Uptime</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Palette size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">5+</p>
                      <p className="text-sm text-muted-foreground">Years</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default WebDevelopment;
