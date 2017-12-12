var doSomething = function (message) {
    console.log(message);
};
var addNumbers = function (addends) {
    return addends.a + addends.b;
};
var addNumbers2 = function (addends) {
    return addends.a + addends.b;
};
doSomething("Hello JS Lambda");
console.log(addNumbers({ a: 1, b: 2 }));
console.log(addNumbers2({ a: 1, b: 2 }));
