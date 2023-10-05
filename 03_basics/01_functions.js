function sayMyName(){
    console.log("n");
    console.log("e");
    console.log("h");
    console.log("a");
}
//sayMyName();

function add(num1,num2){
    //let result=num1+num2;
    //console.log(result);
    return num1+num2;
}

const result=add(3,5)
//console.log(result);

//add(2,3);
//add(3,"4");
//add(3,"a");

function login(username){
   // if(username===undefined){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(login("neha"))
// console.log(login(" "))//null
// console.log(login())//undefined

//rest operator
function calculateCartPrice(val1,val2,...num1){
       return num1
}

//console.log(calculateCartPrice(200,400,600,700,900))

const user={
    username:"neha",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)

//handleObject({
//    username:"neha",
 //   price:199
//})

const myArr = [200,300,400,500]
function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(myArr))