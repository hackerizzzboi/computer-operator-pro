function videosPage() {
  return `
    <h3>YouTube Video Tutorials</h3>

    <button onclick="showTeacher('deepak')">Deepak Yadav (GK)</button>
    <button onclick="showTeacher('sudip')">Sudip Nepali (GK)</button>

    <div id="videoContent" style="margin-top:20px;">
      <p>Select a teacher.</p>
    </div>
  `;
}

function showTeacher(name) {
  if (name === "deepak") {
    document.getElementById("videoContent").innerHTML = `
      <h4>Deepak Yadav – GK</h4>
      <p>Videos will be added soon.</p>
    `;
  }

  if (name === "sudip") {
    document.getElementById("videoContent").innerHTML = `
      <h4>Sudip Nepali – GK</h4>

      <p><b>GK Day 1</b></p>
      <iframe src="https://www.youtube.com/embed/cxgy_Jcw3w8" allowfullscreen></iframe>

      <p><b>GK Day 2</b></p>
      <iframe src="https://www.youtube.com/embed/QobhKQi89bU" allowfullscreen></iframe>
    `;
  }
}
