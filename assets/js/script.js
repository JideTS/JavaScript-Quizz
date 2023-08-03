
// Access element using id

var question = document.getElementById("question-title");
var answerButton1 = document.getElementById("answerButton1");
var answerButton2 = document.getElementById("answerButton2");
var answerButton3 = document.getElementById("answerButton3");
var answerButton4 = document.getElementById("answerButton4");
var timeEl = document.querySelector(".time");
var container = document.querySelector(".container");

// Create and set variables for logic implementation

var finalScore = 100;
var secondsLeft = 100;
var questionCounter = 0;
var gameOver = false;

// Create and set rendering variables

var feedbackEl = document.createElement("h3");
feedbackEl.textContent = "";
feedbackEl.setAttribute("style", "padding-top:64px;");
var feedbackIsDisplayed = false;
var body = document.body;

// create quiz objects

var quizObject0 = {
    question: "Which of the following methods can be used to add an element to the end of an array in JavaScript?",
    answer1: "array.add(item)",
    answer2: "array.append(item)",
    answer3: "array.push(item)",
    answer4: "array.insert(item)",
    correctAnswer: "array.push(item)",
};

var quizObject1 = {
    question: "Which of the following is NOT a JavaScript data type?",
    answer1: "Boolean",
    answer2: "String",
    answer3: "Number",
    answer4: "Character",
    correctAnswer: "Character",
};

var quizObject2 = {
    question: "What does the NaN keyword represent in JavaScript?",
    answer1: "Null and Notable",
    answer2: "Not a Number",
    answer3: "Number and Null",
    answer4: "Not any Number",
    correctAnswer: "Not a Number",
};

var quizObject3 = {
    question: "What will the following code snippet output to the console : console.log(10 + '20')?",
    answer1: "'1020'",
    answer2: "30",
    answer3: "'30'",
    answer4: "20",
    correctAnswer: "'1020'",
};

var quizObject4 = {
    question: "What does the ' === ' operator do in JavaScript?",
    answer1: "Assigns a value to a variable",
    answer2: "Checks for equality of values and data types",
    answer3: "Performs a strict comparison between two variables",
    answer4: "Checks for equality of values, but not data types",
    correctAnswer: "Checks for equality of values and data types",
};

var quizObjects = [quizObject0, quizObject1, quizObject2, quizObject3, quizObject4];

// Add event listener at window level to reset the quiz if the view unloads
window.addEventListener('beforeunload', () => {
    questionCounter = 0;
});

// Refresh UI and perform time based user experience adjustments

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time : " + secondsLeft;

        if ((secondsLeft === 0) || (gameOver)) {
            // Stops execution of action at set interval or if the game ends

            finalScore = secondsLeft;

            var userResult = {
                userName: "",
                userScore: finalScore
            }

            localStorage.setItem("currentUserScore", JSON.stringify(userResult));
            clearInterval(timerInterval);
            window.location = "../../assets/pages/user_score.html";
        }

    }, 1000);
}

setTime();

// Listen to user's answers at container level and provide live feedback

container.addEventListener("click", function (event) {

    var element = event.target;

    if (element.matches(".question-button")) {

        var buttonValue = element.innerHTML;


        if (buttonValue === quizObjects[questionCounter].correctAnswer) {


            feedbackEl.innerHTML = "True";
            container.appendChild(feedbackEl);
            feedbackIsDisplayed = true;
            //   console.log("true");

        } else {

            feedbackEl.innerHTML = "False";
            container.appendChild(feedbackEl);
            feedbackIsDisplayed = true;

            if (secondsLeft > 10) {
                secondsLeft = secondsLeft - 10;
            }

            else {

                secondsLeft = 0;

            }
        }


        if (answerButton1.innerHTML === quizObjects[questionCounter].correctAnswer) {
            answerButton1.setAttribute("style", "background-color:green;");
        }
        else {
            answerButton1.setAttribute("style", "background-color:red;");
        }

        if (answerButton2.innerHTML === quizObjects[questionCounter].correctAnswer) {
            answerButton2.setAttribute("style", "background-color:green;");
        }
        else {
            answerButton2.setAttribute("style", "background-color:red;");
        }

        if (answerButton3.innerHTML === quizObjects[questionCounter].correctAnswer) {
            answerButton3.setAttribute("style", "background-color:green;");
        }
        else {
            answerButton3.setAttribute("style", "background-color:red;");
        }

        if (answerButton4.innerHTML === quizObjects[questionCounter].correctAnswer) {
            answerButton4.setAttribute("style", "background-color:green;");
        }
        else {
            answerButton4.setAttribute("style", "background-color:red;");
        }


        answerButton1.disabled = true;
        answerButton2.disabled = true;
        answerButton3.disabled = true;
        answerButton4.disabled = true;

        questionCounter = questionCounter + 1;

        setTimeout(function () {
            renderQuestionDisplayAtIndex(questionCounter);
        }, 1000);

    }

});

// Render question and answers on screen and end game once all questions have been asked

function renderQuestionDisplayAtIndex(x) {

    answerButton1.disabled = false;
    answerButton2.disabled = false;
    answerButton3.disabled = false;
    answerButton4.disabled = false;
    answerButton1.setAttribute("style", "background-color:light-color;");
    answerButton2.setAttribute("style", "background-color:light-color;");
    answerButton3.setAttribute("style", "background-color:light-color;");
    answerButton4.setAttribute("style", "background-color:light-color;");




    if (questionCounter < 5) {

        question.innerHTML = quizObjects[questionCounter].question;
        answerButton1.innerHTML = quizObjects[questionCounter].answer1;
        answerButton2.innerHTML = quizObjects[questionCounter].answer2;
        answerButton3.innerHTML = quizObjects[questionCounter].answer3;
        answerButton4.innerHTML = quizObjects[questionCounter].answer4;


        if (feedbackIsDisplayed) {
            container.removeChild(feedbackEl);
        }

    }

    else {

        finalScore = secondsLeft;
        var userResult = {
            userName: "",
            userScore: finalScore
        }
        localStorage.setItem("currentUserScore", JSON.stringify(userResult));

        gameOver = true;
        window.location = "../../assets/pages/user_score.html";

    }

}

// Trigger initial question

renderQuestionDisplayAtIndex(0);