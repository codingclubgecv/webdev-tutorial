// Modern JavaScript Features Examples
// ================================

// 1. Let & Const
// -------------

// Let example (Temporary Pass)
let shoppingCart = []; // Shopping cart ko let se declare kiya
shoppingCart.push("Shirt"); // Items add kar sakte hain
shoppingCart = ["Pants"]; // Puri array ko change kar sakte hain

// Const example (Permanent Pass)
const storeName = "Fashion Store"; // Store name ko const se declare kiya
// storeName = "New Store"; // Error: Const ko change nahi kar sakte

// 2. Arrow Functions
// ----------------

// Regular Function (Normal Checkout)
function calculateTotal(items) {
    return items.reduce(function(total, item) {
        return total + item.price;
    }, 0);
}

// Arrow Function (Express Checkout)
const calculateTotal = items => 
    items.reduce((total, item) => total + item.price, 0);

// 3. Template Literals
// -----------------

// Old way (String concatenation)
const name = "John";
const oldGreeting = "Hello " + name + "!";

// New way (Template Literals)
const greeting = `Hello ${name}!`;
const multiLine = `
    Hello ${name}!
    Welcome to our store.
    Your total is ₹${calculateTotal([{price: 100}])}
`;

// 4. Destructuring
// --------------

// Object Destructuring
const order = {
    items: ["Shirt", "Pants"],
    total: 100,
    customer: "John"
};

const { items, total, customer } = order;
// items = ["Shirt", "Pants"]
// total = 100
// customer = "John"

// Array Destructuring
const [firstItem, secondItem] = items;
// firstItem = "Shirt"
// secondItem = "Pants"

// 5. Spread Operator
// ----------------

// Array Spread
const cart = ["Shirt", "Pants"];
const newCart = [...cart, "Shoes"]; // ["Shirt", "Pants", "Shoes"]

// Object Spread
const user = { name: "John", age: 30 };
const updatedUser = { ...user, age: 31 }; // { name: "John", age: 31 }

// 6. Rest Parameters
// ----------------

// Function with Rest Parameters
function calculateDiscount(...prices) {
    return prices.reduce((total, price) => total + price, 0) * 0.1;
}

const discount = calculateDiscount(100, 200, 300); // 60

// 7. Default Parameters
// ------------------

// Function with Default Parameters
function createOrder(items = [], customer = "Guest") {
    return {
        items,
        customer,
        date: new Date()
    };
}

const order1 = createOrder(); // Uses defaults
const order2 = createOrder(["Shirt"], "John"); // Uses provided values

// 8. Optional Chaining
// -----------------

// Object with Optional Chaining
const store = {
    name: "Fashion Store",
    address: {
        city: "Mumbai"
    }
};

const city = store?.address?.city; // "Mumbai"
const country = store?.address?.country; // undefined (no error)

// 9. Nullish Coalescing
// ------------------

// Using Nullish Coalescing
const discount = null;
const defaultDiscount = discount ?? 10; // 10

const zeroDiscount = 0;
const finalDiscount = zeroDiscount ?? 10; // 0 (because 0 is not null/undefined)

// 10. Modern Array Methods
// ---------------------

// Array Methods
const products = [
    { name: "Shirt", price: 500, inStock: true },
    { name: "Pants", price: 1000, inStock: false },
    { name: "Shoes", price: 2000, inStock: true }
];

// Find
const availableProduct = products.find(p => p.inStock); // First in-stock product

// Filter
const inStockProducts = products.filter(p => p.inStock); // All in-stock products

// Map
const productNames = products.map(p => p.name); // ["Shirt", "Pants", "Shoes"]

// Reduce
const totalValue = products.reduce((sum, p) => sum + p.price, 0); // 3500

// 11. Modern Object Methods
// ----------------------

// Object Methods
const product = {
    name: "Shirt",
    price: 500,
    category: "Clothing"
};

// Object.keys
const keys = Object.keys(product); // ["name", "price", "category"]

// Object.values
const values = Object.values(product); // ["Shirt", 500, "Clothing"]

// Object.entries
const entries = Object.entries(product); // [["name", "Shirt"], ["price", 500], ["category", "Clothing"]]

// 12. Classes
// ---------

// Class Definition
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    // Method
    applyDiscount(discount) {
        return this.price * (1 - discount);
    }

    // Getter
    get formattedPrice() {
        return `₹${this.price}`;
    }

    // Setter
    set newPrice(price) {
        if (price > 0) {
            this.price = price;
        }
    }
}

// Class Usage
const shirt = new Product("Shirt", 500);
const discountedPrice = shirt.applyDiscount(0.1); // 450
const price = shirt.formattedPrice; // "₹500"
shirt.newPrice = 600;

// 13. Modules
// ----------

// Exporting
export class Product {
    // ... class definition
}

export function calculateTotal(items) {
    // ... function definition
}

// Importing
import { Product, calculateTotal } from './product';

// 14. Promises & Async/Await
// -----------------------

// Promise
function checkStock(productId) {
    return new Promise((resolve, reject) => {
        // Simulate API call
        setTimeout(() => {
            if (Math.random() > 0.5) {
                resolve("In stock");
            } else {
                reject("Out of stock");
            }
        }, 1000);
    });
}

// Async/Await
async function processOrder(productId) {
    try {
        const stockStatus = await checkStock(productId);
        console.log(`Product ${productId}: ${stockStatus}`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// 15. Modern Error Handling
// ----------------------

// Try/Catch with async/await
async function safeOperation() {
    try {
        const result = await someAsyncOperation();
        return result;
    } catch (error) {
        console.error("Operation failed:", error);
        throw error;
    } finally {
        console.log("Operation completed");
    }
}

// Custom Error Class
class OrderError extends Error {
    constructor(message, orderId) {
        super(message);
        this.orderId = orderId;
        this.name = "OrderError";
    }
}

// 16. Modern Features in Practice
// ----------------------------

// Shopping Cart Example
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items = [...this.items, item];
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    get total() {
        return this.items.reduce((sum, item) => sum + item.price, 0);
    }

    async checkout() {
        try {
            // Check stock for all items
            const stockChecks = this.items.map(item => 
                checkStock(item.id)
            );
            
            await Promise.all(stockChecks);
            return "Order placed successfully";
        } catch (error) {
            throw new OrderError("Checkout failed", this.items);
        }
    }
} 