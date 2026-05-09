import eventOctobreRose from "@/assets/event-octobre-rose.jpg";
import photoA from "@/assets/event-yoga-relaxation.jpeg";
import photoB from "@/assets/event-yoga-mouvement.jpeg";
import photoC from "@/assets/event-table-parole.jpeg";
import photoD from "@/assets/event-equipe-oncovita.jpeg";

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
    title: "Émission Sabahiyates — sensibilisation grand public",
    category: "Média",
    date: "2025-10-08",
    location: "Plateau TV, 2M",
    image: photoA,
    imageAlt:
      "Le Dr Malak Rita Hajji invitée sur le plateau de l'émission Sabahiyates (2M) pour sensibiliser au cancer du sein",
    images: [
      {
        src: photoA,
        alt: "Le Dr Malak Rita Hajji sur le plateau de Sabahiyates — sensibilisation au cancer du sein",
      },
      {
        src: photoB,
        alt: "Intervention du Dr Malak Rita Hajji dans l'émission Sabahiyates sur 2M",
      },
    ],
    excerpt:
      "Le Dr Malak Rita Hajji invitée sur le plateau de Sabahiyates pour parler oncologie intégrative et dépistage du cancer du sein.",
    description:
      "Le Dr Malak Rita Hajji a été invitée sur le plateau de l'émission Sabahiyates pour porter la voix de l'oncologie intégrative auprès du grand public marocain. Une intervention pédagogique pour expliquer l'importance du dépistage précoce, présenter l'approche d'Oncovita et rappeler que prendre soin des patientes va bien au-delà du seul traitement médical.",
    highlights: [
      "Sensibilisation grand public sur une chaîne nationale",
      "Présentation de l'approche intégrative d'Oncovita",
      "Pédagogie autour du dépistage précoce",
    ],
  },
  {
    slug: "atelier-nexia-morocco",
    title: "Atelier de sensibilisation — Nexia Morocco",
    category: "Intervention extérieure",
    date: "2025-10-20",
    location: "Cabinet Nexia Morocco, Casablanca",
    image: photoC,
    imageAlt:
      "Atelier de sensibilisation au cancer du sein animé par le Dr Malak Rita Hajji pour les collaboratrices de Nexia Morocco",
    images: [
      {
        src: photoC,
        alt: "Échange avec les collaboratrices de Nexia Morocco lors de l'atelier de sensibilisation au cancer du sein",
      },
      {
        src: photoD,
        alt: "Atelier Oncovita chez Nexia Morocco — sensibilisation au dépistage du cancer du sein en entreprise",
      },
    ],
    excerpt:
      "Le Dr Malak Rita Hajji intervient auprès des collaboratrices du cabinet Nexia Morocco pour un atelier dédié au dépistage et à la prévention.",
    description:
      "Dans le cadre d'Octobre Rose, Oncovita s'est rendu au sein du cabinet Nexia Morocco pour animer un atelier de sensibilisation auprès des collaboratrices. Au programme : informations sur le dépistage précoce, gestes d'autopalpation, échanges autour des facteurs de risque et un temps de questions-réponses dans un cadre convivial et bienveillant.",
    highlights: [
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
