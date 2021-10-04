const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

//htpps://bcrypt-generator.com

const users = [{
    _id: 1,
    username: 'adm',
    password: '$2a$12$9MTffHtR5PG7/Cb1ESUsn.JJO3sgIRzg8rd9IwHi4xleQgLk5cILS',
    email: 'trouxa@gmail.com'
}]

function findUser(username){
    return users.find(item => item.username === username);
}

function findUserById(id) {
    return users.find(item => item.id === id);
}

module.exports = (passport) => {

// salva um cookie no front e uma sessão no hack
passport.serializaUser((user, done)=>{
    done(null,users._id);
})

//faz o caminho inverso do serializaUser
passport.deserializaUser((id, done)=>{
    try {
        const user = findUserById(id);
        done(null, user);

    } catch (error) {
        console.log(error);
        return done(error, null);
    }
})




}
