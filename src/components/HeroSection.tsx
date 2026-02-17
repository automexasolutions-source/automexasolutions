import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative mt-[39px] mx-4 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Particle overlay */}
      <div className="absolute inset-0 particle-bg" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6"
          >
            <Sparkles size={14} />
            AI-Powered Innovation
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            Building the Future with{" "}
            <span className="gradient-text">AI & Automation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            We design, develop, and deploy intelligent software solutions — from AI agents 
            and automation workflows to full-stack web and mobile applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
  to="/contact"
  className="
    inline-flex items-center justify-center gap-2 
    px-8 py-4 rounded-xl 
    bg-[#1973da]
    text-white font-semibold 
    hover:opacity-90 transition-opacity
  "
>
  Get Started <ArrowRight size={18} />
</Link>

            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border bg-card/50 text-foreground font-semibold hover:bg-muted/50 transition-colors"
            >
              View Our Work
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
