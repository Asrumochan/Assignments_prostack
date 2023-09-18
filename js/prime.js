const check =function (num) {
    var div=1;
    var count=0;
    while (div<=num) {
        if(num%div==0){
            count++;
        }
        div++;
    }
    return count;
}

var  num=6;
if(check(num)==2)
console.log(num+" is a prime number. ");
else
console.log(num+" is not a prime number. ");
