# PageBender — Landing Page Concept

A responsive concept landing page positioning PageBender for small and independent publishers producing books across Indian scripts and English.

## Live demo

Production URL: https://pagebender-landing-page.vercel.app

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a modern browser.
3. For a local server, run `python3 -m http.server 8000` from the project folder and visit `http://localhost:8000`.

No build step or package installation is required.

## What's included
- `index.html` — page structure and content.
- `styles.css` — visual system, desktop layout and mobile breakpoints.
- `script.js` — mobile navigation and a clearly labelled prototype interest-form interaction.
- `RATIONALE.md` — audience choice, positioning and alternative teardown.
- `FIGMA_SPEC.md` — frame sizes, layout guidance and design tokens for recreating the design in Figma.
- `USER_TESTING.md` — script and a blank record for two real tests.
- `AI_LOG.md` — disclosure of AI assistance and items requiring human verification.

## Product assumptions
The brief permits assuming manuscript import (e.g. Word), applying a book design, handling Devanagari alongside English, and exporting a print-ready PDF. This page labels these as assumptions, not independently verified specifications. It does not claim support for every Indian script, OCR, automatic proofreading, guaranteed font shaping, or a production release date.

## Design decisions
The shipped design uses a deep navy background, blue/cyan/purple accents, rounded dark panels, Space Grotesk display headings and DM Sans body text. A mixed Devanagari/English book-spread illustration makes the publishing use case tangible. The page follows a clear sequence: problem → workflow → audience → action. Responsive CSS adapts the two-column hero and content grids for mobile.

## Trade-offs and limitations
- This is a static front-end concept, not the PageBender application.
- The early-access form is a local prototype interaction. It does not send or store submissions.
- The book spread is illustrative HTML/CSS, not a rendering test of PageBender.
- Product capabilities, supported scripts, import fidelity and PDF output need confirmation from Garuda.
- The Figma file must be recreated by the author using `FIGMA_SPEC.md`; this repository does not contain a native Figma file.

## What I'd build next
1. Validate the workflow and terminology with two target users.
2. Replace assumptions with product-confirmed capabilities.
3. Connect the interest form to an approved backend/CRM if requested.
4. Add real before/after examples using approved sample manuscripts.
5. Run accessibility, browser and device testing.

## Credits
Created as an assignment concept for the Garuda Prakashan × Rishihood live project. AI assistance is disclosed in `AI_LOG.md`.
