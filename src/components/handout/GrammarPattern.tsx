type Props = {
  number: number;
  name: string;
  form: string;
  use: string;
  fromText: string;
  examples: string[];
};

export default function GrammarPattern({ number, name, form, use, fromText, examples }: Props) {
  return (
    <div className="my-6 rounded-xl border border-border bg-card p-6">
      <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-2">
        Pattern {number}
      </p>
      <h4 className="font-display text-xl font-semibold mb-4">{name}</h4>
      <dl className="space-y-3 text-sm">
        <div>
          <dt className="font-semibold text-foreground">Form</dt>
          <dd className="text-muted">{form}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">Use</dt>
          <dd className="text-muted">{use}</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground">From the text</dt>
          <dd className="italic text-muted">&ldquo;{fromText}&rdquo;</dd>
        </div>
        <div>
          <dt className="font-semibold text-foreground mb-1">More examples</dt>
          <dd>
            <ul className="list-disc list-inside space-y-1 text-muted">
              {examples.map((ex) => (
                <li key={ex}>{ex}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>
    </div>
  );
}
