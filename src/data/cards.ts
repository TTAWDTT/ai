export type Gender = "male" | "female" | "other";
export type Rarity = "normal" | "rare" | "legendary";

export type FateCard = {
  id: string;
  title: string;
  subtitle: string;
  allowedGender: "all" | Gender[];
  rarity: Rarity;
  palette: "rose" | "blue" | "amber" | "mint" | "violet";
  symbol: string;
  description: string;
  verdicts: string[];
};
