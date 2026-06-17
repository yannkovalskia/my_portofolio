export default function About() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <div className="mx-auto inline-flex h-28 w-28 items-center justify-center rounded-full border-4 border-indigo-600 bg-slate-100 text-2xl font-bold text-indigo-700">
          JD
        </div>
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900">
          Building digital <span className="text-indigo-600">narratives</span> with code.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
          Saya adalah seorang pengembang perangkat lunak yang berfokus pada pembangunan antarmuka web yang berperforma tinggi dan berpusat pada pengguna. Perjalanan saya dimulai dari rasa penasaran terhadap bagaimana internet bekerja hingga kini menjadi obsesi menulis kode yang bersih dan skalabel.
        </p>
      </section>

      <section className="mx-auto mt-16 max-w-6xl px-6 grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Perjalanan Belajar</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Semuanya berawal dari baris kode &quot;Hello World&quot; yang muncul di terminal lima tahun lalu. Dari sana, saya mulai mendalami dasar-dasar logika pemrograman menggunakan Python sebelum akhirnya jatuh cinta dengan ekosistem JavaScript.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">Minat Khusus</h2>
            <p className="mt-4 text-slate-600 leading-8">
              Fokus utama saya saat ini adalah Web Development dengan penekanan pada performa front-end dan arsitektur sistem yang modular. Saya sangat menikmati tantangan dalam mengoptimalkan Core Web Vitals dan membangun komponen UI yang dapat digunakan kembali dengan aksesibilitas tinggi.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {['React & Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js', 'UI/UX Design'].map((tech) => (
              <span key={tech} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
            <h3 className="text-xl font-semibold text-slate-900">Apa yang saya cari?</h3>
            <p className="mt-4 text-slate-600 leading-7">
              Saat ini saya sedang mencari peluang untuk bergabung dengan tim engineering yang dinamis di mana saya dapat berkontribusi pada produk yang berdampak besar.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Saya sangat terbuka untuk posisi Junior Web Developer atau Frontend Engineer (Remote/Hybrid).
            </p>
            <a href="/contact" className="mt-6 inline-flex rounded-full bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-indigo-700">
              Hubungi Saya →
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl">
              <h4 className="text-lg font-semibold text-slate-900">Nilai Profesional</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Kualitas di Atas Kuantitas</li>
                <li>Pembelajar Seumur Hidup</li>
                <li>Kolaborasi Radikal</li>
              </ul>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl">
              <h4 className="text-lg font-semibold text-slate-900">Di Luar Pekerjaan</h4>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>Membaca Sci-Fi</li>
                <li>Kopi Manual Brew</li>
                <li>Bersepeda Sore</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
