//array
//size not fixed,mixed data types
//zero based indexing
//deep copy:deep copy of an object whose properties donot share the same references
//swallo copy:opposite to deep copy i.e. share same reference

const myArr = [0,1,2,3,4,5]
const myHeros=["saktiman","naagraj"]
const myArr2=new Array(1,2,3,4)
//console.log(myArr[0]);

//array methods
//myArr.push(6)
//myArr.pop()

//myArr.unshift(9)
//myArr.shift()

//console.log(myArr.includes(9));
//console.log(myArr.includes(3));
//console.log(myArr.indexOf(4));
//console.log(myArr.indexOf(19));

//const newArr = myArr.join()
//console.log(newArr);//data type string

console.log("A ",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);

console.log("B ",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);

console.log("B ",myArr);



