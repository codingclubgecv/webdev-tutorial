# DOM Manipulation Practice Exercises

## Exercise 1: Interactive Shopping Cart 🛒

Create an interactive shopping cart that allows users to:
- Add items with name, price, and quantity
- Remove items
- Update quantities
- Calculate total price
- Apply discounts
- Show itemized bill

### Starter Code:
```html
<div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div class="cart-items"></div>
    <div class="cart-summary">
        <p>Total: <span id="total">₹0</span></p>
        <button id="checkout">Checkout</button>
    </div>
</div>
```

### Tips:
1. Use event delegation for dynamic elements
2. Store cart data in an array of objects
3. Update the DOM only when necessary
4. Format prices properly
5. Handle edge cases (empty cart, invalid quantities)

### Common Mistakes to Avoid:
- Not using event delegation
- Direct DOM manipulation without data structure
- Not handling edge cases
- Poor error handling
- Not updating totals correctly

## Exercise 2: Social Media Post Creator 📱

Create a social media post creator that allows users to:
- Write posts with text and emojis
- Add hashtags
- Preview the post
- Count characters
- Add mentions (@username)
- Save draft posts

### Starter Code:
```html
<div class="post-creator">
    <textarea placeholder="What's on your mind?"></textarea>
    <div class="post-preview"></div>
    <div class="post-tools">
        <button class="add-hashtag">Add Hashtag</button>
        <button class="add-mention">Add Mention</button>
        <span class="char-count">0/280</span>
    </div>
</div>
```

### Tips:
1. Use contenteditable for rich text
2. Implement character counting
3. Handle hashtag and mention detection
4. Create a preview system
5. Implement draft saving

### Common Mistakes to Avoid:
- Not handling special characters
- Poor performance with large text
- Not validating input
- Not handling line breaks properly
- Not implementing proper draft system

## Exercise 3: Interactive Quiz System 📝

Create an interactive quiz system that:
- Displays questions one by one
- Shows progress
- Calculates score
- Provides feedback
- Shows results summary
- Allows retry

### Starter Code:
```html
<div class="quiz-container">
    <div class="quiz-progress">
        <span>Question <span id="current">1</span>/<span id="total">10</span></span>
    </div>
    <div class="question-container"></div>
    <div class="quiz-controls">
        <button id="prev">Previous</button>
        <button id="next">Next</button>
    </div>
</div>
```

### Tips:
1. Store questions in an array of objects
2. Implement smooth transitions
3. Handle navigation properly
4. Calculate score in real-time
5. Provide immediate feedback

### Common Mistakes to Avoid:
- Not validating answers
- Poor navigation handling
- Not saving progress
- Not handling all question types
- Not providing proper feedback

## Exercise 4: Weather Dashboard 🌤️

Create a weather dashboard that:
- Shows current weather
- Displays forecast
- Updates in real-time
- Shows weather alerts
- Allows location search
- Toggles between units

### Starter Code:
```html
<div class="weather-dashboard">
    <div class="search-container">
        <input type="text" placeholder="Enter location">
        <button>Search</button>
    </div>
    <div class="current-weather"></div>
    <div class="weather-forecast"></div>
    <div class="weather-alerts"></div>
</div>
```

### Tips:
1. Use a weather API
2. Implement proper error handling
3. Create smooth animations
4. Handle different weather conditions
5. Implement proper unit conversion

### Common Mistakes to Avoid:
- Not handling API errors
- Poor loading states
- Not updating properly
- Not handling all weather conditions
- Not implementing proper unit conversion

## Exercise 5: Task Management System 📋

Create a task management system that:
- Creates tasks with priority
- Sets due dates
- Adds subtasks
- Filters and sorts tasks
- Shows progress
- Exports tasks

### Starter Code:
```html
<div class="task-manager">
    <div class="task-input">
        <input type="text" placeholder="New task">
        <select id="priority">
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
        <input type="date" id="due-date">
        <button>Add Task</button>
    </div>
    <div class="task-filters">
        <button class="filter" data-filter="all">All</button>
        <button class="filter" data-filter="active">Active</button>
        <button class="filter" data-filter="completed">Completed</button>
    </div>
    <div class="task-list"></div>
</div>
```

### Tips:
1. Use proper data structure
2. Implement filtering system
3. Handle dates properly
4. Create progress tracking
5. Implement proper sorting

### Common Mistakes to Avoid:
- Not using proper data structure
- Poor filtering implementation
- Not handling dates properly
- Not tracking progress correctly
- Not implementing proper sorting

## Bonus Challenges 🎯

1. Add drag-and-drop functionality to reorder tasks
2. Implement local storage for data persistence
3. Add keyboard shortcuts for common actions
4. Create a dark/light theme toggle
5. Add animations for better UX
6. Implement undo/redo functionality
7. Add search functionality
8. Create a print-friendly version
9. Add data visualization
10. Implement collaborative features

## Real-world Applications 🌍

1. E-commerce websites
2. Social media platforms
3. Online learning platforms
4. Weather applications
5. Project management tools
6. Customer relationship management
7. Content management systems
8. Data visualization dashboards
9. Interactive forms
10. Real-time collaboration tools

## Debugging Tips 🐛

1. Use console.log() strategically
2. Implement proper error handling
3. Use browser dev tools
4. Test edge cases
5. Monitor performance
6. Check memory usage
7. Validate user input
8. Test cross-browser compatibility
9. Implement proper logging
10. Use debugging tools

## Best Practices ✅

1. Use event delegation
2. Implement proper error handling
3. Optimize DOM operations
4. Use proper data structures
5. Implement proper validation
6. Follow accessibility guidelines
7. Optimize performance
8. Use proper naming conventions
9. Implement proper state management
10. Follow security best practices 