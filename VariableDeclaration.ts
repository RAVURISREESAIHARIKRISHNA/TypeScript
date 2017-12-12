// let Keyword is not new Keyword
// Its been in JS from ES5(ECMAScript 5)

let count = 5; //let count : number

let a; //let a : any
a=1;
a='a';
a=true;

let b : number;

// b='a';   ERROR

let var1 : number;
let var2 : boolean;
let var3 : string;
let var4 : any;

// Arrays
let var5 : number[];
let var6 : number[] = [1,2,3,4,5];
let var7 : any[] = [1,'two',true];

// in JS Ennumeration
const red = 1;
const green = 2;
const blue = 3;

// in TypeScript
// enum <EnumName> { <name1>  , <name2> [= YourValue] , ... , <name n>};
enum Color {red , green , blue = 5};
let myColor = Color.red;