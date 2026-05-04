import { ArrowRight, Award, Handshake, Lightbulb, TrendingUp } from "lucide-react";
import { GoldImage } from "./GoldImage";

const values = [
  {
    icon: Award,
    title: "Experienced Guidance",
    description: "Practical knowledge of UAE company registration, licensing paths, and ongoing administration."
  },
  {
    icon: Handshake,
    title: "Client-Oriented",
    description: "A tailored approach that keeps your goals, timing, and comfort at the center of every step."
  },
  {
    icon: Lightbulb,
    title: "One-Stop Support",
    description: "Formation, tax, accounting, banking, compliance, and due diligence support under one advisory flow."
  },
  {
    icon: TrendingUp,
    title: "Built For Growth",
    description: "Clear structures that help companies launch confidently and operate with long-term discipline."
  }
];

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-animate="left">
          <GoldImage
            src="/assets/img/about/about-portrait-7.webp"
            alt="AZ Services business advisory consultation"
            className="aspect-[4/5]"
            sizes="(min-width: 1024px) 560px, 92vw"
          />
        </div>

        <div data-animate="right">
          <span className="inline-flex rounded-full border border-gold-soft bg-gold/10 px-4 py-2 text-xs font-black uppercase tracking-normal text-gold-rich">
            About AZ Services
          </span>
          <h2 className="mt-6 font-heading text-[26px] font-black leading-tight tracking-normal text-gold sm:text-3xl md:text-4xl lg:text-5xl">
            A focused Dubai advisory partner for business setup and corporate operations.
          </h2>
          <p className="mt-6 text-base leading-[1.65] text-gold-rich sm:text-lg sm:leading-8">
            AZ SERVICES L.L.C-FZ supports entrepreneurs and international businesses across
            UAE company formation, administration, tax consultancy, compliance, accounting,
            due diligence, and corporate bank account preparation. Whether you are choosing a
            free zone, mainland, or offshore route, the work is shaped around your commercial
            goals and the regulatory steps needed to move cleanly.
          </p>
          <p className="mt-5 text-[15px] leading-[1.65] text-gold-rich sm:text-base sm:leading-8">
            Our approach is start-to-finish: understand the business, select the right
            structure, prepare documentation, coordinate licensing steps, and support the
            operational needs that follow after incorporation.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="motion-card rounded-lg border border-gold-soft bg-white p-5 shadow-gold"
                  data-animate="flip"
                  style={{ transitionDelay: `${indexDelay(value.title)}ms` }}
                >
                  <Icon className="motion-icon h-7 w-7 text-gold" aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-black text-gold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gold-rich">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#services"
              className="motion-button inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gold-linear px-6 py-3.5 text-sm font-black text-white shadow-gold sm:py-3"
            >
              <span>View Services</span>
              <ArrowRight className="motion-arrow h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="motion-button inline-flex items-center justify-center rounded-full border border-gold-soft bg-white px-6 py-3.5 text-sm font-black text-gold-rich shadow-gold transition hover:border-gold hover:text-white sm:py-3"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function indexDelay(title: string) {
  return values.findIndex((value) => value.title === title) * 80;
}
