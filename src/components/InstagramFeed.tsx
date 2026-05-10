import { Instagram, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Flux Instagram auto-mis à jour via widget tiers (Behold / LightWidget / SnapWidget).
 *
 * Pour activer le flux automatique :
 * 1. Créer un compte gratuit sur https://behold.so (ou https://lightwidget.com)
 * 2. Connecter @oncovita_
 * 3. Copier l'URL d'embed (ex : https://w.behold.so/XXXXXXXX)
 * 4. Coller cette URL dans VITE_INSTAGRAM_WIDGET_URL ci-dessous
 *
 * Tant que la variable est vide, une grille statique élégante de redirection s'affiche.
 */
const INSTAGRAM_WIDGET_URL: string = ""; // ← collez votre URL Behold/LightWidget ici
const INSTAGRAM_PROFILE = "https://www.instagram.com/oncovita_/";

const InstagramFeed = () => {
  return (
    <section className="section-padding bg-secondary/40">
      <div className="container-oncovita px-5 md:px-12 lg:px-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
            @oncovita_
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Suivez la vie du Centre sur Instagram
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed">
            Coulisses, ateliers, sensibilisations et messages d'espoir : retrouvez chaque
            semaine les actualités d'Oncovita.
          </p>
        </div>

        {INSTAGRAM_WIDGET_URL ? (
          <div className="rounded-2xl overflow-hidden shadow-soft bg-card">
            <iframe
              src={INSTAGRAM_WIDGET_URL}
              title="Flux Instagram Oncovita"
              loading="lazy"
              className="w-full"
              style={{ border: 0, height: "640px" }}
              allow="encrypted-media"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {[
              "Sensibilisation Octobre Rose",
              "Ateliers bien-être au Centre",
              "Témoignages & messages d'espoir",
            ].map((label) => (
              <a
                key={label}
                href={INSTAGRAM_PROFILE}
                target="_blank"
                rel="noopener noreferrer"
                className="group aspect-square rounded-2xl bg-gradient-to-br from-primary/15 via-accent/15 to-secondary flex flex-col items-center justify-center text-center p-6 hover-lift shadow-soft"
                aria-label={`Voir ${label} sur Instagram`}
              >
                <Instagram size={28} className="text-primary mb-3" />
                <p className="font-display text-base text-foreground leading-snug">
                  {label}
                </p>
                <span className="font-body text-xs tracking-widest uppercase text-primary mt-3 inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir <ArrowUpRight size={12} />
                </span>
              </a>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Button variant="hero-outline" size="lg" asChild className="gap-2">
            <a href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
              <Instagram size={16} /> Suivre @oncovita_
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
