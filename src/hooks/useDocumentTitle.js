import { useEffect } from "react";

/**
 * Hook pour mettre à jour le titre de la page
 * @param {string} title - Le titre de la page (sans "Codify")
 * Si vide ou "Accueil", affiche juste "Codify"
 * Sinon affiche "Codify | {title}"
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    if (!title || title === "Accueil") {
      document.title = "Codify";
    } else {
      document.title = `Codify | ${title}`;
    }

    return () => {
      document.title = "Codify";
    };
  }, [title]);
}
