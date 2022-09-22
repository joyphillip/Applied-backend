const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({

})


const Users = mongoose.model('Users', usersSchema);


// exports
module.exports = Users; 

