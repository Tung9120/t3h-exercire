// chữa bài kiểm tra số nguyên tố 

// cách 1 để kiểm tra số nguyên tố 

// let count = 0;

// for(let i = 1; i <= myNumber; i++){
//     if(myNumber % i == 0){
//         count++;
//     }
// }

// if(count == 2){
//     console.log('Prime');
// }else{
//     console.log('Not prime');
// }

// đây là cách thứ 2, tối ưu hơn cách thứ 1 

let isPrime = true;
if(myNumber <= 1){ isPrime = false; }
for(let i = 2; i <= Math.sqrt(myNumber); i++){
    if(myNumber % i == 0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log('Prime');
}else{
    console.log('Not prime');
}