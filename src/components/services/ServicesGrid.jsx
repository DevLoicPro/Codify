// src/components/services/ServicesGrid.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import {
  LuCode,
  LuZap,
  LuTrendingUp,
  LuPalette,
  LuSmartphone,
  LuActivity,
  LuCloud,
  LuShield,
  LuArrowRight,
} from "react-icons/lu";

const ServicesGrid = () => {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Création Digitale",
      description:
        "Conception et développement de sites web et applications mobiles sur mesure, alliant design innovant et performance technique.",
      longDescription:
        "Nous créons des expériences digitales uniques qui captivent vos utilisateurs. Notre équipe de designers et développeurs travaille en étroite collaboration pour concrétiser votre vision avec les dernières technologies.",
      icon: <LuCode className="w-8 h-8 text-foreground" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Sites web responsive",
        "Applications mobiles",
        "E-commerce",
        "Portails web",
      ],
      link: "#creation",
    },
    {
      id: 2,
      title: "Optimisation",
      description:
        "Amélioration des performances, du référencement et de l'expérience utilisateur de vos plateformes existantes.",
      longDescription:
        "Nous analysons et optimisons vos plateformes pour maximiser leur potentiel. Améliorez vos conversions, votre SEO et la satisfaction de vos utilisateurs.",
      icon: <LuZap className="w-8 h-8 text-foreground" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "SEO technique",
        "Performance web",
        "UX/UI Audit",
        "Analytics",
      ],
      link: "#optimisation",
    },
    {
      id: 3,
      title: "Conseil Stratégique",
      description:
        "Accompagnement dans votre transformation digitale et élaboration de stratégies technologiques adaptées à vos objectifs.",
      longDescription:
        "Notre expertise en stratégie digitale vous aide à prendre les bonnes décisions technologiques et à maximiser le retour sur investissement de vos projets.",
      icon: <LuTrendingUp className="w-8 h-8 text-foreground" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Stratégie digitale",
        "Transformation",
        "Formation",
        "Audit technique",
      ],
      link: "#conseil",
    },
    {
      id: 4,
      title: "Design UI/UX",
      description:
        "Création d'interfaces utilisateur intuitives et d'expériences utilisateur mémorables qui renforcent votre marque.",
      longDescription:
        "Notre approche centrée utilisateur garantit des designs qui non seulement plaisent à l'œil mais facilitent également l'utilisation de vos produits digitaux.",
      icon: <LuPalette className="w-8 h-8 text-foreground" />,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Design system",
        "Prototypage",
        "Recherche utilisateur",
        "Tests utilisateur",
      ],
      link: "#design",
    },
    {
      id: 5,
      title: "Développement Mobile",
      description:
        "Applications natives et cross-platform performantes pour iOS et Android, conçues pour offrir une expérience fluide.",
      longDescription:
        "Nous développons des applications mobiles qui tirent parti des capacités des appareils pour offrir des performances optimales.",
      icon: <LuSmartphone className="w-8 h-8 text-foreground" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "Applications natives",
      ],
      link: "#mobile",
    },
    {
      id: 6,
      title: "Analytics & Data",
      description:
        "Collecte, analyse et visualisation de données pour prendre des décisions éclairées et mesurer l'impact de vos actions.",
      longDescription:
        "Transformez vos données en insights actionnables. Nous mettons en place des solutions d'analyse pour suivre vos KPIs et optimiser vos performances.",
      icon: <LuActivity className="w-8 h-8 text-foreground" />, // Changé ici
      color: "from-teal-500 to-cyan-500",
      features: [
        "Tableaux de bord",
        "Tracking",
        "Reporting",
        "Data visualisation",
      ],
      link: "#analytics",
    },
    {
      id: 7,
      title: "Hébergement & Cloud",
      description:
        "Solutions d'hébergement sécurisées et scalables pour garantir la performance et la disponibilité de vos applications.",
      longDescription:
        "Nous garantissons la stabilité et la sécurité de vos plateformes avec des solutions d'hébergement adaptées à vos besoins.",
      icon: <LuCloud className="w-8 h-8 text-foreground" />,
      color: "from-gray-500 to-slate-500",
      features: ["AWS & Azure", "DevOps", "Monitoring", "Sauvegarde"],
      link: "#cloud",
    },
    {
      id: 8,
      title: "Sécurité Digitale",
      description:
        "Protection de vos données et de vos systèmes contre les cybermenaces avec des solutions de sécurité avancées.",
      longDescription:
        "Dans un monde de plus en plus connecté, nous vous aidons à sécuriser vos actifs digitaux et à protéger la confidentialité de vos utilisateurs.",
      icon: <LuShield className="w-8 h-8 text-foreground" />,
      color: "from-red-500 to-rose-500",
      features: [
        "Audit sécurité",
        "Protection données",
        "Conformité RGPD",
        "Formation sécurité",
      ],
      link: "#securite",
    },
  ];

  return (
    <section
      className="py-20 px-4 bg-surface/30 relative overflow-hidden"
      id="services"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
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
            NOTRE OFFRE
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Services <span className="text-vert">Complets</span>
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Une gamme exhaustive de services pour couvrir tous vos besoins
            digitaux, de la conception à la maintenance.
          </p>
        </motion.div>

        {/* Grille Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            // Définir la taille des cartes dans la grille Bento
            let colSpan = "col-span-1";
            let rowSpan = "row-span-1";

            // Créer un motif Bento intéressant
            if (index === 0 || index === 3) {
              colSpan = "md:col-span-2 lg:col-span-1";
            }
            if (index === 1 || index === 6) {
              rowSpan = "md:row-span-2";
            }

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`${colSpan} ${rowSpan} relative group cursor-pointer`}
                onClick={() =>
                  setActiveService(
                    activeService === service.id ? null : service.id,
                  )
                }
              >
                {/* Carte de service */}
                <div
                  className={`relative h-full bg-surface/60 backdrop-blur-sm rounded-2xl p-6 border border-muted/20 shadow-neo overflow-hidden transition-all duration-300 ${
                    activeService === service.id ? "ring-2 ring-vert/50" : ""
                  }`}
                >
                  {/* Fond dégradé */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${
                      activeService === service.id ? "opacity-10" : ""
                    }`}
                  />

                  {/* Effet de bordure au survol */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-vert/30 transition-all duration-300 pointer-events-none"></div>

                  {/* Contenu */}
                  <div className="relative z-10">
                    {/* Icône et titre */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} opacity-80 flex items-center justify-center text-white`}
                      >
                        {service.icon}
                      </div>

                      {/* Badge pour les services phares */}
                      {index < 3 && (
                        <span className="px-2 py-1 rounded-full bg-vert/10 text-vert text-xs font-syne">
                          Populaire
                        </span>
                      )}
                    </div>

                    {/* Titre */}
                    <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>

                    {/* Description courte */}
                    <p className="text-muted font-syne text-sm mb-4">
                      {service.description}
                    </p>

                    {/* Features (affichées quand actif) */}
                    {activeService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        {/* Description longue */}
                        <p className="text-foreground/80 font-syne text-sm mb-4">
                          {service.longDescription}
                        </p>

                        {/* Features list */}
                        <div className="space-y-2 mb-4">
                          <h4 className="text-sm font-syne font-semibold text-foreground">
                            Inclus :
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.features.map((feature, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 rounded-full bg-background/50 text-xs font-syne text-muted border border-muted/20"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-muted/10">
                      <button className="inline-flex items-center gap-1 text-vert font-syne font-semibold text-sm group/cta">
                        <span>
                          {activeService === service.id
                            ? "Réduire"
                            : "En savoir plus"}
                        </span>
                        <LuArrowRight
                          className={`w-4 h-4 transform transition-transform ${
                            activeService === service.id
                              ? "rotate-90"
                              : "group-hover/cta:translate-x-1"
                          }`}
                        />
                      </button>

                      {/* Indicateur d'état */}
                      <div
                        className={`w-2 h-2 rounded-full ${
                          activeService === service.id ? "bg-vert" : "bg-muted"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Élément décoratif */}
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-vert/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section d'information complémentaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 max-w-3xl mx-auto">
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-4">
                Une Approche <span className="text-vert">Modulaire</span>
              </h3>
              <p className="text-lg text-muted font-syne mb-6">
                Choisissez les services dont vous avez besoin, à la carte ou en
                package complet. Notre méthodologie agile s'adapte à vos
                contraintes et objectifs.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                    1
                  </div>
                  <h4 className="font-syne font-semibold text-foreground mb-2">
                    Consultation
                  </h4>
                  <p className="text-sm text-muted">
                    Analyse de vos besoins et objectifs
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                    2
                  </div>
                  <h4 className="font-syne font-semibold text-foreground mb-2">
                    Développement
                  </h4>
                  <p className="text-sm text-muted">
                    Création itérative avec feedback régulier
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-orbitron font-bold text-vert mb-2">
                    3
                  </div>
                  <h4 className="font-syne font-semibold text-foreground mb-2">
                    Livraison
                  </h4>
                  <p className="text-sm text-muted">
                    Déploiement et support continu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
