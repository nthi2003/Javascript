// function Constructor  (val) {
//     this.properties_2 = 'bubble';
//     this.properties_3 = val;

// }
// var obj = new Constructor('bub');
// console.log(obj.properties_3);

// => chuyển thành class
class Constructor {
    constructor (val) {
        this.properties_2 = 'bubble';
        this.properties_3 = val;
    }
}
var obj = new Constructor('bub');
console.log(obj.properties_3);

class Pet {
    constructor(name, TiengKeu) {
        this.name = name;
        this.TiengKeu = TiengKeu;
    }
    introduce() {
        console.log(`Tôi tên là ${this.name}`);
    }
    talk () {
        console.log(`Tiếng Kêu là ${this.TiengKeu}`);
    }
}
const myPet = new Pet('Kiki' , 'Gâu')
myPet.introduce()
myPet.talk()
console.log(myPet)


class Dog extends Pet{
 constructor(name, TiengKeu, LoaiVat) {
    super(name,TiengKeu)
    this.LoaiVat = LoaiVat;
 }
 DongVat() {
    console.log(`Tôi là  ${this.LoaiVat}.`);
 }
 introduce() {
    console.log(`Tôi tên là ${this.name}`);
}
talk () {
    console.log(`Tiếng Kêu là ${this.TiengKeu}`);
}
}
const myDog = new Dog('Kiki','Gâu', 'Chó');
myDog.introduce()
myDog.talk()
myDog.DongVat()