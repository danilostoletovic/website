import { site } from "@/lib/site";

export default function Home() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <h1 className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl">
        {site.headline}
      </h1>
    </section>
  );
}
