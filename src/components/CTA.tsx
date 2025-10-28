import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'var(--gradient-primary)',
        }}
      />
      
      <div className="container relative z-10 px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Vamos Realizar Seu Projeto?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Entre em contato conosco e descubra como podemos ajudar a transformar suas ideias em realidade
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Mail className="w-5 h-5" />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
