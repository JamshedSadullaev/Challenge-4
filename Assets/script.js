var quizQuestions = [{
    question:"Inside which HTML element do we put the JavaScript?",

        a:"<js",
        b:"<scripting>",
        c:"<script>",

    correctAnswer:"c"},
    {
    question:"Where is the correct place to insert a JavaScript?",
        a:"Both the <head>section and the <body> section are correct",
        b:"The <body>section",
        c:"The <head>section",
        correctAnswer:"c"},
    {
    question:"How do you write Hello World in an alert box?",
        a:"msg ('Hello World')",
        b:"alert('Hello World')",
        c:"alertBox('Hello World')",
    correctAnswer:"b"},
];
var quizBody =  document.getElementById("quiz");
var result = document.getElementById("result");
var finalScore = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questions = document.getElementById("questions");
var timeRemaining = document.querySelector("#time");
var startButton = document.querySelector("#startbtn");
var startQuizDiv = document.getElementById("start");

var highScorePage = document.getElementById("scorePage");
var initials = document.getElementById("initials");
var highScoreInitials = document.getElementById("highscore-initials");
var engGameBtn = document.getElementById("endGameBtn");
var submitScoreBtn = document.getElementById("submit");
var hightScoreDisplay = document.getElementById("highMark");
var scoreInput=document.getElementById("initials");


var buttonA = document.querySelector("#a");
var buttonB = document.querySelector("#b");
var buttonC = document.querySelector("#c");

var finalQuestionIndex = quizQuestions.length-1;
var currentQuestionIndex = 0;
var timeLeft = 20;
var timerInterval;
var score = 0;
var correct;
function startQuiz(){
   displayQuestions();
   TimeSet();
   

}
// start game buttons
startButton.addEventListener("click",startQuiz);
function TimeSet(){
 
    playAgain.classList.add("hide");
    highScorePage.classList.add("hide");
    timerInterval = setInterval(function() {
        timeLeft --;
        timeRemaining.textContent = "Time left:" +timeLeft;
        if(timeLeft <= 0 || currentQuestionIndex === quizQuestions.length){
            clearInterval(timerInterval);
            showScore();
           
        }


    },1000);
    
}
// display question function
function displayQuestions(){
    startButton.classList.add("hide");
    quizBody.classList.remove("hide");
    gameoverDiv.classList.add("hide");
    questions.textContent = quizQuestions[currentQuestionIndex].question;
    buttonA.textContent = quizQuestions[currentQuestionIndex].a;
    buttonB.textContent = quizQuestions[currentQuestionIndex].b;
    buttonC.textContent = quizQuestions[currentQuestionIndex].c;

    

    
}
// showing a score after quiz
var userScore=document.querySelector("#userScore");
function showScore (){
    quizBody.style.display="none";
    gameoverDiv.classList.remove("hide");
    clearInterval(timerInterval);
    scoreInput.value = "";
    userScore.innerHTML="You got " + timeLeft  ;
    submitScoreBtn.classList.remove("hide");
    highScorePage.classList.remove("hide");
    playAgain.classList.remove("hide");
    
   

}
// save initials function

submitScoreBtn.addEventListener("click",function (event){
    event.preventDefault();
function renderLastRegistered(){
    var userName= document.querySelector("#userName");
    var user = localStorage.getItem("initials");
    userName.textContent=user;


}



 
    
    var initials=document.querySelector("#initials").value;
    // initials:initials,
    // score:score,
    window.localStorage.setItem("initials",JSON.stringify (initials));
    
    renderLastRegistered();
 });











//  Play again function to reset a game

var playAgain = document.querySelector("#playAgain");
playAgain.addEventListener("click",function(){
    window.location.reload();
    window.localStorage.clear();
    submitScoreBtn.classList.add("hide");
})

// check the answer funtion 
function checkAnswer (answer){
    correct=quizQuestions[currentQuestionIndex].correctAnswer;
    if (answer ===correct && currentQuestionIndex !==finalQuestionIndex){
        alert("Correct ");
        score++;
        // showScore();
        currentQuestionIndex++;

        displayQuestions();
       
    }else if (answer!==correct && currentQuestionIndex !==finalQuestionIndex){
        alert("Wrong ");
        currentQuestionIndex++;
        
        timeLeft=timeLeft -5;
        displayQuestions();
        
        
    }
    else{

        showScore();
    }
}













