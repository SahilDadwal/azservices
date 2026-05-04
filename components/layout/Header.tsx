import { ArrowRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Advantages", href: "#features" },
  { label: "Services", href: "#services" },
  { label: "Plans", href: "#plans" },
  { label: "Contact", href: "#contact" }
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold-soft/50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <span
            className="motion-icon grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold bg-gold-linear font-heading text-lg font-black tracking-tight text-white shadow-gold"
            aria-hidden="true"
          >
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
          className="motion-button inline-flex shrink-0 items-center gap-2 rounded-full border border-gold bg-gold-linear px-6 py-3.5 text-sm font-bold text-white shadow-gold transition hover:border-gold-bright sm:px-5 sm:py-3"
        >
          <span>Book Consultation</span>
          <ArrowRight className="motion-arrow h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
