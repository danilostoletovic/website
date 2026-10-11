import Link from "next/link";
import { site } from "@/lib/site";
import { BookCallButton } from "@/components/book-call-button";

export function SiteHeader() {
  return (
    <header className="border-b border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-sm font-medium">
          <Link href="/#work" className="hidden hover:text-accent sm:inline">
            Work
          </Link>
          <Link href="/#services" className="hidden hover:text-accent sm:inline">
            Services
          </Link>
          <Link href="/about" className="hover:text-accent">
            About
          </Link>
          <BookCallButton location="header" size="sm" />
        </nav>
      </div>
    </header>
  );
}
