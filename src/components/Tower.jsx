import { Link } from "react-router-dom";
import Tyre from "./Tyre";

// Choreography only: one pair of rows starts swapped and the lower one overtakes into its real place.
export function startOffset(i, [a, b]) {
  return i === a ? b - a : i === b ? a - b : 0;
}

// Wraps the part of a row that moves; the position column never moves, like a broadcast tower.
export function Mover({ d, delay, className = "", children }) {
  return (
    <span
      className={`${d ? "settle" : ""} relative bg-inherit ${d > 0 ? "z-20" : "z-10"} ${className}`}
      style={{ "--d": d, animationDelay: `${delay}ms` }}
    >
      {children}
    </span>
  );
}

// Up chevron for a row that gained a place on the way in, down for one that lost it.
export function PositionTick({ d }) {
  if (!d) return <span className="w-3" aria-hidden="true" />;
  const up = d > 0;
  return (
    <svg viewBox="0 0 12 8" className={`tick w-3 h-2 ${up ? "text-green" : "text-dim rotate-180"}`} aria-hidden="true">
      <path d="M6 0 12 8H0z" fill="currentColor" />
    </svg>
  );
}

// The timing tower: the site's navigation.
export default function Tower({ rows, active, onActive }) {
  return (
    <div className="bg-bar border border-rule overflow-hidden">
      <div className="flex items-center justify-between h-10 px-3 border-b border-rule">
        <span className="label">Pos · Driver / Project</span>
        <span className="label">Status</span>
      </div>
      <ol>
        {rows.map((r, i) => {
          const d = startOffset(i, [1, 2]);
          const on = active === i;
          return (
            <li key={r.to} className="border-b border-rule last:border-b-0">
              <Link
                to={r.to}
                // Only real pointer movement switches rows: scrolling under a still cursor must not.
                onPointerMove={(e) => (e.movementX || e.movementY) && onActive?.(i)}
                onFocus={() => onActive?.(i)}
                aria-current={on ? "true" : undefined}
                className={`flex items-stretch h-14 transition-colors ${on ? "bg-bar-hi" : "bg-bar hover:bg-bar-hi"}`}
              >
                <span
                  className={`grid place-items-center w-12 shrink-0 font-black italic [font-stretch:62%] text-[28px] transition-colors ${
                    on ? "bg-void text-chalk outline outline-2 -outline-offset-2 outline-chalk" : "bg-chalk text-void"
                  }`}
                >
                  {i + 1}
                </span>
                <Mover d={d} delay={400} className="flex items-stretch flex-1 min-w-0">
                  <span className="flex items-center pl-2">
                    <PositionTick d={d} />
                  </span>
                  <span className="flex items-center gap-3 px-3 min-w-0 flex-1">
                    <span className="font-black italic [font-stretch:62%] text-[26px] leading-none tracking-wide">{r.abbr}</span>
                    <span className="font-bold [font-stretch:75%] uppercase text-[16px] sm:text-[18px] leading-none tracking-[0.02em] truncate">{r.title}</span>
                  </span>
                  <span className="flex items-center gap-4 pr-4">
                    <span className="hidden sm:block text-dim text-[14px]">{r.year}</span>
                    {r.status ? <Tyre status={r.status} /> : <span className="label !text-chalk w-6 text-center">You</span>}
                  </span>
                </Mover>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
