import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoOncovita from "@/assets/logo-oncovita.jpg";

const navItems = [
  { label: "Accueil", path: "/" },
  { label: "Le Centre", path: "/center" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container-oncovita flex items-center justify-between h-20 px-6 lg:px-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoOncovita} alt="Logo Oncovita" className="h-20 w-auto mix-blend-multiply" />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-primary font-semibold"
                  : "text-foreground/70 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Ouvrir le menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border animate-fade-in">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary font-semibold"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
