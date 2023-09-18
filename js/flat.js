const flat=function (str) {
    a=[];
    for (let i = 0; i < str.length; i++) {
        if (str[i]=="[" || str[i]=="]") {
            continue;
        }
        else
        a.push(Number(str[i]));
    }
    return a;
}

str="[[[[12]]]]";
arr1=flat(str);
var res=0;
var mul=1;
arr1.forEach(element => {
    res=res+element*mul;
    mul*=10;
});
console.log(res.toString().split('').reverse().join(''));