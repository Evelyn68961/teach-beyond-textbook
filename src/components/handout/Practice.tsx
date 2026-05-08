import type { ReactNode } from "react";

export default function Practice({
  title,
  instructions,
  children,
}: {
  title: string;
  instructions: string;
  children: ReactNode;
}) {
  return (
    <section className="my-8 rounded-xl border border-border bg-card p-6">
      <h3 className="font-display text-xl font-semibold mb-1 text-accent">{title}</h3>
      <p className="text-sm italic text-muted mb-4">{instructions}</p>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </section>
  );
}
