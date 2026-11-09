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
    a: "Le Dr Malak Rita Hajji est onco-radiothérapeute à Casablanca et fondatrice d'Oncovita, centre d'oncologie intégrative situé au 5e étage de l'Immeuble FIRST, 401 route d'El Jadida. Elle pratique la cancérologie depuis 16 ans, exerce à la Clinique Le Littoral depuis 2016 et est administratrice du groupe Oncorad. Elle a été formée au CHU Ibn Rochd de Casablanca, au CHU de Bordeaux, à l'Université Paris VI et à l'Institut Gustave Roussy.",
  },
  {
    q: "Où consulte le Dr Malak Rita Hajji à Casablanca ?",
    a: "Elle consulte au centre Oncovita : 5e étage, Immeuble FIRST, 401 route d'El Jadida, Casablanca. Le centre est ouvert du lundi au vendredi, de 8h30 à 12h30 et de 13h30 à 17h30. Les séances de radiothérapie ont lieu à la Clinique Le Littoral (groupe Oncorad), à Casablanca, où elle exerce.",
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

const formation = [
  { year: "2002-2009", label: "Doctorat en médecine, Faculté de médecine et de pharmacie de Casablanca" },
  { year: "2009-2011", label: "Internat, CHU Ibn Rochd, Casablanca" },
  { year: "2011-2016", label: "Résidanat en oncologie-radiothérapie, CHU de Casablanca" },
  { year: "2014-2015", label: "Stage hospitalo-universitaire, CHU Haut-Lévêque, Bordeaux (France)" },
  { year: "2014", label: "Diplôme universitaire de radiothérapie de hautes technicités, CHU de Nice et CHU de Lille (Centre Oscar Lambret)" },
  { year: "2015", label: "Diplôme universitaire de carcinologie clinique, Université Paris VI" },
  { year: "2014, 2024", label: "Formation en chimiothérapie, Institut Gustave Roussy" },
];

const expertise = [
  { title: "Oncologie", text: "Cancers du sein, du système digestif, gynécologiques, du thorax, ORL, neuro-oncologie, sarcomes et urologie." },
  { title: "Radiothérapie", text: "IMRT, VMAT, IGRT, radiothérapie stéréotaxique (SBRT), radiochirurgie et curiethérapie." },
  { title: "Traitements systémiques", text: "Chimiothérapie, immunothérapie, thérapies ciblées et hormonothérapie." },
  { title: "Soins de support", text: "Oncologie intégrative, nutrition, psychologie, activité physique adaptée et qualité de vie." },
];

const publications = [
  {
    title: "Integrative Oncology in Clinical Practice, Research and Education: Middle-Eastern and Global Perspectives",
    journal: "Supportive Care in Cancer (Springer Nature)",
  },
  {
    title: "Clinical outcomes of LINAC-based stereotactic radiosurgery for trigeminal neuralgia in a low- and middle-income country",
    journal: "Surgical Neurology International",
  },
];

const PODCAST_ID = "heNCGUB-Cm4";

const presse = [
  {
    media: "Santé Mag",
    title: "Cancer du col de l'utérus au Maroc : le Dr Hajji appelle à une approche intégrative",
    url: "https://santemag.ma/cancer-du-col-de-luterus-au-maroc-le-dr-hajji-appelle-a-une-approche-integrative/",
  },
  {
    media: "Santé Mag",
    title: "Avant qu'il ne soit trop tard : comprendre le cancer du col de l'utérus avec le Dr Hajji",
    url: "https://santemag.ma/avant-quil-ne-soit-trop-tard-comprendre-le-cancer-du-col-de-luterus-avec-le-dr-hajji/",
  },
  {
    media: "Santé Mag",
    title: "Cancer du col de l'utérus, une maladie silencieuse expliquée par le Dr Hajji",
    url: "https://santemag.ma/cancer-du-col-de-luterus-une-maladie-silencieuse-expliquee-par-le-dr-hajji/",
  },
  {
    media: "Femmes du Maroc",
    title: "Dr Malak Rita Hajji : « Par peur, certaines femmes consultent tardivement »",
    url: "https://femmesdumaroc.com/reportage/interviews/dr-malak-rita-hajji-par-peur-certaines-femmes-consultent-tardivement",
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
      worksFor: [
        { "@type": "MedicalClinic", name: "Oncovita", url: "https://oncovita.ma/" },
        { "@type": "MedicalClinic", name: "Clinique Le Littoral" },
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "Faculté de médecine et de pharmacie de Casablanca" },
        { "@type": "CollegeOrUniversity", name: "Université Paris VI" },
      ],
      knowsLanguage: ["ar", "fr", "en", "es"],
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

    add("ld-doctor-video", {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Octobre Rose : Du traitement à l'accompagnement humain, le Dr Hajji décrypte le cancer du sein",
      description:
        "À l'occasion d'Octobre Rose, L'Instant Santé (Santé Mag Maroc) reçoit le Dr Malak Rita Hajji, onco-radiothérapeute et fondatrice d'Oncovita, pour parler du cancer du sein, du dépistage précoce, de la radiothérapie moderne et de l'accompagnement des patientes.",
      thumbnailUrl: `https://i.ytimg.com/vi/${PODCAST_ID}/hqdefault.jpg`,
      uploadDate: "2026-10-28",
      duration: "PT21M11S",
      embedUrl: `https://www.youtube.com/embed/${PODCAST_ID}`,
      contentUrl: `https://www.youtube.com/watch?v=${PODCAST_ID}`,
      publisher: { "@type": "Organization", name: "Santé Mag Maroc" },
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
      ["ld-doctor-physician", "ld-doctor-faq", "ld-doctor-video", "ld-doctor-breadcrumb"].forEach((id) =>
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
                  qu'elle a fondé au 5e étage de l'Immeuble FIRST, 401 route d'El Jadida, à Casablanca. Elle réalise
                  les traitements de radiothérapie à la Clinique Le Littoral (groupe Oncorad), où elle exerce.
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
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Spécialiste en oncologie-radiothérapie, elle pratique la cancérologie depuis 16 ans. Depuis 2016,
              elle exerce à la Clinique Le Littoral, à Casablanca, où elle prend en charge des patients atteints
              de cancers solides et participe chaque jour aux réunions de concertation pluridisciplinaire.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Depuis 2019, elle est administratrice du groupe Oncorad et membre de son comité exécutif.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Elle a fondé Oncovita, premier centre privé au Maroc entièrement dédié à l'oncologie intégrative,
              pour accompagner les patients au-delà du traitement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Formation */}
      <section className="section-padding">
        <div className="container-oncovita max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Formation</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8">
              Une formation au Maroc et en France
            </h2>
            <ul className="space-y-4 mb-10">
              {formation.map((f) => (
                <li key={f.label} className="flex items-start gap-4">
                  <span className="font-body text-sm text-primary font-medium w-24 shrink-0 pt-0.5">{f.year}</span>
                  <span className="font-body text-muted-foreground leading-relaxed">{f.label}</span>
                </li>
              ))}
            </ul>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">Domaines d'expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {expertise.map((e) => (
                <div key={e.title} className="bg-card rounded-2xl shadow-soft p-6">
                  <h3 className="font-display text-lg text-foreground mb-2">{e.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                </div>
              ))}
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-foreground mt-10 mb-6">Publications</h2>
            <ul className="space-y-4">
              {publications.map((pub) => (
                <li key={pub.title} className="font-body text-muted-foreground leading-relaxed">
                  « {pub.title} », <em>{pub.journal}</em>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Médias */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Dans les médias</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Octobre Rose : le Dr Malak Rita Hajji explique le cancer du sein, du traitement à l'accompagnement
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Dans L'Instant Santé, l'émission de Santé Mag Maroc, le Dr Malak Rita Hajji parle du dépistage précoce
              du cancer du sein, des progrès de sa prise en charge, de la radiothérapie moderne, de l'accompagnement
              des patientes et de la vie après le cancer.
            </p>
            <div className="relative w-full overflow-hidden rounded-2xl shadow-card mb-12" style={{ paddingTop: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${PODCAST_ID}`}
                title="Octobre Rose : le Dr Malak Rita Hajji décrypte le cancer du sein (L'Instant Santé, Santé Mag Maroc)"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-6">Articles et interviews</h3>
            <ul className="space-y-4">
              {presse.map((a) => (
                <li key={a.url}>
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-card rounded-2xl shadow-soft p-5 hover:shadow-card transition-shadow"
                  >
                    <span className="font-body text-xs tracking-[0.2em] uppercase text-primary">{a.media}</span>
                    <span className="block font-body text-foreground leading-relaxed mt-1">{a.title}</span>
                  </a>
                </li>
              ))}
            </ul>
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
              <Button variant="link" className="px-0 mt-1 block" asChild>
                <Link to="/journal/radiotherapie-deroulement-traitement" className="gap-2">
                  Comment se déroule une radiothérapie <ArrowRight size={16} />
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
