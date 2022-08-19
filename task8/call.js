let student = {age : 23};

let printSdetails = function(){
    console.log("Students age is " + this.age);
}

printSdetails.call(student);

/*bind */
let s1 = {age: 20};
let details = printSdetails.bind(s1);
console.log(details);
details();