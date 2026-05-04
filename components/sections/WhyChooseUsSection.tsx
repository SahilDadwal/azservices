import { Award, Handshake, Layers, LifeBuoy } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { GoldImage } from "./GoldImage";
import { SectionHeading } from "./SectionHeading";

type Reason = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: Handshake,
    title: "Client-Oriented",
    description:
      "Every recommendation is shaped around your business activity, ownership expectations, banking needs, and growth plan."
  },
  {
    icon: LifeBuoy,
    title: "Continuous Support",
    description:
      "The relationship continues after setup with guidance for tax, accounting, renewals, filings, and operational documents."
  },
  {
    icon: Layers,
    title: "One-Stop Solution",
    description:
      "Formation, compliance, due diligence, banking readiness, and administration are coordinated in one advisory flow."
  },
  {
    icon: Award,
    title: "Practical Expertise",
    description:
      "You receive grounded knowledge of UAE market expectations, documentation standards, and setup procedures."
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="bg-white py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div data-animate>
          <SectionHeading
            eyebrow="Why clients choose us"
            title="Personalized support for founders and international businesses"
            description="The advisory relationship is built around clarity, responsiveness, and practical execution from the first idea through ongoing corporate care."
          />
        </div>

        <div className="mt-10 grid gap-8 md:mt-14 md:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-animate="left">
            <GoldImage
              src="/assets/img/misc/misc-5.webp"
              alt="Premium consulting workspace"
              className="aspect-[4/5] lg:aspect-[5/6]"
              sizes="(min-width: 1024px) 520px, 92vw"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className="motion-card rounded-lg border border-gold-soft bg-white p-5 shadow-gold sm:p-6"
                  data-animate="flip"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <span className="motion-icon grid h-12 w-12 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-black text-gold sm:text-xl">{reason.title}</h3>
                  <p className="mt-4 text-[14px] leading-[1.65] text-gold-rich sm:text-sm sm:leading-7">{reason.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
