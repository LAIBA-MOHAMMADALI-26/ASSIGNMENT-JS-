//..........q1.................
const studentNames = [];
studentNames.push("John");
studentNames.push("Jane");
studentNames.push("Mike");
//....................q2..............
const studentName = {};
studentName.student1 = "John";
studentName.student2 = "Jane";
studentName.student3 = "Mike";

//..........q3........
const stringsArray = ["Hello", "World", "OpenAI", "JavaScript"];

// Example usage
console.log(stringsArray); // Output: ["Hello", "World", "OpenAI", "JavaScript"]
//.............q4...........
const numbersArray = [1, 2, 3, 4, 5];

// Example usage
console.log(numbersArray); // Output: [1, 2, 3, 4, 5]

//..........q5..............
const booleanArray = [true, false, true, false];

// Example usage
console.log(booleanArray); // Output: [true, false, true, false]
//.............q6..............
const mixedArray = [1, "Hello", true, { name: "John", age: 25 }, null];

// Example usage
console.log(mixedArray); // Output: [1, "Hello", true, { name: "John", age: 25 }, null]
//......................q7............
const qualificationsArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Displaying qualifications in the browser
document.write("<h2>QUALIFICATIONS</h2>");
document.write("<ol>");

for (let i = 0; i < qualificationsArray.length; i++) {
  document.write("<li>" + qualificationsArray[i] + "</li>");
}

document.write("</ol>");
//.................q8........
const studNames = ["John", "Jane", "Mike"];
const scores = [380, 420, 450];
const totalMarks = 500;

// Displaying scores and percentages
for (let i = 0; i < studNames.length; i++) {
  const studName = studNames[i];
  const score = scores[i];
  const percentage = (score / totalMarks) * 100;

  console.log("Student Name: " + studName);
  console.log("Score: " + score);
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log();
}
//...........q9..............
// Initialize array with color names
let colorNames = ["Red", "Green", "Blue"];

// Display array elements in the browser
document.write("<b>Original Array:</b> " + colorNames.join(", ") + "<br><br>");

// Ask user for a color to add to the beginning of the array
let colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
colorNames.unshift(colorToAddBeginning);

// Display the updated array after adding color to the beginning
document.write("<b>Array after adding color to the beginning:</b> " + colorNames.join(", ") + "<br><br>");

// Ask user for a color to add to the end of the array
let colorToAddEnd = prompt("Enter a color to add to the end of the array:");
colorNames.push(colorToAddEnd);

// Display the updated array after adding color to the end
document.write("<b>Array after adding color to the end:</b> " + colorNames.join(", ") + "<br><br>");

// Add two more colors to the beginning of the array
colorNames.unshift("Yellow", "Orange");

// Display the updated array after adding two colors to the beginning
document.write("<b>Array after adding two colors to the beginning:</b> " + colorNames.join(", ") + "<br><br>");

// Delete the first color in the array
colorNames.shift();

// Display the updated array after deleting the first color
document.write("<b>Array after deleting the first color:</b> " + colorNames.join(", ") + "<br><br>");

// Delete the last color in the array
colorNames.pop();

// Display the updated array after deleting the last color
document.write("<b>Array after deleting the last color:</b> " + colorNames.join(", ") + "<br><br>");

// Ask user for the index and color to add
let indexToAdd = parseInt(prompt("Enter the index at which you want to add a color:"));
let colorToAdd = prompt("Enter the color to add at the desired index:");
colorNames.splice(indexToAdd, 0, colorToAdd);

// Display the updated array after adding color at the desired index
document.write("<b>Array after adding color at the desired index:</b> " + colorNames.join(", ") + "<br><br>");

// Ask user for the index and number of colors to delete
let indexToDelete = parseInt(prompt("Enter the index from where you want to delete color(s):"));
let numOfColorsToDelete = parseInt(prompt("Enter the number of colors you want to delete:"));
colorNames.splice(indexToDelete, numOfColorsToDelete);

// Display the updated array after deleting colors from the desired index
document.write("<b>Array after deleting color(s) from the desired index:</b> " + colorNames.join(", ") + "<br><br>");
//...........q10.............
// Store student scores in an array
let studentScores = [87, 92, 78, 95, 81];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
  return a - b;
});

// Display the sorted array
console.log("Sorted Scores:", studentScores);
///.....................q11....................
// Initialize array with city names
let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];

// Initialize selectedCities array
let selectedCities = [];

// Copy three array elements from cities to selectedCities
selectedCities = cities.slice(1, 4);

// Display the selectedCities array
console.log("Selected Cities:", selectedCities);


//.........q12....................
var arr = ["This", "is", "my", "cat"];
var singleString = arr.join(" ");

console.log("Single String:", singleString);
//...........q13.........
// Create an empty array
var fifoArray = [];

// Add values to the array
fifoArray.push("Value 1");
fifoArray.push("Value 2");
fifoArray.push("Value 3");

// Access and remove values in FIFO order
var firstValue = fifoArray.shift();
var secondValue = fifoArray.shift();
var thirdValue = fifoArray.shift();

// Display the values
console.log("First value:", firstValue);
console.log("Second value:", secondValue);
console.log("Third value:", thirdValue);
///...............q14.........
// Create an empty array
var lifoArray = [];

// Add values to the array
lifoArray.push("Value 1");
lifoArray.push("Value 2");
lifoArray.push("Value 3");

// Access and remove values in LIFO order
var lastValue = lifoArray.pop();
var secondLastValue = lifoArray.pop();
var thirdLastValue = lifoArray.pop();

// Display the values
console.log("Last value:", lastValue);
console.log("Second last value:", secondLastValue);
console.log("Third last value:", thirdLastValue);
//........q15.........................
// Store phone manufacturers in an array
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Generate the HTML for the dropdown/select menu
var dropdownHTML = "<select>";
for (var i = 0; i < phoneManufacturers.length; i++) {
  dropdownHTML += "<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>";
}
dropdownHTML += "</select>";

// Display the dropdown/select menu in the browser
document.write(dropdownHTML);


