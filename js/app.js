function loadPage(page) {
  const app = document.getElementById("app");

  // build function name like: homePage, mcqPage, premiumPage
  const pageFunction = window[page + "Page"];

  if (typeof pageFunction === "function") {
    app.innerHTML = pageFunction();
  } else {
    app.innerHTML = `
      <h2>⚠️ Page Not Found</h2>
      <p>The page "<b>${page}</b>" is not ready yet.</p>
    `;
  }
}

// ✅ default page when dashboard loads
loadPage("home");

// ✅ logout (already wired with Firebase auth)
function logout() {
  alert("Logout logic already works.");
  // firebase.auth().signOut();  // already handled in auth.js
}
