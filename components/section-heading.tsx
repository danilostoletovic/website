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
      <p className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-bold tracking-[0.2em] text-accent-ink uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className={`mt-3 font-display leading-none tracking-normal uppercase ${
          compact ? "text-4xl sm:text-5xl" : "text-5xl sm:text-7xl"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
