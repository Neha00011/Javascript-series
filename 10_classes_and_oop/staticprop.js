class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static creatId(){
        return `123`
    }
}

const neha=new User("neha")
console.log(neha.creatId())

class teacher extends User{
    constructor (username,email){
        super(username)
        this.email=email;
    }
}

const iphone=new teacher("iphone","iphone@fb.com");
iphone.logMe();
