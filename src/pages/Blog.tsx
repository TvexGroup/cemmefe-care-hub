import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroBanner from "@/components/HeroBanner";
import SeoHead from "@/components/SeoHead";
import { images } from "@/config/images";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

// Load all posts from src/content/posts/*.json at build time
const postModules = import.meta.glob("/src/content/posts/*.json", { eager: true });

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
};

export const blogPosts: BlogPost[] = Object.entries(postModules)
  .map(([path, module]) => {
    const slug = path.replace("/src/content/posts/", "").replace(".json", "");
    const data = (module as any).default ?? module;
    return { slug, ...data } as BlogPost;
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const categories = [...new Set(blogPosts.map((p) => p.category))];

const Blog = () => (
  <>
    <SeoHead title="Blog | CEMMEFE - Saúde da Mulher em Foco" description="Artigos e informações sobre saúde da mulher, ginecologia, obstetrícia e medicina fetal." path="/blog" />

    <HeroBanner title="Blog CEMMEFE" subtitle="Saúde da Mulher em Foco" image={images.blogBanner} />

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
                {categories.map((cat) => (
                  <li key={cat} className="text-muted-foreground hover:text-primary cursor-pointer transition-colors">{cat}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-muted p-6">
              <h3 className="font-heading font-semibold text-secondary mb-4">Posts Recentes</h3>
              <ul className="space-y-3 text-sm">
                {blogPosts.slice(0, 5).map((p) => (
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
