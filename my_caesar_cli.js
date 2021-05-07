const path = require('path');
const {
  argumentsValidate,
    inputFileValue,
    outputFileValue,
} = require('./modules/arguments');

const inputFile = inputFileValue
  ? path.resolve(__dirname, inputFileValue)
  : undefined;
const outputFile = outputFileValue
  ? path.resolve(__dirname, outputFileValue)
  : undefined;

// console.log(inputFile);
// console.log(outputFile);

argumentsValidate(inputFile, outputFile);

//checks
//node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
//node my_caesar_cli --action dec1ode --shift -7 --input ./plain.txt --output encoded.txt
// node my_caesar_cli --shift -7 --input plain.txt --output encoded.txt
// node my_caesar_cli --input plain.txt --output encoded.txt
// node my_caesar_cli --shift -7.2 --input plain.txt --output encoded.txt
