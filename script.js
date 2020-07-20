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
        "question": 'Arrays in JavaScript can be used to store _________.',
        "choice1": 'Numbers and strings',
        "choice2": 'Other arrays',
        "choice3": 'Booleans',
        "choice4": 'All of the Above',
        "answer": 4
    },
    {
        "question": 'The condition in an if / else statement is enclosed within __________.',
        "choice1": 'Strings',
        "choice2": 'Booleans',
        "choice3": 'Alerts',
        "choice4": 'Numbers',
        "answer": 3
    },
    {
        "question": 'String values must be enclosed within _________ when being assigned to variables.',
        "choice1": 'Quotes',
        "choice2": 'Curly Brackets',
        "choice3": 'Commas',
        "choice4": 'Parenthesis',
        "answer": 1
    },
    {
        "question": "Where is the correct place to insert a JavaScript link?",
        "choice1": "The <body> section;",
        "choice2": "Both the <head> section and the <body> section are correct;",
        "choice3": "The <head> section;",
        "choice4": "None of the above",
        "answer": 2
    },
    {
        "question": 'A very useful tool used during development and debugging for printing content to the debugger is:',
        "choice1": 'JavaScript',
        "choice2": 'Terminal/Bash',
        "choice3": 'For loops',
        "choice4": 'Console Log',
        "answer": 4
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
        return window.location.assign("highScores.html");
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

// timer-------------------------

var timeLeft = 30;
    var elem = document.getElementById('timer');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }


