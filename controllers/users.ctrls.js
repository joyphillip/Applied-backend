const db = require('../models')
const bcrypt = require('bcrypt')

// / POST ROUTE sign up
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
const login = (req, res) => {
  db.Users.findOne({ username: req.body.username
  }, (err, foundUser) => {
    if(err){
      res.send(err)
    } else {
      if (foundUser) {
        if (bcrypt.compareSync(req.body.password, foundUser.password)){
          req.session.currentUser = foundUser
          console.log('user has been logged in')
          res.status(200).json(foundUser)
        } else {
          res.status(404).json({
            error: 'Incorrect Password'
          })
        }
      } else{
        res.status(400).json({ error: err})
      }
    }
  })
}

// DELETE USER
const logout = (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({
      msg: 'users logged out'
    })
  })
}


// exports
module.exports = {
    signup,
    login,
    logout,
  }