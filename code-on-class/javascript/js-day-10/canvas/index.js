var canvas = document.getElementById("game");
var context = canvas.getContext("2d");
context.strokeStyle = "blue";
context.moveTo(0, 0);
context.lineTo(200, 300);
context.stroke();

context.strokeStyle = "green";
context.moveTo(200, 0);
context.lineTo(0, 300);
context.stroke();

context.strokeStyle = "tomato";
context.beginPath();
context.arc(100, 150, 100, 0, 2 * Math.PI);
context.stroke();

context.font = "30px arial";
context.fillText("12", 85, 45);

window.onload = function () {
  var playerImage = document.getElementById('player');
  context.drawImage(playerImage, 0, 0, 100 , 100);
}
