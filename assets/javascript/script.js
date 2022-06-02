// This code is already here
// Assignment Code
let generateBtn = document.querySelector("#generate");



// need to write generatePassword function
// have found on google parseInt turns a string/text input into a number value under the right parameters
// if you get it wrong it produces NaN
function generatePassword() {

  let userInputLength = prompt("Length of Password? Choose between 8 and 128!");
  let passwordLength = parseInt(userInputLength);

// isNaN method returns true if value is NaN data type, useful for getting rid of string inputs
  if (isNaN(passwordLength)) {
    alert("Try an actual number please :)");
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

// these are the available arrays to pull from
  let LowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let UpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let Numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let Symbols = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", ']', "`", "{", "|", "}", "~"];
// after revising i realise i could have used .split to simplify these arrays
  
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

// the below if statement makes it fool proof if all cancels are selected, making the strongest password
  if (optionsSelected.length === 0) {
    optionsSelected.push(LowerCase, UpperCase, Numbers, Symbols);
  };

// checking if works
// console.log(optionsSelected)

// initialise the string
  let generatedPassword = "";

// 
  for (let ii = 0; ii <passwordLength; ii++) {
    let randomList = fetchRandom(optionsSelected);
    let randomCharacter = fetchRandom(randomList);
    generatedPassword += randomCharacter; 
  };

// was able to discover += joins the string

  return generatedPassword;

};

// these 2 functions are the parts of the code where i need to grasp a firmer understanding
// whilst i have gotten the password generator to work i realise how much revision i need

function randomInteger(min, max) {
  if (!max) {
    max = min; min = 0;
  };
  let random = Math.random();
  return Math.floor(min * (1 - random) + random * max)
};
// help understanding the above function i found helpful https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range

function fetchRandom(list) {
  return list[randomInteger(list.length)];
};



// This code is already here
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);