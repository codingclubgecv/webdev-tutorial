# Browser APIs Practice Exercises

## Exercise 1: Offline Todo App
Create a Todo application that works offline using Service Workers and IndexedDB.

### Requirements:
- Store todos in IndexedDB
- Implement offline functionality with Service Worker
- Sync data when online
- Use modern storage APIs

### Starter Code:
```javascript
class TodoApp {
    constructor() {
        this.db = null;
        this.initDB();
    }

    async initDB() {
        // TODO: Initialize IndexedDB
    }

    async addTodo(todo) {
        // TODO: Add todo to IndexedDB
    }

    async getTodos() {
        // TODO: Retrieve todos from IndexedDB
    }

    async updateTodo(id, updates) {
        // TODO: Update todo in IndexedDB
    }

    async deleteTodo(id) {
        // TODO: Delete todo from IndexedDB
    }
}
```

### Tips:
- Use IndexedDB for persistent storage
- Implement Service Worker for offline support
- Handle sync conflicts
- Use proper error handling

### Common Mistakes:
- Not handling IndexedDB version changes
- Forgetting to close database connections
- Not implementing proper error handling
- Not testing offline functionality

## Exercise 2: Location-Based Weather App
Create a weather application that uses geolocation and local storage.

### Requirements:
- Get user's location
- Fetch weather data
- Cache weather data
- Show weather history

### Starter Code:
```javascript
class WeatherApp {
    constructor() {
        this.apiKey = 'YOUR_API_KEY';
        this.cache = new Map();
    }

    async getLocation() {
        // TODO: Get user's location
    }

    async getWeather(latitude, longitude) {
        // TODO: Fetch weather data
    }

    async cacheWeather(location, data) {
        // TODO: Cache weather data
    }

    async getWeatherHistory() {
        // TODO: Get weather history
    }
}
```

### Tips:
- Use geolocation API
- Implement proper error handling
- Cache weather data
- Handle permissions

### Common Mistakes:
- Not handling geolocation errors
- Not checking permissions
- Not implementing proper caching
- Not handling API rate limits

## Exercise 3: Media Player
Create a media player with advanced features using Media APIs.

### Requirements:
- Play/pause audio/video
- Handle multiple formats
- Show progress
- Implement playlists

### Starter Code:
```javascript
class MediaPlayer {
    constructor() {
        this.currentMedia = null;
        this.playlist = [];
        this.currentIndex = 0;
    }

    async loadMedia(url) {
        // TODO: Load media file
    }

    play() {
        // TODO: Play media
    }

    pause() {
        // TODO: Pause media
    }

    next() {
        // TODO: Play next item
    }

    previous() {
        // TODO: Play previous item
    }
}
```

### Tips:
- Use Media APIs
- Handle different formats
- Implement proper error handling
- Show progress and buffering

### Common Mistakes:
- Not handling format compatibility
- Not implementing proper error handling
- Not showing loading states
- Not handling media errors

## Exercise 4: Real-time Chat App
Create a chat application using WebSocket and Notification APIs.

### Requirements:
- Real-time messaging
- Desktop notifications
- Message history
- Online status

### Starter Code:
```javascript
class ChatApp {
    constructor() {
        this.socket = null;
        this.connected = false;
        this.messages = [];
    }

    connect() {
        // TODO: Connect to WebSocket
    }

    sendMessage(message) {
        // TODO: Send message
    }

    showNotification(message) {
        // TODO: Show notification
    }

    handleMessage(message) {
        // TODO: Handle incoming message
    }
}
```

### Tips:
- Use WebSocket for real-time communication
- Implement proper error handling
- Handle connection states
- Use Notification API

### Common Mistakes:
- Not handling connection errors
- Not implementing reconnection logic
- Not handling message ordering
- Not implementing proper security

## Exercise 5: File Manager
Create a file manager using File API and Drag & Drop.

### Requirements:
- Upload files
- Show file information
- Drag and drop support
- Progress tracking

### Starter Code:
```javascript
class FileManager {
    constructor() {
        this.files = [];
        this.uploadQueue = [];
    }

    handleDrop(event) {
        // TODO: Handle file drop
    }

    async uploadFile(file) {
        // TODO: Upload file
    }

    showProgress(file, progress) {
        // TODO: Show upload progress
    }

    getFileInfo(file) {
        // TODO: Get file information
    }
}
```

### Tips:
- Use File API
- Implement Drag & Drop
- Show upload progress
- Handle large files

### Common Mistakes:
- Not handling file size limits
- Not showing proper progress
- Not implementing proper error handling
- Not handling file types

## Bonus Challenges

### 1. Advanced Features
- Implement file compression
- Add file preview
- Implement file sharing
- Add search functionality

### 2. Real-world Applications
- Create a document editor
- Build a photo gallery
- Develop a video streaming app
- Make a file sharing platform

### 3. Debugging Tips
- Use browser dev tools
- Check network requests
- Monitor memory usage
- Test offline functionality

### 4. Best Practices
- Implement proper error handling
- Use appropriate APIs
- Handle permissions
- Optimize performance 