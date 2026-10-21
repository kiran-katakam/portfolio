import { Link } from "react-router-dom";
import Tyre from "../components/Tyre";
import Icon from "../components/Icon";
import { startOffset, PositionTick } from "../components/Tower";
import { projects, STATUS } from "../data/projects";

// Every cell except Pos moves, so the position column stays fixed while the pair swaps.
const moving = (d) => ({
  className: `${d ? "settle" : ""} relative bg-inherit ${d > 0 ? "z-20" : "z-10"}`,
  style: { "--d": d, animationDelay: "350ms" },
});

const cols = "md:grid-cols-[56px_28px_88px_minmax(0,1.1fr)_minmax(0,1.4fr)_64px_120px]";

export default function Projects() {
  return (
    <>
      <title>Projects · Kiran Katakam</title>
      <meta name="description" content="Projects by Kiran Katakam: smart contracts, graph databases, backend APIs, data visualization and Flutter apps, each with its source." />

      <section className="wrap pt-10 lg:pt-16">
        <h1 className="display text-[clamp(44px,12vw,176px)]">Classification</h1>
        <p className="mt-5 text-dim text-[17px] max-w-[60ch]">
          Everything I have shipped or am building, with the source behind it. Pick a row for the full telemetry.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
          {Object.keys(STATUS).map((k) => (
            <li key={k}><Tyre status={k} withLabel /></li>
          ))}
        </ul>

        <div className="mt-10 bg-bar border border-rule overflow-hidden">
          <div className={`hidden md:grid ${cols} items-center h-10 border-b border-rule`}>
            <span className="label text-center">Pos</span>
            <span />
            <span className="label px-4">Code</span>
            <span className="label px-4">Project</span>
            <span className="label px-4">Stack</span>
            <span className="label">Year</span>
            <span className="label pr-4">Status</span>
          </div>
          <ol>
            {projects.map((p, i) => {
              const d = startOffset(i, [0, 1]);
              const m = moving(d);
              return (
              <li key={p.slug} className="border-b border-rule last:border-b-0">
                <Link to={`/projects/${p.slug}`} className={`group grid grid-cols-[48px_1fr_auto] ${cols} items-stretch md:min-h-[76px] bg-bar hover:bg-bar-hi transition-colors`}>
                  <span className="grid place-items-center bg-chalk text-void group-hover:bg-void group-hover:text-chalk font-black italic [font-stretch:62%] text-[30px] transition-colors">
                    {i + 1}
                  </span>
                  <span className={`hidden md:flex items-center justify-center ${m.className}`} style={m.style}>
                    <PositionTick d={d} />
                  </span>
                  <span className={`hidden md:flex items-center px-4 font-black italic [font-stretch:62%] text-[30px] leading-none ${m.className}`} style={m.style}>{p.abbr}</span>
                  <span className={`flex flex-col justify-center px-4 py-4 md:py-3 min-w-0 ${m.className}`} style={m.style}>
                    <span className="font-extrabold [font-stretch:80%] uppercase text-[19px] leading-tight">
                      <span className="md:hidden font-black italic [font-stretch:62%] mr-2">{p.abbr}</span>
                      {p.title}
                    </span>
                    <span className="text-dim text-[15px] leading-snug mt-1">{p.tagline}</span>
                  </span>
                  <span className={`hidden md:flex items-center px-4 text-[14px] text-chalk/80 min-w-0 ${m.className}`} style={m.style}>
                    <span className="truncate">{p.stack.slice(0, 4).join(" · ")}</span>
                  </span>
                  <span className={`hidden md:flex items-center text-dim text-[15px] ${m.className}`} style={m.style}>{p.year}</span>
                  <span className={`flex items-center gap-3 pr-4 justify-end md:justify-between ${m.className}`} style={m.style}>
                    <Tyre status={p.status} />
                    <Icon name="right" className="w-4 h-4 text-dim group-hover:text-chalk group-hover:translate-x-1 transition-transform hidden md:block" />
                  </span>
                </Link>
              </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}
