function display()
{
    console.log("This is Calculator");
}
function display1()
{
    return "This is calculator";
}
function print(n1,n2,n3)
{
    console.log(n1,n2,n3);
}
function sum(n1,n2,n3){
    let s=n1+n2+n3;
    return s;
}
function sumWithValidation(n1,n2,n3)
{
    if(isNaN(n1)==true || isNaN(n2)==true || isNaN(n3)==true)
    {
        return 0;
    }
    else
    return n1+n2+n3;
}
function multi(n1,n2)
{
    return n1*n2;
}
const ex_print= function()
{
    console.log("This is function expression");
}
const num_print= function(n1)
{
    console.log("This is function expression " , n1);
}


display();
console.log(display1());
print(1,2,3);
console.log(sum(12,23,32));
console.log(sumWithValidation(40,59,9));
console.log(multi(12,2));
ex_print();
num_print(12);