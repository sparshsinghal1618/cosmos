<div align="center">

# 🌌 COSMOS — Explore Beyond Earth

**An immersive, interactive 3D journey through the Solar System, the stars, galaxies, black holes and the observable universe — built with React, Vite and Three.js, and rendered entirely in your browser.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev)
[![Three.js](https://img.shields.io/badge/Three.js-r169-000000?logo=three.js&logoColor=white&style=flat-square)](https://threejs.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](#-contributing)
[![Node](https://img.shields.io/badge/node-%E2%89%A5%2018-339933?logo=node.js&logoColor=white&style=flat-square)](#-quick-start)

![COSMOS — landing page](docs/home.webp)

</div>

---

COSMOS is a cinematic, single-page WebGL experience. Fly through a live Solar System, look
inside a black hole, watch a rocket leave the pad, orbit the International Space Station,
scrub through 13.8 billion years of cosmic history, and run real orbital-mechanics
calculators — all in the browser, with **zero external image assets**. Every planet, cloud,
ring, nebula and star is generated procedurally with `CanvasTexture`s.

> **No fake controls, no lorem ipsum.** Every slider, toggle and calculator is wired to real
> state or real physics, and every figure is sourced from NASA / ESA / JPL.

---

## 📖 Table of contents

- [✨ Features](#-features)
- [📸 Screenshots](#-screenshots)
- [🧱 Tech stack](#-tech-stack)
- [🚀 Quick start](#-quick-start)
- [🖱️ How do I open it?](#️-how-do-i-open-it)
- [🗺️ Routes](#️-routes)
- [📁 Project structure](#-project-structure)
- [🔬 Scientific accuracy](#-scientific-accuracy)
- [⚡ Performance & accessibility](#-performance--accessibility)
- [☁️ Deploying to GitHub Pages](#️-deploying-to-github-pages)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgements](#-acknowledgements)

---

## ✨ Features

| Area | What you get |
| ---- | ------------ |
| **Live 3D worlds** | Procedural Solar System, planet viewer (day/night Earth, atmospheres, rings), spiral-galaxy generator, accretion-disk black hole with gravitational lensing. |
| **Worldwide missions** | 30+ missions across NASA, ESA, ISRO, JAXA, SpaceX, Roscosmos, CNSA and UAESA — plus an animated **rocket launch** (hold-down → liftoff → max-Q → booster separation → orbit) and a procedural **ISS** orbiting a day/night Earth. |
| **Real science tools** | Distance converter, orbital velocity, escape velocity, surface gravity and Schwarzschild-radius calculators built on published constants. |
| **Cosmic timeline** | 13.8 billion years on a logarithmic axis, from the Big Bang to today. |
| **Universe explorer** | Free-form sandbox with live time controls for the whole Solar System. |
| **Search palette** | `Ctrl/⌘ + K` fuzzy search across every page, world and object. |
| **Personalisation** | Quality tiers (high / medium / low), sound, reduced-motion, persisted locally. |
| **Tuned for phones** | Device-aware defaults, capped pixel ratio, no MSAA/shadows on mobile, canvases pause when offscreen or the tab is hidden, 44px+ touch targets, safe-area insets and bottom-sheet panels. |
| **Resilient rendering** | Per-scene error boundaries and a styled 2D fallback when WebGL is unavailable. |
| **First-class UX** | Keyboard navigation, skip link, focus management on route change, ARIA labels, scroll-reveal animations. |

### The 3D scenes

`CosmosScene` · `SolarScene` · `PlanetScene` · `GalaxyScene` · `BlackHoleScene` ·
`RocketScene` · `IssScene` · plus reusable `StarField`, `Nebula`, `DistantPlanet`,
`CameraRig`, a custom Earth day/night shader and a fresnel atmosphere material.

---

## 📸 Screenshots

| Landing | Universe Explorer |
| :---: | :---: |
| ![Landing](docs/home.webp) | ![Universe Explorer](docs/explore.webp) |

| Solar System | Planet Viewer |
| :---: | :---: |
| ![Solar System](docs/solar-system.webp) | ![Planet viewer](docs/planets.webp) |

| Galaxies | Black Holes |
| :---: | :---: |
| ![Galaxy explorer](docs/galaxies.webp) | ![Black holes](docs/black-holes.webp) |

| Missions, launches & ISS | Science Tools |
| :---: | :---: |
| ![Missions](docs/missions.webp) | ![Science tools](docs/science.webp) |

| Cosmic Timeline | |
| :---: | :---: |
| ![Timeline](docs/timeline.webp) | |

---

## 🧱 Tech stack

- **React 18** + **Vite 5** — fast HMR, route-level code splitting.
- **Three.js r169** via **@react-three/fiber** and **@react-three/drei** — declarative WebGL.
- **react-router-dom 6** — `BrowserRouter` with a `404.html` SPA fallback.
- **lucide-react** — icons.
- **Plain CSS** — design tokens in `src/styles/tokens.css`-style variables, no CSS framework.

No UI kit, no CSS-in-JS, no TypeScript — just readable ES modules and plain CSS.

---

## 🚀 Quick start

### Prerequisites

- **Node.js 18+** (developed and tested on Node 20)
- A modern desktop browser with WebGL 2

### Install & run

```bash
git clone https://github.com/<your-username>/cosmos.git
cd cosmos

npm install
npm run dev              # dev server → http://localhost:5173
```

### Scripts

| Command | What it does |
| ------- | ------------ |
| `npm run dev` | Start the Vite dev server with hot reload. |
| `npm run build` | Production build into `dist/` (three.js split into its own chunk). |
| `npm run preview` | Serve the production build locally. |

---

## 🖱️ How do I open it?

A Vite app **cannot** run by double-clicking `index.html` — browsers refuse to load ES
modules over `file://`. Start a local server instead:

| You want… | Do this |
| --------- | ------- |
| To develop / hot-reload | `npm run dev` → open the printed `http://localhost:5173/` |
| The production build locally | `npm run build` then `npm run preview` |
| To deploy | Push to GitHub — the included Actions workflow publishes to GitHub Pages |

Deep links such as `/planets` and `/science` work in dev, preview and on GitHub Pages (the
workflow copies `index.html` to `404.html` so hard refreshes still load the app).

---

## 🗺️ Routes

| Route | Page | What it is |
| ----- | ---- | ---------- |
| `/` | Landing | Cinematic intro, live cosmos scene, scale / deep-space sections |
| `/explore` | Universe Explorer | Free-form live Solar System simulation with time controls |
| `/solar-system` | Solar System | Guided, educational view of the system + small bodies |
| `/planets` | Planet Explorer | Single-world viewer (day/night Earth, moon phases, rings) |
| `/galaxies` | Galaxy Explorer | Procedural spiral galaxies + nebula nurseries |
| `/black-holes` | Black Holes | Accretion-disk simulation + real physics calculators |
| `/missions` | Missions | Worldwide missions, launch simulation, ISS, Webb facts |
| `/timeline` | Cosmic Timeline | 13.8 billion years on a logarithmic axis |
| `/science` | Science Tools | Live orbital / escape / gravity / distance calculators |

The landing page also exposes deep links such as `/planets?focus=earth` and
`/galaxies?focus=andromeda`, used by the search palette.

---

## 📁 Project structure

```text
.
├─ index.html                 # Vite entry (dev + build)
├─ vite.config.js              # base path + manual three.js chunk split
├─ package.json
├─ docs/                       # README screenshots
├─ public/
│  ├─ favicon.svg
│  ├─ manifest.webmanifest    # PWA “add to home screen”
│  └─ robots.txt
└─ src/
   ├─ main.jsx                 # entry: global styles, router, providers
   ├─ App.jsx                  # lazy routes + scroll management
   ├─ context/
   │  └─ ExperienceContext.jsx # app state, settings, telemetry, search
   ├─ data/                    # all editorial & scientific content
   │  ├─ site.js              # nav, routes, metadata, data sources
   │  ├─ planets.js           # Sun, planets, Moon, asteroids, comets
   │  ├─ galaxies.js          # Milky Way + catalogue galaxies
   │  ├─ nebulae.js           # nebula entries + explainer
   │  ├─ missions.js          # missions, agencies, ISS, JWST facts
   │  ├─ exoplanets.js        # exoplanet entries
   │  ├─ blackHoles.js        # concepts, objects, constants
   │  ├─ timeline.js          # cosmic timeline events
   │  ├─ scale.js             # "Scale of Everything" steps
   │  ├─ solar.js             # asteroids / comets / Kuiper belt
   │  └─ science.js           # constants + definitions for calculators
   ├─ three/                   # 3D scenes and procedural assets
   │  ├─ CosmosScene.jsx      # landing scene
   │  ├─ SolarScene.jsx       # interactive Solar System
   │  ├─ PlanetScene.jsx      # single-world viewer
   │  ├─ GalaxyScene.jsx      # spiral galaxy generator
   │  ├─ BlackHoleScene.jsx   # accretion disk / lensing
   │  ├─ RocketScene.jsx      # animated launch sequence
   │  ├─ IssScene.jsx         # procedural ISS orbiting day/night Earth
   │  ├─ StarField.jsx, Nebula.jsx, DistantPlanet.jsx, CameraRig.jsx
   │  ├─ earthMaterial.js     # day/night + cloud shader for Earth
   │  ├─ atmosphere.js        # fresnel atmosphere material
   │  └─ textures.js          # procedural CanvasTexture factory (cached)
   ├─ components/              # UI shell and shared widgets
   │  ├─ Navbar, Footer, Layout, LoadingScreen, ErrorBoundary
   │  ├─ Search (SearchPalette), Settings (SettingsPanel)
   │  ├─ MissionControl, InfoPanel, CustomCursor
   │  ├─ SceneCanvas, SceneViewer, WebGLFallback, StaticStars
   │  └─ RouteFallback
   ├─ hooks/                   # useReveal, useScrolled, useOnScreen, …
   ├─ sections/                # landing page sections
   ├─ pages/                   # one component per route
   ├─ styles/                  # tokens, global, pages, landing, mobile
   └─ utils/                   # quality, sound, format helpers
```

---

## 🔬 Scientific accuracy

- **Real physics.** `v = √(GM/r)`, `vₑ = √(2GM/R)`, `F = G·m₁m₂/r²`, `rs = 2GM/c²`,
  gravitational time dilation `t = t₀·√(1 − rs/r)`, plus a full unit converter.
- **Labelled claims.** Content distinguishes *established*, *observed*, *estimated* and
  *theoretical* facts with inline accuracy tags.
- **Published constants.** Figures follow NASA Planetary Fact Sheets, NASA Solar System
  Exploration, ESA, JPL, STScI / Webb and the NASA Exoplanet Archive.
- **Honest simulations.** Orbital and scale models are compressed for clarity and clearly
  labelled as simulations — no claim of true scale.

---

## ⚡ Performance & accessibility

- **Code splitting** — every route is lazy-loaded; `three.js` lives in its own cacheable
  chunk. The first paint ships no WebGL.
- **Adaptive quality** — a device-aware `high` / `medium` / `low` tier caps particle counts,
  pixel ratio and post-processing. Phones start on a lighter tier automatically.
- **Mobile-first rendering** — pixel ratio is capped (≈1.5× on phones), MSAA and shadow maps
  are disabled, and every canvas pauses when it scrolls out of view or the tab is hidden
  (`frameloop="never"`), so phones stay smooth and cool.
- **Efficient rendering** — instanced star fields (one draw call), `CanvasTexture`s cached
  per signature, `dpr` clamped to the device.
- **Accessibility** — respects `prefers-reduced-motion` (plus an in-app override), full
  keyboard support, skip link, focus reset on navigation, ARIA labelling and semantic
  landmarks.
- **Graceful degradation** — an `ErrorBoundary` around each viewer plus a `WebGLFallback`
  2D view means a missing/failed GPU never leaves a blank panel.

Target: **60 fps** on a typical discrete/integrated GPU at 1080p, degrading gracefully.

---

## ☁️ Deploying to GitHub Pages

The repo includes a ready-to-use workflow at `.github/workflows/deploy.yml`.

1. Push the project to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. Every push to `main` builds and publishes the site, including an SPA `404.html`
   fallback so deep links keep working.

The build reads an optional `BASE_PATH` environment variable so the deployed site can live
under `https://<user>.github.io/<repo>/`:

```bash
BASE_PATH=/cosmos/ npm run build
```

With no `BASE_PATH`, the build is served from the origin root (`/`). The router basename
follows `import.meta.env.BASE_URL`, so the same build adapts to whatever subfolder it is
deployed under.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) first.

```bash
npm install
npm run dev        # hack away
npm run build      # make sure it still builds before opening a PR
```

Good first issues: new exoplanets or missions, additional calculators, extra galaxy types,
localisation, or performance wins on low-end devices.

---

## 📄 License

Released under the [MIT License](LICENSE). You are free to use, modify and distribute this
project with attribution.

---

## 🙏 Acknowledgements

- **Three.js**, **React Three Fiber** and **drei** communities.
- **NASA / JPL**, **ESA**, **ISRO**, **JAXA**, **SpaceX**, **Roscosmos**, **CNSA** and **UAESA**
  for the mission and planetary data that make the content real.
- **STScI / Webb** and the **NASA Exoplanet Archive** for deep-space references.

All imagery is generated procedurally from public-domain mathematics and data — no third-party
image assets are bundled.

<div align="center">

**Look up. 🌠**

</div>
