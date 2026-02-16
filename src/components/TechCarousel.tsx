import ScrollReveal from "./ScrollReveal";

const techs = [
  "React", "Next.js", "Node.js", "Express.js", "Python", "FastAPI",
  "MongoDB", "Flutter", "Firebase", "AWS", "Tailwind CSS", "Docker",
  "Kubernetes", "TypeScript", "PostgreSQL", "GraphQL",
];

const TechCarousel = () => {
  const doubled = [...techs, ...techs];

  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Tech Stack</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 text-foreground">
              Technologies We <span className="gradient-text">Master</span>
            </h2>
          </div>
        </ScrollReveal>
      </div>

      <div className="overflow-hidden">
        <div className="flex animate-scroll-left" style={{ width: "max-content" }}>
          {doubled.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex-shrink-0 mx-3 px-6 py-3 rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechCarousel;
