import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { SEO_PAGES, SITE_URL } from "../src/lib/seoConfig.js";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const publicDirectory = resolve(projectRoot, "public");
const sitemapUrls = Object.keys(SEO_PAGES)
  .map((path) => `  <url><loc>${new URL(path, SITE_URL).href}</loc></url>`)
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;

await mkdir(publicDirectory, { recursive: true });
await Promise.all([
  writeFile(resolve(publicDirectory, "sitemap.xml"), sitemap, "utf8"),
  writeFile(resolve(publicDirectory, "robots.txt"), robots, "utf8"),
]);

console.log(`Generated sitemap.xml and robots.txt for ${SITE_URL}`);