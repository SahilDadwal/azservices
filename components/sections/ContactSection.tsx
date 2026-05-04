"use client";

import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import { ArrowRight, BadgeCheck, Building2, Mail, MapPin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const company = {
  name: "AZ SERVICES L.L.C-FZ",
  license: "2533175.01",
  address: "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
  email: "azservicesllcfz@gmail.com"
};

export function ContactSection() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const phone = String(form.get("phone") ?? "");
    const subject = String(form.get("subject") ?? "Business setup enquiry");
    const message = String(form.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      "",
      message
    ].join("\n");

    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Email draft opened for AZ Services.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Connect with AZ Services"
          description="Share your business goals, setup stage, and preferred jurisdiction. AZ Services will help you plan the next step with a clean advisory path."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-gold-soft bg-white p-6 shadow-gold sm:p-8">
            <h3 className="text-2xl font-black text-gold">Company details</h3>
            <p className="mt-4 text-base leading-8 text-gold-rich">
              Clean documentation and clear communication are the foundation of every company
              setup, banking, tax, and compliance engagement.
            </p>

            <div className="mt-8 grid gap-4">
              <InfoItem icon={<Building2 className="h-5 w-5" aria-hidden="true" />} title="Company Name" text={company.name} />
              <InfoItem icon={<BadgeCheck className="h-5 w-5" aria-hidden="true" />} title="License" text={company.license} />
              <InfoItem icon={<MapPin className="h-5 w-5" aria-hidden="true" />} title="Address" text={company.address} />
              <InfoItem
                icon={<Mail className="h-5 w-5" aria-hidden="true" />}
                title="Email"
                text={company.email}
                href={`mailto:${company.email}`}
              />
            </div>
          </div>

          <div className="rounded-lg border border-gold-soft bg-white p-6 shadow-gold sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
                <Send className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-black text-gold">Send enquiry</h3>
                <p className="text-sm font-bold text-gold-rich">Business setup, tax, accounting, or compliance</p>
              </div>
            </div>

            <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Enter your full name" required />
                <Field label="Email address" name="email" type="email" placeholder="Enter your email address" required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" placeholder="Enter your phone number" />
                <Field label="Subject" name="subject" placeholder="Business setup enquiry" required />
              </div>
              <label className="grid gap-2 text-sm font-black text-gold">
                Message
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your business activity, setup stage, and preferred UAE structure"
                  className="min-h-36 rounded-lg border border-gold-soft bg-white px-4 py-3 text-base font-medium leading-7 text-gold-rich outline-none transition placeholder:text-gold-soft focus:border-gold focus:ring-2 focus:ring-gold/30"
                />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold bg-gold-linear px-7 py-4 text-base font-black text-white shadow-gold"
              >
                Send Message
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>

              {status ? <p className="text-sm font-bold text-gold-rich">{status}</p> : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({
  icon,
  title,
  text,
  href
}: {
  icon: ReactNode;
  title: string;
  text: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-gold-soft bg-gold/10 text-gold">
        {icon}
      </span>
      <span>
        <span className="block text-xs font-black uppercase tracking-normal text-gold">{title}</span>
        <span className="mt-1 block text-sm font-bold leading-6 text-gold-rich">{text}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="flex items-start gap-4 rounded-lg border border-gold-soft bg-white p-4 shadow-gold transition hover:border-gold">
        {content}
      </a>
    );
  }

  return <div className="flex items-start gap-4 rounded-lg border border-gold-soft bg-white p-4 shadow-gold">{content}</div>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required = false
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <label className="grid gap-2 text-sm font-black text-gold">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-gold-soft bg-white px-4 py-3 text-base font-medium text-gold-rich outline-none transition placeholder:text-gold-soft focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </label>
  );
}
