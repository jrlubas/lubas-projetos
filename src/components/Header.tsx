import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import lubasLogo from "@/assets/lubas-logo.png";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#lideranca", label: "Liderança" },
  { href: "#clientes", label: "Clientes" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToId = (id: string) => {
    setMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-28">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#inicio");
            }}
            className="flex items-center"
          >
            <img
              src={lubasLogo}
              alt="LUBAS - Projetos e Consultoria"
              className={`w-auto transition-all duration-300 ${scrolled ? "h-20" : "h-[100px] brightness-0 invert"}`}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(link.href);
                }}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                  scrolled
                    ? "text-foreground hover:text-accent"
                    : "text-primary-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div
              className={`flex flex-col gap-0.5 text-sm font-semibold transition-colors ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              <a href="tel:+551120368992" className="flex items-center gap-2 hover:text-accent">
                <Phone className="w-4 h-4 text-accent" />
                São Paulo/SP: (11) 2036-8992
              </a>
              <a href="tel:+556799999999" className="flex items-center gap-2 hover:text-accent">
                <Phone className="w-4 h-4 text-accent" />
                Campo Grande/MS: (67) 9999-9999
              </a>
            </div>
            <Button
              variant="default"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-semibold"
              onClick={() => scrollToId("#contato")}
            >
              Fale Conosco
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-background border-t border-border shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToId(link.href);
                }}
                className="py-3 text-sm font-semibold uppercase tracking-wide text-foreground border-b border-border last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="default"
              className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-none font-semibold"
              onClick={() => scrollToId("#contato")}
            >
              Fale Conosco
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
