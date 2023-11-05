//const user = {
    //username:"neha",
    //loginCount:8,
    //signedIn:true,
    //getUserDetails:function(){
        //console.log("got user details")
        //console.log(`username:${this.username}`)
      //  console.log(this)
   // }
//}
//console.log(user.getUserDetails());
//console.log(this)

//const promiseOne=new Promise()
//const date=new Date()

function User(username,loginCount,isLoggedIn){
     this.username=username;
     this.loginCount=loginCount;
     this.isLoggedIn=isLoggedIn;
     this.greeting=function(){
        console.log(`welcome ${this.username}`);
     }
     return this
}

const userOne=new User("neha",5,true);
const userTwo=new User("chai",9,false);
console.log(userOne)
console.log(userOne.constructor);

