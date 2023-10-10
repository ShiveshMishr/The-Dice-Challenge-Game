var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src" , randomDiceImage);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1 ;
var randomDiceSource2  = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomDiceSource2);

if(randomNumber1<randomNumber2){
    document.querySelector('h1').innerHTML = "Play 1 Wins! ";
}
else if(randomNumber1>randomNumber2){
    document.querySelector('h1').innerHTML = "Play 2 Wins!";
}
else {
    document.querySelector('h1').innerHTML = "Draw";
}