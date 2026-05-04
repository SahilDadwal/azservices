import { FileText, Mail, MapPin } from "lucide-react";

const services = [
  "Business setup",
  "Corporate tax",
  "Accounting",
  "Compliance",
  "Due diligence",
  "Bank account support"
];

const links = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

function FooterRule() {
  return (
    <div
      className="mx-auto flex max-w-7xl items-center gap-2 px-5 sm:gap-3 sm:px-8"
      aria-hidden="true"
    >
      <span className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-[#FAF8F4] to-gold-soft/80" />
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 border border-gold bg-gold/15" />
      <span className="h-px w-10 max-w-[20%] bg-gold-soft/70 sm:w-16" />
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 border border-gold bg-gold/15" />
      <span className="h-px min-w-[2rem] flex-1 bg-gradient-to-l from-[#FAF8F4] to-gold-soft/80" />
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  const linkClass =
    "block border-b border-gold-soft/45 py-3 text-sm font-bold text-gold-rich transition hover:border-gold hover:text-gold last:border-b-0";

  return (
    <footer className="border-t border-gold-soft/60 bg-[#FAF8F4]">
      <div className="pt-8">
        <FooterRule />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 md:gap-12 md:py-12 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-14">
        {/* Brand / company */}
        <div className="min-w-0 space-y-6 border-b border-gold-soft/50 pb-10 lg:border-b-0 lg:border-r lg:border-gold-soft/50 lg:pb-0 lg:pr-10">
          <h2 className="font-heading text-xl font-black text-gold sm:text-2xl">AZ SERVICES L.L.C-FZ</h2>

          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-linear text-white shadow-gold ring-2 ring-white sm:h-10 sm:w-10">
              <FileText className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-semibold text-gold-rich sm:text-base">License: 2533175.01</p>
          </div>

          <p className="max-w-xl text-[15px] leading-[1.65] text-gold-rich sm:text-base sm:leading-8">
            Premium UAE business setup and corporate advisory for founders, investors, and
            international companies building from Dubai.
          </p>

          <div className="grid gap-4 text-sm font-medium text-gold-rich">
            <a
              className="flex items-start gap-3 transition hover:text-gold-bright"
              href="mailto:azservicesllcfz@gmail.com"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-linear text-white shadow-gold ring-2 ring-[#FAF8F4] sm:h-10 sm:w-10">
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <span className="pt-1.5 sm:pt-2">azservicesllcfz@gmail.com</span>
            </a>
            <p className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gold-linear text-white shadow-gold ring-2 ring-[#FAF8F4] sm:h-10 sm:w-10">
                <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
              </span>
              <span className="pt-1.5 sm:pt-2">
                Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.
              </span>
            </p>
          </div>
        </div>

        {/* Navigation + Services: two columns side by side */}
        <div className="grid min-w-0 grid-cols-2 items-start gap-x-5 gap-y-0 sm:gap-x-8 lg:gap-x-10">
          <section className="min-w-0">
            <h3 className="text-lg font-black tracking-wide text-gold">Navigation</h3>
            <nav className="mt-3" aria-label="Footer navigation">
              {links.map((link) => (
                <a key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </a>
              ))}
            </nav>
          </section>

          <section className="min-w-0">
            <h3 className="text-lg font-black tracking-wide text-gold">Services</h3>
            <div className="mt-3">
              {services.map((service) => (
                <span key={service} className={`${linkClass} cursor-default`}>
                  {service}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="pb-8 pt-6">
        <FooterRule />
      </div>

      <div className="border-t border-gold-soft/50 bg-gold-linear">
        <div className="mx-auto max-w-7xl px-5 py-4 text-center sm:px-8 sm:py-5">
          <p className="text-xs font-bold leading-relaxed text-white sm:text-sm">
            &copy; {year} AZ SERVICES L.L.C-FZ. All Rights Reserved.
          </p>
          <p className="mt-1 text-xs font-medium text-white/90 sm:text-sm">
            Dubai business setup, tax, accounting, and compliance advisory.
          </p>
        </div>
      </div>
    </footer>
  );
}
