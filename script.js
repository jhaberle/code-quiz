var correctAnswers = 0;
var incorrectAnswers = 0;

var codeQuestions = [{
    question: "Arrays in JavaScript can be used to store _________.",
    answerList: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
    
},{
    question: "The condition in an if / else statement is enclosed within __________.",
    answerList: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
    answer = 3
},{
    question: "Commonly used data types DO NOT include:",
    answerList: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer = 3
},{
    question: "Sting values must be enclosed within _________ when being assigned to variables",
    answerList: ["1. Quotes", "2. Curly Brackets", "3. Commas", "4. Parentheses"],
    answer = 1
},{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerList: ["1. JavaScript", "2. Terminal/Bash", "3. For loops", "4. Console Log"],

}];

var StartGame = document.querySelector("start-button");

StartGame.addEventListener("click", function(){
    for(var i = 0; i < codeQuestions.length; i++);
    if (answer === false) {
        incorrectAnswers++
        alert("INCORRECT")
    } else {
        correctAnswers++
        alert("CORRECT")
    }
});


// function() {
//     if (answer != 4) {
//         alert("INCORRECT")
//     } else {
//         alert("CORRECT")
//     }