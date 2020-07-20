// var correctAnswers = 0;
// var incorrectAnswers = 0;
// var StartGame = document.querySelector("#start-game");


// var codeQuestions = [{
//     question: "Arrays in JavaScript can be used to store _________.",
//     answerList: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    
// },{
//     question: "The condition in an if / else statement is enclosed within __________.",
//     answerList: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
//     answer = 3
// },{
//     question: "Commonly used data types DO NOT include:",
//     answerList: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
//     answer = 3
// },{
//     question: "Sting values must be enclosed within _________ when being assigned to variables",
//     answerList: ["1. Quotes", "2. Curly Brackets", "3. Commas", "4. Parentheses"],
//     answer = 1
// },{
//     question: "A very useful tool used during development and debugging for printing content to the debugger is:",
//     answerList: ["1. JavaScript", "2. Terminal/Bash", "3. For loops", "4. Console Log"],

// }];

// // --------add event listener not working right now------------------

// StartGame.addEventListener("click", function(){
//     // newGame();
//     alert("start button clicked");
// });



// function newGame () {
//     for(var i = 0; i < codeQuestions.length; i++);
//     if (answer === false) {
//         incorrectAnswers++
//         alert("INCORRECT")
//     } else {
//         correctAnswers++
//         alert("CORRECT")
//     }
// };

// function() {
//     if (answer != 4) {
//         alert("INCORRECT")
//     } else {
//         alert("CORRECT")
//     }


// ----------------------------------------

var question = document.getElementById("question");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var progressText = document.getElementById('progressText');
var scoreText = document.getElementById("score");
var progressBarFull = document.getElementById("progressBarFull");

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuesions = [];

var questions = [
    {
        "question": "Inside which HTML element do we put the JavaScript??",
        "choice1": "<script>",
        "choice2": "<javascript>",
        "choice3": "<js>",
        "choice4": "<scripting>",
        "answer": 1
    },
    {
        "question": "What is the correct syntax for referring to an external script called 'xxx.js'?",
        "choice1": "<script href='xxx.js'>",
        "choice2": "<script name='xxx.js'>",
        "choice3": "<script src='xxx.js'>",
        "choice4": "<script file='xxx.js'>",
        "answer": 3
    },
    {
        "question": " How do you write 'Hello World' in an alert box?",
        "choice1": "msgBox('Hello World');",
        "choice2": "alertBox('Hello World');",
        "choice3": "msg('Hello World');",
        "choice4": "alert('Hello World');",
        "answer": 4
    },
    {
        "question": "Where is the correct place to insert a JavaScript?",
        "choice1": "The <body> section;",
        "choice2": "Both the <head> section and the <body> section are correct;",
        "choice3": "The <head> section;",
        "choice4": "None of the above",
        "answer": 2
    },
    {
        "question": "How do you write 'Hello World' in an alert box?",
        "choice1": "msg('Hello World')",
        "choice2": "alert('Hello World')",
        "choice3": "msgBox('Hello World')",
        "choice4": "alertBox('Hello World')",
        "answer": 2
    }
];

//CONSTANTS
var CORRECT_BONUS = 10;
var MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    //   console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);

        //go to the end page
        return window.location.assign("./end.html");
    }
    questionCounter++;
    progressText.innerText = ` Question ${questionCounter}/${MAX_QUESTIONS}`;

    //Update the progress bar
    //console.log((questionCounter/MAX_QUESTIONS) * 100);
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];
        // console.log(selectedAnswer == currentQuestion.answer);

        var classToApply =
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
        // console.log(classToApply)

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);//wait for 1000 miliseconds(1second)
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();
