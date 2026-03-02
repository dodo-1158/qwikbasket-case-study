// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Qwikbasket UX Case Study",
  description:
    "Detailed UX case study for Qwikbasket – a B2B grocery and fresh produce marketplace with Smart Credit for restaurants and food businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}