export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  outcome: string;
  details: string[];
  stack: string[];
  status: string;
  accent: "coral" | "cyan" | "violet" | "gold";
  preview: "known-state" | "job-watch" | "home-ledger" | "gala";
  demoUrl?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    name: "Known State",
    eyebrow: "Business operations",
    summary:
      "A self-hosted command center for expenses, receipts, sales, and the decisions that connect them.",
    outcome:
      "Replaces scattered records and manual reconciliation with one review-driven financial workflow.",
    details: [
      "Gmail receipt ingestion and structured review queues",
      "Duplicate prevention and transaction matching",
      "Operational categories, dashboards, and tax-ready reporting foundations",
    ],
    stack: ["Python", "Flask", "SQLite", "Docker", "Google APIs"],
    status: "Live demo",
    accent: "coral",
    preview: "known-state",
    demoUrl: "https://knownstate-demo.waffle-cloud.com/",
  },
  {
    name: "Job Watch",
    eyebrow: "Search automation",
    summary:
      "A focused job-search workspace that converts noisy feeds into a prioritized, learnable pipeline.",
    outcome:
      "Cuts repetitive searching and keeps decisions, application status, and rejection feedback in one system.",
    details: [
      "Multi-source ingestion, normalization, and deduplication",
      "Rule-based scoring and prioritized opportunity views",
      "Application tracking, analytics, and structured feedback",
    ],
    stack: ["Python", "SQLite", "Docker", "Automation"],
    status: "Private production",
    accent: "cyan",
    preview: "job-watch",
  },
  {
    name: "HomeLedger",
    eyebrow: "Household planning",
    summary:
      "A cash-flow planner built around the way bills and income actually move through a household.",
    outcome:
      "Makes the current and next bill-pay cycles understandable without forcing real life into a calendar-month budget.",
    details: [
      "7th / 22nd budget-cycle planning and available-cash calculations",
      "Balances, recurring activity, payments, and financial history",
      "Secure versioned API and a native iOS companion",
    ],
    stack: ["Flask", "SQLite", "Docker", "Cloudflare", "Swift"],
    status: "Private production",
    accent: "violet",
    preview: "home-ledger",
  },
  {
    name: "Gala Productions",
    eyebrow: "Client web build",
    summary:
      "A complete visual and content rebuild for a New York event-production company, translated from a supplied wireframe into a polished, responsive WordPress experience.",
    outcome:
      "Turned a sparse planning artifact into a production site with a stronger visual hierarchy, clearer service paths, venue discovery, and an editorial system the client can maintain.",
    details: [
      "Wireframe-to-production translation with high-fidelity responsive behavior",
      "Custom WordPress, Impreza, WPBakery, HTML, and CSS implementation",
      "Venue architecture, service galleries, performance tuning, and client handoff",
    ],
    stack: ["WordPress", "WPBakery", "HTML", "CSS", "Responsive UX"],
    status: "Live client site",
    accent: "gold",
    preview: "gala",
    demoUrl: "https://gala-productions.com/",
    linkLabel: "View live site",
  },
];
