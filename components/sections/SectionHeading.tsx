type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <div className={centered ? "mb-4 flex items-center justify-center gap-3" : "mb-4 flex items-center gap-3"}>
        <span className="h-px w-10 bg-gold" aria-hidden="true" />
        <span className="text-xs font-black uppercase tracking-normal text-gold-rich">{eyebrow}</span>
        <span className="h-px w-10 bg-gold" aria-hidden="true" />
      </div>
      <h2 className="font-heading text-3xl font-black tracking-normal text-gold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-gold-rich sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
