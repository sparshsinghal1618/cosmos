# Contributing to COSMOS

Thanks for taking the time to contribute! 🌌

## Getting set up

```bash
git clone https://github.com/<your-username>/cosmos.git
cd cosmos
npm install
npm run dev        # http://localhost:5173
```

Requirements: **Node.js 18+** and a WebGL-capable browser.

## Before you open a pull request

- Run `npm run build` and make sure it still succeeds.
- Keep the console clean — no new errors or warnings from the app.
- Follow the existing style: plain ES modules, functional React components, and plain CSS.
  No TypeScript, no CSS frameworks, no new UI kits.
- Keep changes focused. One feature or fix per pull request reads better than a mega-commit.

## Scientific content

COSMOS aims to be accurate and honest:

- Prefer **NASA / ESA / JPL / ISRO / JAXA / SpaceX / Roscosmos / CNSA / UAESA** sources.
- Tag claims as *established*, *observed*, *estimated* or *theoretical* — don't present
  speculation as fact.
- Label compressed or stylised scale models as simulations.
- Avoid fake or decorative controls: a control should do something real.

## Assets

There are **no third-party image assets** — worlds, clouds, rings, nebulae and stars are
generated procedurally with `CanvasTexture`s. If you add visuals, keep them procedural or
public-domain and document the source.

## Good first issues

- New exoplanets, missions, galaxies or nebulae.
- Additional science calculators.
- Localisation / internationalisation.
- Performance improvements for low-end devices.
- Accessibility fixes.

## Commit messages

Use clear, imperative messages, e.g. `fix: keep distance-converter selects inside the card`.

## Code of conduct

Be kind, be patient, assume good faith. Harassment or disrespect isn't welcome here.
