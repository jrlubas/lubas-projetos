import { Boxes, Building2, Factory, Layers, FileCheck, SearchCheck } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: Boxes,
    title: "Modelagem BIM",
    description: "Projetos em Revit até LOD 400, com coordenação e compatibilização multidisciplinar.",
  },
  {
    number: "02",
    icon: Building2,
    title: "Estruturas de concreto",
    description: "Concreto armado, protendido e pré-moldado para edificações, estações e obras de arte.",
  },
  {
    number: "03",
    icon: Factory,
    title: "Estruturas metálicas",
    description: "Coberturas, passarelas, galpões e estruturas mistas, do projeto básico ao de fabricação.",
  },
  {
    number: "04",
    icon: Layers,
    title: "Fundações e contenções",
    description: "Fundações, contenções, muros de arrimo, obras de terra e interação solo-estrutura.",
  },
  {
    number: "05",
    icon: FileCheck,
    title: "Avaliação Técnica de Projetos",
    description: "Verificação independente de projetos executivos para o Metrô-SP, consórcios e concessionárias.",
  },
  {
    number: "06",
    icon: SearchCheck,
    title: "Laudos e vistorias",
    description: "Inspeção, diagnóstico de manifestações patológicas e projetos de reforço e retrofit.",
  },
];

const TOOLS = [
  "SAP2000", "TQS", "STRAP", "Revit", "Advance Steel", "Metálicas 3D",
  "Phase2", "Slide", "AutoCAD", "C# e VBA", "Claude (IA)",
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Serviços
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            O que fazemos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Projetos básicos e executivos, verificação independente e consultoria
            técnica em estruturas e geotecnia, para obras públicas e privadas.
          </p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 mb-16" style={{ boxShadow: "var(--shadow-card)" }}>
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="group relative bg-card p-8 transition-colors hover:bg-primary"
            >
              <span className="block mb-6 text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors">
                {service.number}
              </span>
              <div className="flex items-center justify-center w-14 h-14 mb-5 bg-accent/10 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 justify-center text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-2">
            Ferramentas
          </span>
          {TOOLS.map((tool, index) => (
            <span key={tool} className="text-sm text-foreground/80">
              {tool}
              {index !== TOOLS.length - 1 && <span className="text-accent ml-3">·</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
