---
name: Timing Tower
description: Kiran Katakam's portfolio as F1 live-timing broadcast graphics; black screen, ruled bars, white position blocks.
colors:
  void: "#08080a"
  bar: "#131317"
  bar-hi: "#1c1c22"
  rule: "#2a2a31"
  chalk: "#f3f3ef"
  dim: "#9c9ca6"
  green: "#3ddc79"
  purple: "#b07cff"
  yellow: "#ffd23f"
  lights: "#ff1e10"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(76px, 13vw, 184px)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(44px, 7vw, 104px)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 80"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'tnum'"
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
    fontVariation: "'wdth' 85"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter-sm: "16px"
  gutter-md: "40px"
  gutter-lg: "64px"
  row: "56px"
  section: "112px"
  section-lg: "160px"
components:
  button-primary:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.void}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.void}"
  button-ghost:
    backgroundColor: "{colors.void}"
    textColor: "{colors.chalk}"
    rounded: "{rounded.none}"
    padding: "12px 20px"
  position-block:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.void}"
    rounded: "{rounded.none}"
    width: "48px"
  position-block-active:
    backgroundColor: "{colors.void}"
    textColor: "{colors.chalk}"
  tower-row:
    backgroundColor: "{colors.bar}"
    textColor: "{colors.chalk}"
    height: "56px"
  tower-row-hover:
    backgroundColor: "{colors.bar-hi}"
  nav-link:
    textColor: "{colors.dim}"
    padding: "0 20px"
    height: "56px"
  nav-link-active:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.void}"
  tyre-marker:
    rounded: "{rounded.full}"
    size: "24px"
---

# Design System: Timing Tower

## Overview

**Creative North Star: "The Timing Tower"**

The site is a live race broadcast. A black screen carries a stack of numbered, ruled bars; white position blocks hold heavy condensed italic numerals; status is told by small coloured tyre rings. The tower is the navigation and every project is a car on track. Recognisable with no content at all: a black screen with numbered bars on the left.

Density is broadcast density: tight 56px rows, hairline rules, tabular numerals, and then enormous condensed italic display type where the graphic wants to shout. Surfaces are flat, hard-edged and ruled. Nothing floats, nothing glows, except the start lights, which glow because real start lights do.

Motion is one grammar, borrowed from the broadcast: five lights once per session, a tower pair that overtakes into place with a position tick, graphics that wipe in from the left, and a team-radio waveform that pulses on hover. All of it stops under reduced motion.

**Key Characteristics:**
- Broadcast-black ground (void) with chalk-white type and position blocks.
- Ruled rows and hairline grids instead of cards.
- One display voice: Archivo 900 italic at 62% width, uppercase.
- Status colours live in tyre markers; red lives in the start lights.
- One motion grammar, entirely off under prefers-reduced-motion.

## Colors

A near-black broadcast screen, two greys of bar, one hairline rule, chalk white, and four signal colours that each have exactly one job.

### Primary
- **Chalk White** (chalk): all primary type, position blocks, the primary button, the active nav tab, the KK mark, text selection, and the 2px focus outline. The system's accent is white on black, not a hue.

### Secondary
- **Live Green** (green): the LIVE tyre marker, the position-gain tick on the tower, and the hover fill of the primary button ("go"). Never a background, never body text.
- **Source Purple** (purple): the SRC tyre marker only.
- **In-Dev Yellow** (yellow): the in-development tyre marker only.

### Tertiary
- **Start-Light Red** (lights): the five-light start sequence only, lit lamps with their glow.

### Neutral
- **Broadcast Void** (void): page ground, html background, theme-color, scrollbar track, inverted active position block.
- **Bar** (bar): tower and table surfaces, code panels, the radio panel, hover fill on ruled list rows.
- **Bar High** (bar-hi): hovered or active tower row; stack chips on project detail.
- **Hairline Rule** (rule): every 1px border, row divider and grid gap; scrollbar thumb.
- **Dim** (dim): secondary text, labels, years, inactive nav, idle icons.

### Named Rules
**The One Job Rule.** Purple and yellow mark tyre status and nothing else. Green marks live, a gained place, or the go-hover of the primary button. Red is the start lights. A signal colour used anywhere else is a defect.

**The White Is The Accent Rule.** Emphasis is made by inverting to chalk-on-void or void-on-chalk, never by adding a new hue.

## Typography

**Display Font:** Archivo variable (with system-ui, sans-serif), self-hosted latin subset in `public/fonts/` (archivo.woff2, archivo-italic.woff2), weight 400 to 900, width 62% to 125%, normal and italic, font-display swap, both preloaded.
**Body Font:** Archivo (same files).
**Label/Mono Font:** JetBrains Mono 400/700 (Google Fonts), for code excerpts and the rig spec only.

**Character:** One family stretched across the whole broadcast: crushed 62% italic black for the shouting graphic, 75 to 85% condensed bold caps for row titles and labels, normal width for reading.

### Hierarchy
- **Display** (900 italic, 62% width, clamp(76px, 13vw, 184px), 0.86, uppercase, -0.01em): page h1s and the start-light name card.
- **Headline** (same voice, clamp(44px, 7vw, 104px)): section h2s, the lead project title, "Box, box.", ruled-list entries on About and Contact.
- **Numerals** (900 italic, 62% width, 26 to 30px in rows, up to 64px for the onboard ghost code): position numbers and three-letter project codes.
- **Title** (800, 80% width, 24px, uppercase): onboard panel heading, career team names. Row titles use 700 at 75% width, 18px.
- **Body** (400, 16px, 1.6, tabular numerals): intros run 17 to 19px; measure 52 to 64ch.
- **Label** (700, 85% width, 12px, 0.08em, uppercase, dim): table heads, dt keys, figcaptions, footer links, "Skip start".
- **Action** (700, 80% width, 0.06em, uppercase): buttons, nav tabs, inline "Open telemetry" links.
- **Code** (JetBrains Mono 13px, 1.625): onboard code panels and the rig spec.

### Named Rules
**The One Voice Rule.** Display type is always Archivo 900 italic at 62% width, uppercase. No second display face, no upright display.

**The Mono Is Data Rule.** JetBrains Mono appears only for code and the rig spec. It is not a labelling or decoration voice.

## Layout

A 1440px max container with 16 / 40 / 64px gutters (mobile / md / lg). Home's first viewport is a two-column grid: the tower at minmax(380px, 460px) on the left, sticky at 96px from the top on desktop, the display name and onboard panel on the right. Below lg it stacks: name first, tower second, and the onboard panel is hidden.

Rhythm is section gaps of 112px (160px on lg; About uses 144px), 40px between a section heading and its ruled list, rows at 56px in the tower and at least 76px in the classification table. Grids are drawn with a 1px gap over the rule colour so the hairlines become the grid.

The navigation bar is a 56px sticky strip, void at 95% with a light backdrop blur, ruled underneath.

## Elevation & Depth

Flat. Depth is tonal: void ground, bar surfaces, bar-hi for hover and active, hairline rules between. No shadows on any surface. The only glow in the system is the lit start lamp (`0 0 28px 4px rgba(255,30,16,0.55)`), part of the start-light object itself.

### Named Rules
**The Lamp Is The Only Glow Rule.** Glow belongs to the start lights because real lamps glow. Rows, panels, buttons and type never carry shadow or glow.

## Shapes

Square corners everywhere: rows, blocks, buttons, panels, chips. Round forms exist only where the real object is round: tyre markers (24px ring, 3px border) and start lamps (circles in a 10px-radius housing). Borders are 1px hairlines in the rule colour; the active position block uses a 2px inset chalk outline. Icons are authored 24px line glyphs, 2px stroke, square caps.

## Components

### Buttons
- **Shape:** square (0px), 12px by 20px padding (16px by 24px for the larger Contact call), uppercase 80%-width bold with 0.06em tracking, trailing line icon.
- **Primary:** chalk fill, void text; hover fills green.
- **Ghost:** 1px rule border on void; hover turns the border chalk.
- **Focus:** global 2px chalk outline at 3px offset.

### Chips
- **Stack tags:** bar-hi fill, 14px semibold (project detail); on About, a 1px rule border with uppercase condensed bold. Two variants exist in the build; neither is yet the single rule.

### Cards / Containers
- **There are no cards.** Content sits in ruled rows (top rule on the list, bottom rule on each item) or in hairline grids. Containers that exist (tower, classification table, code panel, radio panel) are bar surfaces with a 1px rule border and a 40px ruled header strip carrying labels.

### Navigation
- **Style:** KK position block (chalk, 900 italic 62%) plus dim name; tabs are full-height 56px, uppercase 80%-width bold. Inactive dim, hover chalk on bar, active is a chalk tab with void text. Mobile keeps the tabs, drops the name.

### Timing Tower (signature)
Bar surface, 40px label header ("Pos · Driver / Project", "Status"), 56px rows. Each row: a fixed 48px chalk position block with a void numeral, then a moving body with position tick, three-letter code, condensed title, year and tyre marker. Hover or focus raises the row to bar-hi and inverts the block to void with a chalk inset outline; on Home it also opens the onboard panel. The position column never moves.

### Tyre Marker (signature)
A 24px ring in the status colour (3px border) with a chalk 11px black letter: L live (green), S source (purple), D in development (yellow). Optional uppercase label in the same colour.

### Onboard Panel
Ruled top, a 64px ghost project code at 15% chalk, title, tyre, summary, stack labels and an inline action. Wipes in from the left each time the active row changes.

### Start Lights (signature)
Once per browser session, full-screen void: five 10px-radius housings, four lamps each, the lower two light red in sequence (550ms apart), then "Lights out" and the overlay clips away upward. Skippable; skipped entirely under reduced motion. While it runs, all tower and wipe animations are paused so the tower fills in as the lights go out.

### Team Radio
Bar panel with a KK block header, a fixed-height bar waveform in chalk at 70%, a condensed italic quote and the email in display voice. Bars pulse (scaleY to 0.35, 700ms) while the panel is hovered or focused.

### Motion
One grammar, all on the out-expo curve `cubic-bezier(0.16, 1, 0.3, 1)`: wipe (clip-path, 520ms), settle (one pair of tower rows starts swapped and overtakes, 700ms, 400ms delay), tick (chevron visible then fades, 1600ms), wave (700ms loop on hover). Under prefers-reduced-motion, wipe, settle and wave are off and ticks are hidden.

## Do's and Don'ts

### Do:
- **Do** build lists as ruled rows (1px rule top and bottom) or hairline grids drawn with a 1px gap over rule.
- **Do** set position numbers and project codes in Archivo 900 italic at 62% width, void on a chalk block.
- **Do** show project status only through the tyre marker: green live, purple source, yellow in development.
- **Do** keep every animation inside the one grammar and switch it off under prefers-reduced-motion.
- **Do** keep corners square; round only tyre markers and start lamps.

### Don't:
- **Don't** use cards, gradients, or shadows on surfaces; the lit start lamp is the only glow.
- **Don't** use red (lights) outside the start sequence, or purple and yellow outside tyre markers.
- **Don't** introduce a second display face or set display type upright or at normal width.
- **Don't** use F1, team, Red Bull or sponsor logos, liveries, or anything implying endorsement.
- **Don't** show invented metrics, counts or testimonials; every number on screen must be real (positions, years, real facts).
