import { ArrowRight, Building2, Check, Rocket, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

type Plan = {
  icon: LucideIcon;
  name: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

const plans: Plan[] = [
  {
    icon: Rocket,
    name: "Company Formation",
    description: "For founders ready to choose a UAE setup route and move toward licensing.",
    features: [
      "Jurisdiction and activity review",
      "Trade license documentation",
      "Shareholder structure guidance",
      "Post-setup document checklist"
    ]
  },
  {
    icon: ShieldCheck,
    name: "Compliance Care",
    description: "For businesses that need tax, accounting, and filing support after incorporation.",
    features: [
      "Corporate tax registration guidance",
      "Accounting and bookkeeping support",
      "VAT awareness and record structure",
      "Compliance document coordination"
    ],
    highlighted: true
  },
  {
    icon: Building2,
    name: "Full Advisory Desk",
    description: "For international companies wanting setup, banking readiness, and ongoing support.",
    features: [
      "Free zone, mainland, or offshore planning",
      "Corporate bank account preparation",
      "Due diligence and compliance files",
      "Ongoing corporate administration"
    ]
  }
];

export function AdvisoryPlansSection() {
  return (
    <section id="plans" className="bg-white py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-animate>
          <SectionHeading
            eyebrow="Advisory plans"
            title="Choose the support model that fits your stage"
            description="Each engagement can be shaped around your exact activity, jurisdiction, ownership, tax, accounting, and banking requirements."
          />
        </div>

        <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`motion-card relative rounded-lg border p-5 shadow-gold sm:p-6 md:p-7 ${
                  plan.highlighted
                    ? "border-gold bg-gold-linear text-white"
                    : "border-gold-soft bg-white text-gold-rich"
                }`}
                data-animate="flip"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                {plan.highlighted ? (
                  <span className="absolute right-5 top-5 rounded-full border border-white bg-white px-3 py-1 text-xs font-black uppercase tracking-normal text-gold-rich">
                    Popular
                  </span>
                ) : null}

                <span
                  className={`grid h-14 w-14 place-items-center rounded-lg border ${
                    plan.highlighted ? "border-white bg-white text-gold" : "border-gold-soft bg-gold/10 text-gold"
                  } motion-icon`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>

                <h3
                  className={`mt-6 text-xl font-black sm:text-2xl ${plan.highlighted ? "text-white" : "text-gold"}`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 text-[14px] leading-[1.65] sm:text-sm sm:leading-7 ${plan.highlighted ? "text-white" : "text-gold-rich"}`}
                >
                  {plan.description}
                </p>

                <div className="mt-6 grid gap-2.5 sm:mt-7 sm:gap-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className={`flex items-start gap-3 text-sm font-bold leading-6 ${
                        plan.highlighted ? "text-white" : "text-gold-rich"
                      }`}
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`motion-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-sm font-black sm:mt-8 sm:py-3 ${
                    plan.highlighted
                      ? "border-white bg-white text-gold-rich hover:text-white"
                      : "border-gold bg-gold-linear text-white"
                  }`}
                >
                  <span>Discuss This Plan</span>
                  <ArrowRight className="motion-arrow h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
