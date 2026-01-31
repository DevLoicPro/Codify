// src/components/home/HomeCTA.jsx - CORRIGÉ
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuMail,
  LuUser,
  LuMessageSquare,
  LuArrowRight,
  LuCircleCheck, // Changé de LuCheckCircle à LuCircleCheck
} from "react-icons/lu";

const HomeCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi de formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      // Réinitialiser après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Fond avec dégradé */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-surface/50 to-background">
        {/* Effets de particules */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vert/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-vert/50 to-transparent"></div>

        {/* Cercles décoratifs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Lignes décoratives */}
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-vert/10 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-vert/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Texte */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
                COMMENÇONS VOTRE PROJET
              </span>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
                Prêt à <span className="text-vert">Révolutionner</span> Votre
                Présence Digitale ?
              </h2>
              <p className="text-xl text-muted font-syne mb-8">
                Parlez-nous de votre projet et obtenez une consultation gratuite
                avec notre équipe d'experts.
              </p>
            </div>

            {/* Points forts */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <LuCircleCheck className="w-4 h-4 text-vert" />{" "}
                  {/* Changé ici */}
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-foreground mb-1">
                    Réponse sous 24h
                  </h4>
                  <p className="text-sm text-muted">
                    Notre équipe vous répond rapidement pour discuter de votre
                    projet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <LuCircleCheck className="w-4 h-4 text-vert" />{" "}
                  {/* Changé ici */}
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-foreground mb-1">
                    Devis personnalisé
                  </h4>
                  <p className="text-sm text-muted">
                    Une estimation détaillée adaptée à vos besoins spécifiques
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <LuCircleCheck className="w-4 h-4 text-vert" />{" "}
                  {/* Changé ici */}
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-foreground mb-1">
                    Accompagnement complet
                  </h4>
                  <p className="text-sm text-muted">
                    De la conception à la mise en ligne et au-delà
                  </p>
                </div>
              </div>
            </div>

            {/* Boutons alternatifs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:contact@codify.fr"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-foreground font-syne font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/30 hover:border-vert/50"
              >
                <LuMail className="w-5 h-5" />
                contact@codify.fr
              </a>

              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-surface text-foreground font-syne font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/30 hover:border-vert/50"
              >
                Rencontrer l'équipe
                <LuArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Colonne droite - Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
              {/* Message de succès */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20"
                >
                  <div className="text-center p-8">
                    <LuCircleCheck className="w-16 h-16 text-vert mx-auto mb-6" />{" "}
                    {/* Changé ici */}
                    <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                      Message Envoyé !
                    </h3>
                    <p className="text-muted font-syne mb-6">
                      Nous vous répondrons dans les plus brefs délais.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      Envoyer un autre message
                    </button>
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-2">
                Contact Rapide
              </h3>
              <p className="text-muted font-syne mb-8">
                Remplissez ce formulaire et nous vous recontacterons rapidement.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ Nom */}
                <div className="relative">
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Votre Nom
                  </label>
                  <div className="relative">
                    <LuUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300"
                      placeholder="Jean Dupont"
                    />
                  </div>
                </div>

                {/* Champ Email */}
                <div className="relative">
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Votre Email
                  </label>
                  <div className="relative">
                    <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300"
                      placeholder="jean@exemple.com"
                    />
                  </div>
                </div>

                {/* Champ Message */}
                <div className="relative">
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Votre Message
                  </label>
                  <div className="relative">
                    <LuMessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full pl-12 pr-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300 resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                </div>

                {/* Bouton d'envoi */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-[1.02] hover:shadow-glow-accent border border-vert/50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer mon message</span>
                      <LuArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Mention de confidentialité */}
                <p className="text-xs text-muted/70 text-center font-syne">
                  En soumettant ce formulaire, vous acceptez notre politique de
                  confidentialité. Nous ne partagerons jamais vos informations.
                </p>
              </form>
            </div>

            {/* Éléments décoratifs */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-vert/20 to-purple-500/20 rounded-full blur-xl -z-10"
            />
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-tr from-vert/15 to-blue-500/15 rounded-full blur-xl -z-10"
            />
          </motion.div>
        </div>

        {/* Footer de la section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-muted/10"
        >
          <p className="text-muted font-syne">
            Vous préférez parler directement ? Appelez-nous au{" "}
            <a
              href="tel:+237696248414"
              className="text-vert font-semibold hover:text-primary-dark transition-colors"
            >
              +237 6 96 24 84 14
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeCTA;
