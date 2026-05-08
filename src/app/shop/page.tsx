import Link from "next/link";

export const metadata = {
  title: "Shop",
  description: "Paid handouts, lesson plans, and curriculum packs for English teachers.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">Shop</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
          Premium materials for serious teachers.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Currently selling on Teachers Pay Teachers. The store is opening shortly — in the
          meantime, all weekly handouts are free in the materials section.
        </p>
      </header>

      <div className="bg-accent-soft border border-border rounded-2xl p-8">
        <h2 className="font-display text-2xl font-semibold text-accent mb-3">Coming soon</h2>
        <ul className="space-y-2 text-foreground mb-6">
          <li>• Themed handout bundles ($12–25)</li>
          <li>• 6-week unit plans with assessments ($30–60)</li>
          <li>• Full curriculum frameworks for tutors ($80+)</li>
        </ul>
        <Link
          href="/materials"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
        >
          Browse free materials →
        </Link>
      </div>
    </div>
  );
}
