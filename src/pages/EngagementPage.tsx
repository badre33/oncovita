import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { events, featuredEvent } from "@/data/events";
import { applySeo } from "@/lib/seo";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

interface WallItem {
  src: string;
  alt: string;
  eventTitle: string;
  category: string;
  date: string;
  location: string;
  caption: string;
}

const EngagementPage = () => {
  const featured = featuredEvent();

  // Flatten all event photos into a single wall feed
  const wallItems: WallItem[] = useMemo(() => {
    const items: WallItem[] = [];
    events.forEach((ev) => {
      const imgs = ev.images && ev.images.length > 0
        ? ev.images
        : [{ src: ev.image, alt: ev.imageAlt }];
      imgs.forEach((im) => {
        items.push({
          src: im.src,
          alt: im.alt,
          eventTitle: ev.title,
          category: ev.category,
          date: ev.date,
          location: ev.location,
          caption: ev.excerpt,
        });
      });
    });
    return items;
  }, []);

  useEffect(() => {
    applySeo({
      title:
        "Engagement & Événements Oncovita — Octobre Rose, ateliers, interventions à Casablanca",
      description:
        "Découvrez en images les actions du Dr Malak Rita Hajji et du centre Oncovita : Octobre Rose, ateliers de sensibilisation, interventions médias et rencontres au Maroc.",
      keywords: [
        "Octobre Rose Casablanca",
        "sensibilisation cancer du sein Maroc",
        "Dr Malak Rita Hajji",
        "événements Oncovita",
        "Sabahiyates Oncovita",
        "Nexia Morocco sensibilisation",
      ],
      url: "/engagement",
      image: featured.image,
      imageAlt: featured.imageAlt,
      type: "website",
    });

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
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 gradient-warm">
        <div className="container-oncovita px-5 md:px-12 lg:px-20 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Album de souvenirs Oncovita
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Nos engagements en images
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              Au Centre et à l'extérieur, le Dr Malak Rita Hajji et l'équipe Oncovita s'engagent
              au quotidien : Octobre Rose, ateliers de sensibilisation, interventions médias et
              rencontres avec les patientes à travers le Maroc.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mur de souvenirs — Pinterest masonry */}
      <section className="section-padding pt-12">
        <div className="container-oncovita px-5 md:px-12 lg:px-20">
          <div
            className="[column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 gap-5 md:gap-7"
          >
            {wallItems.map((item, i) => (
              <figure
                key={`${item.src}-${i}`}
                className="mb-5 md:mb-7 break-inside-avoid bg-card rounded-2xl overflow-hidden shadow-soft hover-lift"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="w-full h-auto block"
                />
                <figcaption className="p-5">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-body text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg md:text-xl text-foreground mt-2 leading-snug">
                    {item.eventTitle}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-muted-foreground font-body text-xs mt-2">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} /> {formatDate(item.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {item.location}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
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
