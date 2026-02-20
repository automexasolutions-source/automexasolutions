import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Palette, PenTool, Smartphone, Monitor, Figma, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const designServices = [
  {
    icon: PenTool,
    title: "UI Design",
    desc: "Beautiful, intuitive user interfaces that captivate your users and enhance brand perception.",
    features: ["Custom UI Design", "Design Systems", "Iconography", "Illustration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    desc: "Mobile-first designs optimized for iOS and Android platforms with best UX practices.",
    features: ["iOS Design", "Android Design", "App Wireframes", "Prototyping"],
  },
  {
    icon: Monitor,
    title: "Web Design",
    desc: "Responsive website designs that work perfectly across all devices and screen sizes.",
    features: ["Responsive Design", "Landing Pages", "Dashboard Design", "Website Redesign"],
  },
  {
    icon: Layers,
    title: "UX Research",
    desc: "In-depth user research and analysis to create user-centered design solutions.",
    features: ["User Research", "Usability Testing", "User Personas", "Journey Mapping"],
  },
];

const tools = [
  { name: "Figma", category: "Design" },
  { name: "Adobe XD", category: "Design" },
  { name: "Sketch", category: "Design" },
  { name: "InVision", category: "Prototyping" },
  { name: "Framer", category: "Prototyping" },
  { name: "Principle", category: "Animation" },
  { name: "Zeplin", category: "Handoff" },
  { name: "Miro", category: "Research" },
];

const designJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "UI/UX Design Services",
  provider: {
    "@type": "Organization",
    name: "Automexa Solutions",
    url: "https://automexasolutions.online",
  },
  description: "Professional UI/UX design services in USA. Web design, mobile app design, and user experience design by expert designers.",
  areaServed: "USA",
  serviceType: "UI/UX Design",
};

const UIDesign = () => {
  return (
    <Layout>
      <SEOHead
        title="Best UI/UX Design Services USA | Web & Mobile App Design | Automexa Solutions"
        description="Hire expert UI/UX designers in USA. We provide web design, mobile app design, user experience design, and design systems. Beautiful, intuitive designs that convert. Get free quote now!"
        keywords="UI/UX design services USA, web design services, mobile app design, UX research, UI design company, user experience design, Figma design, app wireframing, design systems, prototype design, hire UI designer, ux design agency"
        jsonLd={designJsonLd}
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">UI/UX Design</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Designs That <span className="gradient-text">Engage</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Create memorable user experiences with our expert design team. From concept to final design, we bring your vision to life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {designServices.map((s, i) => (
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
                Design <span className="gradient-text">Tools</span>
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {tools.map((tool) => (
                  <span key={tool.name} className="px-4 py-2 rounded-xl text-sm font-medium bg-card border border-border text-foreground">
                    {tool.name}
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
                    Ready to Design Your Project?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Let's discuss your design needs. Our team of expert designers is ready to create beautiful, intuitive experiences.
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
                      <Palette size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Projects</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <PenTool size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">50+</p>
                      <p className="text-sm text-muted-foreground">Designers</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Figma size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">4.9/5</p>
                      <p className="text-sm text-muted-foreground">Rating</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Layers size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">100%</p>
                      <p className="text-sm text-muted-foreground">Satisfaction</p>
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

export default UIDesign;
