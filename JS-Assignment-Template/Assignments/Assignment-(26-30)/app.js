//...............q1.........
var number = parseInt(prompt("Enter a positive integer:"));

// Round-off value
var roundOff = Math.round(number);

// Floor value
var floorValue = Math.floor(number);

// Ceil value
var ceilValue = Math.ceil(number);

// Display the values in the browser
document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Round-off value: " + roundOff + "</h3>");
document.write("<h3>Floor value: " + floorValue + "</h3>");
document.write("<h3>Ceil value: " + ceilValue + "</h3>");
//.............q2..............
var number = parseFloat(prompt("Enter a negative floating-point number:"));

// Round-off value
var roundOff = Math.round(number);

// Floor value
var floorValue = Math.floor(number);

// Ceil value
var ceilValue = Math.ceil(number);

// Display the values in the browser
document.write("<h3>Number: " + number + "</h3>");
document.write("<h3>Round-off value: " + roundOff + "</h3>");
document.write("<h3>Floor value: " + floorValue + "</h3>");
document.write("<h3>Ceil value: " + ceilValue + "</h3>");
//................q3................
var number = parseFloat(prompt("Enter a number:"));

// Calculate the absolute value
var absoluteValue = Math.abs(number);

// Display the result
document.write("<h3>Absolute value of " + number + " is " + absoluteValue + "</h3>");

//..............q4..................
// Simulate a dice roll
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value
document.write("<h3>Value of the dice: " + diceValue + "</h3>");
//................q5................
// Simulate a coin toss
var coinValue = Math.random() < 0.5 ? "Heads" : "Tails";

// Display the coin value
document.write("<h3>Value of the coin: " + coinValue + "</h3>");
//.............q6....................
// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number
document.write("<h3>Random number between 1 and 100: " + randomNumber + "</h3>");

//...................q7..........
// Ask the user about their weight
var weightInput = prompt("Enter your weight:");

// Parse the user input to extract the weight value
var weight = parseFloat(weightInput);

// Display the weight in the browser
document.write("<h3>Your weight is: " + weight + " kgs</h3>");

//................q8.................
// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number between 1 and 10
var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user input matches the secret number
if (userInput === secretNumber) {
  document.write("<h3>Congratulations! You guessed the secret number!</h3>");
} else {
  document.write("<h3>Oops! Better luck next time!</h3>");
}