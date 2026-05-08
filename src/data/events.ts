import eventOctobreRose from "@/assets/event-octobre-rose.jpg";
import eventYogaRelaxation from "@/assets/event-yoga-relaxation.jpeg";
import eventYogaMouvement from "@/assets/event-yoga-mouvement.jpeg";
import eventTableParole from "@/assets/event-table-parole.jpeg";
import eventEquipeOncovita from "@/assets/event-equipe-oncovita.jpeg";

export type EventCategory =
  | "Sensibilisation"
  | "Yoga & Bien-être"
  | "Table de parole"
  | "Conférence"
  | "Intervention extérieure"
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
    slug: "yoga-relaxation-patientes",
    title: "Séance de yoga & relaxation pour les patientes",
    category: "Yoga & Bien-être",
    date: "2026-04-12",
    location: "Centre Oncovita, Casablanca",
    image: eventYogaRelaxation,
    imageAlt:
      "Séance de yoga doux et relaxation guidée pour patientes en oncologie au centre Oncovita à Casablanca",
    excerpt:
      "Une parenthèse de douceur pour les patientes : posture allongée, respiration guidée et bols tibétains.",
    description:
      "Au sein de l'espace L'Échappée Belle, des séances régulières de yoga adapté et de relaxation profonde sont proposées aux patientes en parcours de soin. Encadrées par une enseignante formée à l'oncologie, ces séances permettent de relâcher les tensions, d'apaiser le système nerveux et de retrouver, en douceur, un lien apaisé avec son corps.",
    highlights: [
      "Postures allongées adaptées à chaque patiente",
      "Respiration guidée et relaxation profonde",
      "Bols tibétains et ambiance feutrée",
    ],
  },
  {
    slug: "yoga-mouvement-doux",
    title: "Atelier mouvement doux & étirements",
    category: "Yoga & Bien-être",
    date: "2026-04-05",
    location: "Centre Oncovita, Casablanca",
    image: eventYogaMouvement,
    imageAlt:
      "Atelier de mouvement doux et étirements guidés pour patientes en oncologie au centre Oncovita",
    excerpt:
      "Réveiller le corps en douceur : étirements debout et ouverture du souffle pour retrouver la mobilité au quotidien.",
    description:
      "Ces ateliers d'activité physique adaptée invitent les patientes à se réapproprier leur corps progressivement. Étirements debout, ouverture de la cage thoracique, équilibre et coordination : chaque mouvement est proposé avec respect du rythme de chacune, dans une atmosphère bienveillante.",
    highlights: [
      "Étirements et mobilité articulaire",
      "Travail du souffle et de la posture",
      "Renforcement progressif et adapté",
    ],
  },
  {
    slug: "table-de-parole-patientes",
    title: "Table de parole : partager pour avancer",
    category: "Table de parole",
    date: "2026-03-22",
    location: "Centre Oncovita, Casablanca",
    image: eventTableParole,
    imageAlt:
      "Table de parole animée par le Dr Malak Rita Hajji autour des patientes du centre Oncovita à Casablanca",
    excerpt:
      "Un espace d'écoute et d'échange entre patientes, animé par le Dr Malak Rita Hajji, autour d'un moment convivial.",
    description:
      "Les tables de parole d'Oncovita réunissent patientes, anciennes patientes et proches autour d'un moment d'échange libre. Animées par le Dr Malak Rita Hajji, elles offrent un espace de parole sécurisant pour exprimer ses peurs, partager son expérience et rompre l'isolement souvent ressenti pendant la maladie.",
    highlights: [
      "Échanges libres entre patientes et proches",
      "Animation par le Dr Malak Rita Hajji",
      "Climat de confiance et de bienveillance",
    ],
  },
  {
    slug: "equipe-oncovita-engagement",
    title: "L'équipe Oncovita au service des patientes",
    category: "Vie du Centre",
    date: "2026-02-18",
    location: "Centre Oncovita, Casablanca",
    image: eventEquipeOncovita,
    imageAlt:
      "Équipe pluridisciplinaire du centre Oncovita réunie autour du Dr Malak Rita Hajji à Casablanca",
    excerpt:
      "Médecins, soignants, psychologues, enseignants APA : une équipe pluridisciplinaire engagée auprès des patientes.",
    description:
      "Derrière chaque parcours de soin chez Oncovita, il y a une équipe entière. Médecins, infirmières, psychologues, nutritionnistes, enseignants en activité physique adaptée : tous travaillent main dans la main pour offrir un accompagnement véritablement intégratif. Cette photo témoigne de la cohésion et de l'engagement humain qui animent le Centre au quotidien.",
    highlights: [
      "Approche pluridisciplinaire",
      "Coordination autour du parcours de la patiente",
      "Une équipe formée à l'oncologie intégrative",
    ],
  },
  {
    slug: "interventions-exterieures",
    title: "Interventions du Dr Hajji à l'extérieur du Centre",
    category: "Intervention extérieure",
    date: "2026-01-30",
    location: "Casablanca & Maroc",
    image: eventEquipeOncovita,
    imageAlt:
      "Le Dr Malak Rita Hajji en intervention publique sur l'oncologie intégrative au Maroc",
    excerpt:
      "Conférences, médias, partenariats associatifs : le Dr Hajji porte la voix de l'oncologie intégrative au Maroc.",
    description:
      "Au-delà du Centre, le Dr Malak Rita Hajji intervient régulièrement dans des conférences professionnelles, des émissions de sensibilisation et auprès d'associations de patientes. Son engagement vise à faire reconnaître la place des soins de support et de l'accompagnement humain dans le parcours oncologique au Maroc.",
    highlights: [
      "Conférences médicales et grand public",
      "Interventions médias et sensibilisation",
      "Partenariats avec associations de patientes",
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
  "Vie du Centre",
];
