var ulTodoList = document.getElementById("todo");
var inputText = document.getElementById("inputText");
var btnAdd = document.getElementById("js-btn");
var addTodo = function () {
  var value = inputText.value;
  if (value == "") {
    alert("please enter value");
  } else {
    // create a li element and append ul
    var listItem = document.createElement("li");
    listItem.innerText = value + " ";
    var btnRemove = document.createElement("button");
    btnRemove.innerText = "-";
    listItem.appendChild(btnRemove);
    btnRemove.addEventListener("click", function () {
      ulTodoList.removeChild(listItem);
    });
    ulTodoList.appendChild(listItem);
    inputText.value = "";
    // các data này chứa trong ram reload lại sẽ mất
  }
};

// btnAdd.onclick = function () {};
btnAdd.addEventListener("click", addTodo);
inputText.addEventListener("keyup", function (e) {
  if (e.keyCode == 13) {
    addTodo();
  }
});
