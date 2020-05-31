const str = "This is a good day!";
const subStr = "is";

// const splitString = (str, subStr) => {
//   let spaces = 0;
//   let posStrFind = str.indexOf(subStr);
//   let charBefWordFind = str.slice(posStrFind - 1, posStrFind);
//   let charAftWordFind = str.slice(
//     posStrFind + subStr.length,
//     posStrFind + subStr.length + 1
//   );
//   if (posStrFind != -1 && charBefWordFind == " " && charAftWordFind == " ") {
//     let newStr = str.slice(0, posStrFind + subStr.length);
//     return newStr;
//   } else {
//     let newStr = str.slice(posStrFind + subStr.length);
//     return newStr;
//   }
// };

// const findPosInStr = (str, subStr) => {
//   if (str.length < 1) {
//     return "No strings have been passed";
//   }
//   let spaces = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == " " && str[i + 1] != " ") {
//       spaces++;
//       let posStrFind = str.indexOf(subStr);
//       let charBefWordFind = str.slice(posStrFind - 1, posStrFind);
//       let charAftWordFind = str.slice(
//         posStrFind + subStr.length,
//         posStrFind + subStr.length + 1
//       );
//       if (
//         posStrFind != -1 &&
//         charBefWordFind == " " &&
//         charAftWordFind == " "
//       ) {
//         let newStr = str.slice(0, str.indexOf(subStr) + subStr.length);
//         return newStr;
//       }
//     }
//     return spaces;
// };

// console.log(
//   "findPosInStr('This is a beautiful day!', 'is'):",
//   findPosInStr(splitString(str, subStr), subStr)
// );
