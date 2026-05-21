import { useState } from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import heroServicos from "@/assets/hero-servicos-new.jpg";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const categories = [
  {
    id: "protocolos",
    title: "Protocolos",
    intro: "Na CEMMEFE, nossos protocolos são programas de cuidado integrado, desenvolvidos para oferecer acompanhamento completo e personalizado em cada etapa da saúde da mulher. Cada protocolo reúne consultas, exames e procedimentos em um plano estruturado, garantindo eficiência, segurança e um atendimento de excelência.",
    items: [
      { name: "Check-up Ginecológico Ampliado", description: "Protocolo completo de avaliação da saúde ginecológica, incluindo exames laboratoriais, de imagem e consulta especializada." },
      { name: "Protocolos de Gestação", description: "Acompanhamento integral do pré-natal ao pós-parto, com todas as consultas e exames necessários em um único protocolo." },
      { name: "Imunoestimulantes", description: "Protocolos voltados ao estímulo e fortalecimento do sistema imunológico, com acompanhamento médico especializado e personalizado para cada paciente." },
      { name: "Protocolo de Fertilidade", description: "Protocolo especializado em investigação e tratamento da fertilidade, com acompanhamento multidisciplinar e plano terapêutico individualizado." },
      { name: "Protocolo de Ansiedade", description: "Protocolo integrado de acompanhamento e manejo da ansiedade, combinando abordagem médica e suporte psicológico personalizado." },
    ],
  },
  {
    id: "consultas",
    title: "Consultas",
    intro: "Atendimento humanizado e individualizado em todas as fases da vida da mulher, com escuta atenta e cuidado especializado.",
    items: [
      { name: "Ginecológicas", description: "Descrição placeholder da consulta ginecológica. Substituir pelo conteúdo real." },
      { name: "Obstétricas", description: "Descrição placeholder da consulta obstétrica. Substituir pelo conteúdo real." },
      { name: "Fertilidade / Infertilidade", description: "Descrição placeholder da consulta de fertilidade. Substituir pelo conteúdo real." },
      { name: "Consulta com Psicólogo", description: "Descrição placeholder da consulta com psicólogo. Substituir pelo conteúdo real." },
      { name: "Telemedicina", description: "Descrição placeholder da consulta por telemedicina. Substituir pelo conteúdo real." },
    ],
  },
  {
    id: "procedimentos",
    title: "Procedimentos",
    items: [
      { name: "Biópsia" }, { name: "Cauterização" }, { name: "Implanon" },
      { name: "DIU de Cobre" }, { name: "DIU Mirena" }, { name: "DIU Kyleena" },
      { name: "Imunoestimulantes Injetáveis" },
    ],
  },
  {
    id: "cirurgias",
    title: "Cirurgias",
    intro: "Realizamos procedimentos cirúrgicos ginecológicos com técnicas modernas e minimamente invasivas, priorizando segurança, conforto e rápida recuperação. Em breve, mais informações sobre cada cirurgia oferecida pela CEMMEFE.",
    items: [
      { name: "Cirurgia 1", description: "Descrição placeholder do procedimento cirúrgico. Substituir pelo conteúdo real." },
      { name: "Cirurgia 2", description: "Descrição placeholder do procedimento cirúrgico. Substituir pelo conteúdo real." },
      { name: "Cirurgia 3", description: "Descrição placeholder do procedimento cirúrgico. Substituir pelo conteúdo real." },
      { name: "Cirurgia 4", description: "Descrição placeholder do procedimento cirúrgico. Substituir pelo conteúdo real." },
      { name: "Cirurgia 5", description: "Descrição placeholder do procedimento cirúrgico. Substituir pelo conteúdo real." },
      { name: "Cirurgia 6", description: "Descrição placeholder do procedimento cirúrgico. Substituir pelo conteúdo real." },
    ],
  },
  {
    id: "exames",
    title: "Exames",
    items: [
      { name: "Cardiotocografia" }, { name: "Pré-Natal" },
      { name: "US Obstétrico" }, { name: "US Transvaginal Obstétrico" }, { name: "US Transvaginal" },
      { name: "US Mamas" }, { name: "US Pélvico" }, { name: "US Tireoide" },
      { name: "US Vias Urinárias" }, { name: "US Abdome Superior" }, { name: "Abdome Total" },
      { name: "US Mamas com IA" }, { name: "Medida do Colo Adicional" },
      { name: "Doppler Morfológico 1º / 2º / 3º Trimestre" }, { name: "Dopplerfluxometria" },
      { name: "Ecocardiografia Fetal" }, { name: "Perfil Biofísico Fetal" },
      { name: "Controle de Ovulação" }, { name: "Rastreamento de Endometriose" },
    ],
  },
];

const Servicos = () => {
  const [activeTab, setActiveTab] = useState("protocolos");

  return (
    <>
      <SeoHead title="Serviços | CEMMEFE - Ginecologia, Obstetrícia e Medicina Fetal" description="Conheça os serviços da CEMMEFE: consultas, procedimentos, ultrassonografia, protocolos e exames especializados em saúde da mulher." path="/servicos" />

      <HeroBanner title="Nossos Serviços" subtitle="Cuidado completo e especializado para a saúde da mulher" image={heroServicos} />

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          <motion.p {...fadeUp} className="text-left md:text-center text-muted-foreground mb-12 max-w-3xl md:mx-auto leading-relaxed">
            Na CEMMEFE, oferecemos uma ampla gama de serviços voltados à saúde integral da mulher, desde consultas de rotina até procedimentos especializados e exames de imagem com tecnologia de ponta.
          </motion.p>

          {/* Tabs */}
          <div className="flex flex-wrap md:justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all border ${
                  activeTab === cat.id
                    ? "bg-primary text-secondary border-primary"
                    : "bg-background text-muted-foreground border-border hover:border-primary/40"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Content */}
          {categories
            .filter((c) => c.id === activeTab)
            .map((cat) => (
              <motion.div key={cat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
                {/* Intro paragraph for protocols */}
                {'intro' in cat && cat.intro && (
                  <div className="mb-10 max-w-3xl mx-auto">
                    <div className="border-l-2 border-primary pl-6">
                      <p className="text-muted-foreground leading-relaxed">{cat.intro}</p>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="rounded-xl bg-background border border-border p-5 hover:shadow-sm transition-shadow">
                      <h3 className="font-semibold text-secondary mb-2">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {'description' in item && item.description ? item.description : "Atendimento especializado e personalizado para cada paciente."}
                      </p>
                      <a
                        href="https://wa.me/5542988622662"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary text-sm font-semibold hover:underline transition-all"
                      >
                        Agendar
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Servicos;
