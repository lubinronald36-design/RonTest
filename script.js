
const questions = [
  { question: "What is the capital of France?", answers: ["Paris", "London", "Berlin", "Rome"], correct: 0 },
  { question: "What is the largest planet in our solar system?", answers: ["Earth", "Saturn", "Jupiter", "Uranus"], correct: 2 },
  // Add more questions here...
];

let currentQuestion = 0;
let score = 0;
let timer;

document.getElementById('start-btn').addEventListener('click', startQuiz);

function startQuiz() {
  document.getElementById('start-btn').style.display = 'none';
  showQuestion();
  startTimer();
}

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
  const answerButtons = document.querySelectorAll('.answer-btn');
  answerButtons.forEach(button => {
    button.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.dataset.index;
  if (selectedAnswer == questions
