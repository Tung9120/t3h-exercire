function cooking(cookingRice) {
  // cooking fish
  // cooking soup
  cookingRice();
}

// callback
function cookingRice() {
  // coding ...
  console.log("cooking rice...");
}

cooking(cookingRice);

var numbers = [1, 4, 3, 7];

console.log(numbers.indexOf(3));

function checkPrime(item) {
  console.log("check prime", item);
  // var check = item === 4;
  // return check;
  return item === 4;
}

// custom find

function find(checkPrime) {
  for (let i = 0; i < numbers.length; i++) {
    var result = checkPrime(numbers[i]);
    if (result) {
      return numbers[i];
    }
  }
}

// var foundNumber = numbers.find(checkPrime);
var foundNumber2 = find(checkPrime);
// console.log('foundNumber:', foundNumber);
console.log("foundNumber2:", foundNumber2);

// object basic
var quy = {
  firstName: "Quy",
  lastName: "Le Xuan",
  age: 22,
  mark: 5,
};

var dat = {
  firstName: "Dat",
  lastName: "Duong Tien",
  age: 22,
  mark: 9,
};

console.log("Name:", quy.name, quy["name"]);
console.log("Age:", dat.age);

var students = [
  quy,
  dat,
  { firstName: "Bao", lastName: "Pham", age: 18, mark: 8 },
  { firstName: "Minh", lastName: "Nguyen", age: 15, mark: 8 },
];
console.log("Students:", students);

console.log(
  "Find Thai Bao:",
  students.indexOf({
    name: "Thai Bao",
    age: 18,
    mark: 8,
  })
);

console.log("Find Quy:", students.indexOf(quy));

// testing
var x = "le xuan quy";
var y = x;
x = "duong tien dat";
console.log("x, y", x, y);

var objX = { name: "le xuan quy" };
var objY = objX;
objY.name = "duong tien dat";
console.log("objX, objY", objX, objY);

// find Thai Bao in students
console.log("Students:", students);
var foundThaiBao = students.find((student) => {
  return student.name === "Thai Bao";
});

console.log("Found Bao:", foundThaiBao);

// filter, map, reduce

// filter
var filterStudents = students.filter((student) => {
  console.log("student:", student);
  return student.age >= 22;
});

console.log("filter students:", filterStudents);

// map
console.log('students:', students);

var mapStudents = students.map();