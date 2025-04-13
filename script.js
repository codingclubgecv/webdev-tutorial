// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Active Navigation Class
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            showAlert('Please fill in all fields', 'danger');
            return;
        }
        
        if (!isValidEmail(email)) {
            showAlert('Please enter a valid email address', 'danger');
            return;
        }
        
        // Simulate form submission
        showAlert('Message sent successfully!', 'success');
        contactForm.reset();
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);
}

// Code Block Syntax Highlighting
function highlightSyntax(codeBlock) {
    const text = codeBlock.textContent;
    const language = codeBlock.className.split(' ')[1].split('-')[1];
    
    // Basic syntax highlighting
    let highlighted = text
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');

    // Language-specific highlighting
    if (language === 'html') {
        highlighted = highlighted
            .replace(/&lt;(\/?[a-z][a-z0-9]*)\b/g, '<span class="tag">&lt;$1</span>')
            .replace(/&gt;/g, '<span class="tag">&gt;</span>')
            .replace(/\s([a-z-]+)=/g, ' <span class="attribute">$1</span>=')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
    } else if (language === 'css') {
        highlighted = highlighted
            .replace(/([a-z-]+)\s*:/g, '<span class="property">$1</span>:')
            .replace(/#[0-9a-fA-F]+/g, '<span class="value">$&</span>')
            .replace(/\b([0-9]+[a-z]*)\b/g, '<span class="value">$1</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>');
    } else if (language === 'javascript') {
        highlighted = highlighted
            .replace(/\b(function|var|let|const|if|else|for|while|return|class|import|export)\b/g, '<span class="keyword">$1</span>')
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
            .replace(/\b([0-9]+)\b/g, '<span class="number">$1</span>')
            .replace(/([a-zA-Z_$][0-9a-zA-Z_$]*)\(/g, '<span class="function">$1</span>(');
    }

    codeBlock.innerHTML = highlighted;
}

// Initialize Code Blocks
function initializeCodeBlocks() {
    document.querySelectorAll('pre code').forEach(block => {
        // Add line numbers
        const lines = block.textContent.split('\n').length;
        const lineNumbers = document.createElement('div');
        lineNumbers.className = 'line-numbers';
        for (let i = 1; i <= lines; i++) {
            lineNumbers.innerHTML += `<span>${i}</span>`;
        }
        block.parentElement.insertBefore(lineNumbers, block);
        
        // Syntax highlighting
        highlightSyntax(block);
        
        // Add copy button if not exists
        if (!block.parentElement.querySelector('.copy-button')) {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.innerHTML = '<i class="fas fa-copy"></i>';
            
            copyButton.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent).then(() => {
                    copyButton.innerHTML = '<i class="fas fa-check"></i>';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                });
            });
            
            block.parentElement.appendChild(copyButton);
        }
    });
}

// Enhanced Animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

document.querySelectorAll('.tech-card, .tutorial-card, .slide-content, pre').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    animationObserver.observe(element);
});

// Code Editor Functionality
function initializeCodeEditor() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const runButton = document.getElementById('runCode');
    const previewFrame = document.getElementById('previewFrame');

    // Tab Switching
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            
            // Update active tab button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Show corresponding tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-tab`) {
                    content.classList.add('active');
                }
            });
        });
    });

    // Make code blocks editable
    document.querySelectorAll('.tab-content code').forEach(codeBlock => {
        // Set contenteditable to true
        codeBlock.setAttribute('contenteditable', 'true');
        
        // Add event listener for input
        codeBlock.addEventListener('input', () => {
            // Update syntax highlighting
            highlightSyntax(codeBlock);
        });
    });

    // Run Code
    runButton.addEventListener('click', () => {
        const htmlCode = document.querySelector('#html-tab code').textContent;
        const cssCode = document.querySelector('#css-tab code').textContent;
        const jsCode = document.querySelector('#js-tab code').textContent;

        // Create a complete HTML document with the code
        const fullHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>
        `;

        // Update the preview iframe
        previewFrame.srcdoc = fullHtml;
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeCodeEditor();
    initializeCodeBlocks();
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    const icon = darkModeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Typing Animation for Hero Section
const heroTitle = document.querySelector('.hero-section h1');
if (heroTitle) {
    const text = heroTitle.innerText;
    heroTitle.innerText = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.innerText += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    typeWriter();
}

// Slide Navigation
const slideNavigation = document.querySelector('.slide-navigation');
if (slideNavigation) {
    const prevLink = slideNavigation.querySelector('a[href*="prev"]');
    const nextLink = slideNavigation.querySelector('a[href*="next"]');
    
    if (prevLink) {
        prevLink.addEventListener('click', (e) => {
            e.preventDefault();
            const prevSlide = prevLink.getAttribute('href');
            if (prevSlide) {
                window.location.href = prevSlide;
            }
        });
    }
    
    if (nextLink) {
        nextLink.addEventListener('click', (e) => {
            e.preventDefault();
            const nextSlide = nextLink.getAttribute('href');
            if (nextSlide) {
                window.location.href = nextSlide;
            }
        });
    }
}

// Keyboard Navigation for Slides
document.addEventListener('keydown', (e) => {
    const slideNavigation = document.querySelector('.slide-navigation');
    if (slideNavigation) {
        const prevLink = slideNavigation.querySelector('a[href*="prev"]');
        const nextLink = slideNavigation.querySelector('a[href*="next"]');
        
        if (e.key === 'ArrowLeft' && prevLink) {
            prevLink.click();
        } else if (e.key === 'ArrowRight' && nextLink) {
            nextLink.click();
        }
    }
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for hero section buttons
document.querySelectorAll('.scroll-to-section').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
            
            // Calculate the offset considering the fixed navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
}); 