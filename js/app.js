// Enhanced app.js with mobile support and animations
let currentPage = 'home';

function loadPage(page) {
  currentPage = page;
  const app = document.getElementById("app");

  if (!app) return;

  const pageFunction = window[page + "Page"];
  
  // Add loading animation
  app.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; min-height: 300px;">
      <div style="text-align: center;">
        <div class="loading" style="width: 50px; height: 50px; border: 4px solid var(--glass-border); border-top-color: var(--primary); border-radius: 50%; margin: 0 auto 20px; animation: spin 1s linear infinite;"></div>
        <p style="opacity: 0.7;">Loading ${page} content...</p>
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

  setTimeout(() => {
    if (typeof pageFunction === "function") {
      app.innerHTML = pageFunction();
      
      // Smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      // Initialize page-specific functions
      if (page === "home") {
        startNepaliClock();
        loadNepaliNews();
      }
      
      // Add entrance animation to cards
      setTimeout(() => {
        const cards = app.querySelectorAll('.card');
        cards.forEach((card, index) => {
          card.style.animationDelay = `${index * 0.1}s`;
          card.classList.add('card-animate');
        });
      }, 100);

    } else {
      app.innerHTML = `
        <div class="card">
          <h2 style="color: var(--danger);">⚠️ Page Not Found</h2>
          <p>The page "<b>${page}</b>" is not available yet.</p>
          <button class="btn" onclick="loadPage('home')" style="margin-top: 20px;">
            <i class="fas fa-home"></i> Return to Home
          </button>
        </div>
      `;
    }
  }, 300);
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
  
  // Add CSS for loading animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    .card-animate {
      animation: cardAppear 0.6s ease-out forwards;
    }
  `;
  document.head.appendChild(style);
});

function logout() {
  const modal = `
    <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 2000;">
      <div class="card" style="max-width: 400px; text-align: center;">
        <h3><i class="fas fa-sign-out-alt"></i> Confirm Logout</h3>
        <p>Are you sure you want to logout?</p>
        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button class="btn" onclick="this.closest('div[style]').remove()" style="flex: 1; background: var(--gray);">
            Cancel
          </button>
          <button class="btn" onclick="performLogout()" style="flex: 1; background: var(--danger);">
            Logout
          </button>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modal);
}

function performLogout() {
  // Add logout animation
  document.body.style.opacity = '0.7';
  
  setTimeout(() => {
    localStorage.removeItem('userSession');
    alert("👋 Logged out successfully!");
    window.location.href = "login.html";
  }, 500);
}

function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme");
  const newTheme = current === "dark" ? "light" : "dark";
  
  // Add transition effect
  html.style.transition = 'background-color 0.5s ease, color 0.5s ease';
  
  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  
  // Update button icon
  const themeBtn = document.querySelector('#themeToggle');
  if (themeBtn) {
    themeBtn.innerHTML = newTheme === 'dark' 
      ? '<i class="fas fa-sun"></i> Light'
      : '<i class="fas fa-moon"></i> Dark';
  }
  
  // Remove transition after animation
  setTimeout(() => {
    html.style.transition = '';
  }, 500);
}

// Enhanced news loader
async function loadNepaliNews() {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  container.innerHTML = `
    <div style="display: flex; justify-content: center; padding: 20px;">
      <div class="loading" style="width: 30px; height: 30px; border: 3px solid var(--glass-border); border-top-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
    </div>
  `;

  try {
    // Using a CORS proxy for demo purposes
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://www.onlinekhabar.com/feed';
    
    const res = await fetch(proxyUrl + targetUrl);
    const text = await res.text();
    
    // Parse RSS feed (simplified)
    const parser = new DOMParser();
    const xml = parser.parseFromString(text, 'text/xml');
    const items = xml.querySelectorAll('item');
    
    let html = '<div class="news-grid">';

    Array.from(items).slice(0, 6).forEach((item, index) => {
      const title = item.querySelector('title')?.textContent || 'No title';
      const link = item.querySelector('link')?.textContent || '#';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      
      // Format date
      const date = pubDate ? new Date(pubDate).toLocaleDateString('en-NP') : 'Recent';
      
      html += `
        <div class="news-card" style="animation-delay: ${index * 0.1}s">
          <h4>${title.length > 100 ? title.substring(0, 100) + '...' : title}</h4>
          <p><i class="far fa-clock"></i> ${date}</p>
          <a href="${link}" target="_blank" style="display: inline-flex; align-items: center; gap: 5px;">
            <i class="fas fa-external-link-alt"></i> Read More
          </a>
        </div>
      `;
    });

    html += '</div>';

    container.innerHTML = html;
    
  } catch (e) {
    console.error('News loading error:', e);
    container.innerHTML = `
      <div class="card" style="text-align: center; padding: 30px;">
        <i class="fas fa-wifi-slash" style="font-size: 2rem; color: var(--gray); margin-bottom: 15px;"></i>
        <p>⚠️ Failed to load news. Showing sample news instead.</p>
        
        <div class="news-grid" style="margin-top: 20px;">
          <div class="news-card">
            <h4>Computer Operator Exam Date Announcement</h4>
            <p>1 hour ago</p>
            <a href="#" onclick="return false;">Read More</a>
          </div>
          <div class="news-card">
            <h4>New Syllabus Update for 2080</h4>
            <p>3 hours ago</p>
            <a href="#" onclick="return false;">Read More</a>
          </div>
          <div class="news-card">
            <h4>Preparation Tips from Toppers</h4>
            <p>5 hours ago</p>
            <a href="#" onclick="return false;">Read More</a>
          </div>
        </div>
      </div>
    `;
  }
}

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  // Alt + H for Home
  if (e.altKey && e.key === 'h') {
    e.preventDefault();
    loadPage('home');
  }
  // Alt + P for Practice
  if (e.altKey && e.key === 'p') {
    e.preventDefault();
    loadPage('mcq');
  }
  // Alt + T for Theme toggle
  if (e.altKey && e.key === 't') {
    e.preventDefault();
    toggleTheme();
  }
  // Escape to close mobile menu
  if (e.key === 'Escape' && window.innerWidth <= 768) {
    const nav = document.querySelector('.nav');
    const menuToggle = document.querySelector('.menu-toggle');
    if (nav && nav.classList.contains('active')) {
      nav.classList.remove('active');
      if (menuToggle) menuToggle.classList.remove('active');
    }
  }
});

// Add service worker for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// Network status detection
window.addEventListener('online', () => {
  showNotification('You are back online!', 'success');
});

window.addEventListener('offline', () => {
  showNotification('You are offline. Some features may not work.', 'warning');
});

function showNotification(message, type) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? 'var(--secondary)' : 'var(--danger)'};
    color: white;
    padding: 15px 25px;
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
    z-index: 3000;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px;">
      <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-triangle'}"></i>
      <span>${message}</span>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out forwards';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
  @keyframes slideIn {
    from { transform: translateX(100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0); opacity: 1; }
    to { transform: translateX(100%); opacity: 0; }
  }
`;
document.head.appendChild(notificationStyles);
