import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Bot, BrainCircuit, Workflow, Cpu } from "lucide-react";

const aiServices = [
  {
    icon: Bot,
    title: "AI Agents",
    desc: "Autonomous AI agents that can research, analyze, and execute tasks across your business operations. From customer service to data analysis — our agents work 24/7.",
    features: ["Task Automation", "Decision Making", "Multi-step Reasoning", "API Integration"],
  },
  {
    icon: BrainCircuit,
    title: "AI Chatbots",
    desc: "Conversational AI powered by the latest LLMs, fine-tuned for your domain. Handle customer queries, sales, and support with human-like understanding.",
    features: ["Natural Language Processing", "Context Memory", "Multi-language", "Custom Training"],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    desc: "End-to-end workflow automation that combines AI with your existing tools. Reduce manual processes and eliminate bottlenecks across departments.",
    features: ["Process Mining", "Intelligent Routing", "Anomaly Detection", "Auto-scaling"],
  },
  {
    icon: Cpu,
    title: "Custom LLM Integrations",
    desc: "Integrate and fine-tune large language models for your specific use case. We work with OpenAI, Anthropic, and open-source models to build exactly what you need.",
    features: ["Model Fine-tuning", "RAG Pipelines", "Embedding Systems", "Cost Optimization"],
  },
];

const AIAutomation = () => {
  return (
    <Layout>
      <SEOHead
        title="Best AI Automation Services USA | AI Agents & Chatbot Development | Automexa Solutions"
        description="Transform your business with Automexa Solutions' BEST AI services in USA: AI agents development, chatbot development, AI workflow automation, custom LLM integrations, ChatGPT integration, calling agents. Enterprise-grade AI solutions. Hire AI developers now!"
        keywords="AI agents development USA, AI chatbot development USA, AI workflow automation USA, LLM integration services, AI development services USA, business automation AI, custom AI solutions, ChatGPT integration services, calling AI agents, voice AI development, conversational AI services, OpenAI integration, GPT-4 development, AI automation company USA, hire AI developer, enterprise AI solutions"
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">AI & Automation</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Intelligent <span className="gradient-text">Automation</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Harness the power of AI to transform your business operations with intelligent agents, chatbots, and workflow automation.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {aiServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="glass-card gradient-border p-8 md:p-10">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center neon-glow">
                        <s.icon size={28} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display font-bold text-2xl text-foreground mb-3">{s.title}</h2>
                      <p className="text-muted-foreground leading-relaxed mb-5">{s.desc}</p>
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
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default AIAutomation;
