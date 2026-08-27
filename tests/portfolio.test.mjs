import assert from "node:assert/strict";
import { access } from "node:fs/promises";
import test from "node:test";

async function renderPortfolio() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the branded portfolio and project catalog", async () => {
  const response = await renderPortfolio();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  assert.match(html, /<title>Mike Lambert — Projects<\/title>/);
  assert.match(html, /portfolio-logo-dark-192\.png/);
  assert.match(html, /Known State/);
  assert.match(html, /Job Watch/);
  assert.match(html, /HomeLedger/);
  assert.match(html, /Gala Productions/);
  assert.match(html, /knownstate-demo\.waffle-cloud\.com/);
  assert.match(html, /github\.com\/MichaelLambert78/);
});

test("emits the production brand assets", async () => {
  const assets = [
    "../dist/client/brand/portfolio-logo-dark-192.png",
    "../dist/client/brand/favicon.ico",
    "../dist/client/brand/favicon-32.png",
    "../dist/client/brand/apple-touch-icon.png",
  ];

  await Promise.all(
    assets.map((asset) => access(new URL(asset, import.meta.url))),
  );
});
