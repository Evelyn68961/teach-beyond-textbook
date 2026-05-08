import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-20 sm:py-28 grid sm:grid-cols-5 gap-12 items-center">
        <div className="sm:col-span-3">
          <p className="text-sm uppercase tracking-widest text-accent font-medium mb-4">
            English teacher · Game builder · Pharmacist
          </p>
          <h1 className="font-display text-4xl sm:text-5xl leading-tight font-semibold text-foreground mb-6">
            I built these materials because the market failed me.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-xl mb-8">
            Ten years tutoring English in Taiwan, I couldn&apos;t find handouts that taught
            grammar in context, vocabulary that stuck, and reading at four levels of depth.
            So I wrote my own. Then I built games to go with them.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/materials"
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
            >
              Browse free materials →
            </Link>
            <Link
              href="/games"
              className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Play the games
            </Link>
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="bg-accent-soft border border-border rounded-2xl p-6">
            <p className="font-display text-lg font-semibold text-accent mb-2">
              What makes these different
            </p>
            <ul className="space-y-2 text-sm text-foreground">
              <li>• Original texts — never recycled from textbooks</li>
              <li>• Four comprehension tiers, every passage</li>
              <li>• Grammar taught in context, not isolation</li>
              <li>• Culturally neutral, ESL-ready globally</li>
            </ul>
          </div>
        </div>
      </section>

      {/* What you'll find */}
      <section className="py-16 border-t border-border">
        <h2 className="font-display text-3xl font-semibold mb-10">What you&apos;ll find here</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <FeatureCard
            href="/materials"
            title="Weekly handouts"
            body="New vocabulary + grammar + comprehension passages every week. Free to read, downloadable as printable PDFs."
          />
          <FeatureCard
            href="/games"
            title="Interactive games"
            body="Four browser games for kids — Word Garden, Word Runner, Letter Mole, and Grammar Games. Free to use in class."
          />
          <FeatureCard
            href="/shop"
            title="Curriculum packs"
            body="Bundled lesson plans and teaching systems for tutors, language schools, and homeschoolers."
          />
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 border-t border-border">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold mb-4">Who this is for</h2>
          <p className="text-muted leading-relaxed mb-4">
            English teachers anywhere — from Taipei tutoring centers to Bogotá language
            schools to ESL classrooms in the US. The materials are written in universally
            accessible English with no culturally specific references.
          </p>
          <p className="text-muted leading-relaxed">
            If you&apos;ve ever printed a handout and thought <em>this could be so much better</em>,
            you&apos;re my reader.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border">
        <div className="bg-accent text-white rounded-2xl p-10 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-semibold mb-2">
              One free handout per month, in your inbox.
            </p>
            <p className="text-white/80 text-sm">
              No spam. Unsubscribe whenever. Your students get the new ones first.
            </p>
          </div>
          <Link
            href="/materials"
            className="inline-flex items-center gap-2 bg-white text-accent px-6 py-3 rounded-full text-sm font-medium hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Get notified →
          </Link>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ href, title, body }: { href: string; title: string; body: string }) {
  return (
    <Link
      href={href}
      className="group block bg-card border border-border rounded-2xl p-6 hover:border-accent transition-colors"
    >
      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{body}</p>
    </Link>
  );
}
