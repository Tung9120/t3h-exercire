const input = "NguyeN THI tho tHu hA";

const capitalizeName = name => {
  let words = name.split(' ');
  let arr = [];

  for(let i in words){
    temp = words[i].toLowerCase();
    temp = temp.charAt(0).toUpperCase() + temp.substring(1);
    arr.push(temp);
  }
  
  return arr.join(' ');
};

console.log("capitalizeName('NguyeN THI tho tHu hA'):", capitalizeName('NguyeN THI tho tHu hA'));