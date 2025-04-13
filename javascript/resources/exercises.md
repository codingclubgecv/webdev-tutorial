# JavaScript Practice Exercises

## Exercise 1: Shopping Cart Manager 🛒
Create a shopping cart system that can:
1. Add items to cart
2. Remove items from cart
3. Calculate total price
4. Apply discounts
5. Show cart summary

```javascript
// Starter code
const cart = {
    items: [],
    addItem(item) {
        // Your code here
    },
    removeItem(itemId) {
        // Your code here
    },
    calculateTotal() {
        // Your code here
    }
};
```

## Exercise 2: Social Media Post Form 📱
Create a social media post form that:
1. Takes user input
2. Shows character count
3. Adds emojis
4. Previews the post
5. Handles form submission

```javascript
// Starter code
const postForm = {
    content: '',
    maxLength: 280,
    updateContent(text) {
        // Your code here
    },
    addEmoji(emoji) {
        // Your code here
    },
    preview() {
        // Your code here
    }
};
```

## Exercise 3: Restaurant Menu Filter 🍽️
Create a menu filter that:
1. Shows all menu items
2. Filters by category
3. Filters by price range
4. Shows vegetarian options
5. Sorts by price

```javascript
// Starter code
const menu = {
    items: [
        { name: 'Pizza', category: 'Italian', price: 300, veg: true },
        { name: 'Burger', category: 'Fast Food', price: 150, veg: false },
        // Add more items
    ],
    filterByCategory(category) {
        // Your code here
    },
    filterByPrice(min, max) {
        // Your code here
    },
    showVegetarian() {
        // Your code here
    }
};
```

## Exercise 4: Todo List with Features 📝
Enhance the basic todo list with:
1. Priority levels
2. Due dates
3. Categories
4. Search functionality
5. Statistics (completed vs pending)

```javascript
// Starter code
const todoList = {
    tasks: [],
    addTask(task) {
        // Your code here
    },
    markComplete(taskId) {
        // Your code here
    },
    getStatistics() {
        // Your code here
    }
};
```

## Exercise 5: Weather App 🌤️
Create a weather app that:
1. Shows current weather
2. Displays 5-day forecast
3. Converts temperatures
4. Shows weather icons
5. Handles location input

```javascript
// Starter code
const weatherApp = {
    currentWeather: null,
    forecast: [],
    getWeather(location) {
        // Your code here
    },
    convertTemp(temp, unit) {
        // Your code here
    },
    displayForecast() {
        // Your code here
    }
};
```

## Tips for Solving Exercises:
1. Break down problems into smaller steps
2. Use modern JavaScript features
3. Write clean, readable code
4. Add comments explaining your logic
5. Test your code with different inputs

## Bonus Challenge:
Combine any two exercises to create a more complex application. For example:
- Shopping cart with weather-based recommendations
- Todo list with social media integration
- Restaurant menu with weather-based suggestions 