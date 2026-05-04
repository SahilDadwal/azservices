const stats = [
  {
    number: "100%",
    label: "Foreign ownership pathways considered where available"
  },
  {
    number: "3",
    label: "Core UAE setup routes: free zone, mainland, offshore"
  },
  {
    number: "6+",
    label: "Business support areas coordinated after launch"
  }
];

export function StatsSection() {
  return (
    <section className="border-y border-gold-soft bg-gold-soft/10 py-10 md:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl gap-4 px-5 sm:gap-5 sm:px-8 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.number}
            className="motion-card rounded-lg border border-gold-soft bg-white p-6 text-center shadow-gold sm:p-8"
            data-animate="zoom"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <p className="motion-number font-heading text-4xl font-black text-gold sm:text-5xl md:text-6xl">{stat.number}</p>
            <p className="mx-auto mt-3 max-w-sm text-[13px] font-bold leading-6 text-gold-rich sm:mt-4 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
