import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/data/blogPosts";

const categoryStyles: Record<string, string> = {
  "Regard Médical": "bg-primary/10 text-primary",
  Sensibilisation: "bg-accent/10 text-accent",
  Accompagnement: "bg-[hsl(var(--teal-light))] text-foreground",
};

const JournalPage = () => {
  useEffect(() => {
    document.title = "Journal Oncovita — Oncologie intégrative, prévention & accompagnement";
    const setMeta = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta(
      "description",
      "Le Journal d'Oncovita : articles d'expertise sur l'oncologie intégrative, la prévention du cancer et l'accompagnement des patients à Casablanca.",
    );
  }, []);

  return (
    <Layout>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-warm">
        <div className="container-oncovita px-5 md:px-12 lg:px-20 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Journal Oncovita
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Actualités & sensibilisation
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Comprendre, prévenir, accompagner. Nos articles abordent l'oncologie intégrative,
              la prévention du cancer et le bien-être des patients avec rigueur et humanité.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {blogPosts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 120}>
                <Link
                  to={`/journal/${post.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-soft hover-lift h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-body ${categoryStyles[post.category]}`}
                      >
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground font-body">
                        <Clock size={12} /> {post.readingTime}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary font-body text-sm tracking-wider uppercase mt-auto">
                      Lire l'article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding gradient-teal">
        <div className="container-oncovita text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Une question, un parcours à accompagner ?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              L'équipe d'Oncovita est à votre écoute pour toute information ou prise de rendez-vous.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Contacter le Centre</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default JournalPage;
