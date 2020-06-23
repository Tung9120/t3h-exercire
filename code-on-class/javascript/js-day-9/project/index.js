function task() {
  try {
    // console.log(x);
    // let x = 5;
    throw "My exception";
  } catch (e) {
    console.log(e);
  }
}

function checkNumber(value) {
  if (Number.isNaN(Number(value))) {
    console.log("NaN");
    throw "Wrong number";
  }

  if (value % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
}

task();
console.log("continue");
// checkNumber("akdse");
try {
  checkNumber("askesed");
  // checkNumber(6);
} catch (e) {
  console.log(e);
}
console.log("continue 2");

// js advance
// difference of var, let, const
var x = 5;
var x = 6;
console.log(x); // 6

let x1 = 5;
x1 = 6;
console.log(x1); // 6

{
  {
    console.log(x2); // undefined
    //  console.log(x3); // error
    var x2 = 5;
    let x3 = 5;
    console.log(x3);
    {
      console.log(x2, x3);
      {
        {
          {
            console.log(x2, x3);
          }
        }
      }
    }
  }
  // console.log(x3); // error
}

console.log(x2);
// console.log(x3); // error

hello(); // gọi hàm trước khi khai báo không bị lỗi

function hello() {
  console.log("hello");
}

function changeValue(age, name) {
  age = 21;
  name = "dat";
}

var age = 20;
var name = "quy";
console.log("Origin:", name, age);
changeValue(age, name);
console.log("After:", name, age);
// khi truyền str, num vào 1 hàm thay đổi value của biến thì
// khi gọi hàm này biến không bị thay đổi

function changeValueObj(student) {
  student.age = 21;
  student.name = "dat";
}

var student = { age: 20, name: "quy" };
console.log("student:", student);
changeValueObj(student);
console.log("after:", student); // obj student bị thay đổi

const a = { a1: 1 };
console.log(a);
a.a1 = 2;
console.log(a);

var languages = ["c", "c++", "java", "python"];

function programinglanguage(name, ...language) {
  console.log("languages:", language);
  console.log(name);
}

programinglanguage(languages, "html", "css");
// ... rest là phần còn lại, ... spread là dàn trải ra
// rest là gom vào, spread là trải ra
// truyền vào func nhiều para thì dùng rest
// copy 1 arr, obj thì dùng spread

var student = {
  firstName: "Quy",
  lastName: "Le",
  age: 20,
};

var newStudent = {
  ...student,
  fullName: `${student.lastName} ${student.firstName}`,
};
console.log(student, newStudent);

// closure

function plus() {
  var counter = 0;
  return function () {
    return ++counter;
  };
}

var increase = plus();
console.log(increase());
console.log(increase());
console.log(increase());