import { useEffect, useCallback } from "react";

export default function CursorEffect() {
  const createRipple = useCallback((x, y) => {
    // Créer le ripple
    const ripple = document.createElement("div");
    ripple.className = "cursor-ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);

    // Supprimer après l'animation
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }, []);

  const createParticles = useCallback((x, y) => {
    const particleCount = 8;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      // Direction aléatoire
      const angle = (i / particleCount) * 360 + Math.random() * 30;
      const distance = 20 + Math.random() * 30;
      const angleRad = (angle * Math.PI) / 180;
      const tx = Math.cos(angleRad) * distance;
      const ty = Math.sin(angleRad) * distance;

      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);

      document.body.appendChild(particle);

      // Supprimer après l'animation
      setTimeout(() => {
        particle.remove();
      }, 400);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      createRipple(e.clientX, e.clientY);
      createParticles(e.clientX, e.clientY);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [createRipple, createParticles]);

  return null;
}
