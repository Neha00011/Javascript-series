class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
         return `${this._password}neha`
    }
    set password(value){
        this._password=value.toUpperCase()
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
         this._email=value.toUpperCase()
    }
}

const neha= new User("neha","abc")
console.log(neha.password);
console.log(neha.email)
