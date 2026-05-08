"use client";

import { useState, type ReactNode } from "react";

export default function AnswerKey({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <details
      className="my-8 rounded-xl border border-border bg-accent-soft overflow-hidden"
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
    >
      <summary className="cursor-pointer select-none px-6 py-4 font-display text-lg font-semibold text-accent flex items-center gap-2">
        <span className="inline-block transition-transform" style={{ transform: open ? "rotate(90deg)" : "none" }}>
          ▸
        </span>
        Answer Key
      </summary>
      <div className="px-6 pb-6 text-sm leading-relaxed space-y-3">{children}</div>
    </details>
  );
}
