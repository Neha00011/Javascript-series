// const user={
//     username:"neha",
//     price:199,

//     welcome:function(){
//         console.log(`${this.username},welcome!!`);
        //console.log(this)
   // }
//}

 //user.welcome()
 //user.username="sikta"
 //user.welcome()

 //console.log(this);

 //function chai(){
    //let username="neha"
    //console.log(this.username);
 //}
//chai()

//const chai = function(){
   // let username="neha"
   // console.log(this.username);//undefined
//}

const chai = ()=>{
    let username="neha"
    console.log(this);
}

//chai()

//const addtwo = (num1,num2) => num1+num2//implicit return
// const addtwo = (num1,num2) =>{
//     return num1+num2
// }

const addtwo = (num1,num2) =>({username:"neha"})

console.log(addtwo(3,4))

const myarr =[2,3,4,5]
//myarr.forEach()


