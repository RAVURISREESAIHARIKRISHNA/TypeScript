let doSomething = (message:string) => {
    console.log(message);
}

let addNumbers = (addends :{a:number , b:number}) => {
    return addends.a + addends.b;
}

interface Addends{
    a : number,
    b : number
}

let addNumbers2 = (addends:Addends) => {
    return addends.a + addends.b;
}

doSomething("Hello JS Lambda");
console.log(  addNumbers( {a:1,b:2} )  );
console.log(  addNumbers2( {a:1,b:2} )  );
