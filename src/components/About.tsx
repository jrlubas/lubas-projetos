import { Building2, Users, Award } from "lucide-react";

export const About = () => {
  const stats = [
    { icon: Building2, value: "500+", label: "Projetos Entregues" },
    { icon: Users, value: "20+", label: "Anos de Experiência" },
    { icon: Award, value: "100%", label: "Excelência Técnica" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Sobre Nós
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Com atuação no desenvolvimento de projetos de estruturas de concreto, estruturas metálicas, 
            alvenaria estrutural, fundações, contenções e "As Built", desenvolvemos ampla variedade de 
            projetos funcionais, básicos e executivos. Nossa expertise abrange desde obras prediais e 
            industriais até grandes projetos de infraestrutura como estações de metrô e obras de arte especial.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 transition-all rounded-lg bg-card hover:shadow-lg"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-accent/10">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="mb-2 text-4xl font-bold text-accent">{stat.value}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
