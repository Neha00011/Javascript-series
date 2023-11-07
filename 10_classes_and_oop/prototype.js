// const myName="Neha"
// console.log(myName.length);

// let myHeros=["thor","spiderman"];
// let heroPower={
//     thor:"hammer",
//     spiderman:"sling",
//     getSpiderPower:function(){
//         console.log(`spider power is ${this.spiderman}`);
//     }
// }

// Object.prototype.something=function(){
//     console.log(`function 1`)
// }
// Array.prototype.something2=function(){
//     console.log(`function 2`)
// }

// //heroPower.something2();
// myHeros.something2();

//inheritance

// const USer={
//     name:"neha",
//     email:"doklng@jjuko.com"
// }

// const Teacher={
//     makeVideo:true
// }

// const TeachingSupport={
//     isAvailable:false
// }

// const TASupport={
//     makeAssignment:"js assignment",
//     fullTime:true,
//     __proto__:TeachingSupport
// }

// Teacher.__proto__=UserActivation

// //modern syntax

// Object.setPrototypeOf(TeachingSupport,Teacher);

 let anotherUsername="cahi   "
 String.prototype.trueLength=function(){
    console.log(`true length is ${this.trim().length}`);
}

 anotherUsername.trueLength()