import lubasLogo from "@/assets/lubas-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={lubasLogo} 
              alt="LUBAS - Projetos e Consultoria" 
              className="h-18 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
