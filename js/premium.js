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

function premiumNotesGrid() {
  return `
    <h2>📚 Premium Notes – Computer Operator (5th Level)</h2>

    <div class="grid">
      <a href="assets/premium-notes/computer-fundamental/">🧠 Computer Fundamental</a>
      <a href="assets/premium-notes/operating-system/">🖥️ Operating System</a>
      <a href="assets/premium-notes/word-processing/">📝 Word Processing</a>
      <a href="assets/premium-notes/spreadsheet/">📊 Spreadsheet</a>
      <a href="assets/premium-notes/presentation/">📽️ Presentation</a>
      <a href="assets/premium-notes/computer-network/">🌐 Computer Network</a>
      <a href="assets/premium-notes/cyber-security/">🛡️ Cyber Security</a>
      <a href="assets/premium-notes/dbms/">🗄️ DBMS</a>
      <a href="assets/premium-notes/hardware-troubleshooting/">🧰 Hardware</a>
      <a href="assets/premium-notes/web-designing/">🎨 Web Designing</a>
      <a href="assets/premium-notes/public-management/">🏛️ Public Management</a>
      <a href="assets/premium-notes/related-legislations/">⚖️ Legislations</a>
    </div>
  `;
}
