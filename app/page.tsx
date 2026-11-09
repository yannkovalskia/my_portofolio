import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-2xl px-6 pt-16 pb-4 text-center md:pt-24">
        <ScrollReveal direction="up" delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-600">
            Mahasiswa IT | Business Intelligence & Data Analytics
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={80}>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-5xl">
            Mengolah data menjadi{" "}
            <span className="text-indigo-600">insight yang bermakna.</span>
          </h1>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={160}>
          <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-slate-500">
            Saya mahasiswa Teknologi Informasi dengan minat pada Business Intelligence (BI) dan analisis data. Saya memiliki pengalaman sebagai Data Analyst melalui program MISB dan tertarik mengolah data menjadi insight yang mendukung pengambilan keputusan.
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
              <span className="ml-3 font-mono text-xs text-slate-400">portfolio.py</span>
            </div>
            {/* Code body */}
            <pre className="overflow-x-auto px-6 py-5 font-mono text-xs leading-6 text-slate-700">
              <span className="text-slate-900">developer</span>{" "}
              <span className="text-indigo-500">=</span>{" {"}
              {`
  `}<span className="text-emerald-600">&quot;name&quot;</span>{`: `}<span className="text-emerald-600">&quot;Rayyan&quot;</span>{`,
  `}<span className="text-emerald-600">&quot;passion&quot;</span>{`: `}<span className="text-emerald-600">&quot;Business Intelligence & Data Analytics&quot;</span>{`,
  `}<span className="text-emerald-600">&quot;skills&quot;</span>{`: [`}<span className="text-emerald-600">&quot;Python, PHP, MySQL&quot;</span>{`, `}<span className="text-emerald-600">&quot;TypeScript&quot;</span>{`, `}<span className="text-emerald-600">&quot;Next.js&quot;</span>{`, `}<span className="text-emerald-600">&quot;Tableau&quot;</span>{`, `}<span className="text-emerald-600">&quot;Data Studio&quot;</span>{`],
  `}<span className="text-emerald-600">&quot;status&quot;</span>{`: `}<span className="text-emerald-600">&quot;I am Ready&quot;</span>{`
`}{"}"}
              {`

`}<span className="text-indigo-500">def</span>{" "}
              <span className="text-yellow-600">init_portfolio</span>{"():"}
              {`
  `}<span className="text-slate-400">{"# If it works, Don't touch it!"}</span>{`
  `}<span className="text-indigo-500">return</span>{` developer[`}<span className="text-emerald-600">&quot;passion&quot;</span>{`]`}
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
                Project terbaik saya.
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
                    <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900">MySavings</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Website manajemen keuangan pribadi untuk memantau pemasukan dan pengeluaran.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={160}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><path d="M9 15l3-3 3 3" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-900">Word to PDF</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Bot telegram untuk convert file word ke pdf.
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
              { label: "PYTHON", src: "/python.svg" },
              { label: "NEXT.JS", src: "/nextjs.svg" },
              { label: "PHP", src: "/php.svg" },
              { label: "MySQL", src: "/mysql.svg" },
              { label: "MATLAB", src: "/matlab.svg" },
            ].map((tech) => (
              <div
                key={tech.label}
                className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-400"
              >
                <Image
                  src={tech.src}
                  alt={tech.label}
                  width={16}
                  height={16}
                  className="h-4 w-4 opacity-50"
                />
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
