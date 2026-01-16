function toggleTheme() {
  const body = document.body;
  const current = body.getAttribute("data-theme");

  const next = current === "dark" ? "light" : "dark";
  body.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

// Load saved theme
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("theme") || "light";
  document.body.setAttribute("data-theme", saved);
});
