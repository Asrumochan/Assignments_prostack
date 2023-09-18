const even_odd=function (arr) {
    arr.forEach(element => {
        if(element==0)
        {
            console.log(element + " is special number !");
        }
        else if(element%2==0)
        {
            console.log(element + " is even number !");
        }
        else
        {
            console.log(element + " is odd number !");
        }
    });
}

arr=[2,5,12,3,6,24,6,2,0];
even_odd(arr);