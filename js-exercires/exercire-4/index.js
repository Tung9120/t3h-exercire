for(let num = 1; num < 10; ++num){
    let count = 0;
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i == 0){
            count++;
        }
    }
    if(count == 0 && num > 1){
        console.log(num);
    }
}