var message; //Here, message : any
message = 'abc';
var result = message.endsWith('c'); //endsWith() works with Variable of type :string
// What if at the time of Running message is Not String
// Type Assertion:
// For this we have to tell TypeScript that 'message' is a String.This is done by....
var message2;
message2 = 'abcde';
var result2 = message2.endsWith('e');
// OR
var message3;
message3 = 'abcdefghi';
var result3 = message3.endsWith('i'); //This is NOT Preferred as,This does not change Object in Memory
