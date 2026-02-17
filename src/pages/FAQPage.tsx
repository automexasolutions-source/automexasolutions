import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import CTASection from "@/components/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "General",
    faqs: [
      { q: "What is Automexa Solutions?", a: "Automexa Solutions is a global IT solutions and AI development company specializing in AI agents, workflow automation, full-stack web development, mobile app development, cloud infrastructure, and custom software solutions. We serve clients across 15+ countries with 250+ successful projects delivered." },
      { q: "Where is Automexa Solutions located?", a: "Our headquarters is in San Francisco, CA, with distributed engineering teams across North America, Europe, and Asia. This global presence allows us to provide 24/7 support and accommodate clients in any timezone." },
      { q: "What industries do you serve?", a: "We serve a wide range of industries including healthcare, finance, e-commerce, education, logistics, manufacturing, real estate, travel, and more. Our solutions are tailored to the specific regulatory requirements and challenges of each industry." },
      { q: "How do I get started with Automexa?", a: "Simply reach out through our contact form, email, or phone. We'll schedule a free 30-minute discovery call to understand your requirements. From there, we'll provide a detailed proposal with timeline, team composition, and cost estimate within 48 hours." },
    ],
  },
  {
    title: "Services & Technology",
    faqs: [
      { q: "What AI services do you offer?", a: "Our AI services include AI agent development, chatbot solutions, AI workflow automation, custom LLM integrations, RAG pipelines, computer vision, natural language processing, predictive analytics, and machine learning model development. We work with OpenAI, Anthropic, Google, and open-source models." },
      { q: "What programming languages and frameworks do you use?", a: "Our tech stack includes React, Next.js, Node.js, Python, FastAPI, Flutter, React Native, TypeScript, GraphQL, and more. For infrastructure, we use AWS, GCP, Azure, Docker, Kubernetes, and Terraform. We always choose the best technology for your specific use case." },
      { q: "Can you build both web and mobile applications?", a: "Yes, we offer full-stack web development (React, Next.js, Node.js) and cross-platform mobile development (Flutter, React Native) as well as native iOS and Android development. We also build progressive web apps (PWAs) for maximum cross-platform reach." },
      { q: "Do you offer UI/UX design services?", a: "Absolutely. Our design team creates user-centered interfaces using research-driven methodologies. Services include user research, wireframing, prototyping, visual design, design systems, accessibility audits, and usability testing." },
    ],
  },
  {
    title: "Project & Process",
    faqs: [
      { q: "How long does a typical project take?", a: "Timelines depend on scope: MVPs in 4-6 weeks, standard applications in 8-16 weeks, and complex enterprise systems in 3-6 months. We provide detailed timelines during the planning phase with regular milestone check-ins." },
      { q: "What is your development process?", a: "We follow a 6-step process: Discovery & Consultation → Strategy & Planning → UI/UX Design → Agile Development (2-week sprints) → Quality Assurance → Launch & Support. Each phase includes client reviews and approval gates." },
      { q: "How do you handle project communication?", a: "We provide weekly progress reports, daily standups for active development, and real-time project dashboards. Communication channels include Slack, email, and video calls. You'll have a dedicated project manager as your single point of contact." },
      { q: "What if I need changes during development?", a: "Our agile methodology is built for flexibility. Changes are evaluated during sprint planning, assessed for impact, and incorporated into upcoming sprints. We maintain transparent communication about any timeline or budget implications." },
    ],
  },
  {
    title: "Pricing & Support",
    faqs: [
      { q: "What are your pricing models?", a: "We offer three models: Fixed-Price (for well-defined projects), Time & Materials (for evolving requirements), and Dedicated Teams (for long-term partnerships). All models include transparent billing, no hidden fees, and regular budget reviews." },
      { q: "Do you provide post-launch support?", a: "Yes, we offer comprehensive post-launch support including 24/7 monitoring, bug fixes, feature enhancements, performance optimization, security updates, and scaling assistance. Our SLA-backed plans guarantee response times as fast as 15 minutes for critical issues." },
      { q: "Is there a minimum project size?", a: "We work with projects of all sizes. For smaller projects (under $10K), we recommend our fixed-price model. For larger engagements, we can provide dedicated teams tailored to your budget and timeline." },
      { q: "Do you sign NDAs and confidentiality agreements?", a: "Yes, we sign NDAs before any project discussion. All team members are bound by strict confidentiality agreements. We also comply with GDPR, HIPAA, SOC2, and other regulatory frameworks as required by your industry." },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((cat) =>
    cat.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    }))
  ),
};

const FAQPage = () => {
  return (
    <Layout>
      <SEOHead
        title="FAQ | Automexa Solutions - AI & Software Development Questions"
        description="Find answers to common questions about Automexa Solutions' AI development, web & mobile app services, pricing, process, and support. Get started with your project today."
        keywords="Automexa FAQ, AI development questions, software development FAQ, web development questions, mobile app development FAQ, IT solutions FAQ"
        jsonLd={faqJsonLd}
      />

      <section className="section-padding pt-32">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-4xl font-semibold uppercase tracking-wider">FAQ</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Everything you need to know about working with Automexa Solutions. Can't find what you're looking for? Reach out to our team.
              </p>
            </div>
          </ScrollReveal>

          {faqCategories.map((cat, ci) => (
            <div key={cat.title} className="mb-12">
              <ScrollReveal>
                <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
                  {cat.title}
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <Accordion type="single" collapsible className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <AccordionItem
                      key={i}
                      value={`${cat.title}-${i}`}
                      className="glass-card gradient-border px-6 py-2 rounded-2xl border-none"
                    >
                      <AccordionTrigger className="text-foreground text-left font-display font-semibold text-base hover:no-underline py-5">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default FAQPage;
