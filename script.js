// //array

// // favColors = ["Black", "blue", "Green", "Pink"];
// // console.log(favColors[2]);
// favColors[5] = "White";
// // console.log(favColors[4]);
// console.log(favColors.length);

// function greetUser(firstname, lastname) {
//   //   let name = "Priya";
//   let msg = "Hello" + firstname + lastname + "I amm Learning JavaScript";
//   console.log(msg);
// }

// greetUser("Priya", "Sivaraj");
// greetUser("Anu", "Pallavi");

// function add(number1, number2) {
//   console.log(number1 + number2);
// }
// add(254852, 528);

// function sub(number1, number2) {
//   console.log(number1 - number2);
// }
// sub(254852, 528);

// function mul(number1, number2) {
//   console.log(number1 * number2);
// }
// mul(254852, 528);

// function div(number1, number2) {
//   console.log(number1 / number2);
// }
// div(254852, 528);

// Arithmetic Operators
// let number1 = 10;
// let number2 = 15;

// console.log(number1 + number2);
// console.log(number1 - number2);
// console.log(number1 * number2);
// console.log(number1 / number2);
// console.log(number1 % number2);
// console.log(number1 ** number2);

// // increment
// console.log(++number1);
// console.log(number1);

// console.log(number1++);
// console.log(number1);

// // Decrement

// console.log(--number1);
// console.log(number1);

// console.log(number1--);
// console.log(number1);

// // Assignment Operator

// let x = 25;

// // x = x + 5;

// x += 20;

// console.log(x);

// let y = 20;
// y -= 5;

// console.log(y);

// // Comparison operator
// // Relational Operators

// let x = 15;

// console.log(x < 15); //less than
// console.log(x <= 15); //less than or equal too

// console.log(x > 15);
// console.log(x >= 15);

// console.log(x === 15);
// console.log(x !== 15);

// // String omparison
// console.log("priya" > "anu");

// //comparison of different types

// console.log("1" < 5);
// console.log(true == 1);

// // Equality Operator

// // strict equality operator
// console.log(1 === 1);
// console.log("1" === 1);

// // lose equality operator
// console.log(1 == 1);
// console.log("1" == 1);

// Ternary Operator

// let age = 11;

// let type = age > 18 ? "Adult Ticket" : "Child Ticket";

// console.log(type);

// Logical Operator

// let highIncome = true;
// let CIBILscore = true;
// // logical AND

// let eligiblePerson = highIncome && CIBILscore;

// console.log(eligiblePerson);

// // Logical OR

// let eligiblePerson1 = highIncome || CIBILscore;
// console.log(eligiblePerson1);

// // operator with non bollean values
// let userColor = "Blue";
// let defaultColor = "Black";

// currentColor = userColor || defaultColor;3
// // console.log("selectedColor :" + currentColor);

// // Bitwise Operators

// // console.log(1 | 2);
// // console.log(1 & 2);

// // const readPermission = 4;
// // const writePermission = 2;
// // const executePermission = 1;

// // let myPermission = 0;
// // myPermission = myPermission | writePermission;

// // let message = myPermission & readPermission ? "Yes" : "No";
// // console.log(message);

// // Operator Precedence

// // let x = 5 + 7 * 9;
// // console.log(x);

// // let y = (5 + 7) * 9;
// // console.log(y);

// // // if else
// // let weather = "cold";

// // if (weather === "cold") {
// //   console.log("Weather is Cold");
// // } else {
// //   console.log("Weather is hot");
// // }

// // let isRaining = false;
// // let isCloudy = false;
// // if (isRaining || isCloudy) {
// //   console.log("Don't forget to take umbrella");
// // } else {
// //   console.log("The weather is normal");
// // }
// // let hour = new Date().getHours();
// // if (hour >= 0 && hour <= 12) {
// //   console.log("Good Morning");
// // } else if (hour <= 1 && hour >= 18) {
// //   console.log("Good Afternoon");
// // } else {
// //   console.log("Good evening");
// // }

// // switch case
// let grade = "A";

// switch (grade) {
//   case "S":
//     console.log("Super grade");
//     break;
//   case "A":
//     console.log("Excellent grade");
//     break;
//   case "U":
//     console.log("Failed grade");
//     break;
//   default:
//     console.log("Unknown grade");
// }

// let amount = "4000";

// switch (true) {
//   case amount > 10000:
//     console.log("Buy Android Mobile");
//     break;
//   case amount > 60000:
//     console.log("Buy iphone");
//     break;
//   case amount >= 5000 && amount <= 10000:
//     console, log("Buy Basic Mobile");
//     break;
//   default:
//     console.log("You can't afford Mobile phone now");
// }

// // loop

// for (let i = 1; i <= 10; i++) {
//   console.log("Number= " + i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     console.log("Odd number", i);
//   }
// }
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log("Even Number", i);
//   }
// }

// While Loop
let i = 10;

while (i >= 1) {
  if (i % 2 === 0) {
    console.log("Even Number", i);
  }
  i--;
}
