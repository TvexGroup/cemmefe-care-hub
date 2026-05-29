import { useEffect } from "react";

const DEFAULT_OG_IMAGE =
  "https://res.cloudinary.com/danfky4zs/image/upload/0G6A1403_q9pk2q";

interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SeoHead = ({ title, description, path, ogImage }: SeoHeadProps) => {
  useEffect(() => {
    document.title = title;

    const canonicalUrl = `https://cemmefe.com.br${path}`;
    const image = ogImage || DEFAULT_OG_IMAGE;

    const setMeta = (nameOrProperty: string, content: string) => {
      const isProperty =
        nameOrProperty.startsWith("og:") || nameOrProperty.startsWith("article:");
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(
        `meta[${attr}="${nameOrProperty}"]`
      ) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, nameOrProperty);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Canonical link
    let canonicalEl = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonicalUrl);

    setMeta("description", description);
    setMeta("og:title", title);
    setMeta("og:description", description);
    setMeta("og:type", "website");
    setMeta("og:url", canonicalUrl);
    setMeta("og:image", image);
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);
  }, [title, description, path, ogImage]);

  return null;
};

export default SeoHead;
