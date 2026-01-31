// src/components/services/ServicesCTA.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  LuCalendar,
  LuPhone,
  LuMail,
  LuMessageSquare,
  LuCheckCheck,
  LuArrowRight,
} from "react-icons/lu";

const ServicesCTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    "Création Digitale",
    "Optimisation",
    "Conseil Stratégique",
    "Design UI/UX",
    "Développement Mobile",
    "Analytics & Data",
    "Hébergement & Cloud",
    "Sécurité Digitale",
  ];

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
      setFormData({ name: "", email: "", service: "", message: "" });

      // Réinitialiser après 5 secondes
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-vert/5 via-transparent to-purple-500/5"></div>
        {/* Motif de fond */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(18, 160, 0, 0.2) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche - Contenu */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
                COMMENÇONS
              </span>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
                Prêt à <span className="text-vert">Transformer</span> Votre
                Projet ?
              </h2>
              <p className="text-xl text-muted font-syne mb-8">
                Discutons de vos objectifs et concevons ensemble la solution
                digitale qui propulsera votre entreprise vers de nouveaux
                sommets.
              </p>
            </div>

            {/* Avantages */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <LuCheckCheck className="w-4 h-4 text-vert" />
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-foreground mb-1">
                    Consultation Gratuite
                  </h4>
                  <p className="text-sm text-muted">
                    30 minutes pour analyser vos besoins et proposer une
                    approche
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <LuCheckCheck className="w-4 h-4 text-vert" />
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-foreground mb-1">
                    Devis Détaillé et Transparent
                  </h4>
                  <p className="text-sm text-muted">
                    Aucun coût caché, un budget clair pour chaque phase du
                    projet
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <LuCheckCheck className="w-4 h-4 text-vert" />
                </div>
                <div>
                  <h4 className="font-syne font-semibold text-foreground mb-1">
                    Accompagnement Personnalisé
                  </h4>
                  <p className="text-sm text-muted">
                    Un chef de projet dédié et une communication régulière
                  </p>
                </div>
              </div>
            </div>

            {/* Contacts directs */}
            <div className="pt-6 border-t border-muted/20">
              <h4 className="font-syne font-semibold text-foreground mb-4">
                Contactez-nous directement :
              </h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-foreground font-syne font-medium rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/20 hover:border-vert/30"
                >
                  <LuPhone className="w-4 h-4" />
                  +33 1 23 45 67 89
                </a>
                <a
                  href="mailto:contact@codify.fr"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-foreground font-syne font-medium rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/20 hover:border-vert/30"
                >
                  <LuMail className="w-4 h-4" />
                  contact@codify.fr
                </a>
                <Link
                  to="/a-propos"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-surface text-foreground font-syne font-medium rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/20 hover:border-vert/30"
                >
                  <LuMessageSquare className="w-4 h-4" />
                  Rencontrer l'équipe
                </Link>
              </div>
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
                    <LuCheckCheck className="w-16 h-16 text-vert mx-auto mb-6" />
                    <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                      Demande Envoyée !
                    </h3>
                    <p className="text-muted font-syne mb-6">
                      Nous vous recontacterons dans les plus brefs délais pour
                      planifier votre consultation gratuite.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-colors duration-300"
                    >
                      Envoyer une autre demande
                    </button>
                  </div>
                </motion.div>
              )}

              <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-2">
                Demande de Consultation
              </h3>
              <p className="text-muted font-syne mb-8">
                Remplissez ce formulaire et nous vous recontacterons sous 24h
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Champ Nom */}
                <div>
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Votre Nom *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300"
                    placeholder="Jean Dupont"
                  />
                </div>

                {/* Champ Email */}
                <div>
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Votre Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300"
                    placeholder="jean@exemple.com"
                  />
                </div>

                {/* Champ Service */}
                <div>
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Service Intéressé
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300 appearance-none"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Champ Message */}
                <div>
                  <label className="block text-sm font-syne font-medium text-foreground mb-2">
                    Votre Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300 resize-none"
                    placeholder="Décrivez votre projet, vos objectifs et vos contraintes..."
                  />
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
                      <span>Demander une consultation gratuite</span>
                      <LuCalendar className="w-5 h-5" />
                    </>
                  )}
                </button>

                {/* Mentions */}
                <p className="text-xs text-muted/70 text-center font-syne">
                  En soumettant ce formulaire, vous acceptez d'être contacté par
                  notre équipe pour discuter de votre projet. Vos données sont
                  traitées confidentiellement.
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
              className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-vert/20 to-purple-500/20 rounded-full blur-xl -z-10"
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
              className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tr from-vert/15 to-blue-500/15 rounded-full blur-xl -z-10"
            />
          </motion.div>
        </div>

        {/* Bannière de garantie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-vert/10 via-vert/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-vert/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-vert/20 flex items-center justify-center">
                  <LuCheckCheck className="w-6 h-6 text-vert" />
                </div>
                <div>
                  <h4 className="text-lg font-orbitron font-semibold text-foreground">
                    Garantie Satisfaction
                  </h4>
                  <p className="text-sm text-muted font-syne">
                    Notre engagement : vous accompagner jusqu'à la réussite de
                    votre projet
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-vert">
                    100%
                  </div>
                  <div className="text-xs text-muted font-syne">
                    Projets réussis
                  </div>
                </div>
                <div className="h-8 w-px bg-muted/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-vert">
                    24h
                  </div>
                  <div className="text-xs text-muted font-syne">
                    Réponse garantie
                  </div>
                </div>
                <div className="h-8 w-px bg-muted/30"></div>
                <div className="text-center">
                  <div className="text-2xl font-orbitron font-bold text-vert">
                    30j
                  </div>
                  <div className="text-xs text-muted font-syne">
                    Support inclus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCTA;
