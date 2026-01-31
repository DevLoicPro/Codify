import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="py-52 px-4 bg-surface/30 relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vert/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        {/* Lignes décoratives */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-vert/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-6"
          >
            NOTRE HISTOIRE
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-orbitron font-bold text-foreground mb-8"
          >
            La Vision derrière <span className="text-vert">Codify</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-muted font-syne max-w-4xl mx-auto"
          >
            D'une simple idée à une agence digitale de référence, découvrez
            l'histoire, les valeurs et les personnes qui font de Codify un
            partenaire unique.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
