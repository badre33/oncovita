import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2 } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getRelatedPosts, blogPosts } from "@/data/blogPosts";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — Journal Oncovita`;
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", post.metaDescription);
    setMeta("keywords", post.keywords.join(", "));

    // JSON-LD Article structured data
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      datePublished: post.date,
      author: { "@type": "Person", name: "Dr Malak Rita Hajji" },
      publisher: {
        "@type": "Organization",
        name: "Oncovita",
        logo: { "@type": "ImageObject", url: "https://oncovita.ma/logo.png" },
      },
      image: `https://oncovita.ma${post.image}`,
      mainEntityOfPage: `https://oncovita.ma/journal/${post.slug}`,
    });
    ld.id = "ld-article";
    document.head.appendChild(ld);
    return () => {
      document.getElementById("ld-article")?.remove();
    };
  }, [post]);

  const handleShare = async () => {
    if (!post) return;
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text: post.excerpt, url });
      } catch {
        /* user cancelled */
      }
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  if (!post) return <Navigate to="/journal" replace />;
  const related = getRelatedPosts(post.slug, 2);

  return (
    <Layout>
      <article>
        {/* Hero */}
        <section className="relative h-[55vh] md:h-[65vh] min-h-[420px] flex items-end">
          <div className="absolute inset-0">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/70 to-foreground/30" />
          </div>
          <div className="relative container-oncovita px-5 md:px-12 lg:px-20 pb-12 md:pb-16">
            <div className="max-w-3xl">
              <Link
                to="/journal"
                className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground font-body text-xs tracking-[0.2em] uppercase mb-6 transition-colors"
              >
                <ArrowLeft size={14} /> Retour au Journal
              </Link>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-4">
                {post.category}
              </p>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {post.title}
              </h1>
              <p className="font-body text-primary-foreground/90 text-base md:text-lg max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {post.subtitle}
              </p>
              <div className="flex flex-wrap items-center gap-5 mt-6 text-primary-foreground/80 font-body text-sm">
                <span className="flex items-center gap-2">
                  <Calendar size={14} /> {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={14} /> {post.readingTime} de lecture
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <section className="py-16 md:py-24">
          <div className="container-oncovita px-5 md:px-12 lg:px-20">
            <div className="max-w-2xl mx-auto">
              <AnimatedSection>
                <div className="prose-oncovita font-body text-foreground/85 leading-relaxed text-lg">
                  {post.content.map((block, i) => {
                    if (block.type === "p")
                      return (
                        <p key={i} className="mb-6">
                          {block.text}
                        </p>
                      );
                    if (block.type === "h2")
                      return (
                        <h2
                          key={i}
                          className="font-display text-3xl md:text-4xl text-foreground mt-12 mb-5"
                        >
                          {block.text}
                        </h2>
                      );
                    if (block.type === "h3")
                      return (
                        <h3
                          key={i}
                          className="font-display text-2xl text-foreground mt-8 mb-4"
                        >
                          {block.text}
                        </h3>
                      );
                    if (block.type === "ul")
                      return (
                        <ul key={i} className="space-y-3 mb-8 pl-0">
                          {block.items.map((it) => (
                            <li key={it} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    if (block.type === "quote")
                      return (
                        <blockquote
                          key={i}
                          className="border-l-2 border-primary pl-6 my-10 font-display text-2xl md:text-3xl text-foreground italic leading-snug"
                        >
                          {block.text}
                        </blockquote>
                      );
                    return null;
                  })}
                </div>

                <div className="flex items-center justify-between mt-12 pt-8 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground">
                    Article rédigé avec l'expertise du <span className="text-foreground">Dr Malak Rita Hajji</span>
                  </p>
                  <button
                    onClick={handleShare}
                    aria-label="Partager l'article"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-body text-sm tracking-wider uppercase transition-colors"
                  >
                    <Share2 size={16} /> Partager
                  </button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding gradient-warm">
          <div className="container-oncovita text-center max-w-2xl mx-auto">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                Prendre rendez-vous
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Un accompagnement humain et personnalisé
              </h2>
              <p className="font-body text-muted-foreground mb-8">
                Notre équipe est à vos côtés à chaque étape du parcours de soin.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contacter Oncovita</Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="section-padding">
            <div className="container-oncovita">
              <AnimatedSection>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
                  À lire aussi
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
                  Autres articles du Journal
                </h2>
              </AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {related.map((rp, i) => (
                  <AnimatedSection key={rp.slug} delay={i * 120}>
                    <Link
                      to={`/journal/${rp.slug}`}
                      className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover-lift"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={rp.image}
                          alt={rp.imageAlt}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-3">
                          {rp.category}
                        </p>
                        <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                          {rp.title}
                        </h3>
                        <span className="inline-flex items-center gap-2 text-primary font-body text-xs tracking-wider uppercase">
                          Lire <ArrowRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
};

export default ArticlePage;

export const allSlugs = blogPosts.map((p) => p.slug);
