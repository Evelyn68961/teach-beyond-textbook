import Link from "next/link";
import { posts } from "@/content/materials/posts";

export const metadata = {
  title: "Materials",
  description: "Free English handouts: vocabulary, grammar, comprehension. New material every week.",
};

export default function MaterialsIndex() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <p className="text-sm uppercase tracking-widest text-accent font-medium mb-2">Materials</p>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold mb-4">
          Free English handouts, every week.
        </h1>
        <p className="text-lg text-muted max-w-2xl leading-relaxed">
          Original texts with vocabulary, grammar in context, four-tier comprehension, and
          conversation prompts. Read on the web or print the PDF.
        </p>
      </header>

      <ul className="space-y-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/materials/${post.slug}`}
              className="group block bg-card border border-border rounded-2xl p-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
                <span className="bg-accent-soft text-accent px-2.5 py-1 rounded-full font-medium">
                  {post.level}
                </span>
                {post.topics.map((t) => (
                  <span key={t} className="text-muted">#{t}</span>
                ))}
                <span className="text-muted ml-auto">{formatDate(post.publishedAt)}</span>
              </div>
              <h2 className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                {post.title}
              </h2>
              <p className="text-muted leading-relaxed">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
