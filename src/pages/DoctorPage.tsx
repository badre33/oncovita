import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { applySeo } from "@/lib/seo";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import drFounder from "@/assets/dr-founder.jpg";
import laParenthese from "@/assets/la-parenthese.jpg";

const PAGE_URL = "https://oncovita.ma/dr-malak-rita-hajji";
const WHATSAPP_URL =
  "https://wa.me/212669337548?text=Bonjour%2C%20je%20souhaite%20prendre%20rendez-vous%20avec%20le%20Dr%20Malak%20Rita%20Hajji.";

const faqs = [
  {
    q: "Qui est le Dr Malak Rita Hajji ?",
    a: "Le Dr Malak Rita Hajji est onco-radiothérapeute à Casablanca et fondatrice d'Oncovita, centre d'oncologie intégrative situé au 5e étage de l'Immeuble FIRST, 401 route d'El Jadida. Elle est également membre du conseil d'administration du groupe Oncorad.",
  },
  {
    q: "Où consulte le Dr Malak Rita Hajji à Casablanca ?",
    a: "Elle consulte au centre Oncovita : 5e étage, Immeuble FIRST, 401 route d'El Jadida, Casablanca. Le centre est ouvert du lundi au vendredi, de 8h30 à 12h30 et de 13h30 à 17h30.",
  },
  {
    q: "Comment prendre rendez-vous avec le Dr Malak Rita Hajji ?",
    a: "Vous pouvez appeler le centre Oncovita au 05 22 98 07 19 ou écrire sur WhatsApp depuis le site. L'équipe vous indiquera les prochaines disponibilités.",
  },
  {
    q: "Comment se déroule la première consultation ?",
    a: "La première consultation a lieu dans la salle La Parenthèse. Elle permet d'écouter l'histoire du patient, d'analyser les examens et le dossier médical, d'établir un diagnostic ou une stratégie thérapeutique et d'expliquer les différentes options de traitement.",
  },
  {
    q: "Les soins de support proposés à Oncovita remplacent-ils les traitements du cancer ?",
    a: "Non. Les soins de support et les accompagnements proposés à Oncovita viennent en complément des traitements prescrits par l'équipe oncologique (chirurgie, chimiothérapie, radiothérapie, immunothérapie, hormonothérapie). Ils visent à améliorer le confort et la qualité de vie pendant le parcours de soins.",
  },
];

const consultationSteps = [
  "Écouter l'histoire du patient",
  "Analyser les examens et le dossier médical",
  "Établir un diagnostic ou une stratégie thérapeutique",
  "Expliquer les différentes options de traitement",
];

const DoctorPage = () => {
  useEffect(() => {
    applySeo({
      title: "Dr Malak Rita Hajji, onco-radiothérapeute à Casablanca | Oncovita",
      description:
        "Dr Malak Rita Hajji, onco-radiothérapeute à Casablanca et fondatrice d'Oncovita, centre d'oncologie intégrative, route d'El Jadida. Consultation et prise de rendez-vous.",
      keywords: [
        "Dr Malak Rita Hajji",
        "onco-radiothérapeute Casablanca",
        "oncologue Casablanca",
        "radiothérapeute Casablanca",
        "cancérologue Casablanca",
        "Oncovita",
      ],
      url: "/dr-malak-rita-hajji",
      type: "website",
    });

    const add = (id: string, data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    };

    add("ld-doctor-physician", {
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "Dr Malak Rita Hajji",
      description:
        "Onco-radiothérapeute à Casablanca, fondatrice d'Oncovita, centre d'oncologie intégrative.",
      medicalSpecialty: "Oncologic",
      url: PAGE_URL,
      image: "https://oncovita.ma/og-image.jpg",
      telephone: "+212522980719",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5ème étage, Immeuble FIRST, 401 Route d'El Jadida",
        addressLocality: "Casablanca",
        postalCode: "20000",
        addressCountry: "MA",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.5697, longitude: -7.6322 },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "12:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "13:30",
          closes: "17:30",
        },
      ],
      areaServed: { "@type": "City", name: "Casablanca" },
      parentOrganization: { "@type": "MedicalClinic", name: "Oncovita", url: "https://oncovita.ma/" },
    });

    add("ld-doctor-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });

    add("ld-doctor-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://oncovita.ma/" },
        { "@type": "ListItem", position: 2, name: "Dr Malak Rita Hajji", item: PAGE_URL },
      ],
    });

    return () => {
      ["ld-doctor-physician", "ld-doctor-faq", "ld-doctor-breadcrumb"].forEach((id) =>
        document.getElementById(id)?.remove(),
      );
    };
  }, []);

  return (
    <Layout>
      {/* En-tête */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3">
              <AnimatedSection>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                  Oncologue · Fondatrice d'Oncovita
                </p>
                <h1 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
                  Dr Malak Rita Hajji, onco-radiothérapeute à Casablanca
                </h1>
                <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
                  Le Dr Malak Rita Hajji consulte au centre Oncovita, centre d'oncologie intégrative
                  qu'elle a fondé au 5e étage de l'Immeuble FIRST, 401 route d'El Jadida, à Casablanca.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default" size="lg" asChild>
                    <a href="tel:+212522980719" className="gap-2">
                      <Phone size={16} /> Appeler le centre
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                      <MessageCircle size={16} /> Prendre rendez-vous sur WhatsApp
                    </a>
                  </Button>
                </div>
              </AnimatedSection>
            </div>
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <img
                  src={drFounder}
                  alt="Dr Malak Rita Hajji, onco-radiothérapeute à Casablanca"
                  className="rounded-2xl shadow-card w-full max-w-sm mx-auto"
                  loading="eager"
                />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Parcours</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Une cancérologue issue d'une famille engagée contre le cancer
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Son père, le Dr Omar Hajji, est l'un des pionniers de l'oncologie au Maroc et cofondateur du
              groupe Oncorad. Le Dr Malak Rita Hajji a grandi au contact de cette discipline, ce qui lui a
              permis de comprendre très tôt les enjeux médicaux, mais aussi humains, liés à la maladie.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Au fil de sa formation et de son expérience, elle développe une vision claire de la médecine :
              une oncologie exigeante sur le plan scientifique, attentive à ce que vivent les patients.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              En parallèle de son activité clinique, elle est membre du conseil d'administration du groupe
              Oncorad.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Consultation */}
      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img
                src={laParenthese}
                alt="La Parenthèse, salle de consultation du centre Oncovita"
                className="rounded-2xl shadow-card w-full"
                loading="lazy"
              />
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">La consultation</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                La première consultation a lieu dans la salle La Parenthèse
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-4">Ce premier rendez-vous permet de :</p>
              <ul className="space-y-3 mb-6">
                {consultationSteps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="font-body text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-muted-foreground leading-relaxed">
                À Oncovita, les soins de support viennent en complément des traitements prescrits par
                l'équipe oncologique. Ils ne les remplacent pas : ils visent à améliorer le confort et la
                qualité de vie pendant le parcours de soins.
              </p>
              <Button variant="link" className="px-0 mt-4" asChild>
                <Link to="/center" className="gap-2">
                  Découvrir le parcours de soins <ArrowRight size={16} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 text-center">
              Questions fréquentes
            </h2>
          </AnimatedSection>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <AnimatedSection key={f.q} delay={i * 80}>
                <div className="bg-card rounded-2xl shadow-soft p-6 md:p-8">
                  <h3 className="font-display text-xl text-foreground mb-3">{f.q}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DoctorPage;
