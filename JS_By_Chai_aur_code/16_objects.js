let mySym = Symbol('symbol_one');
console.log(mySym);
let newObj = {
    [mySym]:"Symbol used",
    name: "Nikki"
}

newObj.greetings = function(){
    console.log(`Helo ${this.name}`);
}

console.log(newObj.greetings())

newObj.age = 25;

console.log(newObj);