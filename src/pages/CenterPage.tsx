import { Heart, Shield, Microscope, Brain, Eye, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import centerExterior from "@/assets/center-exterior.jpg";
import consultationRoom from "@/assets/consultation-room.jpg";
import treatmentRoom from "@/assets/treatment-room.jpg";
import waitingArea from "@/assets/waiting-area.jpg";
import heroCenter from "@/assets/hero-center.jpg";
import drFounder from "@/assets/dr-founder.jpg";

const CenterPage = () => {
  const galleryImages = [
    { src: heroCenter, alt: "Accueil Oncovita", label: "Accueil" },
    { src: consultationRoom, alt: "Salle de consultation", label: "Consultation" },
    { src: treatmentRoom, alt: "Espace de traitement", label: "Traitement" },
    { src: waitingArea, alt: "Salle d'attente", label: "Salle d'Attente" },
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
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophie */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Notre Vision</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                La Philosophie d'Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Chez Oncovita, nous croyons que les soins en oncologie doivent évoluer. Ils doivent allier précision médicale 
                et accompagnement sincère du patient, qualité de vie et innovation. Notre philosophie repose sur la conviction 
                que chaque patient mérite non seulement le meilleur traitement, mais aussi un environnement qui nourrit l'espoir et la guérison.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Nous avons réinventé ce qu'un centre de soins en cancérologie peut être — un lieu où la médecine avancée 
                rencontre la chaleur humaine, où chaque détail est pensé pour le confort et la dignité du patient.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <img src={waitingArea} alt="Environnement accueillant Oncovita" className="rounded-2xl shadow-card w-full" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approche Médicale */}
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Approche Médicale</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Des soins personnalisés et pluridisciplinaires
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Chaque parcours de soins chez Oncovita est conçu de manière unique autour du patient, guidé par une équipe 
                pluridisciplinaire et nourri par les dernières avancées en oncologie.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: "Traitement Personnalisé", desc: "Chaque parcours est adapté au diagnostic unique, aux besoins et aux préférences du patient." },
              { icon: Shield, title: "Soins Pluridisciplinaires", desc: "Oncologues, radiothérapeutes et spécialistes de support collaborent pour une prise en charge complète." },
              { icon: Brain, title: "Décisions Centrées sur le Patient", desc: "Les patients sont acteurs de leur parcours de soins, informés et impliqués dans chaque décision." },
              { icon: Clock, title: "Suivi à Long Terme", desc: "Un accompagnement continu au-delà du traitement actif pour un bien-être durable." },
              { icon: Heart, title: "Soins de Support", desc: "Des programmes intégratifs répondant aux besoins physiques, émotionnels et psychologiques." },
              { icon: Eye, title: "Innovation", desc: "Accès aux derniers protocoles de traitement et technologies en cancérologie." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 100}>
                <div className="p-8 rounded-2xl border border-border hover-lift">
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

      {/* Fondatrice */}
      <section className="section-padding gradient-teal">
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
                  Oncologue dotée d'une formation internationale approfondie, le Dr Malak Rita Hajji a consacré sa carrière 
                  à faire progresser les soins en cancérologie avec une approche profondément humaine. Sa spécialisation en 
                  oncologie médicale, combinée à une compréhension fine de la médecine intégrative, guide la vision d'Oncovita.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Engagée pour l'innovation et l'excellence médicale, le Dr Hajji réunit des protocoles de traitement 
                  de pointe avec une attention sincère au bien-être du patient. Sa philosophie est simple : chaque patient 
                  mérite des soins aussi empreints de compassion que de précision.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Oncologie Médicale", value: "Spécialisation" },
                    { label: "Internationale", value: "Formation" },
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
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">L'Environnement</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Un espace conçu pour la guérison
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Chaque détail d'Oncovita a été pensé avec soin pour créer un environnement serein, rassurant et élégant 
                — car l'espace où les soins ont lieu influence profondément le parcours de guérison.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedSection>
              <img src={heroCenter} alt="Accueil Oncovita" className="rounded-2xl w-full h-80 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <img src={consultationRoom} alt="Salle de consultation" className="rounded-2xl w-full h-80 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <AnimatedSection delay={200}>
              <img src={treatmentRoom} alt="Espace de traitement" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <img src={waitingArea} alt="Salle d'attente" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <img src={centerExterior} alt="Extérieur du centre" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Galerie</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                À l'Intérieur d'Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Un voyage visuel à travers nos espaces — conçus pour la confiance, la transparence et le confort.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, i) => (
              <AnimatedSection key={img.label} delay={i * 100}>
                <div className="group relative overflow-hidden rounded-xl aspect-square">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-500 flex items-end p-4">
                    <p className="font-body text-xs tracking-widest uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">{img.label}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section className="section-padding">
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
