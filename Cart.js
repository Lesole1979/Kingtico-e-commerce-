// cart.js
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.product-card .btn');
  const cartCountSpan = document.querySelector('.cart-icon span');
  
  let cartCount = 0;
  
  addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault(); // Prevent the default jump-to-anchor behavior
      cartCount++;
      cartCountSpan.textContent = cartCount;
      alert('Item added to cart!');
      
      // Optional: Visually indicate item was added (e.g., disable button temporarily)
      button.textContent = 'Added!';
      setTimeout(() => {
        button.textContent = 'Add to Cart';
      }, 1000);
    });
  });
});