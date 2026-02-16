import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="glass-card gradient-border p-12 md:p-16 text-center neon-glow">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-foreground">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
              Let's build something extraordinary together. From AI agents to full-stack applications — we've got you covered.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Let's Talk <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
