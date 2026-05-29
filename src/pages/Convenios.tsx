import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const conveniosAtivos = [
  { name: "CDL" },
  { name: "MILI" },
];

const conveniosPendentes = [
  { name: "Unimed" },
  { name: "Bradesco" },
  { name: "Petrobras" },
  { name: "São Camilo" },
  { name: "Medprev" },
];

const Convenios = () => (
  <>
    <SeoHead title="Convênios | CEMMEFE - Convênios Aceitos" description="Confira os convênios aceitos pela CEMMEFE. Entre em contato para mais informações." path="/convenios" />

    <HeroBanner title="Convênios Aceitos" subtitle="Confira os convênios atendidos pela CEMMEFE" image={images.conveniosBanner} />

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">

        {/* Convênios ativos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {conveniosAtivos.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-border bg-background p-6 flex flex-col items-center justify-center text-left md:text-center hover:shadow-sm transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-xs font-medium">Logo</span>
              </div>
              <p className="font-semibold text-secondary text-sm">{c.name}</p>
            </motion.div>
          ))}
        </div>

        {/* Convênios em processo de certificação */}
        <motion.div {...fadeUp} className="mt-14">
          <h2 className="text-xl font-semibold text-secondary mb-6 text-left md:text-center">Em processo de certificação</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {conveniosPendentes.map((c, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ delay: i * 0.05 }}
                className="rounded-xl border border-dashed border-border bg-muted/40 p-6 flex flex-col items-center justify-center text-left md:text-center"
              >
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                  <span className="text-muted-foreground text-xs font-medium">Logo</span>
                </div>
                <p className="font-semibold text-secondary text-sm mb-2">{c.name}</p>
                <span className="text-[11px] font-medium bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                  Em certificação
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} className="text-left md:text-center mt-16">
          <p className="text-muted-foreground mb-6">Não encontrou seu convênio? Entre em contato conosco.</p>
          <a
            href="https://wa.me/5542988622662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg bg-primary px-8 py-3 font-semibold text-secondary transition-transform hover:scale-105"
          >
            Fale conosco
          </a>
        </motion.div>
      </div>
    </section>
  </>
);

export default Convenios;
