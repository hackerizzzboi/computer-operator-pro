function videosPage() {
  return `
    <h3>🎥 YouTube Video Tutorials</h3>

    <div class="tab-buttons">
      <button onclick="showTeacher('deepak')">📘 Deepak Yadav (GK)</button>
      <button onclick="showTeacher('sudip')">📕 Sudip Nepali (GK)</button>
    </div>

    <div id="videoContent" class="video-grid">
      <p>👉 Select a teacher to start learning.</p>
    </div>
  `;
}

function showTeacher(name) {
  if (name === "deepak") {
    document.getElementById("videoContent").innerHTML = `
      <h4>📘 Deepak Yadav – GK</h4>
      <p>📌 GK video series by Deepak Yadav.</p>
      <p>⏳ Videos will be added soon.</p>
    `;
  }

  if (name === "sudip") {
    document.getElementById("videoContent").innerHTML = `
      <h4>📕 Sudip Nepali – GK & Public Management</h4>

      <h5>📗 GK Series</h5>
      ${gkVideos().join("")}

      <h5>📙 Public Management Series</h5>
      ${pmVideos().join("")}
    `;
  }
}

/* GK DAY-WISE VIDEOS */
function gkVideos() {
  const ids = [
    "cxgy_Jcw3w8","QobhKQi89bU","jqQtXmf44CQ","JFWt_iVTnpw","IfC9Keo4fDo",
    "2EGV3xEZGSk","2JjpdLUaBEs","T2ewQFGg9hU","aI3OYRjpnN0","8o_03Oy07zI",
    "5cgq_RTqCZ4","6y_tgDm6ulg","7NfO7p8DKR8","pFhXzJOKZi8","uhN6Rl6b6js"
  ];

  return ids.map((id, i) => `
    <div class="video-card">
      <p>📘 <b>GK Day ${i + 1}</b></p>
      <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
    </div>
  `);
}

/* PUBLIC MANAGEMENT DAY-WISE VIDEOS */
function pmVideos() {
  const ids = [
    "Htz9GZdYvg0","y59joEoiFSY","fvvxxlBnDH0","Xppa2cNtc0M","pz9ofsb2qUU",
    "bonbURLkDKk","34wJlYIKFfc","z8IlByJMImA","JylqgMVmQSk"
  ];

  return ids.map((id, i) => `
    <div class="video-card">
      <p>📙 <b>PM Day ${i + 1}</b></p>
      <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
    </div>
  `);
}
