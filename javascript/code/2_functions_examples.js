// JavaScript Functions - Complete Examples

// 1. Basic Functions
// =================

// Regular Function (Normal tarike se function banana)
function greet(name) {
    return `Hello ${name}!`;
}

// Arrow Function (Shortcut tarike se function banana)
const greetArrow = (name) => `Hello ${name}!`;

// Function Expression (Variable mein function store karna)
const greetExpression = function(name) {
    return `Hello ${name}!`;
};

// 2. Parameters & Arguments
// ========================

// Default Parameters (Default values set karna)
function orderFood(dish = "Pizza", quantity = 1) {
    return `Ordering ${quantity} ${dish}`;
}

// Rest Parameters (Multiple values ko ek array mein collect karna)
function placeOrder(mainDish, ...sides) {
    return `Main: ${mainDish}, Sides: ${sides.join(', ')}`;
}

// 3. Return Values
// ===============

// Single Return
function add(a, b) {
    return a + b;
}

// Multiple Returns (Early return pattern)
function checkAge(age) {
    if (age < 0) return "Invalid age";
    if (age < 18) return "Minor";
    return "Adult";
}

// 4. Function Scope
// ================

// Global Scope
const globalVar = "I'm global";

function scopeExample() {
    // Local Scope
    const localVar = "I'm local";
    console.log(globalVar); // Can access global
    console.log(localVar);  // Can access local
}

// 5. Closures
// ===========

// Basic Closure
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Practical Closure Example
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount > balance) return "Insufficient funds";
            balance -= amount;
            return balance;
        },
        checkBalance() {
            return balance;
        }
    };
}

// 6. Higher Order Functions
// ========================

// Function as Argument
function processArray(arr, processor) {
    return arr.map(processor);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);

// Function as Return Value
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

// 7. Callback Functions
// ====================

// Basic Callback
function fetchData(callback) {
    // Simulating API call
    setTimeout(() => {
        const data = "Some data";
        callback(data);
    }, 1000);
}

fetchData(data => console.log("Received:", data));

// 8. IIFE (Immediately Invoked Function Expression)
// ===============================================

// Basic IIFE
(function() {
    console.log("I run immediately!");
})();

// IIFE with parameters
(function(name) {
    console.log(`Hello ${name}!`);
})("Rahul");

// 9. Recursion
// ============

// Factorial Example
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Fibonacci Example
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 10. Error Handling in Functions
// ==============================

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.error("Error:", error.message);
}

// 11. Modern Function Features
// ===========================

// Default Parameters with Destructuring
function createUser({ name = "Guest", age = 18, role = "user" } = {}) {
    return { name, age, role };
}

// Rest Parameters with Spread Operator
function combineArrays(...arrays) {
    return [].concat(...arrays);
}

// 12. Function Methods
// ===================

// Function Methods (call, apply, bind)
const person = {
    name: "Rahul",
    greet: function(greeting) {
        return `${greeting}, ${this.name}!`;
    }
};

// Using call
console.log(person.greet.call({ name: "Amit" }, "Hello"));

// Using apply
console.log(person.greet.apply({ name: "Priya" }, ["Hi"]));

// Using bind
const boundGreet = person.greet.bind({ name: "Sneha" });
console.log(boundGreet("Hey"));

// 13. Async Functions
// ==================

// Basic Async Function
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// 14. Generator Functions
// ======================

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3 