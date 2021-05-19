const fs = require('fs');
const { pipeline } = require('stream');
const { errorHandler } = require('./arguments');
const { caesarCipherText } = require('./transformStream');

const createStreams = (inputFile, outputFile) => {
  const readTextFrom = inputFile
    ? fs.createReadStream(inputFile)
    : process.stdin;
  const writeTextTo = outputFile
    ? fs.createWriteStream(outputFile, { flags: 'a' })
    : process.stdout;

  pipeline(readTextFrom, caesarCipherText, writeTextTo, (error) => {
    if (error) {
      errorHandler(error);
    }
  });
};

module.exports = { createStreams };
