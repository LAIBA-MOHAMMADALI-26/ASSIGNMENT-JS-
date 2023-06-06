  //...q1....//
  var date=new Date();
  var month=date.getMonth();
  console.log(month);

  //....q2..//
  function alertCurrentMonth() {
// Get the current month index (0 - 11)
var currentMonthIndex = new Date().getMonth();

// Array of month names
var monthNames = [
  "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December"
];

// Get the month name from the array based on the current month index
var currentMonth = monthNames[currentMonthIndex];

// Alert the current month name
alert("Current Month: " + currentMonth);
}

// Call the function to alert the current month
alertCurrentMonth();
//.........q3.....//
function alertCurrentDay() {
// Array of day names
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Get the current day index (0 - 6)
var currentDayIndex = new Date().getDay();

// Get the first three letters of the current day
var currentDay = dayNames[currentDayIndex];

// Alert the first three letters of the current day
alert("Current Day: " + currentDay);
}

// Call the function to alert the first three letters of the current day
alertCurrentDay();
////.....q4....//
function checkIfFunDay() {
// Array of day names
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Get the current day index (0 - 6)
var currentDayIndex = new Date().getDay();

// Get the current day name
var currentDay = dayNames[currentDayIndex];

// Check if it's Saturday or Sunday
if (currentDay === "Saturday" || currentDay === "Sunday") {
  console.log("It's Fun day");
} else {
  console.log("It's not Fun day");
}
}

// Call the function to check if it's Fun day
checkIfFunDay();
//...q5....//
function checkMonthDays() {
// Get the current date
var currentDate = new Date();

// Get the current day of the month
var currentDay = currentDate.getDate();

// Check if the date is less than 16th
if (currentDay < 16) {
  console.log("First fifteen days of the month");
} else {
  console.log("Last days of the month");
}
}

// Call the function to check the month days
checkMonthDays();
//.....q6....//
function calculateMinutesSinceEpoch() {
// Create a new Date object
var currentDate = new Date();

// Get the minutes since midnight, Jan. 1, 1970
var minutesSinceEpoch = Math.floor(currentDate.getTime() / (1000 * 60));

// Display the result
console.log("Minutes since midnight, Jan. 1, 1970: " + minutesSinceEpoch);
}

// Call the function to calculate minutes since epoch
calculateMinutesSinceEpoch();
//..........q7....//
var currentTime = new Date(); // Get the current time

  var hours = currentTime.getHours(); // Get the current hour (in 24-hour format)

  if (hours < 12) {
    alert("It's AM");
  } else {
    alert("It's PM");
  }
  //.....q8..//
  let laterDate = new Date(2020, 11, 0);

console.log(laterDate);

//...q9...//
let startingDate = new Date('June 18, 2015');
let currentDate = new Date();
let timeDiff = currentDate.getTime() - startingDate.getTime();
let daysPassed = Math.floor(timeDiff / (1000 * 3600 * 24));

alert("Number of days passed since 1st Ramadan: " + daysPassed);

//.....q10...//
let referenceDate = new Date(); // Create a Date object for the reference date
let beginningOf2015 = new Date('January 1, 2015'); // Create a Date object for the beginning of 2015

let timeDif = referenceDate.getTime() - beginningOf2015.getTime(); // Calculate the time difference in milliseconds
let secondsElapsed = Math.floor(timeDif / 1000); // Convert milliseconds to seconds

document.write("Seconds elapsed since the beginning of 2015: " + secondsElapsed);
//...q11..//
function updateDate() {
    var currentDate = new Date(); // Create a Date object for the current date and time

    var currentHours = currentDate.getHours(); // Extract the current hour

    currentDate.setHours(currentHours + 1); // Reset the date object an hour ahead

    document.getElementById("updated-date").innerHTML = "Updated Date: " + currentDate;
  }
  //....q12...//
  let currDate = new Date(); // Create a Date object for the current date and time

currentDate.setFullYear(currDate.getFullYear() - 100); // Reset the date 100 years back

alert("Updated Date: " + currDate);

//.....q13...//
function generateBill(customerName, currentMonth, numberOfUnits, chargesPerUnit) {
    // Constants
    const dueDate = 10; // Due date of the month
    const latePaymentSurchargeRate = 0.02; // Late payment surcharge rate (2%)
  
    // Calculations
    const netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
    const currentDate = new Date();
    const isLatePayment = currentDate.getDate() > dueDate;
    const latePaymentSurcharge = isLatePayment ? (netAmountPayable * latePaymentSurchargeRate).toFixed(2) : 0;
    const grossAmountPayable = (parseFloat(netAmountPayable) + parseFloat(latePaymentSurcharge)).toFixed(2);
  
    // Displaying the bill
    document.write("Customer Name: " + customerName);
    document.write("Current Month: " + currentMonth);
    document.write("Number of units: " + numberOfUnits);
    document.write("Charges per unit: " + chargesPerUnit);
    document.write("Net Amount Payable (within Due Date): " + netAmountPayable);
    document.write("Late Payment Surcharge: " + latePaymentSurcharge);
    document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable);
  }
  
  // Example usage
  let result=generateBill("John Doe", "May 2023", 200, 12.5);
document.write(result);   
