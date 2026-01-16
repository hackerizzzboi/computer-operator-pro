function premiumPage() {

  // 🔐 CHANGE THIS LATER AFTER PAYMENT
  const isPremiumUser = false;

  if (!isPremiumUser) {
    return `
      <h2>🔒 Premium Content Locked</h2>
      <p>Access chapter-wise notes & premium videos.</p>

      <ul>
        <li>🧠 Computer Fundamentals</li>
        <li>🖥️ Operating System</li>
        <li>📝 Word Processing</li>
        <li>📊 Spreadsheet</li>
        <li>🗄️ DBMS</li>
        <li>🌐 Computer Network</li>
        <li>🛡️ Cyber Security</li>
        <li>🧰 Hardware & Troubleshooting</li>
        <li>🎨 Web Designing</li>
        <li>🏛️ Public Management</li>
        <li>⚖️ Related Legislations</li>
      </ul>

      <button onclick="loadPage('payment')">💳 Buy Premium</button>
    `;
  }

  // 🔓 UNLOCKED (later)
  return premiumNotesGrid();
}
