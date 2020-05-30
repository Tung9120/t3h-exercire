const replace = (str, newSubStr, length, pos) => {
  return str.slice(0, pos) + newSubStr + str.slice(pos + length);
};

const removeSpaces = str => {
  let index = 0;
  while (index < str.length) {
    if ((str[index] == " ")) {
      str = replace(str, "", 1, index);
      console.log(str);
    } else {
      index++;
    }
  }
  return str;
};

console.log('removeSpaces("   Hello   world!   ")', removeSpaces('   Hello   world!   '));