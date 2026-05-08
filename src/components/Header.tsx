import Link from "next/link";

const nav = [
  { href: "/materials", label: "Materials" },
  { href: "/games", label: "Games" },
  { href: "/shop", label: "Shop" },
  { href: "/work-with-me", label: "Work with me" },
];

export default function Header() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-xl font-semibold text-foreground hover:text-accent transition-colors">
          Teach Beyond Textbook
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted hover:text-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
