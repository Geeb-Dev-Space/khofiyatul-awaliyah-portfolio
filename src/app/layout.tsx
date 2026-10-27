import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Serif, PT_Serif } from "next/font/google";
import "./globals.css";
import { aboutMe } from "@/data/aboutme";
import { customMetadata } from "@/data/title-description";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: customMetadata.metadataBase,
  title: customMetadata.title || aboutMe.name,
  description: customMetadata.description || aboutMe.description,
  keywords: customMetadata.keywords,
  authors: customMetadata.authors,
  alternates: customMetadata.alternates,
  openGraph: customMetadata.openGraph,
  twitter: customMetadata.twitter,
  icons: customMetadata.icons,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSerif.variable} ${ptSerif.variable} antialiased`}
      >
        <main className="">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-[#FFFCF8]">
          <div className="flex flex-col md:flex-row mx-auto max-w-7xl px-6 py-6 md:py-12 items-center md:items-start md:justify-between ">
            <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
              <p>
                © {new Date().getFullYear()} {aboutMe.name}.
              </p>
              {aboutMe.secretDescription && (
                <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-4">
                  {aboutMe.secretDescription}
                </p>
              )}
            </div>
            <div className="mb-4 flex flex-wrap items-center justify-center gap-1.5 text-sm text-neutral-500">
              <span>Built with</span>
              <Heart size={14} aria-hidden="true" className="fill-current" />
              <span>by</span>
              <Link
                href="https://www.geebdev.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-neutral-800 dark:hover:text-neutral-300"
              >
                GeebDev Space
              </Link>
            </div>
          </div>
        </footer>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
