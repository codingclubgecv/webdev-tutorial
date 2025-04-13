// JavaScript Basics - Complete Examples

// 1. Variables & Data Types
// ========================

// Variables declare karna (Creating variables)
let name = "Rahul";     // String type
let age = 25;           // Number type
let isStudent = true;   // Boolean type
let skills = null;      // Null type
let job;                // Undefined type

// Constants (Values that can't change)
const PI = 3.14;
const MAX_USERS = 100;

// Objects (Collection of properties)
const person = {
    name: "Rahul",
    age: 25,
    isStudent: true,
    address: {
        city: "Mumbai",
        country: "India"
    }
};

// Arrays (List of items)
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];

// 2. Operators
// ============

// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b);  // Addition: 15
console.log(a - b);  // Subtraction: 5
console.log(a * b);  // Multiplication: 50
console.log(a / b);  // Division: 2
console.log(a % b);  // Modulus: 0

// Comparison Operators
console.log(a > b);   // Greater than: true
console.log(a < b);   // Less than: false
console.log(a >= b);  // Greater than or equal: true
console.log(a <= b);  // Less than or equal: false
console.log(a === b); // Strict equality: false
console.log(a !== b); // Strict inequality: true

// Logical Operators
let hasMoney = true;
let hasTime = false;
console.log(hasMoney && hasTime);   // AND: false
console.log(hasMoney || hasTime);   // OR: true
console.log(!hasMoney);             // NOT: false

// 3. Control Flow
// ==============

// if-else statement
let temperature = 25;
if (temperature > 30) {
    console.log("It's hot outside!");
} else if (temperature > 20) {
    console.log("It's pleasant outside!");
} else {
    console.log("It's cold outside!");
}

// switch statement
let day = "Monday";
switch(day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("Weekend is coming!");
        break;
    default:
        console.log("Regular day");
}

// Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(`Count: ${i}`);
}

// while loop
let count = 0;
while (count < 5) {
    console.log(`While count: ${count}`);
    count++;
}

// do-while loop
let num = 0;
do {
    console.log(`Do-while count: ${num}`);
    num++;
} while (num < 5);

// 4. Type Conversion
// =================

// String to Number
let strNum = "42";
let numFromStr = Number(strNum);  // 42
let numFromStr2 = +strNum;        // 42 (unary plus operator)

// Number to String
let numToStr = 42;
let strFromNum = String(numToStr);  // "42"
let strFromNum2 = numToStr.toString();  // "42"

// Boolean Conversion
let truthy = Boolean(1);      // true
let falsy = Boolean(0);       // false
let truthy2 = !!1;           // true (double negation)

// 5. Common Operations
// ===================

// String Operations
let firstName = "Rahul";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;  // Concatenation
let templateLiteral = `Hello ${firstName}!`;  // Template literal

// Array Operations
fruits.push("mango");        // Add to end
fruits.pop();               // Remove from end
fruits.unshift("kiwi");     // Add to beginning
fruits.shift();             // Remove from beginning
let sliced = fruits.slice(1, 3);  // Get portion
fruits.splice(1, 2);        // Remove items

// Object Operations
person.email = "rahul@example.com";  // Add property
delete person.age;                    // Remove property
let keys = Object.keys(person);      // Get keys
let values = Object.values(person);  // Get values

// 6. Error Handling
// ================

try {
    // Code that might throw error
    let result = 10 / 0;
    if (!isFinite(result)) {
        throw new Error("Division by zero");
    }
} catch (error) {
    console.log("Error occurred:", error.message);
} finally {
    console.log("This always runs");
}

// 7. Debugging Tips
// ================

// Console logging
console.log("Regular log");
console.info("Information");
console.warn("Warning");
console.error("Error");

// Debugging with breakpoints
debugger;  // Execution will pause here if dev tools are open

// Type checking
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof {});         // "object"
console.log(typeof []);         // "object"
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined" 