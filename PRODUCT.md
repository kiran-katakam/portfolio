# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: fellow developers and peers browsing projects for technical depth. Secondary: recruiters and hiring managers evaluating Kiran Katakam for backend roles. Visitors want to judge the work, then get in touch.

## Product Purpose

Personal portfolio of Kiran Katakam, a Computer Science student at VIT-AP University focused on backend architecture, low-latency execution, and scalable infrastructure. Pages: Home, About, Projects (with project detail), Contact. Success: visitors see real shipped projects and reach out.

## Positioning

Proof through shipped, real projects rather than claims, from someone who loves building things and breaking them. Personality is part of the pitch, not a footnote: Minecraft, Formula 1 (big admirer of Max Verstappen) and music production show up in who-he-is, ahead of the work. Visitor order: who Kiran is first, then the work.

## Capabilities and Constraints

- Stack: React 19, Vite, Tailwind CSS 3, react-router-dom, react-helmet-async. Project data lives in `src/data/projects.js`.
- Per-page SEO via Helmet.
- Deployment: GitHub Actions builds and syncs `dist/` to S3 (`kirankatakam.me`, ap-south-1) with CloudFront invalidation.
- Contact: email `admin@kirankatakam.me`, GitHub `kiran-katakam`, LinkedIn `kirankatakam`.

## Brand Commitments

Full redesign confirmed 2026-10-21: the old pixel/terminal look and `SYSTEM_PROFILE` voice are dropped; copy and visuals are rewritten from scratch. Goal in the owner's words: unique, attention-grabbing, visitors should say "wow". Must not look like a template or generic AI output. Admiration for Verstappen and F1 is personal interest only: no team liveries, F1 or Red Bull logos, or anything implying endorsement.

## Evidence on Hand

No photos on the site (owner decision 2026-10-21): `public/max.jpg` carries team and sponsor logos and is unused, as is `public/mc.jpg`. Project screenshots from repo READMEs are fine. Project entries live in `src/data/projects.js`, and every fact, code excerpt and screenshot there comes from the public repos at github.com/kiran-katakam (checked 2026-10-19). Only VerifyOnChain has a working live URL; the other projects link to source. No testimonials, user counts, accuracy figures or other metrics were provided; future work must not invent any.

## Product Principles

1. Introduce the person, then let shipped work be the proof.
2. Serve developers' technical depth first, recruiters' quick scan second.
3. Grab attention on first view without burying the projects.
4. Never fabricate credentials, metrics, or testimonials.
