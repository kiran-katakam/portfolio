import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0, opacity: 0 });

  useEffect(() => {
    if (!navRef.current) return;
    const activeLink = navRef.current.querySelector("[data-active='true']");
    if (activeLink) {
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setSliderStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
        opacity: 1,
      });
    } else {
      setSliderStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [location.pathname]);

  /* Determine if a path is active — exact for "/", startsWith for others */
  const isPathActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

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
        <div ref={navRef} className="hidden md:flex items-center gap-8 relative">
          {navLinks.map((link) => {
            const active = isPathActive(link.to);
            return (
              <NavLink
                key={link.to}
                to={link.to}
                data-active={active}
                className={`font-label-pixel text-label-pixel uppercase tracking-widest transition-colors duration-200 px-2 py-1 ${
                  active
                    ? "text-white font-bold"
                    : "text-white/80 hover:text-tertiary"
                }`}
              >
                {link.label}
              </NavLink>
            );
          })}
          {/* Animated sliding underline */}
          <span
            className="absolute bottom-[-2px] h-[2px] bg-white transition-all duration-300 ease-in-out pointer-events-none"
            style={{
              width: `${sliderStyle.width}px`,
              left: `${sliderStyle.left}px`,
              opacity: sliderStyle.opacity,
            }}
          />
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
