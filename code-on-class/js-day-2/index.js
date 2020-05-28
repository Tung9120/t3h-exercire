var todayIsRanning = true;

if(true){
    console.log('it \'s true');
}else{
    console.log('it \'s false');
}

let myMarks = '10';
let studentName = 'Tung';
myMarks = Number(myMarks);

// console.log('myMarks = ', myMarks, 'typeof myMarks = ', typeof myMarks);

// if(myMarks === 10 && studentName == 'Tung'){
//     console.log('You are excellent');
// }else{
//     console.log('You are not excellent');
// }

// function showInfo(name = 'No name', marks = 5){
//     console.log('Your name is', name, ', your marks is', marks);
// }

// showInfo('Tung');

let studentMarks = 7;
// if(studentMarks >= 0 && studentMarks <= 10){
//     if(studentMarks <= 4){
//         console.log('Bad');
//     }else if(studentMarks > 4 && studentMarks < 7){
//         console.log('Medium');
//     }else if(studentMarks >= 7 && studentMarks <= 8){
//         console.log('Good');
//     }else if(studentMarks <= 8 && studentMarks <= 9){
//         console.log('Very Good');
//     }else{
//         console.log('excellent');
//     }
// }
// nên dùng else if kiểm tra 1 điều kiệm để tối ưu performance

switch(studentMarks){
    case 4:
        console.log('Bad');
    default:
        console.log('Good');
}

if(studentName == 'A'){
    console.log('Hello A');
}else if(studentName == 'B'){
    console.log('Hello B');
}else{
    console.log('Hello Tung');
}

switch(studentName){
    case 'A':{
        console.log('Hello A');
        break;
    }

    case 'B':{
        console.log('Hello B');
        break;
    }

    default:{
        console.log('Hello Tung');
        break;
    }
}

let month = 5;

switch(month){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log('Spring');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        console.log('Summer');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Autumn');
        break;
    case 12:
        console.log('Winner');
        break;
    default:
        console.log('Winner');
        break;
}



