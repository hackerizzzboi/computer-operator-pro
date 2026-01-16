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
window.showSection = function (sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.add("hidden"));
  document.getElementById(sectionId).classList.remove("hidden");
};

// Logout
window.logout = function () {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
};
