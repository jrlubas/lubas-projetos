import { GraduationCap } from "lucide-react";

const PARTNERS = [
  {
    name: "Paulo Henrique Lubas",
    role: "Sócio-diretor · CREA-SP 5063195733",
    bio: [
      "Mestre em Engenharia de Estruturas pela Escola Politécnica da USP (2012). Engenheiro civil pela UFMS (2006).",
      "Pesquisa em pilares mistos de aço e concreto, com software próprio em C# conforme ABNT NBR 8800, AISC e Eurocode 4.",
      "Membro do comitê da ABNT NBR 7187 (pontes, viadutos e passarelas de concreto) desde 2018 e do comitê da ABNT NBR 15200 de 2010 a 2012.",
    ],
  },
  {
    name: "Edson Lubas",
    role: "Sócio-diretor · CREA-SP 5062996694",
    bio: [
      "Mestre em Engenharia de Estruturas, na área de estruturas metálicas, pela Escola Politécnica da USP (2006). Engenheiro civil pela UFMS (2001).",
      "Coautor de dois volumes do Manual de Construção em Aço (CBCA) sobre perfis formados a frio, e autor do programa DimPerfil, disponibilizado pelo CBCA.",
      "Professor convidado do PECE-USP de 2003 a 2006 e professor da FESP e da UNIP de 2008 a 2013.",
    ],
  },
];

export const Leadership = () => {
  return (
    <section id="lideranca" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-diagonal-stripes opacity-20" />
      <div className="container relative px-4 mx-auto">
        <div className="max-w-2xl mb-16">
          <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Liderança
          </span>
          <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
            Sócios-diretores
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            Formação técnica de referência e atuação direta em cada projeto da Lubas.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {PARTNERS.map((partner) => (
            <div key={partner.name} className="bg-background/5 border border-primary-foreground/15 p-8">
              <div className="flex items-start gap-4 mb-5">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 bg-accent/15">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-foreground">{partner.name}</h3>
                  <p className="text-sm text-accent font-medium">{partner.role}</p>
                </div>
              </div>
              <div className="space-y-3">
                {partner.bio.map((paragraph, index) => (
                  <p key={index} className="text-sm text-primary-foreground/75 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-10 border-t border-primary-foreground/15 grid gap-6 sm:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Associados</span>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Eng. Everton Barbosa Batista · Eng. Násser Salomão · Eng. Wesley Gustavo
            </p>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Consultores</span>
            <p className="text-sm text-primary-foreground/80 mt-1">
              Eng. Jorge Takahashi · Eng. Dr. Valdir Pignatta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
