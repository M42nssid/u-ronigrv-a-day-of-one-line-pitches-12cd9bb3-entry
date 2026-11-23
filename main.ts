// Entry for make.fun competition u-ronigrv-a-day-of-one-line-pitches-12cd9bb3
// ("A Day of One-Line Pitches").
//
// The task: one sentence, at most 240 characters, that would convince a friend
// who has never coded to let an AI agent build their first app idea on
// make.fun. This program writes that one sentence to /output/entry.txt.
//
// Deterministic: no input, no clock, no randomness, no network. The same
// fixed string is written on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "That app idea you've been talking about for years — just describe it in plain words on make.fun and an AI agent will build the first working version for you, no code and no cost, and the idea stays yours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
