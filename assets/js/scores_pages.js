var userResult3 = JSON.parse(localStorage.getItem("currentUserScore"));
var userFeedback = document.getElementById("previous_score");
var submitButton = document.querySelector(".button-9");

if (userResult3 !== null) {
    userFeedback.innerHTML = userResult3.userName + ", your previous score is " + userResult3.userScore;
    submitButton.innerHTML = "Play again";
}


