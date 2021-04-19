const nouns = [
  "company",
  "synergy",
  "content",
  "platform",
  "data",
  "machine learning",
  "b2b",
  "b2c",
  "web",
  "api",
];

const verbs = ["launch", "synergize", "improve", "disrupt", "build", "embrace"];
const adverbs = ["faster", "better", "cleaner"];
const adjectives = ["greatly", "agile", "sustainable", "modern", "enterprise"];
const conjunctions = ["with", "a", "the", "our"];

const types = ["question", "statement", "exclamation"];

const possessivePronouns = ["your", "their"];

//TODO sentence structures formulas

// helpers
function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomEntry(array) {
  return array[getRandomInt(0, array.length - 1)];
}

// "Launch faster with a modern content platform"
// "Accelerate your content"

export function getRandomHeadline() {
  return `${getRandomEntry(verbs)} ${getRandomEntry(conjunctions)} ${getRandomEntry(
    nouns
  )} ${getRandomEntry(adverbs)}`;
}
