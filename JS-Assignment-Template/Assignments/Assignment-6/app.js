//..............q1.....................//
// Define two numbers
let num=Number(prompt("enter the number?"));
console.log(num);
document.write("the value of a is ",num);

document.write("       <br> the value of ++a is",num+1);
document.write("     <br>   the value of a is",num);
document.write("    <br>    the value of a++ is",num+1);
document.write("       <br> the value of a is",num+2);
document.write("       <br> the value of --a is",num-1);
document.write("       <br> the value of a is",num);
document.write("      <br>  the value of a-- is",num+1);
document.write("       <br> the value of a is",num);
//..........q2..................//
// Let's break down the execution of the script step by step to understand the output and the value of each variable:

// 1. Initialization:
//    - `var a = 2, b = 1;` assigns the value 2 to variable `a` and the value 1 to variable `b`.

// 2. Stage 1: --a;
//    - `--a` decrements the value of `a` by 1 before using it.
//    - As a starts with 2, `--a` will make `a` equal to 1.
//    - The value of `a` is now 1.

// 3. Stage 2: --a - --b;
//    - `--b` decrements the value of `b` by 1 before using it.
//    - As b starts with 1, `--b` will make `b` equal to 0.
//    - Now, we have `--a - --b` which is equivalent to `1 - 0`.
//    - The result of `--a - --b` is 1.

// 4. Stage 3: --a - --b + ++b;
//    - `++b` increments the value of `b` by 1 before using it.
//    - As `b` is currently 0, `++b` will make `b` equal to 1.
//    - Now, we have `--a - --b + ++b` which is equivalent to `1 - 0 + 1`.
//    - The result of `--a - --b + ++b` is 2.

// 5. Stage 4: --a - --b + ++b + b--;
//    - `b--` uses the value of `b` and then decrements it by 1.
//    - As `b` is currently 1, `b--` will make `b` equal to 0.
//    - Now, we have `--a - --b + ++b + b--` which is equivalent to `1 - 0 + 1 + 1`.
//    - The result of `--a - --b + ++b + b--` is 3.

// Therefore, at the end of the script execution:
// - The value of `a` is 1.
// - The value of `b` is 0.
// - The value of `result` is 3.
//..............q3..............//
// Prompt the user to enter their name
var username = prompt("Enter your name:");

// Greet the user with their name
alert("Hello, " + username + "! Welcome!");

// Output the greeting to the console
console.log("Hello, " + username + "! Welcome!");

//....................q5.................//
        // Prompt the user to enter a number
        var table = prompt("Enter a number for table:");

        // Convert the input to a number
        number = parseInt(table);
        
        // If the user did not enter a number, set it to 5 by default
        if (isNaN(number)) {
          number = 5;
        }
        
        // Display the multiplication table on the web page
        document.write("<h2>Table for " + number + ":</h2>");
        document.write("<table>");
        for (var i = 1; i <= 10; i++) {
          document.write("<tr><td>" + number + " x " + i + " = </td><td>" + (number * i) + "</td></tr>");
        }
        document.write("</table>");

//..............q6............//
var subject1 = prompt("Enter name for subject 1:");
    var subject2 = prompt("Enter name for subject 2:");
    var subject3 = prompt("Enter name for subject 3:");

    // Define total marks for each subject
    var totalMarks = 100;

    // Prompt the user to enter obtained marks for each subject
    var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
    var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
    var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));
    // Calculate total marks and percentage
    var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
    var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

    // Display the result in a table on the web page
    document.write("<table>");
    document.write("<h1>question 6</h1>")
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
    document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
    document.write("<tr><th>Percentage</th><th colspan='2'>" + percentage.toFixed(2) + "%</th></tr>");
    document.write("</table>");