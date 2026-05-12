# Booking Engine Connector — documentation site

Static documentation for the **Booking Engine Connector** WordPress plugin, built with [Docusaurus](https://docusaurus.io/).

## Content

- Source pages live in [`docs/`](docs/).
- Screenshots are referenced under `docs/img/…` (paths are noted in `{/* … */}` comments next to placeholder images). Replace the placeholder in Markdown with your file under the same path when ready.

## Commands

```bash
npm install
npm start
npm run build
```

Open **Documentation** from the homepage or go to `/docs/`.

## Deploy (Coolify 4)

See **[DEPLOY_COOLIFY.md](DEPLOY_COOLIFY.md)** — Coolify **4.0.0+**: Nixpacks → Static (or root **[`Dockerfile`](Dockerfile)**), correct **Git repo** must contain **`package.json`**, **`DOCS_SITE_URL`**, domains, auto deploy.

## Configuration

- [`docusaurus.config.ts`](docusaurus.config.ts) — site metadata, docs-only preset (`blog: false`), Mermaid.
- [`sidebars.ts`](sidebars.ts) — manual table of contents (numeric folder prefixes in filenames are stripped from URLs/ids by Docusaurus).
