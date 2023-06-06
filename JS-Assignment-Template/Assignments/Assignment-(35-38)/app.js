//.............q1....................
function displayCurrentDateTime() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get the current date and time components
    var date = currentDate.toLocaleDateString();
    var time = currentDate.toLocaleTimeString();
  
    // Create a new HTML element to display the date and time
    var dateTimeElement = document.createElement("p");
    dateTimeElement.textContent = "Current Date: " + date + " | Current Time: " + time;
  
    // Append the element to the body of the document
    document.body.appendChild(dateTimeElement);
  }
  
  // Call the function to display the current date and time
  displayCurrentDateTime();
//...................q2.......................
function greetUser(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    console.log("Hello, " + fullName + "! Welcome!");
  }
  
  // Example usage
  greetUser("John", "Doe");
//...................q3............................  
function addNumbers() {
    var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
  
    // Check if the input is valid numbers
    if (isNaN(num1) || isNaN(num2)) {
      return "Invalid input. Please enter valid numbers.";
    }
  
    var sum = num1 + num2;
    return sum;
  }
  
  // Example usage
  var result = addNumbers();
  console.log("The sum is: " + result);
//................q4..............
function calculateResult(num1, num2, operator) {
    var result;
  
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return "Invalid operator. Please provide a valid operator (+, -, *, /).";
    }
  
    document.write("The result is: " + result);
    return result;
  }
  
  // Example usage
  var number1 = parseFloat(prompt("Enter the first number:"));
  var number2 = parseFloat(prompt("Enter the second number:"));
  var operator = prompt("Enter the operator (+, -, *, /):");
  
  var result = calculateResult(number1, number2, operator);
//....................q5........
function squareNumber(number) {
    var squared = number * number;
    return squared;
  }
  
  // Example usage
  var number = parseFloat(prompt("Enter a number:"));
  var result = squareNumber(number);
  console.log("The square of " + number + " is: " + result);
//.................q6.................
function computeFactorial(number) {
    // Check if the number is 0 or 1
    if (number === 0 || number === 1) {
      return 1;
    }
  
    // Compute the factorial iteratively
    var factorial = 1;
    for (var i = 2; i <= number; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  
  // Example usage
  var number = parseInt(prompt("Enter a number:"));
  var result = computeFactorial(number);
  console.log("The factorial of " + number + " is: " + result);
//.....................q7....................
function displayCounting(start, end) {
    // Check if the start and end numbers are valid
    if (isNaN(start) || isNaN(end)) {
      document.write("Invalid input. Please provide valid numbers.");
      return;
    }
  
    // Perform counting based on start and end values
    for (var i = start; i <= end; i++) {
      document.write(i + "<br>");
    }
  }
  
  // Example usage
  var startNumber = parseInt(prompt("Enter the start number:"));
  var endNumber = parseInt(prompt("Enter the end number:"));
  displayCounting(startNumber, endNumber);
//..........................q8...........
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
  // Example usage
  var baseLength = parseFloat(prompt("Enter the base length:"));
  var perpendicularLength = parseFloat(prompt("Enter the perpendicular length:"));
  var result = calculateHypotenuse(baseLength, perpendicularLength);
  console.log("The hypotenuse of the right-angle triangle is: " + result);

//.......................q9.................
function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(side) {
      return side * side;
    }
  
    var baseSquare = calculateSquare(base);
    var perpendicularSquare = calculateSquare(perpendicular);
    var hypotenuseSquare = baseSquare + perpendicularSquare;
    var hypotenuse = Math.sqrt(hypotenuseSquare);
  
    return hypotenuse;
  }
  
  // Example usage
  var baseLength = parseFloat(prompt("Enter the base length:"));
  var perpendicularLength = parseFloat(prompt("Enter the perpendicular length:"));
  var result = calculateHypotenuse(baseLength, perpendicularLength);
  console.log("The hypotenuse of the right-angle triangle is: " + result);

//..................q10.................
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    var formattedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Reverse the string
    var reversedStr = formattedStr.split("").reverse().join("");
    
    // Check if the original and reversed strings are equal
    if (formattedStr === reversedStr) {
      return true; // It is a palindrome
    } else {
      return false; // It is not a palindrome
    }
  }
  
  // Example usage
  var input = prompt("Enter a string:");
  var result = isPalindrome(input);
  
  if (result) {
    console.log("The string '" + input + "' is a palindrome.");
  } else {
    console.log("The string '" + input + "' is not a palindrome.");
  }

//................q11..................
function capitalizeFirstLetter(str) {
    var words = str.split(" ");
    var capitalizedWords = [];
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    var result = capitalizedWords.join(" ");
    return result;
  }
  
  // Example usage
  var input = prompt("Enter a string:");
  var output = capitalizeFirstLetter(input);
  console.log("Original string: " + input);
  console.log("Converted string: " + output);

  //.......................q12.............
  function findLongestWord(str) {
    var words = str.split(" ");
    var longestWord = "";
  
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
  
    return longestWord;
  }
  
  // Example usage
  var input = prompt("Enter a string:");
  var longest = findLongestWord(input);
  console.log("Longest word: " + longest);
//...............q13............
function countLetterOccurrences(str, letter) {
    var count = 0;
    
    for (var i = 0; i < str.length; i++) {
      if (str[i] === letter) {
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage
  var inputString = prompt("Enter a string:");
  var inputLetter = prompt("Enter a letter:");
  var occurrences = countLetterOccurrences(inputString, inputLetter);
  console.log("Number of occurrences: " + occurrences);
//...................q14................
// Function to calculate the circumference of a circle
function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    console.log("The circumference is " + circumference);
  }
  
  // Function to calculate the area of a circle
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    console.log("The area is " + area);
  }
  
  // Example usage
  var radius = parseFloat(prompt("Enter the radius of the circle:"));
  calcCircumference(radius);
  calcArea(radius);
  