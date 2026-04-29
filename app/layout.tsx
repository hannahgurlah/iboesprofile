import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Landahan Elementary School",
  description:
    "A modern school profile website built with Next.js for Landahan Elementary School.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
