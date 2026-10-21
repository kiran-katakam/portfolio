---
version: 1
slug: "src-pages-home-jsx"
primary_target: "src/pages/Home.jsx"
related_targets: ["src/pages/About.jsx","src/pages/Projects.jsx","src/pages/ProjectDetail.jsx","src/pages/Contact.jsx"]
---

# Home (and site-wide world)

Scope: full redesign, Home first, then About, Projects, ProjectDetail, Contact in the same world. Mode: Experience.
Audience: developers first, recruiters second. Visitor order: who Kiran is, then the work. Action: open a project, then get in touch.
Constraints: no F1, FOM, team or sponsor logos or liveries; no invented lap times, metrics or positions that pretend to be data. `public/max.jpg` shows Red Bull and sponsor logos, so it can't ship as is.

## Direction contract

THESIS: The site is a live race broadcast. The timing tower is the navigation and every project is a car on track. It refuses the category default of a hero with a project card grid.
OWN-WORLD: Broadcast black ground, white condensed numerals in white position blocks, purple and green as status colours, a single red reserved for the start lights. Rows are hard, ruled bars with no cards, gradients or glow. Recognisable with no content: a black screen with a stack of numbered bars on the left.
STORY: Lights go out and the tower fills in. The visitor meets Kiran (P1, ABOUT), sees real projects ranked below with LIVE or SRC status, opens one, and lands on Contact as the pit wall radio.
FIRST VIEWPORT: Tower on the left, about 36% wide, with rows for About, VerifyOnChain (LIVE in green), Cinegraph, CDC Cracker, Water EWS and Infinity. On the right, KIRAN KATAKAM in heavy italic at about 140px with a one-line role below it. Primary action: the rows themselves. Hovering or focusing a row opens an onboard panel on the right.
FORM: F1 live-timing broadcast graphics, #1 on the ordered list (pick card). seed:f6d3236229ecfb4e
SIGNATURE: Five-light start sequence on first load (skippable, reduced-motion safe). Then rows slide into position with a position-change tick.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
