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
    // New coffee items
    {
        id: 5,
        name: "Latte",
        price: 4.50,
        category: "coffee",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
        description: "Smooth espresso with steamed milk"
    },
    {
        id: 6,
        name: "Mocha",
        price: 5.00,
        category: "coffee",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80",
        description: "Espresso with chocolate and steamed milk"
    },
    // New breakfast items
    {
        id: 7,
        name: "French Toast",
        price: 11.00,
        category: "breakfast",
        image: "https://images.unsplash.com/photo-1595044643502-616eeebbdff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Golden brown French toast with syrup"
    },
    {
        id: 8,
        name: "Breakfast Burrito",
        price: 13.00,
        category: "breakfast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbdGjkPZxb7Th8hSObUfieDLdNWJy_dxfXdw&s",
        description: "Eggs, cheese, and sausage wrapped in a tortilla"
    },
    // New lunch items
    {
        id: 9,
        name: "Veggie Burger",
        price: 15.00,
        category: "lunch",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80",
        description: "Delicious plant-based burger with fries"
    },
    {
        id: 10,
        name: "Pasta Primavera",
        price: 16.50,
        category: "lunch",
        image: "https://cdn.loveandlemons.com/wp-content/uploads/2022/06/pasta-primavera-1.jpg",
        description: "Pasta with fresh vegetables and light sauce"
    },
    // New dessert items
    {
        id: 11,
        name: "Cheesecake",
        price: 7.00,
        category: "desserts",
        image: "https://media.istockphoto.com/id/1167344045/photo/cheesecake-slice-new-york-style-classical-cheese-cake.jpg?s=612x612&w=0&k=20&c=y3eh7cFEefAYxB_5Ow2n1OJZML_PqFOdnB5Z9nvXdgw=",
        description: "Creamy cheesecake with a graham cracker crust"
    },
    {
        id: 12,
        name: "Apple Pie",
        price: 6.50,
        category: "desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUHfYYV7QjBt_bWqG3Bi4LWqTwpGdNUw73A&s",
        description: "Classic apple pie with cinnamon"
    },
    {
        id: 13,
        name: "Oakwood Latte",
        price: 4.50,
        category: "coffee",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSah1-42YZm9PZHcuFn5h2o9BXk8yL8JHXSGA&s",
        description: "Rich and creamy latte with oakwood flavor"
    },
    {
        id: 14,
        name: "Iced Coffee",
        price: 5.00,
        category: "coffee",
        image: "https://aeropress.com/cdn/shop/articles/20240515165404-aeropress-cold-brew-3_800x_636x_e20f869a-6929-41b9-aa33-f8801993affd_636x.png?v=1715792052",
        description: "Refreshing iced coffee served cold"
    },
    // Additional new items up to id 25
    {
        id: 15,
        name: "Chai Latte",
        price: 4.75,
        category: "coffee",
        image: "https://ifanca.org/app/uploads/2022/06/Spiced-Milk-AdobeStock_127796565-scaled.jpeg",
        description: "Spiced tea with steamed milk"
    },
    {
        id: 16,
        name: "Blueberry Pancakes",
        price: 10.50,
        category: "breakfast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD7cS8_3rEuOx5iwl2WxBNLACiEvfULPRsdA&s",
        description: "Fluffy pancakes with fresh blueberries"
    },
    {
        id: 17,
        name: "Quinoa Salad",
        price: 13.50,
        category: "lunch",
        image: "https://www.chelseasmessyapron.com/wp-content/uploads/2018/01/Quinoa-Recipes-1.jpeg",
        description: "Healthy quinoa salad with veggies"
    },
    {
        id: 18,
        name: "Chocolate Brownie",
        price: 6.00,
        category: "desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_R-Ex4k_KkgvU-AEHq70vbk4JyFAMWuslw&s",
        description: "Rich chocolate brownie with nuts"
    },
    {
        id: 19,
        name: "Cappuccino",
        price: 4.25,
        category: "coffee",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
        description: "Espresso with steamed milk foam"
    },
    {
        id: 20,
        name: "Bagel with Cream Cheese",
        price: 7.00,
        category: "breakfast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ISPbC3K5FzeIyYKq1PiGqXdsIlc00DYYPw&s",
        description: "Toasted bagel with cream cheese spread"
    },
    {
        id: 21,
        name: "Grilled Chicken Sandwich",
        price: 14.00,
        category: "lunch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CvE9o82_-YLtp6-8LazDgniz49kHvB7SJg&s",
        description: "Grilled chicken breast with lettuce and tomato"
    },
    {
        id: 22,
        name: "Lemon Tart",
        price: 6.50,
        category: "desserts",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN7ggMWdvDz4HDAh9_jdtOyFlU1dV7UpkVVA&s",
        description: "Tangy lemon tart with a buttery crust"
    },
    {
        id: 23,
        name: "Flat White",
        price: 4.75,
        category: "coffee",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1bNjVehuVoM30zr0-T48yje3Mtv-CSJ3Mig&s",
        description: "Espresso with velvety steamed milk"
    },
    {
        id: 24,
        name: "Oatmeal with Fruits",
        price: 9.00,
        category: "breakfast",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtRqo2pY2jv5oZbzZo7AX1181yR3BTRucuXA&s",
        description: "Warm oatmeal topped with fresh fruits"
    },
    {
        id: 25,
        name: "Caesar Wrap",
        price: 13.50,
        category: "lunch",
        image: "https://www.twopeasandtheirpod.com/wp-content/uploads/2023/08/Chicken-Caesar-Wraps-14.jpg",
        description: "Caesar salad wrapped in a tortilla"
    }
]
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
