import { Building, Factory, Ship, Train, Layers, Building2 } from "lucide-react";

export const Expertise = () => {
  const areas = [
    { icon: Building, title: "Obras Prediais", description: "Residenciais e comerciais" },
    { icon: Factory, title: "Obras Industriais", description: "Galpões e fábricas" },
    { icon: Ship, title: "Obras Portuárias", description: "Infraestrutura marítima" },
    { icon: Train, title: "Estações de Metrô", description: "Consultoria especializada" },
    { icon: Layers, title: "Obras de Arte Especial", description: "Pontes e viadutos" },
    { icon: Building2, title: "Órgãos Públicos", description: "Projetos institucionais" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground">
            Experiência consolidada em diversos segmentos da engenharia estrutural
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 transition-all rounded-lg bg-card hover:bg-accent/5"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10">
                <area.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
