//singleton

//object literals
const sym = Symbol("key1")
const user={
    name:"neha",
    "full name":"neha panda",
    age:21,
    [sym]:"mykey1",
    location:"jalpaiguri",
    email:"neha123@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","sunday"]
}

console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(user[sym])

user.email="neha@google.com"
//Object.freeze(user)
//user.email="n123@google.com"
console.log(user);

user.greeting=function(){
    console.log("hello user");
}
user.greeting2=function(){
    console.log(`hello user,${this.name}`);
}
console.log(user.greeting());
console.log(user.greeting2());

