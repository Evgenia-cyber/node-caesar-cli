const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_LENGTH = 26;

const ENCODE = 'encode';
const DECODE = 'decode';

const ACTION = ['-a', '--action']; //required argument
const SHIFT = ['-s', '--shift']; //required argument
const INPUT_FILE = ['-i', '--input'];
const OUTPUT_FILE = ['-o', '--output'];

module.exports = {
  ALPHABET,
  ALPHABET_LENGTH,
  ENCODE,
  DECODE,
  ACTION,
  SHIFT,
  INPUT_FILE,
  OUTPUT_FILE,
};
