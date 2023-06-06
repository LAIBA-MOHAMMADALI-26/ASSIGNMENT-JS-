//.......q1.........
// Function to check if the input is a number
function isNumber(char) {
    return !isNaN(char);
  }
  
  // Function to check if the input is an uppercase letter
  function isUppercaseLetter(char) {
    var code = char.charCodeAt(0);
    return code >= 65 && code <= 90;
  }
  
  // Function to check if the input is a lowercase letter
  function isLowercaseLetter(char) {
    var code = char.charCodeAt(0);
    return code >= 97 && code <= 122;
  }
  
  // Prompt the user to enter a character
  var input = prompt("Enter a character:");
  
  // Check the type of the input character
  if (isNumber(input)) {
    console.log("The input is a number.");
  } else if (isUppercaseLetter(input)) {
    console.log("The input is an uppercase letter.");
  } else if (isLowercaseLetter(input)) {
    console.log("The input is a lowercase letter.");
  } else {
    console.log("The input is neither a number nor a letter.");
  }
//.......q2..........
// Prompt the user to enter the first integer
var num1 = parseInt(prompt("Enter the first integer:"));

// Prompt the user to enter the second integer
var num2 = parseInt(prompt("Enter the second integer:"));

// Check if the two integers are equal
if (num1 === num2) {
  console.log("The two integers are equal.");
} else {
  // Display the larger number
  var largerNumber = (num1 > num2) ? num1 : num2;
  console.log("The larger number is:", largerNumber);
}
//.........q3..............
// Prompt the user to enter a number
var number = parseFloat(prompt("Enter a number:"));

// Check if the number is positive, negative, or zero
if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
//.....q4........
// Prompt the user to enter a character
var character = prompt("Enter a character (string of length 1):");

// Convert the character to lowercase for easier comparison
character = character.toLowerCase();

// Check if the character is a vowel
var isVowel = false;
if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
  isVowel = true;
}

// Display the result
if (isVowel) {
  console.log("The character is a vowel.");
} else {
  console.log("The character is not a vowel.");
}
//................q5............
// Store the correct password in a variable
var correctPassword = "myPassword";

// Ask the user to enter their password
var userPassword = prompt("Enter your password:");

// Check if the user has entered a password
if (userPassword === "") {
  console.log("Please enter your password.");
} else {
  // Check if the entered password matches the correct password
  if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
  } else {
    console.log("Incorrect password.");
  }
}
//.............................q6.............
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
//......................q7.......................
