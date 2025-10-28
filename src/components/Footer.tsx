import lubasLogo from "@/assets/lubas-logo.png";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center">
            <img 
              src={lubasLogo} 
              alt="LUBAS - Projetos e Consultoria" 
              className="h-24 w-auto"
            />
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
