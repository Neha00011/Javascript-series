const User={
    _email:"n@n.com",
    _password:"abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        return this_email=value
    }
}

const tea=Object.create(User)
console.log(tea.email);