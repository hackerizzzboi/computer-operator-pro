function videosPage() {
  return `
    <h3>🎥 Video Classes</h3>
    <p>📚 Choose your instructor and start learning day by day</p>

    <button onclick="showTeacher('deepak')">👨‍🏫📘 Deepak Yadav (GK)</button>
    <button onclick="showTeacher('sudip')">👨‍🏫📕 Sudip Nepali (GK)</button>

    <div id="videoContent" style="margin-top:20px;"></div>
  `;
}

function showTeacher(name) {
  if (name === "deepak") {
    document.getElementById("videoContent").innerHTML = `
      <h4>📘 Deepak Yadav – GK</h4>
      <p>🚧 Videos will be added soon.</p>
    `;
  }

  if (name === "sudip") {
    document.getElementById("videoContent").innerHTML = `
      <h4>📕 Sudip Nepali – GK</h4>
      <p>🎯 Structured course for exam preparation</p>

      <h5>📘 GK Series</h5>

      <p>📅🔥 <b>GK Day 1</b></p>
      <iframe src="https://www.youtube.com/embed/cxgy_Jcw3w8" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 2</b></p>
      <iframe src="https://www.youtube.com/embed/QobhKQi89bU" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 3</b></p>
      <iframe src="https://www.youtube.com/embed/jqQtXmf44CQ" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 4</b></p>
      <iframe src="https://www.youtube.com/embed/JFWt_iVTnpw" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 5</b></p>
      <iframe src="https://www.youtube.com/embed/IfC9Keo4fDo" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 6</b></p>
      <iframe src="https://www.youtube.com/embed/2EGV3xEZGSk" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 7</b></p>
      <iframe src="https://www.youtube.com/embed/2JjpdLUaBEs" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 8</b></p>
      <iframe src="https://www.youtube.com/embed/T2ewQFGg9hU" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 9</b></p>
      <iframe src="https://www.youtube.com/embed/aI3OYRjpnN0" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 10</b></p>
      <iframe src="https://www.youtube.com/embed/8o_03Oy07zI" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 11</b></p>
      <iframe src="https://www.youtube.com/embed/5cgq_RTqCZ4" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 12</b></p>
      <iframe src="https://www.youtube.com/embed/6y_tgDm6ulg" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 13</b></p>
      <iframe src="https://www.youtube.com/embed/7NfO7p8DKR8" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 14</b></p>
      <iframe src="https://www.youtube.com/embed/pFhXzJOKZi8" allowfullscreen></iframe>

      <p>📅🔥 <b>GK Day 15</b></p>
      <iframe src="https://www.youtube.com/embed/uhN6Rl6b6js" allowfullscreen></iframe>

      <hr>

      <h5>🏛️📙 Public Management Series</h5>

      <p>🏛️📅 <b>Public Management Day 1</b></p>
      <iframe src="https://www.youtube.com/embed/Htz9GZdYvg0" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 2</b></p>
      <iframe src="https://www.youtube.com/embed/y59joEoiFSY" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 3</b></p>
      <iframe src="https://www.youtube.com/embed/fvvxxlBnDH0" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 4</b></p>
      <iframe src="https://www.youtube.com/embed/Xppa2cNtc0M" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 5</b></p>
      <iframe src="https://www.youtube.com/embed/pz9ofsb2qUU" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 6</b></p>
      <iframe src="https://www.youtube.com/embed/bonbURLkDKk" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 7</b></p>
      <iframe src="https://www.youtube.com/embed/34wJlYIKFfc" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 8</b></p>
      <iframe src="https://www.youtube.com/embed/z8IlByJMImA" allowfullscreen></iframe>

      <p>🏛️📅 <b>Public Management Day 9</b></p>
      <iframe src="https://www.youtube.com/embed/JylqgMVmQSk" allowfullscreen></iframe>
    `;
  }
}
