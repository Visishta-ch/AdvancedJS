//this inside a global scope

this.hospital = 'V3 Hospital'
console.log(this.hospital);

this.coreSpeciality = {
    hospital : 'Childrens Hospital'
}
console.log(this.coreSpeciality);
console.log(this.coreSpeciality.hospital);

//this inside a object ----cannot use this keyword inside an object---
let maxHospital = {
    location : 'Banglore'
}
console.log(this.maxHospital); //gives undefined.
console.log(maxHospital); //{ location: 'Banglore' }
console.log(maxHospital.location); // Banglore

 //this inside a method ----
 let rainbowHospital = {
    location: 'Hyderabad',
    treat : 'Peadiatrics and Children',
    speciality : 'SuperSpeciality',

    concernedAbout(){
        console.log(`Rainbow Hospital is ${this.speciality} hospital mainly concerned about ${this.treat}`)
    }
 }
rainbowHospital.concernedAbout(); //Rainbow Hospital is SuperSpeciality hospital mainly concerned about Peadiatrics and Children

//this inside a Functional --- this inside a function does not work because
//as function is a block so this doesnot know which object it is reffering too...
//so to use this Keyword inside a function we use a call function

// this.Dog = 'Jhonyy'
// const breed = function(){
//     console.log(`${this.Dog} is a German Shepherd`)
// }
// breed;

this.Dog = 'Jhonyy'
const breed = function(){
    console.log(`${this.Dog} is a German Shepherd`)
}
breed.call(this);
//accessing function using call.
this.dog = 'Leo'
this.type = 'ShihTzu'
const breedType = function(color){
    console.log(`${this.dog} is ${this.type} and is ${color} colored `)
}
breedType.call(this, 'brown');

///this inside a inner function
/*case 1: passing that to this*/

this.pet = 'Jhonyy'
const breed1 = function(){
    let that = this;
    const inf = function(){
        console.log(`${that.pet} is a German Shepherd`)
    }
   inf();
}
breed1.call(this); //Jhonyy is a German Shepherd

this.pet2 = 'Juliie'
const breed2 = function(barks){
    let that = this;
    const inf2 = function(_barks){
        console.log(`${that.pet2} is fully fured and ${_barks}`)
    }
   inf2(barks);
}
breed2.call(this,'barks');


/*case2 calling infunction using call function */
this.pet3 = 'Alex'
const breed3 = function(play){
    
    const inf3 = function(_play){
        console.log(`${this.pet3} is a ${play}`)
    }
   inf3.call(this,play);
}
breed3.call(this,'playful');

/*using binding */
this.kitty = 'kittyy'
const breed4 = function(play){
    
    const inf4 = function(_play){
        console.log(`${this.kitty} is a ${play}`)
    }
   inf4.bind(this)(play);
}
breed4.call(this,'playful');
/* using Arrow functions */

this.pup = 'ben';
const bt = function(play){
    
    const inf5 = (_play) => {
        console.log(`${this.pup} is a puppy and it ${play}`)
    }
   inf5.call(play);
} 
bt.call(this,'does not play much');


/*this inside a constructor */
let student = function(name){
    this.name = `${name}`
}
student.prototype.section = function(sec){
    console.log(`student ${this.name} is in ${sec}`);
}

const s1 =  new student('keerthy');
console.log(s1.name);
console.log(s1);
/*this inside classes */
class Student {
    constructor(name){
        this.name = `${name}`
    }
    section(sec){
        console.log(`student ${this.name} is in ${sec} section`);
    }
}
const s2 = new Student('Satya');
s2.section('B')