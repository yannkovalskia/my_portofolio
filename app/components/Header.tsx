"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/project", label: "Projects" },
    { href: "/tech_stack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-xs">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* ── Logo ───────────────────────────────────────── */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 tracking-tight hover:opacity-90 transition-opacity"
        >
          MyPortofolio
        </Link>

        {/* ── Desktop nav links ───────────────────────────── */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-1 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-indigo-600 transition-all duration-300 ease-out ${
                    isActive
                      ? "w-full opacity-100"
                      : "w-0 opacity-0 group-hover:w-2/3 group-hover:opacity-60"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* ── Desktop Resume button ───────────────────────── */}
        <a
          href="#"
          className="hidden md:inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Resume
        </a>

        {/* ── Mobile hamburger button ─────────────────────── */}
        <button
          id="mobile-menu-toggle"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {/* Animated hamburger icon — 3 bars morphing into X */}
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 mt-1 ${
              isOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 mt-1 ${
              isOpen ? "-rotate-45 -translate-y-[9px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* ── Mobile dropdown menu ─────────────────────────── */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ transitionDelay: isOpen ? `${index * 40}ms` : "0ms" }}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {/* Active indicator dot */}
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${
                    isActive ? "bg-indigo-600 scale-100" : "bg-slate-300 scale-75"
                  }`}
                />
                {item.label}
                {isActive && (
                  <span className="ml-auto text-xs font-medium text-indigo-400">●</span>
                )}
              </Link>
            );
          })}

          {/* Resume button in mobile menu */}
          <div className="mt-3 pt-3 border-t border-slate-100">
            <a
              href="#"
              className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
