import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCog6Tooth, HiOutlineSun, HiOutlineMoon, HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { useSettings } from "../contexts/SettingsContext";
import useSound from "../hooks/useSound";

const menuItems = [
  { id: "theme", angle: -45 },
  { id: "sound", angle: 0 },
];

export default function SettingsMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, soundEnabled, toggleSound } = useSettings();
  const { play } = useSound();

  const toggleMenu = () => {
    play(isOpen ? "close" : "open");
    setIsOpen((prev) => !prev);
  };

  const getIcon = (id) => {
    switch (id) {
      case "theme":
        return theme === "dark" ? (
          <HiOutlineSun className="w-5 h-5" />
        ) : (
          <HiOutlineMoon className="w-5 h-5" />
        );
      case "sound":
        return soundEnabled ? (
          <HiOutlineSpeakerWave className="w-5 h-5" />
        ) : (
          <HiOutlineSpeakerXMark className="w-5 h-5" />
        );
      default:
        return null;
    }
  };

  const handleAction = (id) => {
    play("toggle");
    switch (id) {
      case "theme":
        toggleTheme();
        break;
      case "sound":
        toggleSound();
        break;
      default:
        break;
    }
  };

  const handleHover = () => {
    play("hover", 0.15);
  };

  const radius = 70;

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none"
            />

            {menuItems.map((item, index) => {
              const angleRad = (item.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  animate={{ opacity: 1, x, y, scale: 1 }}
                  exit={{ opacity: 0, x: 0, y: 0, scale: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  onClick={() => handleAction(item.id)}
                  onMouseEnter={handleHover}
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-surface/80 backdrop-blur-sm border border-muted/30 text-foreground flex items-center justify-center cursor-pointer hover:bg-vert hover:text-background hover:border-vert transition-colors duration-200"
                >
                  {getIcon(item.id)}
                </motion.button>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleMenu}
        onMouseEnter={handleHover}
        whileTap={{ scale: 0.95 }}
        className={`relative z-10 w-12 h-12 rounded-full shadow-neo flex items-center justify-center cursor-pointer transition-colors duration-300 ${
          isOpen
            ? "bg-vert text-background border-2 border-primary-dark"
            : "bg-surface text-foreground border border-muted/30"
        }`}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <HiOutlineCog6Tooth className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
