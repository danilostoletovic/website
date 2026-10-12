type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  // Tighter spacing and a smaller title, for sections that must fit one screen.
  compact?: boolean;
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  compact = false,
}: SectionHeadingProps) {
  return (
    <div className={`reveal ${compact ? "mb-6" : "mb-10 sm:mb-14"}`}>
      <p className="section-eyebrow text-sm font-bold tracking-[0.2em] uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display leading-none tracking-normal uppercase ${
          compact ? "text-4xl sm:text-6xl" : "text-5xl sm:text-7xl"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
