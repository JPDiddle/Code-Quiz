var highScoresCounter = counterTimer;
var startTime = 75;
var counterTimer;
var timer = document.getElementById("timer");
var btnStart = document.getElementsByClassName("btn-start")[0];
var h1 = document.getElementById("h1");
var instructions = document.getElementById("instructions");

document.getElementById("timer").innerHTML = startTime;
function init() {
  highScores();
}
btnStart.addEventListener("click", function () {
  h1.innerText = "Question:";
  instructions.remove();
  counterTimer = setInterval(myTimer, 1000);
  btnStart.remove();
});
var questionsData = [
  {
    textOfQuestion: "Who is the Terminator?",
    options: ["Arnold Schwarzenegger ", "Sylvester Stallone", "RoboCop", "Andrew Yang"],
    correctIndex: 0,
  },
  {
    textOfQuestion: "What Ninja Turtle has nunchucks?",
    options: [
      "ALFONZO",
      "DONNIE",
      "LEO",
      "MIKEY",
    ],
    correctIndex: 3,
  },
  {
    textOfQuestion:
      "Who is Luke's Father?",
    options: ["Chewie", "Vader", "Count DOoku", "Maul"],
    correctIndex: 1,
  },
];
const questionsDisplayed = document.querySelector("#questions");
const optionsDisplayed = document.querySelector("#options");
let answerIndex = 0;
btnStart.addEventListener("click", function () {
  h1.innerText = "Question:";
  instructions.remove();
  btnStart.remove();
  renderQuestion();
});

optionsDisplayed.addEventListener("click", function (e) {
  const element = e.target;
  const question = questionsData[answerIndex];
  if (!element.matches("button")) return;
  if (element.textContent === question.options[question.correctIndex]) {
    alert("SHOOT! YOU GOT IT!");
    startTime = startTime + 15;
  } else {
    alert("WRONG!");
    startTime = startTime - 15;
  }
  answerIndex++;
  if (answerIndex == questionsData.length) {
    endGame();
  }
  renderQuestion();
});
function renderQuestion() {
  const question = questionsData[answerIndex];
  questionsDisplayed.textContent = question.textOfQuestion;
  optionsDisplayed.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];
    const button = document.createElement("button");
    button.textContent = option;
    optionsDisplayed.append(button);
  }
}
function endGame() {
  questionsDisplayed.remove();
  optionsDisplayed.remove();
  alert(`FiNished!`);
  myStopFunction();
  h1.innerText = "High Scores:";
}
function myTimer() {
  startTime = startTime - 1;
  document.getElementById("timer").innerHTML = startTime;
  if (startTime === 0) {
    alert(`YE lost yer HEAD`);
    myStopFunction();
  }
}
function myStopFunction() {
  clearInterval(counterTimer);
}
function highScores() {
  var storedHighScores = localStorage.getElementById("highscores")
  if (storedHighScores === null) {
    highScoresCounter = 0;
  } else {
    highScoresCounter = storedHighScores;
  }
  win.textContent = "high scores";
}