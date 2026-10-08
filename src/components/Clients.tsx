import metroSp from "@/assets/clients/metro-sp.png";
import sener from "@/assets/clients/sener.png";
import governoSp from "@/assets/clients/governo-sp.png";
import ticTrens from "@/assets/clients/tic-trens.png";
import intertechne from "@/assets/clients/intertechne.png";
import cinemark from "@/assets/clients/cinemark.png";
import egis from "@/assets/clients/egis.png";
import fernandesArquitetos from "@/assets/clients/fernandes-arquitetos.png";
import encibra from "@/assets/clients/encibra.png";
import ceml from "@/assets/clients/ceml.png";
import rioDeJaneiro from "@/assets/clients/rio-de-janeiro.png";
import arx from "@/assets/clients/arx.png";
import lpcLatina from "@/assets/clients/lpc-latina.png";
import bataguassu from "@/assets/clients/bataguassu.png";

const LOGOS = [
  { name: "Metrô de São Paulo", src: metroSp },
  { name: "Sener", src: sener },
  { name: "Governo de SP", src: governoSp },
  { name: "TIC Trens", src: ticTrens },
  { name: "Intertechne", src: intertechne },
  { name: "Cinemark", src: cinemark },
  { name: "Egis", src: egis },
  { name: "Fernandes Arquitetos Associados", src: fernandesArquitetos },
  { name: "Encibra", src: encibra },
  { name: "CEML", src: ceml },
  { name: "Prefeitura do Rio de Janeiro", src: rioDeJaneiro },
  { name: "ARX", src: arx },
  { name: "LPC Latina", src: lpcLatina },
  { name: "Prefeitura de Bataguassu", src: bataguassu },
];

const duplicatedLogos = [...LOGOS, ...LOGOS];

const CLIENT_GROUPS = [
  {
    title: "Transporte e poder público",
    names: ["CPTM", "Metrô BH", "EMTU", "DER-SP", "SP Obras"],
  },
  {
    title: "Engenharia e consultoria",
    names: ["SYSTRA", "Maia Melo Engenharia", "Sondotécnica", "Eduardo Penteado Engenharia"],
  },
  {
    title: "Construção e concessões",
    names: ["CEBE", "Queiroz Galvão", "BRA Engenharia", "UFC Engenharia", "MRS Logística", "Ecorodovias"],
  },
  {
    title: "Setor privado",
    names: ["JBS", "Itaú Unibanco", "Cooperativa Vida Nova", "CBCA"],
  },
];

export const Clients = () => {
  return (
    <section id="clientes" className="py-20 md:py-28 bg-muted/30 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mb-14">
          <span className="inline-block mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            Clientes e parceiros
          </span>
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Com quem trabalhamos
          </h2>
        </div>
      </div>

      <div className="relative mb-16">
        <div className="flex gap-6 animate-scroll-left">
          {duplicatedLogos.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center justify-center bg-background flex-shrink-0 w-52 h-28 p-6"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={client.src}
                alt={client.name}
                loading="lazy"
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="container px-4 mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CLIENT_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-accent">
                {group.title}
              </h3>
              <ul className="space-y-1.5">
                {group.names.map((name) => (
                  <li key={name} className="text-sm text-muted-foreground">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
