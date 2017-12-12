let message; //Here, message : any
message = 'abc';
let result = message.endsWith('c'); //endsWith() works with Variable of type :string
// What if at the time of Running message is Not String

// Type Assertion:
// For this we have to tell TypeScript that 'message' is a String.This is done by....
let message2;
message2 = 'abcde';
let result2 = (<string>message2).endsWith('e');

let message3;
message3 = 'abcdefghi';
let result3 = (message3 as string).endsWith('i'); 
