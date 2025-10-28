import { Building2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold text-foreground">Engenharia Estrutural</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Todos os direitos reservados
            </p>
            <p className="text-sm text-muted-foreground">
              Expertise em projetos estruturais desde 2013
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
