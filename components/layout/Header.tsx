import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { mainLogoSrc } from "@/lib/brand";

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
    <header className="fixed inset-x-0 top-0 z-50 min-w-0 border-0 bg-header-bar shadow-header">
      <div className="mx-auto flex w-full max-w-[1920px] min-w-0 flex-wrap items-center justify-between gap-x-3 gap-y-2 px-5 py-3 sm:px-8 sm:py-3.5 lg:flex-nowrap lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-x-8 lg:px-10 lg:py-3.5 xl:px-20">
        <a
          href="#hero"
          className="relative order-1 flex min-w-0 shrink items-center lg:order-none lg:justify-self-start"
        >
          <span className="relative block h-10 w-auto max-w-[min(100%,calc(100vw-10rem))] sm:h-12 md:h-14 lg:h-[3.5rem] lg:max-w-[min(540px,46vw)] xl:h-16 xl:max-w-[min(660px,42vw)] 2xl:max-w-[min(700px,40vw)]">
            <Image
              src={mainLogoSrc}
              alt="AZ Services L.L.C-FZ"
              width={960}
              height={320}
              className="h-full w-auto max-h-full object-contain object-left"
              priority
              sizes="(max-width: 1024px) 80vw, (max-width: 1536px) 54vw, 960px"
              unoptimized
            />
          </span>
        </a>

        <nav
          className="font-inter order-3 hidden w-full min-w-0 justify-center gap-8 text-base font-medium tracking-[0.2px] text-charcoal lg:order-none lg:flex lg:w-auto lg:justify-self-center"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap transition-colors hover:text-spec-gold-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group relative order-2 inline-flex h-9 w-[min(136px,calc(100vw-8.5rem))] shrink-0 items-center justify-center gap-1 overflow-hidden rounded-2xl bg-header-cta px-2 text-xs font-medium leading-none text-white shadow-sm transition-[filter] hover:brightness-[0.92] sm:h-10 sm:w-[min(168px,calc(100vw-10rem))] sm:gap-1.5 sm:rounded-[24px] sm:px-3 sm:text-[13px] lg:order-none lg:h-11 lg:min-h-[44px] lg:w-[200px] lg:justify-self-end lg:gap-2 lg:rounded-[28px] lg:px-4 lg:text-[15px] lg:pl-4 lg:pr-5"
        >
          <Calendar className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4 lg:h-[18px] lg:w-[18px]" aria-hidden="true" />
          <span className="truncate">Book Consultation</span>
          <ArrowRight className="h-3 w-3 shrink-0 opacity-95 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
