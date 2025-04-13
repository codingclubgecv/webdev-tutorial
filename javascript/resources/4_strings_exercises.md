# JavaScript Strings Practice Exercises

## Exercise 1: Text Formatter
Create a text formatting utility that handles various string operations.

### Requirements:
- Convert text to different cases (upper, lower, title)
- Remove extra spaces
- Format dates and numbers
- Handle special characters

### Starter Code:
```javascript
class TextFormatter {
    constructor() {
        this.text = "";
    }

    setText(text) {
        // TODO: Set text and remove extra spaces
    }

    toTitleCase() {
        // TODO: Convert text to title case
    }

    formatDate(date) {
        // TODO: Format date in different styles
    }

    formatNumber(number) {
        // TODO: Format number with commas and decimals
    }
}
```

### Tips:
- Use string methods effectively
- Handle edge cases
- Consider performance
- Make it reusable

### Common Mistakes:
- Not handling special characters
- Forgetting to trim spaces
- Incorrect case conversion
- Poor performance with large strings

## Exercise 2: String Validator
Create a string validation system for different types of input.

### Requirements:
- Validate email addresses
- Validate phone numbers
- Validate passwords
- Validate URLs

### Starter Code:
```javascript
class StringValidator {
    constructor() {
        this.rules = {
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            phone: /^\+?[\d\s-]{10,}$/,
            password: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/,
            url: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
        };
    }

    validateEmail(email) {
        // TODO: Validate email format
    }

    validatePhone(phone) {
        // TODO: Validate phone number format
    }

    validatePassword(password) {
        // TODO: Validate password strength
    }

    validateURL(url) {
        // TODO: Validate URL format
    }
}
```

### Tips:
- Use regular expressions
- Consider international formats
- Add custom validation rules
- Provide helpful error messages

### Common Mistakes:
- Overly strict validation
- Not handling international formats
- Poor error messages
- Not considering edge cases

## Exercise 3: Text Search Engine
Create a simple text search engine that can find and highlight text.

### Requirements:
- Search for text in a string
- Highlight matches
- Case-sensitive/insensitive search
- Count occurrences

### Starter Code:
```javascript
class TextSearch {
    constructor(text) {
        this.text = text;
    }

    search(query, caseSensitive = false) {
        // TODO: Search for query in text
    }

    highlightMatches(query) {
        // TODO: Highlight all matches of query
    }

    countOccurrences(query) {
        // TODO: Count how many times query appears
    }

    replaceMatches(query, replacement) {
        // TODO: Replace all matches with replacement
    }
}
```

### Tips:
- Use string methods effectively
- Consider performance
- Handle special characters
- Make it flexible

### Common Mistakes:
- Poor performance with large texts
- Not handling special characters
- Incorrect highlighting
- Memory issues with large texts

## Exercise 4: String Encoder/Decoder
Create a utility for encoding and decoding strings.

### Requirements:
- URL encoding/decoding
- Base64 encoding/decoding
- HTML entity encoding/decoding
- Custom encoding schemes

### Starter Code:
```javascript
class StringEncoder {
    constructor() {
        this.encodingSchemes = {
            url: {
                encode: encodeURIComponent,
                decode: decodeURIComponent
            },
            base64: {
                encode: btoa,
                decode: atob
            }
        };
    }

    encode(text, scheme = 'url') {
        // TODO: Encode text using specified scheme
    }

    decode(text, scheme = 'url') {
        // TODO: Decode text using specified scheme
    }

    addCustomScheme(name, encoder, decoder) {
        // TODO: Add custom encoding scheme
    }
}
```

### Tips:
- Handle encoding errors
- Support multiple schemes
- Make it extensible
- Consider security

### Common Mistakes:
- Not handling encoding errors
- Security vulnerabilities
- Poor error handling
- Not supporting all characters

## Exercise 5: Template Engine
Create a simple template engine for string interpolation.

### Requirements:
- Variable substitution
- Conditional rendering
- Loop support
- Custom filters

### Starter Code:
```javascript
class TemplateEngine {
    constructor() {
        this.filters = {
            uppercase: str => str.toUpperCase(),
            lowercase: str => str.toLowerCase()
        };
    }

    render(template, data) {
        // TODO: Render template with data
    }

    addFilter(name, fn) {
        // TODO: Add custom filter
    }

    parseConditional(condition, trueText, falseText) {
        // TODO: Handle conditional rendering
    }

    parseLoop(items, template) {
        // TODO: Handle loop rendering
    }
}
```

### Tips:
- Use template literals
- Make it secure
- Add error handling
- Keep it simple

### Common Mistakes:
- Security vulnerabilities
- Poor performance
- Complex syntax
- Not handling errors

## Bonus Challenges

### 1. Advanced Features
- Add support for nested templates
- Implement caching
- Add error recovery
- Support custom syntax

### 2. Real-world Applications
- Build a markdown parser
- Create a code formatter
- Develop a text editor
- Make a search engine

### 3. Performance Optimization
- Implement string pooling
- Use efficient algorithms
- Add caching
- Optimize memory usage

### 4. Best Practices
- Follow security guidelines
- Write clean code
- Add documentation
- Include tests 