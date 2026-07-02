import ScrollReveal from "@/app/components/ScrollReveal";

const stacks = [
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="3" />
        <path d="M9 8v8M15 8v5a3 3 0 0 1-6 0" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C9 2 7 3.5 7 6v2h5v1H6C4 9 2 11 2 13.5S4 18 6 18h1v-2c0-2 1.5-3 3-3h4c2 0 3-1.5 3-3V6c0-2.5-2-4-5-4z" />
        <path d="M12 22c3 0 5-1.5 5-4v-2h-5v-1h6c2 0 4-2 4-4.5S20 6 18 6h-1v2c0 2-1.5 3-3 3H10c-2 0-3 1.5-3 3v3c0 2.5 2 4 5 4z" />
        <circle cx="9.5" cy="5.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="18.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "PHP",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="5.5" />
        <path d="M8 10v4M8 10h2a1.5 1.5 0 0 1 0 3H8" />
        <path d="M13 14l1-4h1.5a1.5 1.5 0 0 1 0 3H13" />
      </svg>
    ),
  },
  {
    name: "MATLAB",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3 17 7 7 10 14 13 10 17 17" />
        <line x1="3" y1="17" x2="21" y2="17" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v4c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 9v4c0 1.66 4.03 3 9 3s9-1.34 9-3V9" />
        <path d="M3 13v4c0 1.66 4.03 3 9 3s9-1.34 9-3v-4" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "HTML/CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 3l1.5 16.5L12 21l6.5-1.5L20 3H4z" />
        <polyline points="8 8 16 8 15.5 13 12 14 8.5 13 8.25 10.5 15 10.5" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-3xl px-6 pt-16 pb-12 text-center md:pt-24">
        <ScrollReveal direction="up" delay={0}>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
            Tech Stack
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={80}>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
            The tools and technologies I use to build high-performance, scalable,
            and modern digital experiences.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Stack Cards ──────────────────────────────────── */}
      <section
        style={{ background: "linear-gradient(180deg, #eef2ff 0%, #f8fafc 100%)" }}
        className="px-6 py-14"
      >
        <div className="mx-auto grid max-w-4xl gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {stacks.map((stack, i) => (
            <ScrollReveal key={stack.name} direction="up" delay={i * 55}>
              <div className="flex flex-col items-center gap-3 rounded-2xl border border-indigo-100 bg-white px-4 py-6 shadow-sm transition hover:-translate-y-1 hover:border-indigo-300 hover:shadow-md">
                <span className="text-indigo-600">{stack.icon}</span>
                <span className="text-xs font-semibold text-slate-700">{stack.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ── Get in Touch ─────────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">

          {/* Left: contact info */}
          <ScrollReveal direction="left" delay={0}>
            <h2 className="text-3xl font-extrabold text-slate-900">Get in Touch</h2>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Email Me</p>
                  <p className="mt-0.5 text-sm font-medium text-slate-800">rayyan140108@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Location</p>
                  <p className="mt-0.5 text-sm font-medium text-slate-800">Pamekasan, Indonesia</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                Connect With Me
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-300 hover:text-indigo-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-indigo-300 hover:text-indigo-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <ScrollReveal direction="right" delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <form className="flex flex-col gap-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Name</label>
                    <input
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Email</label>
                    <input
                      type="email"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Subject</label>
                  <input
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">Message</label>
                  <textarea
                    rows={5}
                    className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                    placeholder="Let's build something amazing together..."
                  />
                </div>

                <button
                  type="button"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
                >
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                  </svg>
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
