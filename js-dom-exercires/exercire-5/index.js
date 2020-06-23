var input = document.getElementById("age");
var btn = document.getElementById("btn");

btn.onclick = function () {
  var currentYear = new Date().getFullYear();
  var age = parseInt(input.value);
  do {
    var yearOfBirth = currentYear - age;
    if (yearOfBirth < 1) {
      alert("Invalid year of birth");
      break;
    } else {
      alert(`Year of yourbirth is ${yearOfBirth}`);
      break;
    }
  } while (yearOfBirth <= currentYear || age == NaN);
  input.value = "";
};
