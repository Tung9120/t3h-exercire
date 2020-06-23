var redBtn = document.getElementById("red");
var blueBtn = document.getElementById("blue");
var brownBtn = document.getElementById("brown");
var lavenderBtn = document.getElementById("lavender");
var text = document.getElementById("text");

redBtn.onclick = function () {
  text.style.color = "tomato";
  text.style.backgroundColor = "#fff";
};

blueBtn.onclick = function () {
  text.style.color = "mediumslateblue";
  text.style.backgroundColor = "#fff";
};

brownBtn.onclick = function () {
  text.style.color = "peru";
  text.style.backgroundColor = "#fff";
};

lavenderBtn.onclick = function () {
  text.style.color = "lavender";
  text.style.backgroundColor = "#555";
};
