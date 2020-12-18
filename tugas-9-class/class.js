console.log("=== 1. Animal Class ===");
// release 0
class Animal {
    constructor(name) {
        this._name = name;
        this._legs = 4;
        this._cold_blood = false;   
    }
    get name() {
        return this._name
    }
    get legs() {
        return this._legs
    }
    set legs(amount) {
        return this._legs = amount
    }
    get cold_blood() {
        return this._cold_blood 
    }
    
}

var sheep = new Animal("shaun");

console.log(sheep.name);
console.log(sheep.legs); 
console.log(sheep.cold_blood);

// release 1

class Ape extends Animal {
    constructor(name, amount) {
        super(name)
        this._legs = amount
    }
    yell(){
        console.log("Auoooo");
    }
    
}

class Frog extends Animal {
    constructor(name) {
        super(name)
    }
    jump() {
        console.log("hop hop");
    }
}
var sungokong = new Ape("kera sakti")
sungokong.yell() 
console.log(sungokong.name);
console.log(sungokong.legs); 
console.log(sungokong.cold_blood);
 
var kodok = new Frog("buduk")
kodok.jump() 
console.log(kodok.name);
console.log(kodok.legs); 
console.log(kodok.cold_blood); 