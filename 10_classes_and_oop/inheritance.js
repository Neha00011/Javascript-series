class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`a new course is added by ${this.username}`);
    }
}

const chai = new Teacher("chai","chai.fb.com","123");
console.log(chai.addCourse())

const masalachai=new User("masalachai");
console.log(masalachai.logMe())

console.log(chai===masalachai)
console.log(chai instanceof User)