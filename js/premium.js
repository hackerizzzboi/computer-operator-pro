function premiumPage() {
  const user = firebase.auth().currentUser;

  if (!user) {
    return `
      <h3>🔒 Premium Content Locked</h3>
      <p>You must be logged in to access premium notes.</p>
      <a href="login.html">👉 Login Now</a>
    `;
  }

  return `
    <h3>🔐 Premium Notes – Computer Operator</h3>
    <p>Topic-wise paid notes, MCQs & handouts</p>

    <div class="grid">

      <div class="card">🧠 Computer Fundamental<br>
        <a href="assets/premium-notes/computer-fundamental/" target="_blank">Open</a>
      </div>

      <div class="card">🖥️ Operating System<br>
        <a href="assets/premium-notes/operating-system/" target="_blank">Open</a>
      </div>

      <div class="card">📝 Word Processing<br>
        <a href="assets/premium-notes/word-processing/" target="_blank">Open</a>
      </div>

      <div class="card">📊 Spreadsheet<br>
        <a href="assets/premium-notes/spreadsheet/" target="_blank">Open</a>
      </div>

      <div class="card">📽️ Presentation<br>
        <a href="assets/premium-notes/presentation/" target="_blank">Open</a>
      </div>

      <div class="card">🌐 Computer Network<br>
        <a href="assets/premium-notes/computer-network/" target="_blank">Open</a>
      </div>

      <div class="card">🛡️ Cyber Security<br>
        <a href="assets/premium-notes/cyber-security/" target="_blank">Open</a>
      </div>

      <div class="card">🗄️ DBMS<br>
        <a href="assets/premium-notes/dbms/" target="_blank">Open</a>
      </div>

      <div class="card">🧰 Hardware & Troubleshooting<br>
        <a href="assets/premium-notes/hardware-troubleshooting/" target="_blank">Open</a>
      </div>

      <div class="card">🎨 Web Designing<br>
        <a href="assets/premium-notes/web-designing/" target="_blank">Open</a>
      </div>

      <div class="card">🏛️ Public Management<br>
        <a href="assets/premium-notes/public-management/" target="_blank">Open</a>
      </div>

      <div class="card">⚖️ Related Legislations<br>
        <a href="assets/premium-notes/related-legislations/" target="_blank">Open</a>
      </div>

    </div>

    <p style="margin-top:20px;">💳 Payment system coming soon…</p>
  `;
}
