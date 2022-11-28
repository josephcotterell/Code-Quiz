const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')

startButton.addEventListener('click', startGame)
let shuffledQuestions, currentQuestionIndex


function startGame() {
console.log(started)
    startButton.classList.add ('hide')
    shuffledQuestions = questions.sort(() => Math.random () - .5)
    currentQuestionIndex = 0 
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

    

}


function selectAnswer{

}

const questions = [{

question: 'Arrays in JavaScript can be used to store what?'
answers: [
    {text: 'numbers', correct: false}
    { text: 'booleans', correct: false}
    { text: 'strings', correct: false}
    {text: 'all of the above', correct: true}



]
}
]