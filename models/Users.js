const mongoose = require('mongoose')
// import validator from "validator"


const usersSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: [true, 'Please Provide Name']
    },
    email:{
        type: String,
        required: [true, "Please Provide Email"],
        // validate: {
        //     validator: validator.isEmail,
        //     message: "Please provide a valid email",
        // },
        unique: true,
    },
    password: { 
        type: String,
        required: [true, "Please Provide Password"],
        minlength: 6
    },
        

})



const Users = mongoose.model('Users', usersSchema);

module.exports = Users; 

