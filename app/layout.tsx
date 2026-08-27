import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Lambert — Projects",
  description:
    "Selected self-hosted software projects designed, built, and operated end-to-end by Mike Lambert.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
