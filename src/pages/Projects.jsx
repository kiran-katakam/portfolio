import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const projects = [
  {
    slug: "cinegraph",
    title: "Cinegraph",
    subtitle: "Movie Recommendation Engine",
    description:
      "Graph-based recommendation system powered by Neo4j. Leverages collaborative filtering and genre-relationship traversal to surface hyper-relevant suggestions from complex cinematic networks.",
    status: "DEPLOYED",
    statusColor: "text-tertiary bg-surface-container",
    featured: true,
    tags: ["Node.js", "Neo4j", "React", "Express"],
    primaryTag: { label: "Graph DB", color: "bg-primary-container border-primary text-primary" },
    metric: {
      type: "progress",
      label: "BUILD_PROGRESS",
      value: 85,
    },
    icon: "movie_filter",
    iconColor: "text-tertiary",
  },
  {
    slug: "infinity",
    title: "Infinity",
    subtitle: "Wi-Fi Auth Utility",
    description:
      "Android app automating captive portal logins by reverse-engineering client-side auth workflows. Widely adopted across campus.",
    status: "SHIPPED",
    statusColor: "text-primary bg-surface-container",
    featured: false,
    tags: ["Flutter", "Dart"],
    primaryTag: { label: "Mobile", color: "bg-primary-container border-primary text-primary" },
    metric: {
      type: "stat",
      label: "ACTIVE_USERS",
      value: "1K+",
    },
    icon: "wifi",
    iconColor: "text-primary",
  },
  {
    slug: "water-scarcity-ews",
    title: "Water Scarcity EWS",
    subtitle: "Early Warning System",
    description:
      "Predictive system for 13 AP districts, processing 15 years of telemetry via K-Means clustering and Random Forest to forecast scarcity events.",
    status: "ACTIVE",
    statusColor: "text-secondary-container bg-surface-container",
    featured: false,
    tags: ["Python", "Pandas", "Scikit-learn", "SQLite"],
    primaryTag: null,
    metric: {
      type: "accuracy",
      label: "MODEL_ACC",
      value: "94.2%",
    },
    icon: "water_drop",
    iconColor: "text-secondary-container",
  },
  {
    slug: "todo-app",
    title: "To-Do App",
    subtitle: "Academic Task Manager",
    description:
      "Flutter-based task manager with strict academic/personal segmentation. Built in a 10-day rapid sprint with Hive local-first storage.",
    status: "SHIPPED",
    statusColor: "text-tertiary bg-surface-container",
    featured: false,
    tags: ["Flutter", "Dart", "Hive"],
    primaryTag: { label: "Mobile", color: "bg-primary-container border-primary text-primary" },
    metric: {
      type: "stat",
      label: "DEV_TIME",
      value: "10 DAYS",
    },
    icon: "check_circle",
    iconColor: "text-tertiary",
  },
  {
    slug: "cdc-cracker",
    title: "CDC Cracker",
    subtitle: "Course Assistant",
    description:
      "Organizes VIT-AP course and assessment data via custom interfaces and REST APIs. Robust backend with intelligent data extraction.",
    status: "ACTIVE",
    statusColor: "text-primary bg-surface-container",
    featured: false,
    tags: ["Node.js", "REST APIs", "JavaScript"],
    primaryTag: { label: "AI Frontend", color: "bg-surface border-secondary-container text-secondary-container" },
    metric: {
      type: "command",
      label: "RUN_CMD",
      value: "$ node cdc-cracker --parse",
    },
    icon: "terminal",
    iconColor: "text-secondary-container",
  },
];

function ProgressBar({ value }) {
  const blocks = 10;
  const filled = Math.round((value / 100) * blocks);
  return (
    <div className="flex h-3 w-full bg-surface border border-outline-variant/50 p-0.5 gap-0.5">
      {Array.from({ length: blocks }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 ${
            i < filled
              ? i >= blocks - 2
                ? "bg-secondary-container"
                : "bg-primary"
              : "bg-surface-container-highest"
          }`}
        />
      ))}
    </div>
  );
}

function MetricDisplay({ metric }) {
  if (metric.type === "progress") {
    return (
      <div>
        <div className="flex justify-between mb-1">
          <span className="font-label-pixel text-[10px] text-on-surface-variant">
            {metric.label}
          </span>
          <span className="font-label-pixel text-[10px] text-primary">
            {metric.value}%
          </span>
        </div>
        <ProgressBar value={metric.value} />
      </div>
    );
  }
  if (metric.type === "accuracy") {
    return (
      <div className="flex justify-between items-center p-2 bg-surface border border-outline-variant/50 rounded">
        <span className="font-label-pixel text-[10px] text-on-surface-variant">
          {metric.label}
        </span>
        <span className="font-label-pixel text-label-pixel text-tertiary">
          {metric.value}
        </span>
      </div>
    );
  }
  if (metric.type === "command") {
    return (
      <div className="p-2 bg-surface border border-outline-variant/50 rounded font-code text-[11px] text-on-surface-variant overflow-hidden">
        <span className="text-tertiary">$</span>{" "}
        {metric.value.replace("$ ", "")}
      </div>
    );
  }
  // stat
  return (
    <div className="flex justify-between items-center p-2 bg-surface border border-outline-variant/50 rounded">
      <span className="font-label-pixel text-[10px] text-on-surface-variant">
        {metric.label}
      </span>
      <span className="font-label-pixel text-label-pixel text-primary">
        {metric.value}
      </span>
    </div>
  );
}

function ProjectCard({ project }) {
  const isFeatured = project.featured;

  return (
    <Link
      to={`/projects/${project.slug}`}
      className={`group relative flex flex-col bg-card-navy border border-outline-variant dirt-texture rounded overflow-hidden transition-all duration-300 card-hover-lift ${
        isFeatured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Corner brackets */}
      <div className="corner-brackets absolute inset-0 pointer-events-none corner-brackets-yellow"></div>

      {/* Featured image placeholder */}
      {isFeatured && (
        <div className="img-placeholder min-h-[200px] md:min-h-[240px] border-b border-outline-variant/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/30 to-transparent"></div>
          <span className="font-label-pixel text-label-pixel text-outline z-10 relative">
            [ PROJECT HERO IMAGE ]
          </span>
          {/* Status badge overlay */}
          <div className="absolute top-3 left-3 z-10">
            <span className={`font-label-pixel text-[10px] px-2 py-1 rounded border border-outline-variant/30 ${project.statusColor}`}>
              {project.status}
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="flex flex-col gap-4 p-5 md:p-6 flex-grow">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className={`material-symbols-outlined ${project.iconColor} text-2xl`}>
              {project.icon}
            </span>
            <div>
              <h3 className="font-headline-md text-headline-md text-base text-on-surface group-hover:text-tertiary transition-colors">
                {project.title}
              </h3>
              <p className="font-code text-[11px] text-on-surface-variant mt-0.5">
                {project.subtitle}
              </p>
            </div>
          </div>
          {!isFeatured && (
            <span className={`font-label-pixel text-[10px] px-2 py-1 rounded border border-outline-variant/30 whitespace-nowrap ${project.statusColor}`}>
              {project.status}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-surface-container-high border border-outline-variant font-label-pixel text-[10px] text-on-surface rounded"
            >
              {tag}
            </span>
          ))}
          {project.primaryTag && (
            <span
              className={`px-2 py-0.5 border font-label-pixel text-[10px] rounded flex items-center gap-1 ${project.primaryTag.color}`}
            >
              {project.primaryTag.label}
              <span className="material-symbols-outlined text-[10px]">
                auto_awesome
              </span>
            </span>
          )}
        </div>

        {/* Metric / Bottom Section */}
        <div className="pt-3 border-t border-outline-variant/30 mt-auto">
          <MetricDisplay metric={project.metric} />
        </div>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="material-symbols-outlined text-tertiary text-lg">
          arrow_outward
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="w-full max-w-layout mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24 flex flex-col gap-12">
      <Helmet>
        <title>Projects | Kiran</title>
        <meta name="description" content="A curated archive of engineering projects spanning backend systems, mobile applications, data pipelines, and developer tools." />
      </Helmet>
      {/* ── Section Header ── */}
      <header className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container border border-outline-variant w-fit rounded">
          <span className="material-symbols-outlined text-tertiary text-sm">
            folder_special
          </span>
          <span className="font-label-pixel text-label-pixel text-tertiary tracking-widest">
            SYSTEM_PROJECTS
          </span>
        </div>
        <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-on-background uppercase">
          Projects <span className="text-primary">Archive</span>
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl border-l-2 border-secondary-container pl-4">
          A curated selection of engineering projects spanning backend systems,
          mobile applications, data pipelines, and developer tools.
        </p>
      </header>

      {/* ── Projects Bento Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-auto">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
