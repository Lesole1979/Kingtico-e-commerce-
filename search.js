// search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.header-icons input[type="text"]');
  const productCards = document.querySelectorAll('.product-card');
  
  searchInput.addEventListener('keyup', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    productCards.forEach(card => {
      // Check product name and price for a match
      const name = card.querySelector('h3').textContent.toLowerCase();
      const price = card.querySelector('.price').textContent.toLowerCase();
      
      if (name.includes(searchTerm) || price.includes(searchTerm)) {
        card.style.display = 'block'; // Show the card if it matches
      } else {
        card.style.display = 'none'; // Hide the card if it doesn't match
      }
    });
  });
});