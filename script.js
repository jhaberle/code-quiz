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

var question = document.querySelector('#question');
var choices = arrray.from(document.querySelectorAll('.choice-text'));
var progressText = document.querySelector('#progressText');
var scoreText = document.querySelector('#score');
var progressBarFull = document.querySelector('#progressBarFull');

var currentQuestion = {}
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
    {
        question: 'Arrays in JavaScript can be used to store _________.',
        choice1: 'Numbers and strings',
        choice2: 'Other arrays',
        choice3: 'Booleans',
        choice4: 'All of the Above',
        answer: 4,
    },
    {
        question: 'The condition in an if / else statement is enclosed within __________.',
        choice1: 'Quotes',
        choice2: 'Curly Brackets',
        choice3: 'Parenthesis',
        choice4: 'Square Brackets',
        answer: 3,
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choice1: 'Strings',
        choice2: 'Booleans',
        choice3: 'Alerts',
        choice4: 'Numbers',
        answer: 3,
    },
    {
        question: 'Sting values must be enclosed within _________ when being assigned to variables',
        choice1: 'Quotes',
        choice2: 'Curly Brackets',
        choice3: 'Commas',
        choice4: 'Parenthesis',
        answer: 1,
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choice1: 'JavaScript',
        choice2: 'Terminal/Bash',
        choice3: 'For loops',
        choice4: 'Console Log',
        answer: 4,
    }
]