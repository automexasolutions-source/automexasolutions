import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import heroBg from "@/assets/hero-bg.jpg";

// Typing animation component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // First make text visible (remove previous)
    const removeTimeout = setTimeout(() => {
      setIsVisible(false);
      
      // After removing, start typing
      setTimeout(() => {
        setIsVisible(true);
        let currentIndex = 0;
        const interval = setInterval(() => {
          if (currentIndex <= text.length) {
            setDisplayText(text.slice(0, currentIndex));
            currentIndex++;
          } else {
            clearInterval(interval);
          }
        }, 50); // Typing speed

        return () => clearInterval(interval);
      }, 300);
    }, delay * 1000 + 2000); // Wait for previous animation to complete

    return () => clearTimeout(removeTimeout);
  }, [text, delay]);

  return (
    <span className={isVisible ? "typewriter-cursor" : "opacity-0"}>
      {displayText}
    </span>
  );
};

// Light theme animated background
const LightThemeBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-3xl animate-float-slow-delayed" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float-medium" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Geometric shapes */}
      <motion.div 
        className="absolute top-20 right-20 w-20 h-20 border-2 border-cyan-200/50 rounded-xl rotate-12"
        animate={{ rotate: [12, 24, 12], y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-32 left-16 w-16 h-16 border-2 border-purple-200/50 rounded-full"
        animate={{ scale: [1, 1.1, 1], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-r from-cyan-100/50 to-blue-100/50 rounded-lg rotate-45"
        animate={{ rotate: [45, 90, 45], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

const HeroSection = () => {
  const { theme } = useTheme();
  const [resolvedTheme, setResolvedTheme] = useState("dark");
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    // Set resolved theme based on current theme
    setResolvedTheme(theme || "dark");
  }, [theme]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const isDark = resolvedTheme === "dark";

  // SEO-rich hero texts with target keywords
  const heroHeadlines = [
    "Building the Future with AI & Automation",
    "Expert Web Development Services",
    "Professional App Development Solutions", 
    "AI Automation & Workflow Experts"
  ];

  const heroDescriptions = [
    "We design, develop, and deploy intelligent software solutions — from AI agents and automation workflows to full-stack web and mobile applications.",
    "Transform your business with cutting-edge web development. We create stunning, high-performance websites that drive results and engage customers.",
    "Get custom mobile and web applications built with the latest technologies. From concept to deployment, we deliver excellence.",
    "Streamline your operations with AI automation. Our AI agents, workflow automation, and calling agents revolutionizes business processes."
  ];

  return (
    <section className="relative mt-[39px] mx-4 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background - Different for light and dark */}
      {isDark ? (
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          {/* Particle overlay */}
          <div className="absolute inset-0 particle-bg" />
        </div>
      ) : (
        <LightThemeBackground />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          {/* SEO Keywords Badge - Visible in both themes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 text-sm font-medium
              ${isDark 
                ? "border-primary/30 bg-primary/5 text-primary" 
                : "border-cyan-200 bg-cyan-50 text-cyan-700"
              }`}
          >
            <Sparkles size={14} />
            <span className="hidden sm:inline">AI Development</span>
            <span className="sm:hidden">AI</span>
            <span className="mx-1">•</span>
            <span className="hidden sm:inline">Web Development</span>
            <span className="sm:hidden">Web</span>
            <span className="mx-1">•</span>
            <span className="hidden md:inline">App Development</span>
            <span className="md:hidden">App</span>
          </motion.div>

          {/* Main Headline with Typing Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6
              ${isDark ? "text-white" : "text-slate-900"}`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={textIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {heroHeadlines[textIndex].split(" ").map((word, i) => (
                  <span key={i} className={word.includes("AI") || word.includes("Automation") || word.includes("Web") || word.includes("App") || word.includes("Expert") ? (isDark ? "gradient-text" : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600") : ""}>
                    {word}{" "}
                  </span>
                ))}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          {/* Description with Typing Effect */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-lg md:text-xl max-w-2xl mb-10 leading-relaxed
              ${isDark ? "text-gray-300" : "text-slate-600"}`}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={`desc-${textIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {heroDescriptions[textIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.p>

          {/* SEO Keywords in Description - Hidden but for SEO */}
          <div className="sr-only">
            web development, app development, AI automation, AI tools, ChatGPT, AI workflow, calling agent, 
            software development, website development, AI agents, chatbot development, mobile app development,
            custom software, IT solutions, cloud DevOps, machine learning, digital transformation
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/contact"
              className={`
                inline-flex items-center justify-center gap-2 
                px-8 py-4 rounded-xl font-semibold transition-all
                ${isDark
                  ? "bg-[#1973da] text-white hover:opacity-90"
                  : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02]"
                }
              `}
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              to="/portfolio"
              className={`
                inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border font-semibold transition-colors
                ${isDark 
                  ? "border-border bg-card/50 text-foreground hover:bg-muted/50"
                  : "border-slate-200 bg-white/80 text-slate-700 hover:bg-slate-50 hover:border-cyan-300"
                }
              `}
            >
              View Our Work
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className={`mt-12 pt-8 border-t ${isDark ? "border-border/30" : "border-slate-200"}`}
          >
            <p className={`text-sm mb-4 ${isDark ? "text-gray-400" : "text-slate-500"}`}>
              Trusted by businesses worldwide
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              {[
                "250+ Projects",
                "50+ Clients",
                "5+ Years Experience",
                "98% Satisfaction"
              ].map((stat, i) => (
                <div key={i} className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-slate-700"}`}>
                  {stat}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${isDark ? "text-gray-400" : "text-slate-400"}`}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;

