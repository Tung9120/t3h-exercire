function total(n){
    if(n == 0){
        return 0;
    }
    return total(n - 1) + n;
}

console.log('total(9):', total(9));