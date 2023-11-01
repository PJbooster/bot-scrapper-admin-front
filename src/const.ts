import { ValueType } from "./types";

export const leagues: ValueType<string>[] = [
  {
    label: "Angielska",
    value: "PR",
  },
  {
    label: "Niemiecka",
    value: "BL",
  },
  {
    label: "Hiszpanska",
    value: "PD",
  },
];

export enum Bet {
  WIN = 1,
  DRAW = 2,
  LOSE = 3,
  G05PLUS = 4,
  G15PLUS = 5,
  G25PLUS = 6,
  G35PLUS = 7,
  G05MINUS = 8,
  G15MINUS = 9,
  G25MINUS = 10,
  G35MINUS = 11,
  SCORE_GOAL = 12,
  BTTS = 13,
}

export const bets: ValueType<Bet>[] = [
  { label: "Wygrana", value: Bet.WIN },
  { label: "Remis", value: Bet.DRAW },
  { label: "Przegrana", value: Bet.LOSE },
  { label: "Pow. 0.5 Bramki (0.5+)", value: Bet.G05PLUS },
  { label: "Pow. 1.5 Bramki (1.5+)", value: Bet.G15PLUS },
  { label: "Pow. 2.5 Bramki (2.5+)", value: Bet.G25PLUS },
  { label: "Pow. 3.5 Bramki (3.5+)", value: Bet.G35PLUS },
  { label: "Pon. 0.5 Bramki (-0.5)", value: Bet.G05MINUS },
  { label: "Pon. 1.5 Bramki (-1.5)", value: Bet.G15MINUS },
  { label: "Pon. 2.5 Bramki (-2.5)", value: Bet.G25MINUS },
  { label: "Pon. 3.5 Bramki (-3.5)", value: Bet.G35MINUS },
  { label: "Strzeli bramke", value: Bet.SCORE_GOAL },
  { label: "Obie druzyny strzela gola", value: Bet.BTTS },
];
