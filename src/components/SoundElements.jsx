import useSoundInteraction from "../hooks/useSoundInteraction";

/**
 * Bouton avec sons automatiques
 * Les sons click/hover sont joués par défaut
 */
export function SoundButton({
  onClick,
  onMouseEnter,
  soundOnClick = "click",
  soundOnHover = "hover",
  children,
  ...props
}) {
  const { play } = useSoundInteraction();

  const handleClick = (e) => {
    play(soundOnClick, 0.3);
    onClick?.(e);
  };

  const handleHover = () => {
    play(soundOnHover, 0.15);
    onMouseEnter?.();
  };

  return (
    <button onClick={handleClick} onMouseEnter={handleHover} {...props}>
      {children}
    </button>
  );
}

/**
 * Lien avec sons automatiques
 */
export function SoundLink({
  onClick,
  onMouseEnter,
  soundOnClick = "click",
  soundOnHover = "hover",
  children,
  ...props
}) {
  const { play } = useSoundInteraction();

  const handleClick = (e) => {
    play(soundOnClick, 0.3);
    onClick?.(e);
  };

  const handleHover = () => {
    play(soundOnHover, 0.15);
    onMouseEnter?.();
  };

  return (
    <a onClick={handleClick} onMouseEnter={handleHover} {...props}>
      {children}
    </a>
  );
}
