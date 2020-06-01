const nums = [1, 2, 3, 4, 6, 7];

// const myOption = (num) => {
//   console.log(num - 1 , num + 1);
// };

// const result = nums.filter((item, index) => {

// });

const selectNumber = (arr, num) => {
  if (num === arr[0]) {
    return arr[0] - 1;
  }
  if (num === arr[arr.length - 1]) {
    return arr[arr.length - 1] + 1;
  }
  return arr.filter((item) => {
    return item + 1 == num || item - 1 == num;
  });
};

console.log("selectNumber(nums, 1):", selectNumber(nums, 1));
console.log("selectNumber(nums, 7):", selectNumber(nums, 7));
console.log("selectNumber(nums, 3):", selectNumber(nums, 3));
