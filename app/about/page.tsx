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
            <span></span>Pengalaman
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
                <strong className="font-semibold text-slate-800">Junior Web Developer</strong>{" "}
                atau{" "}
                <strong className="font-semibold text-slate-800">Frontend Engineer</strong>{" "}
                (Remote/Hybrid).
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
                  <p className="text-sm font-semibold text-slate-900">Kualitas di Atas Kuantitas</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Lebih baik satu fitur yang sempurna daripada sepuluh yang setengah matang.
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
                  <p className="text-sm font-semibold text-slate-900">Pembelajaran Seumur Hidup</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Industri teknologi berubah cepat, adaptasi adalah kunci utama kesuksesan.
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
                  <p className="text-sm font-semibold text-slate-900">Kolaborasi Radikal</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Kode terbaik lahir dari diskusi terbuka dan empati antar pengembang.
                  </p>
                </div>
              </li>
            </ul>
          </ScrollReveal>

          {/* Di Luar Pekerjaan */}
          <ScrollReveal direction="right" delay={80}>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-slate-400">
              <span className="inline-block h-px w-6 bg-slate-300" />
              Di Luar Pekerjaan
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[
                { icon: "📖", label: "Membaca Sci-Fi" },
                { icon: "☕", label: "Kopi Manual Brew" },
                { icon: "🚲", label: "Bersepeda Sore" },
                { icon: "📷", label: "Street Photo" },
              ].map((hobby) => (
                <div
                  key={hobby.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"
                >
                  <span className="text-2xl">{hobby.icon}</span>
                  <p className="text-xs font-semibold text-slate-700">{hobby.label}</p>
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
