import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { events, eventCategories, featuredEvent, type EventCategory, type OncovitaEvent } from "@/data/events";
import { applySeo } from "@/lib/seo";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const EventMedia = ({ ev, eager = false }: { ev: OncovitaEvent; eager?: boolean }) => {
  const imgs = ev.images && ev.images.length > 1 ? ev.images : null;
  if (!imgs) {
    return (
      <img
        src={ev.image}
        alt={ev.imageAlt}
        loading={eager ? "eager" : "lazy"}
        width={1280}
        height={960}
        className="w-full h-full object-cover"
      />
    );
  }
  return (
    <Carousel opts={{ loop: true }} className="w-full h-full">
      <CarouselContent className="h-full">
        {imgs.map((im, i) => (
          <CarouselItem key={i} className="h-full">
            <img
              src={im.src}
              alt={im.alt}
              loading={eager && i === 0 ? "eager" : "lazy"}
              width={1280}
              height={960}
              className="w-full h-full object-cover aspect-[4/3]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3" />
      <CarouselNext className="right-3" />
    </Carousel>
  );
};

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const EngagementPage = () => {
  const [activeCategory, setActiveCategory] = useState<EventCategory | "Tous">("Tous");
  const featured = featuredEvent();

  const visibleEvents = useMemo(() => {
    const list = activeCategory === "Tous"
      ? events
      : events.filter((e) => e.category === activeCategory);
    return list.filter((e) => e.slug !== featured.slug);
  }, [activeCategory, featured.slug]);

  useEffect(() => {
    applySeo({
      title:
        "Engagement & Événements Oncovita — Octobre Rose, ateliers, interventions à Casablanca",
      description:
        "Découvrez les actions du Dr Malak Rita Hajji et du centre Oncovita : Octobre Rose, séances de yoga adapté, tables de parole, conférences et interventions de sensibilisation au Maroc.",
      keywords: [
        "Octobre Rose Casablanca",
        "sensibilisation cancer du sein Maroc",
        "yoga oncologie Casablanca",
        "table de parole patientes cancer",
        "Dr Malak Rita Hajji",
        "événements Oncovita",
      ],
      url: "/engagement",
      image: featured.image,
      imageAlt: featured.imageAlt,
      type: "website",
    });

    // JSON-LD ItemList of Events
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: events.map((ev, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Event",
          name: ev.title,
          startDate: ev.date,
          eventStatus: "https://schema.org/EventScheduled",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          location: {
            "@type": "Place",
            name: ev.location,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Casablanca",
              addressCountry: "MA",
            },
          },
          image: `https://oncovita.ma${ev.image}`,
          description: ev.excerpt,
          organizer: {
            "@type": "Organization",
            name: "Oncovita",
            url: "https://oncovita.ma",
          },
        },
      })),
    });
    ld.id = "ld-events";
    document.head.appendChild(ld);
    return () => {
      document.getElementById("ld-events")?.remove();
    };
  }, [featured.image, featured.imageAlt]);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 gradient-warm">
        <div className="container-oncovita px-5 md:px-12 lg:px-20 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Engagement Oncovita
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Actions, événements & sensibilisation
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Au Centre et à l'extérieur, le Dr Malak Rita Hajji et l'équipe Oncovita s'engagent
              au quotidien : Octobre Rose, ateliers de yoga adapté, tables de parole, conférences
              et interventions de sensibilisation à travers le Maroc.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured event */}
      <section className="section-padding">
        <div className="container-oncovita px-5 md:px-12 lg:px-20">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-card rounded-3xl overflow-hidden shadow-soft">
              <div className="aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden relative">
                <EventMedia ev={featured} eager />
              </div>
              <div className="p-8 md:p-12 lg:pr-16">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  À l'affiche · {featured.category}
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-5 leading-tight">
                  {featured.title}
                </h2>
                <div className="flex flex-wrap items-center gap-5 text-muted-foreground font-body text-sm mb-6">
                  <span className="flex items-center gap-2">
                    <Calendar size={14} /> {formatDate(featured.date)}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} /> {featured.location}
                  </span>
                </div>
                <p className="font-body text-foreground/80 leading-relaxed mb-6">
                  {featured.description}
                </p>
                {featured.highlights && (
                  <ul className="space-y-2 mb-8">
                    {featured.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 font-body text-sm text-foreground/75">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <Button variant="hero" asChild>
                  <Link to="/contact">Participer ou en savoir plus</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-6">
        <div className="container-oncovita px-5 md:px-12 lg:px-20">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {(["Tous", ...eventCategories] as const).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as EventCategory | "Tous")}
                  className={`font-body text-xs md:text-sm tracking-wider uppercase px-4 py-2 rounded-full border transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-foreground/70 border-border hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events grid */}
      <section className="section-padding pt-10">
        <div className="container-oncovita px-5 md:px-12 lg:px-20">
          {visibleEvents.length === 0 ? (
            <p className="text-center font-body text-muted-foreground">
              Aucun événement dans cette catégorie pour le moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {visibleEvents.map((ev, i) => (
                <AnimatedSection key={ev.slug} delay={i * 100}>
                  <article className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift h-full flex flex-col">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <EventMedia ev={ev} />
                    </div>
                    <div className="p-6 md:p-7 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full font-body bg-primary/10 text-primary">
                          {ev.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                        {ev.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground font-body text-xs mb-4">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} /> {formatDate(ev.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} /> {ev.location}
                        </span>
                      </div>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">
                        {ev.excerpt}
                      </p>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Vous souhaitez participer ?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Rejoignez nos prochains ateliers et rencontres
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Patientes, proches, professionnels de santé : contactez le Centre Oncovita pour
              connaître le calendrier de nos prochaines actions.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Contacter le Centre <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default EngagementPage;
