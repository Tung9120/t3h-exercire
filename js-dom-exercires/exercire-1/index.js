let name = prompt('Please enter your name', 'something');
let age = prompt("Please enter your age", 0);

if(name != '' && age != ''){
  document.getElementById('name').innerHTML = `Hi friend, <b>${name}</b>`;
  document.getElementById('age').innerHTML = `Your age is <b>${age}</b>`;
}