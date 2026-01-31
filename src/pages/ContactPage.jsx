import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  LuUser,
  LuMail,
  LuMessageSquare,
  LuPhone,
  LuMapPin,
  LuCheck,
  LuArrowRight,
  LuSmartphone,
  LuMonitor,
  LuLayoutDashboard,
  LuCloud,
  LuCode,
  LuSearch,
  LuShoppingCart,
  LuChevronDown,
  LuChevronUp,
} from "react-icons/lu";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    specificService: "",
    customService: "",
    budget: "5000",
    currency: "USD",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSpecificServices, setShowSpecificServices] = useState(false);
  const [sliderProps, setSliderProps] = useState({
    min: 100,
    max: 10000,
    step: 100,
  });

  // 7 Services principaux (boutons)
  const primaryServices = [
    {
      id: "app-design",
      label: "App Design",
      icon: <LuSmartphone className="w-5 h-5" />,
    },
    {
      id: "dashboard-design",
      label: "Dashboard Design",
      icon: <LuLayoutDashboard className="w-5 h-5" />,
    },
    {
      id: "web-design",
      label: "Web Design",
      icon: <LuMonitor className="w-5 h-5" />,
    },
    {
      id: "saas-design",
      label: "SaaS Design",
      icon: <LuCloud className="w-5 h-5" />,
    },
    {
      id: "ecommerce",
      label: "E-commerce",
      icon: <LuShoppingCart className="w-5 h-5" />,
    },
    {
      id: "seo",
      label: "SEO & Marketing",
      icon: <LuSearch className="w-5 h-5" />,
    },
    {
      id: "other-services",
      label: "Autres services",
      icon: showSpecificServices ? (
        <LuChevronUp className="w-5 h-5" />
      ) : (
        <LuChevronDown className="w-5 h-5" />
      ),
    },
  ];

  // Services spécifiques (menu déroulant)
  const specificServices = [
    { id: "branding", label: "Branding & Identité Visuelle" },
    { id: "motion-design", label: "Motion Design & Animation" },
    { id: "ui-ux", label: "UI/UX Design Avancé" },
    { id: "pwa", label: "Applications PWA" },
    { id: "api-integration", label: "Intégration API Complexes" },
    { id: "cms-custom", label: "CMS Sur Mesure" },
    { id: "audit-performance", label: "Audit de Performance" },
    { id: "security-audit", label: "Audit de Sécurité" },
    { id: "cloud-migration", label: "Migration Cloud" },
    { id: "data-visualization", label: "Data Visualization" },
    { id: "chatbot-ai", label: "Chatbot & IA" },
    { id: "ar-vr", label: "AR/VR Experiences" },
    { id: "blockchain", label: "Solutions Blockchain" },
    { id: "iot", label: "IoT & Solutions Connectées" },
    { id: "consulting-tech", label: "Consulting Technologique" },
  ];

  // Mettre à jour les propriétés du slider selon la devise
  useEffect(() => {
    if (formData.currency === "FCFA" || formData.currency === "XAF") {
      setSliderProps({
        min: 100000,
        max: 5000000,
        step: 100000,
      });
      const currentValue = parseInt(formData.budget);
      if (currentValue < 100000) {
        setFormData((prev) => ({
          ...prev,
          budget: "1000000",
        }));
      }
    } else {
      setSliderProps({
        min: 100,
        max: 10000,
        step: 100,
      });
      const currentValue = parseInt(formData.budget);
      if (currentValue >= 100000) {
        setFormData((prev) => ({
          ...prev,
          budget: "5000",
        }));
      }
    }
  }, [formData.currency]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePrimaryServiceSelect = (serviceId) => {
    if (serviceId === "other-services") {
      setShowSpecificServices(!showSpecificServices);
      if (!showSpecificServices) {
        setFormData((prev) => ({
          ...prev,
          service: "",
          specificService: "",
          customService: "",
        }));
      }
    } else {
      setShowSpecificServices(false);
      setFormData((prev) => ({
        ...prev,
        service: serviceId === prev.service ? "" : serviceId,
        specificService: "",
        customService: "",
      }));
    }
  };

  const handleSpecificServiceSelect = (serviceId) => {
    setFormData((prev) => ({
      ...prev,
      service: "specific",
      specificService: serviceId === prev.specificService ? "" : serviceId,
      customService: "",
    }));
  };

  const handleCustomServiceChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      service: value ? "custom" : "",
      specificService: "",
      customService: value,
    }));
  };

  const formatBudgetValue = (value) => {
    const numValue = parseInt(value);
    // Pour toutes les devises, formater normalement
    if (formData.currency === "FCFA" || formData.currency === "XAF") {
      // Format FCFA : 1,000,000 (pas de multiplication)
      return numValue.toLocaleString();
    }
    // Format USD/EUR : 5,000
    return numValue.toLocaleString();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        service: "",
        specificService: "",
        customService: "",
        budget:
          formData.currency === "FCFA" || formData.currency === "XAF"
            ? "500000"
            : "5000",
        currency: "USD",
        message: "",
      });
      setShowSpecificServices(false);

      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-vert/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
              CONTACT
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-foreground mb-6">
              Collaborons sur vos <span className="text-vert">projets</span>
            </h1>
            <p className="text-xl text-muted font-syne max-w-3xl mx-auto">
              Partagez votre vision et laissons notre équipe d'experts la
              transformer en réalité digitale exceptionnelle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
                <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
                  Pourquoi travailler avec nous ?
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0">
                      <LuCheck className="w-4 h-4 text-vert" />
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-foreground mb-1">
                        Expertise technique avancée
                      </h3>
                      <p className="text-sm text-muted">
                        Notre équipe maîtrise les dernières technologies pour
                        des solutions performantes et évolutives.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0">
                      <LuCheck className="w-4 h-4 text-vert" />
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-foreground mb-1">
                        Design innovant et intuitif
                      </h3>
                      <p className="text-sm text-muted">
                        Des interfaces qui marquent les esprits tout en étant
                        parfaitement fonctionnelles.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-vert/20 flex items-center justify-center flex-shrink-0">
                      <LuCheck className="w-4 h-4 text-vert" />
                    </div>
                    <div>
                      <h3 className="font-syne font-semibold text-foreground mb-1">
                        Support continu et réactif
                      </h3>
                      <p className="text-sm text-muted">
                        Un accompagnement à chaque étape, de la conception à la
                        maintenance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-vert/20 flex items-center justify-center">
                      <LuPhone className="w-5 h-5 text-vert" />
                    </div>
                    <h3 className="font-orbitron font-semibold text-foreground">
                      Téléphone
                    </h3>
                  </div>
                  <a
                    href="tel:+33123456789"
                    className="text-muted font-syne hover:text-vert transition-colors"
                  >
                    +33 1 23 45 67 89
                  </a>
                </div>

                <div className="bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-vert/20 flex items-center justify-center">
                      <LuMail className="w-5 h-5 text-vert" />
                    </div>
                    <h3 className="font-orbitron font-semibold text-foreground">
                      Email
                    </h3>
                  </div>
                  <a
                    href="mailto:contact@codify.fr"
                    className="text-muted font-syne hover:text-vert transition-colors"
                  >
                    contact@codify.fr
                  </a>
                </div>
              </div>

              <div className="bg-surface/50 backdrop-blur-sm rounded-2xl p-6 border border-muted/20">
                <div className="flex items-start gap-4">
                  <LuMapPin className="w-6 h-6 text-vert flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-orbitron font-semibold text-foreground mb-2">
                      Notre adresse
                    </h3>
                    <p className="text-muted font-syne">
                      123 Avenue du Digital
                      <br />
                      75000 Paris, France
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-surface/50 backdrop-blur-sm rounded-2xl p-8 border border-muted/20 shadow-neo">
                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 bg-background/95 backdrop-blur-sm rounded-2xl flex items-center justify-center z-20"
                  >
                    <div className="text-center p-8">
                      <LuCheck className="w-16 h-16 text-vert mx-auto mb-6" />
                      <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-4">
                        Message Envoyé !
                      </h3>
                      <p className="text-muted font-syne mb-6">
                        Nous vous recontacterons dans les plus brefs délais pour
                        discuter de votre projet.
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

                <h2 className="text-2xl font-orbitron font-semibold text-foreground mb-2">
                  Parlons de votre projet
                </h2>
                <p className="text-muted font-syne mb-8">
                  Remplissez ce formulaire et nous vous répondrons sous 24
                  heures.
                </p>

                <form
                  onSubmit={handleSubmit}
                  name="contact"
                  method="POST"
                  data-netlify="true"
                >
                  {/* Netlify Hidden Input */}
                  <input type="hidden" name="form-name" value="contact" />

                  {/* Full Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-syne font-medium text-foreground mb-2">
                      Nom complet *
                    </label>
                    <div className="relative">
                      <LuUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300"
                        placeholder="Entrez votre nom"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label className="block text-sm font-syne font-medium text-foreground mb-2">
                      Adresse email *
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
                        placeholder="Entrez votre adresse email"
                      />
                    </div>
                  </div>

                  {/* Services avec 7 boutons + menu déroulant spécifique + option Autre */}
                  <div className="mb-6">
                    <label className="block text-sm font-syne font-medium text-foreground mb-2">
                      Service(s) recherché(s)
                    </label>

                    {/* 7 Boutons principaux (même taille et interface) */}
                    <div className="mb-6">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {primaryServices.map((service) => (
                          <button
                            type="button"
                            key={service.id}
                            onClick={() =>
                              handlePrimaryServiceSelect(service.id)
                            }
                            className={`flex items-center gap-2 px-3 py-3 rounded-lg border transition-all duration-300 text-left h-full ${
                              service.id === "other-services" &&
                              showSpecificServices
                                ? "bg-vert/20 border-vert/50 text-vert"
                                : formData.service === service.id
                                  ? "bg-vert/20 border-vert/50 text-vert"
                                  : "bg-background/50 border-muted/30 text-foreground hover:border-vert/30"
                            } ${
                              service.id === "other-services"
                                ? "col-span-2 sm:col-span-1"
                                : ""
                            }`}
                          >
                            <div className="flex-shrink-0">{service.icon}</div>
                            <span className="font-syne text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                              {service.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Menu déroulant pour services spécifiques */}
                    {showSpecificServices && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mb-6 overflow-hidden"
                      >
                        <p className="text-xs text-muted mb-3 font-syne">
                          Services spécifiques de Codify
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-64 overflow-y-auto pr-2">
                          {specificServices.map((service) => (
                            <button
                              type="button"
                              key={service.id}
                              onClick={() =>
                                handleSpecificServiceSelect(service.id)
                              }
                              className={`flex items-center gap-2 px-3 py-3 rounded-lg border transition-all duration-300 text-left ${
                                formData.specificService === service.id
                                  ? "bg-vert/20 border-vert/50 text-vert"
                                  : "bg-background/50 border-muted/30 text-foreground hover:border-vert/30"
                              }`}
                            >
                              <div className="w-5 h-5 flex items-center justify-center">
                                <div
                                  className={`w-2 h-2 rounded-full ${
                                    formData.specificService === service.id
                                      ? "bg-vert"
                                      : "bg-muted"
                                  }`}
                                />
                              </div>
                              <span className="font-syne text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                                {service.label}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Champ "Autre" */}
                    <div className="mt-6">
                      <p className="text-xs text-muted mb-3 font-syne">
                        Un service non listé ?
                      </p>
                      <input
                        type="text"
                        name="customService"
                        value={formData.customService}
                        onChange={(e) =>
                          handleCustomServiceChange(e.target.value)
                        }
                        className="w-full px-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300"
                        placeholder="Précisez votre besoin spécifique..."
                      />
                    </div>

                    {/* Champ caché pour le service final */}
                    <input
                      type="hidden"
                      name="service"
                      value={
                        formData.service === "specific"
                          ? specificServices.find(
                              (s) => s.id === formData.specificService,
                            )?.label || ""
                          : formData.service === "custom"
                            ? formData.customService
                            : primaryServices.find(
                                (s) => s.id === formData.service,
                              )?.label || ""
                      }
                    />
                  </div>

                  {/* Budget avec range slider et devise */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <label className="block text-sm font-syne font-medium text-foreground">
                        Budget
                      </label>
                      <div className="text-right">
                        <span className="text-2xl font-orbitron font-bold text-vert">
                          {formatBudgetValue(formData.budget)}{" "}
                          {formData.currency}
                        </span>
                        <p className="text-xs text-muted mt-1">
                          Min: {formatBudgetValue(sliderProps.min)} • Max:{" "}
                          {formatBudgetValue(sliderProps.max)}+
                        </p>
                      </div>
                    </div>

                    {/* Range Slider Neumorphique */}
                    <div className="relative mb-8">
                      <input
                        type="range"
                        min={sliderProps.min}
                        max={sliderProps.max}
                        step={sliderProps.step}
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            budget: e.target.value,
                          }))
                        }
                        className="w-full h-3 bg-surface rounded-lg appearance-none cursor-pointer range-slider"
                        name="budget"
                      />

                      {/* Marqueurs du slider */}
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-muted">
                          {formData.currency === "FCFA" ||
                          formData.currency === "XAF"
                            ? "100k"
                            : sliderProps.min.toLocaleString()}
                        </span>
                        <span className="text-xs text-muted">
                          {formData.currency === "FCFA" ||
                          formData.currency === "XAF"
                            ? "2.5M"
                            : (sliderProps.max / 2).toLocaleString()}
                        </span>
                        <span className="text-xs text-muted">
                          {formData.currency === "FCFA" ||
                          formData.currency === "XAF"
                            ? "5M+"
                            : sliderProps.max.toLocaleString() + "+"}
                        </span>
                      </div>

                      {/* Style custom pour le slider */}
                      <style jsx>{`
                        .range-slider::-webkit-slider-thumb {
                          appearance: none;
                          width: 24px;
                          height: 24px;
                          border-radius: 50%;
                          background: #12a000;
                          cursor: pointer;
                          border: 3px solid var(--color-surface);
                          box-shadow:
                            3px 3px 3px rgba(0, 0, 0, 0.3),
                            -3px -3px 3px rgba(255, 255, 255, 0.1),
                            inset 3px 3px 3px rgba(0, 0, 0, 0.2),
                            inset -3px -3px 3px rgba(255, 255, 255, 0.1);
                          transition: all 0.2s ease;
                        }

                        .range-slider::-webkit-slider-thumb:hover {
                          transform: scale(1.1);
                          box-shadow:
                            4px 4px 6px rgba(0, 0, 0, 0.4),
                            -4px -4px 6px rgba(255, 255, 255, 0.2),
                            inset 3px 3px 3px rgba(0, 0, 0, 0.2),
                            inset -3px -3px 3px rgba(255, 255, 255, 0.1);
                        }

                        .range-slider::-moz-range-thumb {
                          width: 24px;
                          height: 24px;
                          border-radius: 50%;
                          background: #12a000;
                          cursor: pointer;
                          border: 3px solid var(--color-surface);
                          box-shadow:
                            3px 3px 3px rgba(0, 0, 0, 0.3),
                            -3px -3px 3px rgba(255, 255, 255, 0.1),
                            inset 3px 3px 3px rgba(0, 0, 0, 0.2),
                            inset -3px -3px 3px rgba(255, 255, 255, 0.1);
                        }

                        .range-slider::-webkit-slider-track {
                          height: 12px;
                          background: linear-gradient(
                            90deg,
                            var(--color-vert) 0%,
                            var(--color-vert)
                              ${(parseInt(formData.budget) / sliderProps.max) *
                              100}%,
                            var(--color-surface)
                              ${(parseInt(formData.budget) / sliderProps.max) *
                              100}%,
                            var(--color-surface) 100%
                          );
                          border-radius: 10px;
                          box-shadow:
                            inset 3px 3px 5px rgba(0, 0, 0, 0.2),
                            inset -3px -3px 5px rgba(255, 255, 255, 0.1);
                        }

                        .range-slider::-moz-range-track {
                          height: 12px;
                          background: linear-gradient(
                            90deg,
                            var(--color-vert) 0%,
                            var(--color-vert)
                              ${(parseInt(formData.budget) / sliderProps.max) *
                              100}%,
                            var(--color-surface)
                              ${(parseInt(formData.budget) / sliderProps.max) *
                              100}%,
                            var(--color-surface) 100%
                          );
                          border-radius: 10px;
                          box-shadow:
                            inset 3px 3px 5px rgba(0, 0, 0, 0.2),
                            inset -3px -3px 5px rgba(255, 255, 255, 0.1);
                        }
                      `}</style>
                    </div>

                    {/* Sélecteur de devise */}
                    <div className="mb-6">
                      <label className="block text-sm font-syne font-medium text-foreground mb-3">
                        Devise
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {[
                          { value: "USD", label: "Dollar", symbol: "$" },
                          { value: "EUR", label: "Euro", symbol: "€" },
                          {
                            value: "FCFA",
                            label: "FCFA",
                            symbol: "FCFA",
                          },
                          { value: "XAF", label: "XAF", symbol: "XAF" },
                        ].map((currencyOption) => (
                          <button
                            type="button"
                            key={currencyOption.value}
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                currency: currencyOption.value,
                              }))
                            }
                            className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                              formData.currency === currencyOption.value
                                ? "bg-vert/20 border-vert/50 text-vert shadow-neo"
                                : "bg-surface/50 border-muted/30 text-foreground hover:border-vert/30 hover:shadow-neo"
                            }`}
                          >
                            <span className="text-xl font-orbitron font-bold mb-1">
                              {currencyOption.symbol}
                            </span>
                            <span className="text-xs font-syne text-center">
                              {currencyOption.label}
                            </span>
                          </button>
                        ))}
                      </div>
                      <input
                        type="hidden"
                        name="currency"
                        value={formData.currency}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label className="block text-sm font-syne font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <LuMessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full pl-12 pr-4 py-3 bg-background/50 border border-muted/30 rounded-lg text-foreground font-syne placeholder:text-muted/50 focus:outline-none focus:border-vert/50 focus:ring-1 focus:ring-vert/30 transition-all duration-300 resize-none"
                        placeholder="Décrivez votre projet, vos objectifs et vos attentes..."
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
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
                        <span>Envoyer le message</span>
                        <LuArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted/70 text-center mt-4 font-syne">
                    * Champs obligatoires. Vos données sont traitées
                    conformément à notre politique de confidentialité.
                  </p>
                </form>
              </div>

              {/* Decorative Elements */}
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-vert/10 text-vert text-sm font-michroma mb-4">
              QUESTIONS FRÉQUENTES
            </span>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-foreground mb-6">
              Questions <span className="text-vert">Récurentes</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Combien de temps pour obtenir un devis ?",
                answer:
                  "Nous répondons sous 24h et fournissons un devis détaillé dans les 48h suivant notre premier échange.",
              },
              {
                question: "Quelle est votre méthodologie de travail ?",
                answer:
                  "Nous utilisons une approche agile avec des sprints de 2 semaines, des revues régulières et une communication transparente.",
              },
              {
                question: "Proposez-vous un support après livraison ?",
                answer:
                  "Oui, tous nos projets incluent 3 mois de support gratuit, avec des options d'entretien à long terme disponibles.",
              },
              {
                question: "Travaillez-vous avec des clients internationaux ?",
                answer:
                  "Absolument ! Nous avons travaillé avec des clients en Europe, Amérique du Nord et Asie. Nous parlons français, anglais et espagnol.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-surface/30 backdrop-blur-sm rounded-xl p-6 border border-muted/20 hover:border-vert/30 transition-all duration-300"
              >
                <h3 className="font-orbitron font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted font-syne">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
