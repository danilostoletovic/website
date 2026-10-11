import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
            {site.name}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-2 text-sm text-muted">
            Freelance web development by {site.owner}.
          </p>
        </div>
        <ContactLinks
          location="footer"
          className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium"
          linkClassName="underline-offset-4 hover:text-accent hover:underline"
        />
      </div>
    </footer>
  );
}
