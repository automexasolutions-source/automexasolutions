import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ClientLogos from "@/components/ClientLogos";
import ServicesShowcase from "@/components/ServicesShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsCounter from "@/components/StatsCounter";
import ProcessSection from "@/components/ProcessSection";
import IndustriesSection from "@/components/IndustriesSection";
import FeaturedWork from "@/components/FeaturedWork";
import TechCarousel from "@/components/TechCarousel";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import NewsletterSection from "@/components/NewsletterSection";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
// /....
// ..
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Automexa Solutions",
  url: "https://automexasolutions.online",
  logo: "https://automexasolutions.online/logo.png",
  description: "Automexa Solutions is the BEST AI DEVELOPMENT COMPANY in USA. Leading IT solutions and AI development company specializing in AI agents, workflow automation, web development, mobile app development, cloud & DevOps, ChatGPT integration, calling agents, and custom software solutions. 250+ projects delivered. Rated 5⭐ by clients globally.",
  foundingDate: "2020",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 200 },
  areaServed: "USA, United States, Worldwide",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92 3138368689",
    email: "info@automexasolutions.online",
    contactType: "sales",
  },
  knowsAbout: [
    "AI Development", "AI Agents", "Chatbot Development", "Web Development",
    "Mobile App Development", "Cloud Computing", "DevOps", "Machine Learning",
    "Custom Software Development", "UI/UX Design", "Workflow Automation",
    "Website Development", "Software Development", "IT Solutions",
    "ChatGPT Integration", "AI Automation", "Calling Agents", "Voice AI",
    "Full-Stack Development", "React Development", "Node.js Development",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT & AI Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agents Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Workflow Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & DevOps" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ChatGPT Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Calling Agents" } },
    ],
  },
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Automexa Solutions | Best AI Development Company USA | Hire Top Web & App Developers"
        description="Automexa Solutions is the BEST AI DEVELOPMENT COMPANY in USA. Hire expert developers for web development, mobile apps, AI agents, ChatGPT integration, calling agents & workflow automation. 250+ projects delivered. Rated 5⭐. Get free quote now! Upwork & Fiverr alternative for premium quality."
        keywords="Automexa Solutions, best AI development company USA, top AI company USA, best web development company USA, top web development company USA, best software development company USA, hire AI developer, hire React developer, hire Python developer, hire Node.js developer, hire mobile app developer, AI agents development, chatbot development, AI automation, ChatGPT integration, workflow automation, calling agents, voice AI, web development services, mobile app development services, IT solutions, software development, website development, custom software, cloud DevOps, machine learning, digital transformation, upwork alternative, fiverr alternative, top rated developer"
        canonical="https://automexasolutions.online"
        jsonLd={homeJsonLd}
      />
      <HeroSection />
      {/* <ClientLogos /> */}
      <StatsCounter />
      <ServicesShowcase />
      <WhyChooseUs />
      <ProcessSection />
      <IndustriesSection />
      <FeaturedWork />
      <TechCarousel />
      <TestimonialsSection />
      <FAQSection />
      {/* <NewsletterSection /> */}
      <CTASection />
    </Layout>
  );
};

export default Index;
