import { motion } from "framer-motion";
import { LuTarget, LuRocket, LuUsers } from "react-icons/lu";

const AboutStory = () => {
  const milestones = [
    {
      year: "2024",
      title: "La Genèse",
      description:
        "Trois passionnés de technologie se rencontrent et partagent une vision commune : créer une agence digitale qui allie performance technique et design d'exception.",
      icon: <LuUsers className="w-6 h-6" />,
    },
    {
      year: "2025",
      title: "Le Lancement",
      description:
        "Codify voit officiellement le jour. Les premiers projets voient le jour, validant notre approche unique et innovante.",
      icon: <LuRocket className="w-6 h-6" />,
    },
    {
      year: "2026",
      title: "L'Expansion",
      description:
        "Avec une équipe élargie et un portfolio impressionnant, Codify s'impose comme un acteur majeur du digital en France.",
      icon: <LuTarget className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Texte de l'histoire */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground">
              Notre <span className="text-vert">Parcours</span>
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-muted font-syne">
                Codify est né d'une conviction simple : le digital doit être à
                la fois performant et esthétique. Dans un monde où la
                technologie évolue à une vitesse vertigineuse, nous avons choisi
                de créer une agence qui ne suit pas les tendances, mais qui les
                définit.
              </p>

              <p className="text-lg text-muted font-syne">
                Notre histoire commence par la rencontre de trois experts
                complémentaires, unis par une même passion pour l'innovation et
                l'excellence technique. Ensemble, nous avons décidé de repousser
                les limites de la création digitale.
              </p>

              <p className="text-lg text-muted font-syne">
                Aujourd'hui, Codify c'est plus qu'une agence : c'est un
                collectif de talents qui transforme des concepts ambitieux en
                réalités digitales qui marquent les esprits et dépassent les
                attentes.
              </p>
            </div>
          </motion.div>

          {/* Chronologie */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Ligne de chronologie */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-vert via-vert/50 to-transparent"></div>

            <div className="space-y-12 pl-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Point sur la ligne */}
                  <div className="absolute -left-11 top-0 w-6 h-6 rounded-full bg-background border-2 border-vert flex items-center justify-center">
                    <div className="w-2 h-2 bg-vert rounded-full"></div>
                  </div>

                  {/* Carte de milestone */}
                  <div className="bg-surface/50 backdrop-blur-sm rounded-xl p-6 border border-muted/20 shadow-neo">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-vert/10 flex items-center justify-center text-vert">
                        {milestone.icon}
                      </div>
                      <div>
                        <div className="text-2xl font-orbitron font-bold text-vert">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-orbitron font-semibold text-foreground">
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted font-syne">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mission et Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
              Notre Mission
            </h3>
            <p className="text-lg text-muted font-syne mb-6">
              Transformer des idées ambitieuses en solutions digitales
              performantes qui créent de la valeur durable pour nos clients et
              leurs utilisateurs.
            </p>
            <div className="flex items-center gap-2 text-vert font-syne font-semibold">
              <span>Performance & Innovation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo"
          >
            <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
              Notre Vision
            </h3>
            <p className="text-lg text-muted font-syne mb-6">
              Devenir l'agence de référence pour les entreprises qui cherchent à
              repousser les limites du possible dans l'univers digital.
            </p>
            <div className="flex items-center gap-2 text-vert font-syne font-semibold">
              <span>Excellence & Leadership</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
