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
// console.log(y);  //108

//  if else
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
// //   default:
// //     console.log("Unknown grade");
// // }

// // let amount = "4000";

// // switch (true) {
// //   case amount > 10000:
// //     console.log("Buy Android Mobile");
// //     break;
// //   case amount > 60000:
// //     console.log("Buy iphone");
// //     break;
// //   case amount >= 5000 && amount <= 10000:
// //     console, log("Buy Basic Mobile");
// //     break;
// //   default:
// //     console.log("You can't afford Mobile phone now");
// // }

// // // loop

// // for (let i = 1; i <= 10; i++) {
// //   console.log("Number= " + i);
// // }

// // for (let i = 1; i <= 10; i++) {
// //   if (i % 2 !== 0) {
// //     console.log("Odd number", i);
// //   }
// // }
// // for (let i = 1; i <= 10; i++) {
// //   if (i % 2 === 0) {
// //     console.log("Even Number", i);
// //   }
// // }

// // While Loop
// let i = 0;

// // while (i <= 10) {
// //   if (i % 2 === 0) {
// //     console.log("Even Number", i);
// //   }
// //   i++;
// // }
// // Do while

// do {
//   if (i % 2 === 0) {
//     console.log("even number", i);
//   }
//   i++;
// } while (i <= 10);}

// for-in
// const person = {
//   name: "Priya",
//   age: 20,
// };

// for (let key in person) {
//   console.log(key + ":", person[key]);
// }

// // for-Of
// let colors = ["red", "blue", "black"];

// for (let color of colors) {
//   console.log("color :" + color);
// }

// object

// let person = {
//   name: "Priya",
//   age: 20,
//   fvrtcolor: ["blue", "black", "Green"],
//   isAlive: true,
//   address: {
//     city: "Erode",
//     State: "TamilNadu",
//   },

//   greeting: function () {
//     let msg = `My name is ${this.name},My favrt color is ${this.fvrtcolor[1]}`;
//     console.log(msg);
//   },
// };
// person.greeting();
// Factory function

// function createPerson(name) {
//   return {
//     name,
//     greeting() {
//       let msg = `My name is ${this.name}`;
//       console.log(msg);
//     },
//   };
// }
// let priya = createPerson("priya");
// priya.greeting();

// constructor function

// function Person(name) {
//   this.name = name;
//   this.greeting = function () {
//     console.log(`My name is ${this.name}`);
//   };
// }
// let person = new Person("Priya");
// person.greeting();

// Dynamic object

// const person = {
//   name: "Priya",
// };
// person.age = 20;
// person.greeting = function () {};

// delete person.greeting;
// delete person.age;
// console.log(person);

//  constructor property

// let name = "Priya"; //->new string
// let age = 20; //->new number
// isAlive = true; //-> new Boolean
// console.log(name, age, isAlive);

// Primitive value types

// let x = 10;
// let y = x;

// x = 20;

// Reference Type

// let x1 = {
//   value: 10,
// };
// let y = x1;
// x1.value = 20;

// primitive value type

// let cartObj = {
//   value: 5,
// };
// function updateCart(cart) {
//   cart.value++;
// }
// updateCart(cartObj);
// console.log("carts available:" + cartObj);

// Enumerating properties of an object

// const user = {
//   name: "Priya",
//   getFullName() {
//     console.log(`My name is ${this.name}`);
//   },
// };

// for (let key in user) console.log(key, user[key]);

// for (let key of Object.keys(user)) {
//   console.log(key, user[key]);
// }

// for (let key of Object.entries(user)) console.log(key);

//clone

// const user = {
//   name: "Priya",
//   getFullName() {
//     console.log(`My name is ${this.name}`);
//   },
// };
// let another = user;
// console.log(another);

// // cloning using forLoop

// const user = {
//   name: "Priya",
//   getFullName() {
//     console.log(`My name is ${this.name}`);
//   },
// };
// let another = {};
// for (let key in user) {
//   another["name"] = user["name"];
//   another["key"] = user["key"];
// }

// // cloning using object.keys
// const user = {
//   name: "Priya",
//   getFullName() {
//     console.log(`My name is ${this.name}`);
//   },
// };
// let another = Object.assign({}, user);
// console.log(another);

// // Spread Operator
// const user = {
//   name: "Priya",
//   getFullName() {
//     console.log(`My name is ${this.name}`);
//   },
// };
// let another = {
//   ...user,
// };
// console.log(another);

// javascript inbuild objects

// console.log(Math.abs(-10));

// console.log(Math.ceil(0.05));
// console.log(Math.ceil(2.5));

// console.log(Math.random());
// console.log(Math.random() * (100 - 1) + 1);

// console.log(Math.round(1.5));
// console.log(Math.round(1.4));

// let marks = [85, 75, 15, 83, 20];

// let result = Math.max(...marks);
// console.log("Maximum Mark:" + result);

// let marks1 = [85, 75, 15, 83, 20];

// let result1 = Math.min(...marks1);
// console.log("Minimum Mark:" + result1);

// string object

let firstName = "Priya";
let lastName = "Sivaraj";

const firstName1 = new String("Priya");

console.log(typeof firstName);
console.log(typeof firstName1);

console.log(firstName.length);
console.log(firstName.charAt(2));

console.log(firstName.concat(" ", lastName));

console.log(firstName.includes("Pri"));
console.log(firstName.includes("hi"));

console.log(firstName.startsWith("Pr"));
console.log(firstName.endsWith("Pr"));

console.log(firstName.indexOf("y"));

console.log(firstName.repeat(3));

console.log(firstName.replace("Priya", "Anu"));

console.log(firstName.slice(1));

let sentence = "hello world";
console.log(sentence.split(" ", 1));
console.log(sentence.substring(6));

console.log(firstName.toLowerCase());
console.log(firstName.toUpperCase());

// Date Parameters

const date = Date();
const now = new Date();
const anotherDate = new Date("March 28 2002");

console.log(date);
console.log(now.getFullYear());
console.log(anotherDate.getFullYear());

// Adding element to JavaScript Array

const colors = ["Black", "Blue", "Pink"];

colors[5] = "White";

console.log(colors);

// push
colors.push("Orange", "Red");
console.log(colors);

// unshift
colors.unshift("White", "Yellow");
console.log(colors);

// splice
colors.splice(3, 4, "Green", "Brown");
console.log(colors);

// Finding elements in JavaScript Array

console.log(colors.indexOf("Yellow"));

console.log(colors.indexOf("brown") !== -1);

console.log(colors.includes("Violet"));
console.log(colors.includes("Green"));

// Find elements in reference array
// const products = [
//   { id: 1, item: "smartphones", quantity: 2 },
//   { id: 2, item: "headphones", quantity: 1 },
// ];
// let result = products.find(function (product) {
//   return product.item === "headphones";
// });
// console.log(result);

// const products = [
//   { id: 1, item: "smartphones", quantity: 2 },
//   { id: 2, item: "headphones", quantity: 1 },
// ];
// let result = products.findIndex(function (product) {
//   return product.item === "headphones";
// });
// console.log(result);

// Arrow function

const products = [
  { id: 1, item: "smartphones", quantity: 2 },
  { id: 2, item: "headphones", quantity: 1 },
];
let result = products.find((product) => {
  return product.item === "headphones";
});
console.log(result);
