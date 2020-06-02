let a = [1,3,6,9,11,20];
let k = 13;

a.push(k);
a = a.sort((a, b) => {
  return a - b;
});

console.log('a:',a);