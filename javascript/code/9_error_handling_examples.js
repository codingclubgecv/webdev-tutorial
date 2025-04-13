// Error Handling & Debugging Examples
// ================================

// 1. Basic Error Handling
// ---------------------

// Try-Catch Block
try {
    // Risky operation
    const result = riskyOperation();
} catch (error) {
    // Error ko handle kiya
    console.error('Error:', error.message);
}

// Finally Block
try {
    // Resource allocate kiya
    const resource = allocateResource();
} catch (error) {
    console.error('Error:', error.message);
} finally {
    // Resource ko cleanup kiya
    cleanupResource();
}

// 2. Custom Errors
// --------------

// Validation Error
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

// Network Error
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}

// Database Error
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = 'DatabaseError';
    }
}

// 3. Error Handling in Async Code
// ----------------------------

// Promise Error Handling
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new NetworkError('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('Fetch error:', error.message);
    });

// Async/Await Error Handling
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new NetworkError('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error.message);
    }
}

// 4. Debugging Tools
// ----------------

// Console Methods
console.log('Regular log'); // Normal log
console.error('Error message'); // Error log
console.warn('Warning message'); // Warning log
console.info('Information message'); // Info log
console.debug('Debug message'); // Debug log
console.table([{name: 'John', age: 30}]); // Table format mein data

// Debugger Statement
function complexFunction() {
    debugger; // Execution yahan rukega
    // Complex code
}

// 5. Performance Monitoring
// ---------------------

// Time Measurement
console.time('operation');
// Operation to measure
for (let i = 0; i < 1000000; i++) {
    Math.sqrt(i);
}
console.timeEnd('operation');

// Memory Usage
const used = process.memoryUsage();
console.log('Memory usage:', {
    heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
    heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`
});

// 6. Error Logging
// -------------

// Basic Error Logger
class ErrorLogger {
    constructor() {
        this.errors = [];
    }

    log(error) {
        this.errors.push({
            message: error.message,
            stack: error.stack,
            timestamp: new Date()
        });
        console.error('Error logged:', error.message);
    }

    getErrors() {
        return this.errors;
    }
}

// 7. Error Recovery
// --------------

// Retry Mechanism
async function retryOperation(operation, maxRetries = 3) {
    let lastError;
    for (let i = 0; i < maxRetries; i++) {
        try {
            return await operation();
        } catch (error) {
            lastError = error;
            console.log(`Attempt ${i + 1} failed:`, error.message);
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
        }
    }
    throw lastError;
}

// 8. Error Boundaries
// -----------------

// React Error Boundary
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong.</h1>;
        }
        return this.props.children;
    }
}

// 9. Input Validation
// ----------------

// Form Validation
function validateForm(data) {
    const errors = [];
    
    if (!data.name) {
        errors.push(new ValidationError('Name is required'));
    }
    
    if (!data.email) {
        errors.push(new ValidationError('Email is required'));
    } else if (!isValidEmail(data.email)) {
        errors.push(new ValidationError('Invalid email format'));
    }
    
    return errors;
}

// 10. Error Handling Patterns
// ------------------------

// Error Factory
class ErrorFactory {
    static createError(type, message) {
        switch (type) {
            case 'validation':
                return new ValidationError(message);
            case 'network':
                return new NetworkError(message);
            case 'database':
                return new DatabaseError(message);
            default:
                return new Error(message);
        }
    }
}

// 11. Debugging Best Practices
// -------------------------

// Debugging Helper
class DebugHelper {
    static logState(component, state) {
        console.log(`${component} state:`, state);
    }

    static logProps(component, props) {
        console.log(`${component} props:`, props);
    }

    static logPerformance(operation, callback) {
        console.time(operation);
        callback();
        console.timeEnd(operation);
    }
}

// 12. Error Monitoring
// -----------------

// Error Monitor
class ErrorMonitor {
    constructor() {
        this.errors = [];
        this.listeners = [];
    }

    addError(error) {
        this.errors.push(error);
        this.notifyListeners(error);
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    notifyListeners(error) {
        this.listeners.forEach(listener => listener(error));
    }
}

// 13. Performance Optimization
// ------------------------

// Performance Optimizer
class PerformanceOptimizer {
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function executedFunction(...args) {
            if (!inThrottle) {
                func(...args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// 14. Memory Management
// ------------------

// Memory Manager
class MemoryManager {
    static trackMemory() {
        const used = process.memoryUsage();
        console.log('Memory usage:', {
            rss: `${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`,
            heapTotal: `${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`,
            heapUsed: `${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`,
            external: `${Math.round(used.external / 1024 / 1024 * 100) / 100} MB`
        });
    }

    static checkMemoryLeak() {
        const initialMemory = process.memoryUsage().heapUsed;
        return {
            check: () => {
                const currentMemory = process.memoryUsage().heapUsed;
                const difference = currentMemory - initialMemory;
                console.log(`Memory difference: ${difference} bytes`);
                return difference;
            }
        };
    }
} 