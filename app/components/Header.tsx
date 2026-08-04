"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  // Close menu whenever route changes (after navigation completes)
  useEffect(() => {
    setIsOpen(false);
    setIsClosing(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/project", label: "Projects" },
    { href: "/tech_stack", label: "Tech Stack" },
    { href: "/contact", label: "Contact" },
  ];

  /** Close the menu with a slide-out animation, then navigate */
  function handleMobileNav(href: string) {
    setIsClosing(true);
    // Let the close animation play (200ms), then navigate
    setTimeout(() => {
      router.push(href);
    }, 220);
  }

  function toggleMenu() {
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsOpen(false);
        setIsClosing(false);
      }, 220);
    } else {
      setIsClosing(false);
      setIsOpen(true);
    }
  }

  const menuVisible = isOpen && !isClosing;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md shadow-xs">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* ── Logo ───────────────────────────────────────── */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 tracking-tight hover:opacity-90 transition-opacity"
        >
          YannKovalskia
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
                className={`group relative py-1 text-sm font-semibold transition-colors duration-300 ${isActive
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-slate-900"
                  }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-indigo-600 transition-all duration-300 ease-out ${isActive
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
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 mt-1 ${isOpen ? "opacity-0 scale-x-0" : ""
              }`}
          />
          <span
            className={`block h-0.5 w-5 bg-slate-700 rounded-full transition-all duration-300 mt-1 ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""
              }`}
          />
        </button>
      </nav>

      {/* ── Mobile dropdown menu ─────────────────────────── */}
      {isOpen && (
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 ease-in-out ${menuVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
        >
          <div className="border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-1">
            {navItems.map((item, index) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <button
                  key={item.href}
                  onClick={() => handleMobileNav(item.href)}
                  style={{
                    transitionDelay: menuVisible ? `${index * 35}ms` : "0ms",
                    opacity: menuVisible ? 1 : 0,
                    transform: menuVisible ? "translateX(0)" : "translateX(-8px)",
                    transition: "opacity 0.2s ease, transform 0.2s ease",
                  }}
                  className={`flex items-center gap-3 w-full text-left rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-150 ${isActive
                      ? "bg-indigo-50 text-indigo-600"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isActive ? "bg-indigo-600 scale-100" : "bg-slate-300 scale-75"
                      }`}
                  />
                  {item.label}
                  {isActive && (
                    <span className="ml-auto text-xs font-medium text-indigo-400">●</span>
                  )}
                </button>
              );
            })}

            {/* Resume button */}
            <div
              style={{
                transitionDelay: menuVisible ? `${navItems.length * 35}ms` : "0ms",
                opacity: menuVisible ? 1 : 0,
                transform: menuVisible ? "translateX(0)" : "translateX(-8px)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
              }}
              className="mt-3 pt-3 border-t border-slate-100"
            >
              <a
                href="#"
                className="flex items-center justify-center gap-2 w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
