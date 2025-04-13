// Real-world example: Shopping Cart

// 1. Variables (let vs const)
// Think of let as a reusable shopping bag (can change contents)
// Think of const as a fixed-price item (can't change price)

let shoppingBag = ['apples', 'bananas'];  // can add/remove items
shoppingBag.push('oranges');  // ✅ allowed
console.log('Shopping Bag:', shoppingBag);

const fixedPrice = 100;  // price can't change
// fixedPrice = 200;  // ❌ Error: Can't change const

// 2. Data Types with Real Examples
const customer = {
    name: 'Rahul',
    age: 25,
    isPremium: true,
    cart: ['laptop', 'mouse', 'keyboard'],
    address: null,
    preferences: undefined
};

// 3. Modern Array Methods (map, filter, reduce)
// Think of these as shopping operations

const products = [
    { name: 'Laptop', price: 50000 },
    { name: 'Phone', price: 25000 },
    { name: 'Headphones', price: 5000 }
];

// map: Transform each item (like adding tax)
const productsWithTax = products.map(product => ({
    ...product,
    priceWithTax: product.price * 1.18  // 18% GST
}));
console.log('Products with Tax:', productsWithTax);

// filter: Find specific items (like budget items)
const budgetItems = products.filter(product => product.price < 10000);
console.log('Budget Items:', budgetItems);

// reduce: Calculate total (like bill amount)
const totalBill = products.reduce((total, product) => total + product.price, 0);
console.log('Total Bill:', totalBill);

// 4. Template Literals (Modern way to create strings)
const receipt = `
    🛒 Shopping Receipt
    -----------------
    Customer: ${customer.name}
    Items: ${customer.cart.join(', ')}
    Total: ₹${totalBill}
    Thank you for shopping! 🎉
`;
console.log(receipt); 