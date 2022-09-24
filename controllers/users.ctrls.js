const db = require('../models')
const bcrypt = require('bcrypt')
// POST ROUTE sign up
const signup = (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))

  db.Users.create(req.body, (error, createdUser) => {
    if(error){
      res.status(400).json({
        error: error.message
      })
    } else {
      console.log('user has been registered')
      res.status(201).json(createdUser)
    }
  })
}

// USER LOGIN ROUTE (CREATE SESSION)


// DELETE USER



// exports
module.exports = {
    signup,
    login,
    logout,
  }