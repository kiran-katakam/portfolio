// Every fact here is taken from the project's public repo (code, package files, README).
// Do not add metrics, user counts or deployment claims that the repos cannot back up.

const GH = "https://github.com/kiran-katakam";

export const projects = [
  {
    slug: "verify-on-chain",
    abbr: "VOC",
    title: "VerifyOnChain",
    tagline: "Academic certificates, verified on Ethereum",
    year: 2026,
    status: "live",
    summary:
      "Universities issue certificates as hashes on a smart contract. Anyone can check one by scanning its QR code. The contract stores only the hash, the issuing wallet and a timestamp, and only the original issuer can revoke.",
    links: {
      live: "https://verifyonchain.kirankatakam.me",
      repos: [
        { label: "Contracts", url: `${GH}/verify_on_chain_contracts` },
        { label: "Backend", url: `${GH}/verify_on_chain_backend` },
        { label: "Frontend", url: `${GH}/verify_on_chain_frontend` },
      ],
    },
    stack: ["Solidity", "Hardhat", "OpenZeppelin", "Ethers.js", "Express", "MongoDB", "React"],
    facts: [
      { key: "NETWORK", value: "Sepolia testnet" },
      { key: "CONTRACT_TESTS", value: "12 (Hardhat)" },
      { key: "ROLES", value: "Admin · University · Verifier" },
    ],
    highlights: [
      {
        title: "Issuer allow-list",
        desc: "The contract owner authorizes university wallets. Only an authorized issuer can write a certificate, and each hash can be issued once.",
      },
      {
        title: "Prepare, sign, confirm",
        desc: "The API prepares each certificate or revocation, the university's wallet signs the transaction, and the API confirms it once it lands on-chain.",
      },
      {
        title: "QR verification",
        desc: "The backend generates a QR code per certificate. The verifier page scans it and checks the hash against the contract.",
      },
      {
        title: "Revocation",
        desc: "Only the wallet that issued a certificate can revoke it. Verification then reports it as no longer valid.",
      },
    ],
    code: {
      file: "contracts/VerifyOnChain.sol",
      url: `${GH}/verify_on_chain_contracts/blob/main/contracts/VerifyOnChain.sol`,
      source: `function issueCertificate(bytes32 fieldHash) external {
    require(authorizedIssuers[msg.sender], "Not an authorized issuer");
    require(
        certificates[fieldHash].timestamp == 0,
        "Certificate already exists"
    );

    certificates[fieldHash] = Certificate({
        fieldHash: fieldHash,
        issuer: msg.sender,
        timestamp: block.timestamp,
        isValid: true
    });

    emit CertificateIssued(fieldHash, msg.sender, block.timestamp);
}`,
    },
  },
  {
    slug: "cinegraph",
    abbr: "CNG",
    title: "Cinegraph",
    tagline: "Movie recommendations by walking a graph",
    year: 2026,
    status: "live",
    summary:
      "Like a few movies and Cinegraph walks a Neo4j graph for others that share genres, actors or direct similarity edges, then ranks them with a weighted score.",
    links: {
      live: "https://cinegraph.kirankatakam.me",
      repos: [
        { label: "Backend", url: `${GH}/cinegraph-backend` },
        { label: "Frontend", url: `${GH}/cinegraph-frontend` },
      ],
    },
    stack: ["Neo4j", "Cypher", "Node.js", "Express", "React", "Vite"],
    facts: [
      { key: "NODES", value: "Movie · Genre · Actor · Director" },
      { key: "EDGES", value: "IN_GENRE · ACTED_IN · DIRECTED_BY · SIMILAR_TO" },
    ],
    highlights: [
      {
        title: "Weighted graph score",
        desc: "Shared genres count ×2, shared actors ×3 and direct similarity edges ×5. Ties break on rating, and the top 24 come back.",
      },
      {
        title: "Express API",
        desc: "Endpoints for search, movie detail, genre browsing and recommendations, all backed by Cypher queries through the Neo4j driver.",
      },
      {
        title: "React client",
        desc: "Debounced search, a liked-movies sidebar and a recommendations section that re-queries as your picks change.",
      },
    ],
    code: {
      file: "server.js · POST /recommend",
      url: `${GH}/cinegraph-backend/blob/main/server.js`,
      source: `// Genre-based similarity
OPTIONAL MATCH (liked)-[:IN_GENRE]->(g:Genre)<-[:IN_GENRE]-(candidate:Movie)
WHERE NOT candidate.movieId IN $movieIds
WITH candidate, count(g) AS sharedGenres

// Actor-based boost
OPTIONAL MATCH (a:Actor)-[:ACTED_IN]->(likedM:Movie)
WHERE likedM.movieId IN $movieIds
OPTIONAL MATCH (a)-[:ACTED_IN]->(candidate)
WITH candidate, sharedGenres, count(DISTINCT a) AS sharedActors

// Direct similarity edge boost
OPTIONAL MATCH (likedM2:Movie)-[:SIMILAR_TO]-(candidate)
WHERE likedM2.movieId IN $movieIds
WITH candidate, sharedGenres, sharedActors, count(likedM2) AS directSimilarity

WITH candidate,
     (sharedGenres * 2 + sharedActors * 3 + directSimilarity * 5) AS score
...
ORDER BY score DESC, candidate.rating DESC
LIMIT 24`,
    },
  },
  {
    slug: "cdc-cracker",
    abbr: "CDC",
    title: "CDC Cracker",
    tagline: "Course and assessment prep for VIT-AP",
    year: 2026,
    status: "live",
    summary:
      "Organizes courses, assessments, multiple-choice and coding questions in one place, with an admin panel for managing the content and an in-browser code editor.",
    links: {
      live: "https://cdcracker.kirankatakam.me",
      repos: [
        { label: "Backend", url: `${GH}/cdcracker_backend` },
        { label: "Frontend", url: `${GH}/cdcracker_frontend` },
      ],
    },
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "React", "CodeMirror"],
    facts: [
      { key: "MODELS", value: "Course · Assessment · MCQ · Coding" },
      { key: "EDITOR_LANGS", value: "C++ · Java · Python · SQL" },
    ],
    highlights: [
      {
        title: "Content model",
        desc: "Mongoose models for courses, assessments, MCQs and coding questions, each with its own REST routes.",
      },
      {
        title: "Admin panel",
        desc: "JWT-protected dashboard to manage courses, assessments and questions, including bulk MCQ import.",
      },
      {
        title: "Code editor",
        desc: "CodeMirror with C++, Java, Python and SQL modes for coding questions.",
      },
    ],
    code: {
      file: "middleware/auth.js",
      url: `${GH}/cdcracker_backend/blob/main/middleware/auth.js`,
      source: `function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // "Bearer TOKEN"

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // invalid token
    console.log("Decoded JWT:", user);
    req.user = user; // attach decoded payload
    next();
  });
}`,
    },
  },
  {
    slug: "water-scarcity-ews",
    abbr: "WEW",
    title: "Water Scarcity EWS",
    tagline: "Agricultural water-stress map of Andhra Pradesh",
    year: 2026,
    status: "live",
    summary:
      "An interactive map of 13 Andhra Pradesh districts built from 2000–2014 data. Each district opens into its own risk breakdown and trend chart. Built as a data warehousing and mining course project.",
    links: {
      live: "https://waterscarcityews.kirankatakam.me",
      repos: [{ label: "Source", url: `${GH}/early_warning_system_for_agriculture_scarcity` }],
    },
    stack: ["React", "D3.js", "TopoJSON", "GeoJSON", "K-Means"],
    facts: [
      { key: "DISTRICTS", value: "13" },
      { key: "YEARS", value: "2000–2014" },
      { key: "CLUSTERS", value: "Critical · High-Stress · Moderate · Water-Secure" },
    ],
    highlights: [
      {
        title: "District map",
        desc: "D3 renders a choropleth of AP districts from GeoJSON, colored by cluster.",
      },
      {
        title: "Stress clusters",
        desc: "K-Means sorts districts into Critical, High-Stress, Moderate-Stress and Water-Secure groups.",
      },
      {
        title: "District cards",
        desc: "Each district shows risk, tank functionality, encroachment, capacity loss and yield, plus a trend chart over the years.",
      },
    ],
    code: {
      file: "src/data.js",
      url: `${GH}/early_warning_system_for_agriculture_scarcity/blob/main/src/data.js`,
      source: `// District-level aggregated stats (from master_dataset + phase5 clustering)
export const DISTRICT_STATS = {
  CHITTOOR:      { avg_risk: 0.783, functionality: 33.5, encroachment: 35.7, capacity_loss: 41.2, avg_yield: 0.51, cluster: "Critical",          dominant_label: "Critical"  },
  KRISHNA:       { avg_risk: 0.267, functionality: 88.1, encroachment: 6.4,  capacity_loss: 9.2,  avg_yield: 3.54, cluster: "Water-Secure",      dominant_label: "Low"       },
  // ...
};`,
    },
  },
  {
    slug: "infinity",
    abbr: "INF",
    title: "Infinity",
    tagline: "Auto-login for VIT-AP campus Wi-Fi",
    year: 2024,
    status: "source",
    summary:
      "Enter your registration number and password once. Infinity logs you into the campus captive portal whenever the app opens, so moving between blocks no longer means logging out and back in.",
    links: {
      repos: [{ label: "Source", url: `${GH}/infinity` }],
    },
    stack: ["Flutter", "Dart", "webview_flutter", "shared_preferences", "connectivity_plus"],
    facts: [
      { key: "PLATFORMS", value: "Android · iOS" },
      { key: "CREDIT", value: "Login-variation algorithm by Tarun" },
    ],
    highlights: [
      {
        title: "Saved once",
        desc: "Credentials are stored locally with shared_preferences and reused on every launch.",
      },
      {
        title: "Form injection",
        desc: "A WebView loads the portal and injects JavaScript that fills and submits the login form.",
      },
      {
        title: "Over-limit workaround",
        desc: "Superscript variants of the registration number pass the portal's backend, which sidesteps the per-ID login limit.",
      },
    ],
    code: {
      file: "lib/webviewpage.dart",
      url: `${GH}/infinity/blob/main/lib/webviewpage.dart`,
      source: `onPageFinished: (String url) {
  final String jsCode =
      "document.getElementById('ft_un').value = '\${usernames[i]}';document.getElementById('ft_pd').value = '$password';document.forms[0].submit();";
  controller.runJavaScript(jsCode);
  if ((i + 1) > 63) {
    i = 1;
  } else {
    i++;
  }
},`,
    },
  },
  {
    slug: "todo-app",
    abbr: "TDO",
    title: "To-Do App",
    tagline: "Academic and personal tasks, kept apart",
    year: 2024,
    status: "in-dev",
    summary:
      "A Flutter task manager built for my own semester. Academic tasks carry a course code and due date, personal tasks stay separate, and everything is stored on-device.",
    links: {
      repos: [{ label: "Source", url: `${GH}/to_do` }],
    },
    stack: ["Flutter", "Dart", "Riverpod", "Hive"],
    facts: [{ key: "STORAGE", value: "Hive, on-device" }],
    highlights: [
      {
        title: "Two task types",
        desc: "Academic tasks have a course code, due date and description. Personal tasks have a title, description and due date.",
      },
      {
        title: "Collapsible sections",
        desc: "Academic, personal or both views, each section expandable on its own.",
      },
      {
        title: "Local-first",
        desc: "Hive stores tasks on the device and Riverpod keeps the UI in sync.",
      },
    ],
    screenshots: [
      "https://github.com/user-attachments/assets/6465fa2f-06a6-4da4-a966-4888599ef4ac",
      "https://github.com/user-attachments/assets/16d334b9-88c1-45b4-8b76-0dff49c2c949",
      "https://github.com/user-attachments/assets/8762cfbc-c60b-4253-a71c-9df3ea051e6a",
      "https://github.com/user-attachments/assets/e3447e00-396c-44ea-b777-719fd5f2b408",
    ],
  },
];

// Shown as a tyre-compound style chip: letter in a coloured ring.
export const STATUS = {
  live: { label: "Live", letter: "L", color: "text-green" },
  source: { label: "Source", letter: "S", color: "text-purple" },
  "in-dev": { label: "In development", letter: "D", color: "text-yellow" },
};
