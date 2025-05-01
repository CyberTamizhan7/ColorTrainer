
var inputVal;
var total_questions;

function start(){
    inputVal = document.getElementById("i_n_questions").value;
    total_questions = inputVal;
    if(inputVal==0 || !inputVal){
        alert("Enter Number of Questions to Start the Game Srinika!");
    }
    else{
        if(inputVal == 10){
            alert("All the best Srinika!");
        }
        document.getElementsByClassName("content")[0].style.display = "block";
        document.getElementsByClassName("input_tag")[0].style.display = "none";
        startStop();
    }
}


function randomNumber(min, max){
    return Math.floor(Math.random()*(max-min+1))+min;
}


var files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var ranks = ['1', '2', '3', '4', '5', '6', '7', '8'];
var squares = [];
for(let i=0;i<files.length;i++){
    for(let j=0;j<ranks.length;j++){
        squares.push(files[i]+ranks[j]);
    }
}


// Square color object
var square_colors = {};

for(let i=0;i<8;i++){
    if(i%2==0){
        square_colors[squares[i]]="black";
    }
    else{
        square_colors[squares[i]]="white";
    }
}
for(let i=8;i<16;i++){
    if(i%2==0){
        square_colors[squares[i]]="white";
    }
    else{
        square_colors[squares[i]]="black";
    }
}
for(let i=16;i<24;i++){
    if(i%2==0){
        square_colors[squares[i]]="black";
    }
    else{
        square_colors[squares[i]]="white";
    }
}
for(let i=24;i<32;i++){
    if(i%2==0){
        square_colors[squares[i]]="white";
    }
    else{
        square_colors[squares[i]]="black";
    }
}
for(let i=32;i<40;i++){
    if(i%2==0){
        square_colors[squares[i]]="black";
    }
    else{
        square_colors[squares[i]]="white";
    }
}
for(let i=40;i<48;i++){
    if(i%2==0){
        square_colors[squares[i]]="white";
    }
    else{
        square_colors[squares[i]]="black";
    }
}
for(let i=48;i<56;i++){
    if(i%2==0){
        square_colors[squares[i]]="black";
    }
    else{
        square_colors[squares[i]]="white";
    }
}
for(let i=56;i<64;i++){
    if(i%2==0){
        square_colors[squares[i]]="white";
    }
    else{
        square_colors[squares[i]]="black";
    }
}
// Square Color Object Initialized

for(let key in square_colors){
    console.log(key + ":" + square_colors[key]);
}

function randomSquares(){
    var square = squares[randomNumber(0,63)];
    document.getElementById("w_button").innerHTML=square;
    document.getElementById("b_button").innerHTML=square; 
}
randomSquares();

var clickCounter = 0;
var score=0;
var n_questions=0;
function w_button_click(){
    console.log("Total Questions: ");
    console.log(total_questions);
    console.log("Input Val : ");
    console.log(inputVal);
    let square_name = document.getElementById("w_button").textContent;
    if(square_colors[square_name]=="white"){
        score += 1;
        n_questions += 1;
        document.getElementById("score").innerHTML=score;
        document.getElementById("n_questions").innerHTML=n_questions;
        if(n_questions>=total_questions){
            final_result();
        }
        randomSquares();
    }
    else{
        n_questions += 1;
        document.getElementById("n_questions").innerHTML=n_questions;
        if(n_questions>=total_questions){
            final_result();
        }
        randomSquares();
    }
}

function b_button_click(){
    let square_name = document.getElementById("b_button").textContent;
    if(square_colors[square_name]=="black"){
        score += 1;
        n_questions += 1;
        document.getElementById("score").innerHTML=score;
        document.getElementById("n_questions").innerHTML=n_questions;
        if(n_questions>=total_questions){
            final_result();
        }
        randomSquares();
    }
    else{
        n_questions += 1;
        document.getElementById("n_questions").innerHTML=n_questions;
        if(n_questions>=total_questions){
            final_result();
        }
        randomSquares();
    }
}

function final_result(){
    var percentage = (score/total_questions)*100;
    document.getElementById("score").innerHTML = 0;
    document.getElementById("n_questions").innerHTML = 0;
    alert("Score : " + score + "/" + total_questions + "\nPercentage : " + percentage.toFixed(2) + "%");
    score=0;
    percentage=0;
    n_questions=0;
    clickCounter = 0;
    reset();
    document.getElementsByClassName("content")[0].style.display = "none";  
    document.getElementsByClassName("input_tag")[0].style.display = "block";  
}


// Stopwatch

var isRunning = false;
var startTime;
var updatedTime;
var difference;
var tInterval;
var running = false;

const timeDisplay = document.getElementById("time");

function startStop() {
  if (isRunning === false) {
    startTime = new Date().getTime();
    tInterval = setInterval(getTime, 1);
    isRunning = true;
  } else {
    clearInterval(tInterval);
    isRunning = false;
  }
}

function reset() {
  clearInterval(tInterval);
  isRunning = false;
  timeDisplay.innerHTML = "00:00:00";
}

function getTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  timeDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
}





