import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center font-display font-bold text-primary-foreground text-sm">
                A
              </div>
              <span className="font-display font-bold text-lg text-foreground">
                Automexa Solutions
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-sm">
              A global IT solutions and AI development company building intelligent software for businesses worldwide. From AI agents to full-stack applications — we deliver innovation at scale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About Us", path: "/about" },
                { label: "Portfolio", path: "/portfolio" },
                { label: "Why Choose Us", path: "/why-choose-us" },
                { label: "Technologies", path: "/technologies" },
                { label: "FAQ", path: "/faq" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "AI Agents Development", path: "/ai-automation" },
                { label: "Web Development", path: "/services" },
                { label: "Mobile App Development", path: "/services" },
                { label: "AI Workflow Automation", path: "/ai-automation" },
                { label: "Cloud & DevOps", path: "/services" },
                { label: "Custom Software", path: "/services" },
              ].map((item, i) => (
                <Link key={i} to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-primary flex-shrink-0" />
                contact@automexa.com
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary flex-shrink-0" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin size={14} className="text-primary flex-shrink-0" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 Automexa Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms of Service</span>
            <Link to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
