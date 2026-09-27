import { useEffect } from "react";
import { DEFAULT_OG_IMAGE, SEO_PAGES, SITE_URL } from "@/lib/seoConfig";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function SeoMetadata({ path }) {
  useEffect(() => {
    const page = SEO_PAGES[path];
    if (!page) return;

    const canonicalUrl = new URL(path, SITE_URL).href;
    document.title = page.title;
    setMeta("name", "description", page.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:image", DEFAULT_OG_IMAGE);
    setMeta("property", "og:locale", "es_CO");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", DEFAULT_OG_IMAGE);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [path]);

  return null;
}