# JavaScript Basics - Practice Exercises

## Exercise 1: Temperature Converter 🌡️
Create a temperature converter that can:
1. Convert Celsius to Fahrenheit
2. Convert Fahrenheit to Celsius
3. Handle invalid inputs
4. Show appropriate messages

```javascript
const temperatureConverter = {
    celsiusToFahrenheit(celsius) {
        // Your code here
    },
    fahrenheitToCelsius(fahrenheit) {
        // Your code here
    },
    convert(temp, unit) {
        // Your code here
    }
};
```

## Exercise 2: Shopping Cart Calculator 🛒
Create a shopping cart calculator that:
1. Adds items with prices
2. Calculates total
3. Applies discounts
4. Shows itemized bill
5. Handles tax calculation

```javascript
const shoppingCart = {
    items: [],
    addItem(name, price) {
        // Your code here
    },
    calculateTotal() {
        // Your code here
    },
    applyDiscount(percentage) {
        // Your code here
    }
};
```

## Exercise 3: Student Grade Calculator 📚
Create a grade calculator that:
1. Takes marks for different subjects
2. Calculates average
3. Assigns grades (A, B, C, etc.)
4. Shows pass/fail status
5. Displays detailed report

```javascript
const gradeCalculator = {
    subjects: {},
    addMarks(subject, marks) {
        // Your code here
    },
    calculateAverage() {
        // Your code here
    },
    assignGrade() {
        // Your code here
    }
};
```

## Exercise 4: Simple ATM Machine 💰
Create an ATM simulation that:
1. Checks account balance
2. Allows withdrawals
3. Allows deposits
4. Shows transaction history
5. Handles insufficient funds

```javascript
const atm = {
    balance: 1000,
    history: [],
    withdraw(amount) {
        // Your code here
    },
    deposit(amount) {
        // Your code here
    },
    showHistory() {
        // Your code here
    }
};
```

## Exercise 5: Todo List with Priority 📝
Create a todo list that:
1. Adds tasks with priority
2. Marks tasks as complete
3. Shows tasks by priority
4. Allows task deletion
5. Shows statistics

```javascript
const todoList = {
    tasks: [],
    addTask(task, priority) {
        // Your code here
    },
    completeTask(taskId) {
        // Your code here
    },
    showByPriority() {
        // Your code here
    }
};
```

## Tips for Solving Exercises:
1. Break down the problem into smaller steps
2. Use appropriate data types
3. Handle edge cases
4. Add comments explaining your logic
5. Test with different inputs

## Example Solutions:
Here's how you might start the temperature converter:

```javascript
const temperatureConverter = {
    celsiusToFahrenheit(celsius) {
        return (celsius * 9/5) + 32;
    },
    fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5/9;
    },
    convert(temp, unit) {
        if (unit === 'C') {
            return this.celsiusToFahrenheit(temp);
        } else if (unit === 'F') {
            return this.fahrenheitToCelsius(temp);
        } else {
            throw new Error('Invalid unit');
        }
    }
};
```

## Bonus Challenges:
1. Add input validation
2. Create a user interface
3. Add error handling
4. Implement unit tests
5. Add data persistence

## Common Mistakes to Avoid:
1. Not checking for invalid inputs
2. Using == instead of ===
3. Not handling edge cases
4. Forgetting to initialize variables
5. Not using appropriate data types 