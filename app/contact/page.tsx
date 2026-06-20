export default function Contact() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">Let&apos;s Connect</p>
              <h1 className="mt-4 text-4xl font-extrabold text-slate-900">Have a technical project in mind?</h1>
              <p className="mt-4 text-slate-600 leading-8">
                Whether you&apos;re looking to build a complex web application or just want to chat about clean code and modern architecture, I&apos;m always open to new opportunities.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-50 text-indigo-700">✉️</div>
                <p className="text-sm font-semibold text-slate-900">Email Me</p>
                <p className="mt-2 text-sm text-slate-600">rayyan140108@gmail.com</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-indigo-600">Primary Communication</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-50 text-indigo-700">📍</div>
                <p className="text-sm font-semibold text-slate-900">Location</p>
                <p className="mt-2 text-sm text-slate-600">Pamekasan, Jawa Timur (Open to Remote)</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-indigo-600">Based in</p>
              </div>
            </div>

            <div className="grid gap-4">
              <a href="#" className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:border-indigo-300">
                <p className="text-sm font-semibold text-slate-900">GitHub</p>
                <p className="mt-2 text-slate-600">/junior-coder</p>
              </a>
              <a href="#" className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl transition hover:border-indigo-300">
                <p className="text-sm font-semibold text-slate-900">LinkedIn</p>
                <p className="mt-2 text-slate-600">/in/dev-profile</p>
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <div className="h-48 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200" />
              <p className="mt-4 text-sm text-slate-500">system.status = &quot;ready_for_work&quot;</p>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900" placeholder="Full Name" />
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900" placeholder="Email Address" />
              </div>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900" placeholder="Subject" />
              <textarea className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900" rows={8} placeholder="Message" />
              <button type="button" className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
                Send Message
              </button>
            </form>

            <div className="absolute -right-8 bottom-8 hidden w-72 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl md:block">
              <p className="text-sm font-semibold text-slate-900">Universitas Madura</p>
              <p className="mt-3 text-sm text-slate-600">Currently based here, but open to relocation and fully remote positions worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
