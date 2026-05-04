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
      <h2 className="font-heading text-[24px] font-bold leading-[1.25] tracking-normal text-gold sm:text-[30px] lg:text-[36px]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-[1.6] text-gold-rich sm:mt-5 sm:text-base md:text-[18px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
