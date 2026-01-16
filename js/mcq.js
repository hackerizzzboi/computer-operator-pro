// Sample MCQs (we'll move to Firestore later)
const mcqs = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Processing Unit",
      "Central Program Unit",
      "Control Processing Unit"
    ],
    answer: 0
  },
  {
    question: "Which device is used to input text?",
    options: [
      "Monitor",
      "Printer",
      "Keyboard",
      "Speaker"
    ],
    answer: 2
  }
];

let current = 0;
let score = 0;

function loadQuestion() {
  const q = mcqs[current];
  document.getElementById("question").innerText = q.question;
  q.options.forEach((opt, i) => {
    document.getElementById("opt" + i).innerText = opt;
  });
}

window.submitAnswer = function () {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) {
    alert("Select an option");
    return;
  }

  if (parseInt(selected.value) === mcqs[current].answer) {
    score++;
    document.getElementById("result").innerText = "✅ Correct";
  } else {
    document.getElementById("result").innerText = "❌ Wrong";
  }

  document.getElementById("score").innerText = score;

  current++;
  if (current < mcqs.length) {
    setTimeout(loadQuestion, 1000);
  } else {
    document.getElementById("question").innerText = "Test completed!";
  }
};

loadQuestion();
