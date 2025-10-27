import { Card } from "@/components/ui/card";
import clientMetro from "@/assets/client-metro.jpg";
import clientConstruction from "@/assets/client-construction.jpg";
import clientPort from "@/assets/client-port.jpg";
import clientInfra from "@/assets/client-infra.jpg";
import clientIndustrial from "@/assets/client-industrial.jpg";
import clientGovernment from "@/assets/client-government.jpg";

export const Clients = () => {
  const clients = [
    { name: "Metrô de São Paulo", logo: clientMetro },
    { name: "Construtora", logo: clientConstruction },
    { name: "Autoridade Portuária", logo: clientPort },
    { name: "Infraestrutura", logo: clientInfra },
    { name: "Indústria", logo: clientIndustrial },
    { name: "Órgão Público", logo: clientGovernment },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Principais Clientes
          </h2>
          <p className="text-lg text-muted-foreground">
            Empresas e instituições que confiam em nossos serviços
          </p>
        </div>

        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="p-6 flex items-center justify-center bg-background hover:-translate-y-1 transition-all duration-300 group"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="relative w-full h-20 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
