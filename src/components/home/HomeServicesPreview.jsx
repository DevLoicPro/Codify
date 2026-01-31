// src/components/home/HomeServicesPreview.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LuCode, LuZap, LuTrendingUp, LuArrowRight } from "react-icons/lu";

const HomeServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: "Création Digitale",
      description:
        "Sites web sur mesure, applications mobiles et expériences utilisateur innovantes.",
      icon: <LuCode className="w-6 h-6" />, // Changé de LuCode2 à LuCode
      color: "from-vert to-green-400",
      link: "/services#creation",
    },
    {
      id: 2,
      title: "Optimisation",
      description:
        "Amélioration des performances, SEO technique et expérience utilisateur.",
      icon: <LuZap className="w-6 h-6" />, // LuZap est correct
      color: "from-blue-500 to-cyan-400",
      link: "/services#optimisation",
    },
    {
      id: 3,
      title: "Conseil Stratégique",
      description:
        "Accompagnement dans votre transformation digitale et stratégie tech.",
      icon: <LuTrendingUp className="w-6 h-6" />, // Changé de LuLineChart à LuTrendingUp
      color: "from-purple-500 to-pink-400",
      link: "/services#conseil",
    },
  ];

  return (
    <section className="py-20 px-4 bg-surface/50 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
            NOS EXPERTISES
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Nos <span className="text-vert">Domaines</span> d'Excellence
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Des solutions complètes pour transformer vos idées en réalités
            digitales performantes
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* Carte de service */}
              <div className="relative h-full bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo overflow-hidden">
                {/* Effet de fond au survol */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Effet de bordure au survol */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-vert/20 transition-all duration-300 pointer-events-none"></div>

                {/* Icône */}
                <div className="relative z-10 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-vert/20 to-vert/5 flex items-center justify-center text-vert">
                    {service.icon}
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted font-syne mb-8">
                  {service.description}
                </p>

                {/* Lien */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-vert font-syne font-semibold group/link relative z-10"
                >
                  <span>Explorer</span>
                  <LuArrowRight className="w-4 h-4 transform group-hover/link:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

              {/* Point lumineux */}
              <div
                className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${service.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* CTA global */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <p className="text-muted font-syne text-lg">
              Prêt à transformer votre projet ?
            </p>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-4 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50 group/button"
            >
              <span>Découvrir tous nos services</span>
              <LuArrowRight className="w-5 h-5 transform group-hover/button:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServicesPreview;
