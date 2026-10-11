type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
};

export function SectionHeading({ id, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-6xl"
      >
        {title}
      </h2>
    </div>
  );
}
