import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 pt-16 pb-4 text-center md:pt-24">
        <ScrollReveal direction="up" delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
            Software Engineer
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            If it works,{" "}
            <span className="text-indigo-600">don&apos;t touch it</span>.
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160}>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
            Saya Mahasiswa Informatika Semester 4 yang sedang aktif mencari pengalaman baru, dan juga saya merupakan member grup fesnuk Ingin menjadi programmer handal namun enggan ngoding sejak 2023.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={220}>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="/project"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Lihat Project Saya →
            </a>
            <a
              href="/about"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Tentang Saya
            </a>
          </div>
        </ScrollReveal>

        {/* Code snippet card */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-lg">
            {/* Window bar */}
            <div className="flex items-center gap-1.5 border-b border-slate-100 bg-slate-50 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 font-mono text-xs text-slate-400">portfolio.ts</span>
            </div>
            {/* Code body */}
            <pre className="overflow-x-auto px-6 py-5 font-mono text-xs leading-6 text-slate-700">
              <span className="text-indigo-500">const</span>{" "}
              <span className="text-slate-900">developer</span>{" "}
              <span className="text-indigo-500">=</span> {"{"}
              {`
  name: `}<span className="text-emerald-600">&quot;Junior Dev&quot;</span>{`,
  passion: `}<span className="text-emerald-600">&quot;Building Digital Solutions&quot;</span>{`,
  skills: [`}<span className="text-emerald-600">&quot;React&quot;</span>{`, `}<span className="text-emerald-600">&quot;TypeScript&quot;</span>{`, `}<span className="text-emerald-600">&quot;Node.js&quot;</span>{`],
  status: `}<span className="text-emerald-600">&quot;Ready to Collaborate&quot;</span>{`
`}{"}"}{`;

`}<span className="text-indigo-500">function</span>{" "}
              <span className="text-yellow-600">initPortfolio</span>{"() {"}
              {`
  `}<span className="text-slate-400">{"// Delivering high-quality code with precision"}</span>{`
  `}<span className="text-indigo-500">return</span>{` developer.passion;
}`}
            </pre>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Featured Work ────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <ScrollReveal direction="up" delay={0}>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Featured Work</h2>
              <p className="mt-1.5 text-sm text-slate-500">
                Project terbaik gweh.
              </p>
            </div>
            <a
              href="/project"
              className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
            >
              Explore All Projects ↗
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.7fr_1fr]">
          {/* Big featured card */}
          <ScrollReveal direction="left" delay={60}>
            <div className="relative h-72 overflow-hidden rounded-3xl bg-slate-900 shadow-xl md:h-full md:min-h-[340px]">
              {/* Mockup image */}
              <Image
                src="/drink_cashier_mockup.png"
                alt="Drink Cashier - Sistem Manajemen Kasir Modern"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
              {/* Dark gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex gap-2">
                  <span className="rounded-full bg-indigo-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    PHP Native
                  </span>
                  <span className="rounded-full bg-indigo-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                    MySQL
                  </span>
                </div>
                <h3 className="mt-3 text-xl font-bold text-white">Drink-Cashier</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Sistem Manajemen Kasir Modern.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: two stacked cards */}
          <div className="flex flex-col gap-6">
            <ScrollReveal direction="right" delay={80}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900">API Architect</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Optimasi database dan manajemen request tinggi.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={160}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" x2="18" y1="20" y2="10" /><line x1="12" x2="12" y1="20" y2="4" /><line x1="6" x2="6" y1="20" y2="14" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900">Analytics Tool</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Visualisasi data real-time dengan presisi matematis.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Tech Stack Banner ────────────────────────────── */}
      <ScrollReveal direction="up" delay={0}>
        <div className="border-y border-slate-200 bg-slate-50 py-6">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-8 px-6">
            {[
              {
                label: "JAVASCRIPT",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
                  </svg>
                ),
              },
              {
                label: "TYPESCRIPT",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" />
                  </svg>
                ),
              },
              {
                label: "REACT",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="2" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                  </svg>
                ),
              },
              {
                label: "NODE.JS",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M9 21V9" />
                  </svg>
                ),
              },
              {
                label: "PYTHON",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="4 17 10 11 4 5" /><line x1="12" x2="20" y1="19" y2="19" />
                  </svg>
                ),
              },
            ].map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400"
              >
                <span className="text-slate-400">{tech.icon}</span>
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
