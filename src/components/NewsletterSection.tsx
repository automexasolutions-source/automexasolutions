import { useState } from "react";
import { Send } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Subscribed!", description: "You'll receive our latest insights and updates." });
    setEmail("");
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-2xl">
        <ScrollReveal>
          <div className="glass-card gradient-border p-10 md:p-14 text-center neon-glow">
            <h2 className="font-display text-2xl md:text-4xl font-bold mb-3 text-foreground">
              Stay <span className="gradient-text">Ahead</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Get exclusive AI insights, industry trends, and product updates delivered to your inbox every week.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-semibold hover:opacity-90 transition-opacity text-sm"
              >
                Subscribe <Send size={14} />
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
