// This code is already here
// Assignment Code
let generateBtn = document.querySelector("#generate");



// i've written this code
// need to write generatePassword function
// have found on google parseInt turns a string/text input into a number value under the right parameters
// if you get it wrong it produces NaN
function generatePassword() {

  let userInputLength = prompt("Length of Password? Choose between 8 and 128!")
  let passwordLength = parseInt(userInputLength)

// isNaN method returns true if value is NaN data type, useful for getting rid of string inputs
  if (isNaN(passwordLength)) {
    alert("Try and actual number please :)")
  }
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




// i've written this code
// starting my code here, will move stuff as needed

// start with what i know, letters/numbers/special chars
// can i turn the below right into a function??

// let randomLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// let randomUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// let specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "`", "{", "|", "}", "~"];
// let randomNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];





// first attempt

function randomLowerCase() {
  let randomLowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return randomLowers[Math.floor(Math.random() * randomLowers.length)];
}

// if fails, still have my initial arrays to work with

let randomUpperCase = () => {
  let randomUppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  return randomUppers[Math.floor(Math.random() * randomUppers.length)];
};

let randomSpecialCase = () => {
  let randomSpecials = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "`", "{", "|", "}", "~"];
  return randomSpecials[Math.floor(Math.random() * randomSpecials.length)]; 
};

let randomNumberCase = () => {
  let randomNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
};

// i believe i can call on these arrow functions now to randomize a letter, number, or symbol, time will tell



