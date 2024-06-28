export default function caesarCipher(string, shiftFactor) {
  if (!shiftFactor || typeof shiftFactor !== "number" || shiftFactor < 0) {
    return;
  }

  const array = [...string];
  const encryptedArray = encryptArray(array, shiftFactor);
  const encryptedString = encryptedArray.join("");

  return encryptedString;
}

function encryptArray(array, shiftFactor) {
  const encryptedArray = array.map((letter) => {
    const defaultIndex = alphabet.indexOf(letter.toLowerCase());
    if (defaultIndex === -1) return letter;
    return shiftLetter(letter, defaultIndex, shiftFactor);
  });

  return encryptedArray;
}

function shiftLetter(letter, defaultIndex, shiftFactor) {
  const shiftedIndex = defaultIndex + shiftFactor;
  const purifiedIndex = purifyIndex(shiftedIndex);

  if (letter === letter.toUpperCase()) {
    return alphabet[purifiedIndex].toUpperCase();
  }

  return alphabet[purifiedIndex];
}

function purifyIndex(index) {
  return index % alphabet.length;
}

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
