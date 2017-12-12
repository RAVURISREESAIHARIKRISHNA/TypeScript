// let Keyword is not new Keyword
// Its been in JS from ES5(ECMAScript 5)
var count = 5; //let count : number
var a; //let a : any
a = 1;
a = 'a';
a = true;
var b;
// b='a';   ERROR
var var1;
var var2;
var var3;
var var4;
// Arrays
var var5;
var var6 = [1, 2, 3, 4, 5];
var var7 = [1, 'two', true];
// in JS Ennumeration
var red = 1;
var green = 2;
var blue = 3;
// in TypeScript
// enum <EnumName> { <name1>  , <name2> [= YourValue] , ... , <name n>};
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 5] = "blue";
})(Color || (Color = {}));
;
var myColor = Color.red;
