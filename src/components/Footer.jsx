import { profile, socials } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-rule mt-24">
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
    </footer>
  );
}
