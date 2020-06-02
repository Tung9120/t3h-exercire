let a = [9, 8, 7, 6, 4, 5, 3, 2, 1];

const sortedArrAscending = (arr) => {
  let medium;
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] > arr[j]){
        medium = arr[i];
        arr[i] = arr[j];
        arr[j] = medium;
      }
    }
  }
  return arr;
};

console.log('sortedArrAscending(a):', sortedArrAscending(a));

