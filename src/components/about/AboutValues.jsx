// src/components/about/AboutValues.jsx
import { motion } from "framer-motion";
import {
  LuLightbulb,
  LuStar,
  LuHeart,
  LuUsers,
  LuShield,
  LuZap,
} from "react-icons/lu";

const AboutValues = () => {
  const values = [
    {
      title: "Innovation",
      description:
        "Nous repoussons constamment les limites pour créer des solutions avant-gardistes.",
      icon: <LuLightbulb className="w-8 h-8" />,
      color: "from-yellow-500/20 to-orange-500/10",
    },
    {
      title: "Excellence",
      description:
        "Chaque détail compte. Nous visons la perfection dans tout ce que nous entreprenons.",
      icon: <LuStar className="w-8 h-8" />,
      color: "from-blue-500/20 to-cyan-500/10",
    },
    {
      title: "Passion",
      description:
        "Nous aimons ce que nous faisons, et cela se ressent dans chaque projet.",
      icon: <LuHeart className="w-8 h-8" />,
      color: "from-red-500/20 to-pink-500/10",
    },
    {
      title: "Collaboration",
      description:
        "Nous travaillons main dans la main avec nos clients, de l'idée à la réalisation.",
      icon: <LuUsers className="w-8 h-8" />,
      color: "from-green-500/20 to-emerald-500/10",
    },
    {
      title: "Intégrité",
      description:
        "Honnêteté et transparence guident chacune de nos actions et décisions.",
      icon: <LuShield className="w-8 h-8" />,
      color: "from-purple-500/20 to-indigo-500/10",
    },
    {
      title: "Agilité",
      description:
        "Nous nous adaptons rapidement aux changements et aux besoins émergents.",
      icon: <LuZap className="w-8 h-8" />,
      color: "from-teal-500/20 to-cyan-500/10",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Nos <span className="text-vert">Valeurs</span>
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Ces principes fondamentaux guident chacune de nos décisions et
            actions.
          </p>
        </motion.div>

        {/* Grille des valeurs */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              {/* Carte de valeur */}
              <div className="relative h-full bg-surface/30 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 hover:border-vert/30 transition-all duration-300">
                {/* Icône */}
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-foreground mb-6`}
                >
                  {value.icon}
                </div>

                {/* Titre et description */}
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted font-syne">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Citation finale */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="relative">
            <div className="inline-block px-8 py-6 bg-surface/50 backdrop-blur-sm rounded-2xl border border-muted/20 shadow-neo max-w-3xl mx-auto">
              <p className="text-2xl font-syne italic text-foreground mb-4">
                "Le digital n'est pas une fin en soi, mais un moyen de créer des
                expériences qui transforment et inspirent."
              </p>
              <div className="text-vert font-orbitron font-semibold">
                — L'équipe Codify
              </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -left-4 w-8 h-8 text-vert opacity-20">
              ❝
            </div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 text-vert opacity-20">
              ❞
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutValues;
