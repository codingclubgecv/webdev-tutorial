// DOM Selection Examples
// =====================

// 1. Basic Selection Methods
// -------------------------

// Single element select karna
const header = document.querySelector('header'); // First header element
const loginButton = document.getElementById('login-btn'); // ID se select
const firstParagraph = document.querySelector('p'); // First paragraph

// Multiple elements select karna
const allParagraphs = document.querySelectorAll('p'); // All paragraphs
const buttons = document.getElementsByTagName('button'); // All buttons
const menuItems = document.getElementsByClassName('menu-item'); // All menu items

// 2. Modern Selection Methods
// -------------------------

// Form elements select karna
const loginForm = document.forms['login-form'];
const formInputs = loginForm.elements;
const usernameInput = formInputs['username'];

// Data attributes se select karna
const userCard = document.querySelector('[data-user-id="123"]');
const activeItems = document.querySelectorAll('[data-active="true"]');

// DOM Manipulation Examples
// =======================

// 1. Element Creation & Modification
// --------------------------------

// New element banana
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello World!';
newDiv.className = 'highlight';

// Element ko modify karna
const element = document.querySelector('.demo');
element.textContent = 'Updated Text';
element.style.color = 'red';
element.classList.add('active');
element.setAttribute('data-id', '123');

// 2. Adding & Removing Elements
// ---------------------------

// Parent element select karna
const container = document.querySelector('.container');

// Child element add karna
container.appendChild(newDiv);

// Multiple elements add karna
const fragment = document.createDocumentFragment();
for (let i = 0; i < 5; i++) {
    const item = document.createElement('div');
    item.textContent = `Item ${i}`;
    fragment.appendChild(item);
}
container.appendChild(fragment);

// Element remove karna
const oldElement = document.querySelector('.old');
oldElement.remove();

// Event Handling Examples
// =====================

// 1. Basic Event Listeners
// ----------------------

// Click event
const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    console.log('Button clicked!', event);
});

// Form submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Default form submission rokna
    console.log('Form submitted!');
});

// 2. Event Delegation
// -----------------

// Parent element pe event listener lagana
const list = document.querySelector('.todo-list');
list.addEventListener('click', (event) => {
    if (event.target.matches('.delete-btn')) {
        event.target.parentElement.remove();
    }
});

// 3. Keyboard Events
// ----------------

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        console.log('Enter key pressed!');
    }
});

// DOM Traversal Examples
// ====================

// 1. Parent & Child Navigation
// -------------------------

const child = document.querySelector('.child');
const parent = child.parentElement;
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const siblings = Array.from(parent.children).filter(
    child => child !== element
);

// 2. Sibling Navigation
// ------------------

const current = document.querySelector('.current');
const nextSibling = current.nextElementSibling;
const prevSibling = current.previousElementSibling;

// Modern DOM Features
// =================

// 1. Template Literals
// -----------------

const user = {
    name: 'John',
    age: 25
};

const userCard = document.createElement('div');
userCard.innerHTML = `
    <div class="user-card">
        <h2>${user.name}</h2>
        <p>Age: ${user.age}</p>
    </div>
`;

// 2. Dataset API
// ------------

const element = document.querySelector('.data-element');
element.dataset.userId = '123';
element.dataset.userRole = 'admin';

// Accessing data attributes
const userId = element.dataset.userId;
const userRole = element.dataset.userRole;

// 3. ClassList API
// --------------

const element = document.querySelector('.demo');
element.classList.add('active', 'highlight');
element.classList.remove('inactive');
element.classList.toggle('visible');

// Checking class existence
if (element.classList.contains('active')) {
    console.log('Element is active');
}

// Practical Examples
// ================

// 1. Todo List Implementation
// ------------------------

class TodoList {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.todos = [];
    }

    addTodo(text) {
        const todo = {
            id: Date.now(),
            text,
            completed: false
        };
        
        this.todos.push(todo);
        this.renderTodo(todo);
    }

    renderTodo(todo) {
        const todoElement = document.createElement('div');
        todoElement.className = 'todo-item';
        todoElement.dataset.id = todo.id;
        
        todoElement.innerHTML = `
            <input type="checkbox" ${todo.completed ? 'checked' : ''}>
            <span>${todo.text}</span>
            <button class="delete-btn">Delete</button>
        `;
        
        this.container.appendChild(todoElement);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        const element = this.container.querySelector(`[data-id="${id}"]`);
        if (element) element.remove();
    }
}

// 2. Form Validation
// ----------------

class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.inputs = this.form.querySelectorAll('input[required]');
        this.errors = {};
    }

    init() {
        this.form.addEventListener('submit', (event) => {
            if (!this.validate()) {
                event.preventDefault();
                this.showErrors();
            }
        });

        this.inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.validateInput(input);
            });
        });
    }

    validate() {
        let isValid = true;
        this.errors = {};

        this.inputs.forEach(input => {
            if (!this.validateInput(input)) {
                isValid = false;
            }
        });

        return isValid;
    }

    validateInput(input) {
        const value = input.value.trim();
        const name = input.name;

        if (!value) {
            this.errors[name] = 'This field is required';
            return false;
        }

        // Add more validation rules as needed
        return true;
    }

    showErrors() {
        // Clear previous errors
        this.form.querySelectorAll('.error').forEach(el => el.remove());

        // Show new errors
        Object.entries(this.errors).forEach(([field, message]) => {
            const input = this.form.querySelector(`[name="${field}"]`);
            const error = document.createElement('div');
            error.className = 'error';
            error.textContent = message;
            input.parentNode.appendChild(error);
        });
    }
}

// Usage Examples
// ============

// Todo List usage
const todoList = new TodoList('todo-container');
todoList.addTodo('Learn JavaScript');
todoList.addTodo('Build a project');

// Form Validator usage
const validator = new FormValidator('login-form');
validator.init(); 