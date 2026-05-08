export const metadata = {
  title: "Work with me",
  description: "Custom English-learning game and tool development for tutoring centers and language schools.",
};

export default function WorkWithMePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">Work with me</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
          Custom builds for schools and centers.
        </h1>
        <p className="text-lg text-muted leading-relaxed">
          I&apos;m a teacher who codes. If your curriculum keeps tripping over the same gap, a
          focused tool or game built around your students will outperform anything off-the-shelf.
        </p>
      </header>

      <section className="space-y-8">
        <Block
          title="Custom game commissions"
          body="Browser-playable games built around your specific vocabulary lists, grammar targets, or reading texts. Hosted free on Vercel. Typical turnaround: 2–4 weeks."
        />
        <Block
          title="Curriculum systems"
          body="Multi-week unit plans with handouts, assessments, and conversation prompts — built around your students' level and goals."
        />
        <Block
          title="Teacher training"
          body="Workshops on teaching grammar in context, four-tier comprehension design, and using games as pedagogy rather than reward."
        />
      </section>

      <section className="mt-16 pt-12 border-t border-border">
        <h2 className="font-display text-2xl font-semibold mb-4">Get in touch</h2>
        <p className="text-muted leading-relaxed mb-2">
          Email me with a short brief — what your students struggle with, what you&apos;ve already
          tried, and your timeline.
        </p>
        <a
          href="mailto:hello@teachbeyondtextbook.com"
          className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors mt-4"
        >
          hello@teachbeyondtextbook.com
        </a>
      </section>
    </div>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <h2 className="font-display text-xl font-semibold mb-2">{title}</h2>
      <p className="text-muted leading-relaxed">{body}</p>
    </div>
  );
}
