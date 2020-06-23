// console.log("Random :", Math.random());
// console.log("Random 1 -> 10: ", Math.random() * 10);

// random from 1 to 10
function randomFrom1ToN(n){
    return Math.floor(Math.random() * n) + 1;
}

console.log("random 1 -> 10:" ,randomFrom1ToN(10));

// random from 0 to 10
function randomFrom0ToN(n){
    return Math.floor(Math.random() * (n + 1));
}

console.log('random from 0 to n', randomFrom0ToN(10));

// random from sth to sth

function random(from, to){
    return from + randomFrom0ToN(to - from);
}

var from = 5;
var to = 10;

console.log('Random from', from, 'to', to, ':', random(from, to));