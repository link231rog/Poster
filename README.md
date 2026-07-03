# Poster — Personal Portfolio Site

A minimalist portfolio site built with Astro, featuring a full-screen hero with sunset scroll animation.

## Project Structure

```text
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Astro components (WireframeGlobe, etc.)
│   ├── layouts/            # Page layouts (BaseLayout)
│   ├── lib/                # Utilities (content fetching)
│   ├── pages/              # Route pages
│   │   └── index.astro     # Home page with hero section
│   └── styles/             # Global CSS
│       └── global.css
└── package.json
```

## Features

- **Sunset scroll animation**: Hero content sinks below the viewport as user scrolls, using ease-out cubic easing for a physical "pulling away" feel
- **Wireframe globe**: Animated SVG sphere with rotation
- **Gate navigation**: Magnetic hover effects on navigation blocks

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start dev server at `localhost:4321`             |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally before deploying           |
