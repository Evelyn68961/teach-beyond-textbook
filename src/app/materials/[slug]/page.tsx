import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, postLoaders, getPostBySlug } from "@/content/materials/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return { title: post.title, description: post.description };
}

export default async function MaterialPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const loader = postLoaders[slug];
  if (!post || !loader) notFound();

  const mod = await loader();
  const Content = mod.default;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/materials" className="text-sm text-muted hover:text-accent transition-colors">
        ← All materials
      </Link>

      <header className="mt-6 mb-10 pb-8 border-b border-border">
        <div className="flex flex-wrap items-center gap-3 mb-3 text-xs">
          <span className="bg-accent-soft text-accent px-2.5 py-1 rounded-full font-medium">
            {post.level}
          </span>
          {post.topics.map((t) => (
            <span key={t} className="text-muted">#{t}</span>
          ))}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-4">
          {post.title}
        </h1>
        <p className="text-lg text-muted leading-relaxed">{post.description}</p>
        <div className="flex flex-wrap items-center gap-4 mt-6">
          <a
            href={post.pdfUrl}
            download
            className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download printable PDF
          </a>
          <span className="text-xs text-muted">
            Published {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>

      <div className="prose-handout">
        <Content />
      </div>
    </article>
  );
}
