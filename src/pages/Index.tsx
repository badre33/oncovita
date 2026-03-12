import { Link } from "react-router-dom";
import { Heart, Leaf, Sparkles, Users, ArrowRight } from "lucide-react";
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
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Intérieur du centre Oncovita" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative container-oncovita px-6 lg:px-20 py-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-6">
                Centre d'Oncologie Intégrative — Casablanca
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
                Réinventer la prise en charge en oncologie avec précision, compassion et innovation.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="font-body text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Une nouvelle approche de l'oncologie alliant expertise médicale, technologies avancées et soins intégratifs centrés sur le patient.
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

      {/* Philosophie */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Notre Philosophie</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                Une vision différente de l'oncologie
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Oncovita propose une approche qui allie rigueur scientifique, traitements personnalisés, 
                attention à la qualité de vie et médecine intégrative — car guérir va au-delà du traitement de la maladie.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Excellence Médicale", desc: "Une pratique oncologique rigoureuse s'appuyant sur les dernières avancées scientifiques et protocoles de traitement." },
              { icon: Heart, title: "Soins Centrés sur l'Humain", desc: "Chaque patient est unique. Nous concevons des parcours de soins personnalisés avec compassion." },
              { icon: Leaf, title: "Approche Intégrative", desc: "Combinant l'oncologie médicale avec des soins de support pour le corps, l'esprit et le bien-être émotionnel." },
              { icon: Users, title: "Équipe Pluridisciplinaire", desc: "Une équipe coordonnée de spécialistes travaillant ensemble pour une prise en charge complète." },
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
                Prendre soin de la personne dans sa globalité
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                L'oncologie intégrative est un modèle de soins qui considère le patient dans sa globalité — corps, esprit et bien-être émotionnel. 
                Chez Oncovita, nous croyons qu'une prise en charge efficace du cancer doit adresser non seulement la maladie mais aussi la personne qui vit avec.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Expertise en oncologie médicale et traitements avancés",
                  "Radiothérapie et thérapies de précision",
                  "Programmes de soins de support intégratifs",
                  "Accompagnement du bien-être physique et émotionnel",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" asChild>
                <Link to="/center" className="gap-2">
                  En Savoir Plus <ArrowRight size={16} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Fondatrice */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={100}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">La Fondatrice</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr Malak Rita Hajji
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Le Dr Malak Rita Hajji a fondé Oncovita avec l'ambition de créer un lieu où l'excellence médicale 
                rencontre les soins centrés sur l'humain. Son approche allie une pratique oncologique rigoureuse 
                à un engagement profond envers le bien-être du patient et des parcours de traitement personnalisés.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Avec une formation internationale et une spécialisation en oncologie médicale, le Dr Hajji réunit 
                les dernières avancées dans le traitement du cancer avec une vision intégrative qui place le patient 
                au cœur de chaque décision.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/center" className="gap-2">
                  Rencontrer le Dr Hajji <ArrowRight size={16} />
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
      <section className="section-padding">
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
