"use client";
import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Ana Səhifə" },
    { href: "/about", label: "Haqqımızda" },
    { href: "/projects", label: "Layihələr" },
    { href: "/faq", label: "FAQ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-line">
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <Logo variant="white" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg text-paper tracking-tight">
              Loomtra
            </span>
            <span className="font-mono text-[10px] tracking-widest text-accent uppercase">
              Web Technologies
            </span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative py-1 text-sm text-paper/80 hover:text-paper transition-colors duration-300"
            >
              {l.label}
              <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-paper p-2 -mr-2 transition-colors duration-300 hover:text-accent"
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
              className="text-paper/90 text-base transition-colors duration-300 hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}