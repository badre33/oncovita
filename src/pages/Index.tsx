import { Link } from "react-router-dom";
import { Heart, Leaf, Sparkles, Users, ArrowRight, Shield, Activity, Brain, Smile } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-center.jpg";
import drFounder from "@/assets/dr-founder.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Intérieur du centre Oncovita" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/65 to-foreground/30 md:from-foreground/80 md:via-foreground/60 md:to-foreground/20" />
        </div>
        <div className="relative container-oncovita px-5 md:px-6 lg:px-20 py-16 md:py-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-6">
                Centre d'Oncologie Intégrative — Casablanca
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-4 md:mb-6">
                Soigner le corps, apaiser l'esprit, accompagner avec humanité.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="font-body text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Oncovita est un centre médical dédié à l'accompagnement des patients atteints de cancer, 
                alliant médecine oncologique fondée sur les preuves scientifiques et accompagnement global du patient.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/center">Découvrir le Centre</Link>
                </Button>
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <Link to="/contact">Nous Contacter</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Vision différente */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Notre Vision</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Une vision différente de la cancérologie
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Les progrès de la médecine ont profondément transformé le traitement du cancer. 
                Immunothérapies, thérapies ciblées, médecine personnalisée : les options thérapeutiques 
                sont aujourd'hui plus nombreuses et plus efficaces que jamais.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="max-w-3xl mx-auto mb-16">
              <p className="font-body text-muted-foreground leading-relaxed text-center text-lg mb-8">
                Mais au-delà des traitements, la maladie reste une épreuve humaine majeure. 
                Les patients doivent souvent faire face à :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "La fatigue liée aux traitements",
                  "L'anxiété et l'incertitude",
                  "Les bouleversements physiques et émotionnels",
                  "Les changements dans le quotidien et le rapport au corps",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-card p-4 rounded-xl shadow-soft">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed text-center text-lg">
                C'est pour répondre à ces réalités qu'Oncovita a été créé. Le centre propose une approche globale 
                qui combine <span className="text-foreground font-medium">excellence médicale</span>, <span className="text-foreground font-medium">accompagnement humain</span> et <span className="text-foreground font-medium">soutien au bien-être</span> pendant les traitements.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Excellence Médicale", desc: "Une pratique oncologique rigoureuse s'appuyant sur les dernières avancées scientifiques et protocoles de traitement." },
              { icon: Heart, title: "Accompagnement Humain", desc: "Chaque patient est unique. Nous concevons des parcours de soins personnalisés avec écoute et compassion." },
              { icon: Leaf, title: "Approche Intégrative", desc: "Associer les traitements conventionnels à des pratiques complémentaires validées pour améliorer la qualité de vie." },
              { icon: Users, title: "Vision Globale", desc: "Le patient est considéré dans sa globalité — corps, esprit et bien-être émotionnel — et non uniquement à travers sa pathologie." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 150}>
                <div className="bg-card p-8 rounded-2xl shadow-soft hover-lift text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-6">
                    <item.icon size={24} />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Oncologie Intégrative */}
      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img src={consultationRoom} alt="Salle de consultation Oncovita" className="rounded-2xl shadow-card w-full" loading="lazy" />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-elevated hidden md:block">
                  <p className="font-display text-2xl">Le Patient d'Abord</p>
                  <p className="font-body text-xs tracking-wider uppercase mt-1">Soins Intégratifs</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Oncologie Intégrative</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Qu'est-ce que l'oncologie intégrative ?
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                L'oncologie intégrative est une approche médicale reconnue dans de nombreux centres de référence 
                à travers le monde. Elle repose sur un principe simple : associer les traitements conventionnels 
                du cancer à des pratiques complémentaires validées scientifiquement, afin d'améliorer la qualité 
                de vie des patients.
              </p>
              <div className="mb-6">
                <p className="font-body text-foreground font-medium text-sm mb-3">Les traitements médicaux au cœur de la prise en charge :</p>
                <ul className="space-y-2 mb-6">
                  {["Chimiothérapie", "Immunothérapie", "Thérapies ciblées", "Radiothérapie", "Chirurgie oncologique"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="font-body text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-8">
                <p className="font-body text-foreground font-medium text-sm mb-3">Accompagnement complémentaire :</p>
                <ul className="space-y-2">
                  {["Activité physique adaptée", "Nutrition spécialisée", "Gestion du stress", "Méditation et respiration", "Soutien psychologique", "Ateliers de bien-être"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="font-body text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Objectifs de l'oncologie intégrative */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Les objectifs de l'approche intégrative
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Mieux tolérer les traitements" },
              { icon: Activity, title: "Réduire certains effets secondaires" },
              { icon: Brain, title: "Soutenir les ressources physiques et émotionnelles" },
              { icon: Smile, title: "Améliorer la qualité de vie pendant et après la maladie" },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft text-center hover-lift">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <item.icon size={22} />
                  </div>
                  <p className="font-display text-lg text-foreground">{item.title}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={100}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Fondatrice d'Oncovita</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr Malak Rita Hajji
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Dr Malak Rita Hajji est oncologue médicale. Issue d'une famille engagée dans la lutte 
                contre le cancer — son père, Dr Omar Hajji, est l'un des pionniers de l'oncologie au Maroc 
                et cofondateur du groupe Oncorad — elle a grandi au contact de cette discipline.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Cette proximité avec la cancérologie lui a permis de comprendre très tôt les enjeux médicaux, 
                mais aussi humains, liés à la maladie. Au fil de sa formation et de son expérience, elle développe 
                une vision claire de la médecine : une oncologie exigeante sur le plan scientifique, mais profondément 
                attentive à l'expérience vécue par les patients.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Elle crée Oncovita avec l'ambition de proposer un lieu où la médecine est rigoureuse, l'écoute 
                est centrale et l'environnement participe au processus de soin. En parallèle de son activité 
                clinique, Dr Malak Rita Hajji contribue également au développement du secteur de la santé 
                privée au Maroc en tant que membre du conseil d'administration du groupe Oncorad.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/center" className="gap-2">
                  Découvrir le Parcours de Soins <ArrowRight size={16} />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative">
                <img src={drFounder} alt="Dr Malak Rita Hajji, fondatrice d'Oncovita" className="rounded-2xl shadow-card w-full max-w-md mx-auto" loading="lazy" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Prenez Contact</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              Nous sommes là pour vous accompagner
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 text-lg">
              N'hésitez pas à nous contacter pour toute information ou pour prendre rendez-vous. 
              Notre équipe est dédiée à vous offrir l'attention et les soins que vous méritez.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contacter le Centre</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
