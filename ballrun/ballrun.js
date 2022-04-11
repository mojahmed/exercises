var ball = document.querySelector("#ball");
var left = 0;
var top = 
ball.style.left = left + "px";

function move() {
  left = left + 20;
  ball.style.left = left + "px";
}

ball.onclick(move)