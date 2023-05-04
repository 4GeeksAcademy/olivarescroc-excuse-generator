let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class","right on time","when I finished","during my lunch","while I was praying",];


//retorna un número aleatorio entre 0 y sizeOfArray - 1
function getRandomInt(sizeOfArray) {
  let randomNumber = Math.random();
  return Math.floor(sizeOfArray * randomNumber);
}

console.log(who[getRandomInt(who.length)] + " " + action[getRandomInt(action.length)] + " " + what[getRandomInt(what.length)] + " " + when[getRandomInt(when.length)]);
