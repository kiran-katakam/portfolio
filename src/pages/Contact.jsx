import Icon from "../components/Icon";
import CopyButton from "../components/CopyButton";
import { profile, socials } from "../data/profile";

// Fixed bar heights so the waveform reads like a voice clip, not noise.
const bars = Array.from({ length: 64 }, (_, i) => 0.25 + 0.75 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21)));

const btn = "inline-flex items-center gap-2 px-5 py-3 font-bold uppercase [font-stretch:80%] tracking-[0.06em] transition-colors";

export default function Contact() {

  return (
    <>
      <title>Contact · Kiran Katakam</title>
      <meta name="description" content="Get in touch with Kiran Katakam about backend engineering roles, collaboration, or technical conversations." />

      <section className="snap-start wrap pt-8 lg:pt-12">
        <h1 className="display text-[clamp(76px,13vw,184px)]">Team radio</h1>

        <div className="radio mt-10 bg-bar border border-rule">
          <div className="flex items-stretch border-b border-rule">
            <span className="bg-chalk text-void font-black italic [font-stretch:62%] text-[30px] leading-none px-4 py-2 flex items-center">{profile.abbr}</span>
            <span className="px-4 flex items-center font-bold [font-stretch:75%] uppercase tracking-[0.04em] text-[18px]">{profile.name}</span>
            <span className="ml-auto px-4 hidden sm:flex items-center label">Radio to anyone listening</span>
          </div>

          <div className="wave flex items-center gap-[3px] h-16 px-5 sm:px-8 mt-6" aria-hidden="true">
            {bars.map((h, i) => (
              <span
                key={i}
                className={`flex-1 bg-chalk/70 ${i > 40 ? "hidden sm:block" : ""}`}
                style={{ height: `${h * 100}%`, animationDelay: `${(i % 9) * 70}ms` }}
              />
            ))}
          </div>

          <blockquote className="px-5 sm:px-8 mt-6 font-black italic [font-stretch:62%] uppercase text-[clamp(26px,3.6vw,48px)] leading-[0.95] max-w-[28ch]">
            “Open to backend roles, collaboration and good technical problems. Email is the fastest way to reach me.”
          </blockquote>

          <div className="p-5 sm:p-8 mt-8 border-t border-rule flex flex-col gap-6">
            <a href={`mailto:${profile.email}`} className="font-black italic [font-stretch:62%] uppercase text-[clamp(24px,6.5vw,88px)] leading-none break-words hover:underline decoration-2">
              {profile.email}
            </a>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={`${btn} bg-chalk text-void hover:bg-green`}>
                Write email <Icon name="out" />
              </a>
              <CopyButton text={profile.email} label="Copy address" />
            </div>
          </div>
        </div>

        <ul className="mt-16 border-t border-rule">
          {socials.map((s) => (
            <li key={s.label} className="border-b border-rule">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1fr_auto] items-center gap-x-6 gap-y-1 py-6 hover:bg-bar transition-colors">
                <span className="display text-[clamp(44px,6vw,88px)]">{s.label}</span>
                <span className="text-dim text-[17px] col-start-1 md:col-start-2 row-start-2 md:row-start-1">{s.handle}</span>
                <Icon name="out" className="w-7 h-7 text-dim group-hover:text-chalk transition-colors row-start-1 col-start-2 md:col-start-3 mr-2" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
