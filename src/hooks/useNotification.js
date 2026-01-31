import { useCallback } from "react";
import useSound from "../hooks/useSound";

/**
 * Hook pour afficher des notifications avec son
 * À utiliser dans des formulaires ou après des actions
 */
export default function useNotification() {
  const { play } = useSound();

  const notify = useCallback(
    (message, type = "info", duration = 3000) => {
      // Jouer le son approprié
      if (type === "success") {
        play("success", 0.4);
      } else if (type === "error") {
        play("error", 0.4);
      } else {
        play("notification", 0.3);
      }

      // TODO: Afficher la notification visuelle
      console.log(`[${type.toUpperCase()}] ${message}`);

      return {
        dismiss: () => {
          // TODO: Fermer la notification
        },
      };
    },
    [play],
  );

  return { notify };
}
