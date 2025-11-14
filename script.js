
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
function renderQuestions() {
  questions.forEach((q, index) => {
    const questionHtml = `
      <p>${q.question}</p>
      <input type="text" id="${q.answerId}" placeholder="Your answer">
      <button onclick="checkAnswer(${index})">Submit</button>
    `;
    questionsDiv.innerHTML += questionHtml;
  });
}

// Function to check answers
function checkAnswer(index) {
  const userAnswer = document.getElementById(questions[index].answerId).value;
  if (userAnswer.toLowerCase() === questions[index].correctAnswer.toLowerCase()) {
    correctCount++;
    document.getElementById("correct").innerHTML = correctCount;
  } else {
    incorrectCount++;
    document.getElementById("incorrect").innerHTML = incorrectCount;
  }
}

// Render questions on page load
renderQuestions();


You'll also need to add the checkAnswer function to the window object, since it's being called from an onclick attribute:


window.checkAnswer = checkAnswer;
