import { ArrowRight, Check } from "lucide-react";

const points = ["Business setup", "Banking readiness", "Tax and accounting", "Compliance care"];

export function CtaSection() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-lg border border-gold bg-gold-linear p-8 shadow-gold-lg sm:p-10 lg:p-12" data-animate="zoom">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-black uppercase tracking-normal text-white">UAE business launch</p>
              <h2 className="mt-3 max-w-3xl font-heading text-3xl font-black leading-tight text-white sm:text-4xl">
                Build your Dubai company structure with clarity from the first conversation.
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                {points.map((point) => (
                  <span
                    key={point}
                    className="mini-lift inline-flex items-center gap-2 rounded-full border border-white bg-white/15 px-4 py-2 text-sm font-bold text-white"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="motion-button inline-flex items-center justify-center gap-2 rounded-full border border-white bg-white px-7 py-4 text-sm font-black text-gold-rich shadow-gold hover:text-white"
            >
              <span>Start Consultation</span>
              <ArrowRight className="motion-arrow h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
