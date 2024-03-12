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

// function Car(){
//    this.speed =  0;
// }

// Car.prototype = {
//     constructor: Car,
//     printSpeed: function(){
//        console.log(this.speed+'<br/>')
//     },
// }

// var car = new Car()
//     car.instanceMethod = function() {
//         console.log('An instance method <br/>')
//     }
// car.speed = 50;
// car.printSpeed();
// car.instanceMethod();
// function Cabriolet(){}
//     Cabriolet.prototype = new Car();
//     Cabriolet.prototype.topState = 'colosed'
//     Cabriolet.prototype.openTop = function(){
//         this.topState = 'open';
//         console.log(this.topState)
//     }
//     Cabriolet.prototype.closeTop = function(){
//         this.topState = 'close';
//         console.log(this.topState)
//     }

//     var cabriolet = new Cabriolet();
//     cabriolet.speed = 120;
//     cabriolet.printSpeed();
//     cabriolet.openTop();
//     cabriolet.closeTop();
//     function TeslaCabriolet(){}
//     TeslaCabriolet.prototype = new Cabriolet();
//     TeslaCabriolet.prototype.name = 'Tesla http'
//     TeslaCabriolet.prototype.sayName = function(){
//         console.log(this.name);
//     }
//     var tesla = new TeslaCabriolet()
//     tesla.openTop()
//     tesla.sayName()


class Car {
    constructor(speed, user) {
        this.speed = speed;
        this.user = user;

    }
    printSpeed(){
        console.log(`Current speed: ${this.speed}`);
    }
    instanceMethod() {
        console.log('An instance method <br/>')
    }
}

class Cabriolet extends Car {
    constructor(){
       super()
       this.speed = 'closed'
    }
    openTop() {
        this.topState = 'opened';
        console.log('Top: ' + this.topState + '<br/>');
    }
    closeTop(){
        this.topState = 'closed';
        console.log('Top: ' + this.topState+ '<br/>');
    }
}



 class TeslaCabriolet extends Cabriolet {
    constructor() {
        super();
        this.name = 'Tesla http/// ....'; 
    }

    openTop() {
        super.openTop();
    }


    sayName() {
        console.log(this.name);
    }
}
const car = new Car();
car.speed = 50;
car.printSpeed();

car.instanceMethod = function() {
    console.log('An instance method <br/>');
}
car.instanceMethod();

const cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.user = 'ỵi'
console.log(cabriolet.user)
cabriolet.openTop();
cabriolet.closeTop();
const tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();

