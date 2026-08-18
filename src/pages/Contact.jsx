import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 flex flex-col gap-16">
      <Helmet>
        <title>Contact — Kiran Katakam</title>
        <meta name="description" content="Get in touch with Kiran Katakam. Available for backend engineering roles, collaboration opportunities, and technical conversations." />
      </Helmet>
      {/* ── Page Header ── */}
      <header className="flex flex-col gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant w-fit rounded">
          <span className="material-symbols-outlined text-tertiary text-sm">mail</span>
          <span className="font-label-pixel text-label-pixel text-tertiary tracking-widest">
            SYSTEM_CONTACT
          </span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background uppercase">
          Get In <span className="text-primary">Touch.</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-secondary-container pl-4">
          Available for backend engineering roles, collaboration opportunities,
          and interesting technical conversations. Don't hesitate to reach out.
        </p>
      </header>

      {/* ── Main Content Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

        {/* ── Left: Direct Channels (8-col) ── */}
        <section className="md:col-span-8 flex flex-col gap-6">

          {/* Email — Primary CTA */}
          <a
            href="mailto:admin@kirankatakam.me"
            className="group bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise corner-brackets relative flex items-center gap-6 hover:border-tertiary/50 transition-all duration-300"
          >
            <div className="w-14 h-14 flex items-center justify-center bg-primary-container border border-outline-variant rounded shrink-0 group-hover:bg-tertiary/10 transition-colors">
              <span className="material-symbols-outlined text-primary text-2xl group-hover:text-tertiary transition-colors">mail</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-label-pixel text-[10px] text-on-surface-variant tracking-widest mb-1">
                PRIMARY_CHANNEL
              </div>
              <div className="font-headline-md text-headline-md text-on-surface group-hover:text-tertiary transition-colors truncate">
                admin@kirankatakam.me
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-tertiary group-hover:translate-x-1 transition-all">
              arrow_outward
            </span>
          </a>

          {/* Social Grid — 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter">
            {[
              {
                label: "GitHub",
                handle: "@kiran-katakam",
                url: "https://github.com/kiran-katakam",
                icon: "code",
                desc: "Source code & contributions",
                accentBorder: "hover:border-primary/50",
              },
              {
                label: "LinkedIn",
                handle: "/in/kirankatakam",
                url: "https://www.linkedin.com/in/kirankatakam",
                icon: "work",
                desc: "Professional network",
                accentBorder: "hover:border-secondary-container/50",
              },
              {
                label: "Instagram",
                handle: "@kiran__katakam",
                url: "https://www.instagram.com/kiran__katakam/",
                icon: "photo_camera",
                desc: "Behind the screen",
                accentBorder: "hover:border-tertiary/50",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-surface-container border border-outline-variant p-5 dirt-texture flex items-start gap-4 transition-all duration-300 ${link.accentBorder}`}
              >
                <span className="material-symbols-outlined text-on-surface-variant text-xl group-hover:text-tertiary transition-colors mt-0.5">
                  {link.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="font-headline-md text-base text-on-surface group-hover:text-tertiary transition-colors">
                    {link.label}
                  </div>
                  <div className="font-code text-[11px] text-on-surface-variant mt-0.5 truncate">
                    {link.handle}
                  </div>
                  <div className="font-body-md text-sm text-on-surface-variant/60 mt-2">
                    {link.desc}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Right: Status Panel (4-col) ── */}
        <aside className="md:col-span-4 flex flex-col gap-6">

          {/* Availability Status */}
          <div className="bg-surface-container-high border border-outline-variant p-6 rounded dirt-texture shadow-hard-dark">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-tertiary">sensors</span>
              <h3 className="font-label-pixel text-label-pixel text-on-background tracking-widest">
                AVAILABILITY
              </h3>
            </div>
            <div className="flex flex-col gap-4 font-code text-code">
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Status</span>
                <span className="text-tertiary flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-tertiary rounded-full animate-pulse"></span>
                  OPEN
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Response</span>
                <span className="text-primary">&lt; 24h</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Timezone</span>
                <span className="text-on-surface">IST (UTC+5:30)</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-on-surface-variant">Preferred</span>
                <span className="text-tertiary">Email</span>
              </div>
            </div>
          </div>

          {/* Open To */}
          <div className="bg-surface-container border border-outline-variant p-6">
            <div className="flex items-center gap-2 mb-4 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-primary">handshake</span>
              <h3 className="font-label-pixel text-label-pixel text-on-background tracking-widest">
                OPEN_TO
              </h3>
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Backend Engineering Roles",
                "Full-Stack Collaborations",
                "Open Source Projects",
                "Freelance Opportunities",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 p-2 bg-surface-container-low border border-outline-variant/30 rounded font-body-md text-sm text-on-surface-variant"
                >
                  <span className="text-tertiary text-xs">&gt;&gt;</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
