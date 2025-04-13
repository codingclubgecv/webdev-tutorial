// JavaScript Arrays & Objects - Complete Examples

// 1. Basic Arrays
// ==============

// Array create karna (Creating arrays)
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "two", true, { name: "Rahul" }];

// Array access karna (Accessing arrays)
console.log(fruits[0]);    // apple
console.log(fruits.length); // 3

// 2. Array Methods
// ===============

// Basic Methods
fruits.push("mango");     // Add at end
fruits.pop();            // Remove from end
fruits.unshift("kiwi");  // Add at start
fruits.shift();          // Remove from start

// Modern Methods
const prices = fruits.map(fruit => ({
    name: fruit,
    price: Math.random() * 100
}));

const expensive = prices.filter(item => item.price > 50);
const total = prices.reduce((sum, item) => sum + item.price, 0);

// 3. Array Searching
// =================

// Find methods
const found = fruits.find(fruit => fruit === "apple");
const index = fruits.findIndex(fruit => fruit === "banana");
const exists = fruits.includes("orange");

// 4. Array Sorting
// ===============

// Sort methods
const sortedFruits = [...fruits].sort();
const sortedPrices = [...prices].sort((a, b) => a.price - b.price);
const reversed = [...fruits].reverse();

// 5. Basic Objects
// ===============

// Object create karna (Creating objects)
const person = {
    name: "Rahul",
    age: 25,
    city: "Mumbai",
    skills: ["JavaScript", "React", "Node.js"]
};

// Object access karna (Accessing objects)
console.log(person.name);      // Rahul
console.log(person["age"]);    // 25
console.log(person.skills[0]); // JavaScript

// 6. Object Methods
// ================

// Object methods
const keys = Object.keys(person);
const values = Object.values(person);
const entries = Object.entries(person);

// Object copy karna (Copying objects)
const personCopy = { ...person };
const deepCopy = JSON.parse(JSON.stringify(person));

// 7. Object Manipulation
// =====================

// Add/Remove properties
person.job = "Developer";
delete person.age;

// Update properties
person.name = "Amit";
person.skills.push("Python");

// 8. Nested Objects
// ================

// Nested objects
const company = {
    name: "Tech Corp",
    employees: [
        {
            id: 1,
            name: "Rahul",
            department: "IT"
        },
        {
            id: 2,
            name: "Priya",
            department: "HR"
        }
    ],
    departments: {
        IT: {
            head: "Amit",
            budget: 1000000
        },
        HR: {
            head: "Sneha",
            budget: 500000
        }
    }
};

// 9. Modern Features
// =================

// Destructuring
const { name, age } = person;
const [first, second, ...rest] = fruits;

// Spread operator
const newFruits = [...fruits, "pineapple"];
const newPerson = { ...person, age: 26 };

// Optional chaining
const departmentHead = company.departments?.IT?.head;
const employeeName = company.employees?.[0]?.name;

// 10. Array of Objects
// ===================

// Array of objects
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        inStock: true
    },
    {
        id: 2,
        name: "Phone",
        price: 25000,
        inStock: false
    }
];

// Operations on array of objects
const inStockProducts = products.filter(p => p.inStock);
const totalValue = products.reduce((sum, p) => sum + p.price, 0);
const productNames = products.map(p => p.name);

// 11. Object Methods
// =================

// Object methods
const product = {
    name: "Laptop",
    price: 50000,
    getDiscountedPrice(discount) {
        return this.price * (1 - discount/100);
    },
    setPrice(newPrice) {
        this.price = newPrice;
    }
};

// 12. Object Prototypes
// ====================

// Prototype methods
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.getDiscountedPrice = function(discount) {
    return this.price * (1 - discount/100);
};

const laptop = new Product("Laptop", 50000);

// 13. Modern Object Features
// =========================

// Computed properties
const propName = "color";
const car = {
    [propName]: "red",
    ["get" + propName]() {
        return this[propName];
    }
};

// Object shorthand
const name = "Rahul";
const age = 25;
const person2 = { name, age };

// 14. Array and Object Combinations
// ================================

// Complex data structure
const store = {
    name: "Tech Store",
    products: [
        {
            id: 1,
            name: "Laptop",
            price: 50000,
            specs: {
                ram: "16GB",
                storage: "512GB"
            }
        }
    ],
    customers: [
        {
            id: 1,
            name: "Rahul",
            orders: [
                {
                    id: 101,
                    items: [1, 2],
                    total: 75000
                }
            ]
        }
    ]
}; 