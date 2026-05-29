import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";

const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const c = (id: string) => `https://res.cloudinary.com/${CLOUD}/image/upload/${id}`;

const tabs = [
  {
    key: "clinica",
    title: "Clínica",
    images: [
      c("91cc9a95-38e4-4248-a8ed-7bc0364d9bd4_ndarak"),
    ],
  },
  {
    key: "equipamentos",
    title: "Equipamentos",
    images: [
      c("0G6A9997_bbrrto"),
      c("0G6A9964_hysmaa"),
      c("0G6A0104_y0wdfo"),
      c("0G6A1229_wlyhaq"),
      c("0G6A1197_vonjbb"),
    ],
  },
  {
    key: "eventos",
    title: "Eventos",
    images: [
      c("0G6A1014_gaakzy"),
      c("0G6A1357_lzuswk"),
      c("IMG_0245_zjdv3b"),
      c("IMG_0237_telghn"),
      c("IMG_0234_lbizgw"),
      c("IMG_0236_cmgwxo"),
      c("IMG_0222_fizfyh"),
      c("IMG_0224_bwmolc"),
      c("IMG_0214_facp1h"),
      c("0G6A1406_loebvd"),
      c("0G6A1393_szlcx4"),
      c("0G6A1403_q9pk2q"),
      c("0G6A1377_zniolc"),
      c("0G6A1366_o5wswy"),
      c("0G6A1350_p6zn65"),
      c("0G6A1341_eju8xw"),
      c("0G6A1322_eozgnw"),
      c("0G6A1304_finefu"),
      c("0G6A1256_rpm4bc"),
      c("0G6A1245_uoiais"),
      c("0G6A1239_vc1nef"),
      c("0G6A1209_ev1ptj"),
      c("0G6A1199_qmu3lb"),
      c("0G6A1172_kydkd3"),
      c("0G6A1183_a3mrk1"),
      c("0G6A1109_gi4uug"),
      c("0G6A1152_x1o32e"),
      c("0G6A1086_rreu3c"),
      c("0G6A1064_gwllsy"),
      c("0G6A0944_r7ekez"),
      c("0G6A1022_wz4rb2"),
      c("0G6A0962_izmxs6"),
      c("0G6A0913_gkdugn"),
      c("0G6A0941_oc7yip"),
      c("0G6A0870_czsdqj"),
      c("0G6A0860_i1svbd"),
      c("0G6A0787_rgii8s"),
      c("0G6A0754_yr6jf7"),
      c("0G6A0749_vtlabo"),
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
            {active.images.map((src, i) => (
              <button
                key={`${active.key}-${i}`}
                onClick={() => setLightbox(src)}
                className="snap-start shrink-0 w-[70%] sm:w-[45%] md:w-[32%] lg:w-[28%] group"
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={src}
                    alt="CEMMEFE"
                    className="w-full h-[240px] md:h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
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
