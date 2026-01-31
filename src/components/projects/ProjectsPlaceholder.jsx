// src/components/projects/ProjectsPlaceholder.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuCalendar,
  LuRocket,
  LuCode,
  LuSparkles,
  LuClock,
  LuUsers,
} from "react-icons/lu";

const ProjectsPlaceholder = () => {
  const upcomingFeatures = [
    {
      title: "Galerie Interactive",
      description:
        "Parcourez nos projets avec des filtres par technologie et secteur.",
      icon: <LuCode className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Détails Techniques",
      description:
        "Plongez dans les spécifications techniques de chaque réalisation.",
      icon: <LuSparkles className="w-8 h-8" />,
      color: "from-purple-500/20 to-pink-500/10",
    },
    {
      title: "Statistiques en Temps Réel",
      description: "Visualisez l'impact et les performances de nos projets.",
      icon: <LuClock className="w-8 h-8" />,
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "Témoignages Clients",
      description: "Découvrez les retours d'expérience de nos partenaires.",
      icon: <LuUsers className="w-8 h-8" />,
      color: "from-yellow-500/20 to-orange-500/10",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-background relative overflow-hidden pt-32">
      {/* Effets de fond futuristes */}
      <div className="absolute inset-0 z-0">
        {/* Cercles dégradés */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vert/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Lignes de code animées en arrière-plan */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(18, 160, 0, 0.1) 2px,
              rgba(18, 160, 0, 0.1) 4px
            )`,
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero de la page Projets */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-6"
          >
            <LuCalendar className="w-4 h-4" />
            PROCHAINEMENT
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-orbitron font-bold text-foreground mb-6"
          >
            Notre <span className="text-vert">Portfolio</span> Digital
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-muted font-syne max-w-3xl mx-auto mb-10"
          >
            Nous préparons quelque chose d'extraordinaire. Une vitrine immersive
            de nos réalisations les plus innovantes.
          </motion.p>

          {/* Compte à rebours visuel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-surface/50 backdrop-blur-sm rounded-full border border-muted/20 mb-8"
          >
            <LuRocket className="w-5 h-5 text-vert animate-pulse" />
            <span className="font-syne text-foreground">
              Lancement prévu : Q1 2026
            </span>
          </motion.div>
        </div>

        {/* Section principale */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Illustration/Message principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo overflow-hidden">
              {/* Carte animée */}
              <div className="relative h-64 mb-8 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-vert/20 to-purple-500/20"></div>

                {/* Animation de construction */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Éléments de construction animés */}
                    {[1, 2, 3, 4].map((i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-vert rounded"
                        animate={{
                          y: [0, -20, 0],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                        style={{
                          left: `${25 * i}%`,
                          top: "50%",
                        }}
                      />
                    ))}

                    {/* Texte "Under Construction" */}
                    <div className="text-center">
                      <div className="text-4xl font-orbitron font-bold text-foreground mb-2">
                        🚧
                      </div>
                      <div className="text-sm font-syne text-muted">
                        En construction
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                Une Expérience à Venir
              </h3>
              <p className="text-muted font-syne mb-6">
                Nous développons actuellement une galerie de projets interactive
                qui vous permettra d'explorer nos réalisations sous tous les
                angles.
              </p>

              <div className="flex items-center gap-2 text-vert font-syne font-semibold">
                <span>Développement en cours</span>
                <div className="w-2 h-2 bg-vert rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-vert/20 to-blue-500/20 rounded-full blur-xl -z-10"></div>
          </motion.div>

          {/* Liste des fonctionnalités à venir */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-orbitron font-semibold text-foreground mb-8">
              Ce qui <span className="text-vert">Vous Attend</span>
            </h3>

            <div className="space-y-6">
              {upcomingFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 mt-1 text-foreground`}
                  >
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="text-xl font-orbitron font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted font-syne">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="relative bg-gradient-to-br from-surface/50 to-background/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-6">
              Impatient de Voir Nos{" "}
              <span className="text-vert">Réalisations</span> ?
            </h3>

            <p className="text-lg text-muted font-syne mb-8 max-w-2xl mx-auto">
              En attendant le lancement de notre portfolio complet, découvrez
              quelques-uns de nos projets phares sur la page d'accueil ou
              contactez-nous pour discuter de votre propre projet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50"
              >
                <span>Voir les projets phares</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-surface text-foreground font-syne font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/30 hover:border-vert/50"
              >
                <span>Discuter d'un projet</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Section des statistiques */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-20 pt-8 border-t border-muted/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                50+
              </div>
              <div className="text-sm text-muted font-syne">
                Projets Réalisés
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                15+
              </div>
              <div className="text-sm text-muted font-syne">
                Technologies Maîtrisées
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                99%
              </div>
              <div className="text-sm text-muted font-syne">
                Satisfaction Client
              </div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                24/7
              </div>
              <div className="text-sm text-muted font-syne">Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPlaceholder;
