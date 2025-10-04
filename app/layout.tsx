import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Header from "./components/Header";

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
      <Script
        id="ld-localbusiness"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RoofingContractor",
            name: "Pedro's Professional Roofing",
            telephone: "+1-828-527-7287",
            email: "pedrosroofing828@gmail.com",
            image: "/images/logo.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "157 Clark St.",
              addressLocality: "Marion",
              addressRegion: "NC",
              postalCode: "28752",
              addressCountry: "US",
            },
            areaServed: [
              { "@type": "City", name: "Marion" },
              { "@type": "City", name: "Asheville" },
              { "@type": "City", name: "Hickory" },
              { "@type": "City", name: "Charlotte" },
              { "@type": "City", name: "Boone" },
              { "@type": "City", name: "Weaverville" },
              { "@type": "City", name: "Old Fort" },
              { "@type": "City", name: "Spruce Pine" },
              { "@type": "City", name: "Black Mountain" },
            ],
            sameAs: [],
          }),
        }}
      />
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
