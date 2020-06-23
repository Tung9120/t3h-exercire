var h3 = document.getElementsByTagName("h3");
h3[0].style.fontFamily = "Arial";
document.body.style.background = "cornflowerblue";
document.body.style.color = "#fff";
document.body.style.fontFamily = "Arial";
document.body.style.fontSize = "90%";

document.getElementById("js-btn-click").onclick = onClick;

function onClick() {
  // alert("clicked");
  document.body.style.background = "cornflowerblue";
  var inputText = document.getElementById("js-input-text");
  var value = inputText.value;
  // alert(value);
}

// var data = prompt("Enter value", 0);
// console.log("data:", data);

// if (parseInt(data) % 2 == 0) {
//   alert("Event number");
// } else {
//   alert("Odd number");
// }

var bgRed = document.getElementById("bgRed");
var bgGreen = document.getElementById("bgGreen");

bgRed.style.background = "red";
bgRed.style.color = "#fff";
bgGreen.style.background = "green";
bgGreen.style.color = "#fff";

bgRed.onclick = function () {
  document.body.style.backgroundColor = "tomato";
};

bgGreen.onclick = function () {
  document.body.style.backgroundColor = "green";
};

var onclockFunc;

document.getElementById("js-start").onclick = () => {
  onclockFunc = setInterval(() => {
    var onclock = document.getElementById("js-onclock");
    var currentDate = new Date();
    // phải viết currentDate trong hàm setInterval vì viết ở ngoài sẽ không cập nhật lại
    // viết ở trong thì mỗi khi chạy callback sẽ tạo new Date và InnerHTML vào p tag
    onclock.innerHTML = currentDate.toLocaleTimeString();
  }, 1000);
};

document.getElementById("js-stop").onclick = () => {
  clearInterval(onclockFunc);
  document.getElementById("js-onclock").innerHTML = " -- : -- : -- ";
};

// validate login form
var errUsername = document.getElementById("err-user-name");
var errPassword = document.getElementById("err-password");
var inputUsername = document.getElementById("user-name");
var inputPassword = document.getElementById("pwd");
var submit = document.getElementById("submit");

submit.onclick = function (event) {
  var userName = inputUsername.value;
  var password = inputPassword.value;
  if (userName == "") {
    errUsername.innerText = "Please enter user name!";
  } else if (userName.substr(0, 3) !== "T3H") {
    errUsername.innerHTML = 'Username start with "T3H"';
  } else if (userName.length < 6) {
    errUsername.innerHTML = "Username must have more than 6 characters";
  }
  if (password == "") {
    errPassword.innerText = "Please enter password!";
  }

  event.preventDefault(); // hàm này ngăn cho form không bị gửi đi (submit)
  console.log(event);
};
