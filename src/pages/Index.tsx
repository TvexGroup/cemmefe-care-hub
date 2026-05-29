import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/pages/Blog";
import { motion } from "framer-motion";
import { Star, ChevronRight, ChevronLeft, CalendarCheck, Building2, MapPin, Monitor, Plus, Minus, Clock, Stethoscope, Heart, Award } from "lucide-react";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const heroSlides = [
  {
    image: images.slide1,
    title: "Cuidando da sua",
    titleAccent: "saúde",
    titleEnd: "com",
    titleItalic: "amor",
    subtitle: "Atendimento humanizado em medicina fetal, ginecologia e obstetrícia. Sua saúde e a do seu bebê são nossa prioridade.",
  },
  {
    image: images.slide2,
    title: "Tecnologia de ponta",
    titleAccent: "a serviço",
    titleEnd: "da sua",
    titleItalic: "saúde",
    subtitle: "Equipamentos de última geração e diagnóstico de alta precisão para o melhor cuidado.",
  },
  {
    image: images.slide3,
    title: "Equipe especializada",
    titleAccent: "e atendimento",
    titleEnd: "",
    titleItalic: "humanizado",
    subtitle: "Mais de 25 anos de experiência no cuidado à saúde da mulher.",
  },
];

const quickActions = [
  { icon: CalendarCheck, label: "Solicitar Agendamento", href: "https://wa.me/5542988622662" },
  { icon: Building2, label: "Convênios", href: "/convenios" },
  { icon: MapPin, label: "Como Chegar", href: "https://maps.google.com/?q=Rua+Paulino+Vaz+da+Silva,+768,+São+Mateus+do+Sul,+PR" },
];

const services = [
  { title: "Medicina Fetal", num: "01", description: "Acompanhamento especializado da saúde do bebê durante toda a gestação, com exames de alta precisão para diagnóstico precoce de alterações fetais, avaliação de crescimento e bem-estar fetal." },
  { title: "Ultrassonografias", num: "02", description: "Exames de imagem com tecnologia 4D HD de última geração, incluindo ultrassom obstétrico, morfológico, transvaginal, Doppler e ultrassonografia geral com máxima clareza diagnóstica." },
  { title: "Ginecologia", num: "03", description: "Atendimento completo à saúde da mulher em todas as fases da vida, incluindo prevenção, diagnóstico e tratamento de doenças ginecológicas, planejamento familiar e acompanhamento de rotina." },
  { title: "Obstetrícia", num: "04", description: "Acompanhamento pré-natal humanizado e completo, com cuidado individualizado para gestantes de baixo e alto risco, preparação para o parto e suporte no pós-parto." },
  { title: "Cirurgias", num: "05", description: "Procedimentos cirúrgicos ginecológicos minimamente invasivos com técnicas modernas, priorizando a segurança, o conforto e a rápida recuperação da paciente." },
  { title: "Psicologia", num: "06", description: "Acompanhamento psicológico especializado para mulheres em todas as fases da vida, oferecendo suporte emocional e terapêutico com escuta acolhedora e abordagem personalizada." },
  { title: "Infertilidade", num: "07", description: "Investigação e tratamento de infertilidade com abordagem multidisciplinar, acompanhamento individualizado e tecnologia de ponta para auxiliar no sonho da maternidade." },
];

const stats = [
  { value: "15+", label: "Anos de Experiência" },
  { value: "10k+", label: "Pacientes Atendidas" },
  { value: "5", label: "Especialistas" },
  { value: "25+", label: "Convênios Credenciados" },
  { value: "20+", label: "Tipos de Exames" },
];

const differentials = [
  { icon: Clock, title: "Mais de 25 anos de experiência", description: "Trajetória consolidada no cuidado integral à saúde da mulher." },
  { icon: Stethoscope, title: "Especialistas dedicados", description: "Equipe especializada em ginecologia, obstetrícia e medicina fetal." },
  { icon: Heart, title: "Atendimento humanizado", description: "Espaço acolhedor e escuta atenta em cada etapa do cuidado." },
  { icon: Monitor, title: "Alta tecnologia em exames", description: "Equipamentos de última geração para diagnósticos precisos." },
  { icon: Award, title: "Reconhecimento nacional", description: "Premiações que atestam nosso compromisso com a excelência." },
];

const testimonials = [
  { name: "Renata Siqueira", text: "Estivemos em uma consulta com a doutora, excelente atendimento, ética e respeito. Voltaremos em breve! Sua equipe muito bem treinada em atender.", stars: 5 },
  { name: "Stefani Sevilha", text: "Sou paciente da Dra Cristina, uma mulher abençoada, que trata as pacientes muito bem! Além de uma excelente médica, é uma amiga.", stars: 5 },
  { name: "Fernanda Macedo", text: "Dra. Cristina super amável e atenciosa! Uma profissional extremamente capacitada! O atendimento da auxiliar e da recepção são impecáveis.", stars: 5 },
  { name: "Maria S.", text: "Atendimento maravilhoso desde a recepção até a consulta. Me senti muito acolhida e segura durante todo o acompanhamento da minha gestação.", stars: 5 },
  { name: "Ana Paula R.", text: "Profissionais competentes e atenciosos. A clínica é linda, moderna e muito bem organizada. Recomendo a todas as gestantes da região.", stars: 5 },
  { name: "Juliana C.", text: "Fiz meu pré-natal inteiro na CEMMEFE e foi uma experiência incrível. Equipe dedicada e carinhosa, me senti em boas mãos o tempo todo.", stars: 5 },
  { name: "Patrícia M.", text: "Excelente estrutura e atendimento humanizado. A Dra. Cristina é uma profissional excepcional, muito atenciosa e competente.", stars: 5 },
  { name: "Camila D.", text: "Clínica impecável com equipamentos de última geração. O cuidado e a atenção que recebi foram incomparáveis. Super recomendo!", stars: 5 },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openService, setOpenService] = useState<string | null>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 768 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const scrollTestimonials = (dir: number) => {
    setTestimonialIndex((prev) => Math.max(0, Math.min(maxIndex, prev + dir)));
  };

  return (
    <>
      <SeoHead
        title="CEMMEFE - Centro Médico e Medicina Fetal | Ginecologia e Obstetrícia"
        description="CEMMEFE oferece cuidado integral à saúde da mulher com ginecologia, obstetrícia, medicina fetal e ultrassonografia. Agende sua consulta."
        path="/"
      />

      {/* Hero Carousel */}
      <section className="relative h-[70vh] md:h-[78vh] flex items-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={slide.image} alt={`CEMMEFE - ${slide.title}`} className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}

        <div className="relative z-10 container mx-auto px-6 md:px-4 text-left md:text-center">
          <motion.div key={currentSlide} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <p className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/80 mb-4 md:mb-6">Centro Médico e Medicina Fetal</p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading leading-tight mb-4 md:mb-6 text-white">
              {heroSlides[currentSlide].title}{" "}
              <em className="text-primary not-italic">{heroSlides[currentSlide].titleAccent}</em>{" "}
              {heroSlides[currentSlide].titleEnd}{" "}
              <em className="italic">{heroSlides[currentSlide].titleItalic}</em>
            </h1>
            <p className="text-sm md:text-lg text-white/80 mb-8 md:mb-10 max-w-xl md:mx-auto leading-relaxed">
              {heroSlides[currentSlide].subtitle}
            </p>
              <div className="flex flex-col sm:flex-row gap-4 md:justify-center">
              <a href="https://wa.me/5542988622662" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/5542988622662", "_blank"); }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 md:px-8 py-3.5 font-semibold text-secondary transition-transform hover:scale-105 min-h-[44px] text-sm md:text-base">
                Agendar Consulta <ChevronRight size={16} />
              </a>
              <Link to="/servicos" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 md:px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 min-h-[44px] text-sm md:text-base">
                Explorar Serviços <ChevronRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-1 rounded-full transition-all ${index === currentSlide ? "bg-primary w-8" : "bg-white/40 w-6"}`} aria-label={`Ir para slide ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="relative z-20 -mt-12 md:-mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              const isExternal = action.href.startsWith("http");
              const Comp = isExternal ? "a" : Link;
              const extraProps = isExternal ? { href: action.href, target: "_blank", rel: "noopener noreferrer", onClick: (e: React.MouseEvent) => { e.preventDefault(); window.open(action.href, "_blank"); } } : { to: action.href };
              return (
                <motion.div key={action.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                  <Comp {...(extraProps as any)} className="flex flex-col items-center gap-2 md:gap-3 rounded-xl bg-background border border-border p-4 md:p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer min-h-[80px]">
                    <Icon size={24} className="text-primary md:w-7 md:h-7" strokeWidth={1.5} />
                    <span className="text-[11px] md:text-sm font-semibold text-secondary leading-tight">{action.label}</span>
                  </Comp>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services - Accordion */}
      <section className="section-padding mt-8">
        <div className="container mx-auto max-w-4xl text-left md:text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Nossos Serviços</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Especialidades</h2>
            <p className="text-muted-foreground mb-12 max-w-xl md:mx-auto">Clique em uma especialidade para saber mais.</p>
          </motion.div>
          <div className="space-y-0 max-w-2xl mx-auto">
            {services.map((s, i) => {
              const isOpen = openService === s.title;
              return (
                <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.08 }}>
                  <button
                    onClick={() => setOpenService(isOpen ? null : s.title)}
                    className="w-full flex items-center justify-between py-5 border-b border-border hover:bg-muted/50 px-4 -mx-4 transition-colors min-h-[56px] text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span className="text-xs text-primary font-semibold">{s.num}</span>
                      <h3 className="text-base md:text-lg font-heading font-semibold text-secondary">{s.title}</h3>
                    </div>
                    <span className="text-primary transition-transform duration-300 shrink-0 ml-2">
                      {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-4 pb-5 pt-3 text-left ml-8 md:ml-12">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.description}</p>
                      <Link to="/servicos" className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all">
                        Saiba mais <ChevronRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-10 md:py-16" style={{ backgroundColor: '#FDE2D4' }}>
        <div className="container mx-auto px-6 md:px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-6 md:gap-8 max-w-5xl mx-auto">
            {stats.map((h, i) => (
              <motion.div key={h.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`text-center ${i === stats.length - 1 && stats.length % 2 !== 0 ? 'col-span-2 md:col-span-1' : ''}`}>
                <p className="text-2xl md:text-4xl font-heading font-bold" style={{ color: '#1A1A1A' }}>{h.value}</p>
                <p className="text-[11px] md:text-xs mt-1 md:mt-2" style={{ color: '#2C2C2C' }}>{h.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="section-padding bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="text-left md:text-center mb-12 md:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#545454' }}>Por que CEMMEFE</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold" style={{ color: '#1A1A1A' }}>Nossos Diferenciais</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 max-w-5xl mx-auto">
            {differentials.slice(0, 4).map((d, i) => (
              <motion.div key={d.title} {...fadeUp} transition={{ delay: i * 0.08 }} className="text-left">
                <d.icon size={28} strokeWidth={1.25} style={{ color: '#545454' }} className="mb-4" />
                <h3 className="text-base font-heading font-semibold mb-2" style={{ color: '#545454' }}>{d.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A7A7A' }}>{d.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-12 md:mt-16 flex justify-start md:justify-center">
            <Link
              to="/sobre"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-transparent hover:border-current transition-all pb-1"
              style={{ color: '#FAC6A3' }}
            >
              Conheça nossos diferenciais
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
                alt="Equipamento de ultrassonografia"
                className="w-full rounded-xl object-cover aspect-[4/3]"
                loading="lazy"
              />
            </motion.div>
             <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="text-left">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Infraestrutura</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">Tecnologia de Ponta</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nosso parque tecnológico é atualizado constantemente, com o compromisso de oferecer à nossa paciente o que há de mais moderno em exames de diagnóstico por imagem.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Monitor size={20} className="text-primary mt-0.5 shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-secondary text-sm">Ultrassom 4D HD</h4>
                    <p className="text-muted-foreground text-sm">Equipamentos de última geração para imagens com máxima clareza e definição.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Monitor size={20} className="text-primary mt-0.5 shrink-0" />
                  <div className="text-left">
                    <h4 className="font-semibold text-secondary text-sm">Diagnóstico por Imagem Avançado</h4>
                    <p className="text-muted-foreground text-sm">Soluções avançadas para ginecologia, obstetrícia e medicina fetal.</p>
                  </div>
                </div>
              </div>
              <Link to="/servicos" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all">
                Conheça nossos exames <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={images.homepageClinica} alt="Clínica CEMMEFE" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 container mx-auto text-left md:text-center px-4">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.2em] uppercase text-white/60 mb-3">Agende sua consulta</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">Cuidamos de você com excelência</h2>
            <a href="https://wa.me/5542988622662" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/5542988622662", "_blank"); }} className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-secondary transition-transform hover:scale-105">
              Entrar em contato <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About snippet */}
      {/* Team preview */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto text-left md:text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Equipe</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12">Nossa Equipe</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {[
              { img: images.homepageDraCristina, name: "Dra. Cristina Veloso Andreacci", specialty: "Medicina Fetal, Ginecologia e Obstetrícia" },
              { img: images.homepageHelen, name: "Dr. Matheus Veloso", specialty: "Ginecologista e Obstetra" },
            ].map((doc, i) => (
              <motion.div key={doc.name} {...fadeUp} transition={{ delay: i * 0.15 }} className="rounded-xl bg-background overflow-hidden border border-border hover:shadow-sm transition-shadow">
                <img src={doc.img} alt={doc.name} className="w-full h-64 object-cover" loading="lazy" />
                <div className="p-6 text-left md:text-center">
                  <h3 className="font-heading font-semibold text-secondary">{doc.name}</h3>
                  <p className="text-muted-foreground text-sm">{doc.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/equipe" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
              Conheça toda a equipe <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl text-left md:text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Depoimentos</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">O que dizem nossas pacientes</h2>
             <p className="text-muted-foreground mb-12 max-w-xl md:mx-auto">
              A satisfação das nossas pacientes é o nosso maior orgulho.
            </p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden" ref={testimonialRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialIndex * (100 / visibleCount)}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="flex-shrink-0 px-3" style={{ width: `${100 / visibleCount}%` }}>
                    <div className="rounded-xl border border-border bg-muted p-6 text-left md:text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="flex gap-1 mb-4 justify-center">
                          {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} className="fill-primary text-primary" />)}
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 italic leading-relaxed">"{t.text}"</p>
                      </div>
                      <p className="font-semibold text-secondary text-sm">{t.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {testimonialIndex > 0 && (
              <button
                onClick={() => scrollTestimonials(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-secondary hover:bg-muted transition-colors"
                aria-label="Depoimentos anteriores"
              >
                <ChevronLeft size={18} />
              </button>
            )}
            {testimonialIndex < maxIndex && (
              <button
                onClick={() => scrollTestimonials(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-background border border-border shadow-sm flex items-center justify-center text-secondary hover:bg-muted transition-colors"
                aria-label="Próximos depoimentos"
              >
                <ChevronRight size={18} />
              </button>
            )}
          </div>

          <div className="flex gap-2 justify-center mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`h-1.5 rounded-full transition-all ${i === testimonialIndex ? "bg-primary w-6" : "bg-border w-4"}`}
                aria-label={`Ir para grupo ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto max-w-4xl text-left md:text-center">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Novidades</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12">Blog</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((p, i) => (
              <motion.div key={p.slug} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${p.slug}`} className="block rounded-xl bg-background p-6 border border-border hover:shadow-sm transition-shadow text-left">
                  <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary mb-3">{p.category}</span>
                  <h3 className="font-heading font-semibold text-secondary mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-xs mb-3">{p.date}</p>
                  <p className="text-muted-foreground text-sm mb-4">{p.excerpt}</p>
                  <span className="text-primary text-sm font-semibold">Ler mais →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto text-left md:text-center max-w-2xl">
          <motion.div {...fadeUp}>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Agende sua consulta</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">Pronta para cuidar da sua saúde?</h2>
            <p className="text-muted-foreground mb-8">
              Estamos aqui para acompanhar você em cada etapa. Entre em contato e agende sua consulta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-center">
              <a href="https://wa.me/5542988622662" target="_blank" rel="noopener noreferrer" onClick={(e) => { e.preventDefault(); window.open("https://wa.me/5542988622662", "_blank"); }} className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 font-semibold text-secondary transition-transform hover:scale-105">
                Agendar via WhatsApp
              </a>
              <a href="tel:+554235321037" className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-8 py-3.5 font-semibold text-secondary transition-colors hover:bg-background">
                Ou ligue: (42) 3532-1037
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Index;
