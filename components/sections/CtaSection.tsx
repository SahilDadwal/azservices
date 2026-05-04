import { ArrowRight, Check } from "lucide-react";

const points = ["Business setup", "Banking readiness", "Tax and accounting", "Compliance care"];

export function CtaSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="overflow-hidden rounded-lg border border-gold bg-gold-linear p-6 shadow-gold-lg sm:p-8 md:p-10 lg:p-12"
          data-animate="zoom"
        >
          <div className="grid items-center gap-6 md:gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-black uppercase tracking-normal text-white sm:text-sm">UAE business launch</p>
              <h2 className="mt-3 max-w-3xl font-heading text-[26px] font-black leading-tight text-white sm:text-3xl md:text-4xl">
                Build your Dubai company structure with clarity from the first conversation.
              </h2>
              <div className="mt-5 flex flex-wrap gap-2 sm:mt-7 sm:gap-3">
                {points.map((point) => (
                  <span
                    key={point}
                    className="mini-lift inline-flex min-h-[40px] items-center gap-2 rounded-full border border-white bg-white/15 px-3 py-2 text-xs font-bold text-white sm:min-h-0 sm:px-4 sm:text-sm"
                  >
                    <Check className="h-4 w-4" aria-hidden="true" />
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="motion-button mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white bg-white px-7 py-[14px] text-sm font-black text-gold-rich shadow-gold hover:text-white sm:mt-0 sm:w-auto sm:py-4"
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
