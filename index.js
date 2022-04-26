var randomNumber=Math.random();
randomNumber=randomNumber*6;
randomNumber=Math.floor(randomNumber)+1;
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
document.querySelector("img").src= 'images/dice'+randomNumber+'.png';
document.querySelectorAll("img")[1].src='images/dice'+randomNumber2+'.png';

function changeTitle(){
  if(randomNumber>randomNumber2){
    document.querySelector("h1").textContent="Player 1 wins!";
  }else if(randomNumber<randomNumber2){
    document.querySelector("h1").textContent="Player 2 wins!";
  }else
    document.querySelector("h1").textContent="It's a tie!";
}

changeTitle();
