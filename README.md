# Mike Lambert — Project Portfolio

Source for my public project portfolio at
[projects.waffle-cloud.com](https://projects.waffle-cloud.com/).

The site presents selected software, automation, infrastructure, and client
web projects through concise case studies. It is designed as a static,
self-hosted site and is served from my own infrastructure through Nginx.

## Featured work

- **Known State** — business expense, receipt, and sales workflow automation
- **Job Watch** — job-search ingestion, scoring, and application tracking
- **HomeLedger** — household cash-flow and bill-cycle planning
- **Gala Productions** — responsive WordPress client build translated from a
  supplied wireframe

The production applications are private because they contain personal or
business data. Known State has a public demonstration linked from the live
portfolio.

## Technology

- React 19
- TypeScript
- Next.js-compatible Vinext runtime
- Vite
- Responsive CSS
- Static self-host export
- Nginx

## Local development

Node.js 22.13 or newer is required.

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

## Self-hosted export

The self-host export produces a static directory that can be served directly
by Nginx:

```bash
npm run export:selfhost
```

The generated site is written to `selfhost-dist/`. See
[`deploy/SELF_HOSTING.md`](deploy/SELF_HOSTING.md) for the Nginx deployment
layout.

## Client-owned assets

The Gala Productions wireframe and completed-site comparison images are not
included in this public repository. See
[`public/gala/README.md`](public/gala/README.md) for the expected private asset
names.

## Repository scope

This repository contains only the portfolio frontend and deployment tooling.
It does not contain:

- source code for the featured private applications
- credentials or API keys
- Cloudflare tunnel configuration
- internal hostnames or IP addresses
- production data

## License

Released under the [MIT License](LICENSE).
