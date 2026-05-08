// Lightweight SEO meta tag helper for client-side updates.
// Manages title, description, keywords, canonical, Open Graph and Twitter Card.

const SEO_MANAGED_ATTR = "data-oncovita-seo";

const upsertTag = (selector: string, create: () => HTMLElement) => {
  let tag = document.head.querySelector(selector) as HTMLElement | null;
  if (!tag) {
    tag = create();
    tag.setAttribute(SEO_MANAGED_ATTR, "true");
    document.head.appendChild(tag);
  }
  return tag;
};

const setName = (name: string, content: string) => {
  const tag = upsertTag(`meta[name="${name}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("name", name);
    return m;
  });
  tag.setAttribute("content", content);
};

const setProperty = (property: string, content: string) => {
  const tag = upsertTag(`meta[property="${property}"]`, () => {
    const m = document.createElement("meta");
    m.setAttribute("property", property);
    return m;
  });
  tag.setAttribute("content", content);
};

const setCanonical = (href: string) => {
  const tag = upsertTag('link[rel="canonical"]', () => {
    const l = document.createElement("link");
    l.setAttribute("rel", "canonical");
    return l;
  });
  tag.setAttribute("href", href);
};

export interface SeoOptions {
  title: string;
  description: string;
  keywords?: string[];
  /** Absolute or root-relative path. */
  url?: string;
  /** Image URL — will be made absolute. */
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  siteName?: string;
  locale?: string;
  twitterHandle?: string;
}

const SITE_ORIGIN = "https://oncovita.ma";

const absolute = (path: string) => {
  if (/^https?:\/\//i.test(path)) return path;
  const origin =
    typeof window !== "undefined" && window.location?.origin
      ? window.location.origin
      : SITE_ORIGIN;
  // Prefer production origin for crawlers when available
  const base = origin.includes("oncovita.ma") ? SITE_ORIGIN : origin;
  return `${base}${path.startsWith("/") ? "" : "/"}${path}`;
};

export const applySeo = (opts: SeoOptions) => {
  const {
    title,
    description,
    keywords,
    url,
    image,
    imageAlt,
    type = "website",
    siteName = "Oncovita",
    locale = "fr_FR",
    twitterHandle,
  } = opts;

  document.title = title;
  setName("description", description);
  if (keywords?.length) setName("keywords", keywords.join(", "));

  const canonical = url ? absolute(url) : undefined;
  if (canonical) setCanonical(canonical);

  // Open Graph
  setProperty("og:title", title);
  setProperty("og:description", description);
  setProperty("og:type", type);
  setProperty("og:site_name", siteName);
  setProperty("og:locale", locale);
  if (canonical) setProperty("og:url", canonical);
  if (image) {
    const absImg = absolute(image);
    setProperty("og:image", absImg);
    setProperty("og:image:secure_url", absImg);
    setProperty("og:image:width", "1280");
    setProperty("og:image:height", "832");
    if (imageAlt) setProperty("og:image:alt", imageAlt);
  }

  // Twitter Card
  setName("twitter:card", image ? "summary_large_image" : "summary");
  setName("twitter:title", title);
  setName("twitter:description", description);
  if (image) {
    setName("twitter:image", absolute(image));
    if (imageAlt) setName("twitter:image:alt", imageAlt);
  }
  if (twitterHandle) setName("twitter:site", twitterHandle);
};
