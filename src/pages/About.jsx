import CopyButton from "../components/CopyButton";
import Icon from "../components/Icon";
import { certifications, profile, career, education, leadership, garage, rig, offTrack, nextSeason } from "../data/profile";

function Heading({ children }) {
  return <h2 className="display text-[clamp(48px,7vw,104px)]">{children}</h2>;
}

export default function About() {
  return (
    <>
      <title>About · Kiran Katakam</title>
      <meta name="description" content="About Kiran Katakam: Computer Science at VIT-AP, backend internships, his stack, and off-track interests in Formula 1, Minecraft and music." />

      <section className="snap-start wrap pt-8 lg:pt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 items-end">
        <div>
          <span className="inline-block bg-chalk text-void font-black italic [font-stretch:62%] text-[clamp(40px,5vw,64px)] leading-none px-4 py-2">{profile.abbr}</span>
          <h1 className="display text-[clamp(76px,13vw,184px)] mt-6">
            Kiran
            <br />
            Katakam
          </h1>
        </div>
        <div>
          <p className="text-[19px] leading-relaxed">{profile.intro}</p>
          <dl className="mt-8 border-t border-rule">
            {[
              ["Full name", profile.fullName],
              ["Base", "VIT-AP University"],
              ["Discipline", profile.role],
              ["Rookie season", "2023"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-6 py-3 border-b border-rule">
                <dt className="label self-center">{k}</dt>
                <dd className="font-bold text-right">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-36">
        <Heading>Off track</Heading>
        <ul className="mt-10 border-t border-rule">
          {offTrack.map((o) => (
            <li key={o.title} className="grid gap-3 md:grid-cols-[1fr_1fr] md:gap-10 md:items-center py-6 md:py-8 border-b border-rule">
              <h3 className="display text-[clamp(52px,7vw,112px)]">{o.title}</h3>
              <p className="text-[18px] md:text-[20px] max-w-[40ch]">{o.line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-36">
        <Heading>Career</Heading>
        <ol className="mt-10 border-t border-rule">
          {career.map((c) => (
            <li key={c.team} className="grid gap-4 md:grid-cols-[220px_1fr_1.2fr] md:gap-8 py-8 border-b border-rule">
              <span className="text-dim font-semibold">{c.when}</span>
              <div>
                <h3 className="font-extrabold [font-stretch:80%] uppercase text-[24px] leading-tight">{c.team}</h3>
                <p className="text-dim mt-1">{c.role}</p>
              </div>
              <ul className="space-y-2">
                {c.notes.map((n) => (
                  <li key={n} className="flex gap-3">
                    <span className="mt-[11px] w-3 h-px bg-chalk shrink-0" aria-hidden="true" />
                    {n}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-36">
        <Heading>Certified</Heading>
        <ul className="mt-10 border-t border-rule">
          {certifications.map((c) => (
            <li key={c.validation} className="py-8 border-b border-rule grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-chalk text-void font-black italic [font-stretch:62%] text-[24px] leading-none px-3 py-1.5">{c.code}</span>
                  <span className="label">{c.issuer}</span>
                </div>
                <h3 className="mt-4 font-black italic [font-stretch:62%] uppercase text-[clamp(32px,4vw,56px)] leading-[0.9]">{c.name}</h3>
                <p className="mt-3 text-dim">Issued {c.issued} · Valid until {c.expires}</p>
              </div>
              <div className="min-w-0">
                <p className="label">Validation number</p>
                <p className="mt-2 font-mono text-[15px] break-all bg-bar border border-rule px-4 py-3">{c.validation}</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <CopyButton text={c.validation} label="Copy number" />
                  <a href={c.badgeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-chalk text-void px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:bg-green transition-colors">
                    Verify on Credly <Icon name="out" />
                  </a>
                  <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-rule px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] hover:border-chalk transition-colors">
                    Verify at AWS <Icon name="out" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-36 grid gap-16 lg:grid-cols-2">
        <div>
          <Heading>Education</Heading>
          <ol className="mt-10 border-t border-rule">
            {education.map((e) => (
              <li key={e.what} className="py-6 border-b border-rule grid grid-cols-[120px_1fr] gap-6">
                <span className="text-dim font-semibold">{e.when}</span>
                <div>
                  <h3 className="font-bold text-[18px]">{e.what}</h3>
                  <p className="text-dim">{e.where}</p>
                  {e.detail && <p className="text-dim text-[15px] mt-1">{e.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <Heading>Leadership</Heading>
          <ul className="mt-10 border-t border-rule">
            {leadership.map((l) => (
              <li key={l.role} className="py-6 border-b border-rule">
                <h3 className="font-bold text-[18px]">{l.role}</h3>
                <p className="text-dim">{l.org}</p>
                <p className="mt-2">{l.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-36">
        <Heading>The garage</Heading>
        <p className="mt-4 text-dim text-[17px] max-w-[56ch]">What I build with, and the machine I build on.</p>
        <div className="mt-10 grid grid-cols-2 gap-px bg-rule border border-rule lg:grid-cols-[repeat(4,1fr)_1.2fr]">
          {garage.map((g) => (
            <div key={g.group} className="bg-void p-6">
              <h3 className="label">{g.group}</h3>
              <ul className="mt-4 space-y-1.5">
                {g.items.map((it) => (
                  <li key={it} className="font-semibold">{it}</li>
                ))}
              </ul>
            </div>
          ))}
          <div className="bg-bar p-6 col-span-2 md:col-span-1 lg:col-span-1">
            <h3 className="label">The rig</h3>
            <dl className="mt-4 space-y-1.5 font-mono text-[13px]">
              {rig.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4">
                  <dt className="text-dim">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="snap-start wrap mt-28 lg:mt-36">
        <Heading>Next season</Heading>
        <p className="mt-4 text-dim text-[17px] max-w-[56ch]">What I am learning and pushing toward next.</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {nextSeason.map((n) => (
            <li key={n} className="border border-rule px-4 py-2 font-bold uppercase [font-stretch:80%] tracking-[0.04em]">{n}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
