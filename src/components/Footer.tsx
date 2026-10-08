import { MapPin, Mail, Phone } from "lucide-react";
import lubasLogo from "@/assets/lubas-logo.png";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#projetos", label: "Projetos" },
  { href: "#lideranca", label: "Liderança" },
  { href: "#clientes", label: "Clientes" },
];

export const Footer = () => {
  const scrollToId = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container px-4 mx-auto py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <img src={lubasLogo} alt="LUBAS - Projetos e Consultoria" className="h-[100px] w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs">
              Engenharia estrutural para mobilidade, infraestrutura e edificações desde 2013.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Navegação</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.href);
                    }}
                    className="text-sm text-primary-foreground/75 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">Contato</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span>
                  Rua Filhas do Sagrado Coração, 51 – Sala 6, Vila Formosa
                  <br />
                  São Paulo/SP · CEP 03364-000
                  <br />
                  Filial: Campo Grande/MS
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="tel:+551120368992" className="hover:text-accent transition-colors">
                  +55 11 2036-8992
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-accent" />
                <a href="mailto:engenharia@lubasprojetos.com.br" className="hover:text-accent transition-colors">
                  engenharia@lubasprojetos.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container px-4 mx-auto py-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Lubas Projetos e Consultoria em Engenharia Ltda.
          </p>
          <p className="text-xs text-primary-foreground/60">Concepção, cálculo e consultoria técnica</p>
        </div>
      </div>
    </footer>
  );
};
