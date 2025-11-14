script.js

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
correctAnswer: "studied"
},
{
question: "What's the difference between "affect" and "effect"?",
answerId: "answer2",
correctAnswer: "Affect is a verb, effect is a noun"
},
{
question: "The book __ (write) by my favorite author.",
answerId: "answer3",
correctAnswer: "was written"
},
{
question: "If it __ (rain), I would take an umbrella.",
answerId: "answer4",
correctAnswer: "rained"
},
{
question: "The company __ (expand) its operations to five countries.",
answerId: "answer5",
correctAnswer: "has expanded"
}
];

const questionsDiv = document.getElementById("questions");

questions.forEach((q, index) => {
const questionDiv = document.createElement("div");
questionDiv.className = "question";
questionDiv.innerHTML = <p>${index + 1}. ${q.question}</p> <input type="text" id="${q.answerId}" /> <button onclick="checkAnswer('${q.answerId}', '${q.correctAnswer}', ${index})">Check Answer</button> <p id="result${index}"></p>;
questionsDiv.appendChild(questionDiv);
});

function checkAnswer(answerId, correctAnswer, index) {
const userAnswer = document.getElementById(answerId).value;
const resultElement = document.getElementById(result${index});
if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
resultElement.innerHTML = "Correct!";
resultElement.style.color = "green";
correctCount++;
document.getElementById("correct").innerHTML = correctCount;
} else {
resultElement.innerHTML = Sorry, the correct answer is ${correctAnswer}.;
resultElement.style.color = "red";
incorrectCount++;
document.getElementById("incorrect").innerHTML = incorrectCount;
}
}
