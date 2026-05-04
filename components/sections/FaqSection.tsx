import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    question: "What are UAE Free Zones?",
    answer:
      "UAE Free Zones are designated economic areas created to support business setup and trade. They often provide simplified setup procedures, foreign ownership routes, and business-friendly operating conditions."
  },
  {
    question: "Can I run an international business from a UAE Free Zone?",
    answer:
      "Many consultants, traders, technology companies, and e-commerce founders use UAE Free Zones as a base for regional or global activity, especially when the business serves clients outside the UAE or does not need a direct retail presence."
  },
  {
    question: "Do I need a local Emirati partner?",
    answer:
      "In many Free Zone structures, foreign shareholders can own the company fully. Mainland requirements depend on the activity and structure, so AZ Services reviews this during the setup planning stage."
  },
  {
    question: "Can AZ Services help with a corporate bank account?",
    answer:
      "Yes. The team supports bank account readiness by helping organize company documents, activity details, shareholder records, and compliance information commonly requested during UAE bank review."
  },
  {
    question: "When should I think about VAT and Corporate Tax?",
    answer:
      "Tax and accounting should be considered early so records, invoices, and responsibilities are organized after incorporation. AZ Services can guide registration readiness and ongoing accounting coordination."
  },
  {
    question: "Can the license or office package be changed later?",
    answer:
      "Many UAE structures allow companies to add activities, update office arrangements, or adjust license details after incorporation, subject to the chosen authority and activity rules."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="bg-white py-10 sm:py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div data-animate>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before setting up in the UAE"
            description="A concise starting point for founders comparing free zone, mainland, offshore, banking, and compliance requirements."
          />
        </div>

        <div className="mt-8 grid gap-3 md:mt-12 md:gap-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="mini-lift group rounded-lg border border-gold-soft bg-white p-5 shadow-gold"
              data-animate
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <summary className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 py-1 text-left sm:py-0">
                <span className="font-heading text-base font-black text-gold sm:text-lg">{faq.question}</span>
                <ChevronDown className="h-5 w-5 shrink-0 text-gold transition group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 text-[14px] leading-[1.65] text-gold-rich sm:mt-4 sm:text-sm sm:leading-7">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
