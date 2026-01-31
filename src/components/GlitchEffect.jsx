import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import useSound from "../hooks/useSound";

/**
 * Effet Glitch & Distorsion avec Canvas
 * Simule une erreur de signal numérique lors du changement de page
 * - Décalages chromatic (RGB)
 * - Lignes de scan animées
 * - Distorsion de pixels
 * - Animation fluide 60fps
 */
export default function GlitchEffect() {
  const canvasRef = useRef(null);
  const location = useLocation();
  const { play } = useSound();
  const animationRef = useRef(null);
  const isActiveRef = useRef(false);
  const progressRef = useRef(0);
  const startTimeRef = useRef(0);
  const durationRef = useRef(600); // Durée en ms

  useEffect(() => {
    // Activer l'effet au changement de page
    isActiveRef.current = true;
    progressRef.current = 0;
    startTimeRef.current = Date.now();
  }, [location.pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Redimensionner le canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    /**
     * Capture l'écran actuel (le fond de la page)
     */
    const captureScreen = () => {
      // Obtenir les données de l'écran via un rendu du DOM
      // Pour cette implémentation, on va créer une image générée
      return null;
    };

    /**
     * Crée un effet glitch aléatoire
     */
    const getRandomGlitchOffset = () => {
      return Math.random() * 20 - 10; // Entre -10 et 10
    };

    /**
     * Anime le glitch
     */
    const animate = () => {
      if (!isActiveRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const now = Date.now();
      const elapsed = now - startTimeRef.current;
      progressRef.current = Math.min(elapsed / durationRef.current, 1);

      // Effacer le canvas avec transparence
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Si l'animation est terminée
      if (progressRef.current >= 1) {
        isActiveRef.current = false;
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Créer un dégradé semi-transparent pour l'effet glitch
      const alpha = 1 - progressRef.current; // Fade out
      ctx.globalAlpha = alpha * 0.7;

      // Hauteur de l'écran
      const h = canvas.height;
      const w = canvas.width;

      // Effet de lignes de scan horizontales
      const scanLineHeight = 2;
      const scanY = ((now % 100) / 100) * h;

      ctx.fillStyle = "rgba(0, 255, 0, 0.1)";
      for (let i = 0; i < h; i += scanLineHeight * 3) {
        ctx.fillRect(0, i, w, scanLineHeight);
      }

      // Effets glitch RGB avec décalages chromatiques
      const glitchIntensity = (1 - progressRef.current) * 20;

      // Générer des blocs de glitch aléatoires
      const numGlitches = Math.floor((1 - progressRef.current) * 8);

      for (let i = 0; i < numGlitches; i++) {
        const glitchY = Math.random() * h;
        const glitchHeight = Math.random() * 60 + 20;
        const glitchX = Math.random() * (w * 0.3) - w * 0.15;

        // Décalage Rouge
        ctx.fillStyle = `rgba(0, 255, 255, ${0.3 * (1 - progressRef.current)})`;
        ctx.fillRect(
          glitchX + getRandomGlitchOffset(),
          glitchY,
          w * 0.4,
          glitchHeight,
        );

        // Décalage Vert
        ctx.fillStyle = `rgba(255, 0, 255, ${0.3 * (1 - progressRef.current)})`;
        ctx.fillRect(
          glitchX - getRandomGlitchOffset() * 0.7,
          glitchY + 5,
          w * 0.35,
          glitchHeight,
        );

        // Décalage Bleu
        ctx.fillStyle = `rgba(255, 255, 0, ${0.25 * (1 - progressRef.current)})`;
        ctx.fillRect(
          glitchX + getRandomGlitchOffset() * 0.5,
          glitchY - 5,
          w * 0.38,
          glitchHeight,
        );
      }

      // Effet de distorsion d'onde
      const waveFreq = progressRef.current * Math.PI * 2;
      const waveAmp = (1 - progressRef.current) * 15;

      ctx.strokeStyle = `rgba(0, 255, 255, ${0.4 * (1 - progressRef.current)})`;
      ctx.lineWidth = 2;
      ctx.beginPath();

      for (let x = 0; x < w; x += 10) {
        const y = h / 2 + Math.sin((x / w) * waveFreq + now / 100) * waveAmp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Zones de pixels cassées (bloc brouillé)
      const numBrokenPixels = Math.floor((1 - progressRef.current) * 5);
      for (let i = 0; i < numBrokenPixels; i++) {
        const bx = Math.random() * w;
        const by = Math.random() * h;
        const bw = Math.random() * 100 + 50;
        const bh = Math.random() * 100 + 50;

        // Remplissage aléatoire de pixels
        ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, ${0.1 * (1 - progressRef.current)})`;

        for (let px = 0; px < bw; px += 2) {
          for (let py = 0; py < bh; py += 2) {
            if (Math.random() > 0.7) {
              ctx.fillRect(bx + px, by + py, 2, 2);
            }
          }
        }
      }

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-screen pointer-events-none z-50 mix-blend-screen"
      style={{ backdropFilter: "blur(0px)" }}
    />
  );
}
