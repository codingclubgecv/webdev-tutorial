# Security Best Practices Practice Exercises

## Exercise 1: Secure Authentication System
Create a secure authentication system with proper password handling and session management.

### Requirements:
- Password hashing and verification
- Session management
- Rate limiting
- Secure cookie handling

### Starter Code:
```javascript
class AuthSystem {
    constructor() {
        this.sessions = new Map();
        this.rateLimiter = new RateLimiter(5, 60 * 1000); // 5 attempts per minute
    }

    async register(user) {
        // TODO: Implement secure registration
    }

    async login(credentials) {
        // TODO: Implement secure login
    }

    async logout(sessionId) {
        // TODO: Implement secure logout
    }

    validateSession(sessionId) {
        // TODO: Implement session validation
    }
}
```

### Tips:
- Use proper password hashing
- Implement session expiration
- Add rate limiting
- Use secure cookies

### Common Mistakes:
- Storing plain text passwords
- Not expiring sessions
- Not implementing rate limiting
- Using insecure cookies

## Exercise 2: Input Validation System
Create a comprehensive input validation system that handles various types of input.

### Requirements:
- Validate different input types
- Sanitize user input
- Handle file uploads
- Prevent XSS attacks

### Starter Code:
```javascript
class InputValidator {
    constructor() {
        this.rules = new Map();
    }

    addRule(field, rule) {
        // TODO: Add validation rule
    }

    validate(data) {
        // TODO: Validate input data
    }

    sanitize(input) {
        // TODO: Sanitize input
    }

    validateFile(file) {
        // TODO: Validate file upload
    }
}
```

### Tips:
- Use strict validation rules
- Implement proper sanitization
- Validate file types and sizes
- Prevent XSS attacks

### Common Mistakes:
- Not validating all inputs
- Not sanitizing properly
- Not checking file types
- Not preventing XSS

## Exercise 3: API Security System
Create a secure API system with proper authentication and rate limiting.

### Requirements:
- API key authentication
- Rate limiting
- Request validation
- Error handling

### Starter Code:
```javascript
class APISecurity {
    constructor() {
        this.apiKeys = new Map();
        this.rateLimiter = new RateLimiter(100, 60 * 1000); // 100 requests per minute
    }

    authenticateRequest(request) {
        // TODO: Authenticate API request
    }

    validateRequest(request) {
        // TODO: Validate request data
    }

    handleError(error) {
        // TODO: Handle API errors
    }

    checkRateLimit(apiKey) {
        // TODO: Check rate limit
    }
}
```

### Tips:
- Use secure API keys
- Implement proper rate limiting
- Validate all requests
- Handle errors securely

### Common Mistakes:
- Not validating API keys
- Not implementing rate limits
- Not validating requests
- Exposing sensitive errors

## Exercise 4: File Upload System
Create a secure file upload system with proper validation and storage.

### Requirements:
- File type validation
- Size limits
- Secure storage
- Virus scanning

### Starter Code:
```javascript
class FileUploadSystem {
    constructor() {
        this.allowedTypes = ['image/jpeg', 'image/png'];
        this.maxSize = 5 * 1024 * 1024; // 5MB
    }

    async uploadFile(file) {
        // TODO: Implement secure file upload
    }

    validateFile(file) {
        // TODO: Validate file
    }

    scanFile(file) {
        // TODO: Scan for viruses
    }

    storeFile(file) {
        // TODO: Store file securely
    }
}
```

### Tips:
- Validate file types
- Check file sizes
- Use secure storage
- Implement virus scanning

### Common Mistakes:
- Not validating file types
- Not checking file sizes
- Using insecure storage
- Not scanning for viruses

## Exercise 5: Security Headers System
Create a system to manage and enforce security headers.

### Requirements:
- Set security headers
- Configure CORS
- Handle CSP
- Manage HSTS

### Starter Code:
```javascript
class SecurityHeaders {
    constructor() {
        this.headers = {
            'Content-Security-Policy': "default-src 'self'",
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
        };
    }

    setHeaders(response) {
        // TODO: Set security headers
    }

    configureCORS(options) {
        // TODO: Configure CORS
    }

    updateCSP(policy) {
        // TODO: Update CSP
    }

    manageHSTS(settings) {
        // TODO: Manage HSTS
    }
}
```

### Tips:
- Use proper security headers
- Configure CORS correctly
- Set up CSP properly
- Manage HSTS effectively

### Common Mistakes:
- Not setting security headers
- Misconfiguring CORS
- Not setting up CSP
- Not managing HSTS

## Bonus Challenges

### 1. Advanced Features
- Implement two-factor authentication
- Add biometric authentication
- Create audit logging
- Implement security monitoring

### 2. Real-world Applications
- Build a secure payment system
- Create a secure chat application
- Develop a secure file sharing system
- Make a secure voting system

### 3. Security Testing
- Implement penetration testing
- Add security scanning
- Create vulnerability assessment
- Perform security audits

### 4. Best Practices
- Follow OWASP guidelines
- Implement security by design
- Use secure coding practices
- Maintain security documentation 