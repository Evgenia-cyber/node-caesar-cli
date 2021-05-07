const {
  ALPHABET,
  ALPHABET_LENGTH,
  // ENCODE,
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
        //   console.log(cipherLetter, index, shiftedIndex);
        return char === charInLowerCase
          ? cipherLetter
          : cipherLetter.toUpperCase();
      } else {
        //   console.log(char);
        return char;
      }
    })
    .join('');
};

module.exports = {
  caesarCipher,
};

// console.log(caesarCipher('Ab/cyf', 2, ENCODE)); //2
// console.log(caesarCipher('Cd/eah', 2, DECODE));
// console.log(
//   caesarCipher('This is secret. Message about "_" symbol!', 7, ENCODE),
// );
// console.log(
//   caesarCipher('Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!', 7, DECODE),
// );
// console.log(caesarCipher('Ab/c', 0, ENCODE)); //0
// console.log(caesarCipher('Ab/c', 26, ENCODE)); //0
// console.log(caesarCipher('Ab/c', 52, ENCODE)); //0
// console.log(caesarCipher('Ab/c', 53, ENCODE)); //1
// console.log(caesarCipher('Ab/c', 53, DECODE)); //-1
// console.log(caesarCipher('Ab/c', 2, DECODE)); //-2
// console.log(caesarCipher('Ab/c', 0, DECODE)); //-0??????
// console.log(caesarCipher('Ab/c', 0, ENCODE)); //-0??????
