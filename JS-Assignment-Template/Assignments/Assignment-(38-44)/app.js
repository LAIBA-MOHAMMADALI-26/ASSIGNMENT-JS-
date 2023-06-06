// Question 1

const power = (a,b)=>{
    return a**b;
}

let a = prompt("Enter a");
let b = prompt("Enter b");

console.log(`${a} to the power of ${b} is ${power(+a,+b)}`);

// Question 2

const isLeapYear = (year) => {
    if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } 
    return false;
}

let year = prompt("Enter a year to check, whether it is leap or not");

if(isLeapYear(+year)){
    console.log(`${year} is a leap year`);
}
else{
    console.log(`${year} is not a leap year`);
}

//Question 3 

const s = (a,b,c) => {
    return ( a + b + c ) / 2;
}

const area = (a,b,c) => {
    const S = s(a,b,c);
    return S * (S-a) * (S-b) * (S-c);
}

a = prompt("Enter the length of side a");
b = prompt("Enter the length of side b");
let c = prompt("Enter the length of side c");

console.log(`The area of triangle with dimensions ${a} units, ${b} units and ${c} units is ${area(+a,+b,+c)} units squared.`);

// Question 4

const calculateAverage = (subject1, subject2, subject3) => {
  return (subject1 + subject2 + subject3) / 3;
}

const calculatePercentage = (totalMarks, maxMarks) => {
  return (totalMarks / maxMarks) * 100;
}

const mainFunction = (subject1, subject2, subject3) => {
  const averageMarks = calculateAverage(subject1, subject2, subject3);
  const percentage = calculatePercentage(averageMarks, 100);

  console.log("Average Marks: " + averageMarks.toFixed(2));
  console.log("Percentage: " + percentage.toFixed(2) + "%");
}

let sub1 = prompt("Enter the marks for Subject 1");
let sub2 = prompt("Enter the marks for Subject 2");
let sub3 = prompt("Enter the marks for Subject 3");

mainFunction(+sub1, +sub2, +sub3);

//Question 5

const indexOf = (str, element) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === element) {
      return i;
    }
  }
  return -1;
}

let str = "Test string";
console.log(`The first occurence of r in str is at ${indexOf(str,'i')}`);
console.log(`The first occurence of z in str is at ${indexOf(str,'z')}`);

// Question 6

const deleteVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    const filteredChars = Array.from(str).filter((char) => {
      return !vowels.includes(char);
    }); 

    const result = filteredChars.join("");
    return result;
}

str = "Test string";
let modified = deleteVowels(str);

// Question 7

const successiveVowels = (str) => {
    let count = 0; 

    for (let i = 0; i < str.length - 1; i++) {
      let current = str[i].toLowerCase();
      let next = str[i + 1].toLowerCase();  

      switch (current) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
          switch(next){
              case "a":
              case "e":
              case "i":
              case "o":
              case "u":
                  count++;
                  break;
          }
          break;
      }
    }

    return count;
}

// Question 8

const meters = (km) => {
  return km * 1000;
}

const feet = (km) => {
  return km * 3280.84;
}

const inches = (km) => {
  return km * 39370.1;
}

const cm = (km) => {
  return cm * 100000;
}

let km = prompt("Enter the distance in km");

console.log(`${km}km in Meters: ${meters(+km)}m`);
console.log(`${km}km in Feet: ${feet(+km)}`);
console.log(`${km}km in Inches: ${inches(+km)}`);
console.log(`${km}km in Centimeters: ${cm(+km)}`);

// Question 9 

const overtime = (hrs) => {
    const stdHrs = 40;
    const ovt = 12.00;
  
    if (hrs <= stdHrs) {
        return 0;
    } 

    let ovtHrs = hrs - stdHrs;
    return ovtHrs * ovt;
}

let hrs = prompt("Enter hours worked");
let overtimePay = overtime(+hrs);

//Question 10

const currencyNotes = (amount) => {
    let hundreds = 0;
    let fifties = 0;
    let tens = 0;

    let hundredth = Number.parseInt(amount/ 100);
    let tenth = Number.parseInt((amount - (hundredth*100))/10);

    if(hundredth>=1){
        hundreds = hundredth;
    }

    if(tenth >= 5){
        fifties = Number.parseInt(tenth/5);
    }

    tens = Number.parseInt(tenth - (fifties*5));

    console.log(`You will have ${hundreds} hundred notes, ${fifties} fifty notes and ${tens} ten notes`);
}

currencyNotes(500);