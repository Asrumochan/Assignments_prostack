arr= [44, 22, 9, 10, 2, 44, 88, 3, 9, 4, 22, 10] ;
console.log(arr.filter((v,i,a)=>{
    return i !==a.lastIndexOf(v);
}));
