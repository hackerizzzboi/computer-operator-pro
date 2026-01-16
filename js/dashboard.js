import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Protect dashboard
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  } else {
    document.getElementById("userEmail").innerText =
      "Logged in as: " + user.email;
  }
});

// Section switching
window.showSection = function (id) {
  document.querySelectorAll(".section").forEach(sec => {
    sec.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
};

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
