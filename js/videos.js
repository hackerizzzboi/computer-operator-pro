function videosPage() {
  return `
    <h3>YouTube Video Tutorials</h3>

    <button onclick="showTeacher('deepak')">Deepak Yadav (GK)</button>
    <button onclick="showTeacher('sudip')">Sudip Nepali (GK)</button>

    <div id="videoContent" style="margin-top:20px;">
      <p>Select a teacher to view videos.</p>
    </div>
  `;
}

function showTeacher(name) {
  if (name === "deepak") {
    document.getElementById("videoContent").innerHTML = `
      <h4>📘 Deepak Yadav – GK</h4>
      <p>Videos will be added soon.</p>
    `;
  }

  if (name === "sudip") {
    document.getElementById("videoContent").innerHTML = `
      <h4>📕 Sudip Nepali – GK</h4>
      <p>GK Day 1 – Day 15</p>
      <p>Public Management Day 1 – Day 9</p>
      <p><i>Videos already added earlier.</i></p>
    `;
  }
}
