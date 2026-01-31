// src/components/services/ServicesProcess.jsx
import { motion } from "framer-motion";
import {
  LuSearch,
  LuPenTool,
  LuCode,
  LuTestTube,
  LuRocket,
  LuArrowRight,
} from "react-icons/lu";

const ServicesProcess = () => {
  const processSteps = [
    {
      id: 1,
      title: "Découverte & Analyse",
      description:
        "Nous commençons par comprendre vos besoins, vos objectifs et votre public cible pour définir une stratégie claire.",
      details: [
        "Analyse approfondie de vos besoins",
        "Étude de la concurrence",
        "Définition des objectifs et KPIs",
        "Planification du projet",
      ],
      icon: <LuSearch className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Conception & Design",
      description:
        "Création de wireframes, maquettes et prototypes pour visualiser le produit final et valider les parcours utilisateurs.",
      details: [
        "Wireframes et architecture de l'information",
        "Design d'interface utilisateur (UI)",
        "Expérience utilisateur (UX) research",
        "Prototypage interactif",
      ],
      icon: <LuPenTool className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Développement",
      description:
        "Implémentation technique avec les meilleures pratiques, dans un environnement agile et collaboratif.",
      details: [
        "Développement frontend et backend",
        "Intégration des APIs",
        "Gestion de base de données",
        "Versionning et collaboration",
      ],
      icon: <LuCode className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Tests & Optimisation",
      description:
        "Assurance qualité rigoureuse pour garantir la performance, la sécurité et la fiabilité du produit.",
      details: [
        "Tests fonctionnels et d'utilisation",
        "Tests de performance et de sécurité",
        "Optimisation SEO et accessibilité",
        "Tests cross-browser et mobile",
      ],
      icon: <LuTestTube className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 5,
      title: "Déploiement & Support",
      description:
        "Mise en production et accompagnement continu pour assurer le succès à long terme de votre projet.",
      details: [
        "Déploiement et mise en production",
        "Formation et documentation",
        "Monitoring et maintenance",
        "Évolutions et mises à jour",
      ],
      icon: <LuRocket className="w-8 h-8" />,
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        {/* Lignes de connexion en arrière-plan */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-vert/10 to-transparent hidden lg:block"></div>
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
            NOTRE MÉTHODOLOGIE
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Un Processus <span className="text-vert">Structuré</span>
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Une approche méthodique en 5 étapes pour garantir la réussite de vos
            projets digitaux, de l'idée à la réalisation.
          </p>
        </motion.div>

        {/* Processus en étapes */}
        <div className="relative">
          {/* Ligne de connexion pour desktop */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-vert/20 to-transparent hidden lg:block -translate-y-1/2"></div>

          {/* Conteneur des étapes */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Carte d'étape */}
                <div className="relative h-full bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-muted/20 shadow-neo overflow-hidden">
                  {/* Fond dégradé */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Numéro de l'étape (grand en arrière-plan) */}
                  <div className="absolute -top-4 -right-4 text-8xl font-orbitron font-bold text-muted/10">
                    0{step.id}
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Icône */}
                    <div className="mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}
                      >
                        {step.icon}
                      </div>
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted font-syne text-sm mb-6">
                      {step.description}
                    </p>

                    {/* Détails (apparaissent au survol) */}
                    <div className="overflow-hidden">
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <h4 className="text-sm font-syne font-semibold text-foreground">
                          Activités :
                        </h4>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-vert mt-1.5 flex-shrink-0"></div>
                              <span className="text-xs text-muted font-syne">
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>

                    {/* Indicateur de progression (pour desktop) */}
                    {index < processSteps.length - 1 && (
                      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block group-hover:opacity-100 opacity-0 transition-opacity duration-300">
                        <div className="w-6 h-6 rounded-full bg-vert flex items-center justify-center">
                          <LuArrowRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Point sur la ligne (pour desktop) */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
                    <div className="w-4 h-4 rounded-full bg-vert border-4 border-background"></div>
                  </div>
                </div>

                {/* Indicateur mobile (flèche vers le bas) */}
                {index < processSteps.length - 1 && (
                  <div className="flex justify-center mt-6 lg:hidden">
                    <div className="w-8 h-8 rounded-full bg-surface border border-muted/20 flex items-center justify-center">
                      <LuArrowRight className="w-4 h-4 text-vert transform rotate-90" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section d'appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-8 max-w-3xl mx-auto">
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-4">
                Pourquoi Cette <span className="text-vert">Méthodologie</span> ?
              </h3>
              <p className="text-lg text-muted font-syne mb-6">
                Notre approche structurée garantit transparence, qualité et
                résultats mesurables à chaque étape de votre projet.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4">
                  <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                    100%
                  </div>
                  <h4 className="font-syne font-semibold text-foreground mb-2">
                    Transparence
                  </h4>
                  <p className="text-sm text-muted">
                    Communication régulière et rapports détaillés
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                    Agile
                  </div>
                  <h4 className="font-syne font-semibold text-foreground mb-2">
                    Flexibilité
                  </h4>
                  <p className="text-sm text-muted">
                    Adaptation aux changements et retours clients
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                    QA
                  </div>
                  <h4 className="font-syne font-semibold text-foreground mb-2">
                    Qualité
                  </h4>
                  <p className="text-sm text-muted">
                    Tests rigoureux à chaque étape du processus
                  </p>
                </div>
              </div>

              <button className="px-8 py-3 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50 group">
                <span className="flex items-center gap-2">
                  Télécharger notre méthodologie complète (PDF)
                  <LuArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesProcess;
