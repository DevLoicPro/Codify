// src/components/home/HomeFeatures.jsx - CORRIGÉ
import { motion } from "framer-motion";
import {
  LuCpu,
  LuSparkles,
  LuLock,
  LuZap,
  LuCode,
  LuGlobe,
} from "react-icons/lu";

const HomeFeatures = () => {
  const features = [
    {
      title: "Technologie Avancée",
      description:
        "Utilisation des dernières technologies pour des solutions performantes et évolutives.",
      icon: <LuCpu className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Design Futuriste",
      description:
        "Interfaces modernes et intuitives qui marquent les esprits et facilitent l'expérience utilisateur.",
      icon: <LuSparkles className="w-8 h-8" />,
      color: "from-purple-500/20 to-pink-500/10",
    },
    {
      title: "Sécurité Maximale",
      description:
        "Protection des données et conformité aux standards de sécurité les plus stricts.",
      icon: <LuLock className="w-8 h-8" />,
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "Performance Optimale",
      description:
        "Sites et applications ultra-rapides, optimisés pour le référencement et la conversion.",
      icon: <LuZap className="w-8 h-8" />,
      color: "from-yellow-500/20 to-orange-500/10",
    },
    {
      title: "Code Propre",
      description:
        "Développement maintenable avec les meilleures pratiques et architectures modernes.",
      icon: <LuCode className="w-8 h-8" />,
      color: "from-indigo-500/20 to-blue-500/10",
    },
    {
      title: "Support Global",
      description:
        "Accompagnement continu et support réactif pour assurer le succès de votre projet.",
      icon: <LuGlobe className="w-8 h-8" />,
      color: "from-teal-500/20 to-cyan-500/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface/30 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            POURQUOI NOUS CHOISIR
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Nos <span className="text-vert">Avantages</span> Exclusifs
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Une combinaison unique d'expertise technique, de créativité et
            d'engagement qui fait la différence
          </p>
        </motion.div>

        {/* Grille des features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.2 },
              }}
              className="relative group"
            >
              {/* Carte de feature */}
              <div className="relative h-full bg-background/60 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo overflow-hidden">
                {/* Effet de bordure au survol */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-vert/20 transition-all duration-300 pointer-events-none"></div>

                {/* Fond dégradé au survol */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Numéro de la feature */}
                <div className="absolute top-4 right-4 text-5xl font-orbitron font-bold text-muted/10">
                  0{index + 1}
                </div>

                {/* Icône */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-foreground`}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted font-syne relative z-10">
                  {feature.description}
                </p>

                {/* Ligne décorative en bas */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vert/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Point lumineux */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-vert rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-glow-accent"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA ou informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-8 max-w-3xl mx-auto">
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-4">
                Une Approche <span className="text-vert">Sur Mesure</span>
              </h3>
              <p className="text-lg text-muted font-syne mb-6">
                Chaque projet est unique. Nous adaptons notre méthodologie à vos
                besoins spécifiques pour garantir un résultat qui dépasse vos
                attentes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vert rounded-full"></div>
                  <span className="font-syne text-sm text-foreground">
                    Analyse approfondie
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vert rounded-full"></div>
                  <span className="font-syne text-sm text-foreground">
                    Développement agile
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vert rounded-full"></div>
                  <span className="font-syne text-sm text-foreground">
                    Tests rigoureux
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vert rounded-full"></div>
                  <span className="font-syne text-sm text-foreground">
                    Support continu
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;
