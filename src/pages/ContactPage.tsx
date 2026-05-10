import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, Clock, Navigation } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import terrasseOncovita from "@/assets/terrasse-oncovita.jpg";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      toast.success("Merci pour votre message. Notre équipe vous répondra dans les meilleurs délais.");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setSending(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[45vh] md:h-[55vh] flex items-center">
        <div className="absolute inset-0">
          <img src={terrasseOncovita} alt="Terrasse Oncovita" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/45" />
        </div>
        <div className="relative container-oncovita px-5 md:px-6 lg:px-20 text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-teal-light mb-4">Contact</p>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground mb-4 md:mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Nous sommes là pour vous
            </h1>
            <p className="font-body text-primary-foreground leading-relaxed text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Notre équipe est à votre écoute pour vous guider et vous accompagner. 
              N'hésitez pas à nous contacter pour toute information ou pour prendre rendez-vous.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container-oncovita">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Formulaire */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="Votre nom"
                        maxLength={100}
                        required
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                        placeholder="votre@email.com"
                        maxLength={255}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                      placeholder="+212 6 00 00 00 00"
                      maxLength={20}
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                      Message *
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-5 py-3.5 rounded-xl bg-secondary border border-border font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-none"
                      placeholder="Comment pouvons-nous vous aider ?"
                      maxLength={1000}
                      required
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" disabled={sending} className="gap-2">
                    {sending ? "Envoi en cours..." : "Envoyer"} <Send size={16} />
                  </Button>
                </form>
              </AnimatedSection>
            </div>

            {/* Infos */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={200}>
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">Coordonnées</h2>
                <div className="space-y-8">
                  <a href="tel:+212522980719" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Téléphone</p>
                      <p className="font-body text-foreground">+212 5 22 98 07 19</p>
                    </div>
                  </a>

                  <a href="mailto:contact@oncovita.ma" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Email</p>
                      <p className="font-body text-foreground">contact@oncovita.ma</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Adresse</p>
                      <p className="font-body text-foreground">5ème étage, Immeuble FIRST, 401 Rte d'El Jadida, Casablanca 20000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock size={18} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Horaires</p>
                      <p className="font-body text-foreground text-sm">Lun – Ven : 8h30 – 12h30 / 13h30 – 17h30</p>
                      <p className="font-body text-muted-foreground text-sm">Sam – Dim : Fermé</p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">Suivez-nous</p>
                    <div className="flex gap-4">
                      <a href="https://www.instagram.com/oncovita_/" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Instagram">
                        <Instagram size={18} />
                      </a>
                      <a href="https://www.linkedin.com/company/oncovita-ma" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </a>
                      <a href="https://web.facebook.com/profile.php?id=61586513205244" target="_blank" rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all" aria-label="Facebook">
                        <Facebook size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Carte & Itinéraire */}
      <section className="px-5 md:px-12 lg:px-20 pb-20">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-card h-96 mb-6">
              <iframe
                src="https://www.google.com/maps?q=Oncovita,+401+Route+d'El+Jadida,+Casablanca&hl=fr&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Oncovita — 401 Rte d'El Jadida, Casablanca"
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="hero" size="lg" asChild className="gap-2">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Oncovita+Casablanca&destination_place_id=ChIJs-nWZZktpg0RkmzRqHZnGG8"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Itinéraire vers Oncovita avec Google Maps"
                >
                  <Navigation size={16} /> Itinéraire — Google Maps
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="gap-2">
                <a
                  href="https://ul.waze.com/ul?place=ChIJs-nWZZktpg0RkmzRqHZnGG8&ll=33.55279480%2C-7.64364790&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Itinéraire vers Oncovita avec Waze"
                >
                  <Navigation size={16} /> Itinéraire — Waze
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="gap-2">
                <a
                  href="https://maps.apple.com/?daddr=33.5527948,-7.6436479&q=Oncovita"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Itinéraire vers Oncovita avec Apple Plans"
                >
                  <Navigation size={16} /> Itinéraire — Apple Plans
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
