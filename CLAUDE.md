# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # Run ESLint over the repo
```

There is no test runner configured.

## Stack

Single-page personal portfolio built with **React 19**, **Vite 6**, and **Tailwind CSS v4**. Plain JavaScript/JSX — no TypeScript despite the `@types/*` dev dependencies.

Tailwind is wired through the `@tailwindcss/vite` plugin (see `vite.config.js`) and is **config-less**: there is no `tailwind.config.js`. Tailwind is pulled in via `@import "tailwindcss"` at the top of `src/index.css`, which is also where the dark-mode variant is declared (`@custom-variant dark`) and where custom global CSS lives.

## Architecture

`src/App.jsx` is a flat composition that renders every page section in fixed order (`Navbar → Hero → About → Portfolio → Contact → Footer → ScrollToTop`). There is no router; navigation is anchor-based scrolling between section `id`s.

**Content is separated from presentation.** Each component in `src/components/` has a matching data module in `src/data/` (e.g. `Hero.jsx` ↔ `homeData.jsx`, `Navbar.jsx` ↔ `navbarData.jsx`). The data files are plain JS objects/arrays exporting copy, links, icon class names, and image paths. **To change site content, edit the `src/data/*.jsx` file, not the component.** Components are layout-only and iterate over their data.

**Dark mode** is owned entirely by `src/components/Navbar.jsx`. It toggles the `dark` class on `document.documentElement` and persists the choice in `localStorage` under the `theme` key. Everything else just responds to it through Tailwind `dark:` utility classes — so styling work means writing paired light/`dark:` classes, not touching theme state.

**Cross-cutting UI libraries** are initialized in `src/main.jsx` and used declaratively across components:
- **AOS** — scroll animations; initialized once in `main.jsx`, applied via `data-aos="..."` attributes on elements.
- **boxicons** — all icons are CSS-class based (e.g. `bx bxl-react`); icon names are stored as strings in the data files.
- **@tippyjs/react** — tooltips (`<Tippy>` wrapper).
- **sweetalert2** — modal dialogs (`Swal.fire`).
- **react-typed** — the rotating typewriter text in the Hero.

## Notable gotchas

- **`@supabase/supabase-js` is a dependency but is not used anywhere.** There is no Supabase client, and no `.env` / `VITE_*` variables are read in the codebase.
- **The Contact form is non-functional.** Submitting only fires a SweetAlert success popup (`src/components/Contact.jsx`); no message is actually sent or stored.
- Static assets (CV PDF, avatar, QR images) live in `public/assets/` and are referenced by absolute root paths like `/assets/avatar.jpeg` from the data files.
