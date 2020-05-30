const reverseStr = (str) => {
  let result = '';
  for(let i = str.length - 1; i >= 0; i--){
    result += str[i];
  }
  return result;
};

console.log('reverseStr("This is a beautiful day!"):', reverseStr("This is a beautiful day!"));
