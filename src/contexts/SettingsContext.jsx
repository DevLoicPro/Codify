import { createContext, useContext, useState, useEffect } from "react";

const SettingsContext = createContext();

export function SettingsProvider({ children }) {
  // Theme: "dark" ou "light"
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("codify-theme");
    return saved || "dark";
  });

  // Son: true ou false
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem("codify-sound");
    return saved !== "false"; // Par défaut activé
  });

  // Persister les préférences
  useEffect(() => {
    localStorage.setItem("codify-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("codify-sound", soundEnabled);
  }, [soundEnabled]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        soundEnabled,
        setSoundEnabled,
        toggleSound,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
