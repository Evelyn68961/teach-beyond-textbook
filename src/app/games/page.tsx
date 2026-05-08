import Link from "next/link";

export const metadata = {
  title: "Games",
  description: "Four free browser games for English learners — Word Garden, Word Runner, Letter Mole, and Grammar Games.",
};

const games = [
  {
    name: "Word Garden Defense",
    blurb: "Plants vs. Zombies–style vocabulary game. Defend your garden by answering English questions.",
    tags: ["Vocabulary", "Ages 6–12"],
    new: false,
  },
  {
    name: "Word Runner",
    blurb: "Roblox-runner style word gate game. Run forward, pick the right word, collect coins.",
    tags: ["Vocabulary", "Spelling"],
    new: true,
  },
  {
    name: "Letter Mole",
    blurb: "Whack-a-mole, but with letters. Hit the mole holding the letter that matches.",
    tags: ["Phonics", "Alphabet"],
    new: false,
  },
  {
    name: "Grammar Games",
    blurb: "Practice present tense, adverbs, and more in short, focused mini-games.",
    tags: ["Grammar"],
    new: false,
  },
];

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">Games</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
          Free games for English learners.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Built for younger learners — playable in any browser, no install needed. Use them as
          warmups, rewards, or homework. They&apos;re free for teachers to share with students.
        </p>
        <div className="mt-6">
          <a
            href="https://english-learning-games-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Open the games site →
          </a>
        </div>
      </header>

      <ul className="grid sm:grid-cols-2 gap-4">
        {games.map((g) => (
          <li
            key={g.name}
            className="bg-card border border-border rounded-2xl p-6"
          >
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-display text-xl font-semibold">{g.name}</h2>
              {g.new && (
                <span className="text-xs bg-accent text-white px-2 py-0.5 rounded-full font-medium">
                  NEW
                </span>
              )}
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{g.blurb}</p>
            <div className="flex flex-wrap gap-2 text-xs">
              {g.tags.map((t) => (
                <span key={t} className="bg-accent-soft text-accent px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <section className="mt-16 pt-12 border-t border-border">
        <h2 className="font-display text-2xl font-semibold mb-4">Want a custom game?</h2>
        <p className="text-muted leading-relaxed mb-6 max-w-2xl">
          I build interactive English games on commission for tutoring centers and language
          schools. If your curriculum has a recurring weak spot, a focused game can fix it.
        </p>
        <Link
          href="/work-with-me"
          className="inline-flex items-center gap-2 border border-border bg-card px-6 py-3 rounded-full text-sm font-medium hover:border-accent hover:text-accent transition-colors"
        >
          See commission options →
        </Link>
      </section>
    </div>
  );
}
