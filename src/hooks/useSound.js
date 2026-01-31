import { useCallback, useRef } from "react";
import { useSettings } from "../contexts/SettingsContext";

// Importer les sons pour que Vite les charge correctement
import clickSound from "../assets/sounds/click.mp3";
import hoverSound from "../assets/sounds/hover.mp3";
import toggleSound from "../assets/sounds/toggle.mp3";
import successSound from "../assets/sounds/success.mp3";
import errorSound from "../assets/sounds/error.mp3";
import openSound from "../assets/sounds/open.mp3";
import closeSound from "../assets/sounds/close.mp3";
import transitionSound from "../assets/sounds/transition.mp3";
import notificationSound from "../assets/sounds/notification.mp3";

// Map des sons avec leurs chemins
const SOUND_PATHS = {
  click: clickSound,
  hover: hoverSound,
  toggle: toggleSound,
  success: successSound,
  error: errorSound,
  open: openSound,
  close: closeSound,
  transition: transitionSound,
  notification: notificationSound,
};

/**
 * Hook pour jouer des sons d'interface
 * Respecte le paramètre soundEnabled du contexte Settings
 *
 * Usage:
 * const { play } = useSound();
 * play("click"); // Joue le son de clic
 * play("hover", 0.2); // Joue le son de hover avec volume 0.2
 */
export default function useSound() {
  const { soundEnabled } = useSettings();
  const audioCache = useRef({});

  const play = useCallback(
    (soundName, volume = 0.3) => {
      if (!soundEnabled) return;

      const soundPath = SOUND_PATHS[soundName];
      if (!soundPath) {
        console.warn(`Son "${soundName}" non configuré`);
        return;
      }

      try {
        // Utiliser le cache ou créer une nouvelle instance
        if (!audioCache.current[soundName]) {
          audioCache.current[soundName] = new Audio(soundPath);
        }

        const audio = audioCache.current[soundName];
        audio.volume = Math.min(1, Math.max(0, volume));
        audio.currentTime = 0;
        audio.play().catch(() => {
          // Ignorer les erreurs silencieusement (autoplay bloqué, fichier manquant)
        });
      } catch {
        // Fichier audio non trouvé ou erreur de lecture
      }
    },
    [soundEnabled],
  );

  // Précharger les sons
  const preload = useCallback(() => {
    Object.entries(SOUND_PATHS).forEach(([name, path]) => {
      if (!audioCache.current[name]) {
        const audio = new Audio(path);
        audio.preload = "auto";
        audioCache.current[name] = audio;
      }
    });
  }, []);

  return { play, preload };
}
