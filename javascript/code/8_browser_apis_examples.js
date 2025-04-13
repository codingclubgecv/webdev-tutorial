// Browser APIs Examples
// ===================

// 1. Storage APIs
// -------------

// Local Storage (Permanent Storage)
localStorage.setItem('username', 'John'); // Username ko store kiya
const username = localStorage.getItem('username'); // Username ko retrieve kiya
localStorage.removeItem('username'); // Username ko delete kiya

// Session Storage (Temporary Storage)
sessionStorage.setItem('cart', JSON.stringify(['item1', 'item2'])); // Cart ko store kiya
const cart = JSON.parse(sessionStorage.getItem('cart')); // Cart ko retrieve kiya
sessionStorage.clear(); // Puri session storage ko clear kiya

// IndexedDB (Large Storage)
const request = indexedDB.open('MyDatabase', 1); // Database open kiya

request.onerror = event => {
    console.error('Database error:', event.target.error);
};

request.onsuccess = event => {
    const db = event.target.result;
    const transaction = db.transaction(['store'], 'readwrite');
    const store = transaction.objectStore('store');
    
    // Data add kiya
    store.add({ id: 1, name: 'Item 1' });
    
    // Data retrieve kiya
    const getRequest = store.get(1);
    getRequest.onsuccess = () => {
        console.log('Retrieved:', getRequest.result);
    };
};

// 2. Location APIs
// --------------

// Get Current Position
navigator.geolocation.getCurrentPosition(
    position => {
        const { latitude, longitude } = position.coords;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    },
    error => console.error('Error:', error.message),
    { enableHighAccuracy: true }
);

// Watch Position
const watchId = navigator.geolocation.watchPosition(
    position => {
        const { latitude, longitude } = position.coords;
        updateMap(latitude, longitude);
    },
    error => console.error('Error:', error.message)
);

// Stop Watching
navigator.geolocation.clearWatch(watchId);

// 3. Media APIs
// -----------

// Audio API
const audio = new Audio('music.mp3');
audio.play(); // Music play kiya
audio.pause(); // Music pause kiya
audio.volume = 0.5; // Volume set kiya

// Video API
const video = document.querySelector('video');
video.play(); // Video play kiya
video.pause(); // Video pause kiya
video.currentTime = 30; // Time set kiya

// Media Devices
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream; // Camera stream set kiya
    })
    .catch(error => console.error('Error:', error.message));

// 4. Web Workers
// ------------

// Main Thread
const worker = new Worker('worker.js');

worker.onmessage = event => {
    console.log('Message from worker:', event.data);
};

worker.postMessage('Start processing');

// Worker Thread (worker.js)
self.onmessage = event => {
    const result = heavyProcessing(event.data);
    self.postMessage(result);
};

// 5. WebSocket
// ----------

const socket = new WebSocket('ws://example.com');

socket.onopen = () => {
    console.log('Connected to server');
    socket.send('Hello Server');
};

socket.onmessage = event => {
    console.log('Message from server:', event.data);
};

socket.onclose = () => {
    console.log('Connection closed');
};

// 6. Service Workers
// ---------------

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(registration => {
            console.log('Service Worker registered');
        })
        .catch(error => {
            console.error('Service Worker registration failed:', error);
        });
}

// Service Worker (sw.js)
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('v1').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/script.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});

// 7. Notification API
// ----------------

// Request Permission
Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
        new Notification('Hello!', {
            body: 'This is a notification',
            icon: 'icon.png'
        });
    }
});

// 8. Clipboard API
// -------------

// Write to Clipboard
navigator.clipboard.writeText('Hello World')
    .then(() => console.log('Text copied'))
    .catch(error => console.error('Error:', error));

// Read from Clipboard
navigator.clipboard.readText()
    .then(text => console.log('Clipboard text:', text))
    .catch(error => console.error('Error:', error));

// 9. History API
// ------------

// Add to History
history.pushState({ page: 1 }, 'Title 1', '/page1');

// Replace History
history.replaceState({ page: 2 }, 'Title 2', '/page2');

// Handle Popstate
window.onpopstate = event => {
    console.log('Location:', document.location);
    console.log('State:', event.state);
};

// 10. Drag and Drop API
// ------------------

// Drag Events
const draggable = document.querySelector('.draggable');
draggable.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', event.target.id);
});

// Drop Events
const dropzone = document.querySelector('.dropzone');
dropzone.addEventListener('drop', event => {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const element = document.getElementById(id);
    dropzone.appendChild(element);
});

// 11. Fullscreen API
// ----------------

// Request Fullscreen
document.documentElement.requestFullscreen()
    .then(() => console.log('Entered fullscreen'))
    .catch(error => console.error('Error:', error));

// Exit Fullscreen
document.exitFullscreen()
    .then(() => console.log('Exited fullscreen'))
    .catch(error => console.error('Error:', error));

// 12. Battery API
// -------------

navigator.getBattery().then(battery => {
    console.log('Battery level:', battery.level * 100 + '%');
    console.log('Charging:', battery.charging);
    
    battery.addEventListener('levelchange', () => {
        console.log('Battery level changed:', battery.level * 100 + '%');
    });
    
    battery.addEventListener('chargingchange', () => {
        console.log('Charging status changed:', battery.charging);
    });
});

// 13. Device Orientation API
// -----------------------

window.addEventListener('deviceorientation', event => {
    console.log('Alpha:', event.alpha); // Z-axis rotation
    console.log('Beta:', event.beta);   // X-axis rotation
    console.log('Gamma:', event.gamma); // Y-axis rotation
});

// 14. Vibration API
// ----------------

// Vibrate once
navigator.vibrate(200);

// Vibrate pattern
navigator.vibrate([100, 30, 100, 30, 100]);

// Stop vibration
navigator.vibrate(0);

// 15. Network Information API
// ------------------------

const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

if (connection) {
    console.log('Connection type:', connection.type);
    console.log('Effective type:', connection.effectiveType);
    console.log('Downlink:', connection.downlink);
    
    connection.addEventListener('change', () => {
        console.log('Connection changed:', connection.effectiveType);
    });
} 