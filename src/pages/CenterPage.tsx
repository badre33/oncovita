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
    { src: heroCenter, alt: "Oncovita reception area", label: "Reception" },
    { src: consultationRoom, alt: "Consultation room", label: "Consultation" },
    { src: treatmentRoom, alt: "Treatment area", label: "Treatment" },
    { src: waitingArea, alt: "Waiting area", label: "Waiting Area" },
    { src: centerExterior, alt: "Center exterior", label: "Exterior" },
  ];

  return (
    <Layout>
      <title>The Center — Oncovita Integrative Oncology</title>
      <meta name="description" content="Discover Oncovita, a modern integrative oncology center in Casablanca designed to provide premium cancer care in a calm, welcoming environment." />

      {/* Hero */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={centerExterior} alt="Oncovita center" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/20" />
        </div>
        <div className="relative container-oncovita px-6 lg:px-20">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-4">Oncovita</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground max-w-2xl">
              The Center
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Vision</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                The Philosophy of Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                At Oncovita, we believe oncology care must evolve. It must combine medical precision with genuine patient 
                support, quality of life with innovation. Our philosophy is rooted in the conviction that every patient 
                deserves not only the best treatment but also an environment that nurtures hope and healing.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                We have reimagined what a cancer care center can be — a place where advanced medicine meets human warmth, 
                where every detail is designed with the patient's comfort and dignity in mind.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <img src={waitingArea} alt="Oncovita welcoming environment" className="rounded-2xl shadow-card w-full" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Medical Approach */}
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Medical Approach</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Personalized, multidisciplinary care
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Every treatment pathway at Oncovita is uniquely designed around the patient, guided by a multidisciplinary 
                team and informed by the latest advances in oncology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Microscope, title: "Personalized Treatment", desc: "Each pathway is tailored to the patient's unique diagnosis, needs and preferences." },
              { icon: Shield, title: "Multidisciplinary Care", desc: "Oncologists, radiotherapists, and support specialists collaborate for comprehensive care." },
              { icon: Brain, title: "Patient-Centered Decisions", desc: "Patients are active participants in their treatment journey, informed and empowered." },
              { icon: Clock, title: "Long-Term Monitoring", desc: "Continuous follow-up and support beyond active treatment for lasting wellbeing." },
              { icon: Heart, title: "Supportive Care", desc: "Integrative programs addressing physical, emotional and psychological needs." },
              { icon: Eye, title: "Innovation", desc: "Access to the latest treatment protocols and technologies in cancer care." },
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

      {/* Founder Deep Dive */}
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
                <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Founder & Medical Director</p>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Dr Malak Rita Hajji
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-4">
                  An oncologist with extensive international training, Dr Malak Rita Hajji has dedicated her career to 
                  advancing cancer care with a profoundly human approach. Her specialization in medical oncology, combined 
                  with a deep understanding of integrative medicine, drives the vision of Oncovita.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Committed to innovation and medical excellence, Dr Hajji brings together cutting-edge treatment protocols 
                  with a genuine focus on patient wellbeing. Her philosophy is simple: every patient deserves care that is 
                  as compassionate as it is precise.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Medical Oncology", value: "Specialization" },
                    { label: "International", value: "Training" },
                    { label: "Patient-Centered", value: "Philosophy" },
                    { label: "Innovation", value: "Commitment" },
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

      {/* Environment */}
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Environment</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                A space designed for healing
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Every detail of Oncovita has been thoughtfully designed to create a serene, reassuring and elegant 
                environment — because the space where care happens profoundly influences the healing journey.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AnimatedSection>
              <img src={heroCenter} alt="Oncovita reception" className="rounded-2xl w-full h-80 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <img src={consultationRoom} alt="Consultation room" className="rounded-2xl w-full h-80 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <AnimatedSection delay={200}>
              <img src={treatmentRoom} alt="Treatment area" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={300}>
              <img src={waitingArea} alt="Waiting area" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <img src={centerExterior} alt="Center exterior" className="rounded-2xl w-full h-60 object-cover shadow-soft" loading="lazy" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inside Oncovita Gallery */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Gallery</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Inside Oncovita
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                A visual journey through our spaces — designed for trust, transparency and comfort.
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

      {/* Journal Preview */}
      <section className="section-padding">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Oncovita Journal</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Insights & Awareness
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed">
                Educational content, medical insights and awareness — accessible, reassuring and always patient-centered.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Understanding Integrative Oncology", category: "Medical Insight", desc: "How combining conventional treatments with supportive care improves patient outcomes and quality of life." },
              { title: "Cancer Awareness and Prevention", category: "Awareness", desc: "Key facts about early detection, screening programs and lifestyle choices that make a difference." },
              { title: "Patient Wellbeing During Treatment", category: "Patient Support", desc: "Practical guidance on maintaining physical and emotional wellbeing throughout the treatment journey." },
            ].map((post, i) => (
              <AnimatedSection key={post.title} delay={i * 150}>
                <div className="bg-card rounded-2xl p-8 shadow-soft hover-lift h-full flex flex-col">
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-4">{post.category}</p>
                  <h3 className="font-display text-xl text-foreground mb-3">{post.title}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">{post.desc}</p>
                  <p className="font-body text-xs text-primary mt-6 tracking-wider uppercase">Coming Soon</p>
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
