 //..........q1.......//
 var age=15;
 function displayAge(){
     alert("My age is"+age);
 
 }
 
 ///.....Q2.....//
 // Declare and initialize the variable
 var visitCount = 0;
 
 // Check if the visitor has visited before
 if (localStorage.getItem('visitCount')) {
   // If so, retrieve the previous count from local storage
   visitCount = parseInt(localStorage.getItem('visitCount'));
 }
 
 // Increment the visit count
 visitCount++;
 
 // Store the updated count in local storage for future visits
 localStorage.setItem('visitCount', visitCount);
 
 // Display the visit count on your web page
 document.getElementById('visitCountDisplay').textContent = "You have visited this site " + visitCount + " times.";
 
 //...q3...//
 let birthYear=2003;
 let datatype=typeof(birthYear)
 function birthyear(){
 alert("My birth year is "+birthYear+" \n"+"The data type of my declared variable is "+datatype)}
    //....Q4.......//
    // Prompt the visitor to enter their name
 var visitorName = prompt("Please enter your name:");
 
 // Prompt the visitor to enter the product title
 var productTitle = prompt("Enter the product title:");
 
 // Prompt the visitor to enter the quantity
 var quantity = parseInt(prompt("Enter the quantity:"));
 
 // Display the message in the browser
 var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
 document.write(message);
 