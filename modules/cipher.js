const {
  ALPHABET,
  ALPHABET_LENGTH,
  DECODE,
} = require('./constants.js');

const caesarCipher = (text, shift, mode) => {
  if (mode === DECODE) {
    shift = -shift;
  }
  shift %= ALPHABET_LENGTH;
  return text
    .split('')
    .map((char) => {
      const charInLowerCase = char.toLowerCase();
      const index = ALPHABET.indexOf(charInLowerCase);
      if (index !== -1) {
        let shiftedIndex = index + shift;
        shiftedIndex %= ALPHABET_LENGTH;
        if (shiftedIndex < 0) {
          shiftedIndex += ALPHABET_LENGTH;
        }
        const cipherLetter = ALPHABET[shiftedIndex];
        return char === charInLowerCase
          ? cipherLetter
          : cipherLetter.toUpperCase();
      } else {
        return char;
      }
    })
    .join('')
    .concat('\n');
};

module.exports = {
  caesarCipher,
};
