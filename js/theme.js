function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("mode", document.body.classList.contains("dark"));
}

window.onload = () => {
  if (localStorage.getItem("mode") === "true") {
    document.body.classList.add("dark");
  }
}
