const nums = [1, 2, 3, 2, 3, 4, 6, 7];

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
};

const primeNumbers = nums.filter(isPrime);

console.log("primeNumbers:", primeNumbers);
