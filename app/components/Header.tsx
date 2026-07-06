"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
        <Link href="/" className="text-2xl font-bold text-indigo-600 tracking-tight hover:opacity-90 transition-opacity">
          MyPortofolio
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            // Check if current pathname matches item's href
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
        <a
          href="#"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}
