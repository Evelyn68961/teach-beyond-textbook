import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-muted">
        <div>
          <p className="font-display text-base text-foreground">Teach Beyond Textbook</p>
          <p>Original English teaching materials by Evelyn Chang.</p>
        </div>
        <nav className="flex gap-5">
          <Link href="/materials" className="hover:text-accent transition-colors">Materials</Link>
          <Link href="/games" className="hover:text-accent transition-colors">Games</Link>
          <Link href="/work-with-me" className="hover:text-accent transition-colors">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
