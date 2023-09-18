const flat=function (str) {
    a=[];
    for (let i = 0; i < str.length; i++) {
        if (str[i]=="[" || str[i]=="]") {
            continue;
        }
        else
        a.push(str[i]);
    }
    return a;
}

str="[[[[123]]]]";
console.log(flat(str));
