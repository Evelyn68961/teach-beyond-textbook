type Word = {
  word: string;
  pos: string;
  definition: string;
  example: string;
};

export default function VocabTable({ words }: { words: Word[] }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-border bg-card">
      <table className="w-full text-sm">
        <thead className="bg-accent-soft text-foreground">
          <tr>
            <th className="text-left px-4 py-3 font-semibold w-12">#</th>
            <th className="text-left px-4 py-3 font-semibold">Word</th>
            <th className="text-left px-4 py-3 font-semibold">Definition</th>
            <th className="text-left px-4 py-3 font-semibold">Example from text</th>
          </tr>
        </thead>
        <tbody>
          {words.map((w, i) => (
            <tr key={w.word} className="border-t border-border align-top">
              <td className="px-4 py-3 text-muted">{i + 1}</td>
              <td className="px-4 py-3">
                <span className="font-semibold">{w.word}</span>{" "}
                <span className="text-muted text-xs">({w.pos})</span>
              </td>
              <td className="px-4 py-3 text-foreground">{w.definition}</td>
              <td className="px-4 py-3 italic text-muted">&ldquo;{w.example}&rdquo;</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
