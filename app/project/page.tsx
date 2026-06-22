import ScrollReveal from "@/app/components/ScrollReveal";

const projects = [
  {
    title: "Nexus Dashboard",
    description:
      "A real-time monitoring solution for distributed systems with automated incident reporting and performance profiling.",
    tags: ["React", "Go", "gRPC"],
  },
  {
    title: "Vault Engine",
    description:
      "Encrypted storage microservice with zero-knowledge architecture and multi-region synchronization capabilities.",
    tags: ["Rust", "Docker", "Redis"],
  },
  {
    title: "Atlas Graph",
    description:
      "A visual exploration tool for complex social graphs and dependency mapping using D3.js and Neo4j.",
    tags: ["TypeScript", "D3.js", "Neo4j"],
  },
  {
    title: "Core Stack",
    description:
      "An open-source library for rapid prototyping of event-driven architectures with built-in observability.",
    tags: ["Python", "Kafka", "Prometheus"],
  },
  {
    title: "Pulse Wallet",
    description:
      "Cross-platform decentralized wallet application focusing on user privacy and seamless transaction signing.",
    tags: ["Flutter", "Solidity", "Node.js"],
  },
];

export default function Projects() {
  return (
    <>
      {/* ── Header ──────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <ScrollReveal direction="up" delay={0}>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
                Selected Projects
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={80}>
              <h1 className="mt-3 text-4xl font-extrabold text-slate-900">
                A collection of technical challenges and full-stack solutions.
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={160}>
              <p className="mt-4 max-w-2xl text-slate-600">
                Project showcase untuk memperlihatkan kemampuan teknis, arsitektur
                dan perhatian pada detail.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="right" delay={200}>
            <div className="flex flex-wrap gap-3">
              {["All Systems", "Frontend", "Backend", "Fullstack"].map((label) => (
                <button
                  key={label}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  {label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* ── Cards ─────────────────────────────────── */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} direction="up" delay={i * 80}>
              <article className="h-full rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="h-44 rounded-3xl bg-slate-100" />
                <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                  {project.title}
                </h2>
                <p className="mt-3 text-slate-600 leading-7">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-4 text-sm font-semibold text-indigo-600">
                  <a href="#" className="hover:text-indigo-800 transition">
                    Source
                  </a>
                  <a href="#" className="hover:text-indigo-800 transition">
                    Demo
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}

          {/* ── CTA Card ──────────────────────────────── */}
          <ScrollReveal direction="up" delay={projects.length * 80}>
            <div className="h-full rounded-[2rem] border-2 border-dashed border-indigo-200 bg-white p-8 text-center shadow-xl">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
                ⌁
              </div>
              <h2 className="mt-6 text-2xl font-semibold text-slate-900">
                Start a Project?
              </h2>
              <p className="mt-3 text-slate-600 leading-7">
                Saya terbuka untuk peluang freelance dan kontribusi open-source.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Contact Me
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
