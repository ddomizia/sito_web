"use client";

import Link from "next/link";

export default function ProjectNavbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Studio Nome" className="h-7 w-7" />
          <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold uppercase tracking-[0.22em]">
              Nome Studio
            </span>
            <span className="text-[10px] text-neutral-500">
              Architettura e Archeologia
            </span>
          </div>
        </Link>

        {/* BACK */}
        <Link
          href="/progetti"
          className="text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-600 transition hover:text-neutral-900"
        >
          ← Torna ai progetti
        </Link>
      </div>
    </header>
  );
}
