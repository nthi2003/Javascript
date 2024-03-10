var sayBye = (name) => {
    var text = 'Bye ' + name;
    return () => {
        console.log(text)
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe()
var add = (a,b,c) => {
    return a+b+c;
}
console.log(add(1,2,3))
 addCurries = (a) => {
        return (b) => {
            return (c) => {
             return a + b + c;
        }
}
}
console.log(addCurries(1)(2)(3))
const ad1 = addCurries(1)
const ad2 = ad1(2)
const ad3 = ad2(4)
console.log(ad3)

// global = () => {
//     document.write(this + "<br/>");


// }
// // var o = {
// //     "local" : () => {
// //         document.write(this + this.x + "<br/>"   );
// //     },
// //     "x":10
// // }
// // global()
// // o.local()
var student = {
    name: 'Mai ha Thi',
    getName: function(){
        console.log(this.name);
        return this.name;
    }
    
}
var _deStudent = student.getName();

// var preson1 = {name: 'Nhat Minh', age : 12 };

// var preson2 = {name: 'Huu Trung', age: 32 };

// var sayHello = function() {
//     alert('Hello,' + this.name);
// }
// var sayGoodbye = function() {
//     alert('Goodbye,' + this.name);
// }
// sayHello.call(preson1)
// sayGoodbye.call(preson2)
// sayHello.apply(preson1)
// sayGoodbye.apply(preson2)

step1 = () => {
    console.log(te)
}
step2 = () => {
    var te = 2;
    step1();
}
step2();
var te = "GG"

var checkNumericRange = function(value){
    if(typeof value !== 'number'){
        return false;
    }
    else 
    return value >= this.minimum && value <= this.maximum;
}
var range = { minimum: 10, maximum: 20};

var boundCheckNumbericeRange = checkNumericRange.bind(range);
var result = boundCheckNumbericeRange (12);
console.log(result)

var add = (v1, v2) => {return v1 + v2}
const curriedAdd = (v2) => {
    return add(5 , v2)
} 
console.log(add(5, 2))

fOuter = () => {
    var x = "Hello";
    fInner = () =>  {
        x = "World";
    }
    fInner();
    return x;

} 
console.log(fOuter())

var myFunction = () => {
    var name = 'ha Thi';
    var myOtherfunction = () => {
        console.log('I am ' + name);
    }
    console.log(name);
    myOtherfunction();
}
myFunction()

otherF=() =>{
    var x = "World";
    innnerFsetX = (val) => {
        x = val
    } 
return innnerFsetX;
}
var a = otherF();
a("Hello");

class square{
    constructor(width){
        this.width = width;
    }
    getArea(){
        console.log(`Square of this ${this.width * this.width}`);
        return this.width * this.width;
    }
}

class cube extends square{
    constructor(width){
        super(width);
    }

    squareArea = this.getArea();
    getVolume(){
        console.log(`Volume of this ${this.squareArea * this.width}`);
        return this.squareArea * this.width;
    }
}

var myCube = new cube(5);
myCube.getVolume();