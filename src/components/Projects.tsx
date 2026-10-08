import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

import louveira1 from "@/assets/projects/louveira-1.jpg";
import louveira2 from "@/assets/projects/louveira-2.jpg";
import louveira3 from "@/assets/projects/louveira-3.jpg";
import louveira4 from "@/assets/projects/louveira-4.jpg";
import valinhos1 from "@/assets/projects/valinhos-1.jpg";
import valinhos2 from "@/assets/projects/valinhos-2.jpg";
import valinhos3 from "@/assets/projects/valinhos-3.jpg";
import valinhos4 from "@/assets/projects/valinhos-4.jpg";
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
import bataguassu1 from "@/assets/projects/bataguassu-1.jpg";
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

interface Project {
  id: string;
  category: Category;
  title: string;
  location: string;
  client: string;
  architecture?: string;
  metricLabel?: string;
  metricValue?: string;
  scope: string;
  cover: string;
  gallery: string[];
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
    gallery: [valinhos1, valinhos2, valinhos3, valinhos4],
  },
  {
    id: "luz",
    category: "Mobilidade sobre trilhos",
    title: "Acesso Estação da Luz – Sala São Paulo",
    location: "São Paulo/SP · 2019",
    client: "CPTM / EBEI Engenharia",
    architecture: "Fernandes Arquitetos Associados",
    metricLabel: "ÁREA",
    metricValue: "1.687 m²",
    scope: "Estruturas de concreto, estruturas metálicas e fundações",
    cover: luz1,
    gallery: [luz1, luz2, luz3],
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
    gallery: [pacoBataguassu, bataguassu1, bataguassu2, bataguassu3],
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
  },
  {
    id: "laudos",
    category: "Laudos e vistorias",
    title: "Inspeção e diagnóstico de estruturas existentes",
    location: "Arsenal de Guerra (RJ) · Cinemark Jardins · Píer de Grãos (PA)",
    client: "Ecorodovias · Cinemark · LPC Latina / Hidrovias",
    scope: "Inspeção estrutural, retrofit e laudo técnico de inspeção estrutural em edificações e instalações portuárias.",
    cover: laudos1,
    gallery: [laudos1, laudos2, laudos3],
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

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
            Projetos
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Principais projetos
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alguns de nossos projetos
            Mais de 200 obras e serviços, de estações de metrô a pontes, edificações, cimentas, prédios e verificação técnica independente.
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden cursor-pointer bg-card"
              style={{ boxShadow: "var(--shadow-card)" }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.cover}
                  alt={project.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground rounded-none font-semibold">
                  {project.category}
                </Badge>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-right">
                  <h3 className="text-lg font-semibold text-primary-foreground leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary-foreground/80">{project.location}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/70">
                    Ver projeto
                  </p>
                </div>
              </div>
            </div>
          ))}
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
            <CarouselContent>
              {selectedProject?.gallery.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 overflow-hidden" style={{ boxShadow: "var(--shadow-card)" }}>
                    <img
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      loading="lazy"
                      className="object-cover w-full h-full"
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
    </section>
  );
};
