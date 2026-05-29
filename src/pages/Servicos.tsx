import { useState } from "react";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

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
      {
        name: "Ginecológicas",
        description: "Avaliação completa da saúde ginecológica com exame clínico, orientação sobre saúde sexual e reprodutiva, rastreamento de doenças e prevenção. Indicada para mulheres em qualquer fase da vida.",
      },
      {
        name: "Obstétricas",
        description: "Acompanhamento da gravidez desde a confirmação até o pós-parto, com monitoramento do desenvolvimento fetal, bem-estar materno e orientações para um pré-natal seguro e tranquilo.",
      },
      {
        name: "Fertilidade / Infertilidade",
        description: "Investigação individualizada das causas de dificuldade para engravidar, com avaliação hormonal, de imagem e do ciclo reprodutivo. Orientação sobre as melhores estratégias para alcançar a gestação.",
      },
      {
        name: "Consulta com Psicólogo",
        description: "Suporte emocional especializado para mulheres em todas as fases da vida — maternidade, gestação, luto gestacional, ansiedade e questões de autoestima. Atendimento acolhedor e sigiloso.",
      },
      {
        name: "Telemedicina",
        description: "Consulta médica online com a mesma qualidade e atenção do atendimento presencial. Ideal para retornos, dúvidas, resultados de exames e acompanhamentos de rotina, sem sair de casa.",
      },
    ],
  },
  {
    id: "procedimentos",
    title: "Procedimentos",
    intro: "Procedimentos realizados com técnica, segurança e cuidado individualizado, em ambiente clínico preparado para garantir seu conforto em cada etapa.",
    items: [
      {
        name: "Biópsia",
        description: "Coleta de fragmento de tecido para análise laboratorial, indicada na investigação de lesões cervicais, vulvares ou uterinas. Realizada com precisão e mínimo desconforto.",
      },
      {
        name: "Cauterização",
        description: "Tratamento de lesões benignas do colo do útero, como o ectrópio, por meio de cauterização química ou elétrica. Procedimento rápido, ambulatorial e com rápida recuperação.",
      },
      {
        name: "Implanon",
        description: "Inserção do implante subdérmico contraceptivo de longa duração (até 3 anos), altamente eficaz e discreto. Realizada em consultório, com anestesia local e técnica minimamente invasiva.",
      },
      {
        name: "DIU de Cobre",
        description: "Inserção do dispositivo intrauterino de cobre, método contraceptivo não hormonal com eficácia por até 10 anos. Opção para mulheres que preferem evitar hormônios.",
      },
      {
        name: "DIU Mirena",
        description: "Inserção do DIU hormonal Mirena, que libera levonorgestrel localmente por até 8 anos. Além de contraceptivo, é indicado no tratamento de cólicas intensas e endometriose.",
      },
      {
        name: "DIU Kyleena",
        description: "Inserção do DIU hormonal Kyleena, com menor dose de hormônio e tamanho reduzido — especialmente indicado para mulheres que nunca tiveram filhos. Eficaz por até 5 anos.",
      },
      {
        name: "Imunoestimulantes Injetáveis",
        description: "Aplicação de medicamentos imunoestimulantes de forma injetável, com indicação médica individualizada para fortalecer o sistema imunológico e apoiar tratamentos específicos.",
      },
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
    intro: "Exames de imagem realizados com equipamentos de última geração e laudos emitidos por especialistas. Diagnóstico preciso para um cuidado mais seguro.",
    items: [
      {
        name: "Cardiotocografia",
        description: "Monitorização simultânea dos batimentos cardíacos do bebê e das contrações uterinas, avaliando o bem-estar fetal no terceiro trimestre ou durante o trabalho de parto.",
      },
      {
        name: "Pré-Natal",
        description: "Conjunto de consultas e exames que acompanham a saúde da mãe e do bebê ao longo de toda a gestação, garantindo diagnóstico precoce e suporte em cada fase.",
      },
      {
        name: "US Obstétrico",
        description: "Ultrassonografia abdominal para avaliação do crescimento fetal, posição placentária, volume de líquido amniótico e movimentos do bebê ao longo da gestação.",
      },
      {
        name: "US Transvaginal Obstétrico",
        description: "Ultrassonografia transvaginal com foco obstétrico, utilizada especialmente no início da gestação para avaliação do embrião, saco gestacional e vitalidade fetal.",
      },
      {
        name: "US Transvaginal",
        description: "Exame de imagem para avaliação detalhada dos órgãos pélvicos femininos — útero, ovários e endométrio — com alta resolução e sem necessidade de preparo com bexiga cheia.",
      },
      {
        name: "US Mamas",
        description: "Ultrassonografia das mamas para rastreamento de nódulos, cistos e outras alterações, complementando a mamografia ou como exame principal em mulheres mais jovens.",
      },
      {
        name: "US Pélvico",
        description: "Avaliação dos órgãos da pelve feminina por via abdominal, indicada para investigação de miomas, cistos ovarianos, alterações uterinas e acompanhamento ginecológico geral.",
      },
      {
        name: "US Tireoide",
        description: "Exame de imagem da glândula tireoide para identificar nódulos, alterações de volume e estrutura, auxiliando no diagnóstico de doenças tireoidianas.",
      },
      {
        name: "US Vias Urinárias",
        description: "Avaliação ultrassonográfica dos rins, ureteres e bexiga, indicada na investigação de infecções recorrentes, cálculos renais e outras alterações do trato urinário.",
      },
      {
        name: "US Abdome Superior",
        description: "Exame de imagem que avalia fígado, vesícula biliar, pâncreas, baço e rins superiores, auxiliando no diagnóstico de alterações abdominais e acompanhamento clínico.",
      },
      {
        name: "Abdome Total",
        description: "Ultrassonografia completa de todos os órgãos abdominais e pélvicos, oferecendo uma visão global da cavidade abdominal em um único exame.",
      },
      {
        name: "US Mamas com IA",
        description: "Ultrassonografia das mamas com suporte de inteligência artificial para análise automatizada de imagens, aumentando a precisão na detecção de alterações suspeitas.",
      },
      {
        name: "Medida do Colo Adicional",
        description: "Medição do comprimento do colo uterino por ultrassonografia transvaginal, fundamental no rastreamento de risco de parto prematuro durante a gestação.",
      },
      {
        name: "Doppler Morfológico 1º / 2º / 3º Trimestre",
        description: "Ultrassonografia morfológica com doppler para avaliação detalhada da anatomia fetal e fluxo sanguíneo, realizada no primeiro, segundo ou terceiro trimestre conforme indicação.",
      },
      {
        name: "Dopplerfluxometria",
        description: "Estudo do fluxo sanguíneo nas artérias uterinas, umbilical e cerebrais do feto, essencial na monitorização de gestações de risco e avaliação do bem-estar fetal.",
      },
      {
        name: "Ecocardiografia Fetal",
        description: "Exame especializado para avaliação detalhada do coração do bebê ainda durante a gestação, possibilitando o diagnóstico precoce de cardiopatias congênitas.",
      },
      {
        name: "Perfil Biofísico Fetal",
        description: "Avaliação do bem-estar fetal por meio de parâmetros como movimentos corporais, tônus, respiração e volume de líquido amniótico, geralmente associado à cardiotocografia.",
      },
      {
        name: "Controle de Ovulação",
        description: "Monitoramento ultrassonográfico seriado do ciclo ovulatório para identificar o momento ideal da ovulação, utilizado em tratamentos de fertilidade e planejamento reprodutivo.",
      },
      {
        name: "Rastreamento de Endometriose",
        description: "Protocolo de ultrassonografia especializado para identificação de focos de endometriose em ovários, intestino, bexiga e peritônio, com preparo intestinal para maior precisão diagnóstica.",
      },
    ],
  },
];

const Servicos = () => {
  const [activeTab, setActiveTab] = useState("protocolos");

  return (
    <>
      <SeoHead title="Serviços | CEMMEFE - Ginecologia, Obstetrícia e Medicina Fetal" description="Conheça os serviços da CEMMEFE: consultas, procedimentos, ultrassonografia, protocolos e exames especializados em saúde da mulher." path="/servicos" />

      <HeroBanner title="Nossos Serviços" subtitle="Cuidado completo e especializado para a saúde da mulher" image={images.servicosBanner} />

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
