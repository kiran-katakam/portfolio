import { useEffect, useState } from "react";

const KEY = "kk-lights-seen";

function shouldRun() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  try {
    return !sessionStorage.getItem(KEY);
  } catch {
    return false;
  }
}

// Five-light race start, once per browser session. While it runs, html[data-lights]
// pauses every .wipe animation so the timing tower fills in as the lights go out.
export default function StartLights() {
  const [run] = useState(shouldRun);
  const [lit, setLit] = useState(0);
  const [phase, setPhase] = useState(run ? "on" : "done");

  useEffect(() => {
    if (!run) return;
    document.documentElement.dataset.lights = "on";
    try {
      sessionStorage.setItem(KEY, "1");
    } catch {
      // storage blocked: the sequence just runs again next visit
    }
    const timers = [1, 2, 3, 4, 5].map((n) => setTimeout(() => setLit(n), 250 + n * 550));
    timers.push(setTimeout(() => setPhase("out"), 250 + 5 * 550 + 900));
    return () => timers.forEach(clearTimeout);
  }, [run]);

  useEffect(() => {
    if (phase === "out") {
      setLit(0);
      delete document.documentElement.dataset.lights;
      const t = setTimeout(() => setPhase("done"), 650);
      return () => clearTimeout(t);
    }
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-void grid place-items-center transition-[clip-path] duration-500 ease-out ${
        phase === "out" ? "[clip-path:inset(0_0_100%_0)] delay-150" : "[clip-path:inset(0_0_0_0)]"
      }`}
    >
      <div className="flex flex-col items-center gap-10 px-4">
        <div className="flex gap-2 sm:gap-4" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((n) => (
            <div key={n} className="bg-bar border border-rule rounded-[10px] p-2 sm:p-3 flex flex-col gap-2 sm:gap-3">
              {[0, 1, 2, 3].map((row) => {
                const on = row > 1 && lit >= n;
                return (
                  <span
                    key={row}
                    className={`block w-9 h-9 sm:w-14 sm:h-14 rounded-full ${
                      on ? "bg-lights shadow-[0_0_28px_4px_rgba(255,30,16,0.55)]" : "bg-[#24242a]"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <p className="display text-[clamp(28px,6vw,56px)] text-chalk" aria-live="polite">
          {phase === "out" ? "Lights out" : "Kiran Katakam"}
        </p>
        <button type="button" onClick={() => setPhase("out")} className="label hover:text-chalk px-3 py-2">
          Skip start
        </button>
      </div>
    </div>
  );
}
