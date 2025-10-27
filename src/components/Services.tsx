import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import concreteImg from "@/assets/concrete-structure.jpg";
import steelImg from "@/assets/steel-structure.jpg";
import metroImg from "@/assets/metro-construction.jpg";

export const Services = () => {
  const services = [
    {
      title: "Estruturas de Concreto",
      description: "Projetos completos de estruturas de concreto armado e protendido para edificações de todos os portes",
      image: concreteImg,
    },
    {
      title: "Estruturas Metálicas",
      description: "Dimensionamento e detalhamento de estruturas em aço para obras industriais, comerciais e especiais",
      image: steelImg,
    },
    {
      title: "Infraestrutura Urbana",
      description: "Projetos para metrôs, OAE, OAC e grandes obras de infraestrutura com experiência comprovada",
      image: metroImg,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas em engenharia estrutural para diversos tipos de projetos
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden transition-all duration-300 hover:-translate-y-2 group"
              style={{ boxShadow: 'var(--shadow-card)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
