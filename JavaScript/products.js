// Sample product data
export const products = [
  {
    id: 'coffee-1',
    name: 'Signature House Blend',
    description: 'Our signature medium roast coffee with notes of chocolate and caramel.',
    price: 4.99,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'coffee-2',
    name: 'Ethiopian Light Roast',
    description: 'A light and fruity single-origin Ethiopian coffee with floral notes.',
    price: 5.49,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 'coffee-3',
    name: 'Dark Sumatra Roast',
    description: 'Bold and earthy dark roast with low acidity and a smooth finish.',
    price: 5.29,
    category: 'coffee',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'pastry-1',
    name: 'Almond Croissant',
    description: 'Buttery croissant filled with almond cream and topped with sliced almonds.',
    price: 3.99,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'pastry-2',
    name: 'Chocolate Chip Cookie',
    description: 'Soft and chewy cookie with chunks of dark and milk chocolate.',
    price: 2.49,
    category: 'pastry',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true
  },
  {
    id: 'breakfast-1',
    name: 'Avocado Toast',
    description: 'Sourdough toast topped with mashed avocado, cherry tomatoes, and microgreens.',
    price: 8.99,
    category: 'breakfast',
    image: 'https://images.unsplash.com/photo-1608363831438-06d9293864c9?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    popular: true
  },
  {
    id: 'sandwich-1',
    name: 'Turkey & Brie Sandwich',
    description: 'Sliced turkey breast with brie cheese, cranberry spread, and arugula on ciabatta.',
    price: 9.99,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: false
  },
  {
    id: 'salad-1',
    name: 'Mediterranean Quinoa Bowl',
    description: 'Quinoa with roasted vegetables, feta cheese, olives, and lemon tahini dressing.',
    price: 10.99,
    category: 'lunch',
    image: 'https://images.unsplash.com/photo-1556386470-bcdc6a9e9197?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
    popular: true
  }
];

// Function to get featured products
export function getFeaturedProducts(limit = 4) {
  return products
    .filter(product => product.popular)
    .slice(0, limit);
}

// Function to get products by category
export function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

// Function to get product by ID
export function getProductById(id) {
  return products.find(product => product.id === id);
}