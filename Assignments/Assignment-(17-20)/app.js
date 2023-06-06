//................q1..............
var multidimensionalArray = [[]];
multidimensionalArray[0].push(1);
multidimensionalArray[0].push(2);
multidimensionalArray[0].push(3);
multidimensionalArray.push([]);
multidimensionalArray[1].push(4);
multidimensionalArray[1].push(5);
multidimensionalArray[1].push(6);
//.............q2..................
var matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
  ];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
  }
//.............q3..........
for (var i = 1; i <= 10; i++) {
    document.write(i + "<br>");
  }
//.............q4.........
// Get the table number and length from the user
var tableNumber = parseInt(prompt("Enter the table number:"));
var tableLength = parseInt(prompt("Enter the table length:"));

// Print the multiplication table
document.write("<h3>Multiplication Table of " + tableNumber + "</h3>");

for (var i = 1; i <= tableLength; i++) {
  var result = tableNumber * i;
  document.write(tableNumber + " x " + i + " = " + result + "<br>");
}
//......................q5..........
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("<h3>Fruits:</h3>");

for (var i = 0; i < fruits.length; i++) {
  document.write(fruits[i] + "<br>");
}
//..........q6............
document.write("<h3>Counting:</h3>");
for (var i = 1; i <= 15; i++) {
  document.write(i + ", ");
}

document.write("<h3>Reverse counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.write(i + ", ");
}

document.write("<h3>Even:</h3>");
for (var i = 0; i <= 20; i += 2) {
  document.write(i + ", ");
}

document.write("<h3>Odd:</h3>");
for (var i = 1; i <= 19; i += 2) {
  document.write(i + ", ");
}

document.write("<h3>Series:</h3>");
for (var i = 2; i <= 20; i += 2) {
  document.write(i + "k, ");
}
//......................q7............
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Get user input for search item
var userInput = prompt("Enter an item to search:");

// Convert user input to lowercase for case-insensitive search
var searchItem = userInput.toLowerCase();

// Flag to track if the item is found
var found = false;

// Search for the item in the array
for (var i = 0; i < A.length; i++) {
  // Convert current array item to lowercase for case-insensitive comparison
  var currentItem = A[i].toLowerCase();

  // Check if the current item matches the search item
  if (currentItem === searchItem) {
    found = true;
    break;
  }
}

// Display the result based on whether the item is found or not
if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}
//.............q8..........
function findLargestNumber(array) {
    if (array.length === 0) {
      return null;
    }
  
    let largestNumber = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largestNumber) {
        largestNumber = array[i];
      }
    }
  
    return largestNumber;
  }
  
  // Example usage
  const A = [24, 53, 78, 91, 12];
  const largestNumber = findLargestNumber(A);
  console.log("The largest number in the array is:", largestNumber);
//.................q9..........
function findSmallestNumber(array) {
    if (array.length === 0) {
      return null;
    }
  
    let smallestNumber = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallestNumber) {
        smallestNumber = array[i];
      }
    }
  
    return smallestNumber;
  }
  
  // Example usage
  const A = [24, 53, 78, 91, 12];
  const smallestNumber = findSmallestNumber(A);
  console.log("The smallest number in the array is:", smallestNumber);
//..........q10............
for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
  