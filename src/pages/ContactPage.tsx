import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

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
      <section className="section-padding gradient-warm">
        <div className="container-oncovita text-center max-w-3xl mx-auto">
          <AnimatedSection>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Contact</p>
            <h1 className="font-display text-3xl md:text-5xl text-foreground mb-4 md:mb-6">
              Nous sommes là pour vous
            </h1>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
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

      {/* Carte */}
      <section className="px-6 lg:px-20 pb-20">
        <div className="container-oncovita">
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-card h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1662.2!2d-7.6322!3d33.5697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d9965d6e9b3%3A0x6f186776a8d16c92!2sOncovita!5e0!3m2!1sfr!2sma!4v1710000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Oncovita — 401 Rte d'El Jadida, Casablanca"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
