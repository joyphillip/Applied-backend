const mongoose = require('mongoose')


const usersSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, 'Please Provide Name']
    },
    email:{
        type: String,
        required: [true, "Please Provide Email"],
        unique: true,
    },
    password: { 
        type: String,
        required: [true, "Please Provide Password"],
    },
        

})



const Users = mongoose.model('Users', usersSchema);

module.exports = Users; 

