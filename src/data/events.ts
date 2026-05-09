import eventOctobreRose from "@/assets/event-octobre-rose.jpg";
import eventNexia1 from "@/assets/event-yoga-relaxation.jpeg";
import eventNexia2 from "@/assets/event-yoga-mouvement.jpeg";
import eventSabahiyates1 from "@/assets/event-table-parole.jpeg";
import eventSabahiyates2 from "@/assets/event-equipe-oncovita.jpeg";

export type EventCategory =
  | "Sensibilisation"
  | "Yoga & Bien-être"
  | "Table de parole"
  | "Conférence"
  | "Intervention extérieure"
  | "Média"
  | "Vie du Centre";

export interface OncovitaEvent {
  slug: string;
  title: string;
  category: EventCategory;
  date: string; // ISO
  location: string;
  image: string;
  imageAlt: string;
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
    slug: "atelier-nexia-morocco",
    title: "Atelier de sensibilisation au cancer du sein — Nexia Morocco",
    category: "Intervention extérieure",
    date: "2025-10-20",
    location: "Cabinet Nexia Morocco, Casablanca",
    image: eventNexia1,
    imageAlt:
      "Atelier de sensibilisation au cancer du sein animé par le Dr Malak Rita Hajji pour l'équipe féminine du cabinet Nexia Morocco à Casablanca",
    excerpt:
      "Le Dr Malak Rita Hajji intervient auprès de l'équipe féminine collaboratrice du cabinet Nexia Morocco pour un atelier dédié au dépistage et à la prévention.",
    description:
      "Dans le cadre d'Octobre Rose, Oncovita s'est rendu au sein du cabinet Nexia Morocco pour animer un atelier de sensibilisation auprès des collaboratrices. Au programme : informations sur le dépistage précoce, gestes d'autopalpation, échanges autour des facteurs de risque et temps de questions-réponses dans un cadre convivial et bienveillant.",
    highlights: [
      "Sensibilisation au dépistage précoce",
      "Démonstration des gestes d'autopalpation",
      "Échange ouvert avec les collaboratrices de Nexia Morocco",
    ],
  },
  {
    slug: "atelier-nexia-morocco-echanges",
    title: "Échanges avec les collaboratrices — Nexia Morocco",
    category: "Intervention extérieure",
    date: "2025-10-20",
    location: "Cabinet Nexia Morocco, Casablanca",
    image: eventNexia2,
    imageAlt:
      "Temps d'échange et de questions-réponses lors de l'atelier de sensibilisation au cancer du sein chez Nexia Morocco animé par Oncovita",
    excerpt:
      "Un temps d'écoute et de dialogue avec les collaboratrices du cabinet, autour de la prévention et de l'accompagnement.",
    description:
      "Au-delà de la sensibilisation médicale, cet atelier a permis de libérer la parole. Les collaboratrices ont pu poser librement leurs questions sur le cancer du sein, le suivi médical, la prévention au quotidien et les ressources disponibles au Maroc pour les patientes et leurs proches.",
    highlights: [
      "Questions-réponses libres",
      "Information sur les ressources en oncologie au Maroc",
      "Atelier en entreprise dans une atmosphère bienveillante",
    ],
  },
  {
    slug: "sabahiyates-emission-tv-1",
    title: "Émission Sabahiyates — sensibilisation grand public",
    category: "Média",
    date: "2025-10-08",
    location: "Plateau TV, 2M",
    image: eventSabahiyates1,
    imageAlt:
      "Le Dr Malak Rita Hajji invitée sur le plateau de l'émission Sabahiyates pour sensibiliser le grand public au cancer du sein",
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
    slug: "sabahiyates-emission-tv-2",
    title: "Sabahiyates : parler de la maladie sans tabou",
    category: "Média",
    date: "2025-10-08",
    location: "Plateau TV, 2M",
    image: eventSabahiyates2,
    imageAlt:
      "Intervention du Dr Malak Rita Hajji sur le plateau de Sabahiyates : briser les tabous autour du cancer au Maroc",
    excerpt:
      "Une seconde séquence sur le plateau de Sabahiyates pour briser les tabous autour du cancer et de l'accompagnement des patientes.",
    description:
      "Dans cette seconde séquence à l'antenne, le Dr Hajji aborde la dimension humaine du parcours de soin : l'importance de l'écoute, du soutien émotionnel, de l'activité physique adaptée et du bien-être au quotidien. Un message essentiel pour les femmes marocaines confrontées à la maladie, à elles-mêmes ou auprès d'un proche.",
    highlights: [
      "Approche humaine et globale du parcours de soin",
      "Message d'espoir et de prévention",
      "Visibilité médiatique de l'oncologie intégrative au Maroc",
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
