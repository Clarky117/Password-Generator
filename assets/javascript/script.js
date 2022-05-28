// This code is already here
// Assignment Code
let generateBtn = document.querySelector("#generate");


// copied this function code from below and brought it up here
function randomInteger(min, max) {
  if (!max) {
    max = min;
    min = 0;
  };
  let random = Math.random();
  return Math.floor(min * (1 - random) + random * max)
};
// got the above equation from youtubing/google

function fetchRandom(list) {
  return list[randomInteger(list.length)];
};




// i've written this code
// need to write generatePassword function
// have found on google parseInt turns a string/text input into a number value under the right parameters
// if you get it wrong it produces NaN
function generatePassword() {

  let userInputLength = prompt("Length of Password? Choose between 8 and 128!");
  let passwordLength = parseInt(userInputLength);

// isNaN method returns true if value is NaN data type, useful for getting rid of string inputs
  if (isNaN(passwordLength)) {
    alert("Try and actual number please :)");
    return;
  };

// have done 2 if statements instead of combining them to give accurate feedback to user
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Try between 8 and 128 please :)");
    return;
  };

// time to take user criteria and store them as true/false values
  let userLowerCase = confirm("Would you like lower case letters?"); 
  let userUpperCase = confirm("Would you like upper case letters?");
  let userNumbers = confirm("Would you like to include numbers?");
  let userSymbols = confirm("Would you like to include symbols?");

  let LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let Symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "`", "{", "|", "}", "~"];
  
// insert options selected into this empty array
  let optionsSelected = [];

// .push will allow me to insert data into an array
  if (userLowerCase) {
    optionsSelected.push(LowerCase);
  };

  if (userUpperCase) {
    optionsSelected.push(UpperCase);
  };

  if (userNumbers) {
    optionsSelected.push(Numbers);
  };

  if (userSymbols) {
    optionsSelected.push(Symbols);
  };

  if (optionsSelected.length === 0) {
    optionsSelected.push(LowerCase, UpperCase, Numbers, Symbols);
  };

// checking if works
// console.log(optionsSelected)

  let generatedPassword = "";

  for (let ii = 0; ii <passwordLength; ii++) {
    let randomList = fetchRandom(optionsSelected);
    let randomCharacter = fetchRandom(randomList);
    generatePassword += randomCharacter; 
  };

  return generatedPassword;

};

// This code is already here
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);