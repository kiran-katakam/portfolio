import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Tower from "../components/Tower";
import Tyre from "../components/Tyre";
import Icon from "../components/Icon";
import { projects } from "../data/projects";
import { profile } from "../data/profile";

const rows = [
  { to: "/about", abbr: profile.abbr, title: profile.name, year: "" },
  ...projects.map((p) => ({ to: `/projects/${p.slug}`, abbr: p.abbr, title: p.title, year: p.year, status: p.status, project: p })),
];

const readout = [
  ["Base", "VIT-AP University"],
  ["Certified", "AWS CLF-C02"],
  ["On the grid", `${projects.length} projects`],
  ["Live now", projects.filter((p) => p.status === "live").map((p) => p.title).join(", ")],
];

function Onboard({ row }) {
  const p = row.project;
  return (
    // Fixed-height slots (one-line title, three-line summary, one-line stack) so switching rows never moves the layout.
    <div key={row.to} className="fade border-t border-rule pt-6 lg:border-t-0 lg:pt-0 grid grid-cols-[auto_1fr] gap-x-6">
      <span className="font-black italic [font-stretch:62%] text-[64px] leading-[0.8] text-chalk/15 select-none" aria-hidden="true">
        {row.abbr}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-3 h-8">
          <h2 className="font-extrabold [font-stretch:80%] uppercase text-[24px] leading-none truncate">{p ? p.title : "Driver profile"}</h2>
          {p && <Tyre status={p.status} withLabel />}
        </div>
        <p className="text-dim mt-2 max-w-[60ch] h-[4.8em] line-clamp-3">{p ? p.summary : "Off track: Formula 1 (Max Verstappen fan), Minecraft worlds and making music. On track: internships at AquarLabs and Appe Nexus, and the stack I build with."}</p>
        <ul className="flex gap-x-4 mt-4 h-3 overflow-hidden whitespace-nowrap">
          {(p ? p.stack : ["Formula 1", "Minecraft", "Music", "Backend"]).map((s) => (
            <li key={s} className="label !text-chalk/80">{s}</li>
          ))}
        </ul>
        <Link to={row.to} className="inline-flex items-center gap-2 mt-5 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:underline">
          {p ? "Open telemetry" : "Read the profile"} <Icon name="right" />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [go, setGo] = useState(false);
  const gridRef = useRef(null);

  // The overtake plays when the grid scrolls into view, not off-screen behind the hero.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setGo(true), { threshold: 0.4 });
    io.observe(gridRef.current);
    return () => io.disconnect();
  }, []);
  const lead = projects.find((p) => p.status === "live") ?? projects[0];

  return (
    <>
      <title>Kiran Katakam · Backend developer</title>
      <meta name="description" content={profile.intro} />

      <section className="snap-start wrap min-h-[calc(100svh-56px)] flex flex-col pt-8 lg:pt-12 pb-8">
        <h1 className="display text-[clamp(80px,15vw,232px)]">
          Kiran
          <br />
          Katakam
        </h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16 lg:items-end">
          <div>
            <p className="font-extrabold [font-stretch:80%] uppercase tracking-[0.04em] text-[clamp(18px,2vw,26px)]">
              {profile.role} <span className="text-dim">· builds things, breaks them</span>
            </p>
            <p className="mt-3 text-dim text-[17px] max-w-[58ch]">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#grid" className="inline-flex items-center gap-2 bg-chalk text-void px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:bg-green transition-colors">
                See the grid <Icon name="right" className="w-4 h-4 rotate-90" />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:border-chalk transition-colors">
                Team radio
              </Link>
            </div>
          </div>
          <dl className="grid grid-cols-2 border-t border-l border-rule">
            {readout.map(([k, v]) => (
              <div key={k} className="border-r border-b border-rule p-4 sm:p-5">
                <dt className="label">{k}</dt>
                <dd className="mt-2 font-black italic [font-stretch:62%] uppercase text-[clamp(24px,2.4vw,34px)] leading-none [word-spacing:0.12em]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="grid" className="snap-start wrap pt-16 lg:pt-24">
        <h2 className="display text-[clamp(56px,8vw,120px)]">The grid</h2>
        <p className="mt-4 text-dim text-[17px] max-w-[56ch]">Me at P1, then everything I have built. Pick a row to open it.</p>
        <div ref={gridRef} data-go={go ? "1" : "0"} className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(380px,520px)_1fr] lg:gap-16 items-start">
          <Tower rows={rows} active={active} onActive={setActive} />
          <div className="hidden lg:block">
            <Onboard row={rows[active]} />
          </div>
        </div>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-40 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
        <div>
          <Tyre status={lead.status} withLabel />
          <h2 className="display text-[clamp(52px,7vw,104px)] mt-4">{lead.title}</h2>
          <p className="mt-4 font-bold text-[19px]">{lead.tagline}</p>
          <p className="mt-3 text-dim max-w-[60ch]">{lead.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {lead.links.live && (
              <a href={lead.links.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-chalk text-void px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:bg-green transition-colors">
                Try it live <Icon name="out" />
              </a>
            )}
            <Link to={`/projects/${lead.slug}`} className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:border-chalk transition-colors">
              How it works <Icon name="right" />
            </Link>
          </div>
        </div>
        <figure className="bg-bar border border-rule min-w-0">
          <figcaption className="flex items-center justify-between gap-4 h-10 px-4 border-b border-rule">
            <span className="label truncate">Onboard · {lead.code.file}</span>
            <a href={lead.code.url} target="_blank" rel="noopener noreferrer" className="label hover:text-chalk shrink-0">Source</a>
          </figcaption>
          <pre className="p-4 sm:p-6 overflow-x-auto font-mono text-[13px] leading-relaxed text-chalk/90"><code>{lead.code.source}</code></pre>
        </figure>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-40">
        <div className="border-t border-rule pt-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="display text-[clamp(64px,10vw,150px)]">Box, box.</h2>
            <p className="mt-4 text-dim text-[17px] max-w-[52ch]">Backend roles, internships, or a system you want someone to stress-test. Radio in.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-chalk text-void px-6 py-4 font-bold uppercase [font-stretch:80%] tracking-[0.06em] text-[17px] hover:bg-green transition-colors self-start md:self-auto">
            Open team radio <Icon name="right" />
          </Link>
        </div>
      </section>
    </>
  );
}
