"use strict";

// var getA = function(){
//     return a;

// };

let getA = a => a;
console.log(getA(1))

let square = num => num*num;
let cube = num => {
    return num*num*num;
}

console.log(square(3));
console.log(cube(3));

var a=3;
var b =2;
let add = () => {
    return a+b;
}
console.log(add());


// var x = function(){
//     var that = this;
//     this.val = 1;
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val);
//     },1)
// };
// var xx = new x();

var count = function(){
    this.val = 1;
    setTimeout( () => {
        this.val++;console.log(this.val)
    }, 1) 
}
var updateCount = new count();


var x = function(){
    console.log(arguments[0]);
}
x(1,2,3);
