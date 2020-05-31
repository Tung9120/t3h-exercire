const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const total = a.reduce((a, b) => {
  return a + b;
}, 0);

console.log('total:', total);

const getTotal = arr => {
  let storage = 0;
  for(let i = 0; i < arr.length; i++){
    storage += arr[i];
  }
  return storage;
};

console.log("getTotal(a):", getTotal(a));