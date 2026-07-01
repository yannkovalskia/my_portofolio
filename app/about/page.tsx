import Image from "next/image";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24">

      {/* ── Hero ────────────────────────────────────────── */}
      <section className="pt-14 pb-10 text-center">
        <ScrollReveal direction="up" delay={0}>
          {/* Profile avatar */}
          <div className="mx-auto mb-6 h-20 w-20 overflow-hidden rounded-2xl border-2 border-slate-200 shadow-md">
            <Image
              src="/profile.jpg"
              alt="Profile photo"
              width={80}
              height={80}
              className="h-full w-full object-cover object-top"
            />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Building digital{" "}
            <span className="text-indigo-600">narratives</span>{" "}
            with code.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Saya adalah Mahasiswa Informatika semester 4 yang sedang aktif mencari pengalaman sebagai seorang software engineer
            dan data analyst yang berfokus pada membangun website yang dinamis dan modern, Tech stack utama saya saat ini adalah
            PHP, Python, Next.JS, JavaScript, MySQL, C++, HTML/CSS, Matlab.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Perjalanan Belajar ───────────────────────────── */}
      <section className="py-10 border-t border-slate-100">
        <ScrollReveal direction="up" delay={0}>
          <h2 className="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
              <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <line x1="12" x2="12" y1="11" y2="13" />
              <path d="M2 13h20" />
            </svg>
            Pengalaman
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Saya memiliki pengalaman membangun sebuang website sistem akademik terpadu,
            sistem manajemen keuangan dan sistem kasir modern dengan menggunakan php native dan mysql.
            Selain itu saya juga sedang mempelajari Framework NextJS yang dimana project portofolio
            ini dibangun menggunakan Framework tersebut.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Minat Khusus ────────────────────────────────── */}
      <section className="py-10 border-t border-slate-100">
        <ScrollReveal direction="up" delay={0}>
          <h2 className="flex items-center gap-2 text-xl font-bold text-indigo-600">
            <span className="font-mono text-lg">&lt;/&gt;</span> Minat Khusus
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Fokus utama saya saat ini adalah{" "}
            <strong className="font-semibold text-slate-800">Web Development & Data Analyst</strong>{" "}
            dimana saya berencana untuk memilih peminatan Business Intelligence (BI) pada studi saya.
            Akan tetapi tidak menutup kemungkinan bagi saya untuk terus mengeksplorasi skill lain sampai
            saya benar-benar tahu minat dan bakat utama saya di bidang ini.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["React & Next.js", "TailwindCSS", "TypeScript", "Node.js", "UI/UX Design"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </ScrollReveal>
      </section>

      {/* ── Apa yang saya cari? ──────────────────────────── */}
      <section className="py-10 border-t border-slate-100">
        <ScrollReveal direction="up" delay={0}>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Left: text card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Apa yang saya cari?
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Saat ini saya sedang mencari peluang untuk bergabung dengan tim
                engineering yang dinamis di mana saya dapat berkontribusi pada produk
                yang berdampak besar. Saya sangat terbuka untuk posisi{" "}
                <strong className="font-semibold text-slate-800">Web Developer, Data Analyst</strong>{" "}
                atau{" "}
                <strong className="font-semibold text-slate-800">Frontend Engineer</strong>{" "}
                (Remote).
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Hubungi Saya →
              </a>
            </div>

            {/* Right: code snippet */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="flex gap-1.5 mb-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="font-mono text-xs leading-6 text-slate-700 whitespace-pre-wrap">
                {`const status = {
  lookingFor:
    "opportunities",
  availability: "Full-
  time",
  relocation: true
};`}
              </pre>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ── Nilai Profesional + Di Luar Pekerjaan ───────── */}
      <section className="py-10 border-t border-slate-100">
        <div className="grid gap-10 md:grid-cols-2">

          {/* Nilai Profesional */}
          <ScrollReveal direction="left" delay={0}>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
              <span className="inline-block h-px w-6 bg-slate-300" />
              Nilai Profesional
            </h3>
            <ul className="mt-6 space-y-7">
              <li className="flex gap-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Kualitas di Atas kuali</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    kalo bisa besok kenapa harus sekarang?.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" /><polyline points="21 3 21 9 15 9" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Motivasi</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Big money never comes clean.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Kolaborasi</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Komunikasi bagus = hasil bagus, komunikasi jelek = hasil jelek.
                  </p>
                </div>
              </li>
            </ul>
          </ScrollReveal>

          {/* Di Luar Pekerjaan */}
          <ScrollReveal direction="right" delay={80}>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
              <span className="inline-block h-px w-6 bg-slate-300" />
              Hobi & Waktu Luang
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                {
                  label: "Membaca Sci-Fi",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" x2="16" y1="21" y2="21" />
                      <line x1="12" x2="12" y1="17" y2="21" />
                    </svg>
                  ),
                },
                {
                  label: "Kopi Manual Brew",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                      <line x1="6" x2="6" y1="2" y2="4" />
                      <line x1="10" x2="10" y1="2" y2="4" />
                      <line x1="14" x2="14" y1="2" y2="4" />
                    </svg>
                  ),
                },
                {
                  label: "Bersepeda Sore",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18.5" cy="17.5" r="3.5" />
                      <circle cx="5.5" cy="17.5" r="3.5" />
                      <circle cx="15" cy="5" r="1" />
                      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                    </svg>
                  ),
                },
                {
                  label: "Street Photo",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                      <circle cx="12" cy="13" r="3" />
                    </svg>
                  ),
                },
              ].map((hobby) => (
                <div
                  key={hobby.label}
                  className="flex flex-col items-center gap-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-5 text-center shadow-md transition hover:shadow-lg hover:scale-[1.03]"
                >
                  <span className="text-white">{hobby.icon}</span>
                  <p className="text-xs font-semibold text-white/90">{hobby.label}</p>
                </div>
              ))}
            </div>
            {/* Quote */}
            <blockquote className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 text-xs leading-6 text-slate-500 italic shadow-sm">
              &quot;Saya percaya keseimbangan hidup yang baik akan memicu kreativitas yang
              lebih tajam saat saya kembali ke depan layar.&quot;
            </blockquote>
          </ScrollReveal>

        </div>
      </section>

    </div>
  );
}
