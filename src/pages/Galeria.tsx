import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import heroHome from "@/assets/hero-home.jpg";
import heroServicos from "@/assets/hero-servicos.jpg";
import galleryClinic from "@/assets/gallery-clinic.jpg";

const tabs = [
  {
    key: "clinica",
    title: "Clínica",
    images: [
      { src: heroHome, alt: "Recepção da clínica CEMMEFE", caption: "Recepção" },
      { src: galleryClinic, alt: "Sala de exames CEMMEFE", caption: "Sala de exames" },
      { src: heroServicos, alt: "Sala de laudos CEMMEFE", caption: "Sala de laudos" },
      { src: heroHome, alt: "Espaço acolhedor", caption: "Espaço de espera" },
    ],
  },
  {
    key: "equipamentos",
    title: "Equipamentos",
    images: [
      { src: heroServicos, alt: "Equipamento de ultrassonografia", caption: "Ultrassonografia" },
      { src: galleryClinic, alt: "Sala de procedimentos", caption: "Sala de procedimentos" },
      { src: heroHome, alt: "Equipamento moderno", caption: "Equipamentos modernos" },
      { src: heroServicos, alt: "Equipamento de diagnóstico", caption: "Diagnóstico por imagem" },
    ],
  },
  {
    key: "eventos",
    title: "Eventos",
    images: [
      { src: heroHome, alt: "Evento CEMMEFE", caption: "Encontro com pacientes" },
      { src: galleryClinic, alt: "Palestra CEMMEFE", caption: "Palestra educativa" },
      { src: heroServicos, alt: "Workshop CEMMEFE", caption: "Workshop da equipe" },
      { src: heroHome, alt: "Confraternização CEMMEFE", caption: "Confraternização" },
    ],
  },
];

const Galeria = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  const scrollRef = useRef<HTMLDivElement>(null);

  const active = tabs.find((t) => t.key === activeTab) ?? tabs[0];

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <>
      <SeoHead title="Galeria | CEMMEFE - Nossa Estrutura" description="Conheça a estrutura moderna e acolhedora da CEMMEFE com equipamentos de última geração." path="/galeria" />

      <HeroBanner title="Nossa Estrutura" subtitle="Conheça nosso espaço moderno e acolhedor" />

      <section className="bg-[#F3F3F0] py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex items-center gap-8 md:gap-12 border-b border-border mb-8 md:mb-12">
            {tabs.map((t) => {
              const isActive = t.key === activeTab;
              return (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`relative pb-3 text-base md:text-lg font-medium transition-colors ${
                    isActive ? "text-primary" : "text-[#545454] hover:text-secondary"
                  }`}
                >
                  {t.title}
                  {isActive && (
                    <motion.span
                      layoutId="gallery-tab-underline"
                      className="absolute left-0 right-0 -bottom-px h-[3px] bg-primary rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4"
            style={{ scrollbarWidth: "none" }}
          >
            {active.images.map((img, i) => (
              <button
                key={`${active.key}-${i}`}
                onClick={() => setLightbox(img.src)}
                className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-[32%] lg:w-[28%] group text-left"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[240px] md:h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                {img.caption && (
                  <p className="mt-3 text-sm md:text-base font-medium text-secondary">
                    {img.caption}
                  </p>
                )}
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="h-1 flex-1 max-w-xs bg-border rounded-full overflow-hidden mr-6">
              <div className="h-full w-1/3 bg-primary rounded-full" />
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Anterior"
                className="w-12 h-12 flex items-center justify-center rounded-md bg-muted text-secondary hover:bg-muted/70 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Próximo"
                className="h-12 px-5 flex items-center gap-2 rounded-md bg-primary text-secondary font-medium hover:opacity-90 transition-opacity"
              >
                Próximo
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-white" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <img src={lightbox} alt="Galeria" className="max-w-full max-h-[85vh] rounded-lg object-contain" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Galeria;
