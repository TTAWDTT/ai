import { backgrounds, type FateBackground } from "../data/backgrounds";
import { type Gender } from "../data/cards";
import { type LoveLetter } from "../data/letters";
import { songs, type Song } from "../data/songs";
import { fateCards, loveLetters, type FateCardConfig, type LoveLetterConfig } from "../config/fateContent";
import { createSeededRandom, pickSeeded } from "./seededRandom";

export type DrawInput = {
  name: string;
  gender: Gender;
  birthday: string;
};

export type DrawResult = {
  card: FateCardConfig;
  verdict: string;
  song: Song;
  background: FateBackground;
  letter: LoveLetter;
};

function allowedForGender(card: FateCardConfig, gender: Gender): boolean {
  return card.allowedGender === "all" || card.allowedGender.includes(gender);
}

function weightedCards(gender: Gender): FateCardConfig[] {
  return fateCards
    .filter((card) => allowedForGender(card, gender))
    .flatMap((card) => {
      const repeats = Math.max(1, card.weight);
      return Array.from({ length: repeats }, () => card);
    });
}

export function drawFate(input: DrawInput): DrawResult {
  const todayCode = "520";
  const baseSeed = `${input.name}|${input.birthday}|${input.gender}|${todayCode}`;
  const pool = weightedCards(input.gender);
  const card = pickSeeded(pool, `${baseSeed}|card`);
  const verdict = pickSeeded(card.verdicts, `${baseSeed}|${card.id}|verdict`);
  const song = pickSeeded(songs, `${baseSeed}|song`);
  const background = pickSeeded(backgrounds, `${baseSeed}|background`);
  const preferredLetters = loveLetters.filter((letter) =>
    letter.preferredCards?.includes(card.id),
  );
  const letter = pickSeeded(
    preferredLetters.length > 0 ? preferredLetters : loveLetters,
    `${baseSeed}|${card.id}|letter`,
  );

  return {
    card,
    verdict,
    song,
    background,
    letter,
  };
}
