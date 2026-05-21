import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import SeoHead from "@/components/SeoHead";
import { blogPosts } from "./Blog";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-secondary mb-4">Post não encontrado</h1>
          <Link to="/blog" className="text-primary font-semibold">Voltar ao blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SeoHead title={`${post.title} | Blog CEMMEFE`} description={post.excerpt} path={`/blog/${post.slug}`} />

      <article className="pt-28 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft size={16} /> Voltar ao Blog
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">{post.title}</h1>
            <p className="text-muted-foreground text-sm mb-8">{post.date}</p>

            <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-secondary prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-secondary prose-a:text-primary">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-12 rounded-2xl bg-primary/10 p-8 text-center">
              <h3 className="font-heading font-semibold text-secondary mb-3">Gostou deste conteúdo?</h3>
              <p className="text-muted-foreground text-sm mb-4">Agende uma consulta com nossos especialistas.</p>
              <a
                href="https://wa.me/5542988622662"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-primary px-8 py-3 font-semibold text-secondary transition-transform hover:scale-105"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        </div>
      </article>
    </>
  );
};

export default BlogPost;
