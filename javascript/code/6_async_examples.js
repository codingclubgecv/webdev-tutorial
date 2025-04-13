// Asynchronous JavaScript Examples
// =============================

// 1. Callbacks
// -----------

// Basic Callback Example
function orderFood(food, callback) {
    console.log(`${food} order diya`);
    setTimeout(() => {
        callback(`${food} ready hai`);
    }, 2000);
}

// Callback Hell (Avoid this!)
function orderMeal() {
    orderFood('Pizza', (pizza) => {
        console.log(pizza);
        orderFood('Burger', (burger) => {
            console.log(burger);
            orderFood('Coke', (coke) => {
                console.log(coke);
            });
        });
    });
}

// 2. Promises
// ----------

// Basic Promise
function orderFood(food) {
    return new Promise((resolve, reject) => {
        console.log(`${food} order diya`);
        setTimeout(() => {
            if (Math.random() > 0.1) {
                resolve(`${food} deliver ho gaya`);
            } else {
                reject('Delivery failed');
            }
        }, 2000);
    });
}

// Promise Chaining
orderFood('Pizza')
    .then(message => {
        console.log(message);
        return orderFood('Burger');
    })
    .then(message => {
        console.log(message);
        return orderFood('Coke');
    })
    .then(message => {
        console.log(message);
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Promise.all - Multiple orders ek saath
Promise.all([
    orderFood('Pizza'),
    orderFood('Burger'),
    orderFood('Coke')
])
.then(messages => {
    console.log('All orders delivered:', messages);
})
.catch(error => {
    console.error('Some orders failed:', error);
});

// 3. Async/Await
// -------------

// Basic Async Function
async function orderMeal() {
    try {
        const pizza = await orderFood('Pizza');
        console.log(pizza);
        
        const burger = await orderFood('Burger');
        console.log(burger);
        
        const coke = await orderFood('Coke');
        console.log(coke);
    } catch (error) {
        console.error('Order failed:', error);
    }
}

// Parallel Execution
async function orderMealParallel() {
    try {
        const [pizza, burger, coke] = await Promise.all([
            orderFood('Pizza'),
            orderFood('Burger'),
            orderFood('Coke')
        ]);
        console.log('All items delivered:', { pizza, burger, coke });
    } catch (error) {
        console.error('Some items failed:', error);
    }
}

// 4. Error Handling
// ---------------

// Try/Catch with Async/Await
async function handleOrder() {
    try {
        const result = await orderFood('Pizza');
        console.log('Success:', result);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        console.log('Order process complete');
    }
}

// Custom Error Class
class OrderError extends Error {
    constructor(message, item) {
        super(message);
        this.item = item;
        this.name = 'OrderError';
    }
}

// 5. Fetch API
// -----------

// Basic Fetch
async function fetchUserData() {
    try {
        const response = await fetch('https://api.example.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('User data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch with Options
async function postOrder(order) {
    try {
        const response = await fetch('https://api.example.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order)
        });
        
        if (!response.ok) {
            throw new Error('Order submission failed');
        }
        
        const result = await response.json();
        console.log('Order submitted:', result);
    } catch (error) {
        console.error('Error submitting order:', error);
    }
}

// 6. Event Loop
// ------------

// Microtasks vs Macrotasks
console.log('Start'); // Synchronous

setTimeout(() => {
    console.log('Timeout'); // Macrotask
}, 0);

Promise.resolve().then(() => {
    console.log('Promise'); // Microtask
});

console.log('End'); // Synchronous

// 7. Web Workers
// -------------

// Main Thread
const worker = new Worker('worker.js');

worker.onmessage = (event) => {
    console.log('Message from worker:', event.data);
};

worker.postMessage('Start processing');

// worker.js
onmessage = (event) => {
    console.log('Message from main thread:', event.data);
    // Heavy processing here
    postMessage('Processing complete');
};

// 8. Real-world Examples
// --------------------

// Restaurant Order System
class Restaurant {
    constructor() {
        this.orders = [];
        this.isOpen = true;
    }

    async takeOrder(customer, items) {
        if (!this.isOpen) {
            throw new Error('Restaurant is closed');
        }

        const order = {
            id: Date.now(),
            customer,
            items,
            status: 'pending'
        };

        this.orders.push(order);
        console.log(`Order ${order.id} received from ${customer}`);

        try {
            await this.processOrder(order);
            return `Order ${order.id} is ready`;
        } catch (error) {
            order.status = 'failed';
            throw error;
        }
    }

    async processOrder(order) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.1) {
                    order.status = 'completed';
                    resolve();
                } else {
                    reject('Cooking failed');
                }
            }, 2000);
        });
    }
}

// Usage
const restaurant = new Restaurant();

async function placeOrder() {
    try {
        const result = await restaurant.takeOrder('John', ['Pizza', 'Coke']);
        console.log(result);
    } catch (error) {
        console.error('Order failed:', error);
    }
}

// 9. Advanced Patterns
// ------------------

// Retry Pattern
async function retryOperation(operation, retries = 3) {
    for (let i = 0; i < retries; i++) {
        try {
            return await operation();
        } catch (error) {
            if (i === retries - 1) throw error;
            console.log(`Retry ${i + 1} failed, trying again...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// Timeout Pattern
async function withTimeout(promise, timeout) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), timeout);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

// 10. Best Practices
// -----------------

// Always use try/catch with async/await
async function safeOperation() {
    try {
        const result = await someAsyncOperation();
        return result;
    } catch (error) {
        console.error('Operation failed:', error);
        throw error; // Re-throw if needed
    }
}

// Use Promise.all for parallel operations
async function parallelOperations() {
    const [result1, result2] = await Promise.all([
        operation1(),
        operation2()
    ]);
    return { result1, result2 };
}

// Handle cleanup with finally
async function withCleanup() {
    let resource;
    try {
        resource = await acquireResource();
        return await useResource(resource);
    } finally {
        if (resource) {
            await cleanupResource(resource);
        }
    }
} 