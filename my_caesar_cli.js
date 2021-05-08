const path = require('path');
const fs = require('fs');
const { pipeline } = require('stream');
const {
  argumentsValidate,
  inputFileValue,
  outputFileValue,
  errorHandler,
} = require('./modules/arguments');
const { caesarCipherText } = require('./modules/transformStream');

const inputFile = inputFileValue
  ? path.resolve(__dirname, inputFileValue)
  : null;
const outputFile = outputFileValue
  ? path.resolve(__dirname, outputFileValue)
  : null;

// console.log(inputFile);
// console.log(outputFile);
// console.log(inputFileValue);
// console.log(outputFileValue);

argumentsValidate(inputFile, outputFile);

readTextFrom = inputFile ? fs.createReadStream(inputFile) : process.stdin;
writeTextTo = outputFile
  ? fs.createWriteStream(outputFile, { flags: 'a' })
  : process.stdout;

pipeline(readTextFrom, caesarCipherText, writeTextTo, (error) => {
  if (error) {
    errorHandler(error);
  }
});

/********************************************/
//1 checks: errors
// node my_caesar_cli --action en1code --shift -7 --input plain.txt --output encoded.txt
// node my_caesar_cli --shift -7 --input plain.txt --output encoded.txt
// node my_caesar_cli --input plain.txt --output encoded.txt
// node my_caesar_cli --shift -7.2 --input plain.txt --output encoded.txt
// node my_caesar_cli --action --shift 7 --input --output encoded.txt

/********************************************/
//2 checks: results must be
// node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
// This is secret. Message about "_" symbol! //from
// Aopz pz zljyla. Tlzzhnl hivba "_" zftivs! //to

// node my_caesar_cli --action encode --shift -100 --input plain.txt --output encoded.txt
// This is secret. Message about "_" symbol! //from
// Xlmw mw wigvix. Qiwweki efsyx "_" wcqfsp! //to

// node my_caesar_cli --action encode --shift 26 --input plain.txt --output encoded.txt
// This is secret. Message about "_" symbol! //from
// This is secret. Message about "_" symbol! //to

// node my_caesar_cli --action encode --shift 0 --input plain.txt --output encoded.txt
// This is secret. Message about "_" symbol! //from
// This is secret. Message about "_" symbol! //to

//node my_caesar_cli --action decode --shift 7 --output encoded.txt
// Aopz pz zljyla. Tlzzhnl hivba "_" zftivs! //from
// This is secret. Message about "_" symbol! //to

/********************************************/
//3 checks: if passed/not passed arguments for input/output file
//node my_caesar_cli --action encode --shift 7 --output encoded.txt --input ./plain.txt // input from plain.txt, output in encoded.txt
//node my_caesar_cli --action encode --shift 7 --output encoded.txt // input from console, output in encoded.txt
//node my_caesar_cli --action encode --shift 7 --input ./plain.txt // input from plain.txt, output in console
// node my_caesar_cli --action encode --shift 7 // input from console, output in console