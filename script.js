const questions = [
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
  const answerButtons = document.querySelectorAll('.answer-btn');
  answerButtons.forEach(button => {
    button.addEventListener('click', checkAnswer);
  });
}

function checkAnswer(event) {
  const selectedAnswer = event.target.dataset.index;
  if (selectedAnswer == questions[currentQuestion].correct) {
    score++;
    document.getElementById('correct').textContent = score;
  } else {
    document.getElementById('incorrect').textContent = parseInt(document.getElementById('incorrect').textContent) + 1;
  }
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function startTimer() {
  let time = 60; // 1 minute timer
  timer = setInterval(() => {
    document.getElementById('timer').textContent = Time remaining: ${time} seconds;
    time--;
    if (time < 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timer);
  document.getElementById('questions').innerHTML = 'Quiz over!';
  document.getElementById('timer').innerHTML = '';
}
