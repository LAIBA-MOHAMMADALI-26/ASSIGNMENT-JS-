//......q1..................
// Get user input for first name
var firstName = prompt("Enter your first name:");

// Get user input for last name
var lastName = prompt("Enter your last name:");

// Merge first name and last name into fullName
var fullName = firstName + " " + lastName;

// Greet the user using their full name
document.write("<h3>Welcome, " + fullName + "!</h3>");

//...........q2............
// Get user input about favorite mobile phone model
var userInput = prompt("Enter your favorite mobile phone model:");

// Find the length of the user input
var inputLength = userInput.length;

// Display the length of the user input in the browser
document.write("<h3>The length of your input is: " + inputLength + "</h3>");

//............................q3...........
// Define the word
var word = "Pakistani";

// Find the index of the letter "n"
var index = word.indexOf("n");

// Display the result in the browser
document.write("<h3>The index of the letter 'n' in the word 'Pakistani' is: " + index + "</h3>");
//................q4............
// Define the word
var word = "Hello World";

// Find the last index of the letter "l"
var lastIndex = word.lastIndexOf("l");

// Display the result in the browser
document.write("<h3>The last index of the letter 'l' in the word 'Hello World' is: " + lastIndex + "</h3>");
//.......................q5..............
// Define the word
var word = "Pakistani";

// Find the character at the 3rd index
var character = word.charAt(3);

// Display the result in the browser
document.write("<h3>The character at the 3rd index in the word 'Pakistani' is: " + character + "</h3>");

//..................q6..............
// Get user input for first name
var firstName = prompt("Enter your first name:");

// Get user input for last name
var lastName = prompt("Enter your last name:");

// Merge first name and last name into fullName using concat()
var fullName = firstName.concat(" ", lastName);

// Greet the user using their full name
document.write("<h3>Welcome, " + fullName + "!</h3>");
//.................q7..............
// Define the word
var word = "Hyderabad";

// Replace "Hyder" with "Islam"
var newWord = word.replace("Hyder", "Islam");

// Display the result in the browser
document.write("<h3>The modified word is: " + newWord + "</h3>");
//..................q8.............
var message = "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&"
var newMessage = message.replace(/and/g, "&");

// Display the result in the browser
document.write("<h3>The modified message is: " + newMessage + "</h3>");
//.................q9..............
var str = "472";

// Convert the string to a number
var num = Number(str);

// Display the value and type in the browser
document.write("<h3>Value: " + num + "</h3>");
document.write("<h3>Type: " + typeof num + "</h3>");
//.................q10...............
// Get user input
var userInput = prompt("Enter a string:");

// Convert the input to capital letters
var capitalLetters = userInput.toUpperCase();

// Display the converted input in the browser
document.write("<h3>The converted input is: " + capitalLetters + "</h3>");
//............q11..........
// Get user input
var userInput = prompt("Enter a string:");

// Convert the input to title case
var titleCase = convertToTitleCase(userInput);

// Display the converted input in the browser
document.write("<h3>The converted input is: " + titleCase + "</h3>");

// Function to convert string to title case
function convertToTitleCase(str) {
  // Split the string into an array of words
  var words = str.split(" ");

  // Convert the first character of each word to uppercase and the rest to lowercase
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  // Join the words back into a single string
  var convertedStr = words.join(" ");

  return convertedStr;
}
//............q12.........
var num = 35.36;

// Convert the number to a string
var str = num.toString();

// Remove the dot from the string
var result = str.replace(".", "");

// Display the result in the browser
document.write("<h3>The result is: " + result + "</h3>");
//.........q13.............
// Get user input for username
var username = prompt("Enter your username:");

// Check if the username contains any special symbols
if (
  username.includes("@") ||
  username.includes(".") ||
  username.includes(",") ||
  username.includes("!")
) {
  // Prompt the user to enter a valid username
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  // Display the username
  document.write("<h3>Username: " + username + "</h3>");
}
//...............q14............
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Get user input for search
var userInput = prompt("Enter an item to search:");

// Convert the user input to lowercase for case-insensitive search
var searchItem = userInput.toLowerCase();

// Perform the search in the array
var found = false;
for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === searchItem) {
    found = true;
    break;
  }
}

// Inform the user about the availability of the item
if (found) {
  alert("Yes, the item is found in the list.");
} else {
  alert("No, the item is not found in the list.");
}
//...........q15....................
// Get user input for password
var password = prompt("Enter a password:");

// Define requirements for the password
var hasAlphabetsAndNumbers = /[a-zA-Z].*[0-9]|[0-9].*[a-zA-Z]/.test(password);
var doesNotStartWithNumber = /^[^0-9]/.test(password);
var isAtLeast6CharactersLong = password.length >= 6;

// Check if the password meets the requirements
if (
  hasAlphabetsAndNumbers &&
  doesNotStartWithNumber &&
  isAtLeast6CharactersLong
) {
  alert("Password is valid.");
} else {
  alert("Please enter a valid password that meets the requirements.");
}
//..........q16.............
var university = "University of Karachi";

// Convert the string to an array using split method
var array = university.split(" ");

// Display the elements of the array in the browser
document.write("<h3>Array Elements:</h3>");
document.write("<ul>");
for (var i = 0; i < array.length; i++) {
  document.write("<li>" + array[i] + "</li>");
}
document.write("</ul>");
//...............q17..............
// Get user input
var userInput = prompt("Enter a string:");

// Get the last character of the input
var lastCharacter = userInput.charAt(userInput.length - 1);

// Display the last character in the browser
document.write("<h3>Last Character:</h3>");
document.write("<p>" + lastCharacter + "</p>");
//.............q18............
var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";

// Convert both the sentence and the word to lowercase for case-insensitive search
var lowerCaseSentence = sentence.toLowerCase();
var lowerCaseWord = wordToSearch.toLowerCase();

// Split the sentence into individual words
var words = lowerCaseSentence.split(" ");

// Count the number of occurrences of the word
var count = 0;
for (var i = 0; i < words.length; i++) {
  if (words[i] === lowerCaseWord) {
    count++;
  }
}

// Display the result in the browser
document.write("<h3>Word Count:</h3>");
document.write("<p>The word 'the' occurs " + count + " times.</p>");
