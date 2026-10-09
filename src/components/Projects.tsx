import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { PROJECTS_LIST } from "@/data/projectsList";
import { ListChecks } from "lucide-react";

import louveira1 from "@/assets/projects/louveira-1.jpg";
import louveira2 from "@/assets/projects/louveira-2.jpg";
import louveira3 from "@/assets/projects/louveira-3.jpg";
import louveira4 from "@/assets/projects/louveira-4.jpg";
import valinhos1 from "@/assets/projects/valinhos-1.jpg";
import valinhos2 from "@/assets/projects/valinhos-2.jpg";
import valinhos3 from "@/assets/projects/valinhos-3.jpg";
import valinhos4 from "@/assets/projects/valinhos-4.jpg";
import valinhos5 from "@/assets/projects/valinhos-5.jpg";
import valinhos6 from "@/assets/projects/valinhos-6.jpg";
import luz1 from "@/assets/projects/luz-1.jpg";
import luz2 from "@/assets/projects/luz-2.jpg";
import luz3 from "@/assets/projects/luz-3.jpg";
import eldorado1 from "@/assets/projects/eldorado-1.jpg";
import eldorado2 from "@/assets/projects/eldorado-2.jpg";
import eldorado3 from "@/assets/projects/eldorado-3.jpg";
import morroGrande1 from "@/assets/projects/morro-grande-1.jpg";
import morroGrande2 from "@/assets/projects/morro-grande-2.jpg";
import morroGrande3 from "@/assets/projects/morro-grande-3.jpg";
import tunelPaulista1 from "@/assets/projects/tunel-paulista-1.jpg";
import tunelPaulista2 from "@/assets/projects/tunel-paulista-2.jpg";
import tunelPaulista3 from "@/assets/projects/tunel-paulista-3.jpg";
import oaeGrupo11 from "@/assets/projects/oae-grupo11-1.jpg";
import ponteVidaNova1 from "@/assets/projects/ponte-vidanova-1.jpg";
import ponteVidaNova2 from "@/assets/projects/ponte-vidanova-2.jpg";
import pacoBataguassu from "@/assets/projects/paco-bataguassu-render.jpg";
import bataguassu2 from "@/assets/projects/bataguassu-2.jpg";
import bataguassu3 from "@/assets/projects/bataguassu-3.jpg";
import arenaSalvador1 from "@/assets/projects/arena-salvador-1.jpg";
import arenaSalvador2 from "@/assets/projects/arena-salvador-2.jpg";
import arenaSalvador3 from "@/assets/projects/arena-salvador-3.jpg";
import vilaPinheiros1 from "@/assets/projects/vila-pinheiros-1.jpg";
import vilaPinheiros2 from "@/assets/projects/vila-pinheiros-2.jpg";
import vilaPinheiros3 from "@/assets/projects/vila-pinheiros-3.jpg";
import outletPremium1 from "@/assets/projects/outlet-premium-1.jpg";
import outletPremium2 from "@/assets/projects/outlet-premium-2.jpg";
import cinemarkWestPlaza1 from "@/assets/projects/cinemark-west-plaza-1.jpg";
import cinemarkWestPlaza2 from "@/assets/projects/cinemark-west-plaza-2.jpg";
import cinemarkWestPlaza3 from "@/assets/projects/cinemark-west-plaza-3.jpg";
import boaEsperanca1 from "@/assets/projects/boa-esperanca-1.jpg";
import boaEsperanca2 from "@/assets/projects/boa-esperanca-2.jpg";
import boaEsperanca3 from "@/assets/projects/boa-esperanca-3.jpg";
import boaEsperanca4 from "@/assets/projects/boa-esperanca-4.jpg";
import jacuPessego1 from "@/assets/projects/jacu-pessego-1.jpg";
import jacuPessego2 from "@/assets/projects/jacu-pessego-2.jpg";
import jacuPessego3 from "@/assets/projects/jacu-pessego-3.jpg";
import jacuPessego4 from "@/assets/projects/jacu-pessego-4.jpg";
import ragueb1 from "@/assets/projects/ragueb-chohfi-1.jpg";
import ragueb2 from "@/assets/projects/ragueb-chohfi-2.jpg";
import ragueb3 from "@/assets/projects/ragueb-chohfi-3.jpg";
import ragueb4 from "@/assets/projects/ragueb-chohfi-4.jpg";
import laudos1 from "@/assets/projects/laudos-1.jpg";
import laudos2 from "@/assets/projects/laudos-2.jpg";
import laudos3 from "@/assets/projects/laudos-3.jpg";

const CATEGORIES = [
  "Mobilidade sobre trilhos",
  "Pontes e viadutos",
  "Edificações",
  "Avaliação Técnica de Projetos",
  "Laudos e vistorias",
] as const;

type Category = (typeof CATEGORIES)[number];

type GalleryLayout =
  | "single"
  | "stack2"
  | "grid4"
  | "grid3x2"
  | "feature-top2"
  | "feature-top3"
  | "feature-left";

interface Project {
  id: string;
  category: Category;
  title: string;
  location: string;
  description?: string;
  client: string;
  architecture?: string;
  metricLabel?: string;
  metricValue?: string;
  scope: string;
  cover: string;
  gallery: string[];
  galleryLayout?: GalleryLayout;
}

const PROJECTS: Project[] = [
  {
    id: "louveira",
    category: "Mobilidade sobre trilhos",
    title: "Estação Louveira",
    location: "Trem Intercidades · Louveira/SP",
    client: "TIC Trens",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "3.670 m²",
    scope: "Fundações, contenções e obras de terra, terraplenagem, pré-moldados, metálicas e piso estrutural · BIM",
    cover: louveira1,
    gallery: [louveira1, louveira2, louveira3, louveira4],
    galleryLayout: "grid4",
  },
  {
    id: "valinhos",
    category: "Mobilidade sobre trilhos",
    title: "Estação Valinhos",
    location: "Trem Intercidades · Valinhos/SP",
    client: "TIC Trens",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "3.760 m²",
    scope: "Fundações, contenções e obras de terra, terraplenagem, estruturas de concreto e pré-moldadas, estruturas metálicas e piso estrutural · BIM",
    cover: valinhos1,
    gallery: [valinhos2, valinhos1, valinhos5, valinhos6, valinhos3, valinhos4],
    galleryLayout: "grid3x2",
  },
  {
    id: "luz",
    category: "Mobilidade sobre trilhos",
    title: "Acesso Estação da Luz – Sala São Paulo",
    location: "São Paulo/SP · 2019",
    description:
      "Ligação de pedestres entre a Estação da Luz e a Sala São Paulo, com passarela coberta e escadas de acesso, implantada junto ao conjunto histórico da Luz.",
    client: "CPTM / EBEI Engenharia",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "1.687 m²",
    scope: "Estruturas de concreto, estruturas metálicas e fundações",
    cover: luz1,
    gallery: [luz1, luz2, luz3],
    galleryLayout: "feature-left",
  },
  {
    id: "eldorado",
    category: "Mobilidade sobre trilhos",
    title: "Estação Novo Eldorado",
    location: "Metrô BH · Contagem/MG · 2023",
    client: "Metrô BH / PINI Group",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "1.900 m²",
    scope: "Estruturas de concreto e metálicas, fundações e contenções",
    cover: eldorado1,
    gallery: [eldorado1, eldorado2, eldorado3],
    galleryLayout: "feature-top2",
  },
  {
    id: "morro-grande",
    category: "Mobilidade sobre trilhos",
    title: "Pátio Morro Grande",
    location: "Linha 6-Laranja · São Paulo/SP · 2022",
    client: "SENER",
    metricLabel: "ÁREA",
    metricValue: "16.070 m²",
    scope: "Fundações, estruturas de concreto e estruturas pré-moldadas e metálicas, piso estrutural · BIM",
    cover: morroGrande1,
    gallery: [morroGrande1, morroGrande2, morroGrande3],
    galleryLayout: "feature-top2",
  },
  {
    id: "tunel-paulista",
    category: "Mobilidade sobre trilhos",
    title: "Túnel de pedestres – Estação Paulista",
    location: "São Paulo/SP · 2019",
    client: "Metrô-SP / Intertechne",
    metricLabel: "EXTENSÃO",
    metricValue: "90 m",
    scope: "Estruturas, interação solo-estrutura e impermeabilização · BIM",
    cover: tunelPaulista1,
    gallery: [tunelPaulista1, tunelPaulista2, tunelPaulista3],
    galleryLayout: "feature-left",
  },
  {
    id: "oae-grupo11",
    category: "Pontes e viadutos",
    title: "OAE Grupo 11 – Elevado de acesso",
    location: "Embu das Artes/SP · 2018",
    client: "Cooperativa Habitacional Vida Nova",
    metricLabel: "EXTENSÃO",
    metricValue: "150 m",
    scope: "Estruturas de concreto, fundações e projeto geométrico. Considerado o maior viaduto em área privativa do Brasil.",
    cover: oaeGrupo11,
    gallery: [oaeGrupo11],
  },
  {
    id: "ponte-vidanova",
    category: "Pontes e viadutos",
    title: "Ponte sobre o Córrego Vida Nova",
    location: "Embu das Artes/SP · 2018",
    client: "Cooperativa Habitacional Vida Nova",
    metricLabel: "ÁREA",
    metricValue: "1.200 m²",
    scope: "Fundações, contenções, estruturas de concreto e protensão",
    cover: ponteVidaNova1,
    gallery: [ponteVidaNova1, ponteVidaNova2],
    galleryLayout: "stack2",
  },
  {
    id: "bataguassu",
    category: "Edificações",
    title: "Paço Municipal de Bataguassu",
    location: "Bataguassu/MS · 2019",
    client: "Prefeitura Municipal de Bataguassu",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "7.500 m²",
    scope: "Coordenação, estruturas, fundações e instalações elétricas, hidráulicas, fotovoltaicas e de lógica",
    cover: pacoBataguassu,
    gallery: [pacoBataguassu, bataguassu2, bataguassu3],
    galleryLayout: "feature-top2",
  },
  {
    id: "arena-salvador",
    category: "Edificações",
    title: "Complexo Multiuso Arena Salvador",
    location: "Salvador/BA · 2023",
    client: "UFC Engenharia / Prefeitura de Salvador",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "15.014 m²",
    scope: "Fundações, estruturas de concreto, pré-moldadas e metálicas · BIM",
    cover: arenaSalvador1,
    gallery: [arenaSalvador1, arenaSalvador2, arenaSalvador3],
    galleryLayout: "feature-top2",
  },
  {
    id: "vila-pinheiros",
    category: "Edificações",
    title: "Shopping Vila dos Pinheiros",
    location: "Indaiatuba/SP · 2021",
    client: "Concretiza3D Imóveis",
    architecture: "Marcos Tomanik",
    metricLabel: "ÁREA",
    metricValue: "9.400 m²",
    scope: "Estruturas metálicas (coberturas e marquises) · BIM",
    cover: vilaPinheiros1,
    gallery: [vilaPinheiros1, vilaPinheiros2, vilaPinheiros3],
    galleryLayout: "feature-top2",
  },
  {
    id: "outlet-premium",
    category: "Edificações",
    title: "Outlet Premium Grande São Paulo",
    location: "Arujá/SP · 2019",
    client: "Tela Administradora e Incorporadora",
    architecture: "Lopes Dias Arquitetura",
    metricLabel: "ÁREA",
    metricValue: "13.800 m²",
    scope: "Estruturas metálicas de cobertura",
    cover: outletPremium1,
    gallery: [outletPremium1, outletPremium2],
    galleryLayout: "stack2",
  },
  {
    id: "cinemark-west-plaza",
    category: "Edificações",
    title: "Cinemark Shopping West Plaza",
    location: "São Paulo/SP · 2014",
    description:
      "Complexo de cinemas construído sobre a cobertura do shopping: estruturas metálicas, cobertura e fechamentos do novo volume, que abriga as salas e a circulação envidraçada.",
    client: "Cinemark",
    metricLabel: "ÁREA",
    metricValue: "4.750 m²",
    scope: "Estruturas metálicas, cobertura e fechamentos",
    cover: cinemarkWestPlaza1,
    gallery: [cinemarkWestPlaza1, cinemarkWestPlaza2, cinemarkWestPlaza3],
    galleryLayout: "feature-top2",
  },
  {
    id: "boa-esperanca",
    category: "Avaliação Técnica de Projetos",
    title: "Estação Boa Esperança",
    location: "Linha 15-Prata · São Paulo/SP · 2023",
    client: "CEBE – Consórcio Expresso Boa Esperança / Metrô-SP",
    metricLabel: "DOCUMENTOS VERIFICADOS",
    metricValue: "195",
    scope: "Fundações, estruturas de concreto e metálicas: desenhos e memórias de cálculo",
    cover: boaEsperanca1,
    gallery: [boaEsperanca1, boaEsperanca2, boaEsperanca3, boaEsperanca4],
    galleryLayout: "feature-top3",
  },
  {
    id: "jacu-pessego",
    category: "Avaliação Técnica de Projetos",
    title: "Estação Jacu Pêssego",
    location: "Linha 15-Prata · São Paulo/SP · 2023",
    client: "CEBE – Consórcio Expresso Boa Esperança / Metrô-SP",
    metricLabel: "DOCUMENTOS VERIFICADOS",
    metricValue: "26",
    scope: "Fundações, estruturas de concreto e embutidos: desenhos e memórias de cálculo",
    cover: jacuPessego1,
    gallery: [jacuPessego1, jacuPessego2, jacuPessego3, jacuPessego4],
    galleryLayout: "feature-top3",
  },
  {
    id: "ragueb-chohfi",
    category: "Avaliação Técnica de Projetos",
    title: "Pátio Ragueb Chohfi",
    location: "Linha 15-Prata · São Paulo/SP · 2023",
    client: "CEBE – Consórcio Expresso Boa Esperança / Metrô-SP",
    metricLabel: "DOCUMENTOS VERIFICADOS",
    metricValue: "92",
    scope: "Fundações, estruturas de concreto e metálicas: desenhos e memórias de cálculo",
    cover: ragueb1,
    gallery: [ragueb1, ragueb2, ragueb3, ragueb4],
    galleryLayout: "feature-top3",
  },
  {
    id: "arsenal-de-guerra",
    category: "Laudos e vistorias",
    title: "Arsenal de Guerra",
    location: "Rio de Janeiro/RJ",
    client: "Ecorodovias",
    scope: "Inspeção estrutural e laudo técnico de edificações e instalações portuárias",
    cover: laudos1,
    gallery: [laudos1],
  },
  {
    id: "cinemark-jardins",
    category: "Laudos e vistorias",
    title: "Cinemark Jardins",
    location: "Shopping Jardins",
    client: "Cinemark",
    scope: "Laudo técnico de inspeção estrutural das coberturas e arquibancadas",
    cover: laudos2,
    gallery: [laudos2],
  },
  {
    id: "pier-de-graos",
    category: "Laudos e vistorias",
    title: "Dolfins do Píer de Grãos",
    location: "Porto de Vila do Conde/PA · 2015",
    client: "LPC Latina / Hidrovias",
    scope: "Laudo de avaliação e projeto de restauração e reforço",
    cover: laudos3,
    gallery: [laudos3],
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

  const filteredProjects = activeCategory
    ? PROJECTS.filter((p) => p.category === activeCategory)
    : PROJECTS;

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="projetos" className="py-20 md:py-28 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mb-10">
          <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Experiência
          </span>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-4">
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Principais projetos
            </h2>
            <button
              onClick={() => setIsListOpen(true)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-primary transition-colors"
            >
              <ListChecks className="w-4 h-4" />
              Ver lista
            </button>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Mais de 200 obras e serviços, de estações de metrô a pontes, edificações, galpões e pisos industriais, cinemas e verificação técnica independente.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory((current) => (current === category ? null : category))}
              className={`px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors border ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          {filteredProjects.map((project) => {
            const index = PROJECTS.findIndex((p) => p.id === project.id) + 1;
            const details: { label: string; value: string }[] = [
              { label: "Cliente", value: project.client },
              ...(project.architecture ? [{ label: "Arquitetura", value: project.architecture }] : []),
              { label: "Escopo", value: project.scope },
            ];

            return (
              <div
                key={project.id}
                className="grid gap-6 lg:grid-cols-[320px_1fr] pb-10 border-b border-border last:border-b-0"
              >
                <div
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent">
                    <span aria-hidden className="text-[0.6rem]">◆</span>
                    {String(index).padStart(2, "0")} · {project.category}
                  </span>

                  <h3 className="mt-2 text-2xl font-bold text-foreground leading-snug group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.location.split("·").map((part, i) => (
                    <p key={i} className="text-muted-foreground">
                      {part.trim()}
                    </p>
                  ))}

                  {project.description && (
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  )}

                  {project.metricLabel && (
                    <div className="mt-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-accent">
                        {project.metricLabel}
                      </span>
                      <p className="text-4xl font-bold text-foreground leading-tight">{project.metricValue}</p>
                    </div>
                  )}

                  <dl className="mt-4 border-t border-border divide-y divide-border text-sm">
                    {details.map(({ label, value }) => (
                      <div key={label} className="flex gap-4 py-2.5">
                        <dt className="w-24 flex-shrink-0 text-xs font-bold uppercase tracking-widest text-muted-foreground pt-0.5">
                          {label}
                        </dt>
                        <dd className="text-foreground leading-relaxed">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] max-h-[420px] sm:max-h-[480px] lg:max-h-[560px]">
                  {(() => {
                    const g = project.gallery;
                    const tile = (image: string, i: number, style?: React.CSSProperties) => (
                      <div
                        key={i}
                        className="relative w-full h-full overflow-hidden cursor-pointer bg-card"
                        style={style}
                        onClick={() => handleProjectClick(project)}
                      >
                        <img
                          src={image}
                          alt={`${project.title} ${i + 1}`}
                          loading="lazy"
                          className="block object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    );

                    const layout: GalleryLayout =
                      project.galleryLayout ??
                      (g.length === 1
                        ? "single"
                        : g.length === 2
                        ? "stack2"
                        : g.length === 4
                        ? "grid4"
                        : "feature-left");

                    if (layout === "single") {
                      return <div className="h-full">{tile(g[0], 0)}</div>;
                    }

                    if (layout === "stack2") {
                      return (
                        <div className="grid grid-rows-2 gap-2 h-full">
                          {g.map((image, i) => tile(image, i))}
                        </div>
                      );
                    }

                    if (layout === "grid4") {
                      return (
                        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
                          {g.map((image, i) => tile(image, i))}
                        </div>
                      );
                    }

                    if (layout === "grid3x2") {
                      return (
                        <div className="grid grid-cols-2 grid-rows-3 gap-2 h-full">
                          {g.map((image, i) => tile(image, i))}
                        </div>
                      );
                    }

                    if (layout === "feature-top2" || layout === "feature-top3") {
                      const cols = layout === "feature-top2" ? "grid-cols-2" : "grid-cols-3";
                      return (
                        <div className="grid h-full gap-2" style={{ gridTemplateRows: "2fr 1fr" }}>
                          {tile(g[0], 0)}
                          <div className={`grid ${cols} gap-2`}>
                            {g.slice(1).map((image, i) => tile(image, i + 1))}
                          </div>
                        </div>
                      );
                    }

                    const stackCount = g.length - 1;
                    return (
                      <div
                        className="grid grid-cols-2 gap-2 h-full"
                        style={{ gridTemplateRows: `repeat(${stackCount}, 1fr)` }}
                      >
                        {tile(g[0], 0, { gridColumn: "1 / 2", gridRow: `1 / span ${stackCount}` })}
                        {g.slice(1).map((image, i) =>
                          tile(image, i + 1, { gridColumn: "2 / 3", gridRow: `${i + 1} / span 1` })
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <Badge className="w-fit mb-2 bg-accent text-accent-foreground rounded-none font-semibold">
              {selectedProject?.category}
            </Badge>
            <DialogTitle className="text-2xl font-bold text-foreground pr-8">
              {selectedProject?.title}
            </DialogTitle>
            <p className="text-muted-foreground pr-8">{selectedProject?.location}</p>
          </DialogHeader>

          <Carousel className="w-full mt-2">
            <CarouselContent className="items-center">
              {selectedProject?.gallery.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex items-center justify-center">
                    <img
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      loading="lazy"
                      className="max-h-[70vh] w-auto max-w-full object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {selectedProject && selectedProject.gallery.length > 1 && (
              <>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </>
            )}
          </Carousel>

          <div className="grid gap-4 mt-4 sm:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Cliente</span>
              <p className="text-sm text-foreground">{selectedProject?.client}</p>
            </div>
            {selectedProject?.architecture && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Arquitetura</span>
                <p className="text-sm text-foreground">{selectedProject.architecture}</p>
              </div>
            )}
            {selectedProject?.metricLabel && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  {selectedProject.metricLabel}
                </span>
                <p className="text-sm text-foreground">{selectedProject.metricValue}</p>
              </div>
            )}
            <div className="sm:col-span-2">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Escopo</span>
              <p className="text-sm text-foreground leading-relaxed">{selectedProject?.scope}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isListOpen} onOpenChange={setIsListOpen}>
        <DialogContent className="max-w-3xl max-h-[85vh] flex flex-col">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground pr-8">
              Lista completa de projetos
            </DialogTitle>
            <p className="text-sm text-muted-foreground">
              110 obras e serviços, por setor e ano.
            </p>
          </DialogHeader>

          <div className="overflow-y-auto pr-2 -mr-2 space-y-8">
            {PROJECTS_LIST.map((section) => (
              <div key={section.title}>
                <h3 className="sticky top-0 bg-background py-2 text-xs font-bold uppercase tracking-widest text-accent border-b border-border">
                  {section.title}
                </h3>
                <ul className="divide-y divide-border">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex gap-4 py-3">
                      <span className="flex-shrink-0 w-16 text-xs font-semibold text-muted-foreground pt-0.5">
                        {item.year}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground leading-snug">{item.name}</p>
                        <p className="text-sm text-muted-foreground leading-snug">{item.meta}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
