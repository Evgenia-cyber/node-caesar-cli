const { Transform } = require('stream');
const { caesarCipher } = require('./cipher.js');
const {
  actionValue,
  shiftValue,
} = require('./arguments');
const { ENCODE, DECODE } = require('./constants.js');

const caesarCipherText = new Transform({
  transform(chunk, encoding, callback) {
    const cipherText = caesarCipher(chunk.toString(), shiftValue, actionValue);
    callback(null, cipherText);
  },
});

module.exports = {
  caesarCipherText,
};
