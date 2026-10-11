import Link from "next/link";
import { ContactLinks } from "@/components/contact-links";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-accent bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/">
            <Wordmark size="lg" />
          </Link>
          <p className="mt-4 text-muted">
            Freelance developer {site.owner}. Working remotely with clients
            in Serbia and internationally.
          </p>
        </div>
        <ContactLinks
          location="footer"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold tracking-wide uppercase"
          linkClassName="hover:text-accent"
        />
      </div>
    </footer>
  );
}
