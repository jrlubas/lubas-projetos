import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section id="contato" className="py-20 relative overflow-hidden clip-notch-br">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "var(--gradient-primary)",
        }}
      />
      <div className="absolute inset-0 z-0 bg-diagonal-stripes opacity-20" />

      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Contato
          </span>
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Vamos conversar sobre seu projeto?
          </h2>
          <p className="mb-10 text-lg text-primary-foreground/85">
            Concepção, cálculo e consultoria técnica em estruturas, fundações e geotecnia.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="gap-2 bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-semibold"
              asChild
            >
              <a href="mailto:engenharia@lubasprojetos.com.br">
                <Mail className="w-5 h-5" />
                engenharia@lubasprojetos.com.br
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none font-semibold"
              asChild
            >
              <a href="tel:+551120368992">
                <Phone className="w-5 h-5" />
                São Paulo/SP: (11) 2036-8992
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none font-semibold"
              asChild
            >
              <a href="tel:+556799999999">
                <Phone className="w-5 h-5" />
                Campo Grande/MS: (67) 9999-9999
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
