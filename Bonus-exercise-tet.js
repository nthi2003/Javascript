// //Toán tử 3 ngôi
// const x = 100;
// let result;
// if(x<1000) {
//     result = "Nhỏ hơn 1000";
// }
// else {
//     result = "lớn hơn hoặc bằng 1000";
// }

const x = 100;
const result = (x < 1000) ? "nhỏ hơn 1000" : "lớn hơn 1000";

//Shorthand Evaluated

// let variable2;
// if(variable1 !== null || variable1 !== undefined || variable1 !== '') {
//     variable2 = variable1
// } else {
//     variable2 = "";
// }

const variable2 = variable1 || "";

// Variable declaration - If Comparison

// let x ;
// let y;
// let z = 3;

// let x, y, z = 3;

// if ( isTurnOn === true)

if (isTurnOn)

    //For loop -For loop with decimal base

    // for(let i = 0 , i < sampleArr.length; i++) 
    for (let item in sampleArr)

        // for ( let i = 0 ; i< 100000; i++) {}
        for (let i = 0; i < le5; i++) { }
le0 === 1;
le1 === 10;
le2 === 100;
le3 === 1000;
le4 === 10000;
le5 === 100000;

// Object property

// const x = 1, y = 2;
// const obj = {x: x , y: y};

// const x = 1, y = 2;
// const obj = { x, y }

//arrow function

// function sayHello(name) {
//     console.log('Hello', name);
// }
// setTimeout(function() {
//     console.log('Loaded')
// }, 2000);

// list.forEach(function(item) {
//     console.log(item)
// })

sayHello = name => console.log('Hello', name);

setTimeout(() => console.log('Loaded'), 2000);

list.forEach(item => console.log(item));

// ẩn return arrow function

// function getValue(radio) {
//     return ratio * 6.9;
// }
getValue = radio => radio * 6.9

//  set default value for parameter in funciton

// function getValue(a, b, c) {
//     if (a === undefined)
//         a = 3;
//     if (b === undefined)
//         b = 4;
//     return a * b + c
// }

getValue = ( a, b = 3, c = 4) => (a * b + c);

// template list

// const welcome = 'You have logged in as ' + first + last + '.'
const welcome = `You have logged in as ' ${first}  ${last} .`

// const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
// + 'adipiscing elit, sed do eiusmod tempor incididunt\n\t'
// + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
// + 'nisi ul aliquip ex ea commodo consequat. Duis aute\n\t'
// + 'irure dolor in reprehenderit in voluptate velit esse.\n\t'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt veniam, quis nostrud exercitation ullamco laboris nisi ul aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.'

//Destructuring Assignment

const action = require('lib/action')
const service = require('lib/service')

// const form = this.props.form;
// const errors = this.props.errors;
// const entity = this.props.entity;
// const controller = this.props.console;
// const component = this.props.component;

// import  { action, service } from 'lib';
// const { form, errors, entity, controller, component} = this.props;

//Spead Operator 

// const  odd = [1,3,5];
// const nums = [2,4,6].concat(odd);

const odd =  [1,3,5];
const nums = [2 , ...odd];

// const arr = [1,2,3,4];
// const arr2 = arr.slice()

const arr = [1,2,3,4]
const arr2 = [...arr]

const odd = [1,2,3,4]
const nums = [2,...odd, 4, 6];

//constraint param 

// function sample(param1) {
//     if(param1 === undefined) {
//         throw new Error('thiếu tham số!');

//     }
//     return param1;
// }

madatory = () => {
    throw new Error('Thiếu tham số!');
}
sample = (param1 = madatory()) => param1

// Find() in array

// const employees  = [
//     {name: 'Emp A', age: 25},
//     {name: 'Emp B', age: 28},
//     {name: 'Emp C', age: 35}
// ]

// function findEmp(name) {
//     for(let i = 0; i < employees.length; i++) {
//         if(employees[i].name === name){
//             return employees[i];
//         }
//     }
// }
// const name = 'Emp A'
// emp = findEmp(name)

const name = "Emp A"
emp = employees.find(item => item.name === name)

// Object[key]
function validate(fullName){
    if(!fullName.firstName)
    return false
    if(!fullName.lastName)
    return false
return true
}
console.log(validate({firstname: 'Duy', lastName: 'Buffet'}))

// obj[key]
const rule = {
    firstName: {
        required: true,
    },
    lastName: {
        required: true,
    }
}

const validate = (rule, validate) => {
    for(prop in rule) {
        if(rule[prop].required){
            if(!values[prop]){
                return false
            }
        }
    }
    return true
}
console.log(validate(rule, {firstName: 'Duy'}));
console.log(validate(rule, {firstName: 'Duy', lastName: 'Buffet'}));

// bitwise not double
// Math.floor(6.9) === 6 
~~6.9 === 6