let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let arr2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const findSecondLargestValue = (arr) => {
  let first, second;

  first = second = Number.MIN_VALUE;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > first){
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] != first){
      second = arr[i];
    }
  }
  if(second == Number.MIN_VALUE){
    return -1;
  }else{
    return second;
  }
};

console.log("findSecondLargestValue(arr1):", findSecondLargestValue(arr1));
console.log("findSecondLargestValue(arr2):", findSecondLargestValue(arr2));
