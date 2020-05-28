function isSemetric(n) {

   let nStr = String(n);
   let newStr = '';
   for(let i = nStr.length -1; i >= 0; i--){
       newStr += nStr[i];
   }
   let newn = Number(newStr);
   if(n === newn){
       console.log('YES');
   }else{
       console.log('NO');
   }
}

isSemetric(123);
isSemetric(11);
isSemetric(1234321);

