//const Fbuser = new Object() //singleton object
const Fbuser={} //non-singleton object
Fbuser.id="123abc"
Fbuser.name="sammy"
Fbuser.isLoggedIn=false

//console.log(Fbuser)

const Instauser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstname:"neha",
            lastname:"panda"
        }
    }
}
// console.log(Instauser);
// console.log(Instauser.fullname);
// console.log(Instauser.fullname.username);
// console.log(Instauser.fullname.username.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}
const obj4={
    5:"e",
    6:"f"
}

//const obj3=Object.assign(obj1,obj2)
//const obj3=Object.assign({},obj1,obj2)
//const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}//spread operator
//console.log(obj3);

const users = [
    {
        id:1,
        email:"n@google.com"
    },
    {
        id:2,
        email:"e@google.com"
    },
    {
        id:3,
        email:"h@google.com"
    },
    {
        id:4,
        email:"a@google.com"
    },
]
//console.log(users[1].email);
// console.log(Fbuser);
// console.log(Object.keys(Fbuser));
// console.log(Object.values(Fbuser));
// console.log(Object.entries(Fbuser));

// console.log(Fbuser.hasOwnProperty('name'))

const course = {
    coursename:"chai aur js",
    price:"999",
    instructor:"hitesh"
}
//object destructure
const {instructor:ins} = course
console.log(ins);