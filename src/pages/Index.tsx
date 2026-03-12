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
      {/* SEO */}
      <title>Oncovita — Integrative Oncology Center in Casablanca</title>
      <meta name="description" content="Oncovita is a premium integrative oncology center in Casablanca offering compassionate cancer care, advanced treatments, and holistic patient support." />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Oncovita integrative oncology center interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative container-oncovita px-6 lg:px-20 py-20">
          <div className="max-w-2xl">
            <AnimatedSection>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-6">
                Integrative Oncology Center — Casablanca
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6">
                Reimagining oncology care with precision, compassion and innovation.
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={400}>
              <p className="font-body text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                A new approach to oncology combining medical expertise, advanced technologies and integrative patient care.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={600}>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/center">Discover the Center</Link>
                </Button>
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding gradient-warm">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Our Philosophy</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
                A different vision of oncology
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed text-lg">
                Oncovita offers an approach that combines scientific rigor, personalized treatment, 
                attention to quality of life and integrative medicine — because healing goes beyond treating the disease.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Sparkles, title: "Medical Excellence", desc: "Rigorous oncology practice backed by the latest scientific advances and treatment protocols." },
              { icon: Heart, title: "Human-Centered Care", desc: "Every patient is unique. We design personalized treatment pathways with compassion." },
              { icon: Leaf, title: "Integrative Approach", desc: "Combining medical oncology with supportive care for body, mind and emotional wellbeing." },
              { icon: Users, title: "Multidisciplinary Team", desc: "A coordinated team of specialists working together for comprehensive patient care." },
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

      {/* Integrative Oncology */}
      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <div className="relative">
                <img
                  src={consultationRoom}
                  alt="Oncovita consultation room"
                  className="rounded-2xl shadow-card w-full"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-elevated hidden md:block">
                  <p className="font-display text-2xl">Patient-First</p>
                  <p className="font-body text-xs tracking-wider uppercase mt-1">Integrative Care</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Integrative Oncology</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Caring for the whole person
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Integrative oncology is a care model that considers the patient as a whole — body, mind and emotional wellbeing. 
                At Oncovita, we believe that effective cancer care must address not only the disease but the person living with it.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Medical oncology expertise and advanced treatments",
                  "Radiotherapy and precision-based therapies",
                  "Integrative supportive care programs",
                  "Physical and emotional wellbeing support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="font-body text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" size="lg" asChild>
                <Link to="/center" className="gap-2">
                  Learn More <ArrowRight size={16} />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding gradient-teal">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={100}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">The Founder</p>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                Dr Malak Rita Hajji
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Dr Malak Rita Hajji founded Oncovita with the ambition of creating a place where medical excellence meets 
                human-centered care. Her approach combines rigorous oncology practice with a deep commitment to patient 
                wellbeing and personalized treatment pathways.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                With international training and a specialization in medical oncology, Dr Hajji brings together the latest 
                advances in cancer treatment with an integrative vision that places the patient at the heart of every decision.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/center" className="gap-2">
                  Meet Dr Hajji <ArrowRight size={16} />
                </Link>
              </Button>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="relative">
                <img
                  src={drFounder}
                  alt="Dr Malak Rita Hajji, founder of Oncovita"
                  className="rounded-2xl shadow-card w-full max-w-md mx-auto"
                  loading="lazy"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-oncovita text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Get in Touch</p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              We are here to guide and support you
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-10 text-lg">
              Do not hesitate to reach out for information or to schedule a consultation. 
              Our team is dedicated to providing you with the care and attention you deserve.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">Contact the Center</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
