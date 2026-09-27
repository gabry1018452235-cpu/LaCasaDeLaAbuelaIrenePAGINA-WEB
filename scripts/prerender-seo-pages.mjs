import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { DEFAULT_OG_IMAGE, SEO_PAGES, SITE_URL } from "../src/lib/seoConfig.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectRoot, "dist");
const template = await readFile(resolve(outputDirectory, "index.html"), "utf8");

function escapeAttribute(value) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;");
}

function replaceMeta(html, attribute, key, content) {
  const selector = `${attribute}="${key}"`;
  const pattern = new RegExp(`<meta\\s+${selector}\\s+content="[^"]*"\\s*\\/? >`.replace("\\/? >", "\\/?\\s*>") );
  if (!pattern.test(html)) {
    throw new Error(`Missing ${attribute}=${key} in generated index.html`);
  }
  return html.replace(
    pattern,
    `<meta ${selector} content="${escapeAttribute(content)}" />`,
  );
}

function renderPage(path, page) {
  const canonicalUrl = new URL(path, SITE_URL).href;
  let html = template.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`);

  const tags = [
    ["name", "description", page.description],
    ["name", "robots", "index, follow"],
    ["property", "og:type", "website"],
    ["property", "og:title", page.title],
    ["property", "og:description", page.description],
    ["property", "og:url", canonicalUrl],
    ["property", "og:image", DEFAULT_OG_IMAGE],
    ["property", "og:locale", "es_CO"],
    ["name", "twitter:card", "summary_large_image"],
    ["name", "twitter:title", page.title],
    ["name", "twitter:description", page.description],
    ["name", "twitter:image", DEFAULT_OG_IMAGE],
  ];

  for (const [attribute, key, content] of tags) {
    html = replaceMeta(html, attribute, key, content);
  }

  const canonicalPattern = /<link rel="canonical" href="[^"]*"\s*\/>/;
  if (!canonicalPattern.test(html)) {
    throw new Error("Missing canonical link in generated index.html");
  }
  return html.replace(
    canonicalPattern,
    `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
  );
}

for (const [path, page] of Object.entries(SEO_PAGES)) {
  const pageDirectory = path === "/" ? outputDirectory : resolve(outputDirectory, path.slice(1));
  await mkdir(pageDirectory, { recursive: true });
  await writeFile(resolve(pageDirectory, "index.html"), renderPage(path, page), "utf8");
}

console.log(`Generated static SEO HTML for ${Object.keys(SEO_PAGES).length} routes`);