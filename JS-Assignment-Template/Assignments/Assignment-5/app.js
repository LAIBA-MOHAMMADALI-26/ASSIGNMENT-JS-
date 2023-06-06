
        //......q1.........//
        // Prompt user to enter the first number
var num1 = parseInt(prompt("Enter the first number:"));

// Prompt user to enter the second number
var num2 = parseInt(prompt("Enter the second number:"));

// Add the numbers and store the result in a new variable
var sum = num1 + num2;

// Display the result in the browser
document.write("The sum of " + num1 + " and " + num2 + " is " + sum);

//............q2...............//
// Prompt user to enter the first number
var num1 = parseFloat(prompt("Enter the first number:"));

// Prompt user to enter the second number
var num2 = parseFloat(prompt("Enter the second number:"));

// Perform subtraction and store the result in a new variable
var subtraction = num1 - num2;

// Perform multiplication and store the result in a new variable
var multiplication = num1 * num2;

// Perform division and store the result in a new variable
var division = num1 / num2;

// Perform modulus and store the result in a new variable
var modulus = num1 % num2;

// Display the results in the browser
document.write("Subtraction: " + num1 + " - " + num2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + num1 + " * " + num2 + " = " + multiplication + "<br>");
document.write("Division: " + num1 + " / " + num2 + " = " + division + "<br>");
document.write("Modulus: " + num1 + " % " + num2 + " = " + modulus);
//...........q3............//
// Declare a variable
var num;

// Show the value of the variable after declaration
document.write("Value after variable declaration is: " + num + "<br>");

// Initialize the variable with a number
num = 5;

// Show the initial value of the variable
document.write("Initial value: " + num + "<br>");

// Increment the variable
num++;

// Show the value of the variable after increment
document.write("Value after increment is: " + num + "<br>");

// Add 7 to the variable
num += 7;

// Show the value of the variable after addition
document.write("Value after addition is: " + num + "<br>");

// Decrement the variable
num--;

// Show the value of the variable after decrement
document.write("Value after decrement is: " + num + "<br>");

// Show the remainder after dividing the variable's value by 3
var remainder = num % 3;
document.write("The remainder is: " + remainder);

//........q4.............//
// Store ticket price in a variable
var ticketPrice = 600;

// Calculate the cost of buying 5 tickets
var totalCost = ticketPrice * 5;

// Display the total cost to buy 5 tickets
console.log("Total cost to buy 5 tickets to a movie is " + totalCost + " PKR");
//...........q5.........//
// Prompt user to enter a number
var number = parseInt(prompt("Enter a number:"));

// Display the multiplication table in the browser
document.write("<h2>Multiplication Table of " + number + "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
//..........q6..........//
// Store a Celsius temperature into a variable
var celsius = 30;

// Convert Celsius to Fahrenheit
var fahrenheit = (celsius * 9/5) + 32;

// Output the conversion result
console.log(celsius + "°C is " + fahrenheit + "°F");

// Store a Fahrenheit temperature into a variable
var fahrenheit2 = 86;

// Convert Fahrenheit to Celsius
var celsius2 = (fahrenheit2 - 32) * 5/9;

// Output the conversion result
console.log(fahrenheit2 + "°F is " + celsius2 + "°C");
//............q7..........//
// Store the price of item 1
var item1Price = 500;

// Store the price of item 2
var item2Price = 750;

// Store the ordered quantity of item 1
var item1Quantity = 2;

// Store the ordered quantity of item 2
var item2Quantity = 3;

// Store the shipping charges
var shippingCharges = 100;

// Compute the total cost
var subtotal = (item1Price * item1Quantity) + (item2Price * item2Quantity);
var totalCost = subtotal + shippingCharges;

// Display the receipt in the browser
document.write("<h2>Receipt</h2>");
document.write("<p>Price of Item 1: " + item1Price + " PKR</p>");
document.write("<p>Price of Item 2: " + item2Price + " PKR</p>");
document.write("<p>Ordered Quantity of Item 1: " + item1Quantity + "</p>");
document.write("<p>Ordered Quantity of Item 2: " + item2Quantity + "</p>");
document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
document.write("<p>Subtotal: " + subtotal + " PKR</p>");
document.write("<p>Total Cost: " + totalCost + " PKR</p>");
//...........q8........//
// Store total marks
var totalMarks = 500;

// Store marks obtained by the student
var marksObtained = 410;

// Calculate the percentage
var percentage = (marksObtained / totalMarks) * 100;

// Display the result in the browser
document.write("<h2>Percentage Calculation</h2>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + marksObtained + "</p>");
document.write("<p>Percentage: " + percentage + "%</p>");
//...........q9......//
// Conversion rates
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

// Convert US dollars and Saudi Riyals to Pakistani Rupees
var totalPkr = (10 * usdToPkrRate) + (25 * sarToPkrRate);

// Display the result in the browser
document.write("<h2>Currency Conversion</h2>");
document.write("<p>10 US dollars = " + (10 * usdToPkrRate) + " Pakistani Rupees</p>");
document.write("<p>25 Saudi Riyals = " + (25 * sarToPkrRate) + " Pakistani Rupees</p>");
document.write("<p>Total currency in Pakistani Rupees: " + totalPkr + " PKR</p>");
//...........q10............//
// Initialize the variable with a number
var number = 8;

// Perform arithmetic operations in sequence
var result = ((number + 5) * 10) / 2;

// Display the result
console.log("The final result is: " + result);
//...........q11.............//
// Store the current year in a variable
var currentYear = new Date().getFullYear();

// Store their birth year in a variable
var birthYear = 1990; // Assuming the birth year is 1990

// Calculate their age based on the stored values
var age1 = currentYear - birthYear;
var age2 = age1 - 1;

// Output the results to the screen
console.log("They are either " + age1 + " or " + age2 + " years old.");
//.............q12...........//
// Store the radius into a variable
var radius = 5; // Assuming the radius is 5

// Calculate the circumference based on the radius
var circumference = 2 * Math.PI * radius;

// Calculate the area based on the radius
var area = Math.PI * Math.pow(radius, 2);

// Output the results
console.log("The circumference is " + circumference.toFixed(2));
console.log("The area is " + area.toFixed(2));
//.......q13............//
// Store your favorite snack into a variable
var favoriteSnack = "Chocolate";

// Store your current age into a variable
var currentAge = 30;

// Store a maximum age into a variable
var maximumAge = 80;

// Store an estimated amount per day (as a number)
var amountPerDay = 2;

// Calculate how many snacks you would eat total for the rest of your life
var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365;
var totalSnacks = daysRemaining * amountPerDay;

// Output the result to the screen
console.log("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");

   