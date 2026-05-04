"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Building2, Check, Play, Users } from "lucide-react";
import { GoldImage } from "./GoldImage";

const rotatingWords = ["Business Setup", "Corporate Tax", "Banking Support"];

export function HeroSection() {
  const typedText = useTypedText(rotatingWords);

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen w-full min-w-0 items-center overflow-x-hidden overflow-y-hidden bg-white pb-12 pt-32 sm:pt-36 md:pb-16 md:pt-36 lg:pb-[60px] lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-gold-soft opacity-10" aria-hidden="true" />

      <div className="mx-auto w-full min-w-0 max-w-7xl px-5 text-center sm:px-8">
        <div
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-gold-soft bg-white px-4 py-2 text-sm font-bold text-gold-rich shadow-gold"
          data-animate="zoom"
        >
          <BadgeCheck className="h-4 w-4 text-gold" aria-hidden="true" />
          Premium UAE business advisory from Dubai
        </div>

        <h1
          className="hero-title mx-auto mt-8 w-full max-w-[900px] break-words px-0 font-heading text-[26px] font-black leading-[1.15] tracking-normal text-gold sm:text-[34px] md:text-[48px] lg:text-[52px]"
          data-animate="zoom"
          style={{ transitionDelay: "90ms" }}
        >
          Launch Your UAE Business With{" "}
          <span className="typed-word">
            {typedText}
            <span className="typed-cursor" aria-hidden="true" />
          </span>
        </h1>

        <p
          className="mx-auto mt-7 max-w-[600px] text-[15px] leading-[1.6] text-gold-rich sm:text-[17px] md:text-[19px]"
          data-animate
          style={{ transitionDelay: "160ms" }}
        >
          AZ SERVICES L.L.C-FZ helps entrepreneurs and international companies establish,
          manage, and grow in the UAE with formation, tax, accounting, compliance, due
          diligence, and bank account guidance.
        </p>

        <div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:gap-5"
          data-animate
          style={{ transitionDelay: "230ms" }}
        >
          <a
            href="#contact"
            className="motion-button inline-flex w-full min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-gold bg-gold-linear px-6 py-[14px] text-base font-bold text-white shadow-gold transition hover:border-gold-bright sm:w-auto sm:min-h-[48px] sm:px-8 sm:py-4"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="motion-arrow h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="#services"
            className="motion-button inline-flex w-full min-h-[52px] items-center justify-center gap-2 rounded-full border-2 border-gold-soft bg-white px-6 py-[14px] text-base font-bold text-gold-rich shadow-gold transition hover:border-gold hover:text-white sm:w-auto sm:min-h-[48px] sm:px-8 sm:py-4"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            <span>Explore Services</span>
          </a>
        </div>

        <div
          className="relative mx-auto mt-10 w-full min-w-0 max-w-[900px] md:mt-14 lg:mt-[60px]"
          data-animate
          style={{ transitionDelay: "320ms" }}
        >
          <GoldImage
            src="/assets/img/about/about-18.webp"
            alt="Dubai advisory workspace"
            className="aspect-[16/10] rounded-[20px] p-[15px]"
            priority
            sizes="(min-width: 1024px) 900px, 92vw"
          />

          <div className="pointer-events-none absolute -left-4 top-[20%] hidden w-[286px] sm:block lg:-left-[60px]">
            <HeroMetric
              className="float-card"
              icon={<Building2 className="h-5 w-5" aria-hidden="true" />}
              value="UAE"
              label="Free zone, mainland, and offshore guidance"
            />
          </div>

          <div className="pointer-events-none absolute bottom-[15%] -right-4 hidden w-[286px] sm:block lg:-right-[60px]">
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

function useTypedText(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isComplete = letterCount === currentWord.length;
    const isEmpty = letterCount === 0;
    const delay = isComplete && !isDeleting ? 1300 : isDeleting ? 38 : 78;

    const timer = window.setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        return;
      }

      setLetterCount((count) => count + (isDeleting ? -1 : 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, letterCount, wordIndex, words]);

  return words[wordIndex].slice(0, letterCount);
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
