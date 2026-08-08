# Nuxt UI Starter

A starter project for building modern **Vue** applications with [Nuxt](https://nuxt.com) and [Nuxt UI](https://ui.nuxt.com), styled with Tailwind CSS v4.

## Features

- **Nuxt 4** — the full-stack Vue framework (SSR, routing, devtools)
- **Nuxt UI** — accessible, composable UI components
- **Tailwind CSS v4** — utility-first styling via CSS-based configuration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io)

### Installation

```bash
pnpm install
```

### Development

Start the dev server with hot reload:

```bash
pnpm dev
```

The app runs at `http://localhost:3000`.

## Scripts

| Command               | Description                                  |
| --------------------- | -------------------------------------------- |
| `npm run dev`         | Start the development server                 |
| `npm run build`       | Build the application for production         |
| `npm run generate`    | Generate a static/prerendered site           |
| `npm run preview`     | Preview the production build locally         |
| `npm run postinstall` | Runs `nuxt prepare` (auto-run on install)    |

## Project Structure

```
nuxt-ui-starter/
├── app/
│   ├── app.config.ts           # Nuxt UI theme config
│   ├── app.vue                 # Root component
│   ├── assets/css/style.css    # Tailwind & Nuxt UI imports, theme
│   ├── layouts/default.vue     # Default layout
│   └── pages/index.vue         # Home page
├── public/
│   └── favicon.ico
├── nuxt.config.ts              # Nuxt configuration
├── package.json
├── pnpm-lock.yaml
├── README.md
└── tsconfig.json
```