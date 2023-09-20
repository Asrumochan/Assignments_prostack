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

str="[[[[1234]]]]";
arr1=flat(str);
res=0;
arr1.forEach(element => {
    res=res*10+ parseInt(element);
});
console.log(res);

//reverse a number :
// num=13456;
// console.log(num.toString().split('').reverse().join(''));