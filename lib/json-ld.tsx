import { contactLinks, site } from "@/lib/site";

// Escapes "<" so the payload can't close the script tag (see the
// Next.js JSON-LD guide).
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function personJsonLd() {
  return {
    "@type": "Person",
    "@id": `${site.url}/about#person`,
    name: site.owner,
    // Native spelling kept as an alias so searches with the diacritic match.
    alternateName: ["Danilo Stoletović", "Dan", site.name],
    jobTitle: "Freelance developer",
    url: `${site.url}/about`,
    email: site.email,
    sameAs: contactLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("https://")),
  };
}
