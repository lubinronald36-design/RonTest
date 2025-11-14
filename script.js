let time = 60;
let timer = setInterval(() => {
  time--;
  document.getElementById("time").innerHTML = time;
  if (time === 0) {
    clearInterval(timer);
    alert("Time's up!");
  }
}, 1000);

let correctCount = 0;
let incorrectCount = 0;

const questions = [
  {
    question: "If I __ (study) harder, I would pass the exam.",
    answerId: "answer1",
    correctAnswer: "studied",
  },
  {
    question: "What's the difference between \"affect\" and \"effect\"?",
    answerId: "answer2",
    correctAnswer: "Affect is a verb, effect is a noun",
  },
  {
    question: "The book __ (write) by my favorite author.",
    answerId: "answer3",
    correctAnswer: "was written",
  },
  {
    question: "If it __ (rain), I would take an umbrella.",
    answerId: "answer4",
    correctAnswer: "rained",
  },
  {
    question: "The company __ (expand) its operations to five countries.",
    answerId: "answer5",
    correctAnswer: "has expanded",
  },
];

const questionsDiv = document.getElementById("questions");

// Function to render questions
questions.forEach((q) => {
  const questionHtml = `
    <p>${q.question}</p>
    <input type="text" id="${q.answerId}" placeholder="Your answer">
  `;
  questionsDiv.innerHTML += questionHtml;
});

// Update score display
document.getElementById("correct").innerHTML = correctCount;
document.getElementById("incorrect").innerHTML = incorrectCount;
// Add a submit button
const submitButton = document.createElement("button");
submitButton.textContent = "Submit Answers";
document.body.appendChild(submitButton);

// Function to check answers on submit
submitButton.onclick = function checkAnswers() {
  questions.forEach((q, index) => {
    const userAnswer = document.getElementById(q.answerId).value;
    if (userAnswer.toLowerCase() === q.correctAnswer.toLowerCase()) {
      correctCount++;
      document.getElementById("correct").innerHTML = correctCount;
    } else {
      incorrectCount++;
      document.getElementById("incorrect").innerHTML = incorrectCount;
    }
  });
  clearInterval(timer); // Stop timer on submit
  alert(You scored ${correctCount} correct, ${incorrectCount} incorrect);
};
