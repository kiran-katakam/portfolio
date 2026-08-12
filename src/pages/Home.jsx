export default function Home() {
  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        {/* ── Left Column: Identity & Intro (Span 8) ── */}
        <div className="col-span-1 md:col-span-8 flex flex-col gap-12">
          <header className="flex flex-col gap-4">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant w-fit rounded">
              <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
              <span className="font-label-pixel text-label-pixel text-tertiary tracking-widest">
                SYSTEM_ONLINE
              </span>
            </div>

            {/* Name */}
            <h1 className="font-display-lg text-display-lg text-on-background m-0 p-0 leading-none">
              Dhanumjay
              <br />
              <span className="text-primary opacity-90">Kiran Katakam</span>
            </h1>

            {/* Tagline */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-4 border-l-2 border-secondary-container pl-4">
              Engineering high-performance infrastructure at the intersection of
              rigid system design and modular logic. Obsessed with low-latency
              execution and architectural precision.
            </p>
          </header>
        </div>

        {/* ── Right Column: Telemetry Panel (Span 4) ── */}
        <div className="col-span-1 md:col-span-4 corner-brackets relative group">
          <div className="bg-surface-container-high border border-outline-variant p-6 rounded dirt-texture h-full shadow-hard-red group-hover:shadow-hard-yellow transition-shadow duration-300">
            {/* Panel Header */}
            <div className="flex justify-between items-center mb-6 border-b border-dashed border-outline-variant pb-2">
              <h3 className="font-label-pixel text-label-pixel text-on-background tracking-widest">
                TELEMETRY DATA
              </h3>
              <span
                className="material-symbols-outlined text-secondary-container animate-spin"
                style={{ animationDuration: "4s" }}
              >
                radar
              </span>
            </div>

            <div className="flex flex-col gap-6">
              {/* Telemetry: Institution */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-code text-code text-on-surface-variant">
                    LOC.INSTITUTION
                  </span>
                  <span className="font-label-pixel text-label-pixel text-primary">
                    VIT-AP
                  </span>
                </div>
                <div className="bg-surface p-2 border border-outline-variant/50 rounded">
                  <div className="font-body-md text-body-md text-on-background">
                    Computer Science (4th Yr)
                  </div>
                </div>
              </div>

              {/* Telemetry: Focus */}
              <div>
                <div className="flex justify-between items-end mb-1">
                  <span className="font-code text-code text-on-surface-variant">
                    SYS.FOCUS
                  </span>
                  <span className="font-label-pixel text-label-pixel text-tertiary">
                    ACTIVE
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 bg-primary-container text-primary font-label-pixel text-[10px] rounded border border-primary/20">
                    Backend Arch
                  </span>
                  <span className="px-2 py-1 bg-surface-variant text-on-background font-label-pixel text-[10px] rounded border border-outline-variant">
                    Music Prod
                  </span>
                  <span className="px-2 py-1 bg-[#2C4123] text-[#71B555] font-label-pixel text-[10px] rounded border border-[#71B555]/30">
                    Minecraft Sys
                  </span>
                </div>
              </div>

              {/* Performance Meter */}
              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span className="font-code text-code text-on-surface-variant text-xs">
                    CPU.LOAD
                  </span>
                  <span className="font-code text-code text-secondary-container text-xs">
                    92%
                  </span>
                </div>
                <div className="flex h-4 w-full bg-surface border border-outline-variant p-0.5">
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled"></div>
                  <div className="progress-block filled danger"></div>
                  <div className="progress-block danger"></div>
                  <div className="progress-block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
