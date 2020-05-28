// array

let names = new Array("Quy", "Dat", "Minh", "Nam", "Vu");
let names2 = ["Quy", 23, true, "Dat", "Minh", "Nam", "Vu"];
console.log("names:", names, typeof names, names.length);
console.log("names[0]:", names[0]);
console.log("names[1]:", names[1]);

console.log("names2:", names2, typeof names2, names2.length);
console.log("names2[0]:", names2[0]);
console.log("names2[1]:", names2[1]);

// loop all elements in an array

for (let i = 0; i < names2.length; i++) {
  let value = names2[i];
  console.log(`Value ${i}:`, value);
}

// Check variable is an array

console.log("Array.isArray(names):", Array.isArray(names));
console.log("names2 instanceof Array:", names2 instanceof Array);

// methods of array

let fruits = [];

// arr.push(item)
fruits.push("Mango");
fruits.push("Banana");
fruits.push("Apple");
console.log("fruits:", fruits);

// arr.pop()
let item = fruits.pop();
console.log("fruits:", fruits, "item:", item);

// arr.unshift(item)
fruits.unshift("Orange");
fruits.unshift("Lemon");
console.log("fruits", fruits);

// arr.shift()
let firtItem = fruits.shift();
console.log("fruits", fruits, "firstItem:", firtItem);

// fruits[100] = 'Watermelon';
// console.log('fruits: ', fruits, fruits[20]);
// như đoạn code ở trên sẽ gây ra lỗi có thể làm dừng chương trình

// arr.indexOf(item)

console.log(
  'fruits.indexOf("Mango"):',
  fruits.indexOf("Mango"),
  'fruits.lastIndexOf("Mango"):',
  fruits.lastIndexOf("Mango")
);

// slice, splice, join, reverse

// let reverseFruits = fruits.reverse();
// khi dùng arr.reverse() sẽ mutate arr ban đầu
// copy ra 1 object mới
console.log("Origin fruits:", fruits);
let reverseFruits = fruits.slice(0);
reverseFruits = reverseFruits.reverse(); //arr.reverse()

console.log("fruits.reverse()", reverseFruits);
console.log("fruits:", fruits);
fruits.push("Watermelon");
console.log("fruits:", fruits);
console.log("fruits.slice(start, end):", fruits.slice(0, 2)); // arr.slice(start, end)
console.log(
  "fruits.splice(start index, number of elements removed, number of replacement elements):",
  fruits.splice(0, 2, "Mango2")
); // arr.splice()
console.log("fruits:", fruits);
console.log('fruits.join(","):', fruits.join(","), fruits); // arr.join('seperator')
console.log("fruits.toString():", fruits.toString(), fruits); // arr.toString()

// callback function
// 1 func gọi trong 1 func khác gọi là callback function

function hello() {
  console.log("hello world");
}

function hello2() {
  console.log("hello class");
}

function call(callback) {
  callback();
}

call(hello);
call(hello2);

// arr.find()
let findCallback = (item) => {
  console.log("Handling item:", item);
  return item === "Banana"; // return true nếu item truyền vào === 'Banana' và return false nếu item truyền vào !== 'Banana'
};

function myFind(findCallback) {
  for (let i = 0; i < fruits.length; i++) {
    if (findCallback(fruits[i])) {
      return fruits[i];
    }
  }
}

let foundItem = fruits.find(findCallback);
let foundItem2 = myFind(findCallback);

console.log("foundItem:", foundItem);
console.log("foundItem2:", foundItem2);

console.log(findCallback("ball"));

// hàm callback sử dụng được nhiều lần và chia nhỏ chương trình (chia nhỏ chương trình giúp debug tốt hơn)

// number
let numbers = [1, 3, 5, 6, 7, 9];
// coding a function return first even number in array

let result = numbers.find(number => checkEven);
