import { Heart, Shield, Microscope, Brain, Eye, Clock, Users, Activity, Dumbbell } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import centerExterior from "@/assets/center-exterior.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";
import bureauConsultation from "@/assets/bureau-consultation.jpg";
import salleReunion from "@/assets/salle-reunion.jpg";
import waitingArea from "@/assets/waiting-area.jpg";
import histoireOncovita from "@/assets/histoire-oncovita.jpg";
import heroCenter from "@/assets/hero-center.jpg";
import drFounder from "@/assets/dr-founder.jpg";
import laParenthese from "@/assets/la-parenthese.jpg";
import echappeeBelle from "@/assets/echappee-belle.jpg";
import lelan from "@/assets/lelan.jpg";

const CenterPage = () => {
  const galleryImages = [
    { src: heroCenter, alt: "Accueil Oncovita", label: "Accueil" },
    { src: consultationRoom, alt: "La Parenthèse — Salle de consultation", label: "La Parenthèse" },
    { src: salleReunion, alt: "Salle de réunion Oncovita", label: "Salle de réunion" },
    { src: waitingArea, alt: "L'Élan — Salle de mouvement", label: "L'Élan" },
    { src: centerExterior, alt: "Extérieur du centre", label: "Extérieur" },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={centerExterior} alt="Centre Oncovita" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        </div>
        <div className="relative container-oncovita px-6 lg:px-20">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-4">Oncovita</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground max-w-2xl">
              Le Centre
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg mt-4 max-w-xl">
              Un centre médical et un espace d'accompagnement pensé pour les patients.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* L'histoire et la naissance */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">L'Histoire</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                La naissance d'Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Oncovita est né d'un constat partagé par de nombreux patients et médecins. Dans les parcours 
                oncologiques traditionnels, les patients reçoivent des traitements performants, mais disposent 
                rarement d'un accompagnement structuré pour gérer les dimensions physiques, émotionnelles et 
                psychologiques de la maladie.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Fatigue, anxiété, perte de repères, isolement : ces réalités font partie du parcours de nombreux patients.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Dr Malak Rita Hajji a voulu créer un lieu capable de répondre à ces besoins. Oncovita a donc été 
                pensé comme un <span className="text-foreground font-medium">centre médical et un espace d'accompagnement</span>, 
                où les patients peuvent trouver des ressources pour traverser la maladie avec davantage de soutien et de sérénité.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <img src={histoireOncovita} alt="Salle de yoga et bien-être Oncovita" className="rounded-2xl shadow-card w-full" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophie */}
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Notre Vision</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                La Philosophie d'Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Le traitement du cancer ne doit pas se limiter à la maladie elle-même, mais prendre en compte 
                la personne dans toute sa complexité — physique, émotionnelle et humaine. Les soins oncologiques 
                doivent allier :
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Microscope, title: "Précision médicale", desc: "Des traitements rigoureux fondés sur les dernières avancées scientifiques." },
              { icon: Heart, title: "Accompagnement du patient", desc: "Une écoute attentive et un soutien humain à chaque étape du parcours." },
              { icon: Shield, title: "Qualité de vie", desc: "Prendre soin de la personne au-delà de la pathologie, pendant et après les traitements." },
              { icon: Eye, title: "Innovation", desc: "Intégrer les nouvelles approches thérapeutiques et les pratiques complémentaires validées." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="p-8 rounded-2xl border border-border hover-lift text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                    <item.icon size={22} />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Parcours de soins */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Le Parcours</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Le parcours de soins à Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Le parcours de soins au sein du centre repose sur une approche progressive et personnalisée.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Étape 1 */}
            <AnimatedSection delay={0}>
              <div className="bg-card rounded-2xl shadow-soft h-full overflow-hidden">
                <img src={laParenthese} alt="Salle La Parenthèse" className="w-full h-48 object-cover" />
                <div className="p-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-display text-lg mb-6">
                  1
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">La Consultation</h3>
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-4">Salle La Parenthèse</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Le parcours commence par une consultation avec Dr Malak Rita Hajji. Ce premier rendez-vous permet :
                </p>
                <ul className="space-y-2">
                  {[
                    "Écouter l'histoire du patient",
                    "Analyser les examens et le dossier médical",
                    "Établir un diagnostic ou une stratégie thérapeutique",
                    "Expliquer les différentes options de traitement",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                  Cette étape est essentielle pour construire une relation de confiance et définir un plan de prise en charge adapté.
                </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Étape 2 */}
            <AnimatedSection delay={150}>
              <div className="bg-card rounded-2xl shadow-soft h-full overflow-hidden">
                <img src={echappeeBelle} alt="Espace L'Échappée Belle" className="w-full h-48 object-cover" />
                <div className="p-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-display text-lg mb-6">
                  2
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">L'Accompagnement Global</h3>
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-4">Espace L'Échappée Belle</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  En complément du suivi médical, le patient peut bénéficier d'activités et d'accompagnements 
                  destinés à soutenir son bien-être physique et émotionnel :
                </p>
                <ul className="space-y-2">
                  {[
                    "Ateliers de gestion du stress",
                    "Moments d'échange et de soutien",
                    "Activités favorisant l'équilibre mental et émotionnel",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                  L'Échappée Belle est un espace dédié au ressourcement et à l'écoute.
                </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Étape 3 */}
            <AnimatedSection delay={300}>
              <div className="bg-card rounded-2xl shadow-soft h-full overflow-hidden">
                <img src={lelan} alt="Salle L'Élan" className="w-full h-48 object-cover" />
                <div className="p-8">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-display text-lg mb-6">
                  3
                </div>
                <h3 className="font-display text-2xl text-foreground mb-2">La Remise en Mouvement</h3>
                <p className="font-body text-xs tracking-widest uppercase text-primary mb-4">Salle L'Élan</p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Le centre propose des activités liées à la remise en mouvement du corps à travers des pratiques 
                  adaptées. L'activité physique adaptée contribue à :
                </p>
                <ul className="space-y-2">
                  {[
                    "Réduire la fatigue liée aux traitements",
                    "Améliorer la condition physique",
                    "Soutenir le moral",
                    "Favoriser la récupération",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
                  L'Élan est un espace dédié au mouvement, à la reconstruction physique et à la reprise de confiance dans son corps.
                </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-2">
              <AnimatedSection>
                <img src={drFounder} alt="Dr Malak Rita Hajji" className="rounded-2xl shadow-card w-full max-w-sm mx-auto" loading="lazy" />
              </AnimatedSection>
            </div>
            <div className="lg:col-span-3">
              <AnimatedSection delay={200}>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Fondatrice & Directrice Médicale</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Dr Malak Rita Hajji
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Dr Malak Rita Hajji est oncologue médicale. Issue d'une famille engagée dans la lutte contre 
                  le cancer — son père, Dr Omar Hajji, est l'un des pionniers de l'oncologie au Maroc et cofondateur 
                  du groupe Oncorad — elle a grandi au contact de cette discipline.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  Cette proximité avec la cancérologie lui a permis de comprendre très tôt les enjeux médicaux, 
                  mais aussi humains, liés à la maladie. Au fil de sa formation et de son expérience, elle développe 
                  une vision claire de la médecine : une oncologie exigeante sur le plan scientifique, mais profondément 
                  attentive à l'expérience vécue par les patients.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Elle crée Oncovita avec l'ambition de proposer un lieu où la médecine est rigoureuse, l'écoute 
                  est centrale et l'environnement participe au processus de soin. En parallèle de son activité clinique, 
                  elle contribue au développement du secteur de la santé privée au Maroc en tant que membre du conseil 
                  d'administration du groupe Oncorad.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Oncologie Médicale", value: "Spécialisation" },
                    { label: "Groupe Oncorad", value: "Héritage" },
                    { label: "Centrée sur le Patient", value: "Philosophie" },
                    { label: "Innovation", value: "Engagement" },
                  ].map((item) => (
                    <div key={item.label} className="border-l-2 border-primary/30 pl-4">
                      <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">{item.value}</p>
                      <p className="font-display text-lg text-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Environnement */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">L'Environnement</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Un lieu pensé pour les patients
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Oncovita a été conçu pour offrir un environnement différent d'un centre médical traditionnel. 
                L'architecture et les espaces ont été pensés pour créer une atmosphère lumineuse, apaisante 
                et respectueuse de l'intimité des patients.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mt-4">
                Chaque détail du centre vise à créer un cadre dans lequel les patients peuvent se sentir 
                accueillis, écoutés et accompagnés.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedSection>
              <img src={heroCenter} alt="Accueil Oncovita" className="rounded-2xl w-full h-80 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <img src={bureauConsultation} alt="Bureau de consultation Oncovita" className="rounded-2xl w-full h-80 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <AnimatedSection delay={200}>
              <img src={salleReunion} alt="Salle de réunion Oncovita" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <img src={waitingArea} alt="Espace d'accueil" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <img src={centerExterior} alt="Extérieur du centre" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Médecine humaine et moderne */}
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Notre Engagement</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Une médecine humaine et moderne
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg mb-4">
                Oncovita s'inscrit dans une évolution profonde de la médecine. Aujourd'hui, la prise en charge 
                du cancer ne se limite plus au traitement de la maladie. La qualité de vie pendant et après 
                les traitements est devenue un enjeu majeur.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Le centre participe à cette transformation en proposant une oncologie qui associe 
                rigueur scientifique, accompagnement humain et approche globale du patient.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-10 text-center max-w-2xl mx-auto">
              <p className="font-display text-2xl md:text-3xl text-foreground italic leading-relaxed">
                « Parce que derrière chaque diagnostic, il y a une personne, une histoire et un parcours de vie. »
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Journal */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Journal Oncovita</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Actualités & Sensibilisation
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Contenus éducatifs, regards médicaux et sensibilisation — accessibles, rassurants et toujours centrés sur le patient.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Comprendre l'Oncologie Intégrative", category: "Regard Médical", desc: "Comment la combinaison des traitements conventionnels avec les soins de support améliore les résultats et la qualité de vie des patients." },
              { title: "Sensibilisation et Prévention du Cancer", category: "Sensibilisation", desc: "Les faits essentiels sur le dépistage précoce, les programmes de prévention et les choix de vie qui font la différence." },
              { title: "Bien-être du Patient pendant le Traitement", category: "Accompagnement", desc: "Des conseils pratiques pour maintenir le bien-être physique et émotionnel tout au long du parcours de soins." },
            ].map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift h-full flex flex-col">
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-4">{post.category}</p>
                  <h3 className="font-display text-xl text-foreground mb-3">{post.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{post.desc}</p>
                  <p className="font-body text-xs text-primary mt-6 tracking-wider uppercase">Bientôt disponible</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CenterPage;
