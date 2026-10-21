import { Link, NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-void/95 backdrop-blur-sm border-b border-rule">
      <div className="wrap h-14 flex items-stretch justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Kiran Katakam, home">
          <span className="bg-chalk text-void font-black italic [font-stretch:62%] text-[22px] leading-none px-2 py-1.5">KK</span>
          <span className="hidden sm:block font-bold [font-stretch:80%] uppercase tracking-[0.06em] text-[15px] group-hover:text-chalk text-dim transition-colors">
            Kiran Katakam
          </span>
        </Link>
        <nav aria-label="Main" className="flex items-stretch">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `flex items-center px-3 sm:px-5 font-bold [font-stretch:80%] uppercase tracking-[0.06em] text-[14px] sm:text-[15px] transition-colors ${
                  isActive ? "bg-chalk text-void" : "text-dim hover:text-chalk hover:bg-bar"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
