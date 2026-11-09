import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { SITE_URL } from "../lib/config";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Booked Town | Websites, Google Maps & SEO for US Contractors", template: "%s | Booked Town" },
  description: "Booked Town is the done-for-you growth system for US contractors: a 15-20 page website, Google Business Profile management, monthly SEO, missed-call text-back and review requests for $297 a month.",
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/favicon.png", type: "image/png" }] },
  openGraph: { title: "Booked Town | Get found. Get chosen. Get booked.", description: "Website, Google Business Profile, monthly SEO, missed-call text-back and reviews for US contractors. $297 a month.", type: "website", url: SITE_URL },
};

const jsonLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Booked Town", url: SITE_URL, description: "Websites, Google Business Profile management and monthly SEO for US contractors.", areaServed: "US", priceRange: "$297/month" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main id="top">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
