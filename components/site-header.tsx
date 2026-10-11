import Link from "next/link";
import { BookCallButton } from "@/components/book-call-button";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0">
          <Wordmark />
        </Link>
        <nav
          aria-label="Main"
          className="flex items-center gap-5 text-sm font-semibold tracking-wide uppercase"
        >
          <Link href="/#services" className="hidden hover:text-accent md:inline">
            Services
          </Link>
          <Link href="/#work" className="hidden hover:text-accent md:inline">
            Work
          </Link>
          <Link href="/about" className="hidden hover:text-accent sm:inline">
            About
          </Link>
          <BookCallButton location="header" size="sm" />
        </nav>
      </div>
    </header>
  );
}
