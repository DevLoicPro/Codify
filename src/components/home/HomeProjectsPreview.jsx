// src/components/home/HomeProjectsPreview.jsx - CORRIGÉ
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  LuExternalLink,
  LuCode,
  LuPalette,
  LuSmartphone,
  LuArrowRight,
} from "react-icons/lu";

const HomeProjectsPreview = () => {
  const projects = [
    {
      id: 1,
      title: "Plateforme E-commerce Luxe",
      category: "Web App",
      description:
        "Site e-commerce haute performance avec expérience utilisateur immersive.",
      tech: ["React", "Node.js", "MongoDB"],
      color: "from-blue-500/20 to-cyan-500/10",
      icon: <LuCode className="w-6 h-6 text-foreground" />, // Ajout de text-foreground
      link: "/projets#ecommerce",
    },
    {
      id: 2,
      title: "Application Mobile Fitness",
      category: "Mobile",
      description: "App de suivi fitness avec IA et réalité augmentée.",
      tech: ["React Native", "Firebase", "TensorFlow"],
      color: "from-purple-500/20 to-pink-500/10",
      icon: <LuSmartphone className="w-6 h-6 text-foreground" />, // Ajout de text-foreground
      link: "/projets#fitness",
    },
    {
      id: 3,
      title: "Design System Entreprise",
      category: "UI/UX",
      description: "Système de design complet pour une grande entreprise tech.",
      tech: ["Figma", "Storybook", "Tailwind"],
      color: "from-green-500/20 to-emerald-500/10",
      icon: <LuPalette className="w-6 h-6 text-foreground" />, // Ajout de text-foreground
      link: "/projets#design-system",
    },
  ];

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-80 h-80 bg-vert/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        {/* Grille de fond */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(18, 160, 0, 0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(18, 160, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
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
            NOS RÉALISATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-foreground mb-6">
            Projets <span className="text-vert">Phares</span>
          </h2>
          <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
            Découvrez comment nous transformons des idées en expériences
            digitales mémorables
          </p>
        </motion.div>

        {/* Grille Bento des projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className={`relative group ${
                index === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Carte de projet */}
              <div className="relative h-full bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo overflow-hidden">
                {/* Effet de fond dégradé */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Effet de bordure lumineuse au survol */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-vert/30 transition-all duration-300 pointer-events-none"></div>

                {/* Badge de catégorie - CORRECTION ICI */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-muted/20 mb-6 text-foreground">
                  {project.icon}
                  <span className="text-xs font-syne">{project.category}</span>
                </div>

                {/* Titre du projet */}
                <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted font-syne mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-background/50 text-xs font-syne text-muted border border-muted/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Lien vers le projet */}
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-vert font-syne font-semibold group/link"
                >
                  <span>Voir le projet</span>
                  <LuExternalLink className="w-4 h-4 transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                </Link>
              </div>

              {/* Points lumineux décoratifs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-vert rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm delay-150"></div>
            </motion.div>
          ))}
        </div>

        {/* Section statistiques supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-surface/30 backdrop-blur-sm rounded-2xl border border-muted/20">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              100%
            </div>
            <div className="text-muted font-syne">Projets Livrés à Temps</div>
          </div>
          <div className="text-center p-6 bg-surface/30 backdrop-blur-sm rounded-2xl border border-muted/20">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              40%
            </div>
            <div className="text-muted font-syne">Clients Récurrents</div>
          </div>
          <div className="text-center p-6 bg-surface/30 backdrop-blur-sm rounded-2xl border border-muted/20">
            <div className="text-3xl font-orbitron font-bold text-vert mb-2">
              4.9/5
            </div>
            <div className="text-muted font-syne">Satisfaction Client</div>
          </div>
        </motion.div>

        {/* CTA principal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6">
            <div className="relative bg-gradient-to-br from-surface/50 to-background/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-orbitron font-semibold text-foreground mb-4">
                Prêt à concrétiser{" "}
                <span className="text-vert">votre projet</span> ?
              </h3>
              <p className="text-lg text-muted font-syne mb-6">
                Que vous ayez une idée précise ou juste une vision, notre équipe
                est là pour la transformer en réalité digitale exceptionnelle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/projets"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-vert text-white font-syne font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 hover:shadow-glow-accent border border-vert/50"
                >
                  <span>Voir tous nos projets</span>
                  <LuArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-surface text-foreground font-syne font-semibold rounded-lg hover:bg-surface/80 transition-all duration-300 border border-muted/30 hover:border-vert/50"
                >
                  <span>Discuter de mon projet</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeProjectsPreview;
