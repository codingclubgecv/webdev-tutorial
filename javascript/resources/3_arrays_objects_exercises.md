# JavaScript Arrays & Objects - Practice Exercises

## Exercise 1: E-commerce Cart System 🛒
Create an e-commerce cart system that:
1. Adds/removes products
2. Calculates total
3. Applies discounts
4. Shows itemized bill
5. Handles stock management

```javascript
const cart = {
    items: [],
    addItem(product) {
        // Your code here
    },
    removeItem(productId) {
        // Your code here
    },
    calculateTotal() {
        // Your code here
    },
    applyDiscount(code) {
        // Your code here
    }
};
```

## Exercise 2: Social Media Profile Manager 📱
Create a social media profile manager that:
1. Stores user profile
2. Manages friends list
3. Handles posts
4. Tracks likes/comments
5. Shows activity feed

```javascript
const socialProfile = {
    user: {
        name: "",
        bio: "",
        friends: []
    },
    posts: [],
    addPost(content) {
        // Your code here
    },
    addFriend(friend) {
        // Your code here
    },
    getFeed() {
        // Your code here
    }
};
```

## Exercise 3: Library Management System 📚
Create a library management system that:
1. Tracks books
2. Manages members
3. Handles checkouts
4. Calculates fines
5. Shows availability

```javascript
const library = {
    books: [],
    members: [],
    checkouts: [],
    addBook(book) {
        // Your code here
    },
    checkoutBook(bookId, memberId) {
        // Your code here
    },
    calculateFine(checkoutId) {
        // Your code here
    }
};
```

## Exercise 4: Restaurant Menu System 🍽️
Create a restaurant menu system that:
1. Displays menu items
2. Handles categories
3. Manages prices
4. Shows specials
5. Tracks availability

```javascript
const menu = {
    categories: {},
    items: [],
    addCategory(name) {
        // Your code here
    },
    addItem(item) {
        // Your code here
    },
    updatePrice(itemId, newPrice) {
        // Your code here
    },
    getAvailableItems() {
        // Your code here
    }
};
```

## Exercise 5: Student Grade Tracker 📊
Create a student grade tracker that:
1. Stores student info
2. Tracks subjects
3. Calculates grades
4. Shows performance
5. Generates reports

```javascript
const gradeTracker = {
    students: [],
    subjects: [],
    grades: {},
    addStudent(student) {
        // Your code here
    },
    addGrade(studentId, subject, grade) {
        // Your code here
    },
    calculateAverage(studentId) {
        // Your code here
    },
    generateReport(studentId) {
        // Your code here
    }
};
```

## Tips for Solving Exercises:
1. Use appropriate data structures
2. Implement proper validation
3. Handle edge cases
4. Use modern array/object methods
5. Keep code organized

## Example Solutions:
Here's how you might start the e-commerce cart:

```javascript
const cart = {
    items: [],
    addItem(product) {
        const existingItem = this.items.find(item => item.id === product.id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({ ...product, quantity: 1 });
        }
    },
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    },
    calculateTotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    },
    applyDiscount(code) {
        const discounts = {
            "WELCOME10": 0.1,
            "SUMMER20": 0.2
        };
        return this.calculateTotal() * (1 - (discounts[code] || 0));
    }
};
```

## Bonus Challenges:
1. Add data persistence
2. Implement search functionality
3. Add sorting options
4. Create a user interface
5. Add error handling

## Common Mistakes to Avoid:
1. Not handling null/undefined
2. Forgetting to validate input
3. Not using proper data structures
4. Overcomplicating solutions
5. Not documenting code

## Real-world Applications:
1. Shopping websites
2. Social media platforms
3. Library systems
4. Restaurant management
5. School management systems

## Debugging Tips:
1. Use console.log() for arrays/objects
2. Check array lengths
3. Verify object properties
4. Test with different inputs
5. Use browser dev tools

## Best Practices:
1. Use meaningful names
2. Keep data structures simple
3. Implement proper validation
4. Handle errors gracefully
5. Document your code 