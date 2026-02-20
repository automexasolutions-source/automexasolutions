import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import SEOHead from "@/components/SEOHead";
import { Smartphone, Tablet, Watch, Cloud, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const mobileServices = [
  {
    icon: Smartphone,
    title: "iOS Development",
    desc: "Native iOS apps built with Swift and SwiftUI for optimal performance and user experience.",
    features: ["Swift Development", "SwiftUI Apps", "iPad Apps", "App Store Optimization"],
  },
  {
    icon: Tablet,
    title: "Android Development",
    desc: "Native Android applications using Kotlin and Jetpack Compose for modern devices.",
    features: ["Kotlin Development", "Jetpack Compose", "Android TV Apps", "Google Play Publishing"],
  },
  {
    icon: Zap,
    title: "Cross-Platform",
    desc: "Flutter and React Native apps that work seamlessly across iOS and Android.",
    features: ["Flutter Development", "React Native", "Single Codebase", "Native Performance"],
  },
  {
    icon: Cloud,
    title: "Backend & API",
    desc: "Robust backend infrastructure with real-time features and cloud integration.",
    features: ["REST APIs", "Firebase", "Real-time Database", "Cloud Functions"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "We analyze your requirements and create a detailed project specification." },
  { step: "02", title: "Design", desc: "Our designers create intuitive UI/UX designs for your mobile app." },
  { step: "03", title: "Development", desc: "Expert developers build your app using the latest technologies." },
  { step: "04", title: "Testing", desc: "Rigorous testing ensures your app works perfectly on all devices." },
  { step: "05", title: "Launch", desc: "We publish your app to App Store and Google Play." },
];

const mobileJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mobile App Development Services",
  provider: {
    "@type": "Organization",
    name: "Automexa Solutions",
    url: "https://automexasolutions.online",
  },
  description: "Professional mobile app development services in USA. iOS, Android, and cross-platform app development by expert developers.",
  areaServed: "USA",
  serviceType: "Mobile App Development",
};

const MobileDevelopment = () => {
  return (
    <Layout>
      <SEOHead
        title="Best Mobile App Development Services USA | iOS & Android App Developers | Automexa Solutions"
        description="Hire expert mobile app developers in USA. We provide iOS development, Android development, Flutter apps, and React Native development. 250+ mobile apps delivered. Get free quote now!"
        keywords="mobile app development services USA, best mobile development company USA, iOS app development, Android app development, Flutter development, React Native development, hire mobile app developer, mobile app development company, cross-platform app development, mobile app developers USA"
        jsonLd={mobileJsonLd}
      />
      <section className="section-padding pt-32">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-semibold uppercase tracking-wider">Mobile Development</span>
              <h1 className="font-display text-4xl md:text-6xl font-bold mt-3 mb-6 text-foreground">
                Mobile Apps That <span className="gradient-text">Stand Out</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                From concept to app store, we build stunning mobile applications that engage users and drive business growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {mobileServices.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.1}>
                <div className="glass-card gradient-border p-8 h-full group hover:bg-card/80 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:neon-glow transition-shadow duration-300">
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-xl text-foreground mb-3">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
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

          <ScrollReveal>
            <div className="mb-16">
              <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
                Our <span className="gradient-text">Process</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {processSteps.map((p, i) => (
                  <div key={p.step} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">{p.step}</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="glass-card gradient-border p-8 md:p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Ready to Build Your Mobile App?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Let's discuss your mobile app idea. Our team of expert mobile developers is ready to bring your vision to life.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link to="/contact" className="px-6 py-3 rounded-xl bg-[#0176FD] text-white font-semibold hover:opacity-90 transition-opacity">
                      Get Free Quote
                    </Link>
                    <Link to="/portfolio" className="px-6 py-3 rounded-xl border border-border text-foreground font-semibold hover:bg-muted transition-colors">
                      View Portfolio
                    </Link>
                  </div>
                </div>
                <div className="w-full md:w-1/3">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Smartphone size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">250+</p>
                      <p className="text-sm text-muted-foreground">Apps Built</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Zap size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">50+</p>
                      <p className="text-sm text-muted-foreground">Developers</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Shield size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">100%</p>
                      <p className="text-sm text-muted-foreground">Secure</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-primary/10">
                      <Cloud size={32} className="text-primary mx-auto mb-2" />
                      <p className="text-2xl font-bold text-foreground">24/7</p>
                      <p className="text-sm text-muted-foreground">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <CTASection />
    </Layout>
  );
};

export default MobileDevelopment;
