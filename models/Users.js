const mongoose = require('mongoose')
const jwt= require("jsonwebtoken")
const Joi= require("joi")
const passwordComplexity= require("joi-password-complexity")

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

userSchema.methods.generateAuthToken= function(){
    const token=jwt.sign({_id:this_id._id}, process.env.JWTPRIVATEKEY,{expiresIn: "7d"});
    return token
}

const Users = mongoose.model('Users', usersSchema);

const validate = (data) => {
    const schema = Joi.object({
        username:Joi.string().required().label("Username"),
        password: passwordComplexity().required().label("Password")
    })
    return schema.validate(data)
}

// exports
module.exports = {Users, validate}; 

