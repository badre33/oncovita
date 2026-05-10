import eventOctobreRose from "@/assets/event-octobre-rose.jpg";
import photoA from "@/assets/event-yoga-relaxation.jpeg";
import photoB from "@/assets/event-yoga-mouvement.jpeg";
import photoC from "@/assets/event-table-parole.jpeg";
import photoD from "@/assets/event-equipe-oncovita.jpeg";
import roseDarzhor1 from "@/assets/event-octobre-rose-darzhor-1.jpg";
import roseLittoral from "@/assets/event-octobre-rose-littoral.jpg";
import roseEntreprise3 from "@/assets/event-octobre-rose-entreprise-3.jpg";
import roseEntreprise4 from "@/assets/event-octobre-rose-entreprise-4.jpg";
import roseDarzhor5 from "@/assets/event-octobre-rose-darzhor-5.jpg";

export type EventCategory =
  | "Sensibilisation"
  | "Yoga & Bien-être"
  | "Table de parole"
  | "Conférence"
  | "Intervention extérieure"
  | "Média"
  | "Vie du Centre";

export interface EventImage {
  src: string;
  alt: string;
}

export interface OncovitaEvent {
  slug: string;
  title: string;
  category: EventCategory;
  date: string; // ISO
  location: string;
  image: string; // cover
  imageAlt: string;
  images?: EventImage[]; // gallery
  excerpt: string;
  description: string;
  highlights?: string[];
  featured?: boolean;
}

export const events: OncovitaEvent[] = [
  {
    slug: "octobre-rose-2025",
    title: "Octobre Rose : sensibilisation au cancer du sein",
    category: "Sensibilisation",
    date: "2025-10-15",
    location: "Casablanca",
    image: eventOctobreRose,
    imageAlt:
      "Octobre Rose à Casablanca : ruban rose et fleurs symbolisant la sensibilisation au cancer du sein menée par Oncovita",
    excerpt:
      "Une mobilisation collective autour du dépistage précoce du cancer du sein, animée par le Dr Malak Rita Hajji et l'équipe Oncovita.",
    description:
      "Tout au long du mois d'octobre, Oncovita s'engage aux côtés des femmes du Maroc pour rappeler l'importance du dépistage précoce du cancer du sein. Conférences grand public, ateliers de sensibilisation, échanges avec les patientes et leurs proches : un programme pensé pour informer, rassurer et briser les tabous autour de la maladie.",
    highlights: [
      "Conférences sur le dépistage précoce et l'autopalpation",
      "Témoignages de patientes accompagnées par le Centre",
      "Ateliers bien-être ouverts aux femmes en parcours de soin",
      "Échanges avec le Dr Malak Rita Hajji",
    ],
    featured: true,
  },
  {
    slug: "sabahiyates-emission-tv",
    title: "Émission Sabahiyates au Centre Oncovita",
    category: "Média",
    date: "2025-10-08",
    location: "Centre Oncovita, Casablanca",
    image: photoA,
    imageAlt:
      "L'équipe de l'émission Sabahiyates (2M) en tournage au Centre Oncovita, à la découverte du parcours de soins intégratifs",
    images: [
      {
        src: photoA,
        alt: "Tournage de l'émission Sabahiyates au Centre Oncovita avec le Dr Malak Rita Hajji",
      },
      {
        src: photoB,
        alt: "L'équipe de Sabahiyates expérimente le parcours de soins du Centre Oncovita",
      },
    ],
    excerpt:
      "L'équipe de Sabahiyates est venue au Centre Oncovita pour découvrir et expérimenter notre parcours de soins intégratifs.",
    description:
      "L'équipe de l'émission Sabahiyates s'est rendue au Centre Oncovita pour vivre de l'intérieur le parcours de soins intégratifs proposé aux patientes. Une immersion pédagogique pour faire découvrir au grand public marocain l'approche d'Oncovita : prendre soin du corps et de l'esprit, au-delà du seul traitement médical.",
    highlights: [
      "Immersion dans le parcours de soins intégratifs",
      "Découverte du Centre et de son équipe",
      "Sensibilisation grand public sur une chaîne nationale",
    ],
  },
  {
    slug: "atelier-nexia-morocco",
    title: "Atelier de sensibilisation — Nexia Morocco",
    category: "Sensibilisation",
    date: "2025-10-20",
    location: "Centre Oncovita, Casablanca",
    image: photoC,
    imageAlt:
      "Les collaboratrices de Nexia Morocco accueillies au Centre Oncovita pour un atelier de sensibilisation au cancer du sein",
    images: [
      {
        src: photoC,
        alt: "Échange avec les collaboratrices de Nexia Morocco au Centre Oncovita pour la sensibilisation au cancer du sein",
      },
      {
        src: photoD,
        alt: "Atelier Oncovita au Centre avec l'équipe féminine de Nexia Morocco — sensibilisation et dépistage",
      },
    ],
    excerpt:
      "Les collaboratrices de Nexia Morocco ont été accueillies au Centre Oncovita pour un atelier dédié au dépistage et à la prévention.",
    description:
      "Dans le cadre d'Octobre Rose, les collaboratrices du cabinet Nexia Morocco ont été reçues au Centre Oncovita pour un atelier de sensibilisation animé par le Dr Malak Rita Hajji. Au programme : informations sur le dépistage précoce, gestes d'autopalpation, échanges sur les facteurs de risque et temps de questions-réponses dans un cadre convivial et bienveillant.",
    highlights: [
      "Accueil au Centre Oncovita",
      "Sensibilisation au dépistage précoce",
      "Démonstration des gestes d'autopalpation",
      "Échange ouvert avec les collaboratrices de Nexia Morocco",
    ],
  },
];

export const featuredEvent = () => events.find((e) => e.featured) ?? events[0];

export const eventCategories: EventCategory[] = [
  "Sensibilisation",
  "Yoga & Bien-être",
  "Table de parole",
  "Conférence",
  "Intervention extérieure",
  "Média",
  "Vie du Centre",
];
