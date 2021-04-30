import { buildUniqueIntArray } from "./utils";

const firstWords = ["buy", "download", "read", "try"];

const secondWords = ["docs", "more", "today"];

export function getRandomCtas(number) {
  const firstWordIntArray = buildUniqueIntArray(number, firstWords.length);
  const secondWordIntArray = buildUniqueIntArray(number, secondWords.length);

  let ctasArray = [];

  for (let i = 0; i < number; i++) {
    ctasArray.push(`${firstWords[firstWordIntArray[i]]} ${secondWords[secondWordIntArray[i]]}`);
  }

  return ctasArray;
}
