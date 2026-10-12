import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Anton, Geist } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: {
    default: `${site.name} | Web development by ${site.owner}`,
    template: `%s | ${site.name} by ${site.owner}`,
  },
  description:
    "Freelance developer Danilo Stoletovic builds fast, clean websites, web apps and Android apps that bring in clients, delivered on time.",
  // Self-referencing fallback: a page that doesn't set its own canonical
  // (every real page does, through pageMetadata()) points to itself.
  alternates: { canonical: "./" },
  // Search engine ownership tags, set as Vercel env vars. A tag is omitted
  // while its value is empty. Read at build time, so redeploy after changing.
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${anton.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
