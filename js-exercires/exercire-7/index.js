let storage = 0;

for(let i = 1; i <= 5; i++){
	if(!(i % 2 == 0)){
		storage += i;
	}
}

console.log(storage);