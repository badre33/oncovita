import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { applySeo } from "@/lib/seo";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import lelan from "@/assets/lelan.jpg";
import echappeeBelle from "@/assets/echappee-belle.jpg";
import yogaMouvement from "@/assets/event-yoga-mouvement.jpeg";
import yogaRire from "@/assets/event-yoga-rire.jpg";
import meditation from "@/assets/event-meditation-malak.jpg";
import tableParole from "@/assets/event-table-parole.jpeg";

const PAGE_URL = "https://oncovita.ma/soins-de-support";
const WHATSAPP_URL =
  "https://wa.me/212669337548?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20soins%20de%20support%20Oncovita.";

const soins = [
  {
    title: "L'activité physique adaptée aide à lutter contre la fatigue",
    image: lelan,
    alt: "Salle L'Élan, espace d'activité physique adaptée du centre Oncovita",
    text: "Une activité physique encadrée et adaptée à l'état de santé de chaque patient peut aider à réduire la fatigue liée aux traitements, à préserver la condition physique et à soutenir le moral. Les séances ont lieu dans la salle L'Élan.",
  },
  {
    title: "La yogathérapie travaille la mobilité et la respiration",
    image: yogaMouvement,
    alt: "Séance de yogathérapie au centre Oncovita à Casablanca",
    text: "La yogathérapie associe des postures douces, adaptées aux capacités du moment, et un travail sur la respiration. Elle peut aider à retrouver de la mobilité, à mieux gérer le stress et à se sentir de nouveau à l'aise dans son corps.",
  },
  {
    title: "La méditation et la sophrologie aident à mieux gérer le stress",
    image: meditation,
    alt: "Séance de méditation guidée au centre Oncovita",
    text: "Le diagnostic et les traitements peuvent s'accompagner d'anxiété et de troubles du sommeil. La méditation, la sophrologie et les techniques de respiration peuvent aider certains patients à apaiser ces tensions et à mieux traverser les périodes d'attente.",
  },
  {
    title: "Le yoga du rire offre un moment de détente partagé",
    image: yogaRire,
    alt: "Atelier de yoga du rire au centre Oncovita",
    text: "Le yoga du rire combine exercices de respiration et rire volontaire, en groupe. C'est un moment de détente et de lien avec d'autres personnes, qui peut contribuer à alléger le quotidien pendant le parcours de soins.",
  },
  {
    title: "Le soutien psychologique fait partie de la prise en charge",
    image: tableParole,
    alt: "Moment d'échange et de soutien au centre Oncovita",
    text: "Parler de ce que l'on vit, seul ou en groupe, peut aider à faire face aux bouleversements que la maladie entraîne. Les moments d'échange et l'accompagnement psychologique s'adressent aux patients et peuvent aussi concerner leurs proches.",
  },
  {
    title: "La musicothérapie et l'art-thérapie permettent de s'exprimer autrement",
    image: echappeeBelle,
    alt: "Espace L'Échappée Belle du centre Oncovita, dédié au ressourcement",
    text: "Quand les mots sont difficiles à trouver, la musique et la création peuvent offrir une autre façon d'exprimer ses émotions. Ces ateliers ont lieu dans l'espace L'Échappée Belle, dédié au ressourcement et à l'écoute.",
  },
];

const faqs = [
  {
    q: "Que sont les soins de support en cancérologie ?",
    a: "Les soins de support regroupent les soins et accompagnements proposés en plus des traitements du cancer. Ils visent à limiter certains effets de la maladie et des traitements, comme la fatigue, le stress ou la perte de mobilité, et à préserver la qualité de vie.",
  },
  {
    q: "Les soins de support remplacent-ils les traitements du cancer ?",
    a: "Non. Ils viennent en complément des traitements prescrits par l'équipe oncologique (chirurgie, chimiothérapie, radiothérapie, immunothérapie, hormonothérapie). Ils ne les remplacent jamais.",
  },
  {
    q: "Faut-il un avis médical avant de commencer ?",
    a: "Il est conseillé d'en parler avec votre équipe soignante, en particulier avant de commencer une activité physique. Les séances sont adaptées à l'état de santé et au moment du parcours de chaque patient.",
  },
  {
    q: "Où ont lieu les soins de support à Casablanca ?",
    a: "Au centre Oncovita, 5e étage de l'Immeuble FIRST, 401 route d'El Jadida, à Casablanca. Le centre est ouvert du lundi au vendredi, de 8h30 à 12h30 et de 13h30 à 17h30.",
  },
  {
    q: "Comment participer ?",
    a: "Vous pouvez appeler le centre au 05 22 98 07 19 ou écrire sur WhatsApp depuis le site. L'équipe vous présentera les accompagnements adaptés à votre situation.",
  },
];

const SupportCarePage = () => {
  useEffect(() => {
    applySeo({
      title: "Soins de support à Casablanca : accompagnement pendant un cancer | Oncovita",
      description:
        "Soins de support à Casablanca : activité physique adaptée, yogathérapie, méditation, sophrologie, soutien psychologique, en complément des traitements du cancer. Centre Oncovita.",
      keywords: [
        "soins de support Casablanca",
        "soins de support cancer Maroc",
        "activité physique adaptée cancer Casablanca",
        "yogathérapie cancer",
        "soutien psychologique cancer Casablanca",
        "oncologie intégrative Casablanca",
      ],
      url: "/soins-de-support",
      type: "website",
    });

    const add = (id: string, data: object) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.id = id;
      s.text = JSON.stringify(data);
      document.head.appendChild(s);
    };

    add("ld-support-faq", {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });

    add("ld-support-breadcrumb", {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://oncovita.ma/" },
        { "@type": "ListItem", position: 2, name: "Soins de support", item: PAGE_URL },
      ],
    });

    return () => {
      ["ld-support-faq", "ld-support-breadcrumb"].forEach((id) => document.getElementById(id)?.remove());
    };
  }, []);

  return (
    <Layout>
      {/* En-tête */}
      <section className="section-padding pt-32 md:pt-40">
        <div className="container-oncovita max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Oncologie intégrative</p>
            <h1 className="font-display text-3xl md:text-5xl text-foreground leading-tight mb-6">
              Soins de support à Casablanca : être accompagné pendant et après un cancer
            </h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
              Les traitements du cancer peuvent s'accompagner de fatigue, de stress, de douleurs ou d'une perte de
              mobilité. Les soins de support aident à anticiper et à limiter certaines de ces difficultés.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              À Oncovita, ils viennent toujours en complément des traitements prescrits par l'équipe oncologique.
              Ils ne les remplacent pas.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <a href="tel:+212522980719" className="gap-2">
                  <Phone size={16} /> Appeler le centre
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="gap-2">
                  <MessageCircle size={16} /> Écrire sur WhatsApp
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Les soins */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
              Les soins de support proposés à Oncovita
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {soins.map((s, i) => (
              <AnimatedSection key={s.title} delay={(i % 3) * 120}>
                <article className="bg-card rounded-2xl shadow-soft h-full overflow-hidden">
                  <img src={s.image} alt={s.alt} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-6 md:p-8">
                    <h3 className="font-display text-xl text-foreground mb-3">{s.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Cadre */}
      <section className="section-padding">
        <div className="container-oncovita max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Chaque accompagnement s'adapte au parcours du patient
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Chaque parcours est différent. Les besoins ne sont pas les mêmes pendant une chimiothérapie, pendant
              une radiothérapie ou après la fin des traitements. Les accompagnements sont donc choisis et adaptés à
              la situation de chaque personne, en lien avec son équipe médicale.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Des sociétés savantes internationales, comme l'ASCO (American Society of Clinical Oncology) et la
              Society for Integrative Oncology, reconnaissent l'intérêt de certaines de ces approches, notamment
              l'activité physique adaptée et les techniques de gestion du stress, lorsqu'elles sont proposées de
              manière encadrée.
            </p>
            <div className="flex flex-col gap-2">
              <Button variant="link" className="px-0 justify-start h-auto whitespace-normal text-left" asChild>
                <Link to="/dr-malak-rita-hajji" className="gap-2">
                  Le Dr Malak Rita Hajji, onco-radiothérapeute et fondatrice d'Oncovita <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="link" className="px-0 justify-start h-auto whitespace-normal text-left" asChild>
                <Link to="/journal/activite-physique-adaptee-cancer" className="gap-2">
                  Lire : l'activité physique adaptée pendant un cancer <ArrowRight size={16} />
                </Link>
              </Button>
              <Button variant="link" className="px-0 justify-start h-auto whitespace-normal text-left" asChild>
                <Link to="/journal/radiotherapie-deroulement-traitement" className="gap-2">
                  Lire : comment se déroule une radiothérapie <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-10 text-center">
              Questions fréquentes sur les soins de support
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

export default SupportCarePage;
