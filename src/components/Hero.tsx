import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-engineering.jpg";
import lubasLogo from "@/assets/lubas-logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.95), hsl(var(--primary) / 0.85)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center animate-fade-in">
            <div className="bg-background/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <img 
                src={lubasLogo} 
                alt="LUBAS - Projetos e Consultoria" 
                className="h-54 md:h-72 w-auto"
              />
            </div>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl animate-fade-in">
            Engenharia Estrutural de Excelência
          </h1>
          <p className="mb-8 text-xl text-primary-foreground/90 md:text-2xl animate-fade-in-delay">
            Projetos de estruturas para obras prediais, industriais, portuárias e de infraestrutura urbana
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center animate-fade-in-delay-2">
            <Button 
              size="lg" 
              variant="secondary" 
              className="group"
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Nossos Projetos
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
