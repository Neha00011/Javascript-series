// let a = 10
// const b=20
// var c=30
//global scope

let a=300

if(true){
     let a = 10
     const b=20
     //console.log("INEER",a);
     //var c=30//will not discuss
     //local scope

}

//for(let i=0;i<Array.length;i++){
 //   const element = array[i];
//}

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username="neha"

    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);
    two()
}
//one()

if(true){
    const username="neha"
    if(username=="neha"){
        const website="youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



//**************//
console.log(addone(5));
function addone(num){
    return num+1
}
//addone(5)
//console.log(addtwo(5));
const addtwo=function(num){
    return num+2
}
addtwo(5)
