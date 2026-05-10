import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navigation, Car, MapPin, Phone, Clock, Accessibility, Building2, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { applySeo } from "@/lib/seo";
import terrasseOncovita from "@/assets/terrasse-oncovita.jpg";

const COORDS = { lat: 33.5527948, lng: -7.6436479 };
const PLACE_ID = "ChIJs-nWZZktpg0RkmzRqHZnGG8";

const directionsLinks = {
  google: `https://www.google.com/maps/dir/?api=1&destination=Oncovita+Casablanca&destination_place_id=${PLACE_ID}`,
  waze: `https://ul.waze.com/ul?place=${PLACE_ID}&ll=${COORDS.lat}%2C${COORDS.lng}&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location`,
  apple: `https://maps.apple.com/?daddr=${COORDS.lat},${COORDS.lng}&q=Oncovita`,
};

const faqs = [
  {
    q: "Où se trouve exactement le Centre Oncovita ?",
    a: "Le Centre Oncovita se situe au 5ème étage de l'Immeuble FIRST, au 401 Route d'El Jadida à Casablanca (20000), Maroc.",
  },
  {
    q: "Comment venir au Centre Oncovita en voiture ?",
    a: "Le Centre est facilement accessible par la Route d'El Jadida. Un parking est disponible à proximité immédiate de l'Immeuble FIRST. Vous pouvez lancer l'itinéraire directement via Google Maps, Waze ou Apple Plans depuis cette page.",
  },
  {
    q: "Le Centre est-il accessible aux personnes à mobilité réduite ?",
    a: "Oui. L'Immeuble FIRST dispose d'un ascenseur permettant un accès facile au 5ème étage. N'hésitez pas à nous contacter en amont au +212 5 22 98 07 19 si vous avez des besoins spécifiques.",
  },
  {
    q: "Quels sont les horaires d'ouverture ?",
    a: "Le Centre est ouvert du lundi au vendredi, de 8h30 à 12h30 et de 13h30 à 17h30. Fermé le samedi et le dimanche. Les rendez-vous sont à prendre par téléphone.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Pour prendre rendez-vous, contactez-nous au +212 5 22 98 07 19 ou par email à contact@oncovita.ma. Vous pouvez également utiliser le formulaire de contact disponible sur notre site.",
  },
];

const AccessPage = () => {
  useEffect(() => {
    applySeo({
      title: "Accès & Itinéraire — Centre Oncovita Casablanca | Route d'El Jadida",
      description:
        "Comment venir au Centre Oncovita à Casablanca : 401 Route d'El Jadida, Immeuble FIRST 5ᵉ étage. Itinéraire Google Maps, Waze, Apple Plans, parking et accessibilité.",
      keywords: [
        "accès Oncovita Casablanca",
        "itinéraire Oncovita",
        "Route d'El Jadida Casablanca",
        "Immeuble FIRST Casablanca",
        "centre oncologie Casablanca adresse",
        "Oncovita Waze",
        "Oncovita Google Maps",
      ],
      url: "/acces",
      image: terrasseOncovita,
      imageAlt: "Centre Oncovita à Casablanca — Route d'El Jadida",
      type: "website",
    });

    const breadcrumb = document.createElement("script");
    breadcrumb.type = "application/ld+json";
    breadcrumb.id = "ld-acces-breadcrumb";
    breadcrumb.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://oncovita.ma/" },
        { "@type": "ListItem", position: 2, name: "Accès", item: "https://oncovita.ma/acces" },
      ],
    });
    document.head.appendChild(breadcrumb);

    const faq = document.createElement("script");
    faq.type = "application/ld+json";
    faq.id = "ld-acces-faq";
    faq.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
    document.head.appendChild(faq);

    const place = document.createElement("script");
    place.type = "application/ld+json";
    place.id = "ld-acces-place";
    place.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Place",
      name: "Centre Oncovita",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5ème étage, Immeuble FIRST, 401 Route d'El Jadida",
        addressLocality: "Casablanca",
        postalCode: "20000",
        addressCountry: "MA",
      },
      geo: { "@type": "GeoCoordinates", latitude: COORDS.lat, longitude: COORDS.lng },
      hasMap: `https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`,
    });
    document.head.appendChild(place);

    return () => {
      document.getElementById("ld-acces-breadcrumb")?.remove();
      document.getElementById("ld-acces-faq")?.remove();
      document.getElementById("ld-acces-place")?.remove();
    };
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 gradient-warm">
        <div className="container-oncovita px-5 md:px-12 lg:px-20 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Accès & Itinéraire
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Venir au Centre Oncovita
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">
              5ème étage, Immeuble FIRST · 401 Route d'El Jadida · Casablanca 20000
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Itinéraire boutons */}
      <section className="section-padding pt-12">
        <div className="container-oncovita px-5 md:px-12 lg:px-20">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-card h-96 mb-8">
              <iframe
                src="https://www.google.com/maps?q=Oncovita,+401+Route+d'El+Jadida,+Casablanca&hl=fr&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Carte du Centre Oncovita à Casablanca"
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="hero" size="lg" asChild className="gap-2">
                <a href={directionsLinks.google} target="_blank" rel="noopener noreferrer">
                  <Navigation size={16} /> Itinéraire — Google Maps
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="gap-2">
                <a href={directionsLinks.waze} target="_blank" rel="noopener noreferrer">
                  <Navigation size={16} /> Itinéraire — Waze
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="gap-2">
                <a href={directionsLinks.apple} target="_blank" rel="noopener noreferrer">
                  <Navigation size={16} /> Itinéraire — Apple Plans
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="section-padding pt-0">
        <div className="container-oncovita px-5 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Building2,
                title: "Adresse",
                text: "5ème étage, Immeuble FIRST, 401 Route d'El Jadida, Casablanca 20000",
              },
              {
                icon: Car,
                title: "En voiture",
                text: "Accès direct par la Route d'El Jadida. Parking disponible à proximité immédiate de l'Immeuble FIRST.",
              },
              {
                icon: Accessibility,
                title: "Accessibilité",
                text: "Ascenseur jusqu'au 5ème étage. Accès adapté aux personnes à mobilité réduite.",
              },
              {
                icon: Clock,
                title: "Horaires",
                text: "Lun – Ven : 8h30 – 12h30 / 13h30 – 17h30. Fermé samedi et dimanche.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon size={20} />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita px-5 md:px-12 lg:px-20 max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 text-center">
              Questions fréquentes
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 text-center">
              Tout savoir avant votre visite
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 80}>
                <details className="group bg-card rounded-2xl shadow-soft p-6 open:shadow-card transition-all">
                  <summary className="font-display text-lg text-foreground cursor-pointer list-none flex items-start justify-between gap-4">
                    {f.q}
                    <span className="text-primary text-2xl leading-none transition-transform group-open:rotate-45 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="font-body text-muted-foreground leading-relaxed mt-4">{f.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA contact */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita text-center max-w-2xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              Besoin d'aide pour vous rendre au Centre ?
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Notre équipe est à votre écoute
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild className="gap-2">
                <a href="tel:+212522980719">
                  <Phone size={16} /> +212 5 22 98 07 19
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="gap-2">
                <Link to="/contact">
                  <MapPin size={16} /> Page contact <ArrowRight size={14} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default AccessPage;
