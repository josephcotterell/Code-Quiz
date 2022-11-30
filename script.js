var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var timer = document.getElementById("timer");

var timerValue = 10;
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
    return;
  }
  timerValue -= 1;
  timer.innerHTML = `Time left: ` + timerValue;
}

function startQuiz() {
  startButton.classList.add("hide");
  timer.innerHTML = `Time left: ` + timerValue;
  shuffledQuestions = questions.sort(function () {
    Math.random() - 0.5;
  });

  questionContainerElement.classList.remove("hide");
  timerId = setInterval(timerTick, 1000);

  setNextQuestion();
}

function setNextQuestion() {
  answerButtonsElement.innerHTML = "";
  questionElement.innerHTML = "";
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  for (let index = 0; index < question.answers.length; index++) {
    console.log(question.answers[index].text);
    // create button
    var button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = question.answers[index].text;
    button.setAttribute("data-correct", question.answers[index].correct);
    answerButtonsElement.appendChild(button);

    button.addEventListener("click", function (event) {
      var isAnswerCorrect = event.target.getAttribute("data-correct");
      if (isAnswerCorrect === "true") {
        setNextQuestion();
      }
    });
  }
}

function selectAnswer() {}
