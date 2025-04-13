// 1. Basic String Operations (Basic String Operations)
const name = "Rahul";
const greeting = 'Hello';
const message = `Hello ${name}!`;

console.log(name);      // Rahul
console.log(greeting);  // Hello
console.log(message);   // Hello Rahul!

// 2. String Methods (String ke Methods)
const text = "JavaScript is Awesome!";

// Length nikalo (Get length)
console.log(text.length);  // 20

// Uppercase mein convert karo (Convert to uppercase)
console.log(text.toUpperCase());  // JAVASCRIPT IS AWESOME!

// Lowercase mein convert karo (Convert to lowercase)
console.log(text.toLowerCase());  // javascript is awesome!

// Character nikalo (Get character at index)
console.log(text.charAt(0));  // J
console.log(text[0]);         // J (Modern way)

// 3. String Search (String mein Search)
const sentence = "The quick brown fox jumps over the lazy dog";

// Word ka index nikalo (Find index of word)
console.log(sentence.indexOf("fox"));     // 16
console.log(sentence.lastIndexOf("the")); // 31

// Word check karo (Check if word exists)
console.log(sentence.includes("fox"));    // true
console.log(sentence.startsWith("The"));  // true
console.log(sentence.endsWith("dog"));    // true

// 4. String Manipulation (String ko Modify karna)
const str = "Hello World";

// Slice nikalo (Get slice)
console.log(str.slice(0, 5));      // Hello
console.log(str.slice(6));         // World

// Substring nikalo (Get substring)
console.log(str.substring(0, 5));  // Hello
console.log(str.substring(6));     // World

// Split karo (Split into array)
console.log(str.split(" "));       // ["Hello", "World"]

// Join karo (Join array into string)
const words = ["Hello", "World"];
console.log(words.join(" "));      // Hello World

// 5. String Replace (String mein Replace)
const text = "I love JavaScript!";

// Single replace
console.log(text.replace("JavaScript", "Python"));  // I love Python!

// Global replace (sab replace karo)
console.log(text.replace(/a/g, "A"));  // I love JAvAScript!

// 6. String Trim (Extra spaces hatana)
const str = "   Hello World   ";
console.log(str.trim());        // "Hello World"
console.log(str.trimStart());   // "Hello World   "
console.log(str.trimEnd());     // "   Hello World"

// 7. Template Literals (Modern String Templates)
const name = "Rahul";
const age = 25;

// Basic template
console.log(`Hello ${name}!`);  // Hello Rahul!

// Expression use karo
console.log(`You are ${age} years old`);  // You are 25 years old

// Multi-line string
console.log(`
    Name: ${name}
    Age: ${age}
    Status: Active
`);

// 8. String Padding (String ko Pad karna)
const num = "5";

// Left side pad karo
console.log(num.padStart(3, "0"));  // 005

// Right side pad karo
console.log(num.padEnd(3, "0"));    // 500

// 9. String Repeat (String ko Repeat karna)
const str = "Ha";
console.log(str.repeat(3));  // HaHaHa

// 10. String Comparison (String ko Compare karna)
const str1 = "apple";
const str2 = "banana";

// Alphabetically compare karo
console.log(str1.localeCompare(str2));  // -1 (apple comes before banana)

// 11. String Case Conversion (Case ko Convert karna)
const str = "hElLo WoRlD";

// Title case mein convert karo
console.log(str.replace(/\w\S*/g, txt => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
));  // Hello World

// 12. String Validation (String ko Validate karna)
const email = "test@example.com";

// Email validate karo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test(email));  // true

// 13. String Encoding (String ko Encode karna)
const str = "Hello World!";

// URL encode karo
console.log(encodeURIComponent(str));  // Hello%20World%21

// 14. String Decoding (String ko Decode karna)
const encoded = "Hello%20World%21";

// URL decode karo
console.log(decodeURIComponent(encoded));  // Hello World!

// 15. String Formatting (String ko Format karna)
const price = 99.99;
const quantity = 5;

// Currency format karo
console.log(new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR'
}).format(price * quantity));  // ₹499.95 