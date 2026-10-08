import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/projects/louveira-1.jpg";

const STATS = [
  { value: "2013", label: "Ano de fundação" },
  { value: "4 mil", label: "Folhas verificadas no Metrô-SP" },
  { value: "14 km", label: "Vigas protendidas verificadas" },
  { value: "12", label: "Estações do Metrô BH em BIM" },
];

export const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex items-center pt-28 pb-32 lg:pt-36 lg:pb-40"
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(100deg, hsl(var(--primary) / 0.97) 0%, hsl(var(--primary) / 0.93) 38%, hsl(var(--primary) / 0.55) 100%), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-diagonal-stripes opacity-40" />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block mb-5 px-4 py-1.5 border border-accent text-accent text-xs font-bold uppercase tracking-widest animate-fade-in">
            Engenharia estrutural desde 2013
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl animate-fade-in">
            Engenharia para mobilidade,{" "}
            <span className="text-accent">infraestrutura</span> e edificações
          </h1>
          <p className="mb-10 max-w-xl text-lg text-primary-foreground/85 leading-relaxed animate-fade-in-delay">
            Elaboramos e verificamos projetos de obras de arte especiais e correntes,
            edificações e estações de metrô e de trens metropolitanos — de São Paulo/SP
            a Campo Grande/MS.
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
