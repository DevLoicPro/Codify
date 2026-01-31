// src/components/home/HomeAbout.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuLightbulb,
  LuStar,
  LuEye,
  LuHandshake,
  LuUsers,
  LuRocket,
  LuTarget,
  LuShield,
} from "react-icons/lu";

const HomeAbout = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "Nous repoussons les limites technologiques pour créer des solutions avant-gardistes.",
      icon: <LuLightbulb className="w-8 h-8" />,
      color: "from-yellow-500/20 to-yellow-500/10",
    },
    {
      title: "Excellence",
      description:
        "Chaque projet est mené avec rigueur et une recherche constante de la perfection.",
      icon: <LuStar className="w-8 h-8" />,
      color: "from-blue-500/20 to-blue-500/10",
    },
    {
      title: "Transparence",
      description:
        "Communication claire et honnête à chaque étape de votre projet.",
      icon: <LuEye className="w-8 h-8" />,
      color: "from-green-500/20 to-green-500/10",
    },
    {
      title: "Collaboration",
      description:
        "Nous travaillons main dans la main avec vous pour concrétiser votre vision.",
      icon: <LuHandshake className="w-8 h-8" />,
      color: "from-purple-500/20 to-purple-500/10",
    },
  ];

  const stats = [
    {
      number: "3",
      label: "Fondateurs Experts",
      icon: <LuUsers className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Projets Réalisés",
      icon: <LuRocket className="w-6 h-6" />,
    },
    {
      number: "99%",
      label: "Clients Satisfaits",
      icon: <LuTarget className="w-6 h-6" />,
    },
    {
      number: "24/7",
      label: "Support Disponible",
      icon: <LuShield className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(18, 160, 0, 0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
            À PROPOS DE NOUS
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            L'Agence qui <span className="text-vert">Révolutionne</span> le
            Digital
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Codify, c'est bien plus qu'une agence digitale. C'est une vision,
            une passion pour l'innovation et un engagement sans faille envers
            l'excellence.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Texte de présentation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-orbitron font-semibold text-foreground">
              Notre Histoire
            </h3>
            <p className="text-lg text-muted font-syne">
              Fondée par trois passionnés de technologie et de design, Codify
              est née d'une conviction simple : le digital doit être à la fois
              performant et esthétique. Notre mission est de transformer les
              concepts les plus ambitieux en réalités digitales qui marquent les
              esprits.
            </p>
            <p className="text-lg text-muted font-syne">
              Chaque jour, nous repoussons les limites de la création numérique
              pour offrir à nos clients des solutions qui dépassent leurs
              attentes. Notre approche unique mêle expertise technique et sens
              artistique.
            </p>

            {/* Bouton vers la page À propos complète */}
            <div className="pt-4">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-foreground font-syne font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/30 hover:border-vert/50 group"
              >
                <span>Découvrir notre histoire</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </motion.div>

          {/* Carte des fondateurs (visuel) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo overflow-hidden">
              {/* Éléments visuels */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-vert/20 to-purple-500/20 rounded-full blur-xl"></div>

              <div className="relative z-10">
                <h4 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
                  Notre Équipe Fondatrice
                </h4>

                {/* Avatars des fondateurs */}
                <div className="flex -space-x-4 mb-6">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-vert/30 to-purple-500/30 border-2 border-surface flex items-center justify-center"
                    >
                      <LuUsers className="w-8 h-8 text-foreground" />
                    </div>
                  ))}
                </div>

                <p className="text-muted font-syne">
                  Trois experts complémentaires unis par une même vision :
                  Androd (CEO), Dibi (COO) et Le Javascripteur Loïc (CTO).
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Nos valeurs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-orbitron font-semibold text-foreground text-center mb-12">
            Nos <span className="text-vert">Valeurs</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative h-full bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-muted/20 hover:border-vert/30 transition-all duration-300">
                  {/* Icône avec fond dégradé */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 text-foreground`}
                  >
                    {value.icon}
                  </div>

                  <h4 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-muted font-syne text-sm">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="flex flex-col items-center">
                  {/* Icône de la statistique */}
                  <div className="w-12 h-12 rounded-full bg-vert/10 flex items-center justify-center mb-3 text-vert group-hover:bg-vert/20 transition-colors duration-300">
                    {stat.icon}
                  </div>

                  <div className="text-4xl md:text-5xl font-orbitron font-bold text-vert mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted font-syne">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Ligne de séparation décorative */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-vert/50 to-transparent mt-12"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAbout;
