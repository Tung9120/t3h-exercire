const findMaxValue = (a, b, c) => {
  let maxValue = a;

  if (b > maxValue) {
    maxValue = b;
  }

  if (c > maxValue) {
    maxValue = c;
  }

  return maxValue;
};

const findMinValue = (a , b, c) => {
  let minValue = a;

  if (b < minValue) {
    minValue = b;
  }

  if (c < minValue) {
    minValue = c;
  }
  
  return minValue;
}

console.log('FindmaxValue(2, 4, 7):', findMaxValue(2, 4, 7));
console.log('FindminValue(2, 4, 7):', findMinValue(2, 4, 7));