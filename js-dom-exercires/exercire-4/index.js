var input = document.getElementById("age");
var btn = document.getElementById("btn");

btn.onclick = function () {
  var currentYear = new Date().getFullYear();
  var age = parseInt(input.value);
  var result = currentYear - age;
  alert("Your age is " + result);
  console.log(result);
  input.value = "";
};
