import type { ReactNode } from "react";

export default function Callout({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <aside className="my-6 rounded-xl border-l-4 border-accent bg-accent-soft px-5 py-4 text-sm">
      {label && (
        <p className="text-xs uppercase tracking-widest font-semibold text-accent mb-1">{label}</p>
      )}
      <div className="text-foreground leading-relaxed">{children}</div>
    </aside>
  );
}
