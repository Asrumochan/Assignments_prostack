const flat_print=function (arr) {
    return arr.flat(Infinity);
}
arr=[['Hello'], [[2]], [[[['everyone']]]]];
arr1=flat_print(arr);
console.log(arr1);
var str="";
arr1.forEach(element => {
    str=str.concat(" ",element)
});

console.log(str);