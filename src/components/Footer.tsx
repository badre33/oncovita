import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-oncovita section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          <div>
            <h3 className="font-display text-3xl mb-4">Oncovita</h3>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed mb-6">
              Soigner le corps, apaiser l'esprit, nourrir l'espoir.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/oncovita_/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/oncovita-ma" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://web.facebook.com/profile.php?id=61586513205244" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/50 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-sm tracking-widest uppercase mb-6 text-primary-foreground/80">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">Accueil</Link>
              <Link to="/center" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">Le Centre</Link>
              <Link to="/engagement" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">Engagement</Link>
              <Link to="/journal" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">Journal</Link>
              <Link to="/contact" className="text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">Contact</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-body text-sm tracking-widest uppercase mb-6 text-primary-foreground/80">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+212522980719" className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">
                <Phone size={16} />
                +212 5 22 98 07 19
              </a>
              <a href="mailto:contact@oncovita.ma" className="flex items-center gap-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors text-sm font-body">
                <Mail size={16} />
                contact@oncovita.ma
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/50 text-sm font-body">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                5ème étage, Immeuble FIRST, 401 Rte d'El Jadida, Casablanca 20000
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-16 pt-8 text-center">
          <p className="text-primary-foreground/30 text-xs font-body tracking-wider">
            © {new Date().getFullYear()} Oncovita — Centre d'Oncologie Intégrative. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
