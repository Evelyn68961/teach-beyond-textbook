import Link from "next/link";

export const metadata = {
  title: "About",
  description:
    "Evelyn Chang — 10 years tutoring English in Taiwan, research pharmacist by training. The story behind Teach Beyond Textbook.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">
          About
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">
          I built this because the market kept failing me.
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          Hi, I&apos;m Evelyn Chang. I&apos;ve been tutoring English in Taiwan for ten
          years and working as a research pharmacist alongside it. Teach Beyond
          Textbook is what I wish had existed when I first walked into a
          classroom.
        </p>
      </header>

      <section className="prose-handout space-y-6 text-foreground">
        <h2 className="font-display">Two careers, one frustration</h2>
        <p className="leading-relaxed">
          As a tutor, I wanted reading passages with depth — texts that asked
          students to think, not just decode. As a pharmacist, I knew the value
          of well-designed teaching materials because I was trained on them every
          day in clinical work. When I went looking for English handouts that met
          both standards, I couldn&apos;t find them.
        </p>
        <p className="leading-relaxed">
          Most worksheets recycled the same textbook passages. Most online
          comprehension exercises stopped at literal recall. Grammar was taught
          in isolation — a list of rules detached from how anyone actually speaks
          or writes. So I started writing my own.
        </p>

        <h2 className="font-display">What makes these materials different</h2>
        <ul className="space-y-3 list-disc list-inside leading-relaxed">
          <li>
            <strong>Original texts.</strong> Every reading passage is written
            from scratch — no recycled textbook content, no AI-generated filler.
          </li>
          <li>
            <strong>Four comprehension tiers.</strong> Every handout asks
            literal, inferential, critical-thinking, and personal-response
            questions about the same passage.
          </li>
          <li>
            <strong>Grammar in context.</strong> Patterns are pulled from the
            text students just read, not invented in isolation.
          </li>
          <li>
            <strong>Culturally neutral English.</strong> Written so a teacher in
            Bogot&aacute;, Bangkok, or Boston can use the same handout without
            rewriting cultural references.
          </li>
        </ul>

        <h2 className="font-display">And then I built games</h2>
        <p className="leading-relaxed">
          Around the time I started writing handouts, my younger students kept
          asking for &ldquo;something fun.&rdquo; I couldn&apos;t find vocabulary
          games that respected their intelligence — most were either too easy or
          too generic to use in class. So I built four:{" "}
          <a
            href="https://english-learning-games-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2 hover:no-underline"
          >
            Word Garden Defense, Word Runner, Letter Mole, and Grammar Games
          </a>
          . They&apos;re free to use in your classroom or for your own kids.
        </p>

        <h2 className="font-display">Beyond English</h2>
        <p className="leading-relaxed">
          My pharmacy work involves clinical research and education tools — a
          separate practice that lives under my professional identity, not under
          this brand. If you&apos;re here for the English teaching, you&apos;re
          in the right place.
        </p>
      </section>

      <section className="mt-16 pt-12 border-t border-border">
        <h2 className="font-display text-2xl font-semibold mb-4">
          Where to start
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/materials"
            className="group block bg-card border border-border rounded-2xl p-6 hover:border-accent transition-colors"
          >
            <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
              Browse free handouts &rarr;
            </h3>
            <p className="text-sm text-muted">
              16 published handouts with downloadable PDFs.
            </p>
          </Link>
          <Link
            href="/work-with-me"
            className="group block bg-card border border-border rounded-2xl p-6 hover:border-accent transition-colors"
          >
            <h3 className="font-display text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
              Hire me for a custom build &rarr;
            </h3>
            <p className="text-sm text-muted">
              Custom games, curriculum systems, and teacher training.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
