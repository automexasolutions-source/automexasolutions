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
// ....
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Automexa Solutions",
  url: "https://automexasolutions.online",
  logo: "https://automexasolutions.online/logo.png",
  description: "Automexa Solutions is a leading IT solutions and AI development company specializing in AI agents, workflow automation, web development, mobile app development, cloud & DevOps, and custom software solutions.",
  foundingDate: "2020",
  numberOfEmployees: { "@type": "QuantitativeValue", minValue: 50, maxValue: 200 },
  areaServed: "Worldwide",
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
    ],
  },
};

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Automexa Solutions | AI Development, Web & Mobile App Development Company"
        description="Automexa Solutions is a leading IT solutions company specializing in AI agents, AI workflow automation, chatbot development, full-stack web development, mobile app development, cloud & DevOps, and custom software solutions. Get started today."
        keywords="Automexa Solutions, AI development company, web development company, mobile app development, AI agents, chatbot development, IT solutions, software development, website development, AI workflow automation, custom software, cloud DevOps, machine learning, digital transformation"
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
