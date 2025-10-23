# ADYC — AI-driven Youth Planning Platform

A modern React + Vite website that showcases an Arabic-first platform for career, family and financial planning for Emirati youth. Built with TypeScript, Tailwind CSS and components inspired by shadcn/ui and Radix.

## What this repo contains

- `src/` — application source code
	- `src/components/` — UI and page components used by the site
		- `Header.tsx` — top navigation and brand
		- `Hero.tsx` — hero section (image, headline, CTAs)
		- `LearningSection.tsx` — learning/training highlights
		- `MentorshipSection.tsx` — mentorship/peer features
		- `PlanningModules.tsx` — planning modules overview
		- `ScenarioBuilder.tsx` — scenario creation UI
		- `GrantsExplorer.tsx` — grants and resources explorer
		- `Footer.tsx` — site footer
		- `ui/` — small primitive UI building blocks (buttons, inputs, dialogs, etc.)
	- `src/pages/` — route views (Index, FamilyPlanning, FinancialPlanning, NotFound)
	- `src/assets/` — static images used by the site (e.g. `hero.png`)
	- `src/lib/` and `src/hooks/` — utilities and hooks

## Tech stack

- Vite (dev server & build)
- React + TypeScript
- Tailwind CSS + tailwindcss-animate
- Radix UI primitives and shadcn-style component composition
- React Router for routing
- Various utilities: lucide-react, react-hook-form, tanstack/react-query, zod

## Scripts

The project uses the scripts defined in `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — build production assets
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the repo

## Local development

Prerequisites: Node.js 18+ (LTS recommended) and npm or a compatible package manager.

1. Install dependencies

```powershell
npm install
```

2. Start the dev server

```powershell
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`) to view the site.

## Project structure notes

- Routes are mounted from `src/main.tsx` (look for `react-router-dom` usage).
- The site uses alias `@/` to reference `src/` (configured in `tsconfig.json` / Vite config). If you copy components to another project, update imports accordingly.
- `src/components/ui/` contains reusable small components — prefer using those for consistent styling.

## Assets

Images are stored in `src/assets/` and imported into components. The hero image used by the `Hero` component is `src/assets/hero.png`. If you replace images, keep filenames or update imports accordingly.

## Deployment

Build the site and deploy static output from `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

```powershell
npm run build
# serve the dist folder or deploy using your host's tooling
```

## Contributing

- Follow the repo's lint rules. Run `npm run lint` before opening PRs.
- Keep UI changes RTL-friendly — this project is Arabic-first and uses RTL layout for many sections.

## Troubleshooting

- If imports fail, ensure `@/` path alias is configured in your editor and TypeScript/Vite setup.
- If assets are missing, check `src/assets/` for the expected filenames (e.g. `hero.png`).

## Want more?

- I can expand this README with per-component usage examples, a CONTRIBUTING guide, or deployment notes for specific hosts. Tell me which sections to expand and I'll add them.

## License

This repository uses a dual-license approach:

- Code (source files and software) is licensed under the MIT License — see `LICENSE`.
- Non-code assets (images, media, design files) are licensed under Creative Commons Attribution 4.0 International (CC BY 4.0) — see `LICENSE-CC-BY-4.0` and `LICENSES.md` for guidance.

When reusing images or other media from `src/assets/` or `public/`, please provide attribution consistent with CC BY 4.0: credit the creator (Annet Thomas), link to the license (https://creativecommons.org/licenses/by/4.0/), and indicate if you made changes.