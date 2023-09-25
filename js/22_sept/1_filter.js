arr= [44, 22, 9, 10, 2, 44, 88, 3, 9, 4, 22, 10,9] ;
// duplicate values
console.log(arr.filter((v,i,a)=>{
    return i !==a.lastIndexOf(v);
}));

// more than 2 repetition
console.log(arr.filter((v,i,a)=>{
    return i!==a.indexOf(v) && i=== a.lastIndexOf(v);
}));