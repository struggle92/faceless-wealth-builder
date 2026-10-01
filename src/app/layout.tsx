import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faceless Wealth Builder",
  description: "A faceless content and course business with automated income streams.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
