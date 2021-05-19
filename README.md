# node-caesar-cli

***

### 1. Install this application:
  1.1. Clone or download application from this repository
***

### 2. How to use:
  2.1. Go to the application folder

  2.2. Run the command line
  
  2.3. Now you can enter into the command line: `node my_caesar_cli [options]`, where you can use 4 options (short alias and full name):
  * `-s`, `--shift`: a shift
              
  * `-i`, `--input`: an input file name
              
  * `-o`, `--output`: an output file name
              
  *  `-a`, `--action`: an action encode/decode
  ***

  `action` and `shift` are required options
  
  `action` must take on the values: `encode` - to encrypt text or `decode` - to decrypt text
  
  `shift` must be positive or negative integer
  
   Тhe files, passed in the options `input` or `output`, must be created in advance
   
   if you don't pass option `input`, the console will be used for text input
   
   If you don't pass option `output`, the console will be used for text output
   ***
   
  ### Usage examples:
  
  1. `-a` or `--action` is encode:
  
  `node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"`
  
  input.txt: `This is secret. Message about "_" symbol!`

  output.txt: `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

  2. `-a` or `--action` is decode:

  `node my_caesar_cli --action decode --shift 7 --input encoded.txt --output plain.txt`
  
   encoded.txt: `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`

   plain.txt: `This is secret. Message about "_" symbol!`

  3. Negative shift handling
  
  `node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt`
  
  plain.txt: `This is secret. Message about "_" symbol!`

  encoded.txt: `Sghr hr rdbqds. Ldrrzfd zants "_" rxlank!`


  © 2021 GitHub, Inc.
