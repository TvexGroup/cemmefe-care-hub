import { useEffect } from "react";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
}

const SeoHead = ({ title, description, path }: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(name.startsWith("og:") ? "property" : "name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:url", `https://cemmefe.com.br${path}`);
  }, [title, description, path]);

  return null;
};

export default SeoHead;
