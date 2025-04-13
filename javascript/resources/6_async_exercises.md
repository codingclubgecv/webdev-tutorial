# Asynchronous JavaScript Practice Exercises

## Exercise 1: Food Delivery System 🍕

Create a food delivery system that:
- Takes orders from multiple restaurants
- Tracks delivery status
- Handles delivery failures
- Retries failed deliveries
- Shows real-time updates

### Starter Code:
```javascript
class FoodDelivery {
    constructor() {
        this.orders = [];
        this.deliveryAgents = [];
    }

    async placeOrder(restaurant, items) {
        // Implement order placement
    }

    async trackDelivery(orderId) {
        // Implement delivery tracking
    }
}
```

### Tips:
1. Use async/await for clean code
2. Implement proper error handling
3. Use Promise.all for parallel operations
4. Add retry logic for failed deliveries
5. Implement real-time updates

### Common Mistakes to Avoid:
- Not handling errors properly
- Not using async/await correctly
- Not implementing proper retry logic
- Not handling race conditions
- Not cleaning up resources

## Exercise 2: Weather Dashboard 🌤️

Create a weather dashboard that:
- Fetches weather data from multiple sources
- Shows real-time updates
- Handles API failures
- Caches data
- Shows loading states

### Starter Code:
```javascript
class WeatherDashboard {
    constructor() {
        this.weatherData = {};
        this.cache = new Map();
    }

    async fetchWeather(city) {
        // Implement weather fetching
    }

    async updateDashboard() {
        // Implement dashboard updates
    }
}
```

### Tips:
1. Use Fetch API with proper error handling
2. Implement data caching
3. Show loading states
4. Handle API rate limits
5. Update UI smoothly

### Common Mistakes to Avoid:
- Not handling API errors
- Not implementing proper caching
- Not showing loading states
- Not handling rate limits
- Not updating UI properly

## Exercise 3: Chat Application 💬

Create a chat application that:
- Sends and receives messages
- Shows typing indicators
- Handles connection issues
- Implements message queuing
- Shows message status

### Starter Code:
```javascript
class ChatApp {
    constructor() {
        this.messages = [];
        this.connection = null;
    }

    async sendMessage(message) {
        // Implement message sending
    }

    async receiveMessage() {
        // Implement message receiving
    }
}
```

### Tips:
1. Use WebSocket for real-time communication
2. Implement message queuing
3. Handle connection issues
4. Show typing indicators
5. Implement proper error handling

### Common Mistakes to Avoid:
- Not handling connection issues
- Not implementing message queuing
- Not showing proper status
- Not handling errors
- Not cleaning up resources

## Exercise 4: File Upload System 📁

Create a file upload system that:
- Uploads multiple files
- Shows upload progress
- Handles large files
- Implements retry logic
- Shows upload status

### Starter Code:
```javascript
class FileUploader {
    constructor() {
        this.uploads = new Map();
        this.retryCount = 3;
    }

    async uploadFile(file) {
        // Implement file upload
    }

    async trackProgress(uploadId) {
        // Implement progress tracking
    }
}
```

### Tips:
1. Use FormData for file uploads
2. Implement progress tracking
3. Handle large files
4. Add retry logic
5. Show proper status

### Common Mistakes to Avoid:
- Not handling large files
- Not showing progress
- Not implementing retry logic
- Not handling errors
- Not cleaning up resources

## Exercise 5: Task Scheduler ⏰

Create a task scheduler that:
- Schedules tasks with priorities
- Handles task dependencies
- Implements retry logic
- Shows task status
- Handles task failures

### Starter Code:
```javascript
class TaskScheduler {
    constructor() {
        this.tasks = [];
        this.runningTasks = new Set();
    }

    async scheduleTask(task) {
        // Implement task scheduling
    }

    async runTask(taskId) {
        // Implement task execution
    }
}
```

### Tips:
1. Use Promise.all for parallel tasks
2. Implement proper error handling
3. Handle task dependencies
4. Add retry logic
5. Show task status

### Common Mistakes to Avoid:
- Not handling task dependencies
- Not implementing proper error handling
- Not showing task status
- Not handling race conditions
- Not cleaning up resources

## Bonus Challenges 🎯

1. Implement WebSocket reconnection
2. Add offline support
3. Implement data synchronization
4. Add real-time collaboration
5. Implement undo/redo
6. Add error recovery
7. Implement rate limiting
8. Add performance monitoring
9. Implement data validation
10. Add security features

## Real-world Applications 🌍

1. E-commerce platforms
2. Social media applications
3. Real-time collaboration tools
4. IoT applications
5. Financial systems
6. Gaming applications
7. Healthcare systems
8. Logistics systems
9. Communication platforms
10. Data processing systems

## Debugging Tips 🐛

1. Use console.log() strategically
2. Implement proper error handling
3. Use browser dev tools
4. Monitor network requests
5. Check memory usage
6. Test edge cases
7. Use debugging tools
8. Implement logging
9. Monitor performance
10. Test error scenarios

## Best Practices ✅

1. Use async/await for clean code
2. Implement proper error handling
3. Use Promise.all for parallel operations
4. Handle race conditions
5. Clean up resources
6. Show loading states
7. Implement retry logic
8. Use proper data structures
9. Follow security practices
10. Optimize performance 