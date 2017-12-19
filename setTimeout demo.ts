//  setTimeout(function (){} , milliseconds , <other args>)
// This does not stop the flow of execution....
// The interpreter sets this aside and continues with the flow...When the time expires
// it executes our code
// So

for(var i=0;i<=10;i++){
    setTimeout(
        function(){console.log(i)},
        100*i
    );
}
// when setTimeout is reached,this will be ept aside
// and for loop goes on

// when time expires it runs our code...next statement is to again increment and run for loop
// so O/P will be
// 11
// 11
// ....
// 11