import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 bg-secondary-container border-b-2 border-outline-variant shadow-hard-navy">
      <div className="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-layout mx-auto">
        {/* Logo */}
        <NavLink
          to="/"
          className="font-display-lg text-headline-md text-white tracking-tighter uppercase"
          style={{ letterSpacing: "-1.2px" }}
        >
          KIRANKATAKAM.ME
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-label-pixel text-label-pixel uppercase tracking-widest transition-all px-2 py-1 ${
                  isActive
                    ? "text-white border-b-2 border-white pb-1 font-bold"
                    : "text-white/80 hover:text-tertiary hover:bg-white/10"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-2">
          <button
            className="hidden md:flex items-center justify-center p-2 text-white hover:text-tertiary transition-colors active:translate-y-0.5"
            aria-label="Terminal"
          >
            <span className="material-symbols-outlined">terminal</span>
          </button>
          <button
            className="hidden md:flex items-center justify-center p-2 text-white hover:text-tertiary transition-colors active:translate-y-0.5"
            aria-label="Settings"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-secondary-container border-t border-outline-variant">
          <div className="flex flex-col px-margin-mobile py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `font-label-pixel text-label-pixel uppercase tracking-widest py-2 transition-colors ${
                    isActive
                      ? "text-white font-bold border-l-2 border-white pl-3"
                      : "text-white/80 hover:text-tertiary pl-3"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
