import { profile, socials } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-24 overflow-hidden">
      <div className="wrap py-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <p className="text-dim text-[14px]">
          © {new Date().getFullYear()} {profile.fullName}. Built with React, hosted on AWS.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          <li>
            <a href={`mailto:${profile.email}`} className="label hover:text-chalk">Email</a>
          </li>
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="label hover:text-chalk">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Sized in vw so the name spans the full width at any screen size; bottom is cropped by the page edge. */}
      <p className="wrap display whitespace-nowrap text-chalk text-[min(15.4vw,222px)] leading-[0.78] -mb-[0.06em] select-none" aria-hidden="true">
        Kiran Katakam
      </p>
    </footer>
  );
}
