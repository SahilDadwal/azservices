import {
  Building2,
  Calculator,
  Check,
  Landmark,
  Search,
  ShieldCheck,
  WalletCards
} from "lucide-react";
import { GoldImage } from "./GoldImage";
import { SectionHeading } from "./SectionHeading";

const advantages = [
  {
    icon: Building2,
    title: "Free Zone Formation",
    description: "Guidance for favorable UAE free zone structures with streamlined procedures and international reach.",
    tags: ["Ownership", "Licensing"]
  },
  {
    icon: Landmark,
    title: "Mainland Setup",
    description: "Support for mainland company routes when your activity, market access, or operating model requires it.",
    tags: ["LLC", "Market access"]
  },
  {
    icon: WalletCards,
    title: "Bank Account Readiness",
    description: "Preparation and coordination for UAE corporate bank account opening requirements.",
    tags: ["Banking", "Documents"]
  },
  {
    icon: Calculator,
    title: "Tax And VAT Clarity",
    description: "Corporate tax, VAT, and accounting guidance designed to keep obligations understandable and organized.",
    tags: ["Tax", "Accounting"]
  },
  {
    icon: ShieldCheck,
    title: "Compliance Controls",
    description: "Ongoing compliance support so filings, records, and regulatory checkpoints remain under control.",
    tags: ["Filings", "Controls"]
  },
  {
    icon: Search,
    title: "Due Diligence",
    description: "Structured review and document support for partnerships, banking, onboarding, and corporate decisions.",
    tags: ["Review", "Risk"]
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-animate>
          <SectionHeading
            eyebrow="Advantages"
            title="Business support built for the UAE market"
            description="Dubai offers global connectivity, business-friendly regulation, modern infrastructure, and access to international talent. AZ Services turns those advantages into a practical setup and operating roadmap."
          />
        </div>

        <div className="mt-16 grid items-center gap-10 lg:grid-cols-2">
          <div data-animate="left">
            <h3 className="font-heading text-3xl font-black leading-tight text-gold">
              Clear guidance across setup, banking, tax, and compliance.
            </h3>
            <p className="mt-5 text-base leading-8 text-gold-rich">
              The UAE can support regional expansion, global trade, consultancy, technology,
              e-commerce, and professional services. The important decision is choosing the
              structure that fits the activity, customers, jurisdiction, and banking profile.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["3", "Jurisdiction paths"],
                ["6+", "Advisory areas"],
                ["100%", "Client-focused"]
              ].map(([number, label]) => (
                <div key={label} className="mini-lift rounded-lg border border-gold-soft bg-white p-5 text-center shadow-gold">
                  <p className="font-heading text-3xl font-black text-gold">{number}</p>
                  <p className="mt-2 text-xs font-black uppercase tracking-normal text-gold-rich">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div data-animate="right">
            <GoldImage
              src="/assets/img/features/features-2.webp"
              alt="UAE business planning visual"
              className="aspect-[4/3]"
              sizes="(min-width: 1024px) 560px, 92vw"
            />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="motion-card group rounded-lg border border-gold-soft bg-white p-6 shadow-gold"
                data-animate="flip"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="motion-number font-heading text-4xl font-black text-gold-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="motion-icon grid h-12 w-12 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-black text-gold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-gold-rich">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="motion-chip inline-flex items-center gap-1 rounded-full border border-gold-soft bg-white px-3 py-1 text-xs font-black text-gold-rich"
                    >
                      <Check className="h-3 w-3 text-gold" aria-hidden="true" />
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
