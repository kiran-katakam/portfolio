import { useState } from "react";
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

function Onboard({ row }) {
  const p = row.project;
  return (
    <div key={row.to} className="wipe border-t border-rule pt-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-4">
      <span className="font-black italic [font-stretch:62%] text-[64px] leading-[0.8] text-chalk/15 select-none" aria-hidden="true">
        {row.abbr}
      </span>
      <div className="min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h2 className="font-extrabold [font-stretch:80%] uppercase text-[24px] leading-tight">{p ? p.title : "Driver profile"}</h2>
          {p && <Tyre status={p.status} withLabel />}
        </div>
        <p className="text-dim mt-2 max-w-[60ch]">{p ? p.summary : "Off track: Formula 1 (Max Verstappen fan), Minecraft worlds and making music. On track: internships at AquarLabs and Appe Nexus, and the stack I build with."}</p>
        {p && (
          <ul className="flex flex-wrap gap-x-4 gap-y-1 mt-4">
            {p.stack.map((s) => (
              <li key={s} className="label !text-chalk/80">{s}</li>
            ))}
          </ul>
        )}
        <Link to={row.to} className="inline-flex items-center gap-2 mt-5 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:underline">
          {p ? "Open telemetry" : "Read the profile"} <Icon name="right" />
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);
  const lead = projects.find((p) => p.status === "live") ?? projects[0];

  return (
    <>
      <title>Kiran Katakam · Backend developer</title>
      <meta name="description" content={profile.intro} />

      <section className="wrap pt-8 lg:pt-12 grid gap-10 lg:grid-cols-[minmax(380px,460px)_1fr] lg:gap-16 items-start">
        <div className="lg:order-2 min-w-0">
          <h1 className="display text-[clamp(76px,13vw,184px)]">
            Kiran
            <br />
            Katakam
          </h1>
          <p className="mt-6 font-extrabold [font-stretch:80%] uppercase tracking-[0.04em] text-[clamp(18px,2vw,24px)]">
            {profile.role} <span className="text-dim">· builds things, breaks them</span>
          </p>
          <p className="mt-3 text-dim text-[17px] max-w-[58ch]">{profile.intro}</p>
          <div className="hidden lg:block mt-10">
            <Onboard row={rows[active]} />
          </div>
        </div>
        <div className="lg:order-1 lg:sticky lg:top-24">
          <Tower rows={rows} active={active} onActive={setActive} />
        </div>
      </section>

      <section className="wrap mt-28 lg:mt-40 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 items-start">
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

      <section className="wrap mt-28 lg:mt-40">
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
