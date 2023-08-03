// Retrieve user data stored in local storage at previous step

var userResult2 = JSON.parse(localStorage.getItem("currentUserScore"));

// Get UI elements by ID and set their attributes

var score = document.getElementById("score_introduction_paragraph");
score.innerHTML = "Your score is " + userResult2.userScore;
var userName = document.getElementById("currentUserName");
var submitButton = document.querySelector(".button-9");

// Handle user name submission and compile in existing data object

submitButton.addEventListener("click", function(event) {
   
    event.preventDefault
    userResult2.userName = userName.value;
    localStorage.setItem("currentUserScore", JSON.stringify(userResult2));
    window.location = "../../assets/pages/scores_page.html";
    
    });