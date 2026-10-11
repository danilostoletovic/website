type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="inline-block bg-accent px-2 py-1 text-sm font-bold tracking-[0.2em] text-accent-ink uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-4 font-display text-5xl leading-[0.9] tracking-tight uppercase sm:text-7xl"
      >
        {title}
      </h2>
    </div>
  );
}
