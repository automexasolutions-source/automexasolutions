import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import logo from "../assets/logo-icon.png"
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "AI & Automation", path: "/ai-automation" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Technologies", path: "/technologies" },
  { label: "Why Choose Us", path: "/why-choose-us" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-border/30 shadow-lg shadow-black/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {/* Gradient background line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto flex items-center justify-between h-16 md:h-18 px-4 md:px-6">
        {/* Logo */}
     <Link to="/" className="flex items-center gap-3 group">
  <div className="relative w-9 h-9 rounded-xl  flex items-center justify-center overflow-hidden">
    {/* Animated shine effect */}
    {/* <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 rounded-xl gradient-border-glow opacity-50" /> */}

    {/* ✅ Replace letter “A” with logo image */}
    <img
      src={logo}  // <-- your logo path (public/assets/logo.png)
      alt="AutomexaSolutions"
      className=""
    />

    {/* Sparkle overlay */}
  </div>

  <div className="flex flex-col">
    <span className="font-display font-bold text-xl text-foreground tracking-tight group-hover:text-primary transition-colors">
      Automexa Solutions
    </span>
   
  </div>
</Link>


        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.slice(0, 6).map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                location.pathname === link.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {link.label}
                {/* Active indicator dot */}
                {location.pathname === link.path && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                )}
              </span>
              
              {/* Hover background */}
              <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-95 group-hover:scale-100" />
              
              {/* Active indicator bar */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-x-4 -bottom-1 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
              
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/20 transition-colors duration-300" />
            </Link>
          ))}
          
          {/* Dropdown for more links */}
          <div className="relative group">
            <button className="px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5">
              <span>More</span>
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            {/* Dropdown menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 py-2 bg-card/95 backdrop-blur-2xl rounded-2xl border border-border/50 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              {/* Arrow */}
              <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-card rotate-45 border-l border-t border-border/50" />
              
              {navLinks.slice(6).map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block px-4 py-2.5 mx-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Enhanced Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-12 h-12 rounded-xl bg-muted/50 hover:bg-muted flex items-center justify-center transition-all duration-300 hover:scale-105 group ml-2"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity blur-lg" />
            
            {/* Sun icon */}
            <motion.div
              initial={false}
              animate={{
                rotate: theme === "dark" ? 0 : 180,
                scale: theme === "dark" ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Moon className="w-5 h-5 text-neon-cyan" />
            </motion.div>
            
            {/* Moon icon */}
            <motion.div
              initial={false}
              animate={{
                rotate: theme === "light" ? 0 : -180,
                scale: theme === "light" ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute"
            >
              <Sun className="w-5 h-5 text-amber-500" />
            </motion.div>
            
            {/* Border */}
            <span className="absolute inset-0 rounded-xl border border-border/50 group-hover:border-primary/30 transition-colors" />
          </button>

          {/* CTA Button - Enhanced */}
          <Link
            to="/contact"
            className="ml-3 relative group"
          >
            <div className="absolute -inset-0.5 bg-[#1973da] rounded-xl opacity-70 group-hover:opacity-100 blur transition duration-300" />
            <div className="relative px-6 py-3 rounded-xl bg-[#1973da] text-white text-sm font-semibold flex items-center gap-2 transition-all duration-300 group-hover:scale-[1.02]">
              <span>Get Started</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        </div>

        {/* Mobile Toggle & Theme */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative w-11 h-11 rounded-xl bg-muted/50 flex items-center justify-center transition-all duration-300 hover:scale-105"
          >
            <motion.div
              initial={false}
              animate={{
                rotate: theme === "dark" ? 0 : 180,
                scale: theme === "dark" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Moon className="w-5 h-5 text-neon-cyan" />
            </motion.div>
            <motion.div
              initial={false}
              animate={{
                rotate: theme === "light" ? 0 : -180,
                scale: theme === "light" ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="absolute"
            >
              <Sun className="w-5 h-5 text-amber-500" />
            </motion.div>
          </button>
          
          {/* Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground p-2.5 rounded-xl hover:bg-muted/50 transition-colors relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity" />
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Enhanced */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border/30 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    <span>{link.label}</span>
                    {location.pathname === link.path && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-3 px-4 py-3.5 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-primary-foreground text-sm font-semibold text-center flex items-center justify-center gap-2"
                >
                  <span>Get Started</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>
            
            {/* Decorative gradient line */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-2" />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

