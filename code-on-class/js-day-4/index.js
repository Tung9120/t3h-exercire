// string
let firstName = "Tung";
let lastName = "Vu";

// let introduce = 'I\'m a \n \t student'; // \n == xuống dòng, \t == 1tab
// console.log(introduce);

// "'tung'" -> 'tung'
// '"tung"' -> "tung"

let name = firstName + " " + lastName;
// let age = 25;
// let introduce2 = name + ' is a student and have age \'s ' + age;
// console.log(introduce2);
// let templateIntroduce = `${firstName} is a student`;
// let templateIntroduce2 = `${name} is a student and have age 's ${age}`;
// console.log(templateIntroduce);
// console.log("Name:",name);
// console.log('templateIntroduce2:', templateIntroduce2);

//  name
// console.log('name:', name, name.length, name[0], name.charAt(6), name.toUpperCase(), name.toLowerCase());

// compare string
// 'A' == 'a' -> false
// let user1 = "Thai Bao";
// let user2 = "tHAI bAO";
// console.log(user1 == user2);
// console.log(user1.toLocaleLowerCase() == user2.toLocaleLowerCase());

// some method of string
// let str = `Today is a beautiful day, is't it ?`;

// str.indexOf(str)
// console.log("indexof:", str.indexOf("day"));
// console.log("indexof:", str.indexOf("day2"));

//str.lastIndexOf(str)
// console.log("lastindexof:", str.lastIndexOf("day"));
// console.log("lastindexof:", str.lastIndexOf("day2"));

// str.slice(from)
// console.log("slice:", str.slice(6));

// str.slice(from, to)
// console.log("slice get 'is':", str.slice(6, 8));

// str.slice(all)
// console.log("slice get all:", str.slice(0, str.length));

// str.substring(from, to) like str.slice(from, to)
// console.log('substring get "is":', str.substring(6, 8));

//str.substr(index, length)
// console.log('substr get "is":', str.substr(6, 8));

// str.replace(str, new str)
// console.log("replace:", str.replace("day", ""));

// str.includes(str) return true or false
// console.log("includes:", str.includes("day"));

// str.trim(str)
// let unTrimStr = "      Vu Thanh Tung        ";
// let trimStr = unTrimStr.trim();
// console.log("unTrimStr: >" + unTrimStr + "<");
// console.log("trimStr: > " + trimStr + " <");

//exerice: convert to "Today is good day, is't it ?" not use replace method
// let substr = "beautiful";
// let pos = str.indexOf(substr);
// console.log(pos);
// let newStr =
// str.slice(0, pos) + "good" + str.slice(pos + substr.length, str.length);
// console.log(newStr);

// buid a trimName function
// cách này phải lặp lại nhiều lần nên sẽ có cách thứ 2
// function trimName(name) {
//   name = name.trim();
//   while (name.indexOf("  ") !== -1) {
//     name = name.replace("  ", " ");
//   }
//   return name;
// }

// console.log("  Nguyen Thanh                   Tung    ");
// console.log(trimName("  Nguyen Thanh                   Tung    "));

//cách 2
function replace(str, newSubstr, length, pos) {
  return str.slice(0, pos) + newSubstr + str.slice(pos + length);
}

console.log("Replaced:", replace("Vu Thanh Tung", "Vo", "Vu".length, 0));

function trimNameOp(name) {
  let index = 0;
  while (index <= name.length - 1) {
    if (name[index] == " " && name[index + 1] == " ") {
      name = replace(name, "-", 2, index);
    }
    index++;
  }
  return name;
}

console.log(trimNameOp("  Vu    Thanh    Tung   "));
