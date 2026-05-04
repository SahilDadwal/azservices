"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Advantages", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-soft/50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-lg border border-gold bg-gold-linear text-lg font-black text-white shadow-gold">
            AZ
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-xl font-black tracking-normal text-gold">
              AZ SERVICES
            </span>
            <span className="block text-xs font-bold uppercase tracking-normal text-gold-rich">
              L.L.C-FZ
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-gold-rich transition hover:text-gold-bright"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-gold bg-gold-linear px-5 py-3 text-sm font-bold text-white shadow-gold transition hover:border-gold-bright lg:inline-flex"
        >
          Book Consultation
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-lg border border-gold-soft bg-white text-gold shadow-gold lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="mx-5 mb-5 rounded-lg border border-gold-soft bg-white p-4 shadow-gold lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg border border-gold-soft/60 px-4 py-3 text-sm font-bold text-gold-rich transition hover:border-gold hover:text-gold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gold-linear px-5 py-3 text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
