function countSpaces(str){
    let temp = '';
    let count = 0;
    // while(str.indexOf(' ') != -1){
    //     temp = str.slice(str.indexOf(' '));
    //     count++;
    //     if(str.indexOf(' ') == -1){
    //         break;
    //     }
    // }
    for(let i = 0; i < str.length; i++){
        temp = str.slice(str.indexOf(' '));
    }
    return count;
}

console.log('count spaces:', countSpaces('Hello world'));