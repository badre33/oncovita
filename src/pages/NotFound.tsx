import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 — Route inexistante :", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="relative min-h-[80vh] flex items-center justify-center gradient-warm overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container-oncovita relative px-5 md:px-6 lg:px-20 py-20 text-center max-w-2xl">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-6">
            Page introuvable
          </p>
          <h1 className="font-display text-7xl md:text-9xl text-foreground mb-6 leading-none">
            404
          </h1>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-6">
            La page que vous cherchez s'est égarée
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-10 text-base md:text-lg">
            Pas d'inquiétude — il arrive parfois que les chemins se croisent autrement.
            Revenons ensemble vers un espace familier.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/" className="gap-2">
                <Home size={16} />
                Retour à l'accueil
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => window.history.back()} className="gap-2">
              <ArrowLeft size={16} />
              Page précédente
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/contact" className="gap-2">
                <Phone size={16} />
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
