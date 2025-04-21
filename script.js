// Menu data
const menuItems = [
    {
        id: 1,
        name: "Espresso",
        price: 3.50,
        category: "coffee",
        image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",
        description: "Rich and bold espresso shot"
    },
    {
        id: 2,
        name: "Avocado Toast",
        price: 12.00,
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?auto=format&fit=crop&w=500&q=80",
        description: "Smashed avocado on artisanal bread"
    },
    {
        id: 3,
        name: "Chicken Caesar Salad",
        price: 14.50,
        category: "lunch",
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=500&q=80",
        description: "Classic caesar salad with grilled chicken"
    },
    {
        id: 4,
        name: "Tiramisu",
        price: 8.00,
        category: "desserts",
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",
        description: "Classic Italian coffee-flavored dessert"
    },
    // Add more menu items as needed
];

// Cart state
let cart = [];

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
    menuItems.forEach(item => {
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

// Add to cart
function addToCart(itemId) {
    const item = menuItems.find(item => item.id === parseInt(itemId));
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
}

// Update cart UI
function updateCartUI() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>Quantity: ${item.quantity}</p>
            </div>
            <div>
                <p>$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// Remove from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartUI();
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
            addToCart(e.target.dataset.id);
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
        // Add login logic here
        isLoggedIn = true;
        loginBtn.textContent = 'Logout';
        closeModal(loginModal);
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