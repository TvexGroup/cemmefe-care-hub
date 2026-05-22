import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, X } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const doctors = [
  {
    name: "Dra. Cristina Veloso Andreacci",
    specialty: "Medicina Fetal, Ginecologia e Obstetrícia",
    img: images.draCristina,
    instagram: "https://www.instagram.com/drcristinaveloso/",
    shortBio: "Fundadora do CEMMEFE, especialista em Medicina Fetal com certificação internacional pela Fetal Medicine Foundation (Londres). Mais de 25 anos dedicados à saúde da mulher.",
    fullBio: [
      "Graduação em Medicina pela Pontifícia Universidade Católica (PUC)",
      "Residência médica em Ginecologia e Obstetrícia pela Santa Casa de Curitiba",
      "Especialização em Medicina Fetal pela Clínica Fetus (São Paulo)",
      "Título de Especialista em Ginecologia e Obstetrícia (TEGO) – Febrasgo",
      "Habilitação em Ultrassonografia em Ginecologia e Obstetrícia – Febrasgo",
      "Habilitação em Medicina Fetal (AMB) – Febrasgo",
      "Certificado de Competência em Medicina Fetal – Fetal Medicine Foundation, Londres",
      "Responsável pelo departamento de Medicina Fetal da Santa Casa de Misericórdia e do Núcleo Diagnóstico de Maringá (2007/2008)",
      "Docente de Ginecologia e Obstetrícia da Faculdade Estadual",
      "Participação no Congresso Mundial de Medicina Fetal (Itália, 2009)",
      "Membro Titular da Fundação de Medicina Fetal Latino Americana",
      "Membro da Fetal Medicine Foundation (Londres)",
      "Presidente do Instituto Brasileiro de Promoção à Saúde (IBSP)",
      "Idealizadora do Projeto Impacto Mulher",
    ],
  },
  {
    name: "Helen Cordeiro",
    specialty: "Consultora Materna e Cuidados Perinatais",
    img: images.helen,
    instagram: "",
    shortBio: "Enfermeira obstétrica e consultora internacional em lactação (IBCLC). Especialista em cuidados maternos, laserterapia e acompanhamento pós-parto.",
    fullBio: [
      "Graduação em Enfermagem pela Universidade Federal do Espírito Santo (2001)",
      "Consultora Internacional em Lactação – IBCLC",
      "Laserterapeuta",
      "Atendimento na CEMMEFE: Golden Hour, Laserterapia, SOS Mamãe e Bebê",
      "Consultoria de retorno ao trabalho e desmame gentil",
      "Consultoria do sono infantil",
    ],
  },
];

const staff = [
  { name: "Nome do Profissional", role: "Enfermeira", img: images.funcionaria1 },
  { name: "Nome do Profissional", role: "Técnica de Enfermagem", img: images.funcionaria2 },
  { name: "Nome do Profissional", role: "Recepcionista", img: images.funcionaria3 },
  { name: "Nome do Profissional", role: "Auxiliar Administrativo", img: images.funcionaria4 },
  { name: "Nome do Profissional", role: "Técnica em Ultrassonografia", img: images.funcionaria5 },
  { name: "Nome do Profissional", role: "Recepcionista", img: images.funcionaria6 },
];

const Equipe = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<number | null>(null);

  return (
    <>
      <SeoHead title="Equipe | CEMMEFE - Profissionais Especializados em São Mateus do Sul" description="Conheça os profissionais da CEMMEFE: Dra. Cristina Veloso Andreacci, especialista em medicina fetal, e Helen Cordeiro, consultora materna." path="/equipe" />

      <HeroBanner title="Nossa Equipe" subtitle="Profissionais dedicados ao cuidado da mulher" image={images.equipeBanner} />

      {/* Doctors */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <motion.h2 {...fadeUp} className="text-3xl font-heading font-bold text-secondary text-left md:text-center mb-12">Corpo Clínico</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doc, i) => (
              <motion.div key={doc.name} {...fadeUp} transition={{ delay: i * 0.15 }} className="rounded-xl bg-background border border-border overflow-hidden">
                <img src={doc.img} alt={doc.name} className="w-full h-72 object-cover" loading="lazy" />
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold text-secondary">{doc.name}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{doc.specialty}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{doc.shortBio}</p>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setSelectedDoctor(i)}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Saiba mais
                    </button>
                    {doc.instagram && (
                      <a href={doc.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-primary transition-colors">
                        <Instagram size={16} /> Instagram
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor detail modal */}
      <AnimatePresence>
        {selectedDoctor !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-background rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedDoctor(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-secondary"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <h3 className="text-2xl font-heading font-semibold text-secondary mb-1">{doctors[selectedDoctor].name}</h3>
              <p className="text-primary font-medium text-sm mb-6">{doctors[selectedDoctor].specialty}</p>
              <ul className="space-y-2">
                {doctors[selectedDoctor].fullBio.map((item, j) => (
                  <li key={j} className="flex gap-3 text-muted-foreground text-sm">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Staff */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-5xl">
           <motion.h2 {...fadeUp} className="text-3xl font-heading font-bold text-secondary text-left md:text-center mb-4">Nossa Equipe</motion.h2>
           <motion.p {...fadeUp} className="text-muted-foreground text-left md:text-center mb-12 max-w-2xl md:mx-auto">Profissionais comprometidos com a excelência no atendimento</motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {staff.map((member, i) => (
              <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-xl bg-background border border-border overflow-hidden text-left md:text-center">
                <img src={member.img} alt={member.name} className="w-full h-56 object-cover" loading="lazy" />
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-secondary">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background text-left md:text-center">
        <a
          href="https://wa.me/5542988622662"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg bg-primary px-8 py-3 font-semibold text-secondary transition-transform hover:scale-105"
        >
          Agende com nossa equipe
        </a>
      </section>
    </>
  );
};

export default Equipe;
