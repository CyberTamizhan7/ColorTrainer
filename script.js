
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

var score=0;
var n_questions=0;
var total_questions=10;
function w_button_click(){
    let square_name = document.getElementById("w_button").textContent;
    if(square_colors[square_name]=="white"){
        score += 1;
        n_questions += 1;
        document.getElementById("score").innerHTML=score;
        document.getElementById("n_questions").innerHTML=n_questions;
        randomSquares();
    }
    else{
        n_questions += 1;
        document.getElementById("n_questions").innerHTML=n_questions;
        randomSquares();
    }
}

function b_button_click(){
    let square_name = document.getElementById("b_button").textContent;
    if(square_colors[square_name]=="black"){
        score += 1;
        n_questions += 1;
        if(n_questions>total_questions){
            final_result();
        }
        document.getElementById("score").innerHTML=score;
        document.getElementById("n_questions").innerHTML=n_questions;
        randomSquares();
    }
    else{
        n_questions += 1;
        if(n_questions>total_questions){
            final_result();
        }
        document.getElementById("n_questions").innerHTML=n_questions;
        randomSquares();
    }
}

function final_result(){
    alert("Test Completed!");
}




