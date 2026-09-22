# AGENTS.md

This repo is a Vite + React landing page using Tailwind CSS v4 and GSAP. Keep changes aligned with the existing single-file styling approach and avoid reworking the project into a different stack.

## Core files

- [README.md](README.md) — project overview and generated Vite defaults
- [vite.config.js](vite.config.js) — Vite config with the Tailwind Vite plugin
- [eslint.config.js](eslint.config.js) — ESLint setup for JS/JSX
- [src/index.css](src/index.css) — main styling source; includes Tailwind imports, theme tokens, utilities, and component-level styles
- [src/App.jsx](src/App.jsx) — main page structure
- [src/main.jsx](src/main.jsx) — app bootstrap

## Commands

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build app: `npm run build`
- Lint JS/JSX: `npm run lint`
- Preview production build: `npm run preview`

## Styling conventions

- The project is intentionally Tailwind-first. The CSS entry starts with `@import 'tailwindcss';` and uses Tailwind v4 features such as `@theme`, `@utility`, and `@layer`.
- Prefer adding reusable patterns to `src/index.css` rather than creating a lot of one-off CSS files.
- Keep custom utilities and component selectors grouped under the existing `@theme`, `@utility`, and `@layer components` structure.
- Match the current naming and hierarchy already used in `src/index.css` before introducing new styles.

## CSS lint / unknown at-rule guidance

- Tailwind-specific directives are expected in this project and are not a bug.
- Generic CSS linters or editor validators may flag `@theme`, `@utility`, `@layer`, and `@apply` as "unknown at-rule" warnings when Tailwind support is not active in the tooling.
- Treat those warnings as a tool-setup issue, not as a project-architecture issue.
- Do not remove Tailwind directives or rewrite the project to plain CSS unless there is a clear, requested refactor.
- If a new CSS rule is introduced, keep it in the Tailwind/Tailwind-utility style already used here.

## JavaScript / linting expectations

- ESLint is configured for browser JS/JSX only; see [eslint.config.js](eslint.config.js).
- Favor fixable lint issues over suppressions.
- Keep React component structure simple and consistent with the existing app patterns.
- Do not introduce new libraries or framework changes without updating the config and project docs.

## Safe editing patterns

- For layout or visual tweaks, update the relevant section in `src/index.css` instead of creating another stylesheet.
- For component logic or markup changes, prefer small, focused updates in [src/App.jsx](src/App.jsx).
- If a new custom utility is needed, add it alongside the current utility definitions and reuse the established naming pattern.
- Keep changes scoped to the relevant visual section or component.

## When in doubt

- Follow the existing patterns in [src/index.css](src/index.css) and the Vite/Tailwind setup in [vite.config.js](vite.config.js).
- Accept Tailwind-specific CSS syntax as valid for this repo, even if a generic CSS inspection tool reports unknown at-rules.
