// src/components/services/ServicesFAQ.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  LuChevronDown,
  LuCircleHelp ,
  LuClock,
  LuCreditCard,
  LuUsers,
  LuShield,
  LuCode,
  LuMail,
} from "react-icons/lu";

const ServicesFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqCategories = [
    {
      id: "general",
      name: "Général",
      icon: <LuCircleHelp  className="w-5 h-5" />,
    },
    {
      id: "process",
      name: "Processus",
      icon: <LuClock className="w-5 h-5" />,
    },
    {
      id: "pricing",
      name: "Tarification",
      icon: <LuCreditCard className="w-5 h-5" />,
    },
    {
      id: "technical",
      name: "Technique",
      icon: <LuCode className="w-5 h-5" />,
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "Combien de temps faut-il pour développer un site web ?",
      answer:
        "Le délai dépend de la complexité du projet. Un site vitrine simple peut prendre 2 à 4 semaines, tandis qu'une plateforme e-commerce complexe peut nécessiter 2 à 4 mois. Nous établissons un calendrier détaillé dès la phase de découverte.",
      category: "general",
      icon: <LuClock className="w-5 h-5 text-vert" />,
    },
    {
      id: 2,
      question: "Quelle est votre méthodologie de travail ?",
      answer:
        "Nous suivons une méthodologie agile en 5 étapes : Découverte, Conception, Développement, Tests et Déploiement. Chaque étape inclut des validations client pour garantir que le projet corresponde à vos attentes.",
      category: "process",
      icon: <LuUsers className="w-5 h-5 text-vert" />,
    },
    {
      id: 3,
      question:
        "Proposez-vous des formules d'abonnement ou des projets au forfait ?",
      answer:
        "Nous proposons les deux ! Selon vos besoins, nous pouvons travailler au forfait pour des projets spécifiques, ou en abonnement pour un accompagnement continu (maintenance, évolutions, support).",
      category: "pricing",
      icon: <LuCreditCard className="w-5 h-5 text-vert" />,
    },
    {
      id: 4,
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Nous utilisons les technologies modernes et adaptées à chaque projet : React, Next.js, Node.js, Vue.js pour le frontend ; Python, PHP, Java pour le backend ; et des bases de données comme PostgreSQL, MongoDB, MySQL.",
      category: "technical",
      icon: <LuCode className="w-5 h-5 text-vert" />,
    },
    {
      id: 5,
      question: "Assurez-vous la maintenance après la livraison ?",
      answer:
        "Oui, nous proposons des contrats de maintenance incluant mises à jour, corrections de bugs, sauvegardes, monitoring et support technique. Nous pouvons aussi former votre équipe à l'utilisation de la solution.",
      category: "general",
      icon: <LuShield className="w-5 h-5 text-vert" />,
    },
    {
      id: 6,
      question: "Comment se passe la collaboration à distance ?",
      answer:
        "Nous utilisons des outils de collaboration modernes (Figma, Slack, GitHub, Trello) et organisons des réunions régulières (visio) pour maintenir une communication fluide. Nos processus sont conçus pour le travail à distance efficace.",
      category: "process",
      icon: <LuUsers className="w-5 h-5 text-vert" />,
    },
    {
      id: 7,
      question: "Proposez-vous des solutions de référencement (SEO) ?",
      answer:
        "Absolument. Le SEO est intégré à nos développements : structure technique optimisée, contenu optimisé, performances rapides, mobile-friendly, et nous pouvons accompagner votre stratégie de contenu.",
      category: "technical",
      icon: <LuCode className="w-5 h-5 text-vert" />,
    },
    {
      id: 8,
      question: "Quels sont vos délais de réponse pour le support ?",
      answer:
        "Pour les clients sous contrat de maintenance, nous garantissons une réponse sous 2 heures ouvrables pour les urgences, et sous 24 heures pour les demandes standards. Un suivi continu est assuré.",
      category: "general",
      icon: <LuClock className="w-5 h-5 text-vert" />,
    },
    {
      id: 9,
      question: "Pouvez-vous reprendre un projet déjà commencé ?",
      answer:
        "Oui, nous faisons de l'audit et de la reprise de code. Nous analysons l'existant, documentons et proposons un plan pour améliorer ou compléter le projet selon vos objectifs.",
      category: "technical",
      icon: <LuCode className="w-5 h-5 text-vert" />,
    },
    {
      id: 10,
      question: "Comment établissez-vous vos devis ?",
      answer:
        "Nos devis sont détaillés et transparents. Après analyse de vos besoins, nous décomposons le projet en phases et tâches, avec un budget pour chaque. Aucun coût caché, et nous validons ensemble avant de commencer.",
      category: "pricing",
      icon: <LuCreditCard className="w-5 h-5 text-vert" />,
    },
  ];

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs =
    activeCategory === "all"
      ? faqs
      : faqs.filter((faq) => faq.category === activeCategory);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 px-4 bg-surface/30 relative overflow-hidden"
      id="faq"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
            QUESTIONS FRÉQUENTES
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Vos <span className="text-vert">Questions</span>, Nos Réponses
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services, notre processus et
            notre collaboration.
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {/* Toutes les catégories */}
            <button
              onClick={() => setActiveCategory("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-syne font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-vert text-white"
                  : "bg-surface text-foreground border border-muted/20 hover:border-vert/30"
              }`}
            >
              <LuCircleHelp  className="w-4 h-4" />
              Toutes les questions
            </button>

            {/* Catégories spécifiques */}
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-syne font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-vert text-white"
                    : "bg-surface text-foreground border border-muted/20 hover:border-vert/30"
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Liste des FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <AnimatePresence>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative"
                >
                  {/* Question */}
                  <div
                    className={`bg-surface/60 backdrop-blur-sm rounded-xl border transition-all duration-300 cursor-pointer group ${
                      openIndex === index
                        ? "border-vert/30 shadow-neo"
                        : "border-muted/20 hover:border-vert/20"
                    }`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-lg bg-vert/10 flex items-center justify-center flex-shrink-0 mt-1">
                            {faq.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-syne font-semibold text-foreground mb-1">
                              {faq.question}
                            </h3>
                            <div className="inline-block px-2.5 py-1 rounded-full bg-background/50 border border-muted/20">
                              <span className="text-xs text-muted font-syne">
                                {
                                  faqCategories.find(
                                    (cat) => cat.id === faq.category,
                                  )?.name
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            openIndex === index
                              ? "bg-vert text-white rotate-180"
                              : "bg-background text-foreground group-hover:bg-vert/10"
                          }`}
                        >
                          <LuChevronDown className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Réponse (avec animation) */}
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-6 pt-6 border-t border-muted/20">
                              <p className="text-muted font-syne leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Section "Question non trouvée ?" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-8 max-w-2xl mx-auto">
            <div className="relative bg-gradient-to-br from-surface/50 to-background/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo w-full">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-vert/10 flex items-center justify-center flex-shrink-0">
                  <LuMail className="w-8 h-8 text-vert" />
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-2">
                    Votre question n'est pas dans la liste ?
                  </h3>
                  <p className="text-muted font-syne mb-4">
                    Notre équipe est disponible pour répondre à toutes vos
                    interrogations et discuter de votre projet spécifique.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50"
                  >
                    <LuMail className="w-5 h-5" />
                    Nous contacter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Statistiques de satisfaction */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="text-center p-4">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              24h
            </div>
            <div className="text-sm text-muted font-syne">
              Délai de réponse moyen
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              98%
            </div>
            <div className="text-sm text-muted font-syne">
              Clients satisfaits
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              100+
            </div>
            <div className="text-sm text-muted font-syne">
              Projets accompagnés
            </div>
          </div>
          <div className="text-center p-4">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              5/5
            </div>
            <div className="text-sm text-muted font-syne">Support client</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
