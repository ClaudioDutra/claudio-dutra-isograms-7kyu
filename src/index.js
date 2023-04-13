function isIsogram(word) {
  const letters = word.toLowerCase().split("");

  return letters.every((letter, index) => letters.indexOf(letter) === index);
}

module.exports = isIsogram;
