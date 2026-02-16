import ScrollReveal from "./ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What types of businesses does Automexa Solutions work with?",
    a: "We work with businesses of all sizes — from early-stage startups to Fortune 500 enterprises. Our clients span healthcare, finance, e-commerce, education, logistics, manufacturing, and more. Whether you need an MVP built in weeks or a complex enterprise system, we tailor our approach to your scale and goals.",
  },
  {
    q: "How long does a typical project take to complete?",
    a: "Project timelines vary based on complexity. A standard MVP takes 4-6 weeks, while full-featured applications typically require 8-16 weeks. Complex AI systems and enterprise platforms may take 3-6 months. During our discovery phase, we provide a detailed timeline with clear milestones.",
  },
  {
    q: "What AI technologies and models do you work with?",
    a: "We work with all major AI frameworks and models including OpenAI GPT-4, Anthropic Claude, Google Gemini, Meta LLaMA, and open-source alternatives. We also build custom models using TensorFlow, PyTorch, and Hugging Face. Our AI solutions include RAG pipelines, fine-tuned LLMs, computer vision, NLP, and predictive analytics.",
  },
  {
    q: "Do you provide ongoing support and maintenance after launch?",
    a: "Absolutely. We offer flexible support plans including 24/7 monitoring, bug fixes, feature enhancements, performance optimization, and security updates. Our SLA-backed support ensures 99.9% uptime with response times as fast as 15 minutes for critical issues.",
  },
  {
    q: "What is your pricing model?",
    a: "We offer three engagement models: Fixed-Price for well-defined projects, Time & Materials for evolving requirements, and Dedicated Teams for long-term partnerships. Each model includes transparent billing with no hidden costs. Contact us for a free consultation and detailed estimate.",
  },
  {
    q: "Can you integrate AI into our existing systems?",
    a: "Yes, AI integration is one of our specialties. We can add intelligent features to your existing applications — whether it's an AI chatbot, automated workflows, predictive analytics, or document processing. We work with your current tech stack and ensure seamless integration without disrupting operations.",
  },
  {
    q: "How do you ensure the security of our data and applications?",
    a: "Security is built into every layer of our process. We follow OWASP guidelines, implement end-to-end encryption, conduct regular security audits, and maintain SOC2 compliance. All projects include penetration testing, code reviews, and secure deployment pipelines.",
  },
  {
    q: "Do you offer mobile app development for both iOS and Android?",
    a: "Yes, we develop native iOS and Android apps as well as cross-platform solutions using Flutter and React Native. Our mobile team handles everything from UI/UX design to App Store/Google Play deployment, including push notifications, offline capabilities, and analytics integration.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card/30" id="faq">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">FAQ</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4 text-foreground">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about working with Automexa Solutions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card gradient-border px-6 rounded-2xl border-none"
              >
                <AccordionTrigger className="text-foreground text-left font-display font-semibold text-sm hover:no-underline py-5">
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
    </section>
  );
};

export default FAQSection;
