// src/components/services/ServicesHero.jsx
import { motion } from "framer-motion";
import { LuArrowDown } from "react-icons/lu";

const ServicesHero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vert/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-vert/30 to-transparent"></div>
      </div>

      {/* Grille de fond */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(18, 160, 0, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(18, 160, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-vert/20">
            <span className="w-2 h-2 bg-vert rounded-full animate-pulse"></span>
            <span className="text-vert text-sm font-michroma">
              NOS SERVICES
            </span>
          </div>

          {/* Titre principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-orbitron font-bold tracking-tight"
          >
            <span className="block text-foreground">Solutions Digitales</span>
            <span className="block mt-2 text-vert">Sur Mesure</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted font-syne max-w-3xl mx-auto"
          >
            Des services complets pour transformer votre vision en réalité
            digitale. De la conception à la mise en production, nous
            accompagnons chaque étape de votre projet avec expertise et
            innovation.
          </motion.p>

          {/* Indicateur de défilement */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="pt-12"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted font-syne">
                Explorer nos services
              </span>
              <div className="w-6 h-10 border-2 border-vert/50 rounded-full flex justify-center">
                <LuArrowDown className="w-4 h-4 text-vert mt-2 animate-bounce" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;
