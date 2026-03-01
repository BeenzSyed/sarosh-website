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

    const submitBtn = signupForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'SENDING...';

    fetch('https://script.google.com/macros/s/AKfycbwGXOjN4EdgXz1Y6twm0p0-83CVnWQ6ZsSmWOBqWJt7_0FS33K2HaOFxEp3FsldPNqAwA/exec', {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(() => {
      signupForm.hidden = true;
      formSuccess.hidden = false;
    })
    .catch(() => {
      signupForm.hidden = true;
      formSuccess.hidden = false;
    });
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
