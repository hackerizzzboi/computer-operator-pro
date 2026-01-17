// ===== MODERN CSS ANIMATIONS & INTERACTIONS =====
// Add this section at the end of your existing theme.js file

document.addEventListener('DOMContentLoaded', function() {
  // Stagger card animations with random progress values
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    // Set random progress width between 60-100%
    const progressWidth = Math.floor(Math.random() * 40) + 60;
    card.style.setProperty('--progress-width', `${progressWidth}%`);
    card.style.animationDelay = `${index * 0.1}s`;
    
    // Find progress bar inside card if it exists
    const progressFill = card.querySelector('.progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progressWidth}%`;
    }
  });
  
  // Navbar scroll effect (adds/removes 'scrolled' class)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Trigger once on load
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
  }
  
  // Scroll animations using Intersection Observer
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
          // Optional: Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe elements for scroll animations
    document.querySelectorAll('.card, .content-header, .card-grid').forEach(el => {
      observer.observe(el);
    });
  } else {
    // Fallback for browsers without Intersection Observer
    document.querySelectorAll('.card, .content-header').forEach(el => {
      el.classList.add('animate-on-scroll');
    });
  }
  
  // Mobile menu toggle functionality
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');
  
  // Create mobile menu toggle button if it doesn't exist
  if (window.innerWidth <= 768 && !menuToggle && sidebar) {
    const navContent = document.querySelector('.navbar > div:last-child');
    if (navContent) {
      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'menu-toggle';
      toggleBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
      `;
      navContent.prepend(toggleBtn);
      
      toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('active');
        sidebar.classList.toggle('active');
        document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
      });
    }
  }
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('active')) {
      if (!sidebar.contains(event.target) && 
          (!menuToggle || !menuToggle.contains(event.target))) {
        sidebar.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
  
  // Add smooth hover effects to buttons
  const buttons = document.querySelectorAll('.btn, .toggle-btn, .sidebar a');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Initialize parallax elements
  const parallaxContainer = document.querySelector('.parallax-bg');
  if (!parallaxContainer) {
    // Create parallax background if it doesn't exist
    const parallax = document.createElement('div');
    parallax.className = 'parallax-bg';
    parallax.innerHTML = `
      <div class="parallax-element"></div>
      <div class="parallax-element"></div>
      <div class="parallax-element"></div>
    `;
    document.body.prepend(parallax);
  }
  
  // Parallax scroll effect
  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    parallaxElements.forEach((element, index) => {
      const speed = [0.05, 0.1, 0.15][index] || 0.1;
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  });
});

// ===== ENHANCED THEME TRANSITION =====
// Update your existing theme toggle to include smooth transitions
function toggleTheme() {
  const body = document.body;
  
  // Add transition class for smooth change
  body.classList.add('dark-transition');
  
  // Toggle dark class
  body.classList.toggle('dark');
  
  // Save preference
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update toggle button text/icon
  const toggleBtn = document.querySelector('.toggle-btn');
  if (toggleBtn) {
    const icon = toggleBtn.querySelector('i');
    const text = toggleBtn.querySelector('span');
    
    if (icon) {
      icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (text) {
      text.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    }
    
    // Add animation to button
    toggleBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      toggleBtn.style.transform = 'scale(1)';
    }, 150);
  }
  
  // Remove transition class after animation completes
  setTimeout(() => {
    body.classList.remove('dark-transition');
  }, 500);
}
