export const projectsData = {
  cinegraph: {
    title: "Cinegraph",
    subtitle: "Movie Recommendation Engine",
    statusBadge: { label: "STATUS: DEPLOYED", color: "bg-primary-container text-on-primary-container" },
    typeBadge: { label: "GRAPH_DB", color: "bg-surface-container-highest text-tertiary-fixed" },
    description:
      "A graph-powered movie recommendation engine leveraging Neo4j's native graph traversal. The system models complex cinematic relationships — actors, directors, genres, and user ratings — as a rich knowledge graph, enabling deep collaborative filtering that outperforms traditional relational approaches.",
    heroTitle: "Cinegraph",
    heroTitleHighlight: "graph",
    sections: [
      {
        type: "bento-row",
        items: [
          {
            colSpan: 8,
            icon: "hub",
            iconColor: "text-tertiary-fixed",
            title: "Architecture Overview",
            variant: "diagram",
            content: {
              placeholderLabel: "[ GRAPH ARCHITECTURE DIAGRAM ]",
              overlayText: "> RENDERING GRAPH_SCHEMA... OK",
            },
          },
          {
            colSpan: 4,
            icon: "database",
            iconColor: "text-secondary-container",
            title: "System Metrics",
            variant: "stats",
            content: {
              rows: [
                { key: "DB_ENGINE", value: "Neo4j 5.x", color: "text-primary", borderColor: "border-l-primary" },
                { key: "NODE_COUNT", value: "50K+", color: "text-tertiary-fixed", borderColor: "border-l-tertiary-fixed" },
                { key: "REL_TYPES", value: "ACTED_IN, DIRECTED, RATED", color: "text-secondary-container", borderColor: "border-l-secondary-container" },
                { key: "API_LAYER", value: "Express/REST", color: "text-on-surface", borderColor: "" },
              ],
            },
          },
        ],
      },
      {
        type: "bento-row",
        items: [
          {
            colSpan: 7,
            icon: "code",
            iconColor: "text-tertiary-fixed",
            title: "Cypher Query Engine",
            variant: "code",
            content: {
              filename: "queries/recommendations.cypher",
              language: "cypher",
              code: `MATCH (u:User {id: $userId})-[r:RATED]->(m:Movie)
WHERE r.rating >= 4.0
WITH u, collect(m) AS likedMovies
UNWIND likedMovies AS movie
MATCH (movie)<-[:RATED]-(other:User)-[r2:RATED]->(rec:Movie)
WHERE NOT rec IN likedMovies
  AND r2.rating >= 4.0
WITH rec, count(DISTINCT other) AS score,
     avg(r2.rating) AS avgRating
RETURN rec.title, rec.year, score, avgRating
ORDER BY score DESC, avgRating DESC
LIMIT 20`,
            },
          },
          {
            colSpan: 5,
            title: null,
            variant: "role-stack",
            content: {
              role: {
                icon: "engineering",
                iconColor: "text-primary",
                title: "Execution Role",
                items: [
                  "Full-Stack Architecture",
                  "Graph Data Modeling",
                  "Recommendation Algorithm Design",
                  "REST API Development",
                ],
              },
              stack: {
                icon: "code_blocks",
                title: "Tech Stack",
                items: [
                  { label: "Node.js", primary: false },
                  { label: "Neo4j", primary: false },
                  { label: "Express", primary: false },
                  { label: "React", primary: false },
                  { label: "Cypher", primary: false },
                  { label: "REST API", primary: true },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  "water-scarcity-ews": {
    title: "Agricultural Water Scarcity EWS",
    subtitle: "Early Warning System",
    statusBadge: { label: "STATUS: ACTIVE_DEPLOYMENT", color: "bg-primary-container text-on-primary-container" },
    typeBadge: { label: "EWS_SYSTEM", color: "bg-surface-container-highest text-tertiary-fixed", icon: "warning" },
    description:
      "Early Warning System for 13 Andhra Pradesh districts. A robust, data-driven architecture processing 15 years of historical telemetry to predict scarcity events before they hit critical thresholds.",
    heroTitle: "Agricultural Water Scarcity EWS",
    heroTitleHighlight: "EWS",
    sections: [
      {
        type: "bento-row",
        items: [
          {
            colSpan: 8,
            icon: "insights",
            iconColor: "text-tertiary-fixed",
            title: "Core Finding",
            variant: "finding",
            content: {
              highlightParts: [
                { text: "Analysis demonstrated that ", type: "normal" },
                { text: "Infrastructure Health", type: "highlight", color: "text-secondary-container" },
                { text: " is a stronger predictor of imminent scarcity than raw ", type: "normal" },
                { text: "Rainfall Data", type: "highlight", color: "text-primary" },
                { text: " alone.", type: "normal" },
              ],
            },
          },
          {
            colSpan: 4,
            icon: "database",
            iconColor: "text-secondary-container",
            title: "Telemetry",
            variant: "stats",
            content: {
              rows: [
                { key: "DATA_VOLUME", value: "190K+ REC", color: "text-tertiary-fixed", borderColor: "border-l-tertiary-fixed" },
                { key: "MODEL_1", value: "K-MEANS", color: "text-primary", borderColor: "border-l-primary" },
                { key: "MODEL_2", value: "RND_FOREST", color: "text-secondary-container", borderColor: "border-l-secondary-container" },
                { key: "TECHNIQUE", value: "ANOMALY_DET", color: "text-on-surface", borderColor: "" },
              ],
            },
          },
        ],
      },
      {
        type: "bento-row",
        items: [
          {
            colSpan: 7,
            icon: null,
            title: null,
            variant: "diagram",
            content: {
              placeholderLabel: "[ STAR SCHEMA ARCHITECTURE DIAGRAM ]",
              overlayText: "> RENDERING STAR_SCHEMA... OK",
            },
          },
          {
            colSpan: 5,
            title: null,
            variant: "role-stack",
            content: {
              role: {
                icon: "engineering",
                iconColor: "text-primary",
                title: "Execution Role",
                items: [
                  "Data Engineering & ETL Pipelines",
                  "Star Schema Warehouse Design",
                  "OLAP Cubes Construction",
                  "Predictive Model Analysis",
                ],
              },
              stack: {
                icon: "code_blocks",
                title: "Tech Stack",
                items: [
                  { label: "Python", primary: false },
                  { label: "Pandas", primary: false },
                  { label: "SQLite", primary: false },
                  { label: "Scikit-learn", primary: false },
                  { label: "React/Vite", primary: true },
                ],
              },
            },
          },
        ],
      },
    ],
  },

  "todo-app": {
    title: "To-Do App",
    subtitle: "Academic & Personal Task Manager",
    statusBadge: { label: "SHIPPED // 10-DAY SPRINT", color: "bg-secondary-container text-white", icon: "verified" },
    typeBadge: null,
    description:
      "Academic & Personal Task Manager. A high-performance utility designed for rigorous workflow segmentation.",
    heroTitle: "To-Do App",
    heroMeta: {
      rows: [
        { key: "ROLE", value: "Full-stack Mobile", valueColor: "text-tertiary" },
        { key: "STATUS", value: "Deployed", valueColor: "text-secondary-container" },
        { key: "SYS_ID", value: "TDA-892.4", valueColor: "text-primary", valueFont: "font-code text-code" },
      ],
    },
    sections: [
      {
        type: "bento-row",
        items: [
          {
            colSpan: 8,
            icon: "data_object",
            iconColor: "text-tertiary",
            title: "System Overview",
            variant: "overview",
            content: {
              paragraphs: [
                "A dedicated Flutter-based task management application architected around a custom academic workflow. The core proposition is strict logical separation of academic and personal tasks, addressing the common failure points of generic to-do lists for students.",
                "Features specialized data models including mandatory fields for course_codes and hard deadlines, ensuring critical path items are never obfuscated by routine daily tasks.",
              ],
              bottomStats: [
                { label: "Core Tech", value: "Flutter / Dart", color: "text-primary" },
                { label: "Database", value: "Hive Local", color: "text-tertiary-fixed" },
                { label: "Architecture", value: "MVVM", color: "text-on-surface" },
                { label: "Design", value: "Custom UI/UX", color: "text-secondary-container" },
              ],
            },
          },
          {
            colSpan: 4,
            icon: "military_tech",
            iconColor: "text-secondary-container",
            title: "Execution Velocity",
            variant: "velocity",
            content: {
              highlights: [
                { title: "10-Day Rapid Dev", desc: "Concept to functional deployment in a highly compressed timeframe.", color: "border-tertiary-fixed" },
                { title: "End-to-End Delivery", desc: "Independent execution covering requirements gathering, UI design, and technical implementation.", color: "border-secondary-container" },
              ],
              bgIcon: "speed",
            },
          },
        ],
      },
      {
        type: "bento-row",
        items: [
          {
            colSpan: 6,
            icon: "memory",
            iconColor: "text-primary",
            title: "Architecture & Persistence",
            variant: "architecture",
            content: {
              intro: "Engineered for zero-latency interactions utilizing a robust local-first strategy.",
              features: [
                { icon: "check_box", iconColor: "text-tertiary", title: "Hive Database:", titleColor: "text-tertiary-fixed", desc: "Lightweight, lightning-fast key-value database written in pure Dart, ensuring immediate state updates without network dependency." },
                { icon: "check_box", iconColor: "text-primary", title: "State Management:", titleColor: "text-primary-fixed", desc: "Provider-based architecture decoupling business logic from the UI layer for maintainability." },
              ],
            },
          },
          {
            colSpan: 6,
            title: null,
            variant: "mobile-mockup",
            content: {},
          },
        ],
      },
    ],
  },

  infinity: {
    title: "Infinity",
    subtitle: "University Wi-Fi Authentication Utility",
    statusBadge: { label: "PROJECT", color: "bg-tertiary-fixed text-background" },
    typeBadge: { label: "// Authenticate", color: "text-outline-variant", plain: true },
    description:
      "University Wi-Fi Authentication Utility. An Android application designed to automate captive portal logins by analyzing and streamlining client-side authentication workflows. A widely adopted tool built on robust network request handling.",
    heroTitle: "Infinity",
    heroMeta: {
      cards: [
        { label: "Role", value: "Co-Developer" },
        { label: "Tech Stack", value: "Flutter, Dart" },
        { label: "Domain", value: "Network Auth" },
      ],
    },
    sections: [
      {
        type: "section-header",
        icon: "code_blocks",
        iconColor: "text-secondary-container",
        title: "Architecture & Implementation",
      },
      {
        type: "bento-row",
        items: [
          {
            colSpan: 8,
            title: "Network Request Log",
            variant: "code",
            content: {
              filename: "lib/auth/request_handler.dart",
              language: "dart",
              code: "Future<AuthResult> executeAuthPayload(Payload data) async {\n  try {\n    final response = await http.post(\n      Uri.parse(Constants.authEndpoint),\n      headers: {\n        'Content-Type': 'application/x-www-form-urlencoded',\n        'User-Agent': 'Infinity-Client/1.0',\n      },\n      body: data.toFormData(),\n    );\n\n    if (response.statusCode == 200) {\n      return AuthParser.analyzeResponse(response.body);\n    } else {\n      throw NetworkException('Unexpected: ${response.statusCode}');\n    }\n  } catch (e) {\n    Logger.error('Auth Workflow Failed: $e');\n    return AuthResult.failure;\n  }\n}",
            },
          },
          {
            colSpan: 4,
            title: "Key Capabilities",
            variant: "capabilities",
            content: {
              items: [
                { icon: "bolt", title: "Request Automation", desc: "Automated execution of multi-step captive portal forms." },
                { icon: "search_insights", title: "Workflow Analysis", desc: "Reverse engineering client-side validation logic." },
                { icon: "verified", title: "Real-World Utility", desc: "Streamlining campus connectivity for thousands of users." },
              ],
            },
          },
        ],
      },
    ],
  },

  "cdc-cracker": {
    title: "CDC Cracker",
    subtitle: "Course Assistant",
    statusBadge: null,
    typeBadge: null,
    description:
      "Organizes VIT-AP course and assessment info via custom interfaces and REST APIs. A robust backend architecture focusing on seamless data extraction and processing.",
    heroTitle: "CDC Cracker",
    heroSubTitle: "Course Assistant",
    sections: [
      {
        type: "bento-row",
        items: [
          {
            colSpan: 8,
            icon: "account_tree",
            iconColor: "text-outline",
            title: "System Architecture",
            variant: "diagram",
            content: {
              placeholderLabel: "[ SYSTEM ARCHITECTURE DIAGRAM ]",
              overlayText: null,
            },
          },
          {
            colSpan: 4,
            title: null,
            variant: "role-stack",
            content: {
              role: {
                icon: "engineering",
                iconColor: "text-secondary-container",
                title: "My Role",
                items: [
                  "Backend Development",
                  "API Design",
                ],
                itemDescriptions: [
                  "Architecting core logic and data flow.",
                  "Structuring robust REST endpoints.",
                ],
                itemIcons: ["dns", "api"],
              },
              stack: {
                icon: "memory",
                title: "Tech Stack",
                items: [
                  { label: "Node.js", primary: false },
                  { label: "REST APIs", primary: false },
                  { label: "JavaScript", primary: false },
                  { label: "AI Frontend", primary: true },
                ],
              },
            },
          },
        ],
      },
      {
        type: "features",
        title: "Core Features",
        items: [
          { icon: "hub", title: "Backend Architecture", desc: "Scalable and efficient server-side structure designed to handle complex data queries and concurrent requests seamlessly." },
          { icon: "data_object", title: "Data Processing", desc: "Intelligent extraction and sanitization of raw assessment data, transforming it into actionable insights for the frontend." },
          { icon: "cable", title: "API Integration", desc: "Seamless communication between custom interfaces and external services, ensuring real-time data synchronization." },
        ],
      },
    ],
  },
};
