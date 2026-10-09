import aboutImage from "@/assets/sobre-lubas.jpg";

export const About = () => {
  return (
    <section id="sobre" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              Sobre a Lubas
            </span>
            <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl leading-tight">
              Projetos de engenharia, verificação e consultoria
            </h2>
            <p className="mb-5 text-muted-foreground leading-relaxed">
              Fundada em 2013, com sede em São Paulo/SP e filial em Campo Grande/MS, a Lubas Projetos e Consultoria em Engenharia elabora e verifica projetos de obras de arte especiais e correntes, edificações e estações de metrô e estações de trens metropolitanos.
            </p>
            <p className="mb-5 text-muted-foreground leading-relaxed">
              Atuamos em estruturas de concreto armado, protendido e pré-moldado, estruturas metálicas e alvenaria estrutural, madeira, fundações, contenções e obras de terra — com projetos desenvolvidos em BIM e coordenação de equipes multidisciplinares.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A empresa é liderada pelos sócios{" "}
              <a href="#lideranca" className="font-semibold text-primary hover:text-accent transition-colors">
                Paulo Lubas e Edson Lubas
              </a>
              , ambos mestres em engenharia de estruturas pela Escola Politécnica da USP.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border-2 border-accent -z-10 hidden md:block" />
            <div className="relative overflow-hidden" style={{ boxShadow: "var(--shadow-hover)" }}>
              <img
                src={aboutImage}
                alt="Obra de infraestrutura projetada pela Lubas"
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
