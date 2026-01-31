import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuBriefcase,
  LuTrendingUp,
  LuCode,
  LuLinkedin,
  LuTwitter,
  LuMail,
} from "react-icons/lu";

const AboutFounders = () => {
  const founders = [
    {
      id: 1,
      name: "Androd Clément",
      role: "CEO",
      bio: "Expert en stratégie digitale avec 10 ans d'expérience dans la transformation numérique des entreprises. Androd allie vision business et compréhension technique pour guider nos clients vers le succès.",
      expertise: ["Stratégie", "Business", "Innovation"],
      imageColor: "from-blue-500/20 to-cyan-500/10",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "androd@codify.fr",
      },
    },
    {
      id: 2,
      name: "Dibi Dilane",
      role: "COO",
      bio: "Spécialiste en gestion de projet et opérations, Dibi assure le bon déroulement de chaque mission. Son approche méthodique garantit qualité, délais et satisfaction client optimaux.",
      expertise: ["Gestion de projet", "Opérations", "Qualité"],
      imageColor: "from-purple-500/20 to-pink-500/10",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "dibi@codify.fr",
      },
    },
    {
      id: 3,
      name: "Le Javascripteur Loïc",
      role: "CTO",
      bio: "Architecte technique passionné, Loïc maîtrise l'écosystème JavaScript et les technologies modernes. Il garantit l'excellence technique et l'innovation dans chaque solution développée.",
      expertise: ["JavaScript", "Architecture", "DevOps"],
      imageColor: "from-green-500/20 to-emerald-500/10",
      socials: {
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        email: "loic@codify.fr",
      },
    },
  ];

  const getRoleIcon = (role) => {
    switch (role) {
      case "CEO":
        return <LuTrendingUp className="w-5 h-5" />;
      case "COO":
        return <LuBriefcase className="w-5 h-5" />;
      case "CTO":
        return <LuCode className="w-5 h-5" />;
      default:
        return <LuBriefcase className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-surface/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
            NOTRE ÉQUIPE
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Les <span className="text-vert">Fondateurs</span>
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Trois experts complémentaires, unis par une même vision : créer
            l'agence digitale de demain.
          </p>
        </motion.div>

        {/* Grille des fondateurs */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              {/* Carte du fondateur */}
              <div className="relative h-full bg-background/80 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo overflow-hidden">
                {/* Effet de fond */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${founder.imageColor} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Avatar placeholder avec initiales */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${founder.imageColor} flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-3xl font-orbitron font-bold text-foreground">
                      {founder.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>

                {/* Nom et rôle */}
                <div className="relative z-10 text-center mb-6">
                  <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-2">
                    {founder.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-vert/10 text-vert text-sm font-syne">
                    {getRoleIcon(founder.role)}
                    <span>{founder.role}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted font-syne mb-6 relative z-10">
                  {founder.bio}
                </p>

                {/* Expertise */}
                <div className="mb-8 relative z-10">
                  <h4 className="text-sm font-syne font-semibold text-foreground mb-3">
                    Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 rounded-full bg-surface/50 text-xs font-syne text-foreground border border-muted/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex justify-center gap-3 relative z-10">
                  <a
                    href={founder.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                  >
                    <LuLinkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                  >
                    <LuTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href={`mailto:${founder.socials.email}`}
                    className="w-8 h-8 rounded-full bg-background flex items-center justify-center text-foreground hover:text-vert hover:bg-vert/10 transition-all duration-300 border border-muted/20"
                  >
                    <LuMail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Effet de lumière */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-vert rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
            </motion.div>
          ))}
        </div>

        {/* Section "Notre Philosophie" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 max-w-4xl mx-auto">
            <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-6">
                Notre <span className="text-vert">Philosophie</span>
              </h3>
              <p className="text-lg text-muted font-syne mb-6">
                Chez Codify, nous croyons que la technologie doit servir
                l'humain. Chaque ligne de code, chaque interface, chaque
                solution est pensée pour créer de la valeur, simplifier des vies
                et ouvrir de nouvelles possibilités.
              </p>
              <p className="text-lg text-muted font-syne">
                Notre force ? L'union de compétences techniques pointues, d'une
                créativité sans limites et d'une rigueur méthodologique
                exemplaire.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50"
            >
              <span>Travailler avec nous</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounders;
