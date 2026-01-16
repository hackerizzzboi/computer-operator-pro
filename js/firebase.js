// ✅ Firebase browser SDK (for HTML + JS)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔐 Your Firebase config (SAFE to expose)
const firebaseConfig = {
  apiKey: "AIzaSyBpAY_iSN_2Vc3v4HHccMsnwasdGh9j6QY",
  authDomain: "project-computer-operator.firebaseapp.com",
  projectId: "project-computer-operator",
  storageBucket: "project-computer-operator.firebasestorage.app",
  messagingSenderId: "1078748134164",
  appId: "1:1078748134164:web:47c59ca08c70820e25a001"
};

// 🚀 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔐 Auth (for signup/login)
export const auth = getAuth(app);

// 🗄️ Firestore (for MCQs, scores)
export const db = getFirestore(app);
