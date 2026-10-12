import Link from "next/link";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-3 sm:px-8">
        <Link href="/" className="shrink-0">
          <Wordmark />
        </Link>
        <nav
          aria-label="Main"
          className="flex items-center gap-5 text-sm font-semibold tracking-wide uppercase"
        >
          <Link href="/#services" className="hidden hover:underline md:inline">
            Services
          </Link>
          <Link href="/#work" className="hidden hover:text-accent md:inline">
            Work
          </Link>
          <Link href="/#budget" className="hidden text-muted hover:text-foreground md:inline">
            Budget
          </Link>
          <Link href="/about" className="hidden hover:text-accent sm:inline">
            About
          </Link>
        </nav>
      </div>
      <nav aria-label="Mobile sections" className="flex justify-center gap-5 border-t border-line px-5 text-sm font-semibold md:hidden">
        <Link href="/#services" className="py-3">Services</Link>
        <Link href="/#work" className="py-3">Work</Link>
        <Link href="/#budget" className="py-3 text-muted">Budget</Link>
        <Link href="/about" className="py-3">About</Link>
      </nav>
    </header>
  );
}
