import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const convenios = [
  { name: "Convênio 1" },
  { name: "Convênio 2" },
  { name: "Convênio 3" },
  { name: "Convênio 4" },
  { name: "Convênio 5" },
  { name: "Convênio 6" },
  { name: "Convênio 7" },
  { name: "Convênio 8" },
];

const Convenios = () => (
  <>
    <SeoHead title="Convênios | CEMMEFE - Convênios Aceitos" description="Confira os convênios aceitos pela CEMMEFE. Entre em contato para mais informações." path="/convenios" />

    <HeroBanner title="Convênios Aceitos" subtitle="Confira os convênios atendidos pela CEMMEFE" image={images.conveniosBanner} />

    <section className="section-padding">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {convenios.map((c, i) => (
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
