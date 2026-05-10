import { useEffect } from "react";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const BEHOLD_FEED_ID = "tY0TDf55v5Nci3UYDTCp";
const INSTAGRAM_PROFILE = "https://www.instagram.com/oncovita_/";

// Déclaration du custom element Behold pour TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "behold-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { "feed-id": string },
        HTMLElement
      >;
    }
  }
}

const InstagramFeed = () => {
  useEffect(() => {
    // Charger le script Behold une seule fois
    const SCRIPT_ID = "behold-widget-script";
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);
  }, []);

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

        <div className="max-w-5xl mx-auto">
          <behold-widget feed-id={BEHOLD_FEED_ID} />
        </div>

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
