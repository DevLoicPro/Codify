import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SettingsMenu from "./components/SettingsMenu";
import CursorEffect from "./components/CursorEffect";
import GlitchEffect from "./components/GlitchEffect";
import SoundInitializer from "./components/SoundInitializer";

// Import des pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <SettingsProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <SoundInitializer />
          <CursorEffect />
          <GlitchEffect />
          <Navbar />
          <SettingsMenu />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projets" element={<ProjectsPage />} />
              <Route path="/a-propos" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </SettingsProvider>
  );
}