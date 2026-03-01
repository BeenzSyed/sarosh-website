/* ============================================
   SAROSH JAFRI FOR HUTTO — Campaign Website
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile Navigation Toggle ---
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // --- Email Signup Form ---
  const signupForm = document.getElementById('signup-form');
  const formSuccess = document.getElementById('form-success');

  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData.entries());
    console.log('Signup data:', data);

    signupForm.hidden = true;
    formSuccess.hidden = false;
  });

  // --- Donate Amount Selector ---
  const donateAmounts = document.querySelectorAll('.donate-amount');
  const donateBtn = document.getElementById('donate-btn');
  let selectedAmount = 50;

  donateAmounts.forEach(btn => {
    btn.addEventListener('click', () => {
      donateAmounts.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const amount = btn.dataset.amount;
      if (amount === 'other') {
        const custom = prompt('Enter a custom donation amount ($):');
        if (custom && !isNaN(custom) && Number(custom) > 0) {
          selectedAmount = Number(custom);
          donateBtn.textContent = `DONATE $${selectedAmount}`;
        }
      } else {
        selectedAmount = Number(amount);
        donateBtn.textContent = `DONATE $${selectedAmount}`;
      }
    });
  });

  donateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`Thank you for your interest in donating $${selectedAmount}! Donation processing will be set up soon.`);
  });

  // --- Scroll Animations ---
  const animatedElements = document.querySelectorAll('.priority-item, .chapter');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('visible'));
  }

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
