// Import addItem from cart.js and products from products.js
import { addItem } from './cart.js';
import { products } from './products.js';

// User state
let isLoggedIn = false;

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartModal = document.getElementById('cartModal');
const loginModal = document.getElementById('loginModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const loginBtn = document.getElementById('loginBtn');

// Initialize menu
function initializeMenu() {
    menuGrid.innerHTML = '';
    products.forEach(item => {
        const menuItem = createMenuItem(item);
        menuGrid.appendChild(menuItem);
    });
}

// Create menu item element
function createMenuItem(item) {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.dataset.category = item.category;
    
    div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-content">
            <h3 class="menu-item-title">${item.name}</h3>
            <p>${item.description}</p>
            <p class="menu-item-price">$${item.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
        </div>
    `;
    
    return div;
}

// Filter menu items
function filterMenu(category) {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Modal handling
function openModal(modal) {
    modal.style.display = 'block';
}

function closeModal(modal) {
    modal.style.display = 'none';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeMenu();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            filterMenu(e.target.dataset.filter);
        });
    });

    // Add to cart buttons
    menuGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            addItem(e.target.dataset.id);
        }
    });

    // Cart modal
    document.querySelector('.cart-icon').addEventListener('click', () => openModal(cartModal));
    
    // Login modal
    loginBtn.addEventListener('click', () => openModal(loginModal));

    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            closeModal(cartModal);
            closeModal(loginModal);
        });
    });

    // Login form
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        // Simple validation
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        // Disable submit button and show loading state
        const submitBtn = form.querySelector('button[type="submit"]');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Logging in...';

        // Simulate login delay
        setTimeout(() => {
            isLoggedIn = true;
            loginBtn.textContent = 'Logout';

            // Smooth fade out login form
            form.style.transition = 'opacity 0.5s ease';
            form.style.opacity = '0';

            setTimeout(() => {
                // Redirect to home page
                window.location.href = 'index.html';
            }, 500);
        }, 1000);
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! We will get back to you soon.');
        e.target.reset();
    });

    // Newsletter form
    document.getElementById('newsletterForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        e.target.reset();
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === cartModal) closeModal(cartModal);
    if (e.target === loginModal) closeModal(loginModal);
});
