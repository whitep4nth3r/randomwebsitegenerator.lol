function getRandomInt(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export function buildUniqueIntArray(returnLength, dataLength) {
  const randomInts = [];

  while (randomInts.length < returnLength) {
    const newInt = getRandomInt(0, dataLength - 1);
    if (!randomInts.includes(newInt)) {
      randomInts.push(newInt);
    }
  }

  return randomInts;
}
