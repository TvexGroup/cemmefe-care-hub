import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Crosshair, ScanEye, HeartHandshake, ChevronRight, HandHeart, Gift, Sprout } from "lucide-react";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const timeline = [
  { year: "2013", text: "Fundação do CEMMEFE pela Dra. Cristina Veloso Andreacci e Dr. Celso Andreacci" },
  { year: "2015", text: "Ampliação do centro de ultrassonografia com equipamentos de última geração" },
  { year: "2018", text: "Prêmio de melhor imagem do Brasil pela SAMSUNG" },
  { year: "2024", text: "Modernização contínua e incorporação de novas tecnologias em medicina fetal" },
  { year: "2025", text: "Inauguração da nova sede da CEMMEFE em São Mateus do Sul" },
];

const timelineMilestones = [
  { year: "2013", title: "Ano de Fundação", text: "Início das atividades do CEMMEFE em São Mateus do Sul." },
  { year: "2015", title: "Expansão da Clínica", text: "Ampliação do centro de ultrassonografia com novos equipamentos." },
  { year: "2018", title: "Reconhecimento Nacional", text: "Prêmio de melhor imagem do Brasil pela SAMSUNG." },
  { year: "2024", title: "Nova Tecnologia", text: "Incorporação de novas tecnologias em medicina fetal." },
  { year: "2025", title: "Nova Sede", text: "Inauguração da nova sede da CEMMEFE em São Mateus do Sul." },
];

const congressos = [
  { cidade: "Roma", pais: "Itália", bandeira: "🇮🇹" },
  { cidade: "Londres", pais: "Inglaterra", bandeira: "🇬🇧" },
  { cidade: "Praga", pais: "República Tcheca", bandeira: "🇨🇿" },
  { cidade: "Boston", pais: "Estados Unidos", bandeira: "🇺🇸" },
];

const Sobre = () => (
  <>
    <SeoHead title="Sobre | CEMMEFE - Centro Médico e Medicina Fetal em São Mateus do Sul" description="Conheça a história do CEMMEFE, fundado em 2013 em São Mateus do Sul. Referência em ginecologia, obstetrícia e medicina fetal com presença em congressos internacionais." path="/sobre" />

    <HeroBanner title="Nossa História e Missão" subtitle="Conheça a CEMMEFE e nosso compromisso com a saúde da mulher" image={images.sobreBanner} />

    {/* Quem Somos — visual destaque */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <img src={images.sobreEquipe} alt="Equipe CEMMEFE" className="w-full rounded-xl object-cover aspect-[4/3]" />
            <blockquote className="mt-6 border-l-2 border-primary pl-4 text-muted-foreground italic text-sm">
              "Cuidado personalizado para cada paciente, em cada momento."
            </blockquote>
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="text-left">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Quem Somos</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Excelência em medicina fetal desde 2013</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              O CEMMEFE — Centro da Mulher e Medicina Fetal — foi fundado em 2013 pela Dra. Cristina Veloso Andreacci, especialista em Medicina Fetal, Ginecologia e Obstetrícia, juntamente com o Dr. Celso Andreacci, especialista em Obstetrícia e Ginecologia.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Com recursos tecnológicos avançados, somos capazes de diagnosticar e tratar diversas condições ainda durante a gestação, planejando o melhor cenário para o nascimento do bebê com segurança e cuidado.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Instalações modernas, equipamentos de última geração e atendimento diferenciado — contemplados com o Prêmio de melhor imagem do Brasil pela SAMSUNG.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Manifesto */}
    <section className="section-padding" style={{ backgroundColor: '#FDE2D4' }}>
      <div className="container mx-auto max-w-3xl">
        <motion.div {...fadeUp} className="relative pl-8 border-l-4 border-primary">
          <h2 className="text-3xl font-heading font-bold mb-6" style={{ color: '#1A1A1A' }}>Manifesto CEMMEFE</h2>
          <p className="text-lg leading-relaxed italic" style={{ color: '#2C2C2C' }}>
            Insira aqui o texto do Manifesto CEMMEFE.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Crosshair,
              title: "Missão",
              items: [
                "Nunca fazer menos que o máximo para proteger a saúde materno-fetal e reprodutiva da mulher",
                "Entender a mulher em todas as suas nuances, cuidando-a em todas as fases de sua vida em ambiente acolhedor e humanizado",
                "Oferecer a mais alta tecnologia e excelência à serviço da vida",
              ],
            },
            {
              icon: ScanEye,
              title: "Visão",
              items: [
                "Que todas as mulheres possam ter um atendimento de excelência, respeitando suas diferenças e sua individualidade, sendo referência na saúde da mulher e medicina fetal",
              ],
            },
            {
              icon: HeartHandshake,
              title: "Valores",
              items: ["Humildade", "Determinação", "Ética", "Honestidade", "Profissionalismo", "Comprometimento e Responsabilidade Social"],
            },
          ].map((item, i) => (
            <motion.div key={item.title} {...fadeUp} transition={{ delay: i * 0.15 }} className="rounded-xl bg-muted p-8 border border-border">
              <div className="mb-5 flex justify-center md:justify-center">
                <item.icon size={56} style={{ color: '#FDE2D4' }} strokeWidth={1.2} />
              </div>
              <h3 className="text-xl font-heading font-semibold text-secondary mb-3 text-left md:text-center">{item.title}</h3>
              <ul className="text-muted-foreground text-sm space-y-2">
                {item.items.map((text, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary mt-1 shrink-0">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team & Social */}
    <section className="section-padding" style={{ backgroundColor: '#F3F3F0' }}>
      <div className="container mx-auto max-w-3xl">
        <motion.div {...fadeUp} className="text-left md:text-center">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#545454' }}>Nossa gente</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8" style={{ color: '#1A1A1A' }}>Equipe e Parceiros</h2>
          <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: '#545454' }}>
            Nosso time é comprometido com o que faz. Nos dedicamos ao que mais nos interessa: nossos pacientes. Cada dia é uma nova perspectiva e damos o nosso máximo para ver um sorriso no rosto de cada paciente que encontramos.
          </p>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: '#545454' }}>
            Trabalhamos em um ambiente alegre, descontraído, cheio de aprendizado e muito amor, e passamos isto a cada uma das nossas pacientes e seus familiares que nos visita. Temos o imenso orgulho de poder acolher cada paciente que toma a decisão de nos escolher.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Social Responsibility */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto max-w-4xl">
         <motion.h2 {...fadeUp} className="text-3xl font-heading font-bold text-secondary text-left md:text-center mb-8">Responsabilidade Social</motion.h2>
         <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed text-left md:text-center mb-8">
           A Clínica CEMMEFE, dentro de seu compromisso com a Responsabilidade Social e Ambiental, procura seguir as diretrizes e protocolos de sustentabilidade do Brasil, visando reduzir ao mínimo os impactos causados pelas suas operações.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: HandHeart, title: "CEMMEFE na comunidade", text: "Doações de aproximadamente R$ 15.000 em 2021 em consultas e exames para a comunidade." },
            { icon: Gift, title: "Mutirão de Natal", text: "Ajudou 103 famílias em 2021. São mais de 10 anos apoiando este projeto." },
            { icon: Sprout, title: "Projeto Pense Grande", text: "Iniciativa para identificar e incentivar os futuros líderes de nossa comunidade." },
          ].map((p, i) => (
            <motion.div key={p.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-xl bg-background p-6 text-left md:text-center border border-border">
              <div className="mb-4 flex justify-start md:justify-center">
                <p.icon size={56} style={{ color: '#FDE2D4' }} strokeWidth={1.2} />
              </div>
              <h3 className="font-heading font-semibold text-secondary mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="section-padding" style={{ backgroundColor: '#F3F3F0' }}>
      <div className="container mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="text-left md:text-center mb-12 md:mb-16">
          <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#545454' }}>Trajetória</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#1A1A1A' }}>Nossa História</h2>
        </motion.div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-8 h-px" style={{ backgroundColor: '#FDE2D4' }} />
          <div className="relative grid" style={{ gridTemplateColumns: `repeat(${timelineMilestones.length}, minmax(0, 1fr))` }}>
            {timelineMilestones.map((t, i) => {
              const filled = i % 2 === 0;
              return (
                <motion.div key={t.year} {...fadeUp} transition={{ delay: i * 0.1 }} className="flex flex-col items-center px-3 text-center">
                  <div
                    className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: filled ? '#FDE2D4' : '#FFFFFF',
                      border: `1px solid ${filled ? '#FDE2D4' : '#FDE2D4'}`,
                    }}
                  >
                    <span className="text-sm font-heading font-bold" style={{ color: '#1A1A1A' }}>{t.year}</span>
                  </div>
                  <h3 className="mt-6 text-base font-heading font-semibold" style={{ color: '#1A1A1A' }}>{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: '#545454' }}>{t.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-4">
          <div className="absolute left-[31px] top-2 bottom-2 w-px" style={{ backgroundColor: '#FDE2D4' }} />
          <div className="space-y-8">
            {timelineMilestones.map((t, i) => {
              const filled = i % 2 === 0;
              return (
                <motion.div key={t.year} {...fadeUp} transition={{ delay: i * 0.05 }} className="flex gap-5 items-start">
                  <div
                    className="relative z-10 shrink-0 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: filled ? '#FDE2D4' : '#FFFFFF',
                      border: `1px solid ${filled ? '#FDE2D4' : '#FDE2D4'}`,
                    }}
                  >
                    <span className="text-xs font-heading font-bold" style={{ color: '#1A1A1A' }}>{t.year}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-heading font-semibold" style={{ color: '#1A1A1A' }}>{t.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: '#545454' }}>{t.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Congressos Internacionais */}
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div {...fadeUp} className="text-left md:text-center mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Presença Global</p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Congressos Nacionais e Internacionais</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ao longo de toda a sua trajetória, o CEMMEFE esteve presente nos maiores eventos de medicina fetal do mundo, levando e trazendo as mais recentes inovações em saúde da mulher.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {congressos.map((c, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-background p-6 flex flex-col items-center text-center hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#FDE2D4' }}>
                <span className="text-2xl">{c.bandeira}</span>
              </div>
              <p className="font-heading font-semibold text-secondary text-base">{c.cidade}</p>
              <p className="text-sm text-muted-foreground mt-1">{c.pais}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-muted text-left md:text-center">
      <motion.div {...fadeUp}>
        <h2 className="text-2xl font-heading font-bold text-secondary mb-4">Conheça nossa equipe</h2>
        <Link to="/equipe" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-secondary transition-transform hover:scale-105">
          Ver Equipe <ChevronRight size={18} />
        </Link>
      </motion.div>
    </section>
  </>
);

export default Sobre;
