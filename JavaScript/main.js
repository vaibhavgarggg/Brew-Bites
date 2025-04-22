// Import modules
import { setupCart } from './cart.js';
import { setupHeader } from './header.js';
import { loadRecommendations } from './recommendations.js';

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupCart();
  loadRecommendations();
});