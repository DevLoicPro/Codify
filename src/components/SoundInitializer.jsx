import { useEffect } from "react";
import useSound from "../hooks/useSound";

/**
 * Composant pour initialiser et précharger les sons au démarrage
 */
export default function SoundInitializer() {
  const { preload } = useSound();

  useEffect(() => {
    // Précharger tous les sons au montage du composant
    preload();
  }, [preload]);

  return null; // Composant invisible
}
