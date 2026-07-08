"use client";

import Image from "next/image";
import { useState } from "react";
import ScrollReveal from "@/app/components/ScrollReveal";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit() {
    const to = "rayyan140108@gmail.com"; // ← ganti dengan email kamu
    const mailtoLink =
      `mailto:${to}` +
      `?subject=${encodeURIComponent(subject || "(No Subject)")}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      )}`;
    const a = document.createElement("a");
    a.href = mailtoLink;
    a.click();
  }

  return (
    <>
      <div className="mx-auto max-w-5xl px-6 py-12 md:py-20">

        {/* ── Header ──────────────────────────────────── */}
        <ScrollReveal direction="up" delay={0}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            Let&apos;s Connect
          </p>
          <h1 className="mt-3 max-w-sm text-4xl font-extrabold leading-tight text-slate-900">
            Got a project for me?
          </h1>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-500">
            If you have a project in mind, I&apos;d love to hear about it. I&apos;m open to
            collaborations and ready to help bring your ideas to life.
          </p>
        </ScrollReveal>

        {/* ── Two Column ──────────────────────────────── */}
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.4fr]">

          {/* ── Left: Contact Info ─────────────────────── */}
          <div className="space-y-6">
            <ScrollReveal direction="up" delay={80}>
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Email Me</p>
                  <p className="text-xs text-slate-400">Primary Communication</p>
                  <a href="mailto:rayyan140108@gmail.com" className="mt-1 block text-sm font-medium text-indigo-600 hover:text-indigo-800">
                    rayyan140108@gmail.com
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120}>
              <div className="h-px bg-slate-100" />
            </ScrollReveal>

            <ScrollReveal direction="up" delay={140}>
              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Location</p>
                  <p className="text-xs text-slate-400">Based in</p>
                  <p className="mt-1 text-sm text-slate-600">Pamekasan, Jawa Timur (Open to Remote)</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={160}>
              <div className="h-px bg-slate-100" />
            </ScrollReveal>

            {/* Digital Footprint */}
            <ScrollReveal direction="up" delay={180}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                The Amazing Digital Footprint
              </p>
              <div className="mt-3 flex gap-3">
                <a
                  href="https://github.com/yannkovalskia?tab=overview&from=2026-06-01&to=2026-06-29"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  /yannkovalskia
                </a>
                <a
                  href="https://www.linkedin.com/in/rayyan-3a1846315?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                  </svg>
                  /in/Rayyan
                </a>
              </div>
            </ScrollReveal>

            {/* Laptop Image */}
            <ScrollReveal direction="up" delay={220}>
              <div className="relative mt-2 h-48 overflow-hidden rounded-2xl">
                <Image
                  src="/laptop.jpeg"
                  alt="Laptop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="rounded-lg bg-slate-900/70 px-3 py-1.5 font-mono text-xs text-green-400 backdrop-blur-sm">
                    status = &quot;Locked in&quot;
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Form ───────────────────────────── */}
          <ScrollReveal direction="right" delay={100}>
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">Full Name</label>
                    <input
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                      placeholder="Jane Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-slate-500">Email Address</label>
                    <input
                      type="email"
                      className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                      placeholder="jane@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500">Subject</label>
                  <input
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                    placeholder="Project Inquiry / Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500">Message</label>
                  <textarea
                    rows={7}
                    className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition"
                    placeholder="Tell me about your project or just say hi..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Footer row */}
                <div className="flex items-center justify-between gap-4 pt-1">
                  <p className="text-xs text-slate-400">
                    * Respon dalam 24 Jam.
                  </p>
                  <button
                    type="submit"
                    className="flex shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Bottom Map Banner ───────────────────────── */}
      <ScrollReveal direction="up" delay={0}>
        <a
          href="https://www.google.com/maps/place/Pamekasan,+East+Java/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block relative mx-6 mb-16 mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 transition hover:border-indigo-300 hover:shadow-md"
        >
          {/* Background Image */}
          <div
            className="h-56 w-full bg-cover bg-center transition-all duration-500 group-hover:scale-105"
            style={{
              backgroundImage: "url('/pamekasan.jpg')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-slate-900/10 transition-colors duration-500 group-hover:bg-slate-900/20" />
          {/* Floating card */}
          <div className="absolute bottom-6 right-6 w-72 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl transition-all group-hover:scale-[1.02] group-hover:border-indigo-200">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-slate-900">Pamekasan, Jawa Timur</p>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" x2="17" y1="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Saat ini berbasis di Pamekasan, Jawa Timur dan Bersedia Untuk Bekerja Secara Remote.
            </p>
          </div>
        </a>
      </ScrollReveal>
    </>
  );
}
