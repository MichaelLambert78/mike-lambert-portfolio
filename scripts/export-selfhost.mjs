import { spawn } from "node:child_process";
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import process from "node:process";

const port = 4178;
const origin = `http://127.0.0.1:${port}`;
const output = new URL("../selfhost-dist/", import.meta.url);

const server = spawn(
  process.execPath,
  ["node_modules/vinext/dist/cli.js", "start", "--port", String(port), "--hostname", "127.0.0.1"],
  { stdio: ["ignore", "pipe", "pipe"] },
);

let serverOutput = "";
server.stdout.on("data", (chunk) => { serverOutput += chunk; });
server.stderr.on("data", (chunk) => { serverOutput += chunk; });

async function waitForHomepage() {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(origin);
      if (response.ok) return response.text();
    } catch {
      // The server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`The production server did not become ready.\n${serverOutput}`);
}

try {
  let html = await waitForHomepage();

  // This portfolio has no client-side state. Removing the Vinext runtime turns
  // the server-rendered response into a portable static document for nginx.
  // Keep the explicitly marked GoatCounter script for privacy-friendly traffic
  // analytics while stripping the framework runtime.
  html = html
    .replace(/<script(?![^>]*data-goatcounter)[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/ data-rsc-[a-z-]+="[^"]*"/g, "")
    .replace(/ data-precedence="[^"]*"/g, "");

  await rm(output, { recursive: true, force: true });
  await mkdir(output, { recursive: true });
  await cp(new URL("../dist/client/", import.meta.url), output, { recursive: true });
  await cp(new URL("../public/", import.meta.url), output, { recursive: true });
  await writeFile(new URL("index.html", output), html);

  const written = await readFile(new URL("index.html", output), "utf8");
  if (!written.includes("Gala Productions") || !written.includes("Known State")) {
    throw new Error("Static export verification failed");
  }

  console.log("Self-hosted static export created at selfhost-dist/");
} finally {
  server.kill("SIGTERM");
}
