let multiArray : number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

for(let i=0;i<=multiArray.length-1;i++){
    let currentRow = multiArray[i];

    for(let j=0;j<=currentRow.length-1;j++){
        console.log("("+(i+1)+" , "+(j+1)+" ) => "+currentRow[j]);
    }
}

// OR

for(let a of multiArray){
    for(let b of a){
        console.log(b);
    }
}