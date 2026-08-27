import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike Lambert — Projects",
  description:
    "Selected self-hosted software projects designed, built, and operated end-to-end by Mike Lambert.",
  icons: {
    icon: [
      { url: "/brand/favicon.ico", sizes: "any" },
      { url: "/brand/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/brand/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          data-goatcounter="https://stats.waffle-cloud.com/count"
          async
          src="https://stats.waffle-cloud.com/count.js"
        />
      </body>
    </html>
  );
}
