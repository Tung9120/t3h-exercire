const cooking = (cookingFood) => {
  cookingFood();
};

// callback
const cookingRice = () => {
  console.log("cooking rice");
};

cooking(cookingRice);

let numbers = [1, 4, 3, 7, 10];
function checkPrime(item) {
  console.log("Checking prime....", item);
  return item === 4;
}

numbers.find(checkPrime);
// console.log(numbers.indexOf(3));

// custom find
function find(checkPrime) {
  for (var i = 0; i < numbers.length; i++) {
    var result = checkPrime(numbers[i]);
    if (result) {
      return result;
    }
  }
}
var foundNumber = find(checkPrime);
console.log("found:", foundNumber);

let quy = {
  firstName: "quy",
  lastName: "Le Xuan",
  age: 22,
  mark: 5,
};

let dat = {
  firstName: "Dat",
  lastName: "Duong Tien",
  age: 22,
  mark: 9,
};

console.log("quy.name:", quy.name);
console.log("quy:", quy);
console.log("quy['name']:", quy["name"]);

let students = [
  dat,
  quy,
  { firstName: "bao", lastName: "pham thai", age: 18, mark: 8 },
  { firstName: "minh", lastName: "pham anh", age: 15, mark: 8 },
];

console.log("students:", students);
console.log(
  'Find "thai bao":',
  students.indexOf({
    name: "thai bao",
    age: 18,
  })
);
// truyền vào 1 đối tượng giống không ra vì khi truyền vào sẽ tạo ra 1 obj mới mặc dù giống nhau nhưng 2 obj giống nhau nên không tìm thấy

console.log('Find "quy":', students.indexOf(quy));
// truyền vào 1 biến khai báo trước thì trả về index vì khi khai báo obj ở ngoài truyền vào mảng thì 2 obj là 1

// testing

var x = "Le Xuan Quy";
var y = x;
x = "Duong Tien Dat";
console.log("x, y:", x, y);

var objx = { name: "le xuan quy" };
var objy = objx;
objx.name = "duong tien dat";
console.log("objx, objy:", objx, objy);

// use find method to find 'Thai bao' students
let foundThaiBao = students.find((student) => {
  return student.name == "thai bao";
});
console.log("foundThaiBao:", foundThaiBao);

// filter, map, reduce

// filter
let filterStudents = students.filter((student) => {
  return student.age >= 22;
});

console.log("filterStudents:", filterStudents);

// map
let studentsFullNames = students.map((student) => {
  return `${student.lastName} ${student.firstName}`;
});
console.log("studentsFullNames:", studentsFullNames);

let studentsRestructure = students.map((student) => {
  // return {
  //   name: `${student.firstName} ${student.lastName}`,
  //   age: student.age,
  //   mark: student.mark
  // }
  return { ...student, name: `${student.lastName} ${student.firstName}` };
});

console.log("studentsRestructure:", studentsRestructure);

// reduce
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = numbers.reduce((total, value) => {
  if (value % 2 === 1) {
    return total + value;
  }
  return total;
}, []);

console.log("result:", result);

// sort
let names = ["dat", "quy", "minh", "khang"];
// các chữ được sắp xếp theo mã asc key
console.log("beggin numbers:", numbers);

numbers.sort((a, b) => {
  console.log("a:", a, "b:", b);
  return a - b;
});

console.log("ending numbers:", numbers);

console.log("beggin names:", names);
names.sort((firstStr, secondStr) => {
  if (firstStr > secondStr) {
    return -1;
  } else if (firstStr < secondStr) {
    return 1;
  } else {
    return 0;
  }
});

console.log("ending names:", names);

for (var student of students) {
  // console.log('student:', student);
  student.name = "abc";
}

console.log("students:", student);

for (var i = 0; i < student.length; i++) {
  var student = students[i];
  student.firstName += " " + (i + 1);
}
console.log("students:", student);

var mixes = [
  { name: "Nguyen Van A", class: "Math" },
  { name: "Fiat", weight: 850 },
  { school: "t3h" },
];

for (var mix of mixes) {
  for (var prop in mix) {
    console.log(prop, mix[prop]);
  }
}

// vòng lặp for in chỉ khác vòng for bình thường là không xác định được index

// object

let car = {
  name: "Fiat",
  weight: 850,
  year: 2000,
  start: function () {
    console.log(this.name + " is starting ...");
  },
};

console.log(car);
car.start();
car.model = "Model A";
car.name = "Fiat rename";
car.stop = function () {
  console.log(this.name + " is stopping ...");
};
car.stop();

// console.log() là 1 hàm asyn nên nhiều lúc debug rất khó

// function object

function Student(id, name, className){
  this.id = id;
  this.name = name;
  this.className = className;
}

quy = new Student('st01', 'quy', 'reactjs');
console.log('quy:', quy);