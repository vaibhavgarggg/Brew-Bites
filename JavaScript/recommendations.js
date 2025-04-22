// Import modules
import { products, getFeaturedProducts } from './products.js';
import { addItem } from './cart.js';

// Load recommended products
export function loadRecommendations() {
  const sliderElement = document.querySelector('.recommendations-slider');
  
  if (!sliderElement) return;
  
  // Get featured products
  const recommendedProducts = getFeaturedProducts();
  
  // Clear the slider
  sliderElement.innerHTML = '';
  
  // Add recommendation items
  recommendedProducts.forEach(product => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('recommendation-item');
    
    itemElement.innerHTML = `
      <div class="recommendation-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="recommendation-details">
        <div class="recommendation-name">${product.name}</div>
        <div class="recommendation-price">
          <span>${formatCurrency(product.price)}</span>
          <button class="add-to-cart-btn" data-id="${product.id}">Add</button>
        </div>
      </div>
    `;
    
    sliderElement.appendChild(itemElement);
    
    // Add event listener to the add button
    const addButton = itemElement.querySelector('.add-to-cart-btn');
    addButton.addEventListener('click', () => {
      addItem(product.id);
    });
  });
}

// Helper function for price formatting
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}