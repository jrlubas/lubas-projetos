import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import projectConcrete from "@/assets/project-concrete.jpg";
import projectQuality from "@/assets/project-quality.jpg";
import projectBim from "@/assets/project-bim.jpg";
import projectFoundation from "@/assets/project-foundation.jpg";
import projectSteel from "@/assets/project-steel.jpg";
import projectInspection from "@/assets/project-inspection.jpg";

interface ProjectCategory {
  title: string;
  image: string;
  gallery: string[];
}

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectCategory | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const projects: ProjectCategory[] = [
    {
      title: "Projetos de Estruturas de Concreto",
      image: projectConcrete,
      gallery: [projectConcrete, projectConcrete, projectConcrete], // Placeholder - adicionar mais imagens depois
    },
    {
      title: "Controle de Qualidade de Projetos",
      image: projectQuality,
      gallery: [projectQuality, projectQuality, projectQuality],
    },
    {
      title: "Projetos em BIM",
      image: projectBim,
      gallery: [projectBim, projectBim, projectBim],
    },
    {
      title: "Projetos de Fundações e Obras de Terra",
      image: projectFoundation,
      gallery: [projectFoundation, projectFoundation, projectFoundation],
    },
    {
      title: "Projetos de Estruturas Metálicas",
      image: projectSteel,
      gallery: [projectSteel, projectSteel, projectSteel],
    },
    {
      title: "Laudos e Vistorias",
      image: projectInspection,
      gallery: [projectInspection, projectInspection, projectInspection],
    },
  ];

  const handleProjectClick = (project: ProjectCategory) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="projetos" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Projetos Realizados
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça nosso portfólio de projetos em diversas especialidades
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 group"
              style={{ boxShadow: "var(--shadow-card)" }}
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-primary-foreground font-semibold text-lg px-4 text-center">
                    Ver Galeria
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground pr-8">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <Carousel className="w-full mt-4">
            <CarouselContent>
              {selectedProject?.gallery.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-96 overflow-hidden rounded-lg" style={{ boxShadow: "var(--shadow-card)" }}>
                    <img
                      src={image}
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
};
