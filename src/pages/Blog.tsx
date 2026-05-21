import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import heroBlog from "@/assets/hero-blog.jpg";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

export const blogPosts = [
  {
    slug: "medicina-fetal",
    title: "O que é medicina fetal?",
    category: "Medicina Fetal",
    date: "15 Mar 2026",
    excerpt: "Entenda como a medicina fetal cuida da saúde do bebê ainda durante a gestação, quais exames são realizados e quando procurar um especialista.",
    content: `A medicina fetal é uma subespecialidade da obstetrícia que se dedica ao diagnóstico e tratamento de doenças do feto durante a gestação. Com o avanço da tecnologia, hoje é possível identificar diversas condições ainda no período intrauterino, permitindo intervenções precoces que podem salvar vidas.\n\nOs principais exames da medicina fetal incluem ultrassonografias morfológicas, ecocardiografia fetal, dopplerfluxometria e perfil biofísico fetal. Esses exames permitem avaliar o desenvolvimento do bebê, identificar malformações e monitorar gestações de alto risco.\n\nNa CEMMEFE, contamos com equipamentos de última geração e profissionais altamente qualificados para oferecer o melhor cuidado à gestante e ao bebê.`,
  },
  {
    slug: "checkup-ginecologico",
    title: "Quando fazer o check-up ginecológico?",
    category: "Ginecologia",
    date: "10 Mar 2026",
    excerpt: "Saiba a importância dos exames preventivos regulares para a saúde da mulher e quando agendar seu check-up ginecológico.",
    content: `O check-up ginecológico é fundamental para a prevenção e diagnóstico precoce de diversas condições que afetam a saúde da mulher. A recomendação geral é que toda mulher a partir dos 25 anos realize consultas ginecológicas anuais.\n\nDurante o check-up, são realizados exames como o Papanicolau, ultrassonografia transvaginal, exame de mamas e exames laboratoriais. Esses procedimentos permitem detectar precocemente condições como câncer de colo do útero, endometriose, miomas e outras alterações.\n\nNa CEMMEFE, oferecemos o Check-up Ginecológico Ampliado, que inclui uma avaliação completa e personalizada para cada paciente.`,
  },
  {
    slug: "ultrassonografia-gestacao",
    title: "Ultrassonografia na gestação: tudo que você precisa saber",
    category: "Obstetrícia",
    date: "05 Mar 2026",
    excerpt: "Tudo que você precisa saber sobre os exames de ultrassom durante a gravidez, tipos e quando realizar cada um.",
    content: `A ultrassonografia é uma ferramenta essencial no acompanhamento da gestação, permitindo visualizar o desenvolvimento do bebê e identificar possíveis complicações. Durante a gravidez, diferentes tipos de ultrassom são recomendados em momentos específicos.\n\nNo primeiro trimestre, a ultrassonografia transvaginal confirma a idade gestacional e avalia a vitalidade do embrião. O morfológico de primeiro trimestre, realizado entre 11 e 14 semanas, inclui a medida da translucência nucal.\n\nO morfológico de segundo trimestre, entre 20 e 24 semanas, é o mais detalhado, avaliando todos os órgãos e sistemas do bebê. No terceiro trimestre, o ultrassom com Doppler monitora o crescimento e o fluxo sanguíneo.\n\nNa CEMMEFE, realizamos todos os tipos de ultrassonografia obstétrica com equipamentos de última geração.`,
  },
];

const Blog = () => (
  <>
    <SeoHead title="Blog | CEMMEFE - Saúde da Mulher em Foco" description="Artigos e informações sobre saúde da mulher, ginecologia, obstetrícia e medicina fetal." path="/blog" />

    <HeroBanner title="Blog CEMMEFE" subtitle="Saúde da Mulher em Foco" image={heroBlog} />

    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Posts */}
          <div className="lg:col-span-2 space-y-6">
            {blogPosts.map((post, i) => (
              <motion.div key={post.slug} {...fadeUp} transition={{ delay: i * 0.1 }}>
                <Link to={`/blog/${post.slug}`} className="block rounded-2xl bg-background border border-border p-6 hover:shadow-md transition-shadow">
                  <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary mb-3">{post.category}</span>
                  <h2 className="text-xl font-heading font-semibold text-secondary mb-2">{post.title}</h2>
                  <p className="text-muted-foreground text-xs mb-3">{post.date}</p>
                  <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
                  <span className="text-primary text-sm font-semibold">Ler mais →</span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="font-heading font-semibold text-secondary mb-4">Categorias</h3>
              <ul className="space-y-2 text-sm">
                {["Medicina Fetal", "Ginecologia", "Obstetrícia"].map((cat) => (
                  <li key={cat} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">{cat}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="font-heading font-semibold text-secondary mb-4">Posts Recentes</h3>
              <ul className="space-y-3 text-sm">
                {blogPosts.map((p) => (
                  <li key={p.slug}>
                    <Link to={`/blog/${p.slug}`} className="text-muted-foreground hover:text-primary transition-colors">{p.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-primary/10 p-6">
              <h3 className="font-heading font-semibold text-secondary mb-2">Newsletter</h3>
              <p className="text-muted-foreground text-sm mb-4">Receba novidades sobre saúde da mulher.</p>
              <input type="email" placeholder="Seu e-mail" className="w-full rounded-lg border border-border px-4 py-2 text-sm mb-3 bg-background" />
              <button className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-secondary transition-transform hover:scale-105">
                Inscrever-se
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </>
);

export default Blog;
