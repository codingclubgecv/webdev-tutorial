# JavaScript Cheat Sheet - Hinglish Edition 🚀

## Variables & Data Types
```javascript
// Variables declare karna
let name = "Rahul";     // Change ho sakta hai
const age = 25;         // Change nahi ho sakta

// Data Types
const types = {
    string: "Hello",    // Text
    number: 42,         // Number
    boolean: true,      // True/False
    array: [1, 2, 3],   // List of items
    object: {           // Collection of properties
        name: "Rahul",
        age: 25
    }
};
```

## Modern Array Methods
```javascript
const numbers = [1, 2, 3, 4, 5];

// map() - Har item pe operation
const doubled = numbers.map(num => num * 2);

// filter() - Specific items dhundna
const evens = numbers.filter(num => num % 2 === 0);

// reduce() - Total calculate karna
const sum = numbers.reduce((total, num) => total + num, 0);

// find() - Ek item dhundna
const firstEven = numbers.find(num => num % 2 === 0);
```

## Objects & Destructuring
```javascript
const user = {
    name: "Rahul",
    age: 25,
    address: {
        city: "Mumbai",
        country: "India"
    }
};

// Destructuring - Object se values nikalna
const { name, age } = user;
const { city } = user.address;

// Spread Operator - Objects/Arrays ko copy karna
const newUser = { ...user, age: 26 };
const newNumbers = [...numbers, 6];
```

## DOM Manipulation
```javascript
// Elements select karna
const button = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');

// Event Listeners
button.addEventListener('click', () => {
    // Code yahan aayega
});

// Element create karna
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';

// Element add karna
document.body.appendChild(newDiv);
```

## Modern Features
```javascript
// Template Literals
const greeting = `Hello ${name}!`;

// Arrow Functions
const add = (a, b) => a + b;

// Optional Chaining
const city = user?.address?.city ?? 'Unknown';

// Nullish Coalescing
const age = user.age ?? 18;
```

## Common Array Operations
```javascript
const fruits = ['apple', 'banana', 'orange'];

// Add items
fruits.push('mango');           // End mein add
fruits.unshift('kiwi');         // Start mein add

// Remove items
fruits.pop();                   // Last item remove
fruits.shift();                 // First item remove

// Slice & Splice
const someFruits = fruits.slice(1, 3);  // Copy items
fruits.splice(1, 2);                    // Remove items
```

## Object Methods
```javascript
const person = {
    name: "Rahul",
    greet() {
        return `Hello ${this.name}!`;
    }
};

// Object se keys/values nikalna
const keys = Object.keys(person);
const values = Object.values(person);

// Object ko merge karna
const newPerson = Object.assign({}, person, { age: 25 });
```

## Tips & Tricks
1. `console.log()` - Debugging ke liye
2. `typeof` - Data type check karna
3. `Array.isArray()` - Array check karna
4. `JSON.stringify()` - Object ko string mein convert karna
5. `JSON.parse()` - String ko object mein convert karna

## Common Errors & Solutions
1. `undefined` - Variable declare nahi hua
2. `null` - Value intentionally empty hai
3. `NaN` - Invalid number operation
4. `TypeError` - Wrong data type use hua
5. `ReferenceError` - Variable access nahi ho sakta 