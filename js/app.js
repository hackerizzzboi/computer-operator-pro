// Enhanced app.js with all modern features
let currentPage = 'home';

function loadPage(page) {
  currentPage = page;
  const app = document.getElementById("app");

  if (!app) return;

  const pageFunction = window[page + "Page"];
  
  // Create loading animation
  app.innerHTML = `
    <div style="
      display: flex; 
      justify-content: center; 
      align-items: center; 
      min-height: 500px;
      animation: fadeIn 0.3s ease;
    ">
      <div style="text-align: center;">
        <div class="loading-spinner" style="margin: 0 auto 20px;"></div>
        <h3 style="margin-bottom: 10px; color: var(--dark);">Loading ${page.charAt(0).toUpperCase() + page.slice(1)}</h3>
        <p style="color: var(--gray); opacity: 0.7;">Preparing your content...</p>
        <div style="
          width: 200px;
          height: 4px;
          background: var(--glass-bg);
          border-radius: 2px;
          margin: 20px auto;
          overflow: hidden;
        ">
          <div style="
            width: 60%;
            height: 100%;
            background: var(--gradient-primary);
            border-radius: 2px;
            animation: loadingBar 1.5s infinite;
          "></div>
        </div>
      </div>
    </div>
  `;

  // Close mobile menu if open
  if (window.innerWidth <= 768) {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
    }
  }

  // Load page content with delay for better UX
  setTimeout(() => {
    if (typeof pageFunction === "function") {
      try {
        app.innerHTML = pageFunction();
        
        // Smooth scroll to top
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

        // Initialize page-specific functions
        if (page === "home") {
          // Use setTimeout to ensure DOM is ready
          setTimeout(() => {
            if (typeof startNepaliClock === 'function') {
              startNepaliClock();
            }
            if (typeof loadNepaliNews === 'function') {
              loadNepaliNews();
            }
          }, 100);
        }
        
        // Add entrance animation to all cards
        setTimeout(() => {
          const cards = app.querySelectorAll('.card, .news-card, .leaderboard-item, .update-item, .recommendation');
          cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.05}s`;
            card.classList.add('card-animate');
          });
        }, 200);

        // Update page title
        document.title = `${page.charAt(0).toUpperCase() + page.slice(1)} - Computer Operator Pro`;

      } catch (error) {
        console.error('Error loading page:', error);
        app.innerHTML = `
          <div class="card" style="text-align: center; padding: 50px 30px;">
            <div style="
              width: 80px;
              height: 80px;
              background: linear-gradient(135deg, var(--danger), var(--accent));
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 0 auto 25px;
            ">
              <i class="fas fa-exclamation-triangle" style="font-size: 2rem; color: white;"></i>
            </div>
            <h2 style="color: var(--danger); margin-bottom: 15px;">Loading Error</h2>
            <p style="color: var(--gray); margin-bottom: 25px; line-height: 1.6;">
              There was an error loading the ${page} page. Please try again.
            </p>
            <button class="btn" onclick="loadPage('home')" style="margin: 10px;">
              <i class="fas fa-home"></i> Return to Home
            </button>
            <button class="btn btn-outline" onclick="location.reload()" style="margin: 10px;">
              <i class="fas fa-redo"></i> Refresh Page
            </button>
          </div>
        `;
      }

    } else {
      // Page not found
      app.innerHTML = `
        <div class="card" style="text-align: center; padding: 50px 30px;">
          <div style="
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, var(--gray), var(--dark));
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
          ">
            <i class="fas fa-search" style="font-size: 2rem; color: white;"></i>
          </div>
          <h2 style="color: var(--dark); margin-bottom: 15px;">Page Not Found</h2>
          <p style="color: var(--gray); margin-bottom: 25px; line-height: 1.6;">
            The page "<b>${page}</b>" is not available yet.<br>
            We're working on adding more features soon!
          </p>
          <button class="btn" onclick="loadPage('home')" style="margin-top: 20px;">
            <i class="fas fa-home"></i> Return to Dashboard
          </button>
        </div>
      `;
    }
  }, 600); // Increased delay for better loading experience
}

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  // Add loading animations CSS
  const loadingStyles = document.createElement('style');
  loadingStyles.textContent = `
    @keyframes loadingBar {
      0% { transform: translateX(-100%); }
      50% { transform: translateX(100%); }
      100% { transform: translateX(100%); }
    }
    
    .card-animate {
      animation: cardAppear 0.6s ease-out forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `;
  document.head.appendChild(loadingStyles);
  
  // Load home page
  loadPage("home");
  
  // Add service worker for PWA
  if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
    });
  }
  
  // Network status detection
  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  
  function updateOnlineStatus() {
    const isOnline = navigator.onLine;
    showNotification(
      isOnline ? 'You are back online!' : 'You are offline. Some features may not work.',
      isOnline ? 'success' : 'warning'
    );
    
    // Update UI based on connectivity
    document.body.classList.toggle('offline', !isOnline);
  }
  
  // Initialize offline UI class
  if (!navigator.onLine) {
    document.body.classList.add('offline');
    showNotification('You are offline. Some features may not work.', 'warning');
  }
});

// Enhanced notification system
function showNotification(message, type = 'info', duration = 3000) {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll('.notification');
  existingNotifications.forEach(notification => {
    notification.style.animation = 'slideOutRight 0.3s ease forwards';
    setTimeout(() => notification.remove(), 300);
  });
  
  // Create notification
  const notification = document.createElement('div');
  notification.className = 'notification';
  
  const icons = {
    success: 'fas fa-check-circle',
    warning: 'fas fa-exclamation-triangle',
    error: 'fas fa-times-circle',
    info: 'fas fa-info-circle'
  };
  
  const colors = {
    success: 'var(--secondary)',
    warning: 'var(--accent)',
    error: 'var(--danger)',
    info: 'var(--primary)'
  };
  
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${colors[type] || colors.info};
    color: white;
    padding: 18px 25px;
    border-radius: 12px;
    box-shadow: var(--shadow-xl);
    z-index: 9999;
    animation: slideInRight 0.3s ease-out;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: 300px;
    max-width: 400px;
    transform-origin: top right;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 12px;">
      <i class="${icons[type] || icons.info}" style="font-size: 1.3rem;"></i>
      <div style="flex: 1;">
        <div style="font-weight: 600; margin-bottom: 3px;">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
        <div style="font-size: 0.95rem; opacity: 0.9;">${message}</div>
      </div>
      <button onclick="this.closest('.notification').remove()" style="
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.2s;
        padding: 5px;
      ">
        <i class="fas fa-times"></i>
      </button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Auto remove after duration
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOutRight 0.3s ease forwards';
      setTimeout(() => notification.remove(), 300);
    }
  }, duration);
  
  // Add animations CSS if not exists
  if (!document.querySelector('#notification-animations')) {
    const style = document.createElement('style');
    style.id = 'notification-animations';
    style.textContent = `
      @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Only trigger when not in input fields
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  
  // Alt + H for Home
  if (e.altKey && e.key === 'h') {
    e.preventDefault();
    loadPage('home');
    showNotification('Navigated to Home', 'info', 1500);
  }
  
  // Alt + P for Practice
  if (e.altKey && e.key === 'p') {
    e.preventDefault();
    loadPage('mcq');
    showNotification('Opening Practice Tests', 'info', 1500);
  }
  
  // Alt + T for Theme toggle
  if (e.altKey && e.key === 't') {
    e.preventDefault();
    toggleTheme();
    showNotification('Theme changed', 'info', 1500);
  }
  
  // Escape to close mobile menu
  if (e.key === 'Escape') {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
    }
    
    // Close any open modals
    const modals = document.querySelectorAll('.logout-modal, .notification');
    modals.forEach(modal => {
      if (modal.classList.contains('logout-modal')) {
        modal.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => modal.remove(), 300);
      } else {
        modal.remove();
      }
    });
  }
  
  // Ctrl + S for Save Progress (simulated)
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    showNotification('Progress saved successfully!', 'success', 2000);
  }
});

// Enhanced performance monitoring
let pageLoadTime = Date.now();
window.addEventListener('load', () => {
  const loadTime = Date.now() - pageLoadTime;
  console.log(`Page loaded in ${loadTime}ms`);
  
  // Send to analytics if needed
  if (loadTime > 2000) {
    console.warn('Page load time is high, consider optimizing');
  }
});

// Make functions globally available
window.loadPage = loadPage;
window.showNotification = showNotification;

// Add offline CSS class
const offlineStyle = document.createElement('style');
offlineStyle.textContent = `
  body.offline::after {
    content: '⚠️ Offline';
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--danger);
    color: white;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 9999;
    animation: pulse 2s infinite;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
`;
document.head.appendChild(offlineStyle);
