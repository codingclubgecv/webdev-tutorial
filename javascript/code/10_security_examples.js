// Security Best Practices Examples
// =============================

// 1. Password Security
// -----------------

// Password Hashing
const bcrypt = require('bcrypt');

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds); // Password ko hash kiya
}

async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash); // Password verify kiya
}

// 2. XSS Prevention
// --------------

// Input Sanitization
function sanitizeInput(input) {
    return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;'); // Input ko sanitize kiya
}

// Safe DOM Manipulation
function safeSetContent(element, content) {
    element.textContent = content; // Content ko safely set kiya
}

// 3. CSRF Protection
// ----------------

// CSRF Token Generation
function generateCSRFToken() {
    return crypto.randomBytes(32).toString('hex'); // CSRF token generate kiya
}

// CSRF Token Verification
function verifyCSRFToken(token, sessionToken) {
    return token === sessionToken; // CSRF token verify kiya
}

// 4. Input Validation
// ----------------

// Form Validation
class FormValidator {
    constructor(rules) {
        this.rules = rules;
    }

    validate(data) {
        const errors = [];
        
        for (const [field, value] of Object.entries(data)) {
            if (this.rules[field]) {
                const error = this.rules[field](value);
                if (error) errors.push({ field, error });
            }
        }
        
        return errors; // Form data ko validate kiya
    }
}

// 5. Secure Headers
// --------------

// Security Headers
const securityHeaders = {
    'Content-Security-Policy': "default-src 'self'",
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains'
};

// 6. Session Security
// ----------------

// Session Management
class SessionManager {
    constructor() {
        this.sessions = new Map();
    }

    createSession(userId) {
        const sessionId = crypto.randomBytes(32).toString('hex');
        const session = {
            userId,
            createdAt: Date.now(),
            expiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        };
        this.sessions.set(sessionId, session);
        return sessionId; // Session create kiya
    }

    validateSession(sessionId) {
        const session = this.sessions.get(sessionId);
        if (!session || session.expiresAt < Date.now()) {
            return null;
        }
        return session; // Session validate kiya
    }
}

// 7. API Security
// -------------

// API Rate Limiting
class RateLimiter {
    constructor(limit, window) {
        this.limit = limit;
        this.window = window;
        this.requests = new Map();
    }

    checkLimit(ip) {
        const now = Date.now();
        const userRequests = this.requests.get(ip) || [];
        
        // Remove old requests
        const recentRequests = userRequests.filter(time => now - time < this.window);
        
        if (recentRequests.length >= this.limit) {
            return false; // Rate limit exceed kiya
        }
        
        recentRequests.push(now);
        this.requests.set(ip, recentRequests);
        return true;
    }
}

// 8. File Upload Security
// --------------------

// File Upload Validation
class FileUploadValidator {
    constructor() {
        this.allowedTypes = ['image/jpeg', 'image/png'];
        this.maxSize = 5 * 1024 * 1024; // 5MB
    }

    validateFile(file) {
        if (!this.allowedTypes.includes(file.type)) {
            throw new Error('Invalid file type'); // File type check kiya
        }
        
        if (file.size > this.maxSize) {
            throw new Error('File too large'); // File size check kiya
        }
        
        return true;
    }
}

// 9. SQL Injection Prevention
// ------------------------

// Parameterized Queries
class Database {
    async query(sql, params) {
        // Use parameterized queries to prevent SQL injection
        return await db.query(sql, params); // Safe query execute kiya
    }
}

// 10. CORS Configuration
// -------------------

// CORS Settings
const corsOptions = {
    origin: ['https://trusted-domain.com'],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
    maxAge: 86400
};

// 11. Error Handling
// ----------------

// Secure Error Handling
class SecureErrorHandler {
    handleError(error) {
        // Log error securely
        console.error('Error:', {
            message: error.message,
            stack: error.stack,
            timestamp: new Date()
        });
        
        // Don't expose sensitive information
        return {
            message: 'An error occurred',
            code: 'INTERNAL_ERROR'
        };
    }
}

// 12. Data Encryption
// -----------------

// Data Encryption
const crypto = require('crypto');

class Encryptor {
    constructor(key) {
        this.key = key;
    }

    encrypt(data) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', this.key, iv);
        let encrypted = cipher.update(data, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return { iv: iv.toString('hex'), encrypted }; // Data ko encrypt kiya
    }

    decrypt(encryptedData) {
        const iv = Buffer.from(encryptedData.iv, 'hex');
        const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv);
        let decrypted = decipher.update(encryptedData.encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted; // Data ko decrypt kiya
    }
}

// 13. Secure Cookies
// ----------------

// Cookie Settings
const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
};

// 14. Security Headers
// -----------------

// Security Headers Middleware
function securityHeadersMiddleware(req, res, next) {
    res.setHeader('Content-Security-Policy', "default-src 'self'");
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'DENY');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next(); // Security headers set kiye
}

// 15. Input Sanitization
// -------------------

// Input Sanitizer
class InputSanitizer {
    sanitize(input) {
        if (typeof input === 'string') {
            return this.sanitizeString(input);
        } else if (typeof input === 'object') {
            return this.sanitizeObject(input);
        }
        return input; // Input ko sanitize kiya
    }

    sanitizeString(str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    sanitizeObject(obj) {
        const sanitized = {};
        for (const [key, value] of Object.entries(obj)) {
            sanitized[key] = this.sanitize(value);
        }
        return sanitized;
    }
} 