
class student {
    static count = 0;
    
    constructor(name,age,mobileNumber,marks){
        this.name = name;
        this.age = age;
        this.mobileNumber = mobileNumber;
        this.marks = marks;
        student.studentCount();
        
    }
    static studentCount(){
    
        return (student.count++);
    }


    eligibility(){
        if(this.marks > 40){
            console.log(`Student ${this.name} is eligibile for college`);
        }
        else
            console.log(`Student ${this.name} is not eligible for college`);
    }

    
    eligibileForPlacement(minAge){
        
        
            return (minMarks) => {
                
                if(this.marks > minMarks && this.age > minAge){
                    console.log(`${this.name} is eligible for company`);
                }                   
                else
                    console.log(`${this.name} is not Eligible for placements`)
             }  
    }
}
const student1 = new student('Sirisha',23,'2345124',92);
const student2 = new student('Anusha',22,'2345124',67);
const student3 = new student('Alex',24,'2345124',39);
const student4 = new student('John',23,'2345124',87);
const student5 = new student('Kavya',20,'2345124',96);
console.log(student.studentCount());
// student1.eligibility();
// student2.eligibility();
// student3.eligibility();
// student4.eligibility();
// student5.eligibility();
student1.eligibileForPlacement(20)(50);
student3.eligibileForPlacement(20)(50);
student2.eligibileForPlacement(20)(50);
student5.eligibileForPlacement(20)(50);