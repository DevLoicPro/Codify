import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  HiOutlineHome,
  HiOutlineSquares2X2,
  HiOutlineFolderOpen,
  HiOutlineUsers,
} from "react-icons/hi2";
import logoWhite from "../assets/images/logos/Codify-logo-white-transparent.png";
import logoBlack from "../assets/images/logos/Codify-logo-black-transparent.png";
import useSound from "../hooks/useSound";
import { useSettings } from "../contexts/SettingsContext";

const navLinks = [
  { to: "/", label: "Accueil", icon: HiOutlineHome },
  { to: "/services", label: "Services", icon: HiOutlineSquares2X2 },
  { to: "/projets", label: "Projets", icon: HiOutlineFolderOpen },
  { to: "/a-propos", label: "Nous", icon: HiOutlineUsers },
];

export default function Navbar() {
  const location = useLocation();
  const { play } = useSound();

  // Son de transition lors du changement de page
  useEffect(() => {
    play("transition", 0.2);
  }, [location.pathname, play]);

  return (
    <>
      <DesktopNavbar />
      <MobileHeader />
      <MobileNavbar />
    </>
  );
}

function DesktopNavbar() {
  const { play } = useSound();
  const { theme } = useSettings();
  const logo = theme === "dark" ? logoWhite : logoBlack;

  const handleClick = () => play("click");
  const handleHover = () => play("hover", 0.15);

  return (
    <header className="hidden nav:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="flex items-center justify-between w-full bg-background rounded-full px-3 py-2 shadow-neo">
        {/* Logo */}
        <NavLink
          to="/"
          onClick={handleClick}
          onMouseEnter={handleHover}
          className="flex items-center bg-background shadow-neo rounded-full px-4 py-2"
        >
          <img src={logo} alt="Codify" className="h-7" />
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center justify-between bg-background shadow-neo rounded-full px-3 py-2 gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={handleClick}
              onMouseEnter={handleHover}
              className={({ isActive }) =>
                `flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-300 ${
                  isActive
                    ? "bg-foreground text-background font-semibold"
                    : "text-muted hover:text-vert"
                }`
              }
            >
              <link.icon className="w-4 h-4" />
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <NavLink
          to="/contact"
          onClick={handleClick}
          onMouseEnter={handleHover}
          className="bg-vert border-4 border-vert rounded-full px-5 py-2 text-white font-bold uppercase shadow-neo cursor-pointer transition-all duration-200 hover:bg-surface hover:text-foreground hover:border-vert"
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
}

function MobileHeader() {
  const { play } = useSound();
  const { theme } = useSettings();
  const logo = theme === "dark" ? logoWhite : logoBlack;

  const handleClick = () => play("click");
  const handleHover = () => play("hover", 0.15);

  return (
    <header className="flex nav:hidden fixed top-0 left-0 right-0 z-50 items-center justify-between px-4 py-3 bg-background">
      {/* Logo */}
      <NavLink
        to="/"
        onClick={handleClick}
        onMouseEnter={handleHover}
        className="flex items-center"
      >
        <img src={logo} alt="Codify" className="h-7" />
      </NavLink>

      {/* CTA Button */}
      <NavLink
        to="/contact"
        onClick={handleClick}
        onMouseEnter={handleHover}
        className="bg-vert border-4 border-vert rounded-full px-4 py-2 text-white font-bold uppercase text-sm shadow-neo cursor-pointer transition-all duration-200 hover:bg-surface hover:text-foreground hover:border-vert"
      >
        Contact
      </NavLink>
    </header>
  );
}

function MobileNavbar() {
  const { play } = useSound();

  const handleClick = () => play("click");
  const handleHover = () => play("hover", 0.15);

  return (
    <nav className="flex nav:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-md">
      <div className="flex items-center justify-between w-full bg-background shadow-neo rounded-full px-4 py-3">
        {navLinks.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={handleClick}
            onMouseEnter={handleHover}
            className={({ isActive }) =>
              `flex items-center gap-2 px-3 py-2 rounded-full transition-colors duration-300 ${
                isActive
                  ? "bg-foreground text-background font-semibold"
                  : "text-muted hover:text-vert"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <link.icon className="w-5 h-5" />
                <span className={`${isActive ? "inline" : "hidden xs:inline"}`}>
                  {link.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
