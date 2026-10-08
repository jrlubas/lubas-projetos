import iconBim from "@/assets/services/icon-bim.jpg";
import iconConcreto from "@/assets/services/icon-concreto.jpg";
import iconMetalicas from "@/assets/services/icon-metalicas.jpg";
import iconFundacoes from "@/assets/services/icon-fundacoes.jpg";
import iconAtp from "@/assets/services/icon-atp.jpg";
import iconLaudos from "@/assets/services/icon-laudos.jpg";

const SERVICES = [
  {
    number: "01",
    icon: iconBim,
    title: "Modelagem BIM",
    description: "Projetos em Revit até LOD 400, com coordenação e compatibilização multidisciplinar.",
  },
  {
    number: "02",
    icon: iconConcreto,
    title: "Estruturas de concreto",
    description: "Concreto armado, protendido e pré-moldado para edificações, estações e obras de arte.",
  },
  {
    number: "03",
    icon: iconMetalicas,
    title: "Estruturas metálicas",
    description: "Coberturas, passarelas, obras de arte especial, galpões e estruturas mistas, do projeto básico ao de fabricação.",
  },
  {
    number: "04",
    icon: iconFundacoes,
    title: "Fundações e obras de terra",
    description: "Fundações, contenções, muros de arrimo, obras de terra, interação solo-estrutura e terraplenagem.",
  },
  {
    number: "05",
    icon: iconAtp,
    title: "Avaliação Técnica de Projetos",
    description: "Verificação independente de projetos executivos para o Metrô-SP, consórcios e concessionárias.",
  },
  {
    number: "06",
    icon: iconLaudos,
    title: "Laudos e vistorias",
    description: "Inspeção, diagnóstico de manifestações patológicas e projetos de reforço e retrofit.",
  },
];

const TOOLS = [
  "SAP2000", "TQS", "STRAP", "Revit", "Advance Steel", "Metálicas 3D",
  "Phase2", "Slide", "AutoCAD", "C#", "Claude (IA)",
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
              <div className="flex items-center justify-center w-14 h-14 mb-5 bg-white shadow-sm">
                <img src={service.icon} alt="" className="w-9 h-9 object-contain" />
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
