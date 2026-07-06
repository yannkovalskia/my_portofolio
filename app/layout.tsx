import type { Metadata } from "next";
import Header from "./components/Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevPortfolio - Junior Software Engineer",
  description: "Portfolio showcasing technical projects and web development expertise.",
};


function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-6">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-xs text-slate-600">
            <p>© 2024 WengDev. If it works, don't touch it.</p>
          </div>
          <div className="flex gap-6 text-xs text-slate-600">
            <a href="https://github.com/yannkovalskia?tab=overview&from=2026-06-01&to=2026-06-29" className="transition hover:text-slate-900">GitHub</a>
            <a href="https://www.linkedin.com/in/rayyan-3a1846315?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="transition hover:text-slate-900">LinkedIn</a>
            <a href="https://www.tiktok.com/@ray_yan418" className="transition hover:text-slate-900">TikTok</a>
            <a href="https://www.instagram.com/du_duruuu?igsh=MXQ1eGd4MDl2bTc0cA==" className="transition hover:text-slate-900">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
