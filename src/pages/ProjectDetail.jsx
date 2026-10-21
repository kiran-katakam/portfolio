import { useParams, Link } from "react-router-dom";
import Tyre from "../components/Tyre";
import Icon from "../components/Icon";
import NotFound from "./NotFound";
import { projects } from "../data/projects";

const btn = "inline-flex items-center gap-2 px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] transition-colors";

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];
  if (!project) return <NotFound />;

  const { links, code, screenshots } = project;
  const ahead = index > 0 ? projects[index - 1] : null;
  const behind = projects[index + 1] ?? null;
  const readout = [{ key: "Year", value: project.year }, ...project.facts];

  return (
    <>
      <title>{`${project.title} · Kiran Katakam`}</title>
      <meta name="description" content={project.summary} />

      <section className="snap-start wrap pt-8 lg:pt-12">
        <Link to="/projects" className="label inline-flex items-center gap-2 hover:text-chalk">
          <Icon name="left" className="w-3.5 h-3.5" /> Classification
        </Link>

        <div className="mt-8 flex items-stretch">
          <span className="grid place-items-center bg-chalk text-void font-black italic [font-stretch:62%] text-[clamp(32px,4.5vw,52px)] px-4 sm:px-6">P{index + 1}</span>
          <span className="flex items-center bg-bar border border-l-0 border-rule px-4 sm:px-6 font-black italic [font-stretch:62%] text-[clamp(28px,4vw,44px)] leading-none">
            {project.abbr}
          </span>
          <span className="flex items-center px-4 sm:px-6 border border-l-0 border-rule">
            <Tyre status={project.status} withLabel />
          </span>
        </div>

        <h1 className="display text-[clamp(40px,11vw,168px)] mt-6 break-words">{project.title}</h1>
        <p className="mt-5 font-extrabold [font-stretch:80%] uppercase tracking-[0.04em] text-[clamp(18px,2vw,24px)]">{project.tagline}</p>
        <p className="mt-4 text-dim text-[17px] max-w-[64ch]">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {links.live && (
            <a href={links.live} target="_blank" rel="noopener noreferrer" className={`${btn} bg-chalk text-void hover:bg-green`}>
              Try it live <Icon name="out" />
            </a>
          )}
          {links.repos.map((r) => (
            <a key={r.url} href={r.url} target="_blank" rel="noopener noreferrer" className={`${btn} border border-rule hover:border-chalk`}>
              {r.label} repo <Icon name="out" />
            </a>
          ))}
        </div>
      </section>

      <section className="snap-start wrap mt-16" aria-label="Key facts">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-rule">
          {readout.map((f) => (
            <div key={f.key} className="border-r border-b border-rule p-5">
              <dt className="label">{f.key.replace(/_/g, " ")}</dt>
              <dd className="mt-3 font-bold text-[18px] leading-snug">{f.value}</dd>
            </div>
          ))}
          <div className="border-r border-b border-rule p-5 sm:col-span-2 lg:col-span-4">
            <dt className="label">Stack</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="bg-bar-hi px-3 py-1.5 text-[14px] font-semibold">{s}</span>
              ))}
            </dd>
          </div>
        </dl>
      </section>

      <section className="snap-start wrap mt-24">
        <h2 className="display text-[clamp(44px,6vw,80px)]">How it works</h2>
        <ul className="mt-8 border-t border-rule">
          {project.highlights.map((h) => (
            <li key={h.title} className="grid gap-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] md:gap-10 py-6 border-b border-rule">
              <h3 className="font-black italic [font-stretch:62%] uppercase text-[clamp(28px,3vw,40px)] leading-none">{h.title}</h3>
              <p className="text-dim text-[17px] max-w-[64ch]">{h.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {code && (
        <section className="snap-start wrap mt-24">
          <figure className="bg-bar border border-rule min-w-0">
            <figcaption className="flex items-center justify-between gap-4 h-10 px-4 border-b border-rule">
              <span className="label truncate">Onboard · {code.file}</span>
              <a href={code.url} target="_blank" rel="noopener noreferrer" className="label hover:text-chalk shrink-0">View on GitHub</a>
            </figcaption>
            <pre className="p-4 sm:p-6 overflow-x-auto font-mono text-[13px] leading-relaxed text-chalk/90"><code>{code.source}</code></pre>
          </figure>
        </section>
      )}

      {screenshots?.length > 0 && (
        <section className="snap-start wrap mt-24">
          <h2 className="display text-[clamp(44px,6vw,80px)]">Screens</h2>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-3">
            {screenshots.map((src, i) => (
              <img key={src} src={src} alt={`${project.title} screenshot ${i + 1}`} loading="lazy" className="w-44 md:w-56 shrink-0 border border-rule" />
            ))}
          </div>
        </section>
      )}

      <nav aria-label="Other projects" className="wrap mt-24 grid sm:grid-cols-2 border-t border-rule">
        {[
          { p: ahead, label: "Car ahead", icon: "left", align: "" },
          { p: behind, label: "Car behind", icon: "right", align: "sm:text-right sm:items-end sm:border-l" },
        ].map(({ p, label, icon, align }) =>
          p ? (
            <Link key={label} to={`/projects/${p.slug}`} className={`group flex flex-col gap-2 py-8 sm:px-6 first:sm:pl-0 border-rule hover:bg-bar transition-colors ${align}`}>
              <span className="label inline-flex items-center gap-2">
                {icon === "left" && <Icon name="left" className="w-3.5 h-3.5" />}
                {label} · P{projects.indexOf(p) + 1}
                {icon === "right" && <Icon name="right" className="w-3.5 h-3.5" />}
              </span>
              <span className="display text-[clamp(36px,4vw,56px)]">{p.title}</span>
            </Link>
          ) : (
            <span key={label} className={`hidden sm:block border-rule ${align}`} />
          )
        )}
      </nav>
    </>
  );
}
