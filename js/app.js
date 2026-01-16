// app.js – Core SPA controller 🚀

// Load a page into <main id="app">
function loadPage(page) {
  const app = document.getElementById("app");

  if (!app) {
    console.error("❌ #app container not found");
    return;
  }

  const pageFunction = window[page + "Page"];

  // Loading state (better UX)
  app.innerHTML = `
    <p style="opacity:0.6;">⏳ Loading ${page}...</p>
  `;

  // Small delay for smoother feel
  setTimeout(() => {
    if (typeof pageFunction === "function") {
      app.innerHTML = pageFunction();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      app.innerHTML = `
        <h2>⚠️ Page Not Found</h2>
        <p>The page "<b>${page}</b>" is not available yet.</p>
      `;
    }
  }, 150);
}

// ✅ Auto-load HOME when dashboard opens
document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});

// ✅ Logout handler (clean UX)
function logout() {
  const confirmLogout = confirm("Are you sure you want to logout?");

  if (!confirmLogout) return;

  // Optional: Firebase signout already handled elsewhere
  // firebase.auth().signOut();

  alert("👋 Logged out successfully");

  // Redirect to login page
  window.location.href = "login.html";
}
