"use client";

import { useEffect, useRef } from "react";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Force reflow so the starting state is applied before the class is added
    el.classList.remove("page-entered");
    void el.offsetHeight;
    el.classList.add("page-entered");
  }, []);

  return (
    <div ref={ref} className="page-transition">
      {children}
    </div>
  );
}
