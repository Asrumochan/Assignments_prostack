arr=[{val: 2}, {val:5}, {val: 10}, {val:12}, {val: 22}];
obj={
    sum:0,
    avg:0
}
arr.reduce((acc,value)=>{
      acc.sum+=value.val;
        return acc;
},obj);

obj.avg = obj.sum/arr.length;
console.log(obj);