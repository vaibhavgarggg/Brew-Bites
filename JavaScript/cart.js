// Import modules
import { products } from './products.js';
import { formatCurrency, animateCSS } from './utils.js';

// Cart state
let cart = [];

// DOM elements
let cartItemsList;
let cartEmptyMessage;
let cartItemCount;
let cartCountDisplay;
let cartSubtotal;
let cartTax;
let cartTotal;
let checkoutBtn;

// Constants
const TAX_RATE = 0.0825; // 8.25%
const DELIVERY_FEE = 3.99;

// Initialize cart from localStorage or create new one
const initCart = () => {
  const savedCart = localStorage.getItem('brewBitesCart');
  
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      console.error('Error parsing cart from localStorage:', e);
      cart = [];
    }
  }
};

// Save cart to localStorage
const saveCart = () => {
  localStorage.setItem('brewBitesCart', JSON.stringify(cart));
};

// Update all cart displays
const updateCartDisplay = () => {
  updateCartCount();
  renderCartItems();
  updateCartSummary();
  toggleEmptyCartMessage();
};

// Update cart item count in header and cart page
const updateCartCount = () => {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  // Update the header cart icon count
  const headerCartCount = document.querySelector('.cart-count');
  if (headerCartCount) {
    headerCartCount.textContent = totalItems > 0 ? totalItems : '';
  }
  
  // Update the cart page count
  if (cartItemCount) {
    cartItemCount.textContent = totalItems;
  }
  
  // Enable/disable checkout button
  if (checkoutBtn) {
    checkoutBtn.disabled = totalItems === 0;
    if (totalItems === 0) {
      checkoutBtn.classList.add('disabled');
    } else {
      checkoutBtn.classList.remove('disabled');
    }
  }
};

// Toggle empty cart message
const toggleEmptyCartMessage = () => {
  if (!cartEmptyMessage || !cartItemsList) return;
  
  if (cart.length === 0) {
    cartEmptyMessage.classList.remove('hidden');
    cartItemsList.classList.add('hidden');
  } else {
    cartEmptyMessage.classList.add('hidden');
    cartItemsList.classList.remove('hidden');
  }
};

// Render cart items
const renderCartItems = () => {
  if (!cartItemsList) return;
  
  // Clear current items
  cartItemsList.innerHTML = '';
  
  // Render each cart item
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.dataset.id = item.id;
    cartItem.dataset.variant = item.variant || '';
    
    cartItem.innerHTML = `
      <div class="cart-item-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="cart-item-details">
        <span class="cart-item-name">${product.name}</span>
        ${item.variant ? `<div class="cart-item-variant">${item.variant}</div>` : ''}
        <div class="cart-item-price">${formatCurrency(product.price)}</div>
      </div>
      <div class="cart-item-actions">
        <div class="quantity-control">
          <button class="quantity-btn decrement-btn" data-id="${item.id}" aria-label="Decrease quantity" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
          <span class="quantity-value">${item.quantity}</span>
          <button class="quantity-btn increment-btn" data-id="${item.id}" aria-label="Increase quantity">+</button>
        </div>
        <button class="remove-btn" data-id="${item.id}" aria-label="Remove item">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18"></path>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path>
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;
    
    // Animate new item
    cartItem.classList.add('adding');
    cartItemsList.appendChild(cartItem);
    
    // Attach event listeners
    const decrementBtn = cartItem.querySelector('.decrement-btn');
    const incrementBtn = cartItem.querySelector('.increment-btn');
    const removeBtn = cartItem.querySelector('.remove-btn');
    
    decrementBtn.addEventListener('click', () => decrementItem(item.id));
    incrementBtn.addEventListener('click', () => incrementItem(item.id));
    removeBtn.addEventListener('click', () => removeItem(item.id, item.variant));
  });
};

// Update cart summary calculations
const updateCartSummary = () => {
  if (!cartSubtotal || !cartTax || !cartTotal) return;
  
  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);
  
  // Calculate tax
  const tax = subtotal * TAX_RATE;
  
  // Calculate total
  const total = subtotal + tax + (subtotal > 0 ? DELIVERY_FEE : 0);
  
  // Update DOM
  cartSubtotal.textContent = formatCurrency(subtotal);
  cartTax.textContent = formatCurrency(tax);
  cartTotal.textContent = formatCurrency(total);
};

// Add item to cart
const addItem = (productId, variant = null) => {
  // Check if product exists
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  // Check if item already in cart
  const existingItem = cart.find(item => 
    item.id === productId && 
    (variant === null || item.variant === variant)
  );
  
  if (existingItem) {
    // Increment quantity
    existingItem.quantity += 1;
  } else {
    // Add new item
    cart.push({
      id: productId,
      variant: variant,
      quantity: 1
    });
  }
  
  // Save and update display
  saveCart();
  updateCartDisplay();
  
  // Show success message
  showNotification(`${product.name} added to cart`);
};

// Remove item from cart
const removeItem = (productId, variant = null) => {
  const itemIndex = cart.findIndex(item =>
    item.id === productId && item.variant === variant
  );

  if (itemIndex !== -1) {
    const productName = products.find(p => p.id === productId)?.name || 'Item';

    // Find DOM element with both id and variant
    const itemSelector = `.cart-item[data-id="${productId}"][data-variant="${variant || ''}"]`;
    const itemElement = document.querySelector(itemSelector);

    if (itemElement) {
      itemElement.classList.add('removing');
      setTimeout(() => {
        cart.splice(itemIndex, 1);
        saveCart();
        updateCartDisplay();
        showNotification(`${productName} removed from cart`);
      }, 300);
    } else {
      cart.splice(itemIndex, 1);
      saveCart();
      updateCartDisplay();
    }
  }
};


// Increment item quantity
const incrementItem = (productId) => {
  const item = cart.find(item => item.id === productId);
  
  if (item) {
    item.quantity += 1;
    saveCart();
    updateCartDisplay();
  }
};

// Decrement item quantity
const decrementItem = (productId) => {
  const item = cart.find(item => item.id === productId);
  
  if (item && item.quantity > 1) {
    item.quantity -= 1;
    saveCart();
    updateCartDisplay();
  }
};

// Show notification
const showNotification = (message) => {
  // Check if a notification container exists, create if not
  let notificationContainer = document.querySelector('.notification-container');
  
  if (!notificationContainer) {
    notificationContainer = document.createElement('div');
    notificationContainer.className = 'notification-container';
    document.body.appendChild(notificationContainer);
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  
  // Add to container
  notificationContainer.appendChild(notification);
  
  // Trigger entrance animation
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  // Remove after delay
  setTimeout(() => {
    notification.classList.remove('show');
    notification.addEventListener('transitionend', () => {
      notification.remove();
    });
  }, 3000);
};

// Proceed to checkout
const proceedToCheckout = () => {
  if (cart.length === 0) {
    showNotification('Your cart is empty');
    return;
  }
  
  // In a real implementation, this would redirect to a checkout page
  showNotification('Proceeding to checkout...');
  console.log('Checkout with items:', cart);
};

// Continue shopping
const continueShopping = () => {
  window.location.href = '/menu.html';
};

// Initialize promo code toggle
const initPromoCode = () => {
  const promoToggle = document.querySelector('.promo-toggle');
  const promoForm = document.querySelector('.promo-form');
  
  if (promoToggle && promoForm) {
    promoToggle.addEventListener('click', () => {
      promoForm.classList.toggle('hidden');
      
      if (!promoForm.classList.contains('hidden')) {
        promoForm.querySelector('input').focus();
      }
    });
    
    // Handle promo form submission
    promoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = promoForm.querySelector('input');
      const code = input.value.trim();
      
      if (code) {
        // In a real implementation, this would validate the promo code
        showNotification('Promo code applied!');
        input.value = '';
        promoForm.classList.add('hidden');
      }
    });
    
    // Add click event to the apply button
    const applyBtn = promoForm.querySelector('button');
    if (applyBtn) {
      applyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = promoForm.querySelector('input');
        const code = input.value.trim();
        
        if (code) {
          // In a real implementation, this would validate the promo code
          showNotification('Promo code applied!');
          input.value = '';
          promoForm.classList.add('hidden');
        }
      });
    }
  }
};

// Setup cart functionality
export const setupCart = () => {
  // Get DOM elements
  cartItemsList = document.querySelector('.cart-items');
  cartEmptyMessage = document.querySelector('.cart-empty');
  cartItemCount = document.querySelector('.cart-item-count');
  cartCountDisplay = document.querySelector('.cart-count-display');
  cartSubtotal = document.querySelector('.cart-subtotal');
  cartTax = document.querySelector('.cart-tax');
  cartTotal = document.querySelector('.cart-total');
  checkoutBtn = document.querySelector('.btn-checkout');
  
  // Initialize cart
  initCart();
  
  // Setup event listeners for checkout actions
  const checkoutButton = document.querySelector('.btn-checkout');
  const continueShoppingButton = document.querySelector('.btn-outline');
  
  if (checkoutButton) {
    checkoutButton.addEventListener('click', proceedToCheckout);
  }
  
  if (continueShoppingButton) {
    continueShoppingButton.addEventListener('click', continueShopping);
  }
  
  // Initialize promo code toggle
  initPromoCode();
  
  // Initial display update
  updateCartDisplay();
};

// Export cart functions for use in other modules
export { addItem, removeItem, incrementItem, decrementItem, cart };