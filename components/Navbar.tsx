"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Problem", href: "#problem" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "App Flow", href: "#app-flow" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-base/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-3 font-mono text-base font-semibold tracking-tight text-white"
        >
          <Image
            src="/mathalarm-icon.png"
            alt=""
            width={32}
            height={32}
            priority
            className="size-8 rounded-lg"
          />
          <span>
            Math<span className="text-pink">Alarm</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-sm text-ink-muted md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="rounded-lg bg-pink px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-pink-deep sm:text-sm"
          >
            Download &amp; Try
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-9 items-center justify-center rounded-lg border border-line text-ink-muted transition-colors hover:text-ink md:hidden"
          >
            <svg viewBox="0 0 20 20" className="size-4" aria-hidden>
              {open ? (
                <path
                  d="M5 5l10 10M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              ) : (
                <path
                  d="M3 6h14M3 13h14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-base px-5 pb-4 font-mono text-sm md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3.5 text-ink-muted transition-colors last:border-0 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
