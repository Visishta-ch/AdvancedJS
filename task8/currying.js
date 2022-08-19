let multiply = function(x,y){
    console.log(x*y);
}

let multiplyByTwo  =  multiply.bind(this,2); //
multiplyByTwo(4);


/*function closures */

let add = function(x,y){
    console.log(x+y);
}

let addition = function(x){
    return function (y){
        console.log(x+y);
    }
}

let getSum = addition(4);//takes as one argument y=4
getSum(5);//another argumentx=5

let getSum1 = addition(6);//takes as one argument y=6
getSum1(5);//another argumentx=5