// Pré-rendu statique des pages après `vite build`.
// Google voit ainsi le contenu de chaque page dans le HTML, sans exécuter le JavaScript.
// Les routes sont lues dans public/sitemap.xml. En cas d'échec (navigateur absent, etc.),
// le script n'interrompt jamais le build : le site reste en mode SPA classique.

import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import path from "node:path";

const DIST = path.resolve("dist");
const PORT = 4179;
const BLOCKED = ["googletagmanager.com", "google-analytics.com", "behold.so", "behold.pictures", "instagram.com", "facebook", "fonts.g"];

const log = (...a) => console.log("[prerender]", ...a);

const routesFromSitemap = async () => {
  const xml = await readFile(path.join(DIST, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>https:\/\/oncovita\.ma([^<]*)<\/loc>/g)].map((m) => m[1] || "/");
};

const MIME = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon", ".json": "application/json", ".xml": "application/xml", ".txt": "text/plain", ".webmanifest": "application/manifest+json" };

const startServer = (shell) =>
  new Promise((resolve) => {
    const server = createServer(async (req, res) => {
      const url = decodeURIComponent(req.url.split("?")[0]);
      const file = path.join(DIST, url);
      if (url !== "/" && file.startsWith(DIST) && existsSync(file) && !file.endsWith(path.sep)) {
        try {
          const body = await readFile(file);
          res.writeHead(200, { "content-type": MIME[path.extname(file)] || "application/octet-stream" });
          return res.end(body);
        } catch { /* dossier : on retombe sur le shell SPA */ }
      }
      res.writeHead(200, { "content-type": "text/html" });
      res.end(shell);
    });
    server.listen(PORT, "127.0.0.1", () => resolve(server));
  });

const loadChromium = async () => {
  const { chromium } = await import("playwright");
  try {
    return await chromium.launch();
  } catch {
    for (const exe of ["/usr/bin/google-chrome", "/usr/bin/chromium"]) {
      if (existsSync(exe)) return await chromium.launch({ executablePath: exe });
    }
    log("installation de Chromium…");
    execSync("npx playwright install chromium-headless-shell", { stdio: "inherit" });
    return await chromium.launch();
  }
};

const main = async () => {
  const shell = await readFile(path.join(DIST, "index.html"), "utf8");
  const routes = await routesFromSitemap();
  const server = await startServer(shell);
  const browser = await loadChromium();
  let ok = 0;
  try {
    for (const route of routes) {
      const page = await browser.newPage();
      await page.route("**/*", (r) => (BLOCKED.some((d) => r.request().url().includes(d)) ? r.abort() : r.continue()));
      await page.goto(`http://127.0.0.1:${PORT}${route}`, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForFunction(() => document.querySelector("#root")?.children.length > 0, null, { timeout: 15000 });
      const html = await page.evaluate(() => {
        // Retire ce que les scripts tiers ont injecté (évite un double chargement de GTM)
        document.querySelectorAll('script[src*="googletagmanager"], script[src*="behold"], iframe').forEach((e) => e.remove());
        // Les JSON-LD ajoutés par les pages seront recréés au chargement : on les marque pour nettoyage
        document.querySelectorAll('script[type="application/ld+json"][id]').forEach((e) => e.setAttribute("data-prerender", "1"));
        // Les sections animées sont visibles d'emblée dans le HTML pré-rendu
        document.querySelectorAll("#root [style*='opacity']").forEach((e) => e.removeAttribute("style"));
        return "<!doctype html>\n" + document.documentElement.outerHTML;
      });
      await page.close();
      const out = route === "/" ? path.join(DIST, "index.html") : path.join(DIST, `${route}.html`);
      await mkdir(path.dirname(out), { recursive: true });
      await writeFile(out, html.replaceAll(`http://127.0.0.1:${PORT}`, "https://oncovita.ma"));
      ok++;
      log("✓", route);
    }
  } finally {
    await browser.close();
    server.close();
  }
  log(`${ok}/${routes.length} pages pré-rendues`);
};

main().catch((err) => {
  log("ignoré, le site reste en mode SPA :", err?.message || err);
  process.exit(0);
});
