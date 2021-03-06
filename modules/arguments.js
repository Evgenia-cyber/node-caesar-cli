const fs = require('fs');
const { createObjectFromArray } = require('./utils.js');
const {
  ENCODE,
  DECODE,
  ACTION,
  SHIFT,
  INPUT_FILE,
  OUTPUT_FILE,
} = require('./constants.js');

const args = process.argv.slice(2);
const argsObj = createObjectFromArray(args);

const getActionValue = () => argsObj[ACTION[0]] || argsObj[ACTION[1]];
const getShiftValue = () => argsObj[SHIFT[0]] || argsObj[SHIFT[1]];
const getInputFileValue = () =>
  argsObj[INPUT_FILE[0]] || argsObj[INPUT_FILE[1]];
const getOutputFileValue = () =>
  argsObj[OUTPUT_FILE[0]] || argsObj[OUTPUT_FILE[1]];

const actionValue = getActionValue();
const shiftValueInString = getShiftValue();
const shiftValue = Number(shiftValueInString);
const inputFileValue = getInputFileValue();
const outputFileValue = getOutputFileValue();

const errorHandler = (text) => {
  process.stderr.write(text);
  // process.exitCode = 1;
  process.exit(1);
};

const argumentsValidate = (inputFile, outputFile) => {
  if (!actionValue) {
    errorHandler('Not specified required argument: --action\n');
  }
  if (!(actionValue === DECODE || actionValue === ENCODE)) {
    errorHandler(
      'Required argument: --action must be equal encode or decode\n',
    );
  }
  if (shiftValueInString === undefined) {
    errorHandler('Not specified required argument: --shift\n');
  }
  if (!Number.isInteger(shiftValue)) {
    errorHandler(
      'Required argument: --shift must be a positive or negative integer\n',
    );
  }
  if (inputFileValue) {
    fs.access(inputFile, fs.F_OK, (err) => {
      if (err) {
        errorHandler('Input file does not exist or not accessible\n');
        return;
      }
    });
  }
  if (outputFileValue) {
    fs.access(outputFile, fs.F_OK, (err) => {
      if (err) {
        errorHandler('Output file does not exist or not accessible\n');
        return;
      }
    });
  }
};

module.exports = {
  argumentsValidate,
  actionValue,
  shiftValue,
  inputFileValue,
  outputFileValue,
  errorHandler,
};
