"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/projects", label: "Layihələr" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-line">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-display text-lg text-paper tracking-tight">
          Şirkət Adı
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-paper/80 hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-paper p-2 -mr-2"
          aria-label="Menyunu aç/bağla"
          aria-expanded={open}
        >
          {open ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-line bg-ink px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-paper/90 text-base"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}