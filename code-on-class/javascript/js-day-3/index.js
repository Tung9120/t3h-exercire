// function
// function để tái sử dụng, nếu có return sẽ trả về giá trị được return và sẽ dừng hàm (không chạy các lệnh ở dưới có phạm vi trong function)

// function hello(name, age) {
//   if (name == "ABC") {
//     return false;
//   }
//   let str = "hello " + name + ", age: " + age;
//   console.log(str);
//   return true;
// }

// let result = hello("Tung", 25);
// console.log(result);
// hello("Dat", 26);

// sử dụng function làm bài checkPrimeNumber
// use function to do exercire: checkPrimeNumber

// const isPrime = myNumber => {
//   let check = true;
//   if (myNumber <= 1) {
//     check = false;
//   }
//   for (let i = 2; i <= Math.sqrt(myNumber); i++) {
//     if (myNumber % i == 0) {
//       check = false;
//       break;
//     }
//   }

//   if (check) {
//     return true;
//   } else {
//     return false;
//   }
// }

// let n = 20;
// for (let i = 1; i <= n; i++) {
//   let result = isPrime(i);
//   if (result) {
//     console.log("Prime number", i);
//   }
// }

// var global = 5;

// function change(x){
//     var global = 7;
//     x = 10;
//     global = 6;
// }
// var x = 5;
// change(x);
// console.log('x = ,', x, ', global = ', global); // global = 5

// arrow function, fat arrow

// let isOdd = number => {
//     // if(number % 2 == 1){
//     //     return true;
//     // }
//     // return false;
//     return number % 2 == 1;
// }

// let isOdd2 = number => number % 2 == 1;

// process number in js

// let strNumber = '1234.5';
// let floatNumber = Number.parseFloat(strNumber);
// let intNumber = Number.parseInt(strNumber);
// let number = Number(strNumber);

// console.log('float number:', floatNumber, Number.isInteger(floatNumber));
// console.log('int number:', intNumber, Number.isInteger(intNumber));
// console.log('number:', number, Number.isInteger(number));
// var x = 5 / 0;
// console.log(x, Number.isInteger(x));
// console.log(Number.isNaN(NaN));
// console.log(typeof NaN);
console.log(Number.isNaN(3));
console.log(Number.isNaN('a'));


// process string in js

// var x = 5;
// console.log(x.toString());

// process Math in js

var x = 1234.938239183;
var roundX = Math.round(x);
var floorX = Math.floor(x);
var ceilX = Math.ceil(x);
var toFixedX = x.toFixed(2);
console.log('roundX', roundX);
console.log('floorX', floorX);
console.log('ceilX', ceilX);
console.log('toFixedX', toFixedX);