var n = 113219;
var check = true;

while(n > 0){
    let remain = n % 10;
    if(remain / 2 == 0){
        check = false;
    }
    console.log(remain);
    n = (n - remain) / 10;
}

console.log('check:', check);

// var check = true;
// var remain = n % 10;
// if(remain % 2 == 0){
//     check = false;
// }

// n = n / 10;