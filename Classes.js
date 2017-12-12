var Student = /** @class */ (function () {
    function Student(roll, name, marks) {
        this.roll = roll;
        this.name = name;
        this.marks = marks;
        console.log("Constructor Called");
    }
    Student.prototype.getRoll = function () {
        return this.roll;
    };
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getMarks = function () {
        return this.marks;
    };
    Student.prototype.setRoll = function (roll) {
        this.roll = roll;
    };
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setMarks = function (marks) {
        this.marks = marks;
    };
    return Student;
}());
// Dont Care the Underlines of VSCode...This Works Fine....This is RIGHT SYNTAX
var myObject = new Student(); //Constructor should not take any arguments
myObject.setRoll(38);
myObject.setName('Hari Krishna');
myObject.setMarks(100);
console.log('Name : ' + myObject.getName() + '\nROLL : ' + myObject.getRoll() + '\nMARKS: ' + myObject.getMarks());
// Dont Care the Underlines of VSCode...This Works Fine....This is RIGHT SYNTAX
var myObject2 = new Student(1, 'One', 20);
console.log('Name : ' + myObject2.getName() + '\nROLL : ' + myObject2.getRoll() + '\nMARKS: ' + myObject2.getMarks());
