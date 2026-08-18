import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";

/* ═══════════════════════════════════════════
   Section Renderers
═══════════════════════════════════════════ */

function StatsSection({ content, title, icon, iconColor }) {
  return (
    <div className="bg-surface-container border border-outline-variant p-6 dirt-texture shadow-hard-dark h-full flex flex-col">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          {icon && <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>}
          <h3 className="font-label-pixel text-label-pixel text-on-surface tracking-widest">{title}</h3>
        </div>
      )}
      <div className="flex flex-col gap-3 flex-grow">
        {content.rows.map((row) => (
          <div key={row.key} className={`flex justify-between items-center p-3 bg-surface border border-outline-variant/50 rounded ${row.borderColor ? `border-l-4 ${row.borderColor}` : ""}`}>
            <span className="font-code text-code text-on-surface-variant text-xs">{row.key}</span>
            <span className={`font-label-pixel text-label-pixel ${row.color}`}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiagramSection({ content, title, icon, iconColor }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise h-full flex flex-col">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          {icon && <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>}
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{title}</h3>
        </div>
      )}
      <div className="img-placeholder min-h-[280px] md:min-h-[340px] rounded relative overflow-hidden flex-grow">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent"></div>
        <span className="font-label-pixel text-label-pixel text-outline z-10 relative">
          {content.placeholderLabel}
        </span>
        {content.overlayText && (
          <div className="absolute bottom-4 left-4 font-code text-[11px] text-tertiary-fixed opacity-70 z-10">
            {content.overlayText}
          </div>
        )}
      </div>
    </div>
  );
}

function CodeSection({ content, title }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant overflow-hidden h-full flex flex-col">
      {/* File tab bar */}
      <div className="flex items-center gap-3 px-4 py-2 bg-surface-container border-b border-outline-variant">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-primary/60"></span>
          <span className="w-3 h-3 rounded-full bg-tertiary/60"></span>
          <span className="w-3 h-3 rounded-full bg-secondary-container/60"></span>
        </div>
        <span className="font-code text-[11px] text-on-surface-variant">{content.filename}</span>
      </div>
      {/* Code content */}
      <div className="p-5 md:p-6 overflow-x-auto flex-grow">
        {title && (
          <div className="flex items-center gap-2 mb-4 border-b border-dashed border-outline-variant pb-2">
            <span className="material-symbols-outlined text-tertiary-fixed">code</span>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{title}</h3>
          </div>
        )}
        <pre className="font-code text-code text-sm leading-relaxed whitespace-pre text-on-surface-variant">
          <code>{content.code}</code>
        </pre>
      </div>
    </div>
  );
}

function RoleStackSection({ content }) {
  const { role, stack } = content;
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Role */}
      <div className="bg-surface-container border border-outline-variant p-5 rounded flex-grow">
        <div className="flex items-center gap-2 mb-4 border-b border-dashed border-outline-variant pb-2">
          <span className={`material-symbols-outlined ${role.iconColor}`}>{role.icon}</span>
          <h3 className="font-label-pixel text-label-pixel text-on-surface tracking-widest">{role.title}</h3>
        </div>
        <ul className="flex flex-col gap-2">
          {role.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 p-2 bg-surface border border-outline-variant/50 rounded">
              {role.itemIcons ? (
                <span className="material-symbols-outlined text-secondary-container text-lg mt-0.5">{role.itemIcons[i]}</span>
              ) : (
                <span className="text-tertiary mt-0.5">&gt;&gt;</span>
              )}
              <div>
                <div className="font-body-md text-sm text-on-surface">{item}</div>
                {role.itemDescriptions && (
                  <div className="font-code text-[11px] text-on-surface-variant mt-0.5">{role.itemDescriptions[i]}</div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Stack */}
      <div className="bg-surface-container border border-outline-variant p-5 rounded">
        <div className="flex items-center gap-2 mb-4 border-b border-dashed border-outline-variant pb-2">
          <span className="material-symbols-outlined text-tertiary-fixed">{stack.icon}</span>
          <h3 className="font-label-pixel text-label-pixel text-on-surface tracking-widest">{stack.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.items.map((item) => (
            <span
              key={item.label}
              className={`px-2 py-1 rounded font-label-pixel text-[10px] border ${
                item.primary
                  ? "bg-primary-container border-primary text-primary"
                  : "bg-surface border-outline-variant text-on-surface"
              }`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FindingSection({ content, title, icon, iconColor }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise h-full flex flex-col corner-brackets relative">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          {icon && <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>}
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{title}</h3>
        </div>
      )}
      <div className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed flex-grow flex items-center">
        <p>
          {content.highlightParts
            ? content.highlightParts.map((part, i) =>
                part.type === "highlight" ? (
                  <span
                    key={i}
                    className={`${part.color} bg-surface-container-highest px-2 py-0.5 mx-1 rounded border border-outline-variant`}
                  >
                    {part.text}
                  </span>
                ) : (
                  <span key={i}>{part.text}</span>
                )
              )
            : content.text}
        </p>
      </div>
    </div>
  );
}

function OverviewSection({ content, title, icon, iconColor }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise h-full flex flex-col corner-brackets relative">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          {icon && <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>}
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{title}</h3>
        </div>
      )}
      <div className="flex flex-col gap-4 flex-grow">
        {content.paragraphs.map((p, i) => (
          <p key={i} className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{p}</p>
        ))}
      </div>
      {content.bottomStats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-4 border-t border-outline-variant">
          {content.bottomStats.map((stat) => (
            <div key={stat.label} className="bg-surface border border-outline-variant/50 p-3 rounded">
              <div className="font-label-pixel text-[10px] text-on-surface-variant mb-1">{stat.label}</div>
              <div className={`font-body-md text-sm font-semibold ${stat.color}`}>{stat.value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function VelocitySection({ content, title, icon, iconColor }) {
  return (
    <div className="bg-surface-container border border-outline-variant p-6 dirt-texture shadow-hard-muted h-full flex flex-col relative overflow-hidden">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          {icon && <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>}
          <h3 className="font-label-pixel text-label-pixel text-on-surface tracking-widest">{title}</h3>
        </div>
      )}
      <div className="flex flex-col gap-4 flex-grow">
        {content.highlights.map((h, i) => (
          <div key={i} className={`p-4 bg-surface-container-low border border-outline-variant/50 rounded border-l-4 ${h.color}`}>
            <h4 className="font-body-md text-body-md text-on-surface font-semibold mb-1">{h.title}</h4>
            <p className="font-code text-[11px] text-on-surface-variant">{h.desc}</p>
          </div>
        ))}
      </div>
      {/* Large watermark icon */}
      {content.bgIcon && (
        <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-[120px] text-outline-variant/10 pointer-events-none">
          {content.bgIcon}
        </span>
      )}
    </div>
  );
}

function ArchitectureSection({ content, title, icon, iconColor }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant p-6 md:p-8 pixel-noise h-full flex flex-col">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          {icon && <span className={`material-symbols-outlined ${iconColor}`}>{icon}</span>}
          <h3 className="font-headline-md text-headline-md text-on-surface uppercase">{title}</h3>
        </div>
      )}
      <p className="font-body-md text-body-md text-on-surface-variant mb-6">{content.intro}</p>
      <div className="flex flex-col gap-4 flex-grow">
        {content.features.map((f, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-surface border border-outline-variant/50 rounded">
            <span className={`material-symbols-outlined ${f.iconColor} mt-0.5`}>{f.icon}</span>
            <div>
              <span className={`font-body-md text-sm font-semibold ${f.titleColor}`}>{f.title}</span>{" "}
              <span className="font-body-md text-sm text-on-surface-variant">{f.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileMockupSection() {
  return (
    <div className="bg-surface-container border border-outline-variant p-6 dirt-texture shadow-hard-red h-full flex flex-col items-center justify-center relative overflow-hidden corner-brackets">
      <div className="w-48 h-80 bg-surface-container-low border-2 border-outline-variant rounded-xl flex flex-col items-center justify-center relative">
        {/* Phone frame */}
        <div className="absolute top-2 w-16 h-1 bg-outline-variant rounded"></div>
        <span className="font-label-pixel text-[10px] text-outline text-center">
          [ APP SCREENSHOT ]
        </span>
      </div>
      <span className="font-label-pixel text-[10px] text-on-surface-variant mt-4 tracking-widest">
        MOBILE_PREVIEW
      </span>
    </div>
  );
}

function CapabilitiesSection({ content, title }) {
  return (
    <div className="bg-surface-container border border-outline-variant p-6 dirt-texture shadow-hard-dark h-full flex flex-col">
      {title && (
        <div className="flex items-center gap-2 mb-6 border-b border-dashed border-outline-variant pb-2">
          <span className="material-symbols-outlined text-tertiary">star</span>
          <h3 className="font-label-pixel text-label-pixel text-on-surface tracking-widest">{title}</h3>
        </div>
      )}
      <div className="flex flex-col gap-4 flex-grow">
        {content.items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 p-3 bg-surface-container-low border border-outline-variant/50 rounded group hover:border-tertiary/30 transition-colors">
            <span className="material-symbols-outlined text-primary group-hover:text-tertiary transition-colors mt-0.5">{item.icon}</span>
            <div>
              <div className="font-body-md text-body-md text-on-surface font-semibold">{item.title}</div>
              <div className="font-code text-[11px] text-on-surface-variant mt-0.5">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesGrid({ title, items }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      {items.map((item, i) => (
        <div key={i} className="bg-surface-container border border-outline-variant p-6 rounded dirt-texture group hover:border-tertiary/30 transition-colors">
          <span className="material-symbols-outlined text-secondary-container text-3xl mb-4 block group-hover:text-tertiary transition-colors">
            {item.icon}
          </span>
          <h3 className="font-headline-md text-base text-on-surface font-semibold mb-2">{item.title}</h3>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ═══════════════════════════════════════════
   Section Router — maps variant → renderer
═══════════════════════════════════════════ */
function renderSection(item) {
  const props = { content: item.content, title: item.title, icon: item.icon, iconColor: item.iconColor };
  switch (item.variant) {
    case "stats": return <StatsSection {...props} />;
    case "diagram": return <DiagramSection {...props} />;
    case "code": return <CodeSection {...props} />;
    case "role-stack": return <RoleStackSection {...props} />;
    case "finding": return <FindingSection {...props} />;
    case "overview": return <OverviewSection {...props} />;
    case "velocity": return <VelocitySection {...props} />;
    case "architecture": return <ArchitectureSection {...props} />;
    case "mobile-mockup": return <MobileMockupSection />;
    case "capabilities": return <CapabilitiesSection {...props} />;
    default: return null;
  }
}

/* ═══════════════════════════════════════════
   Main Component
═══════════════════════════════════════════ */
export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-24 text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-4 block">error</span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-4">PROJECT_NOT_FOUND</h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          The requested project does not exist in the system registry.
        </p>
        <Link to="/projects" className="font-label-pixel text-label-pixel text-tertiary hover:text-on-background transition-colors">
          &lt;&lt; RETURN_TO_ARCHIVE
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 flex flex-col gap-12">

      {/* ── Back Link ── */}
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 font-label-pixel text-label-pixel text-on-surface-variant hover:text-tertiary transition-colors w-fit group"
      >
        <span className="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
        BACK_TO_ARCHIVE
      </Link>

      {/* ── Hero Header ── */}
      <header className="flex flex-col gap-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-3">
          {project.statusBadge && (
            <span className={`font-label-pixel text-label-pixel px-3 py-1 rounded border border-outline-variant/30 inline-flex items-center gap-1.5 ${project.statusBadge.color}`}>
              {project.statusBadge.icon && (
                <span className="material-symbols-outlined text-sm">{project.statusBadge.icon}</span>
              )}
              {project.statusBadge.label}
            </span>
          )}
          {project.typeBadge && !project.typeBadge.plain && (
            <span className={`font-label-pixel text-label-pixel px-3 py-1 rounded border border-outline-variant/30 inline-flex items-center gap-1.5 ${project.typeBadge.color}`}>
              {project.typeBadge.icon && (
                <span className="material-symbols-outlined text-sm">{project.typeBadge.icon}</span>
              )}
              {project.typeBadge.label}
            </span>
          )}
          {project.typeBadge?.plain && (
            <span className={`font-label-pixel text-label-pixel ${project.typeBadge.color}`}>
              {project.typeBadge.label}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background leading-tight">
          {project.heroTitleHighlight
            ? <>
                {project.heroTitle.replace(project.heroTitleHighlight, "")}
                <span className="text-tertiary-fixed">{project.heroTitleHighlight}</span>
              </>
            : project.heroTitle}
          {project.heroSubTitle && (
            <>
              <br />
              <span className="text-surface-variant">{project.heroSubTitle}</span>
            </>
          )}
        </h1>

        {/* Subtitle + Description */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl border-l-2 border-secondary-container pl-4">
          {project.description}
        </p>

        {/* Hero Meta (if any) */}
        {project.heroMeta?.rows && (
          <div className="flex flex-wrap gap-4 mt-2">
            {project.heroMeta.rows.map((row) => (
              <div key={row.key} className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant/50 rounded">
                <span className="font-label-pixel text-[10px] text-on-surface-variant">{row.key}</span>
                <span className={`font-label-pixel text-label-pixel ${row.valueColor} ${row.valueFont || ""}`}>{row.value}</span>
              </div>
            ))}
          </div>
        )}
        {project.heroMeta?.cards && (
          <div className="flex flex-wrap gap-4 mt-2">
            {project.heroMeta.cards.map((card) => (
              <div key={card.label} className="flex items-center gap-2 p-2 bg-surface-container border border-outline-variant/50 rounded">
                <span className="font-label-pixel text-[10px] text-on-surface-variant">{card.label}</span>
                <span className="font-label-pixel text-label-pixel text-on-surface">{card.value}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ── Content Sections ── */}
      {project.sections.map((section, idx) => {
        if (section.type === "bento-row") {
          return (
            <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              {section.items.map((item, i) => (
                <div key={i} className={`md:col-span-${item.colSpan}`}>
                  {renderSection(item)}
                </div>
              ))}
            </div>
          );
        }
        if (section.type === "section-header") {
          return (
            <div key={idx} className="flex items-center gap-2 border-b border-dashed border-outline-variant pb-2">
              <span className={`material-symbols-outlined ${section.iconColor}`}>{section.icon}</span>
              <h2 className="font-headline-md text-headline-md text-on-surface uppercase">{section.title}</h2>
            </div>
          );
        }
        if (section.type === "features") {
          return <FeaturesGrid key={idx} title={section.title} items={section.items} />;
        }
        return null;
      })}

    </div>
  );
}
