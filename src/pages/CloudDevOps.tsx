import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Cloud, Server, Database, Lock, Zap, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const cloudServices = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    desc: "Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with minimal downtime.",
    features: ["AWS Migration", "Azure Migration", "GCP Migration", "Hybrid Cloud"],
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    desc: "Automate infrastructure provisioning with Terraform, CloudFormation, and Ansible.",
    features: ["Terraform", "CloudFormation", "Ansible", "Pulumi"],
  },
  {
    icon: Zap,
    title: "CI/CD Pipelines",
    desc: "Continuous integration and deployment to accelerate your release cycle.",
    features: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"],
  },
  {
    icon: Lock,
    title: "Cloud Security",
    desc: "Enterprise-grade security with compliance certifications and best practices.",
    features: ["SOC 2", "GDPR Compliance", "Security Audits", "Penetration Testing"],
  },
];

const cloudProviders = [
  { name: "AWS", logo: "☁️", desc: "Amazon Web Services - EC2, S3, Lambda, RDS" },
  { name: "Azure", logo: "🔷", desc: "Microsoft Azure - VMs, Blob, Functions, SQL" },
  { name: "GCP", logo: "🌐", desc: "Google Cloud - Compute, Storage, BigQuery" },
];

const cloudJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Cloud & DevOps Services",
  provider: {
    "@type": "Organization",
    name: "Automexa Solutions",
    url: "https://automexasolutions.online",
  },
  description: "Professional cloud and DevOps services in USA. AWS, Azure, GCP solutions, CI/CD, infrastructure as code, and cloud security.",
  areaServed: "USA",
  serviceType: "Cloud DevOps",
};

const CloudDevOps = () => {
  return (
    <Layout>
      <SEOHead
        title="Best Cloud & DevOps Services USA | AWS Azure GCP Solutions | Automexa Solutions"
        description="Hire expert cloud engineers in USA. We provide AWS solutions, Azure development, GCP services, DevOps consulting, CI/CD pipelines, and infrastructure automation. Get free quote now!"
        keywords="cloud services USA, DevOps services USA, AWS solutions, Azure development, GCP services, infrastructure as code, CI CD pipelines, cloud migration, AWS cloud, Azure cloud, DevOps consulting, cloud security, hire cloud engineer"
        jsonLd={cloudJsonLd}
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Cloud & DevOps</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Scale with <span className="gradient-text">Cloud Solutions</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Build scalable, secure, and cost-effective cloud infrastructure. From migration to management, we've got you covered.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {cloudServices.map((s, i) => (
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
                Cloud <span className="gradient-text">Providers</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cloudProviders.map((provider) => (
                  <div key={provider.name} className="glass-card gradient-border p-6 text-center">
                    <div className="text-4xl mb-4">{provider.logo}</div>
                    <h3 className="font-bold text-xl text-foreground mb-2">{provider.name}</h3>
                    <p className="text-sm text-muted-foreground">{provider.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card gradient-border p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Ready to Optimize Your Cloud?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Let's discuss your cloud and DevOps needs. Our team of certified cloud experts is ready to help you scale.
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
                      <Cloud size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">100+</p>
                      <p className="text-sm text-muted-foreground">Deployments</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Zap size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">99.9%</p>
                      <p className="text-sm text-muted-foreground">Uptime</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <GitBranch size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">500+</p>
                      <p className="text-sm text-muted-foreground">Pipelines</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Lock size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">SOC2</p>
                      <p className="text-sm text-muted-foreground">Compliant</p>
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

export default CloudDevOps;
