var timeEl = document.querySelector(".time");
var SubEl = document.getElementById("subheader");

var secondsLeft = 25;

var secondsLeft = 25;

function setTime() {
  
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left!!! HURRY IT UP!";

    if(secondsLeft === 0) {
      
      clearInterval(timerInterval);
      
      sendMessage();
    }

  }, 1000);
}


function sendMessage() {
    timeEl.textContent = " ";
    
  
  }
  
  setTime();


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        
        var element = document.getElementById("question-cont");
        element.innerHTML = quiz.getQuestionIndex().text;
 
       
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("count");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
e
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h3 id='score'> Your scores: " + quiz.score + "</h3>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("Where in the world is Carmen Sandiego?", ["Tempe, AZ?", "Africa?","The U.K.?", "Sandiego?"], "Sandiego?"),
    new Question("Which name is one of the ninja turtles?", ["Michelle", "Leonardo", "Donna", "Orlando"], "Leonardo"),
    new Question("Sombody toucha my...?", ["Spaget", "LasagnE","Kiwi", "Ford F150"], "Spaget"),
    new Question("Who is the current Spider-Man?", ["Andrew Garfunkle", "Toby Macaronie", "Tom Hiddleston", "Tom Holland"], "Tom Holland"),
    new Question("Where is East Virginia", ["What", "Where", "Who", "When"], "What")
];
 

var quiz = new Quiz(questions);
 

populate();