import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pedro's Professional Roofing | Western NC Roofer",
  description:
    "Trusted, insured roofing company serving Western North Carolina. Shingle & standing seam metal roofs. Free quotes. Call (828) 527-7287.",
  openGraph: {
    title: "Pedro's Professional Roofing",
    description:
      "Trusted, insured roofing company serving Western North Carolina. Shingle & standing seam metal roofs. Free quotes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
