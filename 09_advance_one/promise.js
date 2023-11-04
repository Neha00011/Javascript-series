const promiseOne = new Promise(function(resolve,reject){
    //do async task
    //db calls,cryptography,networkcall
    setTimeout(function(){
      // console.log("task is complete");
       resolve()
    },1000)
})
promiseOne.then(function(){
   //console.log("promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        //console.log("hiiii");
        resolve()
    },1000)
}).then(function(){
   // console.log("task done");
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"neha",email:"12jhhzid@exm.com"})
    },1000)
})
promiseThree.then(function(user){
     //console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
          let error=true
          if(!error){
            resolve({username:"neha",password:"123"});
          }else{
            reject('ERROR')
          }
    },1000)
})

promiseFour.then((user)=>{
   // console.log(user);
    return user.username
}).then((username)=>{
      //console.log(username);
}).catch(function(error){
   // console.log(error);
}).finally(()=>console.log("either rejected or resolved"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
          resolve({username:"neha",password:"12345"});
        }else{
          reject('ERROR:JS went wrong')
        }
  },1000)
});

async function consume(){
   try{const response = await promiseFive
    console.log(response);
   }catch(error){
       console.log(error)
   }
} 

consume()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))