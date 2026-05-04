"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Building2, Check, Play, Users } from "lucide-react";
import { GoldImage } from "./GoldImage";

const rotatingWords = ["business setup", "corporate tax", "banking support"];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative isolate overflow-hidden bg-white pb-20 pt-32 sm:pt-36 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-gold-soft opacity-10" aria-hidden="true" />
      <div className="absolute inset-x-0 top-20 -z-10 h-px bg-gold-band" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold-soft bg-white px-4 py-2 text-sm font-bold text-gold-rich shadow-gold"
          data-animate="zoom"
        >
          <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
          Premium UAE business advisory from Dubai
        </div>

        <h1
          className="mx-auto mt-8 max-w-5xl font-heading text-4xl font-black leading-tight tracking-normal text-gold sm:text-6xl lg:text-7xl"
          data-animate="zoom"
          style={{ transitionDelay: "90ms" }}
        >
          Start, structure, and scale your UAE company with{" "}
          <span className="inline-block bg-gold-linear bg-clip-text text-transparent">
            {rotatingWords[wordIndex]}
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gold-rich sm:text-xl"
          data-animate
          style={{ transitionDelay: "160ms" }}
        >
          AZ SERVICES L.L.C-FZ helps entrepreneurs and international companies establish,
          manage, and grow in the UAE with formation, tax, accounting, compliance, due
          diligence, and bank account guidance.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row" data-animate style={{ transitionDelay: "230ms" }}>
          <a
            href="#contact"
            className="motion-button inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold-linear px-7 py-4 text-base font-black text-white shadow-gold transition hover:border-gold-bright sm:w-auto"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="motion-arrow h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="motion-button inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-soft bg-white px-7 py-4 text-base font-black text-gold-rich shadow-gold transition hover:border-gold hover:text-white sm:w-auto"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            <span>Explore Services</span>
          </a>
        </div>

        <div className="relative mx-auto mt-14 max-w-5xl" data-animate style={{ transitionDelay: "320ms" }}>
          <GoldImage
            src="/assets/img/about/about-18.webp"
            alt="Dubai advisory workspace"
            className="aspect-[16/10]"
            priority
            sizes="(min-width: 1024px) 960px, 92vw"
          />

          <div className="pointer-events-none absolute -left-4 top-10 hidden w-72 sm:block lg:-left-8 lg:top-24">
            <HeroMetric
              className="float-card"
              icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
              value="UAE"
              label="Free zone, mainland, and offshore guidance"
            />
          </div>

          <div className="pointer-events-none absolute -right-4 bottom-10 hidden w-72 sm:block lg:-right-8 lg:bottom-24">
            <HeroMetric
              className="float-card-reverse"
              icon={<Users className="h-5 w-5" aria-hidden="true" />}
              value="100%"
              label="Client-focused support from setup to operations"
            />
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3" data-animate style={{ transitionDelay: "410ms" }}>
          {["Trade license advisory", "Corporate tax registration", "Bank account readiness"].map((item) => (
            <div
              key={item}
              className="mini-lift flex items-center justify-center gap-2 rounded-lg border border-gold-soft bg-white px-4 py-3 text-sm font-bold text-gold-rich shadow-gold"
            >
              <Check className="h-4 w-4 text-gold" aria-hidden="true" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroMetric({
  className = "",
  icon,
  value,
  label
}: {
  className?: string;
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className={`rounded-lg border border-gold-soft bg-white p-4 text-left shadow-gold-lg ${className}`}>
      <div className="flex items-center gap-3">
        <span className="motion-icon grid h-11 w-11 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
          {icon}
        </span>
        <div>
          <p className="font-heading text-2xl font-black text-gold">{value}</p>
          <p className="mt-1 text-sm font-bold leading-5 text-gold-rich">{label}</p>
        </div>
      </div>
    </div>
  );
}
