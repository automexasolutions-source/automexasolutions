import ScrollReveal from "./ScrollReveal";

const clients = [
  "TechCorp", "HealthFlow", "FinanceAI", "EduSpark", "LogiTrack",
  "RetailNova", "CloudVault", "DataPrime", "SmartBuild", "AeroTech",
  "MedFlow", "TradePeak", "CyberShield", "GreenEnergy", "AutoDrive",
];

const ClientLogos = () => {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto mb-8">
        <ScrollReveal>
          <p className="text-center text-muted-foreground text-sm font-medium uppercase tracking-wider">
            Trusted by Leading Companies Worldwide
          </p>
        </ScrollReveal>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {doubled.map((client, i) => (
            <div
              key={`${client}-${i}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center"
            >
              <span className="text-muted-foreground/40 font-display font-bold text-xl tracking-wider hover:text-muted-foreground/70 transition-colors duration-300">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
