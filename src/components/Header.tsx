import { useState, useEffect } from "react";
import lubasLogo from "@/assets/lubas-logo.png";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img 
              src={lubasLogo} 
              alt="LUBAS - Projetos e Consultoria" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
