function loadPage(page) {
  const app = document.getElementById("app");

  if (!app) return;

  const pageFunction = window[page + "Page"];

  app.innerHTML = `<p style="opacity:0.6;">⏳ Loading ${page}...</p>`;

  setTimeout(() => {
    if (typeof pageFunction === "function") {
      app.innerHTML = pageFunction();
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (page === "home") {
        startNepaliClock();
        loadNepaliNews();
      }

    } else {
      app.innerHTML = `
        <h2>⚠️ Page Not Found</h2>
        <p>The page "<b>${page}</b>" is not available yet.</p>
      `;
    }
  }, 150);
}

document.addEventListener("DOMContentLoaded", () => {
  loadPage("home");
});

function logout() {
  if (confirm("Are you sure you want to logout?")) {
    alert("👋 Logged out successfully");
    window.location.href = "login.html";
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");

  if (current === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
}

function startNepaliClock() {
  const clock = document.getElementById("nepaliClock");
  if (!clock) return;

  setInterval(() => {
    const now = new Date();

    const options = {
      timeZone: "Asia/Kathmandu",
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };

    clock.innerHTML = now.toLocaleString("ne-NP", options);
  }, 1000);
}

async function loadNepaliNews() {
  const container = document.getElementById("newsContainer");
  if (!container) return;

  container.innerHTML = "⏳ Loading latest news...";

  try {
    const res = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://rss.onlinekhabar.com/rss"
    );

    const data = await res.json();

    let html = "<div class='news-grid'>";

    data.items.slice(0, 6).forEach((news) => {
      html += `
        <div class="news-card">
          <h4>${news.title}</h4>
          <p>${news.pubDate}</p>
          <a href="${news.link}" target="_blank">Read More</a>
        </div>
      `;
    });

    html += "</div>";

    container.innerHTML = html;
  } catch (e) {
    container.innerHTML =
      "⚠️ Failed to load news. Please check internet connection.";
  }
}
