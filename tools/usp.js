import { buildUniqueIntArray } from "./utils";

const verbs = [
  "assert",
  "architect",
  "bootstrap",
  "build",
  "communicate",
  "compile",
  "conglomerate",
  "design",
  "destroy",
  "disrupt",
  "double-click",
  "embrace",
  "energize",
  "facilitate",
  "follow",
  "hack",
  "identify",
  "improve",
  "integrate",
  "invent",
  "iterate",
  "launch",
  "lead",
  "leverage",
  "maintain",
  "optimize",
  "organize",
  "refactor",
  "render",
  "proxy",
  "scale",
  "stream",
  "streamline",
  "subscribe",
  "synergize",
];

const adverbs = [
  "badly",
  "better",
  "bigger",
  "brilliantly",
  "cheaper",
  "configurationlessly",
  "efficiently",
  "effortlessly",
  "faster",
  "harder",
  "headlessly",
  "on-the-fly",
  "outrageously",
  "quicker",
  "smarter",
];

export function getRandomUsps(number) {
  const verbsIntArray = buildUniqueIntArray(number, verbs.length);
  const adverbsIntArray = buildUniqueIntArray(number, adverbs.length);

  let uspsArray = [];

  for (let i = 0; i < number; i++) {
    uspsArray.push(`${verbs[verbsIntArray[i]]} ${adverbs[adverbsIntArray[i]]}`);
  }

  return uspsArray;
}
