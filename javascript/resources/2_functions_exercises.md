# JavaScript Functions - Practice Exercises

## Exercise 1: Restaurant Order System 🍽️
Create a restaurant order system that:
1. Takes orders with multiple items
2. Calculates total bill
3. Applies discounts
4. Handles special requests
5. Generates order summary

```javascript
const restaurant = {
    menu: {
        pizza: 200,
        burger: 150,
        pasta: 180
    },
    takeOrder(items, discount = 0) {
        // Your code here
    },
    calculateTotal(items) {
        // Your code here
    },
    applyDiscount(total, discount) {
        // Your code here
    }
};
```

## Exercise 2: Bank Account Manager 💰
Create a bank account manager that:
1. Creates accounts
2. Handles deposits and withdrawals
3. Calculates interest
4. Shows transaction history
5. Handles overdraft protection

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    let transactions = [];
    
    return {
        deposit(amount) {
            // Your code here
        },
        withdraw(amount) {
            // Your code here
        },
        calculateInterest(rate) {
            // Your code here
        },
        getStatement() {
            // Your code here
        }
    };
}
```

## Exercise 3: Social Media Post Creator 📱
Create a social media post creator that:
1. Formats text posts
2. Adds hashtags
3. Calculates post length
4. Handles mentions
5. Generates preview

```javascript
const postCreator = {
    createPost(text, hashtags = [], mentions = []) {
        // Your code here
    },
    formatText(text) {
        // Your code here
    },
    addHashtags(text, hashtags) {
        // Your code here
    },
    generatePreview(post) {
        // Your code here
    }
};
```

## Exercise 4: Weather App Functions 🌤️
Create weather app functions that:
1. Convert temperatures
2. Calculate feels-like temperature
3. Generate weather alerts
4. Format weather data
5. Handle different units

```javascript
const weatherUtils = {
    convertTemperature(temp, fromUnit, toUnit) {
        // Your code here
    },
    calculateFeelsLike(temp, humidity, windSpeed) {
        // Your code here
    },
    generateAlert(weatherData) {
        // Your code here
    },
    formatWeatherReport(data) {
        // Your code here
    }
};
```

## Exercise 5: Todo List with Advanced Features 📝
Create a todo list with advanced features:
1. Add tasks with priority
2. Set due dates
3. Add subtasks
4. Filter and sort tasks
5. Generate progress report

```javascript
const todoList = {
    tasks: [],
    addTask(title, priority = 'medium', dueDate = null) {
        // Your code here
    },
    addSubtask(taskId, subtask) {
        // Your code here
    },
    filterTasks(criteria) {
        // Your code here
    },
    generateReport() {
        // Your code here
    }
};
```

## Tips for Solving Exercises:
1. Break down complex functions into smaller ones
2. Use appropriate function types (regular, arrow, etc.)
3. Handle edge cases and errors
4. Use closures for data privacy
5. Implement proper error handling

## Example Solutions:
Here's how you might start the restaurant order system:

```javascript
const restaurant = {
    menu: {
        pizza: 200,
        burger: 150,
        pasta: 180
    },
    takeOrder(items, discount = 0) {
        const total = this.calculateTotal(items);
        const finalTotal = this.applyDiscount(total, discount);
        
        return {
            items,
            subtotal: total,
            discount,
            total: finalTotal,
            timestamp: new Date()
        };
    },
    calculateTotal(items) {
        return items.reduce((sum, item) => {
            return sum + (this.menu[item] || 0);
        }, 0);
    },
    applyDiscount(total, discount) {
        return total * (1 - discount/100);
    }
};
```

## Bonus Challenges:
1. Add input validation
2. Implement unit tests
3. Add data persistence
4. Create a user interface
5. Add error handling and logging

## Common Mistakes to Avoid:
1. Not handling edge cases
2. Forgetting to return values
3. Not using proper scoping
4. Overcomplicating functions
5. Not documenting function parameters

## Real-world Applications:
1. E-commerce checkout system
2. Banking applications
3. Social media platforms
4. Weather applications
5. Project management tools

## Debugging Tips:
1. Use console.log() strategically
2. Check function return values
3. Verify parameter types
4. Test with different inputs
5. Use browser dev tools

## Best Practices:
1. Keep functions small and focused
2. Use meaningful names
3. Document your code
4. Handle errors properly
5. Use appropriate function types 