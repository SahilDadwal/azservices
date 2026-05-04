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
    <header className="fixed inset-x-0 top-0 z-50 min-w-0 border-b border-gold-soft/50 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl min-w-0 items-center justify-between gap-2 px-5 sm:gap-3 sm:px-8">
        <a href="#hero" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">
          <span
            className="motion-icon grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold bg-gold-linear font-heading text-lg font-bold tracking-tight text-white shadow-gold"
            aria-hidden="true"
          >
            AZ
          </span>
          <span className="min-w-0 flex-1 leading-tight">
            <span className="block truncate font-heading text-base font-black tracking-normal text-gold sm:text-xl">
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
          className="motion-button inline-flex shrink-0 items-center gap-1.5 rounded-full border border-gold bg-gold-linear px-2.5 py-2 text-xs font-bold leading-tight text-white shadow-gold transition hover:border-gold-bright sm:px-3 lg:gap-2 lg:px-5 lg:py-3 lg:text-sm lg:leading-normal"
        >
          <span>Book Consultation</span>
          <ArrowRight className="motion-arrow h-3.5 w-3.5 shrink-0 lg:h-4 lg:w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
