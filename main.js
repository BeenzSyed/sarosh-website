/* ============================================
   SAROSH JAFRI FOR HUTTO — Campaign Website
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar shadow on scroll ---
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

});
