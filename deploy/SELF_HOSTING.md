# Self-hosting the portfolio

The production artifact is a static website in `selfhost-dist/`. It does not
depend on ChatGPT Sites, Vinext, Node.js, a database, or an external hosting
platform after export.

## Build

```bash
npm ci
npm run export:selfhost
tar -C selfhost-dist -czf portfolio-site.tar.gz .
```

## Host

Install nginx in a small Debian LXC, copy the archive to the host, and extract
it into `/var/www/portfolio`. Install `deploy/nginx.conf` as the enabled nginx
site. The existing Cloudflare Tunnel can then route the public portfolio
hostname to the LXC's port 80.

## Update

Add or edit project data in `app/projects.ts`, add any associated assets under
`public/`, run the export again, and replace the contents of
`/var/www/portfolio` with the new artifact.
