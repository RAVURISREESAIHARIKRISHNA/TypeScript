let my_array : Array<number> = [1,2,3];

for(let x in my_array){
    // x iterates over all the indices in my_array
    console.log(my_array[x]+"\n");
}
console.log("*******");
for(let x of my_array){
    // x iterates over all the values in my_array
    console.log(x+"\n");
}