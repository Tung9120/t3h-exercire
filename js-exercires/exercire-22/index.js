const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const myFind = (arr) => {
  let minValue = arr[0],
    maxValue = arr[0],
    total = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  let average = total / arr.length;
  return { minValue, maxValue, average };
};

console.log("myFind(a):", myFind(a));
