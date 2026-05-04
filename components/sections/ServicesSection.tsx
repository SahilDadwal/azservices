import {
  ArrowRight,
  Briefcase,
  Building2,
  Calculator,
  ClipboardCheck,
  Globe,
  Landmark,
  Search,
  ShieldCheck,
  WalletCards
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoldImage } from "./GoldImage";
import { SectionHeading } from "./SectionHeading";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Building2,
    title: "Business Setup In Free Zones",
    description:
      "Company formation guidance for UAE free zones, including activity selection, documentation, licensing, and post-setup coordination."
  },
  {
    icon: Landmark,
    title: "Mainland Company Formation",
    description:
      "Support for mainland structures when your business needs direct UAE market access, commercial flexibility, or a local operating presence."
  },
  {
    icon: Globe,
    title: "Offshore Company Setup",
    description:
      "Advisory for UAE offshore routes designed for international holding, cross-border trade, and eligible corporate structuring needs."
  },
  {
    icon: WalletCards,
    title: "Corporate Bank Account Opening",
    description:
      "Preparation of banking files, company documents, activity information, and compliance records for UAE bank review."
  },
  {
    icon: Calculator,
    title: "Corporate Tax And Accounting",
    description:
      "Corporate tax registration guidance, VAT awareness, bookkeeping coordination, and financial record support."
  },
  {
    icon: ShieldCheck,
    title: "Compliance Advisory",
    description:
      "Ongoing support for statutory records, filings, regulatory readiness, and practical compliance controls."
  },
  {
    icon: Search,
    title: "Due Diligence",
    description:
      "Document review and corporate due diligence support for onboarding, transactions, banking, and partnership decisions."
  },
  {
    icon: ClipboardCheck,
    title: "Visa And Emirates ID Support",
    description:
      "Coordination guidance for residency-linked steps after company setup, including medical, biometrics, visa, and Emirates ID stages."
  },
  {
    icon: Briefcase,
    title: "Ongoing Corporate Administration",
    description:
      "Operational support after incorporation so the company remains organized, documented, and ready for growth."
  }
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-animate>
          <SectionHeading
            eyebrow="Services"
            title="A complete corporate advisory desk for UAE business growth"
            description="From initial company formation through banking, tax, accounting, due diligence, and compliance, AZ Services keeps your corporate journey organized and commercially practical."
          />
        </div>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div data-animate="left">
            <span className="inline-flex rounded-full border border-gold-soft bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-normal text-gold-rich">
              One-stop solution
            </span>
            <h3 className="mt-6 font-heading text-3xl font-black leading-tight text-gold sm:text-4xl">
              Transform business ideas into well-structured UAE companies.
            </h3>
            <p className="mt-5 text-base leading-8 text-gold-rich">
              The strongest setup is more than a license. It connects activity, jurisdiction,
              shareholders, banking readiness, tax responsibilities, and ongoing administration
              into one coherent structure.
            </p>
            <a
              href="#contact"
              className="motion-button mt-8 inline-flex items-center gap-2 rounded-full border border-gold bg-gold-linear px-6 py-3 text-sm font-black text-white shadow-gold"
            >
              <span>Request Advisory</span>
              <ArrowRight className="motion-arrow h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div data-animate="right">
            <GoldImage
              src="/assets/img/services/services-1.webp"
              alt="Business setup services visual"
              className="aspect-[16/11]"
              sizes="(min-width: 1024px) 620px, 92vw"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="motion-card rounded-lg border border-gold-soft bg-white p-6 shadow-gold"
                data-animate="flip"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <span className="motion-icon grid h-12 w-12 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-black leading-tight text-gold">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gold-rich">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
