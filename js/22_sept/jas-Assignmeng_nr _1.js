/* 
1. Write a program to check if a number is divisible by 7 or not
const num=14;

if (num%7==0) {
    console.log(num," is divisible by 7");
} else {
    console.log(num," is not divisible by 7");
    
}

2. Write a program to check if a number is multiple of 3 or not?
const num=15;

if (num%3==0) {
    console.log(num," is multiple of 3");
} else {
    console.log(num," is not multiple of 3");
    
}

3. Write a program to check if a number is positive or not?
const num=-15;

if (num>0) {
    console.log(num," is positive");
} else {
    console.log(num," is not negative");
    
}

4. Write a program to check if a number is 3-digit numbers or not?

const num=77;

if (num/100 >1 && num/1000 < 1) {
    console.log(num," is 3-digit number");
} else {
    console.log(num," is not a 3-digit number");
    
}

5. Write a program to print even or odd for a given number?
const num=74;

if (num%2==0) {
    console.log(num," is a even  number");
} else {
    console.log(num," is a odd number");
    
}

6. Write a program to print the greatest number in given two numbers?
const num1=74;
const num2=233;

if (num1>num2) {
    console.log(num1," is greater number");
} else {
    console.log(num2," is greater number");
    
}

7. Write a program to print the least number given two numbers?
const num1=74;
const num2=233;

if (num1<num2) {
    console.log(num1," is smaller number");
} else {
    console.log(num2," is smaller number");
    
}

8. Write a program to print the greatest number in given three numbers?
const num1=714;
const num2=2322;
const num3=23;

if (num1>num2) {
    if(num1>num3)
    console.log(num1," is greatest number");
} 
else if( num2>num3){
    console.log(num2," is greatest number");
}
else{
    console.log(num3," is greatest number");
}

9. Write a program to print the least number in given three numbers?
const num1=43;
const num2=22;
const num3=3;

if (num1<num2) {
    if(num1<num3)
    console.log(num1," is the smallest number");
} 
else if( num2<num3 ){
    console.log(num2," is the smallest number");
}
else{
    console.log(num3," is the smallest number");
}

10. Write a program to print the given 3 numbers in ascending orders?
const num1=32;
const num2=42;
const num3=3;

if (num1<num2 && num1<num3) {
    if(num1<num3)
    console.log(num1); 
if(num2<num3)
    console.log(num2);
    console.log(num3);
} 
else if( num2<num3 && num2<num1){
    console.log(num2);
    if(num1<num3)
    {
        console.log(num1);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num1);
    }
}
else if( num3 < num1 && num3<num2){
        console.log(num3);
        if(num1<num2)
        {
            console.log(num1);
            console.log(num2);
        }
        else {
            console.log(num2);
            console.log(num1);
        }
    }
 11. Write a program to print the given 3 numbers in descending orders?
 const num1=32;
 const num2=42;
 const num3=3;
 
 if (num1>num2 && num1>num3) {
     console.log(num1); 
     if(num2>num3){
          console.log(num2);
          console.log(num3);    
        }
        else{
          console.log(num3);
          console.log(num2);    
        
      }
} 
else if( num2>num3 && num2>num1){
    console.log(num2);
    if(num1>num3)
    {
        console.log(num1);
        console.log(num3);
    }
    else {
        console.log(num3);
        console.log(num1);
    }
}
else if( num3 > num1 && num3>num2){
    console.log(num3);
    if(num1>num2)
    {
        console.log(num1);
        console.log(num2);
    }
    else {
        console.log(num2);
        console.log(num1);
    }
}
12. JS Program check if a number is divisible by 7 or not using a ternary operator?
const num =14;
let res=num%7==0? true :false;
if(res==true)
{
    console.log('number is divisible by 7');
}
else {
    console.log('number is not divisible by 7');
    
}

13. JS Program to check if a number is multiple of 3 or not using a ternary operator?
const num =13;
let res = num%3==0 ?true :false;
if (res==true) {
    console.log('number is a multiple of 3');
} else {
    console.log('number is not a multiple of 3');
    
}

14.  Write a program to check if a number is positive or not using a ternary operator?
const num=-2;
 let res= num>0 ? true : false ;
 if(res == true ){
     console.log(num,'is a  positive number');
    }
    else{
        console.log(num,'is a negative number');
    }
15. JS Program to check if a number is 3-digit numbers or not using a ternary operator?
const num=23;
let res =num/100>1 && num/1000<1 ?true :false;
if (res==true) {
    console.log(num,'is a three digit number');
} else {
    console.log(num,'is not a three digit number');
    
}

15. Write a program to print even or odd for a given number using a ternary operator?
const num=27;
let res=num%2==0 ?true:false;
if (res==true) {
    console.log(num,'is an even number');
} else {
    console.log(num,'is an odd number');
    
}
16. Write a program to print 1 to 10 numbers using a while loop
let  num=1;
while (num<=10) {
    console.log(num);
    num++;
    
}

17. Write a program to print 10 to 1 number using a while loop
let num=10;
while (num>=1) {
    console.log(num);
    num--;
}

18. Write a program to print 1 to 10 even numbers using a while loop
let num=1;
while (num<=10) {
    if(num%2==0){
        console.log(num);
    }
    num++
}
19. Write a program to print 1 to 10 even numbers using a while loop
let num=1;
while (num<=10) {
    if(num%2==1){
        console.log(num);
    }
    num++;
}

20. Write a program to print 1 to 100 numbers using a for loop
for (let i = 0; i <= 100; i++) {
    console.log(i);
    
}
21. Write a program to print 100  to 1 numbers using a for loop
for (let i = 1000; i >=1 100; i--) {
    console.log(i);
    
}

Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)
let num=1;
while (num<=10) {
    console.log(4,'*',num,'=',num*4);
    num++;
}

Write a program Factors of 24 using while loop
let num=1;
num1=32;
console.log('Factors of ',num1,' are :');
while(num<=num1){
    if(num1%num==0)
    console.log(num);
num++
}

Write a program to print reverse of digits of numbers
var num=12343;
var sum=0;
while(num>0){
    rem=num%10;
    sum=sum*10+rem;
    num=Math.floor(num/10);
}
console.log(sum);

 Write a program to print the Fibonacci number series up to a given number.
Expected out 17 -: 0 1 1 2 3 5 8 13
*/
let num=20,a=0,b=1;
console.log(a);
while(a<=num){
    console.log(b);
    b=a+b;
    a=b;
}