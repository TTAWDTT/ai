export type LetterMood = "gentle" | "funny" | "sad" | "brave" | "absurd";

export type LoveLetter = {
  id: string;
  title: string;
  body: string[];
  signature: string;
  mood: LetterMood;
  preferredCards?: string[];
};
