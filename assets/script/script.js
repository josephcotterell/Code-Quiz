var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var timer = document.getElementById("timer");

var timerValue = 3;
var questions = [
  {
    question: "Arrays in JavaScript can be used to store what?",
    answers: [
      { text: "numbers", correct: false },
      { text: "booleans", correct: false },
      { text: "strings", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question: "What is ES5",
    answers: [
      { text: "Version of js", correct: true },
      { text: "A spanish dish", correct: false },
      { text: "What is it indeed?", correct: false },
      { text: "all of the above", correct: false },
    ],
  },
];

var shuffledQuestions;
var currentQuestionIndex = 0;

startButton.addEventListener("click", startQuiz);

function timerTick() {
  if (timerValue === 0) {
    gameOver();

    return;
  }
  timerValue -= 1;
  timer.innerHTML = `Time left: ` + timerValue;
}

function startQuiz() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  timer.innerHTML = `Time left: ` + timerValue;

  shuffledQuestions = questions.sort(function () {
    Math.floor(Math.random() * questions.length);
  });

  timerId = setInterval(timerTick, 1000);

  setNextQuestion();
}

function setNextQuestion() {
  if (currentQuestionIndex < questions.length) {
    answerButtonsElement.innerHTML = "";
    questionElement.innerHTML = "";
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    currentQuestionIndex++;
  } else {
    gameOver();
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  for (let index = 0; index < question.answers.length; index++) {
    console.log(question.answers[index].text);
    // create button and add attributes to it
    var button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = question.answers[index].text;
    button.setAttribute("data-correct", question.answers[index].correct);
    answerButtonsElement.appendChild(button);

    // add event listener to check if answer is correct
    button.addEventListener("click", function (event) {
      var isAnswerCorrect = event.target.getAttribute("data-correct");
      if (isAnswerCorrect === "true") {
        setNextQuestion();
      } else {
        timerValue -= 5;
      }
    });
  }
}

function gameOver() {
  questionContainerElement.classList.add("hide");
}

function selectAnswer() {}
