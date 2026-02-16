import { useState } from "react";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="Contact Automexa Solutions | Get a Free Consultation"
        description="Contact Automexa Solutions for AI development, web & mobile app development, and custom software projects. Get a free consultation and project estimate within 48 hours."
        keywords="contact Automexa Solutions, AI development consultation, software development quote, web development contact, mobile app development inquiry"
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Contact</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Let's <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Ready to start your next project? Reach out and let's discuss your vision. Free consultation included.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="glass-card gradient-border p-8 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                  <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
                  Send Message <Send size={18} />
                </button>
              </form>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="space-y-8">
                <div className="glass-card gradient-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground text-sm mt-1">contact@automexa.com</p>
                  </div>
                </div>
                <div className="glass-card gradient-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Call Us</h3>
                    <p className="text-muted-foreground text-sm mt-1">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="glass-card gradient-border p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground text-sm mt-1">123 Innovation Drive<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="glass-card gradient-border p-6">
                  <h3 className="font-display font-semibold text-foreground mb-2">Business Hours</h3>
                  <p className="text-muted-foreground text-sm">Monday – Friday: 9:00 AM – 6:00 PM (PST)</p>
                  <p className="text-muted-foreground text-sm">Saturday – Sunday: Closed</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
