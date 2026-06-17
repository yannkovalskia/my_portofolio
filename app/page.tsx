export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">Junior Software Engineer</p>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Crafting Clean Code for <span className="text-indigo-600">Complex Problems</span>.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
          Saya Junior Programmer yang bersemangat membangun solusi digital yang efisien, skalabel, dan berpusat pada pengguna. Menjelajahi masa depan melalui baris kode.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a href="/project" className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
            Lihat Project Saya
          </a>
          <a href="/about" className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
            Tentang Saya
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-8">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Featured Work</h2>
          <p className="text-slate-600">Seleksi project terbaik yang menunjukkan kemampuan teknis saya.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow">
            <div className="h-64 rounded-2xl bg-slate-100" />
            <div className="mt-6">
              <div className="flex gap-2 flex-wrap">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">React</span>
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">Tailwind</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">E-Commerce Engine</h3>
              <p className="mt-2 text-slate-600">Arsitektur modern untuk skala bisnis global.</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
              <h3 className="font-semibold">API Architect</h3>
              <p className="mt-2 text-sm text-slate-600">Optimasi database dan manajemen request tinggi.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
              <h3 className="font-semibold">Analytics Tool</h3>
              <p className="mt-2 text-sm text-slate-600">Visualisasi data real-time dengan presisi matematis.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl bg-indigo-50 p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python'].map((tech) => (
              <span key={tech} className="px-3 py-2 rounded-lg bg-white text-sm font-semibold text-indigo-700">
                {tech}
              </span>
            ))}
          </div>
          <a href="/project" className="text-indigo-700 font-semibold text-sm hover:text-indigo-900">Explore All Projects →</a>
        </div>
      </section>
    </>
  );
}
