export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  topics: string[];
  publishedAt: string;
  pdfUrl: string;
  pinDescription: string;
};

export const posts: PostMeta[] = [
  {
    slug: "inspiration-from-an-ordinary-teacher",
    title: "Inspiration from an Ordinary Teacher",
    description:
      "An intermediate-level handout on a young student meeting her new English teacher. 12 vocabulary words, 4 grammar patterns, two-tier reading text, and full practice exercises with answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "narrative"],
    publishedAt: "2026-05-05",
    pdfUrl: "/handouts/inspiration-from-an-ordinary-teacher.pdf",
    pinDescription:
      "Free intermediate ESL handout — 12 vocabulary words, 4 grammar patterns (as + past continuous, From that day on, adjective + yet + adjective, What if), reading comprehension. Original text, answer key included. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "moon-and-mars-project",
    title: "The Moon and Mars Project",
    description:
      "An intermediate ESL handout built around a research pharmacist's proposal struggle, using the moon-and-Mars metaphor to teach 12 vocabulary words, 4 grammar patterns, and four-tier comprehension.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "career"],
    publishedAt: "2026-05-02",
    pdfUrl: "/handouts/moon-and-mars-project.pdf",
    pinDescription:
      "Intermediate ESL handout: 12 vocab words, 4 grammar patterns, comprehension and discussion built on the Moon-vs-Mars goal-setting metaphor. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "train-your-mind-to-stay-calm",
    title: "Train Your Mind to Stay Calm in Any Situation",
    description:
      "An intermediate ESL handout built on a heartfelt story of a novice teacher's unconditional support. Includes 12 vocabulary words, 4 grammar patterns, practice exercises, and a full answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "narrative"],
    publishedAt: "2026-04-26",
    pdfUrl: "/handouts/train-your-mind-to-stay-calm.pdf",
    pinDescription:
      "Free intermediate ESL handout: 'Train Your Mind to Stay Calm' story with 12 vocab words, 4 grammar patterns, practice exercises & answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "stage-performer-scriptwriter",
    title: "From a Stage Performer to a Scriptwriter",
    description:
      "An intermediate ESL handout following a sixth grader who swaps the stage for the editing room — with 12 vocabulary words, 4 grammar patterns, and a full answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "courage"],
    publishedAt: "2026-04-21",
    pdfUrl: "/handouts/stage-performer-scriptwriter.pdf",
    pinDescription:
      "Free intermediate ESL handout: 'From a Stage Performer to a Scriptwriter' — 12 vocab words, 4 grammar patterns, practice exercises & answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "a-new-challenge",
    title: "A New Challenge, A Familiar Guide",
    description:
      "An intermediate ESL handout built around a research pharmacist's reflective story — featuring 12 vocabulary items, 4 grammar patterns, multiple-choice and sentence-transformation practice, plus comprehension and conversation questions.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "growth"],
    publishedAt: "2026-04-21",
    pdfUrl: "/handouts/a-new-challenge.pdf",
    pinDescription:
      "Intermediate ESL handout: A New Challenge, A Familiar Guide. 12 vocab words, 4 grammar patterns, practice exercises and discussion prompts. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "cherish-charity-market",
    title: "Cherish and the Charity Market",
    description:
      "A reflective student narrative about gratitude, perseverance, and a school charity market. Pairs the story with 12 vocabulary words, 4 grammar patterns, and full practice exercises.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "narrative"],
    publishedAt: "2026-04-07",
    pdfUrl: "/handouts/cherish-charity-market.pdf",
    pinDescription:
      "Cherish and the Charity Market: an intermediate ESL reading on gratitude and perseverance with 12 vocab words, 4 grammar patterns, and practice. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "pharmacist-to-coder",
    title: "From Pharmacist to Coder",
    description:
      "An intermediate ESL handout built around a personal essay about a pharmacist who learns to code, with 12 vocabulary words, 4 grammar patterns, and full practice exercises.",
    level: "Intermediate",
    topics: ["career", "change", "growth"],
    publishedAt: "2026-03-31",
    pdfUrl: "/handouts/pharmacist-to-coder.pdf",
    pinDescription:
      "From Pharmacist to Coder — intermediate ESL handout with vocabulary, grammar patterns, and an answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "speaking-up-revised",
    title: "Speaking Up (Revised)",
    description:
      "An intermediate ESL handout based on a student's revised story about finding the courage to talk to a strict teacher. Includes 12 vocabulary words, 4 grammar patterns, practice sets, and answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "courage"],
    publishedAt: "2026-03-31",
    pdfUrl: "/handouts/speaking-up-revised.pdf",
    pinDescription:
      "Speaking Up: an intermediate ESL handout with 12 vocabulary words, 4 grammar patterns, and full practice + answer key for classroom use. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "graduation-trip",
    title: "A Trip That Changed My Mind: My Graduation Trip",
    description:
      "An intermediate ESL handout built around a heartfelt narrative about an elementary school graduation trip, with 12 vocabulary words, 5 grammar patterns, and full practice with answer key.",
    level: "Intermediate",
    topics: ["narrative", "travel", "school"],
    publishedAt: "2026-03-17",
    pdfUrl: "/handouts/graduation-trip.pdf",
    pinDescription:
      "Free intermediate ESL handout: graduation trip narrative with 12 vocab words, 5 grammar patterns, MC, fill-in-the-blanks, sentence transformation, and answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "speaking-up",
    title: "Speaking Up",
    description:
      "An intermediate ESL handout built around a reflective workplace story about finally voicing a request to a manager. Includes 12 vocabulary words, 4 grammar patterns, practice exercises, comprehension and conversation questions, and a full answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "courage"],
    publishedAt: "2026-03-16",
    pdfUrl: "/handouts/speaking-up.pdf",
    pinDescription:
      "Speaking Up — intermediate ESL handout: workplace narrative, 12 vocabulary words, 4 grammar patterns, practice + comprehension + conversation questions with answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "learning-to-stay-on-your-path",
    title: "Learning to Stay on Your Path",
    description:
      "An intermediate ESL handout on staying focused when comparison and small distractions pull you sideways. Includes 12 vocabulary words, 4 grammar patterns, practice exercises, and discussion questions.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "discipline"],
    publishedAt: "2026-03-10",
    pdfUrl: "/handouts/learning-to-stay-on-your-path.pdf",
    pinDescription:
      "Free intermediate ESL reading handout: Learning to Stay on Your Path. Vocabulary, grammar, comprehension and discussion questions on focus and discipline. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "go-connection",
    title: "A Game of Connection: A Connection Between Go and Friendships",
    description:
      "A nostalgic kindergarten memoir about discovering Go and meeting a lifelong friend, paired with 12 vocabulary words, 4 grammar patterns, and full practice exercises with answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "friendship"],
    publishedAt: "2026-03-10",
    pdfUrl: "/handouts/go-connection.pdf",
    pinDescription:
      "Free ESL worksheet: 'A Game of Connection' — kindergarten memoir with 12 vocab words, 4 grammar patterns, and a full answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "thailand-trip",
    title: "A Trip That Changed My Mind",
    description:
      "An intermediate ESL handout built around a personal travel narrative about Thailand: 15 vocabulary words, 5 grammar patterns, multi-tier comprehension, and conversation prompts.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "travel"],
    publishedAt: "2026-03-03",
    pdfUrl: "/handouts/thailand-trip.pdf",
    pinDescription:
      "Free intermediate ESL handout: A Trip That Changed My Mind. 15 travel vocabulary words, 5 grammar patterns, comprehension and conversation questions with answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "new-year-2026",
    title: "New Year of 2026",
    description:
      "An intermediate ESL handout built around a New Year's Eve story about firecrackers, hopes, and goal-setting. Includes 12 vocabulary words, 4 grammar patterns, practice exercises, and a full answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "narrative"],
    publishedAt: "2026-03-03",
    pdfUrl: "/handouts/new-year-2026.pdf",
    pinDescription:
      "Free intermediate ESL handout: New Year of 2026 story with 12 vocab words, 4 grammar patterns, practice exercises, and answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "a-game-of-connection",
    title: "A Game of Connection",
    description:
      "A reflective Chinese New Year story about rediscovering Chinese chess with grandpa — paired with 15 vocabulary words, 5 grammar patterns, practice drills, and a full answer key for ESL learners.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "family"],
    publishedAt: "2026-02-18",
    pdfUrl: "/handouts/a-game-of-connection.pdf",
    pinDescription:
      "Free ESL handout: A Game of Connection — Chinese New Year story about chess with grandpa. 15 vocab words, 5 grammar patterns, full answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
  {
    slug: "value-the-time",
    title: "Value the Time",
    description:
      "An intermediate ESL handout built around a heartfelt cafe conversation between two friends about study pressure, lost dreams, and rediscovering what truly matters. Includes 18 vocabulary words, 5 grammar patterns, and a full answer key.",
    level: "Intermediate",
    topics: ["vocabulary", "grammar", "mindfulness"],
    publishedAt: "2026-02-18",
    pdfUrl: "/handouts/value-the-time.pdf",
    pinDescription:
      "Free intermediate ESL handout: Value the Time. 18 vocab words, 5 grammar patterns (used to, although, surrounded by, worthy of, once), practice and answer key. #ESL #EnglishTeacher #VocabularyWorksheet",
  },
];

export const postLoaders: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  "inspiration-from-an-ordinary-teacher": () =>
    import("./inspiration-from-an-ordinary-teacher.mdx"),
  "moon-and-mars-project": () => import("./moon-and-mars-project.mdx"),
  "train-your-mind-to-stay-calm": () => import("./train-your-mind-to-stay-calm.mdx"),
  "stage-performer-scriptwriter": () => import("./stage-performer-scriptwriter.mdx"),
  "a-new-challenge": () => import("./a-new-challenge.mdx"),
  "cherish-charity-market": () => import("./cherish-charity-market.mdx"),
  "pharmacist-to-coder": () => import("./pharmacist-to-coder.mdx"),
  "speaking-up-revised": () => import("./speaking-up-revised.mdx"),
  "graduation-trip": () => import("./graduation-trip.mdx"),
  "speaking-up": () => import("./speaking-up.mdx"),
  "learning-to-stay-on-your-path": () => import("./learning-to-stay-on-your-path.mdx"),
  "go-connection": () => import("./go-connection.mdx"),
  "thailand-trip": () => import("./thailand-trip.mdx"),
  "new-year-2026": () => import("./new-year-2026.mdx"),
  "a-game-of-connection": () => import("./a-game-of-connection.mdx"),
  "value-the-time": () => import("./value-the-time.mdx"),
};

export function getPostBySlug(slug: string): PostMeta | undefined {
  return posts.find((p) => p.slug === slug);
}
