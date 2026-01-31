import useSound from "./useSound";

/**
 * Hook pour intégrer facilement les sons aux événements d'interaction
 * Crée des handlers prêts à utiliser pour click, hover, etc.
 */
export default function useSoundInteraction() {
  const { play } = useSound();

  return {
    // Gestion des clics sur boutons/liens
    onClickSound:
      (soundName = "click", volume = 0.3) =>
      (e) => {
        play(soundName, volume);
      },

    // Gestion du survol
    onHoverSound:
      (soundName = "hover", volume = 0.15) =>
      () => {
        play(soundName, volume);
      },

    // Gestion du succès (formulaire)
    onSuccess:
      (callback, volume = 0.4) =>
      async (...args) => {
        play("success", volume);
        if (callback) return await callback(...args);
      },

    // Gestion d'erreur
    onError:
      (callback, volume = 0.4) =>
      async (...args) => {
        play("error", volume);
        if (callback) return await callback(...args);
      },

    // Play direct
    play,
  };
}
