[3:13 PM, 11/14/2025] lubinronald36: const questions = [
  { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Rome"], correct: 0 },
  { question: "What is the largest planet in our solar system?", answers: ["Earth", "Saturn", "Jupiter", "Uranus"], correct: 2 },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;
let timer;

showQuestion();
startTimer();

function showQuestion() {
  const questionElement = document.getElementById('questions');
  questionElement.innerHTML = `
    <p>${questions[currentQuestion].question}</p>
    <ul>
      ${questions[currentQuestion].answers.map((answer, index) => `
        <li><button class="answer-btn" data-index="${index}">${answer}</button></li>
      `).join('')}
    </ul>
  `;
  const answerButtons…
[4:10 PM, 11/14/2025] lubinronald36: class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestion = 0;
    this.correctCount = 0;
    this.incorrectCount = 0;
  }

  loadQuestion() {
    if (this.currentQuestion < this.questions.length) {
      const question = this.questions[this.currentQuestion];
      // Load the question HTML
    } else {
      this.endQuiz();
    }
  }

  checkAnswer(answer) {
    const correctAnswer = this.questions[this.currentQuestion].answer;
    if (answer === correctAnswer) {
      this.correctCount++;
    } else {
      this.incorrectCount++;
    }
    this.currentQuestion++;
    this.loadQuestion();
  }

  endQuiz() {
    // End quiz logic
  }
}

class Timer {
  constructor(time) {
    this.time = time;
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      this.time--;
      // Update the timer HTML
      if (this.time === 0) {
        clearInterval(this.interval);
        // Handle timer expiration
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
  }
}

const quizQuestions = [
  // Your questions here
];

const quiz = new Quiz(quizQuestions);
const timer = new Timer(30);

document.getElementById("start-btn").addEventListener("click", () => {
  quiz.loadQuestion();
  timer.start();
});
