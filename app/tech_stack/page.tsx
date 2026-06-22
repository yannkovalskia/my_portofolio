import ScrollReveal from "@/app/components/ScrollReveal";

const stacks = [
  "JavaScript",
  "Python",
  "React",
  "Git",
  "Tailwind",
  "Node.js",
  "TypeScript",
  "PostgreSQL",
  "PHP",
];

export default function TechStack() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center md:py-24">
        <ScrollReveal direction="up" delay={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Tech Stack
          </p>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={80}>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900">
            The tools and technologies I use to build modern digital experiences.
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={160}>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
            The tools and technologies I use to build high-performance, scalable,
            and modern digital experiences.
          </p>
        </ScrollReveal>
      </section>

      {/* ── Stack Cards ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {stacks.map((stack, i) => (
          <ScrollReveal key={stack} direction="up" delay={i * 60}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-xl transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold">
                {stack[0]}
              </div>
              <div className="text-sm font-semibold text-indigo-700">{stack}</div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* ── Contact CTA ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ScrollReveal direction="left">
          <div className="rounded-[2rem] border border-white bg-white p-10 shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Get in Touch
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Let&apos;s build something amazing together.
            </h2>
            <p className="mt-4 text-slate-600 leading-8">
              I&apos;m currently looking for new opportunities. Whether you have a
              question or just want to say hi, my inbox is always open.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700">
                  ✉️
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email Me</p>
                  <p className="mt-1 text-sm text-slate-600">
                    rayyan140108@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-700">
                  📍
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Location</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Pamekasan, Indonesia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={100}>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
                  placeholder="Name"
                />
                <input
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
                  placeholder="Email"
                />
              </div>
              <input
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
                placeholder="Subject"
              />
              <textarea
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900"
                rows={6}
                placeholder="Message"
              />
              <button
                type="button"
                className="w-full rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
