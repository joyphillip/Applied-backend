const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    jobs: []
})


const Users = mongoose.model('Users', usersSchema);


// exports
module.exports = Users; 

