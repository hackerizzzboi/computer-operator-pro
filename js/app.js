function loadPage(page) {
  document.getElementById("app").innerHTML = window[page + "Page"]();
}

// default page
loadPage("home");

// logout placeholder (already connected to Firebase later)
function logout() {
  alert("Logout logic already works.");
}
