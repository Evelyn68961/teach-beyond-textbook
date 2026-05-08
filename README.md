# Teach Beyond Textbook

Original English teaching materials by **Evelyn Chang** — a 10-year English tutor and research pharmacist who couldn't find handouts that taught grammar in context, vocabulary that stuck, and reading at four levels of depth. So she wrote her own. Then built games to go with them.

This repo is the website at [teachbeyondtextbook.com](https://teachbeyondtextbook.com) (domain coming soon).

## What's inside

| Path | What |
|---|---|
| [`src/app/`](src/app/) | Next.js App Router pages — homepage, `/games`, `/materials`, `/shop`, `/work-with-me`, `/about` |
| [`src/content/materials/`](src/content/materials/) | 16 MDX handouts + a `posts.ts` registry |
| [`src/components/handout/`](src/components/handout/) | Reusable MDX components: `<VocabTable>`, `<GrammarPattern>`, `<Practice>`, `<AnswerKey>`, `<Callout>` |
| [`public/handouts/`](public/handouts/) | Printable PDFs served at `/handouts/<slug>.pdf` |

Companion games site (separate repo): [english-learning-games](https://english-learning-games-seven.vercel.app/)

## Local development

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Adding a new handout

1. Drop the source PDF in `content_ref/` (gitignored — local only)
2. Convert it to MDX in `src/content/materials/<slug>.mdx` matching the existing template
3. Copy the PDF to `public/handouts/<slug>.pdf`
4. Append an entry to `posts` and `postLoaders` in [`src/content/materials/posts.ts`](src/content/materials/posts.ts)
5. `npx next build` to verify

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [MDX](https://mdxjs.com/) via `@next/mdx`
- TypeScript

## Deploy

Hosted on [Vercel](https://vercel.com/). Push to `main` triggers a deploy.

## License

The Next.js application code in this repo is open for the teaching community to learn from and adapt. **The handout content (MDX text, PDFs, vocabulary tables, grammar patterns, practice exercises, and any original story texts) is © Evelyn Chang and is not licensed for redistribution.** If you'd like to use the materials in your classroom, browse them free at the live site.
