import type { MDXComponents } from "mdx/types";
import VocabTable from "@/components/handout/VocabTable";
import GrammarPattern from "@/components/handout/GrammarPattern";
import Practice from "@/components/handout/Practice";
import AnswerKey from "@/components/handout/AnswerKey";
import Callout from "@/components/handout/Callout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    VocabTable,
    GrammarPattern,
    Practice,
    AnswerKey,
    Callout,
  };
}
