class Student{
    private roll : number;
    private name : string;
    private marks : number;

    constructor(roll?:number , name?:string,marks?:number){
        this.roll=roll;
        this.name=name;
        this.marks=marks;
        console.log("Constructor Called");
    }
    public getRoll() : number {
        return this.roll;
    }
    public getName() : string{
        return this.name;
    }
    public getMarks() : number{
        return this.marks;
    }
    public setRoll(roll : number) : void{
        this.roll = roll;
    }
    public setName(name:string):void{
        this.name = name;
    }
    public setMarks(marks:number):void{
        this.marks = marks;
    }
    
}

// Dont Care the Underlines of VSCode...This Works Fine....This is RIGHT SYNTAX
let myObject = new Student(); //Constructor should not take any arguments
myObject.setRoll(38);
myObject.setName('Hari Krishna');
myObject.setMarks(100);
console.log('Name : '+myObject.getName()+'\nROLL : '+myObject.getRoll()+'\nMARKS: '+myObject.getMarks());

// Dont Care the Underlines of VSCode...This Works Fine....This is RIGHT SYNTAX
let myObject2 = new Student(1,'One',20);
console.log('Name : '+myObject2.getName()+'\nROLL : '+myObject2.getRoll()+'\nMARKS: '+myObject2.getMarks());