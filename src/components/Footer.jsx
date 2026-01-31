// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { useSettings } from "../contexts/SettingsContext";
import {
  LuMail,
  LuPhone,
  LuMapPin,
  LuFacebook,
  LuTwitter,
  LuLinkedin,
  LuGithub,
  LuArrowUp,
} from "react-icons/lu";

const Footer = () => {
  const { theme } = useSettings();

  // Logos selon le thème
  const logoPath =
    theme === "dark"
      ? "/src/assets/images/logos/Codify-logo-white-transparent.png"
      : "/src/assets/images/logos/Codify-logo-black-transparent.png";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-surface border-t border-muted/20 mt-20">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vert/30 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Section principale du footer */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Colonne 1: Logo et description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src={logoPath}
                  alt="Codify Logo"
                  className="h-10 object-contain"
                  onError={(e) => {
                    console.error(`Logo non trouvé: ${logoPath}`);
                    e.target.style.display = "none";
                  }}
                />
              </div>
              <p className="text-muted font-syne text-sm">
                L'agence digitale qui transforme vos concepts les plus ambitieux
                en réalités digitales exceptionnelles.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                >
                  <LuFacebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                >
                  <LuTwitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                >
                  <LuLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                >
                  <LuGithub className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Colonne 2: Liens rapides */}
            <div>
              <h3 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-vert rounded-full opacity-0 group-hover:opacity-100"></span>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-vert rounded-full opacity-0 group-hover:opacity-100"></span>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projets"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-vert rounded-full opacity-0 group-hover:opacity-100"></span>
                    Projets
                  </Link>
                </li>
                <li>
                  <Link
                    to="/a-propos"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-vert rounded-full opacity-0 group-hover:opacity-100"></span>
                    À propos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-vert rounded-full opacity-0 group-hover:opacity-100"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 3: Services */}
            <div>
              <h3 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                Services
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/services#creation"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300"
                  >
                    Création Digitale
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#optimisation"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300"
                  >
                    Optimisation
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#conseil"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300"
                  >
                    Conseil Stratégique
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#design"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300"
                  >
                    Design UI/UX
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services#developpement"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300"
                  >
                    Développement Web
                  </Link>
                </li>
              </ul>
            </div>

            {/* Colonne 4: Contact */}
            <div>
              <h3 className="text-lg font-orbitron font-semibold text-foreground mb-6">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <LuMapPin className="w-5 h-5 text-vert flex-shrink-0 mt-1" />
                  <span className="text-muted font-syne text-sm">
                    123 Avenue du Digital
                    <br />
                    75000 Paris, France
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <LuPhone className="w-5 h-5 text-vert flex-shrink-0" />
                  <a
                    href="tel:+33123456789"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 text-sm"
                  >
                    +33 1 23 45 67 89
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <LuMail className="w-5 h-5 text-vert flex-shrink-0" />
                  <a
                    href="mailto:contact@codify.fr"
                    className="text-muted font-syne hover:text-vert transition-colors duration-300 text-sm"
                  >
                    contact@codify.fr
                  </a>
                </li>
              </ul>

              {/* Newsletter */}
              <div className="mt-8">
                <h4 className="text-sm font-orbitron font-semibold text-foreground mb-3">
                  Newsletter
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 px-4 py-2 bg-background border border-muted/30 rounded-l-lg text-foreground font-syne text-sm focus:outline-none focus:border-vert/50"
                  />
                  <button className="px-4 py-2 bg-vert text-white font-syne font-semibold text-sm rounded-r-lg hover:bg-primary-dark transition-colors duration-300">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-muted/20"></div>

        {/* Section inférieure avec logo large */}
        <div className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Copyright et mentions légales */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-sm text-muted font-syne">
                  © {currentYear} Codify. Tous droits réservés.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                  <Link
                    to="/mentions-legales"
                    className="text-xs text-muted font-syne hover:text-foreground transition-colors duration-300"
                  >
                    Mentions légales
                  </Link>
                  <Link
                    to="/politique-confidentialite"
                    className="text-xs text-muted font-syne hover:text-foreground transition-colors duration-300"
                  >
                    Politique de confidentialité
                  </Link>
                  <Link
                    to="/cgu"
                    className="text-xs text-muted font-syne hover:text-foreground transition-colors duration-300"
                  >
                    CGU
                  </Link>
                  <Link
                    to="/cookies"
                    className="text-xs text-muted font-syne hover:text-foreground transition-colors duration-300"
                  >
                    Politique cookies
                  </Link>
                </div>
              </div>

              {/* Bouton retour en haut */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-4 py-2 bg-background text-foreground font-syne font-semibold rounded-lg hover:bg-surface transition-all duration-300 border border-muted/20 hover:border-vert/50 group"
              >
                <span className="text-sm">Retour en haut</span>
                <LuArrowUp className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
