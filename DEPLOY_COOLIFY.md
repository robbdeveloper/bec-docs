# Deploy on Coolify 4.x (this guide targets v4.0.0+)

## Fix: “Nixpacks failed to detect the application type”

That almost always means **Nixpacks did not see a `package.json` in the directory it plans**. The Node provider only runs when **`package.json` exists** at Coolify’s **Base Directory** (the folder passed to `nixpacks plan … /artifacts/...`).

**What went wrong in the typical failing logs:** Coolify is building **`robbdeveloper/booking-engine-connector`**. This Docusaurus project is **`robbdeveloper/bec-docs`** (see `git remote -v` on your machine). The connector repository root usually has **no `package.json`**, so Nixpacks finds no Node app. Point Coolify at **`bec-docs`**, or set **Base Directory** to the monorepo subfolder that contains **`package.json`**.

**Choose one:**

1. **Recommended:** Edit the Coolify resource → **Source** → set the repository to **`robbdeveloper/bec-docs`** (branch `main` or whichever you publish). Leave **Base Directory** at **`/`**.
2. **Monorepo:** If the Docusaurus app only exists **inside** `booking-engine-connector` (e.g. `./documentation/`), set **Base Directory** to that subpath so it contains **`package.json`**, **`package-lock.json`**, and **`nixpacks.toml`** (or **`Dockerfile`**).
3. **Bypass Nixpacks:** Deploy this repo with the **Dockerfile** build pack ([Dockerfile deploy](#alternative-dockerfile-deploy-no-nixpacks)).

This repository is a **Docusaurus 3** site. On **Coolify 4**, the usual path is **Git → Nixpacks → Static** (`npm ci`, `npm run build`, **`build/`** output) served by **Nginx**.

Official references:

- [Static build packs](https://coolify.io/docs/applications/build-packs/static) (Nixpacks → **Static**, Nginx)
- [Nixpacks build pack](https://coolify.io/docs/applications/build-packs/nixpacks)
- [GitHub App setup](https://coolify.io/docs/applications/ci-cd/github/setup-app)
- [GitHub auto deploy](https://coolify.io/docs/applications/ci-cd/github/auto-deploy)
- [Applications](https://coolify.io/docs/applications/index) (Base Directory, Public Directory)

Repo files that support the build:

- [`nixpacks.toml`](nixpacks.toml) — Node **`NIXPACKS_NODE_VERSION`** (aligned with Coolify defaults), **`npm ci`**, **`npm run build`**
- [`package.json`](package.json) — `engines.node` ≥ 20
- [`Dockerfile`](Dockerfile) — optional Coolify **Dockerfile** path (multi-stage Node build + Nginx)
- [`docker/nginx/default.conf`](docker/nginx/default.conf) — used by **`Dockerfile`**

---

## What you are deploying (mental model)

1. Coolify clones your Git branch on the build host.
2. **Install**: `npm ci` (pinned lockfile recommended; this repo ships [`package-lock.json`](package-lock.json)).
3. **Build**: `npm run build` → Docusaurus writes output to **`build/`** (English at the root bundle; Italian under locale paths such as **`/it/...`** per Docusaurus i18n).
4. Coolify copies **`build/`** into an image served by **Nginx**.

This is **not** the alternate Coolify workflow where you **commit only pre-built HTML** to Git (“Static Build Pack” literal path in docs). Here the **static output is produced during the Coolify build**.

---

## Prerequisites (avoid surprises)

| Item | Why it matters |
|------|----------------|
| **Coolify 4.0.0+** on a server with enough RAM/CPU for `npm ci` + Docusaurus build | Builds are heavier than serving plain HTML |
| **Node 20+** during build | Declared in `package.json` / [`nixpacks.toml`](nixpacks.toml) |
| **DNS** pointed at your server (or reverse proxy) **before** expecting clean HTTPS | Let’s Encrypt validation needs a reachable hostname |
| **`DOCS_SITE_URL` set before/at build** | Docusaurus bakes `config.url` at **build** time (see below) |
| **Lockfile committed** | `npm ci` requires an in-sync [`package-lock.json`](package-lock.json) |

---

## One-time: connect GitHub (recommended for private repos)

If the repository is **private**, use a **GitHub App** so Coolify can clone and receive push events without sharing a long-lived password.

Summary from Coolify docs ([Setup GitHub App](https://coolify.io/docs/applications/ci-cd/github/setup-app)):

1. In Coolify, open **Sources** → **+ Add** → create a **GitHub App** source (prefer **Automated installation**).
2. Set the **Webhook endpoint** GitHub must reach (if you block inbound ports on the host, prefer your **Coolify dashboard URL** as the webhook target—see that guide’s warnings).
3. On GitHub, finish app creation/install and grant access to **`bec-docs`** (or the whole org, if policy allows).
4. Back in Coolify, confirm the source shows healthy / synced.

Public repo alternative: skip the GitHub App and use **Public repository** URL when creating the resource (fewer moving parts).

---

## Step-by-step: create the Application (Coolify 4 UI)

Screen labels vary slightly across Coolify patches; use the checklist below as the authoritative mapping.

### 1. Create a resource

1. Open your **Project**.
2. **+ New** (or **Create New Resource**).
3. Choose **Application** (not a Database/Service unless you deliberately want something else).

### 2. Pick where it runs

- Select the **Server** / **destination** where the container should deploy (Coolify picks `localhost` if you only have one node).

### 3. Connect the repository

**Private repo (GitHub App):**

1. Choose **Private Repository (with Github App)** (exact label may read “GitHub App”).
2. Select the GitHub App **Source** created above.
3. **Load repository** → choose **`bec-docs`** (or your fork name).

**Public repo:**

1. Choose **Public Repository**.
2. Paste `https://github.com/<org-or-user>/bec-docs.git` (HTTPS URL form is fine unless you prefer SSH URLs your worker understands).

Then set:

- **Branch**: `main` (or whichever branch is production).

### 4. Build pack: Nixpacks → Static site + Nginx

Coolify exposes this in slightly different shapes depending on the wizard—but for **this** repo both ideas must eventually be true:

1. **Detector / runtime is Nixpacks** ([overview](https://coolify.io/docs/applications/build-packs/overview)).
2. The **artifacts are handled as static content served by Nginx**, not executed by Node at runtime ([Static build packs](https://coolify.io/docs/applications/build-packs/static)).

**During create-resource flow:**

1. Build pack defaults to **Nixpacks** — keep it selected.
2. Per the static-pack walk-through, Coolify normally shows a subtype dropdown labelled **Static** underneath Nixpacks—choose **Static**.

**After the resource exists:**

1. Go to **Configuration → Advanced**.
2. Set **Static Site** (**Is it a static site?**) to **`true`** if Nixpacks does not automatically flip it (`false` disables the feature altogether; Coolify warns it is **[Nixpacks-only]** per [Applications / Advanced](https://coolify.io/docs/applications/index)).
3. **Web server** remains **Nginx** (only option documented from **v4.0.0-beta.402** onward).

### 5. Directories and commands (critical)

Use Coolify’s **General Configuration** headings ([Applications docs](https://coolify.io/docs/applications/index)):

| Concept | Set to | Notes |
|--------|--------|--------|
| **Base Directory** | Repo root (`/`) | Required for monorepos when the app isn’t at `/` ([Applications / Base Directory](https://coolify.io/docs/applications/index)) |
| **Install Command** | `npm ci` | Mirrors [`nixpacks.toml`](nixpacks.toml); if empty, Nixpacks often auto-detects from lockfiles |
| **Build Command** | `npm run build` | Runs `docusaurus build` |
| **Public / Publish / Output Directory** | `build` | Coolify calls this **Public Directory** in the general settings—must be **`build`**, never `dist` |
| **Port Exposes** | Prefer Coolify’s template default | If you must set it manually for Nginx, use **`80`** (example in [Applications / Port Exposes](https://coolify.io/docs/applications/index)) |

Leave **Start Command** empty unless Coolify prompts for one for your template; serving is handled by Nginx against the publish directory.

**SPA mode:** Docusaurus emits real HTML routes for docs pages. Leave **SPA / SPA routing** toggles **off** unless Coolify exposes it and your testing shows incorrect fallbacks (uncommon for generated Docusaurus static output).

### 6. Environment variables (build metadata)

Coolify merges variables into your build environment. Configure at least:

| Name | Example | Purpose |
|------|---------|--------|
| **`DOCS_SITE_URL`** | `https://docs.example.com` | Canonical site origin (**no trailing slash**). Passed at build time; see [`docusaurus.config.ts`](docusaurus.config.ts). |

Tips:

1. Prefer **Build-time availability** / “available during build” (terminology differs by Coolify version) for **`DOCS_SITE_URL`** whenever the UI distinguishes build vs runtime.
2. Changing **`DOCS_SITE_URL`** after the first deployment requires a **redeploy** so Docusaurus rewrites metadata (`sitemap`, Open Graph URLs, canonical links).
3. Optional override: **`NIXPACKS_NODE_VERSION=20`** if you bypass [`nixpacks.toml`](nixpacks.toml) or need to pin explicitly in the UI.

Copy [`.env.example`](.env.example) as a mnemonic; Coolify stores values in its UI / secrets, not necessarily in-repo.

### 7. Domain, HTTPS, redirects

1. Under **Domains**, add both your bare host and/or `www` if needed (comma-separated in some dialogs—see docs).
2. Enable **HTTPS** where applicable. Coolify ships **Force HTTPS** enabled globally by default—but confirm it remains on if you tweaked proxy settings ([Applications / Advanced → Force HTTPS](https://coolify.io/docs/applications/index)).
3. Ensure **`DOCS_SITE_URL`** uses the **same scheme and host** visitors use (normally `https://` + primary hostname).

DNS must resolve to your Coolify-managed proxy/host **before** certificate issuance succeeds.

### 8. Auto deploy on every push

Coolify integrates at the source ([GitHub auto deploy overview](https://coolify.io/docs/applications/ci-cd/github/auto-deploy)):

**GitHub App path (usual, per Applications → Advanced wording):**

- **Auto Deploy** defaults to **`true`** for GitHub App–based repositories ([Applications / Advanced → Auto Deploy](https://coolify.io/docs/applications/index)).
- If pushes do not trigger builds: verify **Advanced → Auto Deploy** remains enabled **and** GitHub webhook deliveries return **HTTP 200** (see troubleshooting).

**Webhook path (fallback):**

1. Same **Advanced** page: enable **Auto Deploy**.
2. Set a **Webhook secret**, copy Coolify’s **Webhook URL**.
3. In GitHub: **Repo → Settings → Webhooks → Add webhook**  
   Payload URL → Coolify webhook; Secret → same string; **`push`** events only; SSL verification **on**.

**GitLab / Bitbucket / Gitea:** use the analogous provider webhook or OAuth integration documented for your revision of Coolify 4—pattern matches: **credential + webhook + Auto Deploy**.

**Preview deployments:** If your GitHub App enables PR previews globally and you receive unwanted preview apps, tune or disable previews in the Coolify GitHub integration settings ([setup guide](https://coolify.io/docs/applications/ci-cd/github/setup-app) mentions previews).

---

## First deploy checklist

Before clicking **Deploy**:

- [ ] Branch is your production branch.
- [ ] **Nixpacks** targets static output (**Static subtype** **or** Advanced → **Static Site / Is it a static site?** = **`true`**).
- [ ] **`npm ci` / `npm run build` / publish `build`** are set correctly.
- [ ] **`DOCS_SITE_URL`** matches the eventual public HTTPS URL.
- [ ] Domain DNS is ready.

After deploy succeeds:

1. Open `/` — homepage renders.
2. Open `/docs/` — sidebar loads.
3. Switch **Italiano** — paths under **`/it/...`** should exist (reload a deep doc URL to verify static routes exist).

Trigger a harmless commit on the tracked branch—confirm a **second deployment** starts without manual clicks when **Auto Deploy** is on.

---

## Optional: custom Nginx rules

Coolify exposes a workflow to fetch the generated default config (`Generate`), edit, then **`Restart`** the app ([Nixpacks static sites](https://coolify.io/docs/applications/build-packs/nixpacks)). Prefer staying on defaults until something concrete requires headers, redirects, or long cache TTLs—defaults should serve Docusaurus static output fine.

---

## Troubleshooting quick reference

| Symptom | Likely fix |
|---------|-------------|
| Nixpacks “failed to detect the application type” | **Wrong repo** (e.g. Coolify still on `booking-engine-connector`) or **wrong Base Directory**. Nixpacks only sees one folder: it must contain **`package.json`**. Use **`bec-docs`** or set Base Directory to your docs subfolder. |
| Build dies on **`npm ci`** | Lockfile mismatch—run **`npm install`** locally, commit **`package-lock.json`**; or temporarily use **`npm install`** in Coolify (prefer fixing the lockfile). |
| Build dies on **`docusaurus build`** | Inspect logs for **`onBrokenLinks: 'throw'`**—fix Markdown links locally; run **`npm run build`** on your workstation. |
| Wrong canonical / OG URLs in HTML | **`DOCS_SITE_URL`** absent or mismatched scheme/host—set and **Redeploy**. |
| Served site is empty / Nginx serves wrong tree | **`Public Directory`** is not **`build`**, **or** **Advanced → Static Site** stayed **`false`** for a Nixpacks build meant to emit static artifacts. Enable static mode + redeploy ([Applications / Advanced → Static Site](https://coolify.io/docs/applications/index)). |
| Node version errors during build | Align Coolify with **`nixpacks.toml`** (`NIXPACKS_NODE_VERSION`) or set **`NIXPACKS_NODE_VERSION=22`** (see [`nixpacks.toml`](nixpacks.toml)). |
| Auto deploy silent | Confirm GitHub webhook deliveries show **HTTP 200**; verify endpoint reachability ([setup docs](https://coolify.io/docs/applications/ci-cd/github/setup-app)); **Advanced → Auto Deploy** enabled. |

---

## Local parity check (recommended)

Before blaming Coolify, reproduce the identical steps locally:

```bash
npm ci
DOCS_SITE_URL=https://YOUR-PUBLIC-HOST npm run build
```

If local build fails, fix the docs/config first—Coolify cannot succeed until this passes.

---

## Alternative: Dockerfile deploy (no Nixpacks)

Use this path if you want to **avoid Nixpacks entirely** (or Coolify keeps running `nixpacks plan` on a tree without **`package.json`** until you fix the Git source).

1. Confirm Coolify clones **`robbdeveloper/bec-docs`** (or whatever repo contains **[`Dockerfile`](Dockerfile)** at **Base Directory** `/`).
2. **Build Pack** → **Dockerfile**.
3. **Dockerfile location** → root **`Dockerfile`** (default `./Dockerfile` if unspecified).
4. **Build Argument** → **`DOCS_SITE_URL`** = `https://bec-docs.apps.robb.cx` (your real public URL, **no trailing slash**—must match HTTPS + host).
5. **Port Exposes** → **`80`** (the image listens on **`80`**; Coolify proxies to it).
6. You do **not** need Coolify **Public Directory / install / build commands** when the image already contains built static files—the **`Dockerfile`** runs **`npm run build`** and copies **`build/`** into Nginx.

Verify locally:

```bash
docker build --build-arg DOCS_SITE_URL=https://bec-docs.apps.robb.cx -t bec-docs:local .
docker run --rm -p 8080:80 bec-docs:local
```

Open `http://localhost:8080/`.

---

## Summary shortcut

Coolify **4.0.0+** + correct **Git repo** (with **`package.json`**) + (**Nixpacks Static + `build`** **or** **Dockerfile**) + **`DOCS_SITE_URL`** + **HTTPS** + **Auto Deploy** → push-to-publish docs.
