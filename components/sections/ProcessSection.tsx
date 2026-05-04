"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { BadgeCheck, Building2, Check, ClipboardCheck, FileText, Landmark, WalletCards } from "lucide-react";
import { GoldImage } from "./GoldImage";

type ProcessTab = {
  id: string;
  icon: LucideIcon;
  label: string;
  subtitle: string;
  title: string;
  description: string;
  bullets: string[];
  stats: [string, string][];
  image: string;
};

const tabs: ProcessTab[] = [
  {
    id: "structure",
    icon: Building2,
    label: "Structure",
    subtitle: "Jurisdiction and license",
    title: "Choose the right UAE jurisdiction and license route.",
    description:
      "The advisory process starts by matching your activity, ownership goals, customer base, office needs, and banking profile to the right free zone, mainland, or offshore path.",
    bullets: [
      "Business activity review",
      "Free zone, mainland, and offshore comparison",
      "License type and shareholder structure guidance",
      "Setup roadmap with required steps"
    ],
    stats: [
      ["3", "Routes"],
      ["1", "Roadmap"],
      ["100%", "Tailored"]
    ],
    image: "/assets/img/features/features-4.webp"
  },
  {
    id: "documents",
    icon: FileText,
    label: "Documents",
    subtitle: "Paperwork and filings",
    title: "Prepare the documents needed for clean incorporation.",
    description:
      "Company formation can become slow when paperwork is unclear. AZ Services helps organize applications, identity documents, activity descriptions, approvals, and supporting records.",
    bullets: [
      "Document checklist",
      "Application preparation",
      "Government and authority coordination",
      "Record organization for banking and compliance"
    ],
    stats: [
      ["1", "Checklist"],
      ["0", "Guesswork"],
      ["6+", "Support areas"]
    ],
    image: "/assets/img/features/features-1.webp"
  },
  {
    id: "license",
    icon: BadgeCheck,
    label: "License",
    subtitle: "Approval and issuance",
    title: "Coordinate licensing steps through approval and issuance.",
    description:
      "From initial submission through trade license issuance, the focus is on reducing avoidable delays and keeping each requirement visible.",
    bullets: [
      "Authority submission support",
      "Trade license follow-up",
      "Visa and Emirates ID coordination",
      "Post-incorporation document readiness"
    ],
    stats: [
      ["UAE", "License"],
      ["ID", "Residency steps"],
      ["AZ", "Support"]
    ],
    image: "/assets/img/features/features-6.webp"
  },
  {
    id: "operations",
    icon: WalletCards,
    label: "Operations",
    subtitle: "Banking and compliance",
    title: "Move from setup into banking, tax, accounting, and compliance.",
    description:
      "After incorporation, AZ Services supports the operational layer: corporate bank account preparation, corporate tax registration, accounting hygiene, and compliance checkpoints.",
    bullets: [
      "Corporate bank account preparation",
      "Corporate tax and VAT guidance",
      "Accounting and bookkeeping support",
      "Compliance and due diligence documentation"
    ],
    stats: [
      ["Bank", "Readiness"],
      ["Tax", "Clarity"],
      ["Care", "Ongoing"]
    ],
    image: "/assets/img/services/services-11.webp"
  }
];

export function ProcessSection() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-white py-20 sm:py-24" id="process">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="rounded-lg border border-gold-soft bg-white p-4 shadow-gold sm:p-6">
          <div className="grid gap-3 lg:grid-cols-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active.id === tab.id;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveId(tab.id)}
                  className={`rounded-lg border p-4 text-left transition ${
                    isActive
                      ? "border-gold bg-gold-linear text-white shadow-gold"
                      : "border-gold-soft bg-white text-gold-rich hover:border-gold hover:text-gold"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-lg border ${
                        isActive ? "border-white bg-white text-gold" : "border-gold-soft bg-gold/10 text-gold"
                      }`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-heading text-lg font-black">{tab.label}</span>
                      <span className="block text-xs font-bold">{tab.subtitle}</span>
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid items-center gap-10 px-1 py-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
                <ActiveIcon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-heading text-3xl font-black leading-tight text-gold sm:text-4xl">
                {active.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-gold-rich">{active.description}</p>

              <div className="mt-7 grid gap-3">
                {active.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm font-bold leading-6 text-gold-rich">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                    {bullet}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {active.stats.map(([number, label]) => (
                  <div key={`${number}-${label}`} className="rounded-lg border border-gold-soft bg-white p-4 text-center shadow-gold">
                    <p className="font-heading text-2xl font-black text-gold">{number}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-normal text-gold-rich">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <GoldImage
                src={active.image}
                alt={`${active.label} advisory process`}
                className="aspect-[16/11]"
                sizes="(min-width: 1024px) 680px, 92vw"
              />
              <div className="absolute bottom-5 left-5 max-w-xs rounded-lg border border-gold-soft bg-white p-4 shadow-gold">
                <div className="flex items-center gap-3">
                  <Landmark className="h-6 w-6 text-gold" aria-hidden="true" />
                  <p className="text-sm font-black leading-5 text-gold-rich">
                    Dubai-ready structure, documentation, and compliance flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
