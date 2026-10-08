import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const STATS = [
  { value: "2013", label: "Ano de fundação" },
  { value: "10 mil", label: "Folhas verificadas" },
  { value: "14 km", label: "Vigas protendidas verificadas" },
  { value: "200", label: "Mais de duzentos projetos realizados" },
];

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center pt-28 pb-32 lg:pt-36 lg:pb-40"
    >
      <div className="absolute inset-0 z-0 overflow-hidden bg-primary">
        <div className="container relative h-full px-4 mx-auto">
          <img
            src={heroImage}
            alt=""
            className="absolute right-0 top-0 h-full w-auto max-w-none origin-top-right scale-[1.1] translate-x-6"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 40%, black 92%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, transparent 0%, black 40%, black 92%, transparent 100%)",
            }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(100deg, hsl(var(--primary) / 0.97) 0%, hsl(var(--primary) / 0.93) 38%, hsl(var(--primary) / 0.55) 100%)`,
          }}
        />
        <div className="absolute inset-0 bg-diagonal-stripes opacity-40" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block mb-5 px-4 py-1.5 border border-accent text-accent text-xs font-bold uppercase tracking-widest animate-fade-in">
            PROJETOS DE ENGENHARIA DESDE 2013
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in">
            Engenharia para edificações,{" "}
            <span className="text-accent">infraestrutura</span> e mobilidade
          </h1>
          <p className="mb-10 max-w-xl text-lg text-primary-foreground/85 leading-relaxed animate-fade-in-delay">
            <span className="block mb-3">
              Elaboramos projetos de edificações, obras de arte especiais e correntes, estações de metrô e estações de trens metropolitanos
            </span>
            <span className="block mb-3">
              Coordenação multidisciplinar, análise e verificação de projetos e compatibilização BIM
            </span>
            <span className="block">
              Projetos multidisciplinares desenvolvidos em BIM LOD 400.
            </span>
          </p>
          <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-delay-2">
            <Button
              size="lg"
              className="group bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-semibold"
              onClick={() => document.getElementById("projetos")?.scrollIntoView({ behavior: "smooth" })}
            >
              Nossos Projetos
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none font-semibold"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile stats (floating bar below is desktop-only) */}
          <div className="grid grid-cols-2 gap-4 mt-12 md:hidden animate-fade-in-delay-2">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent pl-3">
                <div className="text-2xl font-bold text-accent">{stat.value}</div>
                <div className="text-xs font-medium text-primary-foreground/80 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating stats bar */}
      <div className="absolute left-0 right-0 bottom-0 translate-y-1/2 z-20 hidden md:block">
        <div className="container px-4 mx-auto">
          <div
            className="grid grid-cols-4 bg-background border border-border"
            style={{ boxShadow: "var(--shadow-hover)" }}
          >
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center text-center px-4 py-7 ${
                  index !== STATS.length - 1 ? "border-r border-border" : ""
                }`}
              >
                <div className="text-3xl font-bold text-accent">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-muted-foreground leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
