// src/components/home/HomeHero.jsx
import { motion } from "framer-motion";
import codiImage from "../../assets/images/codi/codi.webp";
import { FiCpu, FiMonitor, FiZap } from "react-icons/fi";

const HomeHero = () => {
  return (
    <section
      className="relative flex items-center px-4 md:px-6"
      style={{ minHeight: "calc(100vh - 72px)", paddingTop: "130px" }}
    >
      {/* ============================================
          EFFETS DE FOND
      ============================================ */}
      <div className="absolute inset-0 z-0">
        {/* Cercles lumineux d'ambiance */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-vert/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        {/* Ligne centrale lumineuse */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-vert/30 to-transparent"></div>
      </div>

      {/* ============================================
          MOTIF DE GRILLE EN ARRIÈRE-PLAN
      ============================================ */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(18, 160, 0, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(18, 160, 0, 0.1) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* ============================================
          CONTENU PRINCIPAL - GRID SUR 2 COLONNES
      ============================================ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* ============================================
            COLONNE GAUCHE - CONTENU TEXTUEL
        ============================================ */}
        <div className="space-y-6 md:space-y-8 order-1 lg:order-1">
          {/* Badge d'identification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-vert/20"
          >
            {/* Point vert animé */}
            <span className="w-2 h-2 bg-vert rounded-full animate-pulse"></span>
            {/* Texte du badge */}
            <span className="text-vert text-xs md:text-sm font-michroma">
              AGENCE DIGITALE
            </span>
          </motion.div>

          {/* Titre principal avec slogan Codify */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-orbitron font-bold tracking-tight">
              {/* Première ligne du titre */}
              <span className="block text-foreground">Codify</span>
              {/* Deuxième ligne avec slogan Codify */}
              <span className="block mt-2">
                <span className="relative">
                  <span className="text-vert relative inline-block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Transformer l'abstrait en réalité numérique
                    {/* Soulignement animé sous le slogan */}
                    <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-vert to-transparent"></span>
                  </span>
                </span>
              </span>
            </h1>
          </motion.div>

          {/* Sous-titre / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-muted font-syne max-w-2xl"
          >
            Nous transformons vos concepts les plus abstraits en solutions
            digitales haute performance. Alliant technologie de pointe et design
            futuriste pour créer des expériences digitales exceptionnelles.
          </motion.p>

          {/* Boutons d'appel à l'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-4"
          >
            {/* Bouton principal - Commencer un projet */}
            <button className="px-6 py-3 sm:px-8 sm:py-3 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50 text-sm sm:text-base w-full xs:w-auto">
              Démarrer un Projet
            </button>

            {/* Bouton secondaire - Voir le portfolio */}
            <button className="px-6 py-3 sm:px-8 sm:py-3 bg-surface text-foreground font-syne font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/30 hover:border-vert/50 text-sm sm:text-base w-full xs:w-auto">
              Voir le Portfolio
            </button>
          </motion.div>
        </div>

        {/* ============================================
            COLONNE DROITE - ÉLÉMENT VISUEL ET FEATURES
        ============================================ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative order-2 lg:order-2 mb-8 lg:mb-0"
        >
          {/* Carte principale contenant l'image de la mascotte */}
          <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-muted/20 shadow-neo">
            {/* Conteneur pour l'image de la mascotte Codi */}
            <div className="relative w-full h-48 sm:h-56 md:h-64 mb-6 md:mb-8">
              <img
                src={codiImage}
                alt="Codi - Mascotte Codify"
                className="w-full h-full object-contain"
              />

              {/* Effets lumineux autour de l'image */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-vert/20 to-purple-500/20 rounded-full blur-xl -z-10"
              />
            </div>

            {/* ============================================
                SECTION DES FEATURES - JUSTE LES TITRES
            ============================================ */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {/* Feature 1: Solutions IA intelligentes */}
              <div className="flex flex-col items-center text-center p-2 sm:p-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-vert/20 flex items-center justify-center mb-1 sm:mb-2">
                  <FiCpu className="w-4 h-4 sm:w-5 sm:h-5 text-vert" />
                </div>
                <span className="font-syne font-semibold text-foreground text-xs sm:text-sm">
                  Solutions IA
                </span>
              </div>

              {/* Feature 2: Design futuriste et responsive */}
              <div className="flex flex-col items-center text-center p-2 sm:p-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-vert/20 flex items-center justify-center mb-1 sm:mb-2">
                  <FiMonitor className="w-4 h-4 sm:w-5 sm:h-5 text-vert" />
                </div>
                <span className="font-syne font-semibold text-foreground text-xs sm:text-sm">
                  Design Futuriste
                </span>
              </div>

              {/* Feature 3: Optimisation haute performance */}
              <div className="flex flex-col items-center text-center p-2 sm:p-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-vert/20 flex items-center justify-center mb-1 sm:mb-2">
                  <FiZap className="w-4 h-4 sm:w-5 sm:h-5 text-vert" />
                </div>
                <span className="font-syne font-semibold text-foreground text-xs sm:text-sm">
                  Performance
                </span>
              </div>
            </div>

            {/* ============================================
                STATISTIQUES EN BAS DE LA CARTE
            ============================================ */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mt-6 md:mt-8 pt-4 md:pt-6 border-t border-muted/20">
              {[
                { value: "99%", label: "Satisfaction" },
                { value: "50+", label: "Projets" },
                { value: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center p-2 sm:p-3">
                  <div className="text-lg sm:text-xl md:text-2xl font-orbitron text-vert">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted font-syne mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ============================================
              ÉLÉMENTS FLOTTANTS AUTOUR DE LA CARTE
          ============================================ */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-vert/30 to-purple-500/30 rounded-full blur-xl -z-10"
          />
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1,
            }}
            className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-vert/20 to-purple-500/20 rounded-full blur-xl -z-10"
          />
        </motion.div>
      </div>

      {/* ============================================
          INDICATEUR DE DÉFILEMENT
      ============================================ */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <div className="w-6 h-10 border-2 border-vert/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vert rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeHero;
