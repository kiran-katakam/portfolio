export default function About() {
  return (
    <div className="w-full">
      {/* ── Page Content Container ── */}
      <div className="max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 flex flex-col gap-16">

        {/* ════════════════════════════════════════════
            SECTION 1: Page Header
        ════════════════════════════════════════════ */}
        <header className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant w-fit rounded">
            <span className="material-symbols-outlined text-tertiary text-sm">person_pin</span>
            <span className="font-label-pixel text-label-pixel text-tertiary tracking-widest">
              SYSTEM_PROFILE
            </span>
          </div>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background uppercase">
            All About <span className="text-primary">Kiran.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-secondary-container pl-4">
            Backend-focused developer obsessed with system architecture, low-latency execution,
            and building infrastructure that scales. Currently pursuing Computer Science at VIT-AP University.
          </p>
        </header>

        {/* ════════════════════════════════════════════
            SECTION 2: Bento Grid — Core Identity + FAST_FETCH
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* ── Core Identity Card (8-col) ── */}
          <section className="md:col-span-8 bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise corner-brackets relative">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary-container">data_object</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                Core Identity
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Portrait Placeholder */}
              <div className="img-placeholder min-h-[280px] rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/40 to-surface-container"></div>
                <span className="font-label-pixel text-label-pixel text-outline z-10 relative">
                  [ PORTRAIT IMAGE ]
                </span>
              </div>
              {/* Obsessions List */}
              <div className="flex flex-col gap-4">
                <h3 className="font-label-pixel text-label-pixel text-tertiary tracking-widest uppercase">
                  Current Obsessions
                </h3>
                <ul className="flex flex-col gap-3">
                  {[
                    { icon: "hub", label: "Backend Architecture", desc: "Building scalable, fault-tolerant systems" },
                    { icon: "music_note", label: "Music Production", desc: "FL Studio, sound design & mixing" },
                    { icon: "sports_esports", label: "Minecraft Systems", desc: "Redstone engineering & server mods" },
                    { icon: "speed", label: "Formula 1", desc: "Data-driven race strategy & telemetry" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3 p-3 bg-surface border border-outline-variant/50 rounded group hover:border-tertiary/50 transition-colors">
                      <span className="material-symbols-outlined text-primary group-hover:text-tertiary transition-colors mt-0.5">{item.icon}</span>
                      <div>
                        <div className="font-body-md text-body-md text-on-surface font-semibold">{item.label}</div>
                        <div className="font-code text-code text-on-surface-variant text-xs mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── FAST_FETCH Card (4-col) ── */}
          <section className="md:col-span-4 bg-surface-container border border-outline-variant p-6 dirt-texture shadow-hard-dark">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-tertiary">terminal</span>
              <h2 className="font-label-pixel text-label-pixel text-on-surface tracking-widest">
                FAST_FETCH
              </h2>
            </div>
            <div className="flex flex-col gap-3 font-code text-code">
              {[
                { key: "OS", value: "Fedora 41", color: "text-primary" },
                { key: "Shell", value: "ZSH + Oh-My-Zsh", color: "text-tertiary" },
                { key: "DE", value: "Hyprland (WM)", color: "text-on-surface" },
                { key: "Editor", value: "VS Code + Vim", color: "text-secondary" },
                { key: "Terminal", value: "Kitty", color: "text-primary" },
                { key: "Browser", value: "Firefox / Brave", color: "text-on-surface" },
                { key: "DAW", value: "FL Studio 24", color: "text-tertiary" },
              ].map((row) => (
                <div key={row.key} className="flex justify-between items-center py-1 border-b border-outline-variant/30 last:border-b-0">
                  <span className="text-on-surface-variant">{row.key}</span>
                  <span className={row.color}>{row.value}</span>
                </div>
              ))}
            </div>
            {/* Mini system load bar */}
            <div className="mt-6 pt-4 border-t border-outline-variant">
              <div className="flex justify-between mb-1">
                <span className="font-label-pixel text-[10px] text-on-surface-variant">SYS.UPTIME</span>
                <span className="font-label-pixel text-[10px] text-tertiary">4+ YRS</span>
              </div>
              <div className="h-1 w-full bg-surface-container-highest rounded overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-primary to-tertiary rounded"></div>
              </div>
            </div>
          </section>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 3: Bento Grid — Timeline + Experience
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* ── Academic Timeline (6-col) ── */}
          <section className="md:col-span-6 bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-primary">school</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                Academic Timeline
              </h2>
            </div>
            <div className="flex flex-col gap-6 relative">
              {/* Vertical line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-outline-variant/50"></div>

              {[
                {
                  year: "2022 – Present",
                  title: "B.Tech Computer Science",
                  org: "VIT-AP University",
                  detail: "Focus: Backend Engineering, Data Structures, ML",
                  status: "ACTIVE",
                  statusColor: "text-tertiary",
                },
                {
                  year: "2020 – 2022",
                  title: "Intermediate (MPC)",
                  org: "Sri Chaitanya Junior College",
                  detail: "Mathematics, Physics, Chemistry",
                  status: "COMPLETED",
                  statusColor: "text-primary",
                },
                {
                  year: "2020",
                  title: "SSC (10th Grade)",
                  org: "Bhashyam Public School",
                  detail: "Foundation studies",
                  status: "COMPLETED",
                  statusColor: "text-primary",
                },
              ].map((entry, i) => (
                <div key={i} className="flex gap-4 items-start relative pl-6">
                  <div className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 z-10 ${i === 0 ? "bg-tertiary border-tertiary" : "bg-surface-container border-outline-variant"}`}></div>
                  <div className="flex-1 bg-surface border border-outline-variant/50 p-4 rounded">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-label-pixel text-[10px] text-on-surface-variant">{entry.year}</span>
                      <span className={`font-label-pixel text-[10px] ${entry.statusColor}`}>{entry.status}</span>
                    </div>
                    <h3 className="font-headline-md text-base text-on-surface font-semibold">{entry.title}</h3>
                    <p className="font-code text-code text-on-surface-variant text-xs mt-1">{entry.org}</p>
                    <p className="font-body-md text-sm text-on-surface-variant mt-2">{entry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Experience (6-col) ── */}
          <section className="md:col-span-6 bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary-container">work</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                Experience
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {/* Internship Card */}
              <div className="bg-surface border border-outline-variant p-5 rounded group hover:border-secondary-container/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-headline-md text-base text-on-surface font-semibold">Backend Developer Intern</h3>
                    <p className="font-code text-code text-primary text-xs mt-0.5">@ Remote Startup</p>
                  </div>
                  <span className="font-label-pixel text-[10px] text-tertiary px-2 py-1 bg-surface-container border border-outline-variant/30 rounded">
                    2024
                  </span>
                </div>
                <ul className="flex flex-col gap-2 mt-2">
                  {[
                    "Built RESTful APIs serving 10K+ requests/day",
                    "Designed database schemas for multi-tenant apps",
                    "Implemented JWT auth and role-based access control",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body-md text-sm text-on-surface-variant">
                      <span className="text-tertiary mt-0.5">&gt;&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Open Source Contributions */}
              <div className="bg-surface border border-outline-variant p-5 rounded group hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-headline-md text-base text-on-surface font-semibold">Open Source Contributor</h3>
                    <p className="font-code text-code text-tertiary text-xs mt-0.5">Various Projects</p>
                  </div>
                  <span className="font-label-pixel text-[10px] text-primary px-2 py-1 bg-surface-container border border-outline-variant/30 rounded">
                    ONGOING
                  </span>
                </div>
                <ul className="flex flex-col gap-2 mt-2">
                  {[
                    "Contributed to Flutter ecosystem packages",
                    "Bug fixes and feature PRs on GitHub",
                    "Active in developer communities",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 font-body-md text-sm text-on-surface-variant">
                      <span className="text-primary mt-0.5">&gt;&gt;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 4: Tech Stack (Full Width)
        ════════════════════════════════════════════ */}
        <section className="bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise corner-brackets relative">
          <div className="flex items-center gap-2 mb-8 border-b border-dashed border-outline-variant pb-2">
            <span className="material-symbols-outlined text-tertiary">code_blocks</span>
            <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
              Tech Stack
            </h2>
            <span className="font-label-pixel text-[10px] text-on-surface-variant ml-auto">
              PROFICIENCY_MATRIX
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Languages",
                color: "border-l-primary",
                items: ["Python", "JavaScript", "Dart", "Java", "SQL", "C++"],
              },
              {
                category: "Frameworks",
                color: "border-l-secondary-container",
                items: ["Node.js", "Express", "Flutter", "React", "Flask"],
              },
              {
                category: "Databases",
                color: "border-l-tertiary",
                items: ["Neo4j", "MongoDB", "SQLite", "PostgreSQL", "Hive"],
              },
              {
                category: "Tools & DevOps",
                color: "border-l-primary",
                items: ["Git", "Docker", "Linux (Fedora)", "VS Code", "Postman"],
              },
            ].map((group) => (
              <div key={group.category} className={`bg-surface border border-outline-variant/50 p-4 rounded border-l-4 ${group.color}`}>
                <h3 className="font-label-pixel text-label-pixel text-on-surface-variant uppercase tracking-widest mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 bg-surface-container border border-outline-variant/50 font-code text-[11px] text-on-surface rounded hover:border-tertiary/50 hover:text-tertiary transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 5: Bento Grid — Leadership + Future Roadmap
        ════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

          {/* ── Leadership (6-col) ── */}
          <section className="md:col-span-6 bg-surface-container border border-outline-variant p-6 md:p-8 dirt-texture">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-secondary-container">groups</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                Leadership
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                {
                  role: "Technical Lead",
                  org: "Google Developer Student Club",
                  desc: "Led workshops on web development and cloud technologies",
                  icon: "cloud",
                },
                {
                  role: "Core Member",
                  org: "CodeChef VIT-AP Chapter",
                  desc: "Organized competitive programming contests and coding bootcamps",
                  icon: "emoji_events",
                },
                {
                  role: "Event Coordinator",
                  org: "IEEE Student Branch",
                  desc: "Planned and executed tech symposiums and hackathons",
                  icon: "calendar_month",
                },
              ].map((item) => (
                <div key={item.role} className="flex items-start gap-3 p-3 bg-surface-container-low border border-outline-variant/50 rounded">
                  <span className="material-symbols-outlined text-primary mt-0.5">{item.icon}</span>
                  <div>
                    <div className="font-body-md text-body-md text-on-surface font-semibold">{item.role}</div>
                    <div className="font-code text-code text-tertiary text-xs">{item.org}</div>
                    <div className="font-body-md text-sm text-on-surface-variant mt-1">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Future Roadmap (6-col) ── */}
          <section className="md:col-span-6 bg-surface-container border border-outline-variant p-6 md:p-8 dirt-texture shadow-hard-muted">
            <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
              <span className="material-symbols-outlined text-tertiary">rocket_launch</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">
                Future Roadmap
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Current exploration vectors and areas of active research.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Distributed Systems", color: "bg-primary-container border-primary text-primary" },
                { label: "Kubernetes", color: "bg-surface border-outline-variant text-on-surface" },
                { label: "System Design", color: "bg-surface border-tertiary/30 text-tertiary" },
                { label: "gRPC & Protobuf", color: "bg-surface border-outline-variant text-on-surface" },
                { label: "Rust", color: "bg-surface border-secondary-container/30 text-secondary" },
                { label: "Event Sourcing", color: "bg-surface border-outline-variant text-on-surface" },
                { label: "CI/CD Pipelines", color: "bg-primary-container border-primary text-primary" },
                { label: "Cloud Architecture", color: "bg-surface border-tertiary/30 text-tertiary" },
              ].map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1.5 rounded font-label-pixel text-label-pixel border ${tag.color} hover:scale-105 transition-transform cursor-default`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ════════════════════════════════════════════
            SECTION 6: Passion — F1 (Full Bleed)
        ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border border-outline-variant rounded">
          {/* Background placeholder */}
          <div className="img-placeholder min-h-[300px] md:min-h-[400px]">
            <span className="font-label-pixel text-label-pixel text-outline z-10">
              [ F1 HERO IMAGE ]
            </span>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-layout mx-auto">
              <span className="font-label-pixel text-label-pixel text-secondary-container tracking-widest uppercase mb-2 block">
                OFF_TRACK // PASSION
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-3">
                Max Verstappen &amp; the Art of Precision
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Formula 1 isn't just a sport — it's a masterclass in real-time data engineering.
                Every lap generates gigabytes of telemetry. The driver who processes that feedback
                loop the fastest wins. That's exactly the kind of systems-thinking that drives my code.
              </p>
            </div>
          </div>
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline pointer-events-none"></div>
        </section>

        {/* ════════════════════════════════════════════
            SECTION 7: Passion — Minecraft (Full Bleed)
        ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden border border-outline-variant rounded">
          {/* Background placeholder */}
          <div className="img-placeholder min-h-[300px] md:min-h-[400px]">
            <span className="font-label-pixel text-label-pixel text-outline z-10">
              [ MINECRAFT LANDSCAPE IMAGE ]
            </span>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
          {/* Content overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="max-w-layout mx-auto">
              <span className="font-label-pixel text-label-pixel text-[#71B555] tracking-widest uppercase mb-2 block">
                OFF_TRACK // PASSION
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface uppercase mb-3">
                Minecraft &amp; Computational Thinking
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                Before I wrote my first line of Python, I was building ALUs in Minecraft redstone.
                The game's constraint-based engineering — limited resources, physics quirks,
                emergent complexity — mirrors the exact kind of problem-solving required in backend systems.
              </p>
            </div>
          </div>
          {/* Scanline overlay */}
          <div className="absolute inset-0 scanline pointer-events-none"></div>
        </section>

      </div>
    </div>
  );
}
