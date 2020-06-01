const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const mostOccur = (arr) => {
  let occurences = [];
  for(let i = 0; i < arr.length; i++){
    occurences[arr[i]] = (occurences[arr[i]] || 0) + 1;
  }
  occurences.shift();
  let maxValue = occurences[0];
  
  for (let i = 0; i < occurences.length; i++) {
    if (occurences[i] > maxValue) {
      maxValue = occurences[i];
    }
  }

  return maxValue;
};

console.log('mostOccur(a):', mostOccur(a));
