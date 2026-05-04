import { Mail, MapPin } from "lucide-react";

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

export function Footer() {
  return (
    <footer className="border-t border-gold-soft bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="motion-icon grid h-12 w-12 place-items-center rounded-lg border border-gold bg-gold-linear text-lg font-black text-white">
              AZ
            </span>
            <div>
              <h2 className="font-heading text-2xl font-black text-gold">AZ SERVICES L.L.C-FZ</h2>
              <p className="mt-1 text-sm font-bold text-gold-rich">License: 2533175.01</p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-8 text-gold-rich">
            Premium UAE business setup and corporate advisory for founders, investors, and
            international companies building from Dubai.
          </p>

          <div className="mt-7 grid gap-4 text-sm font-medium text-gold-rich">
            <a className="flex items-start gap-3 transition hover:text-gold-bright" href="mailto:azservicesllcfz@gmail.com">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>azservicesllcfz@gmail.com</span>
            </a>
            <p className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
              <span>Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black text-gold">Navigation</h3>
          <div className="mt-5 grid gap-3">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-bold text-gold-rich transition hover:text-gold-bright">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-black text-gold">Services</h3>
          <div className="mt-5 grid gap-3">
            {services.map((service) => (
              <span key={service} className="text-sm font-bold text-gold-rich">
                {service}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold-soft bg-gold-linear">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm font-bold text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>Copyright {new Date().getFullYear()} &copy; AZ SERVICES L.L.C-FZ.</p>
          <p>Dubai business setup, tax, accounting, and compliance advisory.</p>
        </div>
      </div>
    </footer>
  );
}
