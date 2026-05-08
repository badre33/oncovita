import blogIntegrative from "@/assets/blog-integrative.jpg";
import blogPrevention from "@/assets/blog-prevention.jpg";
import blogWellbeing from "@/assets/blog-wellbeing.jpg";

export type BlogCategory = "Regard Médical" | "Sensibilisation" | "Accompagnement";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  category: BlogCategory;
  image: string;
  imageAlt: string;
  date: string;
  readingTime: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  content: BlogContentBlock[];
}

export type BlogContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "comprendre-oncologie-integrative",
    title: "Comprendre l'oncologie intégrative : une approche globale du cancer",
    subtitle: "Une approche globale du soin au service du patient",
    category: "Regard Médical",
    image: blogIntegrative,
    imageAlt: "Lumière douce et branche végétale évoquant l'oncologie intégrative",
    date: "2026-05-08",
    readingTime: "5 min",
    metaDescription:
      "Découvrez l'oncologie intégrative au Maroc : une approche médicale globale qui complète les traitements du cancer pour préserver la qualité de vie du patient.",
    keywords: [
      "oncologie intégrative Maroc",
      "oncologie intégrative Casablanca",
      "médecine intégrative cancer",
      "soins de support cancer Maroc",
    ],
    excerpt:
      "L'oncologie intégrative ne remplace pas les traitements conventionnels : elle les complète avec des approches validées pour mieux accompagner le patient.",
    content: [
      {
        type: "p",
        text: "Pendant longtemps, le traitement du cancer s'est concentré principalement sur la maladie elle-même : chirurgie, chimiothérapie, radiothérapie, hormonothérapie ou thérapies ciblées. Ces traitements restent aujourd'hui essentiels et constituent le socle de la prise en charge oncologique moderne.",
      },
      {
        type: "p",
        text: "Mais au fil des années, une réalité s'est imposée : le cancer ne touche jamais uniquement un organe ou une tumeur. Il impacte aussi le corps, l'équilibre émotionnel, le sommeil, l'énergie, l'alimentation, la confiance et parfois même la manière de vivre le quotidien.",
      },
      { type: "h2", text: "Une vision plus globale du soin" },
      {
        type: "p",
        text: "C'est dans cette vision plus globale qu'est née l'oncologie intégrative. Contrairement aux idées reçues, elle ne remplace pas les traitements conventionnels. Elle vient les compléter, avec des approches validées scientifiquement destinées à améliorer la qualité de vie du patient tout au long du parcours de soin.",
      },
      {
        type: "p",
        text: "Aujourd'hui, de grandes institutions internationales comme l'ASCO (American Society of Clinical Oncology) ou la Society for Integrative Oncology reconnaissent l'intérêt de certaines pratiques de support lorsqu'elles sont intégrées de manière rigoureuse et encadrée.",
      },
      { type: "h2", text: "Que recouvre concrètement l'oncologie intégrative ?" },
      {
        type: "p",
        text: "L'objectif est simple : mieux accompagner le patient dans toutes les dimensions de son parcours. L'oncologie intégrative peut inclure :",
      },
      {
        type: "ul",
        items: [
          "Une activité physique adaptée",
          "Un accompagnement nutritionnel",
          "Des techniques de gestion du stress",
          "Un soutien émotionnel et psychologique",
          "Des approches de relaxation ou de méditation",
          "Un travail sur la qualité du sommeil et le bien-être global",
        ],
      },
      {
        type: "p",
        text: "Ces approches ne prétendent pas « guérir » le cancer. Leur rôle est différent : aider le patient à mieux vivre les traitements, réduire certains effets secondaires, préserver la qualité de vie et soutenir les ressources physiques et émotionnelles.",
      },
      { type: "h2", text: "Une médecine personnalisée" },
      {
        type: "p",
        text: "Chaque patient vit la maladie différemment. C'est pourquoi l'accompagnement doit lui aussi être personnalisé. Chez Oncovita, cette approche fait partie intégrante de notre vision du soin. Nous croyons qu'une médecine moderne doit associer excellence médicale, écoute et accompagnement humain.",
      },
      {
        type: "quote",
        text: "Parce qu'au-delà de la maladie, il y a toujours une personne.",
      },
    ],
  },
  {
    slug: "depistage-precoce-cancer",
    title: "Pourquoi le dépistage précoce sauve des vies",
    subtitle: "Sensibilisation et prévention du cancer",
    category: "Sensibilisation",
    image: blogPrevention,
    imageAlt: "Ruban rose délicat sur un lin crème, symbole de prévention",
    date: "2026-05-08",
    readingTime: "4 min",
    metaDescription:
      "Dépistage cancer au Maroc : pourquoi détecter tôt change tout. Cancer du sein, colorectal, col de l'utérus, prostate — comprendre et oser consulter.",
    keywords: [
      "dépistage cancer Maroc",
      "prévention cancer du sein",
      "prévention cancer colorectal",
      "alimentation cancer",
    ],
    excerpt:
      "Aujourd'hui, de nombreux cancers peuvent être mieux traités lorsqu'ils sont détectés précocement. La prévention reste un pilier essentiel du soin.",
    content: [
      {
        type: "p",
        text: "Parler de prévention reste essentiel lorsqu'il s'agit du cancer. Aujourd'hui, de nombreux cancers peuvent être mieux traités lorsqu'ils sont détectés précocement. Dans certains cas, le dépistage permet même d'intervenir avant que la maladie ne se développe.",
      },
      {
        type: "p",
        text: "Pourtant, beaucoup de personnes repoussent encore les examens de contrôle, souvent par peur, manque d'information ou parce qu'aucun symptôme n'est ressenti. C'est précisément là que réside l'importance de la sensibilisation.",
      },
      { type: "h2", text: "Un cancer peut évoluer en silence" },
      {
        type: "p",
        text: "Le cancer évolue parfois silencieusement pendant plusieurs mois, voire plusieurs années. Attendre l'apparition de symptômes peut retarder la prise en charge. À l'inverse, un dépistage réalisé au bon moment permet souvent des traitements plus précoces, moins lourds et plus efficaces.",
      },
      { type: "h2", text: "Les cancers où le dépistage joue un rôle majeur" },
      {
        type: "ul",
        items: [
          "Le cancer du sein",
          "Le cancer colorectal",
          "Le cancer du col de l'utérus",
          "Le cancer de la prostate dans certaines situations",
        ],
      },
      { type: "h2", text: "La prévention passe aussi par les habitudes de vie" },
      {
        type: "p",
        text: "Au-delà des examens médicaux, la prévention passe également par les habitudes de vie. L'activité physique régulière, une alimentation équilibrée, un sommeil de qualité, la réduction du tabac et de l'alcool ainsi que la gestion du stress participent à la préservation de la santé globale.",
      },
      {
        type: "p",
        text: "Il ne s'agit pas de rechercher une perfection impossible, mais d'adopter progressivement des habitudes plus favorables au bien-être et à la prévention.",
      },
      { type: "h2", text: "Informer, c'est déjà soigner" },
      {
        type: "p",
        text: "La sensibilisation joue aussi un rôle humain essentiel : permettre aux patients et à leurs proches de mieux comprendre la maladie, d'oser consulter et de ne pas rester seuls face aux inquiétudes.",
      },
      {
        type: "quote",
        text: "Parce qu'une prise en charge commence parfois bien avant le traitement.",
      },
    ],
  },
  {
    slug: "bien-etre-patient-traitement",
    title: "Bien-être du patient pendant le traitement du cancer",
    subtitle: "Préserver l'équilibre physique et émotionnel pendant le parcours de soin",
    category: "Accompagnement",
    image: blogWellbeing,
    imageAlt: "Tasse de tisane sur un plateau en bois avec une couverture douce",
    date: "2026-05-08",
    readingTime: "5 min",
    metaDescription:
      "Fatigue, anxiété, perte de repères : comment préserver le bien-être du patient pendant les traitements du cancer grâce à un accompagnement intégratif.",
    keywords: [
      "fatigue cancer traitement",
      "qualité de vie cancer",
      "accompagnement cancer Casablanca",
      "soutien patient cancer",
    ],
    excerpt:
      "Au-delà des traitements, préserver l'énergie, le sommeil et l'équilibre émotionnel devient une dimension essentielle de la prise en charge.",
    content: [
      {
        type: "p",
        text: "Le traitement d'un cancer représente souvent une épreuve physique, émotionnelle et psychologique importante. Au-delà des effets des traitements eux-mêmes, de nombreux patients décrivent une fatigue profonde, une perte de repères, des moments d'anxiété ou une sensation d'isolement.",
      },
      {
        type: "p",
        text: "Chaque parcours est différent. Chaque personne vit la maladie à sa manière. Dans ce contexte, préserver le bien-être du patient devient une dimension essentielle de la prise en charge.",
      },
      { type: "h2", text: "Comprendre la fatigue liée au cancer" },
      {
        type: "p",
        text: "Pendant les traitements, le corps mobilise une grande partie de son énergie. La fatigue liée au cancer n'est pas une simple lassitude : elle peut être persistante, difficile à anticiper et parfois incomprise par l'entourage. Apprendre à écouter son corps devient alors fondamental.",
      },
      { type: "h2", text: "Des gestes simples pour mieux vivre cette période" },
      {
        type: "ul",
        items: [
          "Maintenir une activité physique adaptée lorsque cela est possible",
          "Privilégier un sommeil régulier",
          "Préserver des moments de respiration et de détente",
          "Conserver un lien social",
          "Accepter certains temps de repos sans culpabilité",
        ],
      },
      { type: "h2", text: "L'accompagnement émotionnel, un pilier du soin" },
      {
        type: "p",
        text: "L'accompagnement émotionnel joue également un rôle majeur. Parler, être écouté, exprimer ses peurs ou ses doutes permet souvent d'alléger une partie de la charge mentale liée à la maladie.",
      },
      {
        type: "p",
        text: "Les soins de support, lorsqu'ils sont intégrés au parcours de soin, peuvent contribuer à améliorer la qualité de vie du patient tout au long du traitement.",
      },
      { type: "h2", text: "Notre conviction chez Oncovita" },
      {
        type: "p",
        text: "Chez Oncovita, nous accordons une place essentielle à cette dimension humaine de l'accompagnement. Parce qu'un patient ne se résume jamais à un protocole ou à un traitement.",
      },
      {
        type: "quote",
        text: "Soigner tout en préservant ce qui reste profondément vivant : l'énergie, la dignité, le lien aux autres et la capacité d'avancer à son rythme.",
      },
    ],
  },
];

export const getPostBySlug = (slug: string) =>
  blogPosts.find((p) => p.slug === slug);

export const getRelatedPosts = (slug: string, limit = 2) =>
  blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
